

console.log('Hello World!');

const buttonYes = document.querySelector('.yes-button');
const buttonNo = document.querySelector('.no-button');
const kirby = document.querySelector('.kirby');
const kirbyWrapper = document.querySelector('.kirby__wrapper');
const buttonWrapper = document.querySelector('.button-wrapper');
const text  = document.querySelector('.child');
const speech = document.getElementById('speech');


const messages =[
    '> pls forgiv',
    '> I can be better 👉👈',
    '> Pls, say yes!',
    "> Pls DON'T LEAVE ME!",
    '> I can change! 😭', 

];

const  yesMessages = [
    '> Yay! 😊',
    '> Thank you! 😊',
    '> You are the best! 😊',
];



let noCounter = 0;

function updateScaleFactor() {
    let scaleFactorX = 1.4 + (noCounter * 0.1); 
    let scaleFactorY = 0.7 + (noCounter * 0.05);
    let kirbyWrapper = document.querySelector('.kirby__wrapper.active');
    buttonWrapper.style.marginTop = `${noCounter * 6}px`;
    text.style.marginBottom = `${noCounter * 6}px`;

    if (kirbyWrapper) {
        kirbyWrapper.style.transform = `scale3d(${scaleFactorX}, ${scaleFactorY}, 1)`;
    }
}


buttonYes.addEventListener('mousedown', function() {
    kirby.classList.remove('active');
    kirbyWrapper.classList.add('happy');
    noCounter = 0;
    updateScaleFactor();
    if (kirbyWrapper) {
        kirbyWrapper.style.transform = 'scale3d(1, 1, 1)';
    }
    speech.textContent = yesMessages[Math.floor(Math.random() * yesMessages.length)];
});

buttonYes.addEventListener('mouseover', function() {
    kirby.classList.add('hover');
    kirbyWrapper.classList.add('hover');
    kirby.classList.remove('active');
    
});



buttonYes.addEventListener('mouseout', function() {
    kirby.classList.remove('hover');
    kirbyWrapper.classList.remove('hover');
});


buttonNo.addEventListener('mouseover', function() {
    kirby.classList.add('hover');
    kirbyWrapper.classList.add('hover');
});

buttonNo.addEventListener('mouseout', function() {
    kirby.classList.remove('hover');
    kirbyWrapper.classList.remove('hover');

});

buttonNo.addEventListener('mousedown', function() {
    kirby.classList.add('active');
    kirbyWrapper.classList.add('active');
    noCounter++;
    updateScaleFactor();
    speech.textContent = messages[noCounter % messages.length];
});

buttonNo.addEventListener('mouseup', function() {
    kirbyWrapper.classList.remove('active');
});


kirby.addEventListener('mouseover', function() {
    kirby.classList.add('hover');
    kirbyWrapper.classList.add('hover');

});

kirby.addEventListener('mouseout', function() {
    kirby.classList.remove('hover');
    kirbyWrapper.classList.remove('hover');
});

kirby.addEventListener('mousedown', function() {
    kirby.classList.add('active');
    kirbyWrapper.classList.add('active');
});
kirby.addEventListener('mouseup', function() {
    kirby.classList.remove('active');
    kirbyWrapper.classList.remove('active');
});

