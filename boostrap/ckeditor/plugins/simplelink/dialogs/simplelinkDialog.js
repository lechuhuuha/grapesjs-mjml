// add simple link
CKEDITOR.dialog.add("simplelinkDialog", function (editor) {
  return {
    allowedContent: "a[href,target]",
    title: "Insert Link",
    minWidth: 550,
    minHeight: 100,
    resizable: CKEDITOR.DIALOG_RESIZE_NONE,
    contents: [
      {
        id: "simplelink",
        label: "simplelink",
        elements: [
          {
            type: "text",
            label: "URL",
            id: "edp-URL",
            validate: CKEDITOR.dialog.validate.notEmpty("url cannot be empty."),
            setup: function (element) {
              var href = element.getAttribute("href");
              var isExternalURL = /^(http|https):\/\//;
              if (href) {
                if (!isExternalURL.test(href)) {
                  href = href;
                }
                this.setValue(href);
              }
            },
            commit: function (element) {
              var href = this.getValue();
              var isExternalURL = /^(http|https):\/\//;
              if (href) {
                if (!isExternalURL.test(href)) {
                  href = href;
                }
                element.setAttribute("href", href);
                element.setAttribute("data-cke-saved-href", href);
                if (!element.getText()) {
                  element.setText(this.getValue());
                }
              }
            },
          },
          {
            type: "text",
            label: "Text hiển thị",
            id: "edp-text-display",
            setup: function (element) {
              this.setValue(element.getText());
            },
            commit: function (element) {
              var currentValue = this.getValue();
              if (currentValue !== "" && currentValue !== null) {
                element.setText(currentValue);
              }
            },
          },
          {
            type: "select",
            id: "ematag",
            label: "Dynamic link",
            items: [
              ["--Chọn Tag--"],
              ["{UNSUBSCRIBE_URL}"],
              ["{WEB_VIEW_URL}"],
            ],
            default: "--Chọn Tag--",
            onChange: function (api) {
              // this = CKEDITOR.ui.dialog.select
              var dialog = CKEDITOR.dialog.getCurrent();
              dialog.setValueOf("simplelink", "edp-URL", this.getValue());
              console.log("Current value: " + this.getValue());
            },
          },
          {
            type: "html",
            html: "<p>The Link will be opened in another tab.</p>",
          },
        ],
      },
    ],
    onShow: function () {
      var selection = editor.getSelection();
      var selector = selection.getStartElement();
      var element;

      if (selector) {
        element = selector.getAscendant("a", true);
      }

      if (!element || element.getName() != "a") {
        element = editor.document.createElement("a");
        element.setAttribute("target", "_blank");
        element.setAttribute("style", "text-decoration: none;");
        if (selection) {
          element.setText(selection.getSelectedText());
        }
        this.insertMode = true;
      } else {
        this.insertMode = false;
      }

      this.element = element;

      this.setupContent(this.element);
    },
    onOk: function () {
      var dialog = this;
      var anchorElement = this.element;

      this.commitContent(this.element);

      if (this.insertMode) {
        editor.insertElement(this.element);
      }
    },
  };
});
