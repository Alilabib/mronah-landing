document.getElementById('lang').addEventListener('click',function(e){
    e.preventDefault();
    var language = document.getElementById('lang');
    var body = document.getElementsByTagName("BODY")[0];
    var logo = document.getElementById('logo');
    if(language.innerHTML ==='EN'){
        body.style.direction = 'ltr';
        language.innerHTML = 'AR';
        if(logo != null){
            logo.src = "./images/mronah_en.png";
        }
    }else{
        body.style.direction = 'rtl';
        language.innerHTML = 'EN';
        if(logo != null){
            logo.src = "./images/mronah_ar.png";
        }
    }
});


// var loader = document.getElementById('loader');
// function loadfun(){
//     setTimeout(() => {
//         loader.style.display = 'none';
//     }, 300);
// }