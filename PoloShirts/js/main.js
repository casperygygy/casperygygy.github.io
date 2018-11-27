/*********************** accordion ***********************/

(function () {
    var accordion = document.getElementsByClassName('accordion__head');
    var i;

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle('active');

            /* Toggle between hiding and showing the active panel */

            var accordionBody = this.nextElementSibling;
            if (accordionBody.style.maxHeight) {
                accordionBody.style.maxHeight = null;
            } else {
                accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            }
        });
    };
}) ();


/*********************** hide/vissible sidebar ***********************/

(function () {
    let filter = document.querySelector('.sort-bar__filter-bar__button');
    filter.addEventListener('click', function () {
        var hide = document.querySelector('.filter');
        var content = document.querySelector('.content');
        hide.classList.toggle('hide');
        content.classList.toggle('full');
    })
})();
(function(){
    document.querySelector('.nav-adaptive').onclick = function() {
    this.classList.toggle('active');
    }
})();

/************* Добавление/удаление класса по ресайзу окна *************/

(function () {

    let elem = document.querySelectorAll('body');
    let filter = document.querySelectorAll('.sort-bar__filter-bar__button');
    const WIDTH_CLASS = () => {
        let w = elem[0].offsetWidth;

        if ( w < 960 ) {
            filter[0].classList.add('custom-filter');
        } else {
            filter[0].classList.remove('custom-filter');
        }
    }   

    WIDTH_CLASS();
    window.onresize = () => {
        WIDTH_CLASS();
    }

})();