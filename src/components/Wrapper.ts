// Specs: https://documentation.mjml.io/#mjml-wrapper
import type { Editor } from 'grapesjs';
import { componentsToQuery, getName, isComponentType } from './utils';
import { type as typeBody } from './Body';
import { type as typeSection } from './Section';

export const type = 'mj-wrapper';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: any) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),

    model: {
      ...coreMjmlModel,
      defaults: {
        name: getName(editor, 'wrapper'),
        draggable: componentsToQuery(typeBody),
        droppable: componentsToQuery(typeSection),
        'style-default': {
          'padding': '20px 0',
        },
        stylable: [
          'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
          'background-color', 'background-url', 'background-repeat', 'background-size',
          'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
          'border', 'border-width', 'border-style', 'border-color'
        ],
        traits: [
          'id',
          'title',
          {
            type: 'full-width',
            label: 'Full width',
          }
        ],
      },
    },

    view: {
      ...coreMjmlView,
      tagName: 'div',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%',
      },

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-body>`,
          end: `</mj-body></mjml>`,
        };
      },

      getChildrenSelector() {
        if (this.model.getAttributes()['full-width'] && this.model.getAttributes()['background-url']) {
          return 'table > tbody > tr > td > div > div > table > tbody > tr > td';
        } else if (this.model.getAttributes()['full-width']) {
          return 'table > tbody > tr > td > div > table > tbody > tr > td';

        }
        else
          return 'table > tbody > tr > td';
      },

      init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove', () => {
          this.getChildrenContainer().innerHTML = this.model.get('content')!;
          this.renderChildren();
        });
      },
    }
  });
};
