import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '..';
import { mjmlConvert } from '../components/utils';
import openExportMjml from './openExportMjml';
import openImportMjml from './openImportMjml';

export const cmdDeviceDesktop = 'set-device-desktop';
export const cmdDeviceTablet = 'set-device-tablet';
export const cmdDeviceMobile = 'set-device-mobile';
export const cmdImportMjml = 'mjml-import';
export const cmdExportMjml = 'mjml-export';
export const cmdGetMjml = 'mjml-code';
export const cmdGetMjmlToHtml = 'mjml-code-to-html';
export const cmdConvertMjmlToHtml = 'ema-mjml-to-html';

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Commands } = editor;
  const cmdOpenExport = opts.overwriteExport ? 'export-template' : cmdExportMjml;

  Commands.add(cmdGetMjml, () => {
      return `${opts.preMjml}${editor.getHtml().trim()}${opts.postMjml}`;
  });

  Commands.add(cmdGetMjmlToHtml, (ed, _, opt) => {
      const mjml = Commands.run(cmdGetMjml);
      return mjmlConvert(mjml, opts.fonts, opt);
  });
  Commands.add(cmdConvertMjmlToHtml, (ed, _, opt: Record<string, any> = {}) => {
    return mjmlConvert(opt.mjmlCode, opts.fonts, opt);
  });
  openExportMjml(editor, opts, cmdOpenExport);
  openImportMjml(editor, opts, cmdImportMjml);

  // Device commands
  Commands.add(cmdDeviceDesktop, {
    run: ed => ed.setDevice('Desktop'),
    stop: () => {},
  });
  Commands.add(cmdDeviceTablet, {
    run: ed => ed.setDevice('Tablet'),
    stop: () => {},
  });
  Commands.add(cmdDeviceMobile, {
    run: ed => ed.setDevice('Mobile portrait'),
    stop: () => {},
  });

};
