(function() {
    addListeners()

    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
    }

    function mouseMove(e) {

        var timer;
        var fadeInBuffer = false;
        
        if (!fadeInBuffer && timer) {
            console.log("clearTimer");
            clearTimeout(timer);
            timer = 0;
            console.log("fadeIn");
            document.getElementById('particles').style.cursor = 'none';
        } else {
            canvas = document.getElementById('particles')
            canvas.style.cursor = '';
            fadeInBuffer = false;
        }

        timer = setTimeout(function() {
            console.log("fadeout");
            document.getElementById('particles').style.cursor = 'none';
         fadeInBuffer = true;
        }, 1500)
        
        document.getElementById('particles').style.cursor = 'default'
    }
})();