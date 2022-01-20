(function(){

    const detect = document.querySelector("#detect"),
    wrap = document.querySelector(".wrap"),
    button = wrap.querySelector("button");

    let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"];
    for(let item of adClasses){
        detect.classList.add(item);
    }

    let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
    // console.log(getProperty);
    // getProperty == "none" ? wrap.classList.add("show") : wrap.classList.remove("show");

    button.addEventListener("click", ()=> {
        wrap.classList.remove("show");
    });

    if(!wrap.classList.contains("show")){
        getProperty == "none" ? wrap.classList.add("show") : wrap.classList.remove("show");
    }

})();
