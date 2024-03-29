// Specs: https://documentation.mjml.io/#mjml-social
import type { Editor } from 'grapesjs';
import { componentsToQuery, getName, isComponentType } from './utils';
import { type as typeColumn } from './Column';
import { type as typeHero } from './Hero';
import { type as typeSocialElement } from './SocialElement';

export const type = 'mj-social';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: any) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),

    model: {
      ...coreMjmlModel,
      defaults: {
        name: getName(editor, 'socialGroup'),
        draggable: componentsToQuery([typeColumn, typeHero]),
        droppable: componentsToQuery(typeSocialElement),
        stylable: [
          'icon-size', 'align',
          'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
          'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
          'container-background-color',
          'icon-padding',
        ],
        'style-default': {
          'align': 'center',
          'icon-size': '20px',
          'mode': 'horizontal'
        },
        //@note : when user need this i will comeback and review its bc right now mode not working for socialElement
        // issues : https://github.com/artf/grapesjs-mjml/issues/125
        // done : check file initGrapesjs.js line editor.TraitManager.addType('mode'
        // traits: [
        //   {
        //     type: 'select',
        //     label: 'Mode',
        //     name: 'mode',
        //     options: [
        //       { value: 'horizontal', name: 'Horizontal' },
        //       { value: 'vertical', name: 'Vertical' },
        //     ]
        //   }
        // ],
      },
    },

    view: {
      ...coreMjmlView,
      tagName: 'tr',
      attributes: {
        style: 'display: table; width: 100%',
      },

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-body><mj-column>`,
          end: `</mj-column></mj-body></mjml>`,
        };
      },

      getTemplateFromEl(sandboxEl: any) {
        return sandboxEl.querySelector('tr').innerHTML;
      },

      getChildrenSelector() {
        return 'td';
      },

      rerender() {
        coreMjmlView.rerender.call(this);
        this.model.components().models.forEach((item: any) => {
          if (item.attributes.type !== typeSocialElement) {
            return;
          }
          item.view.rerender();
        });
      },

      init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove update', this.render);
      },
    }
  });
};
