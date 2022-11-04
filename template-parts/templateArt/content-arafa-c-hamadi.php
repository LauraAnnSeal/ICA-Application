<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap" rel="stylesheet">

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/style.css">

<!-- Font Awesome Icons -->
<link href="<?php bloginfo ('stylesheet_directory'); ?>/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet">


<div id="overlay" class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-left">
            <h1>LETU</h1>
            <p>
            LETU (‘ours’ in Kiswahili) presents two digital worlds specifically created to host two East African non-binary bodies, existing through the freedom that is only afforded to us when we enter the digital/online space. One hopes that as visitors meet us within our worlds, explore and experience our individual soundscapes, they will consider their own physical presence in the world, and how much it depends on the permanence and validation of the moments they experience in their daily lives.
            </p>
            <h2>INSTRUCTIONS:</h2>
                <p>
                If you have limited internet connection please view the optimised version of this site, however, if you have good internet speed the full site is available and better represents the intention of the artists. They have made both accessible because the message and intention is clear in both. 
                <br><br>
                The full version of the site includes 3D worlds that you can navigate using your mouse or screen to click and drag. Scroll or pinch to zoom in and experience the whole world. Headphones are required.

                </p>

            <div class="text-center my-5">
                <button id="btn-begin" class="m-1 btn btn-light">Begin full version</button>
                <button id="btn-optimised" class="m-1 btn btn-light">Begin optimised version</button>
            </div>
            
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
            <div>
                <p>Taking too long? Try the optimised version</p>
            </div>
        </div>
        
    </div>
    <canvas id="c-1"></canvas>
    <canvas id="c-2" class="d-none"></canvas>
    <canvas id="c-3" class="d-none"></canvas>
    
</div>

<div class="opening">
<h5>Select a model to view their world</h5>

</div>

<div class="mobile mobile-intro container-fluid">
    <div class="row">
        <div class="col-12 col-md-6 text-center">
            <h3>Select a figure to view their world</h3>

            <div class="row w-100 justify-content-between">
                <div class="col-5 col-lg-4 mx-auto option text-center" id="nyokabi-mobile">
                    <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/assets/nyokabi-intro.png" alt="Nyokabi Figure">
                    <hr>
                    <h4>Nyokabi</h4>
                    <p>they/them</p>
                    <p>artist, Kenya</p>
                </div>

                <div class="col-5 col-lg-4 mx-auto option text-center" id="arafa-mobile">
                    <img src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/assets/arafa-intro.png" alt="Arafa Figure">
                    <hr>
                    <h4>Arafa</h4>
                    <p>they/them</p>
                    <p>artist, Tanzania</p>
                </div>
            </div>

        </div>
    </div>

</div>

<div class="mobile nyokabi-mobile container-fluid">
    <div class="row pt-5">
        <h1>Nyokabi World</h1>
        <div class="vimeo-video">
            <iframe src="https://player.vimeo.com/video/481184632?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div class="col-12 col-md-7 text-center my-5">
            <?php echo do_shortcode('[envira-gallery id="861"]') ?>
        </div>
        <div class="col-12 text-center pb-5">
            <button class="btn-primary btn back-mobile">Return</button>
        </div>
    </div>
</div>

<div class="mobile arafa-mobile container-fluid">
    <div class="row pt-5">
        <h1>Arafa World</h1>
        <div class="vimeo-video">
            <iframe src="https://player.vimeo.com/video/481184539?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div class="col-12 col-md-7 text-center my-5">
            <?php echo do_shortcode('[envira-gallery id="866"]') ?>
        </div>
        <div class="col-12 text-center pb-5">
            <button class="btn-primary btn back-mobile">Return</button>
        </div>
    </div>
</div>

<script>
    const assets = `<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/assets/`;
</script>

<script src="https://player.vimeo.com/api/player.js"></script>

<!-- three.js script -->
<script type="module" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/script.js"></script>

<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/arafa-haji/mobile.js"></script>