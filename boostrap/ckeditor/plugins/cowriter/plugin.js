// Add CKeditor 4 dialog plugin with one input field "cowriter" which add text from openai api.
CKEDITOR.dialog.add('cowriterDialog', function (editor) {

    // Settings
    var select_model = 'text-curie-001' || CKEDITOR.dialog.getCurrent().getValueOf('tab-advanced', 'model')
    var select_max_tokens = 1000 || CKEDITOR.dialog.getCurrent().getValueOf('tab-advanced', 'max_tokens')

    return {
        title: 'Cowriter',
        minWidth: 400,
        minHeight: 70,
        contents: [
            {
                id: 'tab-basic',
                label: editor.lang.cowriter.tabGeneral || 'General',
                accessKey: 'C',
                elements: [
                    {
                        type: 'textarea',
                        id: 'cowriter',
                        label: editor.lang.cowriter.writeAbout || 'Chủ đề bạn muốn viết?',
                        rows: 6,
                        validate: CKEDITOR.dialog.validate.notEmpty(editor.lang.cowriter.errorNotEmpty),
                        setup: function (element) {
                            this.setValue(element.getText())
                        },
                        commit: function (element) {
                            // Show loading animation
                            element.setText(' Đang tạo … ')

                            // Use XMLHttpRequest to get the text from openai api.
                            var xhr = new XMLHttpRequest()
                            xhr.open('POST', 'http://103.56.163.62:18000/api/ai', true)
                            xhr.setRequestHeader('Content-Type', 'application/json')


                            // Set the authorization header with your API key.
                            // xhr.setRequestHeader('Authorization', 'Bearer ' + "api-key")
                            // xhr.setRequestHeader('OpenAI-Organization', OPENAI_ORG)
                            // if(select_max_tokens > 1000){
                            //     select_max_tokens = 1000
                            // }
                            // Send the request and set status to element in editor.
                            xhr.send(JSON.stringify({
                                content: this.getValue(), // Text to complete
                                // max_tokens: select_max_tokens, // 1 to 1000
                                // model: select_model, // 'text-davinci-003', 'text-curie-001', 'text-babbage-001', 'text-ada-001'
                                // temperature: 0.9, // 0.0 is equivalent to greedy sampling
                                // top_p: 1, // 1.0 is equivalent to greedy sampling
                                // n: 1, // Number of results to return
                                // frequency_penalty: 0, // 0.0 is equivalent to no penalty
                                // presence_penalty: 0, // 0.0 is equivalent to no penalty
                            }))

                            xhr.onreadystatechange = function () {
                                if (this.readyState === 4) {
                                    if (this.status === 200) {
                                        // Set text from openai api to element in editor if it is not empty.
                                        if (JSON.parse(this.responseText).data.question)
                                            element.setText(JSON.parse(this.responseText).data.question)
                                        else
                                            element.setText(' Error: ' + JSON.parse(this.responseText).message)
                                    } else {
                                        element.setText(' Error: ' + this.responseText)
                                    }
                                }
                            }

                            // Catch error if openai api is not available.
                            xhr.onerror = function () {
                                element.setText(' Error: ' + this.responseText)
                            }


                        }
                    },
                ]
            },
            {
                id: 'tab-advanced',
                label: editor.lang.cowriter.tabAdvanced || 'Advanced',
                elements: [
                    // Add select field with options to choose the model from openai api.
                    {
                        type: 'select',
                        id: 'model',
                        title: editor.lang.cowriter.modelSelction || 'Model',
                        label: editor.lang.cowriter.modelSelctionHelp || 'Model',
                        default: 'text-curie-001',
                        items: [
                            ['Davinci', 'text-davinci-003'],
                            ['Curie', 'text-curie-001'],
                            ['Babbage', 'text-babbage-001'],
                            ['Ada', 'text-ada-001']
                        ],
                        setup: function (element) {
                            this.setValue(element.getText())
                        }
                    },
                    // Add input range field to enter the text length.
                    {
                        type: 'text',
                        inputStyle: 'width: 50px',
                        id: 'max_tokens',
                        label: editor.lang.cowriter.howManyWords || 'How many words do you want?',
                        default: select_max_tokens,
                        validate: function () {return CKEDITOR.dialog.validate.regex(/^[1-9][0-9]{0,2}$/, editor.lang.cowriter.errorNotBetween)},
                        setup: function (element) {
                            // Set type to number
                            element.setAttribute('title', 'number')
                            element.setAttribute('max', '1000')
                            element.setAttribute('min', '1')
                            element.setAttribute('type', 'number')
                            this.setValue(element.getText())
                        },
                        commit: function (element) {
                            element.setAttribute('type', 'number')
                        }
                    },

                ]
            }
        ],
        onOk: function () {
            var dialog = this
            var cowriter = editor.document.createElement('cowriter')
            dialog.commitContent(cowriter)
            editor.insertElement(cowriter)
        }
    }
})

// Add CKeditor 4 button plugin.
CKEDITOR.plugins.add('cowriter', {
    icons: 'cowriter',
    lang: ['en', 'de'],
    init: function (editor) {
        editor.addCommand('cowriter', new CKEDITOR.dialogCommand('cowriterDialog'))
        editor.ui.addButton('Cowriter', {
            label: 'Co-Writer',
            command: 'cowriter',
            toolbar: 'insert',
            icon: this.path + 'icons/cowriter-logo.png'
        })
    }
})

// Add CKeditor 4 button shortcut "ALT + C".
CKEDITOR.config.keystrokes = [
    [CKEDITOR.ALT + 67, 'cowriter']
]
