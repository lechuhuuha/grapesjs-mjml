CKEDITOR.dialog.add('spanDialog', function (editor) {
    return {
        title: 'Palavras Reservadas',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'select',
                        id: 'span',
                        label: 'Reserved Words Available',
                        items: [['example 1', '#exanple1#'], ['example 2', '#example2#']],
                        validate: CKEDITOR.dialog.validate.notEmpty("Field can not be empty."),
                        setup: function (a) {
                            this.setValue(a.getAttribute("value") || "")
                        }
                    }
                ]
            }
        ],
        setup: function (element) {
            var selection = editor.getSelection();
            var element = selection.getStartElement();

            if (element)
                element = element.getAscendant('span', true);

            if (!element || element.getName() != 'span') {
                element = editor.document.createElement('span');
                this.insertMode = true;
            }
            else
                this.insertMode = false;

            this.element = element;
            if (!this.insertMode)
                this.setupContent(this.element);
        },
        onOk: function () {
            var dialog = this;
            var abbr = this.element;
            this.commitContent(abbr);

            if (this.insertMode)
                editor.insertElement(abbr);
        }
    };
});