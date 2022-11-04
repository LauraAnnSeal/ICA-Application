const beginBtn = document.querySelector('#btn-begin');
const iframeOne = document.querySelector('#video1');
const iframeTwo = document.querySelector('#video2');
const switchControl = document.querySelector('#switchControl');
const title = document.querySelector('#title');
const body = document.querySelector('body');
var playerOne = new Vimeo.Player(iframeOne);
var playerTwo = new Vimeo.Player(iframeTwo);

var playVideoOne = true;
var playVideoTwo = false;

beginBtn.addEventListener('click', () => {
    overlay.style.opacity = 0;
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
    playerOne.play();
    playerTwo.play();
    playerOne.setVolume(1);
    playerTwo.setVolume(0);
    body.style.cursor = `url('${assets}assets/images/drum2.png'), auto`;
});

switchControl.addEventListener("click", () => 
{
    if (playVideoOne === true)
    {
        iframeOne.style.display = "none";
        iframeTwo.style.display = "block";
        playVideoOne = false;
        playVideoTwo = true;
        body.style.cursor = `url('${assets}assets/images/star2.png'), auto`;
    }

    else if (playVideoTwo === true)
    {
        iframeOne.style.display = "block";
        iframeTwo.style.display = "none";
        playVideoOne = true;
        playVideoTwo = false;
        body.style.cursor = `url('${assets}assets/images/drum2.png'), auto`;

    }
});

var currentPos = "";
vdo_play = setInterval(function ()
{
    playerOne.on('timeupdate', function (getAll)
    {
        currentPos = getAll.seconds;
    });

    if (currentPos > 104 && currentPos < 110)
    {
        iframeOne.style.display = "none";
        iframeTwo.style.display = "block";
        playVideoOne = false;
        playVideoTwo = true;
        switchControl.style.display = "none";
        title.style.display = 'block';
        title.style.opacity = "1";
        body.style.cursor = 'auto';

        setTimeout(function()
        { 
            title.style.opacity = "0";
        }, 20000);
    }

    else if (currentPos > 180)
    {
        title.style.opacity = "1";
        clearInterval('vdo_play');
        setTimeout(function()
        { 
            title.style.opacity = "0";
        }, 20000);
    }

}, 1000);