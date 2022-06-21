// let footerHeight = document.getElementById('kbhFooter').offsetHeight;
// console.log(footerHeight);
// if(footerHeight && window.screen.height > 700) {
//     document.getElementById('kbhPag').style.bottom = footerHeight + 20 + 'px';
// }
if(window.screen.width < 991) {
    document.getElementById('openAddressInfo').addEventListener('click', function (){
        document.getElementById('addressInfo').style.display = 'flex';
    });
    document.getElementById('closeAddressInfo').addEventListener('click', function (){
        document.getElementById('addressInfo').style.display = 'none';
    });
}