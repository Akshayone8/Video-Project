//the DOMContentLoaded event fires when the initial html document has been completely loaded and parsed, without waiting for stylesheets, images and subframes to finish loading 

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');


btn.addEventListener('click',function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play()
    }
})

//preloader

const preloader = document.querySelector('.preloader');
window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader')
})