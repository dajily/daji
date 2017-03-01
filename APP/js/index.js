(function(){
    function changRem(){
        var scale = 1 / devicePixelRatio;  
        document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'); 

        //flexible中定义<html>font-size
        var width = document.documentElement.getBoundingClientRect().width;  
        if (width / devicePixelRatio > 540) {  
            width = 540 * devicePixelRatio;
        }
        var rem = width / 10;
        document.documentElement.style.fontSize = rem + 'px'; 
    }
    changRem();
    var timer;
    window.addEventListener("resize",function(){
        clearInterval(timer);
        timer = setInterval(changRem, 10);
    })
})()