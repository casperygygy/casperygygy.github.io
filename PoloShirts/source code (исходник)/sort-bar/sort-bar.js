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