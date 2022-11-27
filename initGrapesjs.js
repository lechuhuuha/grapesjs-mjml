
url_string = (window.location.href)
var url = new URL(url_string);
var c = url.searchParams.get("uid");
var templateUId = c

// remove format when user paste text 
CKEDITOR.config.forcePasteAsPlainText = true
CKEDITOR.config.pasteFromWordRemoveStyles = true
CKEDITOR.config.pasteFromWordRemoveFontStyles = true

// Set up GrapesJS editor with the MJML plugin
var editor = grapesjs.init({
    layerManager: {
        appendTo: '.layers-container'
    },
    storageManager: {
        autosave: true, // Store data automatically
        local: {
            key: `gjsProject-${templateUId}`,
            // If enabled, checks if browser supports LocalStorage
            checkLocal: true,
        },
    },
    assetManager: {
        assets: images,
        upload: "https://appv4.zozo.vn/mjml-test/uploadTemplateAssets/" + templateUId,
        uploadName: 'file',
        credentials: 'omit', // The credentials setting for the upload request, eg. 'include', 'omit'
        multiUpload: false,
        autoAdd: 1,
    },
    container: '#gjs',
    // fromElement: true,

    // Usually when you update the `style` of the component this changes the
    // element's `style` attribute. Unfortunately, inline styling doesn't allow
    // use of media queries (@media) or even pseudo selectors (eg. :hover).
    // When `avoidInlineStyle` is true all styles are inserted inside the css rule
    // @deprecated Don't use this option, we don't support inline styling anymore
    avoidInlineStyle: false,

    // Show paddings and margins
    showOffsets: true,

    // Show paddings and margins on selected component
    showOffsetsSelected: true,

    // Height for the editor container
    height: '600px',

    plugins: ['grapesjs-mjml',
        'gjs-plugin-ckeditor'
    ],
    pluginsOpts: {
        'grapesjs-mjml': {
            i18n: {
                locale: 'en', // default locale
            }
        },
        'gjs-plugin-ckeditor': {
            position: 'center',
            options: {
                language: "vn",
                removeButtons: "",
                "format_tags": "p;h1;h2;h3;h4;h5;h6;pre",
                startupFocus: true,
                extraAllowedContent: '*(*);*{*}', // Allows any class and any inline style
                allowedContent: true, // Disable auto-formatting, class removing, etc.
                enterMode: CKEDITOR.ENTER_BR,
                extraPlugins: 'emoji,colorbutton,colordialog',
                toolbar: [
                    ['Bold', 'Italic', 'Underline', 'Strike'],
                    { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
                    { name: 'links', items: ['Link', 'Unlink'] },
                    { name: 'colors', items: ['TextColor', 'BGColor'] },
                    // here why we need to call its like this https://stackoverflow.com/questions/66364640/ckeditor-cant-install-emoji-plugin
                    { name: 'insert', items: ['SpecialChar','EmojiPanel'] },
                ],
            }
        }
    },
});

// fix the bug where ckeditor toolbar cover the whole block
CKEDITOR.on('instanceReady', function (e) {
    editor.RichTextEditor.updatePosition();
    editor.on("rte:enable", () => {
        (editor.trigger('frame:scroll'));
    });
});


function overrideCustomRteDisable() {
    const richTextEditor = editor.RichTextEditor;

    if (!richTextEditor) {
        throw new Error('No RichTextEditor found');
    }

    if (richTextEditor.customRte) {
        richTextEditor.customRte.disable = (el, rte) => {
            el.contentEditable = false;
            if (rte && rte.focusManager) {
                rte.focusManager.blur(true);
            }

            rte.destroy(true);
        }
    }
};

// fix the bug when you edit with style manager and then can not use ckeditor
// issues : https://github.com/artf/grapesjs-mjml/issues/193
overrideCustomRteDisable()


// remove all format when user paste text to avoid error when editing
var iframeBody = editor.Canvas.getBody();
$(iframeBody).on("paste", '[contenteditable="true"]', function (e) {
    e.preventDefault();
    var text = e.originalEvent.clipboardData.getData('text');
    e.target.ownerDocument.execCommand("insertText", false, text);
});


// fix the bug where ckeditor not update position when user hit enter
CKEDITOR.on('instanceCreated', function (e) {
    e.editor.on('change', function (event) {
        (editor.trigger('frame:scroll'));
    });
});

// lấy ảnh trong template,campaign hoặc automation
var images
fetch('https://appv4.zozo.vn/mjml-test/getpathImagesTest')
    .then((response) => { return response.json() }).then((text) => {
        images = text

        for (let i = 0; i < images.length; i++) {
            editor.AssetManager.add(images[i]);
        }
    })

// add ảnh vào asset manager sau khi tải ảnh lên
editor.on('asset:upload:response', (response) => {
    editor.AssetManager.add("https://appv4.zozo.vn" + response.url);
});

// lấy mjml lưu từ db
fetch('https://appv4.zozo.vn/mjml-test/returnEmailContent/' + templateUId)
    .then((response) => {
        return response.text();
    }
    ).then((text) => {
        editor.setComponents(text)
    })


// lưu mjml và html vào db
editor.Panels.addButton('options', [{
    id: 'save',
    className: 'fa fa-floppy-o icon-blank btn-save',
    label: ' Lưu',
    command: function (editor1, sender) {
        saveAndCloseEditor();
    },
    attributes: {
        title: 'Lưu'
    }
},]);

function saveAndCloseEditor() {
    var mjml = editor.runCommand('mjml-code')
    var content = editor.runCommand('mjml-code-to-html').html
    fetch("https://appv4.zozo.vn/mjml-test/" + templateUId + "/builder/edit", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "content": content, "mjml": mjml })
    }).then(res => {
        var modalSuccess = editor.Modal;
        modalSuccess.open({
            title: 'Lưu thành công',
            attributes: { class: 'my-class' },
        });
        console.log("Request complete! response:", res);
    });
}

editor.DomComponents.addType('mj-text', { isComponent: (el) => el.tagName === 'MJ-TEXT', });

// editor.on('component:update', (model) => {
//     if (model.attributes.type == "mj-text") {
//         console.log(model)

//     }
// });


// CKEDITOR.on('change', function () {
//     const data = editor.storeData()
//     console.log(data)
//     editor.DomComponents.clear()
//     editor.loadData(data)
// });
function openModal(selectedComponent) {
    const pfx = editor.getConfig().stylePrefix;
    const modal = editor.Modal;

    const container = document.createElement('div');

    const inputHtml = `  
    <div class="form-group">
      <label for="exampleInputEmail1">Tên Component</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Enter name">
    </div>
 `;

    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Submit';
    btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
    btnEdit.onclick = function () {
        var exampleInputEmail1 = document.getElementById('exampleInputEmail1');

        blockName = exampleInputEmail1.value;

        let blockId = 'customBlockTemplate_' + blockName.split(' ').join('_')
        let name_blockId = {
            'name': blockName,
            'blockId': blockId
        }
        // here is where you put your ajax logic
        // console.log(name_blockId, selectedComponent);
        createBlockTemplate(editor, selectedComponent, name_blockId)

        modal.close();
    };

    modal.setTitle('Lưu component dùng lại');
    container.innerHTML = inputHtml;
    container.appendChild(btnEdit);
    modal.setContent(container);
    modal.open();
};

editor.on('component:selected', (editor) => {
    // console.log(editor)
    // whenever a component is selected in the editor
    if (!this.editor) {
        this.editor = editor
    }
    const selectedComponent = this.editor.getSelected();
    if (selectedComponent && selectedComponent.attributes) {

        //createBlockTemplate functionality
        const commandBlockTemplateIcon = 'fad fa-square'
        const commandBlockTemplate = () => {

            openModal(selectedComponent)
        }

        const defaultToolbar = selectedComponent.get('toolbar');
        const commandExists = defaultToolbar.some((item) => item.command.name === 'commandBlockTemplate');
        if (!commandExists) {
            selectedComponent.set({
                toolbar: [...defaultToolbar, { attributes: { class: commandBlockTemplateIcon }, command: commandBlockTemplate }]
            });
        }
    }
});

const categoryBlocks = {
    "Bố cục": [
        "mj-1-column",
        "mj-2-columns",
        "mj-3-columns",
        "mj-4-columns",
        "mj-divider",
        "mj-spacer",
        "mj-divider",
        "mj-navbar",
        "mj-navbar-link",
        "mj-hero",
        "mj-group",
        "mj-wrapper",
    ],
    "Nội dung": [
        "mj-image",
        "mj-text",
        "mj-button",
        "mj-social-group",
        "mj-social-element",
        "mj-raw",
    ]
}

for (const [key, value] of Object.entries(categoryBlocks)) {
    value.forEach(b => {
        const block = editor.BlockManager.get(b);
        if (block) {
            block.set('category', { label: key, open: false })
        }
    })
}
const block_manager = editor.BlockManager;

block_manager.add("mj-4-columns", {
    category: "Bố cục",
    label: "4 Columns",
    media: `    <img src="icon/layout/4_columns.png" style="width: 100%; alt=""> `,
    content: `<mj-section>
    <mj-column><mj-text>Content 1</mj-text></mj-column>
    <mj-column><mj-text>Content 2</mj-text></mj-column>
    <mj-column><mj-text>Content 3</mj-text></mj-column>
    <mj-column><mj-text>Content 3</mj-text></mj-column>
  </mj-section>`,
});

// // add mj group into builder
// block_manager.add("mj-group", {
//     category: "Bố cục",
//     label: "Groups",
//     media: `    <img src="icon/layout/4_columns.png" style="width: 100%; alt=""> `,
//     content: ` <mj-section>
//     <mj-group>
//       <mj-column>
//         <mj-image width="137px" height="185px" padding="0"    src="https://mjml.io/assets/img/easy-and-quick.png" />
//         <mj-text align="center">
//           <h2>Easy and quick</h2>
//           <p>Write less code, save time and code more efficiently with MJML’s semantic syntax.</p>
//         </mj-text>
//       </mj-column>
//       <mj-column>
//         <mj-image width="166px" height="185px" padding="0" src="https://mjml.io/assets/img/responsive.png" />
//         <mj-text align="center">
//           <h2>Responsive</h2>
//           <p>MJML is responsive by design on most-popular email clients, even Outlook.</p>
//         </mj-text>
//       </mj-column>
//     </mj-group>
//   </mj-section>`,
// });