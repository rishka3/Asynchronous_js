/////////////// 1
let imgButton_1 = document.querySelector('.imgButton_1');

let image1 = document.createElement('img');
image1.src = './img/Spamton.jpg';
image1.width = 640;
image1.height = 360;

imgButton_1.addEventListener('click', function () {
   
    image1.addEventListener('load', function () {
        document.body.appendChild(image1);
    } )
    image1.addEventListener('error', function () {
        console.log('image1Error');
    } );
    image1.src = './img/Spamton.jpg';
} );


/////////////// 2
