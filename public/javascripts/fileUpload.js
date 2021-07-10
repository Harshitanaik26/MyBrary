FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginImageResize);
FilePond.registerPlugin(FilePondPluginFileEncode);

FilePond.setOptions({
    stylePanelAspectRatio: 150/100
})

FilePond.parse(document.body);