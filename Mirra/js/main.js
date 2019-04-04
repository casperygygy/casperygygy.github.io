$(function () {
    $(".select").selectric({
    });
});


window.onload = function() {
    let burger = document.querySelector('.header__burger');
    let drop = document.querySelector('.header__dropdown');

    burger.addEventListener('click', function(){
        this.classList.toggle('active-dropdown');
        drop.classList.toggle('active-dropdown');
    })
}