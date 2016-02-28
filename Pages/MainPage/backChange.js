var background = 0;
var backChange = function() {
    background++;
    var pictures = ['slides/slide-1.png', 'slides/slide-2.png', 'slides/slide-3.png', 'slides/slide-4.png'];
    document.body.style.background = 'url(' +pictures[background] + ')';
    background = background == 3 ? -1 : background;
};
setInterval(backChange, 6000);