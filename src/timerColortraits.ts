import type grapesjs from 'grapesjs';
export default (editor: grapesjs.Editor, opt: any) => {
    editor.TraitManager.addType('timer-color', {

        // eventCapture: ['change'], // you can use multiple events in the array
        createInput({ trait }) {
            // Here we can decide to use properties from the trait
            var attributesComponent = trait.attributes.name;
            // Create a new element container and add some content
            const el = document.createElement('div');
            el.className = "gjs-field gjs-field-timer-color";
            el.innerHTML = `
            <div class="gjs-input-holder"><input name="${attributesComponent}"  id="ema-color" type="text" placeholder="#ffffff" data-coloris/></div>
            <div class="gjs-field-colorp">
            <div class="gjs-field-colorp-c" data-colorp-c="">
                <div class="gjs-checker-bg"></div>

            </div>`;
            el.id = attributesComponent;
            const gjs_field_colorp_c = el.getElementsByClassName("gjs-field-colorp-c");
            const parentCustom = document.createElement('div');
            parentCustom.className = "gjs-field-color-picker";
            parentCustom.setAttribute("style", "background-color: rgb(0, 0, 0)");
            gjs_field_colorp_c[0].append(parentCustom)

            return el;
        },

        onEvent({ elInput, component, event }) {
            var emaColor = <HTMLInputElement>elInput.querySelector("#ema-color");
            var componentColor = emaColor.value
            if (elInput.id == "timerbgcolor") {
                component.addAttributes({ "timerbgcolor": componentColor })
            } else {
                component.addAttributes({ "timertextcolor": componentColor })
            }
            var backgroundColorPicker = elInput.querySelector('.gjs-field-color-picker')
            backgroundColorPicker?.setAttribute('style', "background-color: " + componentColor)
        },

        onUpdate({ elInput, component }) {
            var timerColor: string
            if (elInput.id == "timerbgcolor") {
                timerColor = component.getAttributes().timerbgcolor || '#ffffff'
            } else {
                timerColor = component.getAttributes().timertextcolor || '#000000'
            }

            var emaColor = <HTMLInputElement>elInput.querySelector("#ema-color");
            emaColor.value = timerColor
            var backgroundColorPicker = elInput.querySelector('.gjs-field-color-picker')
            backgroundColorPicker?.setAttribute('style', "background-color: " + timerColor)
        },
    });

}