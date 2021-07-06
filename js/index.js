(function() {
    let dashboard,boxes;
    let iH, iW;

    let randomize = (el) => {
        iW = window.innerWidth - 150;
        iH = window.innerHeight - 150;
        el.style.setProperty("top", parseInt(iH * Math.random()) + "px");
        el.style.setProperty("left", parseInt(iW * Math.random()) + "px");
        return;
    };

    let iterFn = (htmlColl) => {
        for (let i = 0; i < htmlColl.length; i++) {
            randomize(htmlColl.item(i));
        };
    };

    let readyState = () => {
        boxes = document.getElementsByClassName("random-box");
        iterFn(boxes);
    };

    let resizestate = (ev) => {
        iterFn(boxes);
    };

    let toggleCSS = (el, elCl) => {
        if (el.classList.contains(elCl))
            el.classList.remove(elCl);
        else
            el.classList.add(elCl);
    };

    window.callMe = () => {
        dashboard = document.getElementById("dashboard");
        toggleCSS(dashboard, "show");
    };
    document.onreadystatechange = readyState();
    window.addEventListener("resize", resizestate);
})();