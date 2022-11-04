const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const main = document.querySelector('.main-container');
const levels = document.querySelectorAll('.level');
const events = ['facade', 'f2-pMenu', 'f1-pMenu', 'f1r1', 'f1r2', 'f1r3', 'f1r4', 'f1r5', 'f1r6', 'f2r1']
const labels = ['landing', 'F2 passage menu', 'F1 passage menu', 'F1 room 1', 'F1 room 2', 'F1 room 3', 'F1 room 4', 'F1 room 5', 'F1 room 6', 'F2 room 7']
// soundcloud
const iframe1 = 'sound-f1-r1';
const iframe2 = 'sound-f1-r2';
const iframe3 = 'sound-f1-r3';
const iframe4 = 'sound-f1-r4';
const iframe5 = 'sound-f1-r5';
const iframe6 = 'sound-f1-r6';
const iframe7 = 'sound-f2-r1';

const widget1 = SC.Widget(iframe1);
const widget2 = SC.Widget(iframe2);
const widget3 = SC.Widget(iframe3);
const widget4 = SC.Widget(iframe4);
const widget5 = SC.Widget(iframe5);
const widget6 = SC.Widget(iframe6);
const widget7 = SC.Widget(iframe7);

const tracks = [widget1, widget2, widget3, widget4, widget5, widget6, widget7];

const giffies = document.querySelectorAll('.giffy');
const textBox = document.querySelector('.textBox');
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
    cursor.style.left = -cursor.clientWidth/2 + e.pageX + 'px';
    cursor.style.top = -cursor.clientHeight/2 + e.pageY + 'px';
})

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    main.style.display = 'flex';
})

const buttons = document.querySelectorAll('.btn');
const extraButtons = document.querySelectorAll('.t-btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        cursor.classList.add('active')
    });
    button.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
    })
})
extraButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        cursor.classList.add('active')
    });
    button.addEventListener('mouseout', () => {
        cursor.classList.remove('active')
    })
})

events.forEach((item, index) => {
    let selector = document.querySelectorAll(`.${item}`);
    selector.forEach(elem => {
        elem.addEventListener('mouseenter', (e) => {
            if(elem.classList.contains('show-label')){
                let x = e.target.offsetLeft;
                let y = e.target.offsetTop;
                textBox.style.display = 'block';
                textBox.innerHTML = `<p>${labels[index]} <i class="fas fa-arrow-right"></i></p>`;
                textBox.style.top = y + 'px';
                textBox.style.left = x + 'px';
            }
        })
        elem.addEventListener('mouseout', () => {
            textBox.style.display = 'none';
        })
        elem.addEventListener('click', () => {
            levels.forEach(level => {
                level.classList.add('d-none')
            })
            tracks.forEach(track => {
                track.pause();
            })
            let selected = document.querySelector(`#${item}`);
            selected.classList.remove('d-none');
            if(index > 2){
                tracks[index - 3].play()
            }
        })
    })

})

const gifTags = [
    'f1r1-g3', 'f1r1-g4', 'f1r1-g5', 'f1r1-ga',
    "f1r2-ga", "f1r2-gb","f1r2-gc","f1r2-gd", 
    "f1r3-ga", "f1r3-gb","f1r3-gc", 
    "f1r4-ga", "f1r4-gb","f1r4-gc",
    "f1r5-ga", "f1r5-gb","f1r5-gc","f1r5-gd",
    "f1r6-ga", "f1r6-gb","f1r6-gc","f1r6-gd", 
    "f2r1-ga", "f2r1-gb","f2r1-gc","f2r1-gd" ]

giffies.forEach(giffy => {
    let background = giffy.style.backgroundImage;
    giffy.addEventListener('mouseenter', e => {
        gifTags.forEach(tag => {
            if(e.target.classList.contains(tag)){
                giffy.style.backgroundImage = `url('${source}images/gifs/${tag}.gif')`;
            }
        })
    })
    giffy.addEventListener('mouseout', e => {
        giffy.style.backgroundImage = background;
    })
});


const images = document.querySelectorAll('.responsive');
images.forEach(img => {
    let opHeight = window.innerHeight;
    img.style.height = parseFloat(img.style.height)/1080 * opHeight + 'px';
    img.style.width = parseFloat(img.style.width)/1920 * 1.77777 * opHeight + 'px';
    img.style.top = parseFloat(img.style.top)/1080 * opHeight + 'px';
    img.style.left = parseFloat(img.style.left)/1920 * 1.77777 * opHeight + 'px';
    img.style.backgroundSize = '100% 100%'
})



function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const openingText = document.querySelector('.opening p');

window.addEventListener('load', e => {
    console.log(detectMob())
    if(detectMob()){
        beginBtn.style.display = 'none';
        openingText.textContent = 'Sorry, this page has not been designed for mobile devices. Please visit again on a PC to view the performance.'
    }
})