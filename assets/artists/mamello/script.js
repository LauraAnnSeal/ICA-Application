const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const landing = document.querySelector('#landing');


const svg = document.querySelector('svg');

// lines
const seeing_line = svg.querySelector('#seeing');
const listening_line = svg.querySelector('#listening')
const connecting_line = svg.querySelector('#connecting');
const remembering_line = svg.querySelector('#remembering');
const view_line = svg.querySelector('#play')

// buttons
const seeing_button = document.querySelector('#seeing-btn');
const listening_button = document.querySelector('#listening-btn');
const connecting_button = document.querySelector('#connecting-btn');
const remembering_button = document.querySelector('#remembering-btn');
const view_button = document.querySelector('#view-btn');

// tabs
const seeing_tab = document.querySelector('#seeing-tab');
const listening_tab = document.querySelector('#listening-tab');
const connecting_tab = document.querySelector('#connecting-tab');
const remembering_tab = document.querySelector('#remembering-tab');
const view_tab = document.querySelector('#play-tab');

// back button
const backbtn = document.querySelector('.back-btn');

// soundclouds
const listening_1 = document.querySelector('#listening-01');
const listening_2 = document.querySelector('#listening-02');

// make buttons light up the lines
const buttons = [seeing_button, listening_button, connecting_button, remembering_button, view_button];
const lines = [seeing_line, listening_line, connecting_line, remembering_line, view_line];
const tabs = [seeing_tab, listening_tab, connecting_tab, remembering_tab, view_tab];

// const listening variables for soundcloud
const iframe_01 = document.querySelector('#listening-01');
const listen_01 = SC.Widget(iframe_01);
const iframe_02 = document.querySelector('#listening-02');
const listen_02 = SC.Widget(iframe_02);

const listen_btn_1 = document.querySelector('#before');
const listen_btn_2 = document.querySelector('#after');

const lips_image = document.querySelector('.basic-lips img');

const players = [];
const iframes = document.querySelectorAll('.vimeo-embed');
iframes.forEach(iframe => {
    let player = new Vimeo.Player(iframe);
    players.push(player);
})

beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none'); 
    landing.classList.remove('d-none');
})



buttons.forEach((button, index) => {
    button.addEventListener('mouseover', () => {
        lines[index].querySelectorAll('path').forEach(path => {
            path.classList.add('line-hover');
        })
    });
button.addEventListener('mouseout', () => {
    lines[index].querySelectorAll('path').forEach(path => {
        path.classList.remove('line-hover');
    })
})
button.addEventListener('click', () => {
    tabs[index].classList.remove('d-none');
    backbtn.classList.remove('d-none');
    landing.classList.add('d-none');
    init(index);
});
      
    
});

lines.forEach((line, index) => {
    line.addEventListener('mouseover', () => {
        line.querySelectorAll('path').forEach(path => {
            path.classList.add('line-hover');
        })
        buttons[index].classList.add('button-hover');
    })
    line.addEventListener('mouseout', () => {
        line.querySelectorAll('path').forEach(path => {
            path.classList.remove('line-hover');
        })
        buttons[index].classList.remove('button-hover');
    })
    line.addEventListener('click', () => {
        tabs[index].classList.remove('d-none');
        backbtn.classList.remove('d-none');
        landing.classList.add('d-none');
        init(index);
    });

});

backbtn.querySelector('button').addEventListener('click', () => {
    backbtn.classList.add('d-none');
    tabs.forEach(tab => {
        tab.classList.add('d-none');
    })
    landing.classList.remove('d-none');
    listen_01.pause();
    listen_02.pause();
    lips_image.src = assets + 'lips.gif';
    listen_begin_btn.classList.remove('d-none');

    players.forEach(player => {player.pause()})
})


listen_btn_1.addEventListener('click', () => {
    listen_02.pause();
    listen_01.play();
    listen_btn_1.querySelector('p').textContent = "Now Playing"
    listen_btn_2.querySelector('p').textContent = "Click to play"
})

listen_btn_2.addEventListener('click', () => {
    listen_01.pause();
    listen_02.play();
    listen_btn_2.querySelector('p').textContent = "Now Playing"
    listen_btn_1.querySelector('p').textContent = "Click to play"
})

