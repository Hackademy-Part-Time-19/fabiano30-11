let main = document.getElementById('main');
let image = document.getElementById('image-dynamic');
let images = ['download.jpg', 'https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg', 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'];
let i=0;


function change() {
    image.style.opacity = 1;
    image.src = images[i];
    setTimeout(function() {
        image.style.opacity = 0;
    }, 4000)
    //! "?" SIGNIFICA condizione ? espressionevera : espressionefalsa;
    i > 1 ? i= 0 : i++;
 }

 window.onload = change;
 setInterval(change, 5000);