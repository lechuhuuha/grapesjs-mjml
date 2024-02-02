CKEDITOR.plugins.add("simplelink", {
  icons: "simplelink",
  init: function (editor) {
    editor.addCommand(
      "simplelink",
      new CKEDITOR.dialogCommand("simplelinkDialog")
    );
    editor.ui.addButton("simplelink", {
      label: "Add a link",
      icon : "simplelink",
      command: "simplelink",
    });

    CKEDITOR.dialog.add(
      "simplelinkDialog",
      this.path + "dialogs/simplelinkDialog.js"
    );
  },
});
