CKEDITOR.plugins.add('span', {
    icons: 'span',
    init: function (editor) {
        editor.addCommand('span', new CKEDITOR.dialogCommand('spanDialog'));
        editor.ui.addButton('Span', {
            label: 'Insert Reserved Word',
            command: 'span',
            toolbar: 'insert'
        });
        CKEDITOR.dialog.add('spanDialog', this.path + 'dialogs/span.js');
    }
});
