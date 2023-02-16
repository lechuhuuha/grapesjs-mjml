import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '.';

export default (editor: grapesjs.Editor, opt: RequiredPluginOptions) => {

  if (opt.resetStyleManager) {
    editor.onReady(() => {
      const sectors = editor.StyleManager.getSectors();

      sectors.reset();
      sectors.add([{
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding', 'vertical-align'],
        properties: [{
          property: 'margin',
          properties: [
            { name: 'Top', property: 'margin-top' },
            { name: 'Right', property: 'margin-right' },
            { name: 'Bottom', property: 'margin-bottom' },
            { name: 'Left', property: 'margin-left' }
          ],
        }, {
          property: 'padding',
          detached: false,
          defaults: "0 0 0 0",
          properties: [
            { name: 'Top', property: 'padding-top' },
            { name: 'Right', property: 'padding-right' },
            { name: 'Bottom', property: 'padding-bottom' },
            { name: 'Left', property: 'padding-left' }
          ],
        }, {
          property: 'icon-padding',
          type: 'integer',
          defaults: '4px',
          units: ['px', '%']
        },
        {
          property: 'icon-size',
          type: 'integer',
          defaults: '20px',
          units: ['px', '%']
        }, {
          property: 'vertical-align',
          type: 'select',
          list: [
            { value: 'top' },
            { value: 'middle' },
            { value: 'bottom' },
          ]
        }],
      }, {
        name: 'Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'align', 'text-decoration', 'font-style'],
        properties: [
          {
            name: 'Font',
            property: 'font-family',
            list: [
              { name: 'Times New Roman', value: 'Times New Roman, Times, serif' },
              { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
              { name: 'Helvetica', value: 'Helvetica, sans-serif' },
              { name: 'Courier New', value: 'Courier New, Courier, monospace' },
              { name: 'Georgia', value: 'Georgia, serif' },
              { name: 'Century Gothic', value: 'Century Gothic' },
              { name: 'Garamond', value: 'Garamond' },
              { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
              { name: 'Lucida', value: 'Lucida Sans Unicode, Lucida Grande, sans-serif' },
              { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
              { name: 'Trebuchet MS', value: 'Trebuchet MS, Helvetica, sans-serif' },
              { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
            ],
            options: [
              // @notes: email-font only
              { name: 'Times New Roman', value: 'Times New Roman, Times, serif' },
              { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
              { name: 'Helvetica', value: 'Helvetica, sans-serif' },
              { name: 'Courier New', value: 'Courier New, Courier, monospace' },
              { name: 'Georgia', value: 'Georgia, serif' },
              { name: 'Century Gothic', value: 'Century Gothic' },
              { name: 'Garamond', value: 'Garamond' },
              { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
              { name: 'Lucida', value: 'Lucida Sans Unicode, Lucida Grande, sans-serif' },
              { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
              { name: 'Trebuchet MS', value: 'Trebuchet MS, Helvetica, sans-serif' },
              { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
            ]
          },
          { name: 'Weight', property: 'font-weight' },
          { name: 'Font color', property: 'color' },
          {
            property: 'text-align',
            type: 'radio',
            defaults: 'left',
            list: [
              { value: 'left', name: 'Left', className: 'fa fa-align-left' },
              { value: 'center', name: 'Center', className: 'fa fa-align-center' },
              { value: 'right', name: 'Right', className: 'fa fa-align-right' },
              { value: 'justify', name: 'Justify', className: 'fa fa-align-justify' }
            ],
          }, {
            property: 'align',
            type: 'radio',
            defaults: 'left',
            list: [
              { value: 'left', name: 'Left', className: 'fa fa-align-left' },
              { value: 'center', name: 'Center', className: 'fa fa-align-center' },
              { value: 'right', name: 'Right', className: 'fa fa-align-right' },
              { value: 'justify', name: 'Justify', className: 'fa fa-align-justify' }
            ],
          }, {
            property: 'text-decoration',
            type: 'radio',
            defaults: 'none',
            list: [
              { value: 'none', name: 'None', className: 'fa fa-times' },
              { value: 'underline', name: 'underline', className: 'fa fa-underline' },
              { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough' }
            ],
          }, {
            property: 'text-transform',
            type: 'select',
            list: [
              { value: '' },
              { value: 'uppercase' },
              { value: 'lowercase' },
              { value: 'capitalize' },
            ]
          },
          {
            property: 'font-style',
            type: 'radio',
            defaults: 'normal',
            list: [
              { value: 'normal', name: 'Normal', className: 'fa fa-font' },
              { value: 'italic', name: 'Italic', className: 'fa fa-italic' }
            ],
          }],
      }, {
        name: 'Decorations',
        open: false,
        buildProps: ['background-color', 'container-background-color', 'background-url', 'background-repeat',
          'background-size', 'border-radius', 'border', 'background-width'],
        properties: [{
          name: 'Background color',
          property: 'container-background-color',
          type: 'color',
        }, {
          property: 'background-url',
          type: 'file',
        },
        {
          name: 'Background color',
          property: 'inner-background-color',
          type: 'color',
        }, {
          name: 'Border radius',
          property: 'inner-border-radius',
          type: 'integer',
          defaults: '0px',
          units: ['px', '%']
        },
        {
          name: 'Background position',

          property: 'background-position',
          type: 'select',
          list: [
            { value: 'top center' },
            { value: 'top left' },
            { value: 'top right' },
            { value: 'center left' },
            { value: 'center center' },
            { value: 'center right' },
            { value: 'bottom left' },
            { value: 'bottom center' },
            { value: 'bottom right' },
          ]
        },
        {
          property: 'border-radius',
          type: 'integer',
          defaults: '0px',
          units: ['px', '%']
        },
        {
          property: 'background-width',
          type: 'integer',
          defaults: '600px',
          units: ['px', '%']
        }, {
          property: 'border-detached',
          name: 'Border detached',
          type: 'composite',
          detached: true,
          properties: [
            { name: 'Width', property: 'border-width', type: 'integer', units: ['px', '%'] },
            {
              name: 'Style', property: 'border-style', type: 'select',
              list: [
                { value: 'none' },
                { value: 'solid' },
                { value: 'dotted' },
                { value: 'dashed' },
                { value: 'double' },
                { value: 'groove' },
                { value: 'ridge' },
                { value: 'inset' },
                { value: 'outset' }
              ]
            },
            { name: 'Color', property: 'border-color', type: 'color' },
          ],
        }],
      },
      ]);
    });
  }

};
