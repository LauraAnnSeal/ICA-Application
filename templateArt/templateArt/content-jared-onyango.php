<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>

<link rel="stylesheet" href="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/jared/css/style.css">

<div class="container-fluid" id="overlay">
        <div class="row">
            <div class="col-12 col-md-6 offset-md-3 text-center">
                <h1>Jua Kali Pedestrians</h1>
                <h2></h2>
                <h4 class="mt-5">INTRODUCTION:</h4>
                <p>
                    The map acts as a brief summary of some parts of the city of Nairobi. The map is interactive and relies on audience navigation. Choose the active points on the map to digitally explore certain elements of the city. 
                    
                </p>
    
                <h4 class="mt-5">INSTRUCTIONS:</h4>
                <p>
                   Headphones are required. Click on the flashing icons on the map to travel and experience different locations.
                </p>
                <button id="btn-begin" class="m-5 px-5 btn btn-danger">start</button>
    
                <h4>CREDITS:</h4>
                <p>
                    Dancers: Jackson Atulo and Jack Bryton, choreography Jared ONYANGO <br> <br> Thanks to: Lea Pischke, Lameck Nyagudi, and Fidelis Keli  

                </p>
            </div>
        </div>
    </div>

    <div class="d-none">
        <audio id="overall-audio" src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/jared/assets/audio/MainMapBeginning_01.mp3" preload loop></audio>
    </div>
    <div class="error">
        <div class="row">
            <div class="col-12 col-md-6 offset-md-6 text-center">
                <h1>Rotate your device</h1>
                <p>This artwork is designed to be viewed in landscape mode, please rotate your device to view the work.</p>
            </div>
        </div>
    </div>

    <div id="mapid">
        <div id="contentOverlay">
            <div id="overlayText">

            </div>
        </div>  
    </div>

    <div id="container-1" class="d-none">
    <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 id="contentTitle">Outer - Ring / Juja Road Round About</h1>
                    <p id="contentText"><br> <br>
                    The Outer-ring road branches off from the Thika road and cuts across all the way towards Embakasi to Airport North Road in what must have been a perfect design to seclude the areas it encloses from the slums around it.  <br> <br> 
                    The Outering road encloses within the areas on the east of Uhuru Highway; Makongeni, Jericho, Makadara, Buru Buru, Kimathi Estate, Kaloleni, Shauri Moyo, Jericho, Maringo, Majengo and Ofafa Jericho. Though today these neighbourhoods are much-maligned, in these areas lived Kenyans who were in comparatively privileged positions as their services were very necessary and irreplaceable for the smooth running of the colonial factories in the sixties.They constituted the well-to-do class, and employees of the Kenya Railway Company, Kenya Pipeline Company, Kenya Power and Lighting Company, Nairobi city council staffs, the now defunct Kenya Bus Service drivers and conductors, public hospital nurses and staffs, factory and city engineers, airport and aviation staffs and so on. Equally, their way of looking at things were relatively tied to the proximity of the colonial gaze - their masters.<span id="dots">...</span><span id="more"> <br> <br>

                    But beyond, on the outside of the Outer Ring road are the areas that were abandoned by the colonial rule, and continued to remain out of order (till just recently when the slum upgrading scheme was launched to devolve development services to all areas of  every county). The areas includes Korogocho, Kariobangi, Dandora, Soweto, Baba Dogo, Kayole, Kariadudu etc all of which extends as low income habitations for masses whose only means of survival (during the 1970s and 80s) was by crossing over, or transgressing the exclusive Outer-Ring road, to walk long distances to work at the Nairobi’s Industrial Area commonly known as Viwandani. 
                    
                    <br> <br>
                    To put it in Marxists terms, these were labourers who lived only so long as they found work, and who found work only so long as their labour increased capital. These labourers had to sell themselves piecemeal, as a commodity, and therefore were exposed to all manner of unpleasant competitions and to the fluctuations of the market. Which made them sink deeper and deeper below the conditions of existence of their own class, rendering them desperate and dependable, as their conditions worsened even more rapidly. 
                    <br> <br>
                    In the late 1990s, and with the increasing city population plus the daily challenges posed by city roads, (which of course is still a traffic nightmare) the majority of them gave up the crossing over routine in order to walk to search for work in Viwandani. And instead they resorted to creatively devise their own living which also demanded them to redirect the skills and experiences they had already in welding, motor vehicle mechanics, tailoring, plumbing, electrical wiring etc 
                    <br> <br>
                    In those days, in the early stages of developments of new ways - of living, thinking and working - their desperate manoeuvres became laboratories for explorations, experimenting and practicing repairs. Daily, they had to spend long hours toiling under the hot sun, which birthed the name “Jua Kali'', which literally translates to “hot sun” - or   ‘working under hot sun’ if you wish. <br> <br>
                    From this one can note that Jua Kali as an innovative practice came from people living in the informal settlements beyond the exclusive Outer Ring road. People who got tired of daily exploitations and routine of having to walk long distances to the established colonial factories. This was not the case with the Kenyans living within areas enclosed by the Outer Ring road as they enjoyed the comforts and benefits their employment offered them  - they needed no alternative living as did the Jua Kali practitioners. Today though, Jua Kali has become a way of thinking. Many enterprises spread across the city  embrace it as an independent way of thinking and an independent mode of life.


                    </p><button onclick="readMore()" id="myBtn" class="btn btn-dark">Read more</button><br> <br>

                    <audio id="RingRoadAudio" class="players" controls>
                    <source src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/jared/assets/audio/OuterRingSoundFile_01.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio><br> <br>

                    <button id="GoToPointSeven" class="travel btn btn-danger my-5">Click Here To Travel To The Sivo Estate</button><br> <br>
                </div>
            </div>
        </div>
    </div>


<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> --> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>  -->
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
<script>
    const assets = '<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/jared/';
</script>

<script src="https://player.vimeo.com/api/player.js"></script>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>
<script src="<?php bloginfo ('stylesheet_directory'); ?>/assets/artists/jared/js/script.js"></script>