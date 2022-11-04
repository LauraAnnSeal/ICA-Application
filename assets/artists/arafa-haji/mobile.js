const mobile_begin = document.querySelector('#btn-optimised');
const mobile_intro = document.querySelector('.mobile-intro');
const nyokabi_btn = document.querySelector('#nyokabi-mobile');
const arafa_btn = document.querySelector('#arafa-mobile');

const nyokabi_mobile = document.querySelector('.nyokabi-mobile');
const arafa_mobile = document.querySelector('.arafa-mobile');

const back_btn_mobile = document.querySelectorAll('.back-mobile')

mobile_begin.addEventListener('click', () => {
    mobile_intro.style.display = 'block';
    overlay.style.display = 'none';
});

nyokabi_btn.addEventListener('click', () => {
    mobile_intro.style.display = 'none';
    nyokabi_mobile.style.display = 'block';
})

arafa_btn.addEventListener('click', () => {
    mobile_intro.style.display = 'none';
    arafa_mobile.style.display = 'block';
})

back_btn_mobile.forEach(btn => {
    btn.addEventListener('click', () => {
        mobile_intro.style.display = 'block';
        arafa_mobile.style.display = 'none';
        nyokabi_mobile.style.display = 'none';
    })
})