(function() {
                
    var callback = function(){
        var image = new Image();
        image.src="images/photo-long.png";
        
        image.onload = function() {
            document.getElementById("spinner").style.display =  "none";
            document.removeEventListener("DOMContentLoaded", callback);
        }
        
    };

    if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
    
    // window.onscroll = function() {
    //     if (window.scrollY > 10) 
    //         document.getElementById("header").classList.add("header-scrolling");

    //     else 
    //         document.getElementById("header").classList.remove("header-scrolling");
    // };

    function scrollTo(element) {
        window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop
            });
    }

    function scrollOnClick(e) {
        e.preventDefault();
        scrollTo(document.getElementById(this.getAttribute("href").replace("#", '')));
        return false;
    }
    
    document.getElementById("link-individuals").addEventListener("click", scrollOnClick);
    document.getElementById("link-entities").addEventListener("click", scrollOnClick);
    
})();
