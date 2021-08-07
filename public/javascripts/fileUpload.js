const rootStyles = window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('--book-cover-width-large')!=null&&('--book-cover-width-large')!=''){
    ready()
}else{
    document.getElementById('main-css').addEventListener('load',ready)
}

function ready(){
    const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
    const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
    const coverHeight = coverWidth/coverAspectRatio
    FilePond.registerPlugin(FilePondPluginFileEncode);
    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.registerPlugin(FilePondPluginImageResize);

    FilePond.setOptions({
        stylePanelAspectRatio: 1/coverAspectRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
})

    FilePond.parse(document.body);
}
/*FilePond.registerPlugin(FilePondPluginFileEncode);
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginImageResize);

FilePond.setOptions({
    stylePanelAspectRatio: 150/100,
    imageResizeTargetWidth: 150,
    imageResizeTargetHeight: 100
})

FilePond.parse(document.body);*/