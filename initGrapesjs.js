class LocalStorageService {
    #keys = {
        customComponents: 'customComponents'
    };

    constructor() {
        this.storage = window.localStorage;
    }

    addCustomComponent(customComponent) {
        const customComponents = this.getCustomComponents();
        customComponents.push(customComponent);
        this.setCustomComponents(customComponents);
    }

    getCustomComponents() {
        return JSON.parse(this.storage.getItem(this.#keys.customComponents)) || [];
    }

    getCustomComponent(id) {
        const customComponents = this.getCustomComponents();
        return customComponents.find((customComponent) => customComponent.id === id);
    }

    setCustomComponents(customComponents) {
        this.storage.setItem(this.#keys.customComponents, JSON.stringify(customComponents));
    }

    removeCustomComponent(customComponent) {
        const customComponents = this.getCustomComponents();
        const index = customComponents.indexOf(customComponent);
        customComponents.splice(index, 1);
        this.setCustomComponents(customComponents);
    }

    clear() {
        this.storage.clear();
    }
}

url_string = (window.location.href)
var url = new URL(url_string);
var c = url.searchParams.get("uid");
var templateUId = c

// remove format when user paste text 
CKEDITOR.config.forcePasteAsPlainText = true
CKEDITOR.config.pasteFromWordRemoveStyles = true
CKEDITOR.config.pasteFromWordRemoveFontStyles = true
CKEDITOR.dtd.$editable.span = 1
CKEDITOR.dtd.$editable.a = 1
CKEDITOR.dtd.$removeEmpty.span = 0;
CKEDITOR.config.coreStyles_strike = { element: 'span', attributes: { 'style': 'text-decoration:line-through' }, overrides: 'strike' };
CKEDITOR.config.coreStyles_underline = { element: 'span', attributes: { 'style': 'text-decoration:underline' } };
CKEDITOR.config.defaultLanguage = 'vi';
CKEDITOR.config.skin = 'moono-lisa';
//// Set up GrapesJS editor with the MJML plugin
var editor = grapesjs.init({
    layerManager: {
        appendTo: '.layers-container'
    },
    storageManager: false,
    // storageManager: {
    //     autosave: true, // Store data automatically
    //     local: {
    //         key: `gjsProject-${templateUId}`,
    //         // If enabled, checks if browser supports LocalStorage
    //         checkLocal: true,
    //     },
    // },
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
    forceClass: 0,

    // Show paddings and margins
    showOffsets: true,

    // Show paddings and margins on selected component
    showOffsetsSelected: true,

    // Height for the editor container
    height: '800px',

    plugins: ['grapesjs-mjml',
        'gjs-plugin-ckeditor'
    ],
    pluginsOpts: {
        'grapesjs-mjml': {
            i18n: {
                locale: 'vi'
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
                extraPlugins: 'emoji,colorbutton,colordialog,dialogadvtab,hkemoji,liststyle,ematags',
                toolbar: [
                    ['Bold', 'Italic', 'Underline', 'Strike'],
                    { name: 'paragraph', items: ['NumberedList', 'BulletedList', 'liststyle'] },
                    { name: 'links', items: ['Link', 'Unlink'] },
                    { name: 'colors', items: ['TextColor', 'BGColor'] },
                    // here why we need to call emoji its like this https://stackoverflow.com/questions/66364640/ckeditor-cant-install-emoji-plugin
                    {
                        name: 'insert', items: ['SpecialChar', 'EmojiPanel', 'HKemoji',
                            'ematags'
                        ]
                    },
                ],
            }
        }
    },
});

// add tags in template 
// how to : https://ckeditor.com/old/forums/CKEditor-3.x/Adding-links-Drop-Down-Menu
CKEDITOR.plugins.add('ematags',
    {
        requires: ['richcombo'],

        init: function (editor) {
            var config = editor.config;

            editor.ui.addRichCombo('ematags',
                {
                    label: "Chèn Tags",
                    title: 'Chèn Tags',
                    multiSelect: false,
                    panel:
                    {
                        css: ['boostrap/ckeditor/skins/moono-lisa/editor.css'].concat(config.contentsCss)
                    },

                    init: function () {
                        var customLinksOptions = ["{NAME}", "{EMAIL}"],
                            customLinks;

                        this.startGroup('Tags');
                        // Loop over the Array, adding all items to the
                        // combo.
                        for (i = 0; i < customLinksOptions.length; i++) {
                            customLinks = customLinksOptions[i];
                            // value, html, text
                            this.add(customLinks);
                        }
                        // Default value on first click
                        // this.setValue("Value1", "Value1");
                    },
                    onClick: function (value) {
                        editor.focus();
                        editor.fire('saveSnapshot');
                        editor.insertHtml(value);
                        editor.fire('saveSnapshot');
                    }
                });
            // End of richCombo element
        } //Init
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

// lấy mjml lưu từ db
fetch('https://appv4.zozo.vn/mjml-test/returnEmailContent/' + templateUId)
    .then((response) => {
        return response.text();
    }
    ).then((text) => {
        try {
            editor.setComponents(JSON.parse(text))
        } catch (error) {
            editor.setComponents((text))

        }
    }).catch((error) => {
        console.log(error)
    });
let storageS = new LocalStorageService();
const storageComponents = storageS.getCustomComponents();
storageComponents.forEach(element => {
    editor.BlockManager.add(element.blockId, element)

});

//// Set up GrapesJS editor with the MJML plugin



//// Section for fix bug in plugin ckeditor grapesjs

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

// CKEDITOR.on('change', function () {
//     const data = editor.storeData()
//     editor.DomComponents.clear()
//     editor.loadData(data)
// });
//// Section for fix bug in plugin ckeditor grapesjs



//// Section for grapesjs event
// add ảnh vào asset manager sau khi tải ảnh lên
editor.on('asset:upload:response', (response) => {
    editor.AssetManager.add("https://appv4.zozo.vn" + response.url);
});

// khi click vào component bất kỳ
// cần gen ra mjml theo component đấy
editor.on('component:selected', (component) => {
    var start = ''
    if (component && component.attributes) {
        // let tstart = (JSON.stringify(editor.getSelected().toJSON()))
        // let tinput = JSON.parse(tstart)
        // let tresult = json2xml(tinput)
        // console.log(tresult)
        if (component.attributes.tagName != "mjml" && component.attributes.tagName != "body") {
            start = (JSON.stringify(editor.getSelected().toJSON()))
            const input = JSON.parse(start)
            const result = json2xml(input)
            // console.log(result)
            //createBlockTemplate functionality
            const commandBlockTemplateIcon = 'gjs-toolbar-item fa fa-plus'
            const commandBlockTemplate = () => {

                saveComponent(component, result)
            }

            const defaultToolbar = component.get('toolbar');
            const commandExists = defaultToolbar.some((item) => item.command.name === 'commandBlockTemplate');
            if (!commandExists) {
                component.set({
                    toolbar: [...defaultToolbar, { attributes: { class: commandBlockTemplateIcon }, command: commandBlockTemplate }]
                });
            }
        }

    }
});

function saveComponent(selectedComponent, mjml) {
    const modal = editor.Modal;

    const container = document.createElement('div');

    const inputHtml = `
    <form id="custom-mjml">  
    <div class="form-group">
      <label for="exampleInputEmail1">Tên Component</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Enter name">
        <button class="gjs-btn-prim gjs-btn-import" type="submit">Submit</button>
    </div>
    </form>`;

    modal.setTitle('Lưu component dùng lại');
    container.innerHTML = inputHtml;
    modal.setContent(container);
    modal.open();

    const form = document.getElementById('custom-mjml');
    form.addEventListener('submit', (event) => {
        // stop form submission
        event.preventDefault();
        var exampleInputEmail1 = document.getElementById('exampleInputEmail1');

        let blockName = exampleInputEmail1.value;

        let blockId = 'customBlockTemplate_' + "id" + Math.random().toString(16).slice(2)

        // save to local storage
        const storageService = new LocalStorageService();
        const customComponent = {
            blockId: blockId,
            category: 'Custom component',
            open: false,
            label: `${blockName}`,
            media: '<i class="fa fa-bookmark" style="font-size: 40px;" aria-hidden="true"></i>',
            content: mjml,
        };
        storageService.addCustomComponent(customComponent);

        // add to block manager
        editor.BlockManager.add(blockId, customComponent)
        modal.close();
    });
};
//// Section for grapesjs event

// Update component
editor.DomComponents.addType('mj-social', {
    model: {
        defaults: {
            traits: [
                {
                    type: 'mode',
                    label: 'Chế độ',
                    name: 'mode',
                }
            ]
        }
    }
});
editor.TraitManager.addType('mode', {
    // Expects as return a simple HTML string or an HTML element
    createInput({ trait }) {
        let selected = "selected='selected'";
        // Here we can decide to use properties from the trait
        const traitOpts = trait.get('options') || [];
        const options = traitOpts.length ? traitOpts : [
            { id: 'horizontal', name: 'Theo chiều ngang' },
            { id: 'vertical', name: 'Theo chiều dọc' },
        ];
        try {
            if (trait.target.getAttributes()['mode']
                && trait.target.getAttributes()['mode'] == "horizontal") {
                options[0].selected = true
            } else {
                options[1].selected = true
            }
        } catch (e) {
        }
        // Create a new element container and add some content
        const el = document.createElement('div');
        el.innerHTML = `
        <select class="href-next__type">
        <option value="" selected disabled hidden>Choose here</option>
          ${options.map(function (opt) {
            if (opt.selected == true) {
                return `<option ${selected} value="${opt.id}">${opt.name}</option>`
            } else {
                return `<option value="${opt.id}">${opt.name}</option>`
            }
        }).join('')}
        </select>
      `;
        return el;
    },
    onEvent({ elInput, component, event }) {
        const inputType = elInput.querySelector('.href-next__type');
        if (inputType.value == "horizontal") {
            editor.on('component:update', (componentTest) => {
                if (componentTest.attributes.tagName == "mj-social") {
                    let childSocialElement = component.view.getChildrenContainer().childNodes
                    for (let i = 0; i < childSocialElement.length; i++) {
                        componentTest.view.getChildrenContainer().childNodes[i].setAttribute("style", "float: none; display: inline-table;")
                    }
                }
            });
        } else {
            editor.on('component:update', (componentTest) => {
                if (componentTest.attributes.tagName == "mj-social") {
                    let childSocialElement = component.view.getChildrenContainer().childNodes
                    for (let i = 0; i < childSocialElement.length; i++) {
                        componentTest.view.getChildrenContainer().childNodes[i].setAttribute("style", "margin: 0px;")
                    }
                }
            });
        }
        component.addAttributes({ "mode": inputType.value })
    }
});

editor.on('component:mount', (componentTest) => {
    if (componentTest.attributes.tagName == "mj-social") {
        if (componentTest.attributes.attributes.mode == "horizontal") {
            if (componentTest.attributes.tagName == "mj-social") {
                let childSocialElement = componentTest.view.getChildrenContainer().childNodes
                for (let i = 0; i < childSocialElement.length; i++) {
                    componentTest.view.getChildrenContainer().childNodes[i].setAttribute("style", "float: none; display: inline-table;")
                }
            }

        } else {
            if (componentTest.attributes.tagName == "mj-social") {
                let childSocialElement = componentTest.view.getChildrenContainer().childNodes
                for (let i = 0; i < childSocialElement.length; i++) {
                    componentTest.view.getChildrenContainer().childNodes[i].setAttribute("style", "margin: 0px;")
                }
            }

        }
    }
});

//// Section for grapesjs panel manager
// lưu mjml và html vào db
editor.Panels.addButton('options', [{
    id: 'save',
    className: 'fa fa-floppy-o icon-blank btn-save',
    label: ' Lưu',
    command: function (editor1, sender) {
        saveEditor();
    },
    attributes: {
        title: 'Lưu'
    }
},]);

function saveEditor() {
    var content = editor.runCommand('mjml-code-to-html').html
    fetch("https://appv4.zozo.vn/mjml-test/" + templateUId + "/builder/edit", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "content": content, "mjml": editor.getComponents() })
    }).then(res => {
        var modalSuccess = editor.Modal;
        modalSuccess.open({
            title: 'Lưu thành công',
            content: ' ',
            attributes: { class: 'my-class' },
        });
        console.log("Request complete! response:", res);
    });
}

editor.Panels.addButton('options', [{
    id: 'send-mail',
    className: 'fa fa-paper-plane icon-blank btn-save',
    label: 'Gửi test email',
    command: function (editor1, sender) {
        sendMail();
    },
    attributes: {
        title: 'Gửi test email'
    }
},]);
function sendMail() {
    let sendMailModal = editor.Modal;

    const container = document.createElement('div');

    const inputHtml = `<form id="form-sendmail">   <div class="form-group">     <label>Tiêu đề</label>     <input       type="text"       class="form-control"       id="subject"       name="subject"       aria-describedby="emailHelp"       placeholder="Nhập tiêu đề"     />     <label>Email Người gửi</label>     <input       type="email"       class="form-control"       id="from_email"       name="from_email"       aria-describedby="emailHelp"       placeholder="Nhập mail người gửi"     />     <label>Tên Người gửi</label>     <input       type="text"       class="form-control"       id="from_name"       name="from_name"       aria-describedby="emailHelp"       placeholder="Nhập tên người gửi"     />     <label>Email người nhận</label>     <input       type="email"       class="form-control"       id="to"       name="to"       aria-describedby="emailHelp"       placeholder="Nhập email người nhận"     />     <button class="gjs-btn-prim gjs-btn-import" type="submit">Submit</button>   </div> </form> `;

    sendMailModal.setTitle('Config');
    container.innerHTML = inputHtml;
    sendMailModal.setContent(container);
    sendMailModal.open();

    const form = document.getElementById('form-sendmail');
    form.addEventListener('submit', (event) => {
        // stop form submission
        event.preventDefault();
        let data = $("#form-sendmail").serialize()
        const params = Object.fromEntries(new URLSearchParams(data));
        console.log((params))
        // sendMailModal.close();
    });

}
//// Section for grapesj panel manager



//// Section for grapesjs block manager

// Sort blocks
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

// add 4 columns block
const block_manager = editor.BlockManager;

block_manager.add("mj-4-columns", {
    category: "Bố cục",
    label: "4 Columns",
    media: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g id="XMLID_1_">
   <polygon id="XMLID_3_" points="8.4,8.4 8.4,15.8 120.1,15.8 120.1,496.2 15.8,496.2 15.8,8.4 8.4,8.4 8.4,15.8 8.4,8.4 0,8.4 
       0,512 135.9,512 135.9,0 0,0 0,8.4 	"/>
   <polygon id="XMLID_4_" points="128.5,8.4 128.5,15.8 247.6,15.8 247.6,496.2 135.9,496.2 135.9,8.4 128.5,8.4 128.5,15.8 
       128.5,8.4 120.1,8.4 120.1,512 264.4,512 264.4,0 120.1,0 120.1,8.4 	"/>
   <polygon id="XMLID_5_" points="256,8.4 256,15.8 367.7,15.8 367.7,496.2 264.4,496.2 264.4,8.4 256,8.4 256,15.8 256,8.4 
       247.6,8.4 247.6,512 383.5,512 383.5,0 247.6,0 247.6,8.4 	"/>
   <polygon id="XMLID_6_" points="376.1,8.4 376.1,15.8 496.2,15.8 496.2,496.2 383.5,496.2 383.5,8.4 376.1,8.4 376.1,15.8 
       376.1,8.4 367.7,8.4 367.7,512 512,512 512,0 367.7,0 367.7,8.4 	"/>
</g>
</svg>`,
    content: `<mj-section>
    <mj-column><mj-text>Content 1</mj-text></mj-column>
    <mj-column><mj-text>Content 2</mj-text></mj-column>
    <mj-column><mj-text>Content 3</mj-text></mj-column>
    <mj-column><mj-text>Content 3</mj-text></mj-column>
  </mj-section>`,
});
// // add mj group into builder
block_manager.add("mj-group", {
    category: "Bố cục",
    label: "Groups",
    media: `<i class="fa fa-object-group" style="font-size: 40px;" aria-hidden="true"></i> `,
    content: `  
    <mj-section>
    <mj-group>
      <mj-column>
        <mj-image width="137px" height="185px" padding="0"    src="https://mjml.io/assets/img/easy-and-quick.png"></mj-image>
        <mj-text align="center">
          <h2>Easy and quick</h2>
          <p>Write less code, save time and code more efficiently with MJML’s semantic syntax.</p>
        </mj-text>
      </mj-column>
      <mj-column>
        <mj-image width="166px" height="185px" padding="0" src="https://mjml.io/assets/img/responsive.png" ></mj-image>
        <mj-text align="center">
          <h2>Responsive</h2>
          <p>MJML is responsive by design on most-popular email clients, even Outlook.</p>
        </mj-text>
      </mj-column>
    </mj-group>
  </mj-section>`,
});
//// Section for grapesjs block manager


//// Section for grapesjs style manager

//// Section for grapesjs style manager

//// Section for ultis function and class
const indentPad = n => Array(n + 1).join(' ')

const TAG_CONVERSION = {
    'mj-dev': 'mj-raw'
}

const CONVERT_TAG = {
    "link": 'link',
    'textnode': 'textnode'
}

const lineAttributes = attrs =>
    Object.keys(attrs)
        .filter(key => key !== 'passport' && key !== "id" && key !== "style")
        .map(key => `${key}="${attrs[key]}"`)
        .sort()
        .join(' ')

function json2xml(node, indent = 0) {
    let { tagName } = node
    let { type } = node
    const { components, content, attributes } = node
    if (tagName in TAG_CONVERSION) {
        tagName = TAG_CONVERSION[tagName] // eslint-disable-line prefer-destructuring
    }

    let isTextNode = false
    const space = indentPad(indent)

    let attrs = (attributes && ` ${lineAttributes(attributes)}`) || ''

    if (!attrs.trim()) {
        attrs = ''
    }
    if (tagName == null && type != null) {
        if (CONVERT_TAG.hasOwnProperty(type) && CONVERT_TAG[type] == "textnode") {
            isTextNode = true
        }
        if (CONVERT_TAG.hasOwnProperty(type) && CONVERT_TAG[type] == "link") {
            tagName = 'a'
        }
    }

    const inside =

        (components && `\n${components.map(c => `${json2xml(c, indent + 2)}`).join('\n')}\n${space}`) ||
        (isTextNode && content) ||
        (content && `\n${space}  ${content}\n${space}`) ||
        ''

    return !isTextNode ? `${space}<${tagName}${attrs}>${inside}</${tagName}>` : inside
}



//// Section for ultis function and class