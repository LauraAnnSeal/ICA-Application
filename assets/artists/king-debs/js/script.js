
console.log('test')
const opening = document.querySelector('#overlay');
const main = document.querySelector('#main');
const beginBtn = document.querySelector('#btn-begin');

beginBtn.addEventListener('click', () => {
    opening.classList.add('d-none');
    opening.style.opacity = 0;
    opening.style.zIndex = '-2000'
    main.classList.remove('d-none');
})

