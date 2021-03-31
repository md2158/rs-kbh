if(window.screen.width < 1199) {
    let menuItems = document.getElementsByClassName('rs-kbh-menu__item');
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener("click", function (){
            this.classList.toggle('active');
        });
    }
    document.getElementById('closeMenu').addEventListener('click', function (){
        document.getElementById('headerMenu').classList.remove('active');
    });
    document.getElementById('openMenu').addEventListener('click', function (){
        document.getElementById('headerMenu').classList.add('active');
    });
}