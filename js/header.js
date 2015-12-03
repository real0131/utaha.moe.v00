function getScrollTop(){
    if (typeof pageYOffset != 'undefined') {
        //most browsers except IE before #9
        return pageYOffset;
    } else {
        var B = document.body; //IE 'quirks'
        var D = document.documentElement; //IE with doctype
        D = (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}

document.onscroll = function() {
    var list = document.getElementById('menu_list');
    list.style.visibility = (getScrollTop() !== 0) ? 'hidden' : 'visible';   
}