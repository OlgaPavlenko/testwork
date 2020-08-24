(() => {
    const navElem = document.querySelector('.site-nav');
    let prevSelected = null;

      navElem.onclick = function(event) {

        if (prevSelected !== null){
            prevSelected.classList.toggle("current");
        }

        event.target.classList.toggle("current");
        prevSelected = event.target;
    }
})();