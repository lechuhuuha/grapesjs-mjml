// Specs: https://documentation.mjml.io/#mj-image
import type grapesjs from 'grapesjs';
import { componentsToQuery, getName, isComponentType } from './utils';
import { type as typeSection } from './Section';
import { type as typeColumn } from './Column';
import { type as typeHero } from './Hero';
import { debounce } from './utils';
import moment from 'moment';
export const type = 'mj-timer';

export default (editor: grapesjs.Editor, { coreMjmlModel, coreMjmlView }: any) => {
  editor.Components.addType(type, {
    isComponent: customIsComponentType(type),
    extend: 'image',
    model: {
      ...coreMjmlModel,
      defaults: {
        editable: false,
        resizable: false,
        highlightable: false,
        name: 'Timer',
        draggable: componentsToQuery([typeSection, typeColumn, typeHero]),
        stylable: [
          'width', 'height',
          'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
          'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
          'border', 'border-width', 'border-style', 'border-color',
          'container-background-color', 'align',
        ],
        'style-default': {
          'padding': '0px 0px 0px 0px',
          'align': 'center'
        },
        traits: [{
          label: 'Ngày kết thúc',
          name: 'des',
          type: 'date',
          // changeProp: true
        }, {
          label: 'Hiển thị ngày tháng',
          name: 'showtextlabel',
          type: 'checkbox',
          valueTrue: 'true', // Value to assign when is checked, default: `true`
          valueFalse: 'false', // Value to assign when is unchecked, default: `false`
        },
        {
          label: 'Hiển thị vòng tròn',
          name: 'showcircle',
          type: 'checkbox',
          valueTrue: 'true', // Value to assign when is checked, default: `true`
          valueFalse: 'false', // Value to assign when is unchecked, default: `false`
        },
        {
          label: "Nền",
          name: "timerbgcolor",
          type: "timer-color"
        }, {
          label: "Màu chữ",
          name: "timertextcolor",
          type: "timer-color"
        }, {
          label: "Font chữ",
          name: "timerfont",
          type: "select",
          options: [ // Array of options
            { name: 'Arial', value: 0 },
            { name: 'Comic', value: 1 },
            { name: 'Courier', value: 2 },
            { name: 'Helvetica', value: 3 },
            { name: 'Lucida-sans-unicode', value: 4 },
            { name: 'OpenSans', value: 5 },
            { name: 'Roboto', value: 6 },
            { name: 'Tahoma', value: 7 },
            { name: 'Times-new-roman', value: 8 },
            { name: 'Trebucket', value: 9 },
            { name: 'Verdana', value: 10 },
            { name: 'Wallpoet-Regular', value: 11 },

          ]
        }
        ],
        void: false,
      },
      init() {
        const attrs = { ...this.get('attributes') };
        const style = { ...this.get('style-default'), ...this.get('style') };
        for (let prop in style) {
          if (!(prop in attrs)) {
            attrs[prop] = style[prop];
          }
        }
        var url = new URL(attrs.src);
        if (url.search) {
          var urlPart = url.href.split("?")[1].split('&')
          urlPart.forEach(part => {
            var analyzePart = part.split('=')
            switch (analyzePart[0]) {
              case 'des':
                attrs.des = analyzePart[1]
                break;
              case 'timerfont':
                attrs.timerfont = analyzePart[1]
                break;
              case 'showtextlabel':
                attrs.showtextlabel = analyzePart[1]
                break;
              case 'showcircle':
                attrs.showcircle = analyzePart[1]
                break;
              case 'timerbgcolor':
                attrs.timerbgcolor = decodeURIComponent(analyzePart[1])
                break;
              case 'timertextcolor':
                attrs.timertextcolor = decodeURIComponent(analyzePart[1])
                break;
              default:
                break;
            }
          });
        }

        if (attrs.des == undefined || attrs.timerfont == null) {
          attrs.des = moment().add(1, 'days').format("Y-M-D")
        }

        if (attrs.timerfont == undefined || attrs.timerfont == null) {
          attrs.timerfont = 0
        }

        if (attrs.showtextlabel == undefined || attrs.showtextlabel == null) {
          attrs.showtextlabel = "true"
        }

        if (attrs.showcircle == undefined || attrs.showcircle == null) {
          attrs.showcircle = "true"
        }

        if (attrs.timerbgcolor == undefined || attrs.timerbgcolor == null) {
          attrs.timerbgcolor = "#ffffff"
        }

        if (attrs.timertextcolor == undefined || attrs.timertextcolor == null) {
          attrs.timertextcolor = "#000000"
        }
        attrs.timerbgcolor = decodeURIComponent(attrs.timerbgcolor)
        attrs.timertextcolor = decodeURIComponent(attrs.timertextcolor)
        var connector = '&'
        var urlParams = '?des=' + attrs.des + connector
          + 'showtextlabel=' + attrs.showtextlabel + connector
          + 'showcircle=' + attrs.showcircle + connector
          + 'timerbgcolor=' + encodeURIComponent((attrs.timerbgcolor)) + connector
          + 'timertextcolor=' + encodeURIComponent((attrs.timertextcolor)) + connector
          + 'timerfont=' + attrs.timerfont

        var buildUrl = url.protocol + '//' + url.hostname + url.pathname + urlParams
        attrs.src = buildUrl
        this.set('attributes', attrs);
        this.set('style', attrs);
        this.listenTo(this, 'change:style', this.handleStyleChange);
        this.listenTo(this, 'change:attributes', this.handleAttributeChange);

      },

    },

    view: {
      ...coreMjmlView,
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%; user-select: none;',
      },

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-body width="auto"><mj-column>`,
          end: `</mj-column></mj-body></mjml>`,
        };
      },

      getTemplateFromEl(sandboxEl: any) {
        return sandboxEl.querySelector('tr').innerHTML;
      },

      getChildrenSelector() {
        return 'img';
      },
      init() {
        this.stopListening(this.model, 'change:style');
        this.debouncedRender = debounce(this.render.bind(this), 0);
        this.listenTo(this.model, 'change:attributes change:des', this.testChange);
      },
      testChange(el: any) {

        const attrs = { ...editor.getSelected()?.getAttributes() };
        // return;

        var url = new URL(attrs.src);

        if (!attrs.des) {
          attrs.des = moment().add(1, 'days').format("Y-M-D")
        }

        if (attrs.timerfont == undefined || attrs.timerfont == null) {
          attrs.timerfont = 0
        }

        if (attrs.showtextlabel == undefined || attrs.showtextlabel == null) {
          attrs.showtextlabel = "true"
        }

        if (attrs.showcircle == undefined || attrs.showcircle == null) {
          attrs.showcircle = "true"
        }

        if (attrs.timerbgcolor == undefined || attrs.timerbgcolor == null) {
          attrs.timerbgcolor = "#ffffff"
        }

        if (attrs.timertextcolor == undefined || attrs.timertextcolor == null) {
          attrs.timertextcolor = "#000000"
        }

        attrs.timerbgcolor = decodeURIComponent(attrs.timerbgcolor)
        attrs.timertextcolor = decodeURIComponent(attrs.timertextcolor)
        var connector = '&'
        var urlParams = '?des=' + attrs.des + connector
          + 'showtextlabel=' + attrs.showtextlabel + connector
          + 'showcircle=' + attrs.showcircle + connector
          + 'timerbgcolor=' + encodeURIComponent((attrs.timerbgcolor)) + connector
          + 'timertextcolor=' + encodeURIComponent((attrs.timertextcolor)) + connector
          + 'timerfont=' + attrs.timerfont

        var buildUrl = url.protocol + '//' + url.hostname + url.pathname + urlParams
        attrs.src = buildUrl
        el.attributes.src = buildUrl
        this.rerender()
      }
    },

  });
};

function customIsComponentType(type: string) {
  return function (el: Element) {
    if (el.attributes !== undefined) {
      if (el.attributes.getNamedItem('data-timer')?.value == 'true') {
        return true
      }
    }
    return false
  };
}