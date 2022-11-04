<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left">
            <h1>Title</h1>
            <p>
            Welcoming messsage
            </p>
            <h2>INSTRUCTIONS:</h2>
                <p>
                    inscructions
                </p>

            <div class="text-center">
            <button id="btn-begin" class="my-5 btn btn-light">start</button>
            </div>
            <h2>CREDITS: </h2>
            
        </div>
    </div>
</div>

<div class="back-btn d-none">
    <button class="btn btn-primary" id="back">Back</button>
</div>

<div id="three-js-container" class="d-none">
    <div id="loading">
        <div class="text-center">
            <h1>loading...</h1>
            <div class="progress"><div class="progressbar"></div></div>
        </div>
    </div>
    <canvas id="c-1"></canvas>
    <canvas id="c-2" class="d-none"></canvas>
    <canvas id="c-3" class="d-none"></canvas>
    
</div>

<div class="popup-window">

    <div class="video">

    </div>

    <div class="button">
        <button class="btn btn-light" id="close">exit</button>
    </div>
</div>

<div class="opening">
<h5>Select a model to view their world</h5>

</div>


<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/assets/`;
</script>

<script src="https://player.vimeo.com/api/player.js"></script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/script.js"></script>