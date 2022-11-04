import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

const beginBtn = document.querySelector('#btn-begin');
const overlay = document.querySelector('#overlay');
const threeJsWindow = document.querySelector('#three-js-container');
const canvas = document.querySelector('#c-1');
const canvas1 = document.querySelector('#c-2');
const canvas2 = document.querySelector('#c-3');
const select_container = document.querySelector('.opening');

const loadingElem = document.querySelector('#loading');
const progressBarElem = loadingElem.querySelector('.progressbar');

const back_div = document.querySelector('.back-btn');
const back_btn = document.querySelector('#back');

let world = 1;

let orbiting = false;
let currentObject;

let visited_Nyokabi = false;
let visited_Arafa = false;


beginBtn.addEventListener('click', () => {
    overlay.classList.add('d-none');
    threeJsWindow.classList.remove('d-none');
    init();
    begin = true;
    
})



function init() {

    let camera, scene, renderer, controls;
    let root;
    let twitter_feed;



    renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    //

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
    camera.position.set( 0, -10, 20 );

    //directional light
    {
        const color = 0x01FFE2;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 100, 0);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);
    }

    {
        const color = 0x01FFE2;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, -100, 0);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);
    }


    {
        const color = 0x01FFE2;
        const intensity = 0.7;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 10, 10);
        light.target.position.set(0, 0, 0);
        scene.add(light);
        scene.add(light.target);
    }
    
    const light = new THREE.AmbientLight( 0x404040, 1 ); 
    scene.add(light);


    controls = new OrbitControls( camera, renderer.domElement );


    
    

    // raycasting
    class PickHelper {
        constructor() {
          this.raycaster = new THREE.Raycaster();
          this.raycaster.far = 300;
          this.pickedObject = null;
          this.pickedObjectSavedColor = 0;
        }
        pick(normalizedPosition, scene, camera) {
          // restore the color if there is a picked object
          if (this.pickedObject) {
            this.pickedObject = undefined;
          }
    
          // cast a ray through the frustum
          this.raycaster.setFromCamera(normalizedPosition, camera);
          // get the list of objects the ray intersected

            if(root !== undefined){
                var intersectedObjects = this.raycaster.intersectObjects(root.children);
                if (intersectedObjects.length) {
                // pick the first object. It's the closest one
                this.pickedObject = intersectedObjects[0].object;
                // console.log(this.pickedObject)
                }
            }

        }
      }
    
      const pickPosition = {x: 0, y: 0};
      const pickHelper = new PickHelper();
      clearPickPosition();

      let loaded = false;
      //add model
    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
        const distance = 10;
        // compute a unit vector that points in the direction the camera is now
        // in the xz plane from the center of the box
        const direction = (new THREE.Vector3())
            .subVectors(camera.position, boxCenter)
            .multiply(new THREE.Vector3(1, -0.8, 1))
            .normalize();
    
        // move the camera to a position distance units way from the center
        // in whatever direction the camera was from the center already
        camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    
        // pick some near and far values for the frustum that
        // will contain the box.
        camera.near = boxSize / 100;
        camera.far = boxSize * 100;
    
        camera.updateProjectionMatrix();
    
        // point the camera to look at the center of the box
        camera.lookAt(boxCenter.x, boxCenter.y - 10, boxCenter.z);
      }
      
    const gltfLoader = new GLTFLoader();
    gltfLoader.load( assets + 'intro.gltf', (gltf) => {
          root = gltf.scene;
          root.position.set(0, 0, 0);
          
          scene.add(root);
          console.log(root);

          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);
    
          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());
    
          // set the camera to frame the box
          frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    
          // update the Trackball controls to handle the new size
          controls.maxDistance = boxSize*1;
          controls.minDistance = boxSize*0.5;
          controls.target.copy(boxCenter);
          controls.update();
    },
    
    // called while loading is progressing
	( xhr ) => {

        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        progressBarElem.style.width = xhr.loaded / xhr.total *100 + '%';

        if(xhr.loaded === xhr.total){
            // count ++;
            // console.log(count);
            orbiting = false;
            loadingElem.style.display = 'none';
            loaded = true;
        }
	},
	// called when loading has errors
	( error ) => {

        console.log( error );
        alert('an error occured, try refreshing the page or viewing the optimised version')


	}
    
    
    );


    const loader = new THREE.TextureLoader();

    // twitter feed
    
    
        const radiusTop = 1.5;  
        const radiusBottom = 1.5;  
        const height = 2;  
        const radialSegments = 100;  
        const geometry = new THREE.CylinderBufferGeometry(
            radiusTop, radiusBottom, height, radialSegments);
            geometry.scale(-1, 1, 1);
        const materials = [
            new THREE.MeshBasicMaterial({
                map: loader.load(assets + 'tweets.jpg'), transparent: true, opacity: 0.5
                }),
            new THREE.MeshBasicMaterial({
                color: 0x000000, transparent: true, opacity: 0,visible: true
                }) 
        ];
        twitter_feed = new THREE.Mesh(geometry, materials);
        scene.add(twitter_feed);
    
      

    window.addEventListener( 'resize', onWindowResize, false );

    function getCanvasRelativePosition(event) {
		const rect = canvas.getBoundingClientRect();
		return {
		x: (event.clientX - rect.left) * canvas.width  / rect.width,
		y: (event.clientY - rect.top ) * canvas.height / rect.height,
		};
	}

	function setPickPosition(event) {
		const pos = getCanvasRelativePosition(event);
		pickPosition.x = (pos.x /  canvas.width ) *  2 - 1;
        pickPosition.y = (pos.y / canvas.height) * -2 + 1;  // note we flip Y
	}

	
    controls.addEventListener('change', () => {

        orbiting = true;
        // console.log(orbiting)

    });

	function clearPickPosition() {
		// unlike the mouse which always has a position
		// if the user stops touching the screen we want
		// to stop picking. For now we just pick a value
		// unlikely to pick something
		pickPosition.x = -100000;
		pickPosition.y = -100000;
  }
  

    canvas.addEventListener('mousemove', setPickPosition);
	canvas.addEventListener('mouseout', clearPickPosition);
    canvas.addEventListener('mouseleave', clearPickPosition);
    canvas.addEventListener('click', () => {
        orbiting = false;
        // console.log(orbiting);
        if(begin){
            checkForClick();
        }
    })


	canvas.addEventListener('touchstart', (event) => {
		// prevent the window from scrolling
		event.preventDefault();
        setPickPosition(event.touches[0]);
        checkForClick();
	}, {passive: false});

	canvas.addEventListener('touchmove', (event) => {
        setPickPosition(event.touches[0]);
        checkForClick();
	});

	canvas.addEventListener('touchend', () => {
        clearPickPosition();
        orbiting = false;
        checkForClick();
	})


    
    function checkForClick(){
        // console.log(currentObject);
        if(currentObject === 'Nyokabi_phone2-m'){
            select_container.innerHTML = `
            <h5>NYOKABI</h5>
            <h6>they/them</h6>
            <p>artist, Kenya</p>
            <button id="Nyokabi" class="btn btn-primary">View World</button>
        `;
        } else if (currentObject === 'Arafa_phone_1-m'){
            select_container.innerHTML = `
            <h5>ARAFA</h5>
            <h6>they/them</h6>
            <p>artist, Tanzania</p>
            <button id="Arafa" class="btn btn-primary">View World</button>`;
        } else {
            select_container.innerHTML = `<h5>Select a model to view their world</h5>`;
        }
    }

    function animate() {

        requestAnimationFrame( animate );
        if(world === 1){
            render();
        }
    
    }

    animate();

    function render(time) {
        time *= 0.001;

        // console.log(orbiting);
        currentObject = undefined;

        if(root !== undefined){
            root.rotation.y += 0.005;
        }
        twitter_feed.rotation.y -=0.0005;
        twitter_feed.rotation.z += 0.0005;
        twitter_feed.rotation.x += 0.0005;
    
        pickHelper.pick(pickPosition, scene, camera);
        controls.update();
            
        if(pickHelper.pickedObject && !orbiting){
            if(pickHelper.pickedObject.name !== undefined){
                currentObject = pickHelper.pickedObject.name;
                document.body.style.cursor = 'pointer'
            } 
        } else {
            document.body.style.cursor = 'auto'
        }

    
        renderer.render( scene, camera );
    
    }

    
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

}


let nyokabi_sound;

function init_1(){
    let camera, scene, renderer, material;

    let particles;

    let root, sound;

    const canvas = document.querySelector('#c-2')

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xF6A7FF, 0.001 );

            // bring in audio listener
        const listener = new THREE.AudioListener();
        camera.add(listener)
        const audioLoader = new THREE.AudioLoader();

        {
            const color = 0xFB7702;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-10, 0, -100);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            scene.add(light.target);
            light.castShadow = true;
        }
    
        {
            const color = 0x02FBF9;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, 100, 0);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            scene.add(light.target);
            light.castShadow = true;
        }
    
    
        {
            const color = 0xffffff;
            const intensity = 0.7;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, -100, 10);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            scene.add(light.target);
            light.castShadow = true;
        }
        
        const light = new THREE.AmbientLight( 0xFFB0A7, 1 ); 
        scene.add(light);

        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        const sprite = new THREE.TextureLoader().load( assets + 'disc.png' );

        for ( let i = 0; i < 500000; i ++ ) {

            const x = 1000 * Math.random() - 500;
            const y = 1000 * Math.random() - 500;
            const z = 1000 * Math.random() - 500;

            vertices.push( x, y, z );

        }

        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

        material = new THREE.PointsMaterial( { size: 1, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
        material.color.setHSL( 1.0, 0.3, 0.7 );

        particles = new THREE.Points( geometry, material );
        particles.position.set(0, -50, 0)
        scene.add( particles );

        //

        renderer = new THREE.WebGLRenderer({canvas});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );


        let controls = new OrbitControls( camera, renderer.domElement );
        //

        //add model

        
        let loaded = false;
        function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
            const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
            const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
            const distance = 100;
            // compute a unit vector that points in the direction the camera is now
            // in the xz plane from the center of the box
            const direction = (new THREE.Vector3())
                .subVectors(camera.position, boxCenter)
                .multiply(new THREE.Vector3(1, -0.8, 1))
                .normalize();
        
            // move the camera to a position distance units way from the center
            // in whatever direction the camera was from the center already
            camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
        
            // pick some near and far values for the frustum that
            // will contain the box.
            camera.near = boxSize / 100;
            camera.far = boxSize * 100;
        
            camera.updateProjectionMatrix();
        
            // point the camera to look at the center of the box
            camera.lookAt(boxCenter.x, boxCenter.y + 10, boxCenter.z);
        }
        
        const gltfLoader = new GLTFLoader();
        gltfLoader.load( assets + 'nyokabi.gltf', (gltf) => {
            root = gltf.scene;
            root.position.set(0, 0, 0);
            root.rotation.y = 90*Math.PI/180;
            
            nyokabi_sound = new THREE.PositionalAudio( listener );
            audioLoader.load( assets + 'Nyokabi_Audio.mp3', function ( buffer ) {

                nyokabi_sound.setLoop(true)
                nyokabi_sound.setBuffer( buffer );
                nyokabi_sound.setRefDistance( 10 );
                nyokabi_sound.play()

            } );
            root.children[103].add( nyokabi_sound );
        

            root.children.forEach(child => {
                child.castShadow = true; //default is false
                child.receiveShadow = true; //default
            })
            scene.add(root);
            console.log(root);

            // compute the box that contains all the stuff
            // from root and below
            const box = new THREE.Box3().setFromObject(root);
        
            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());
        
            // set the camera to frame the box
            frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
        
            // update the Trackball controls to handle the new size
            controls.maxDistance = boxSize*3;
            controls.minDistance = boxSize*0.1;
            controls.target.copy(boxCenter);
            controls.update();
        },
        
        // called while loading is progressing
        ( xhr ) => {

            // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            progressBarElem.style.width = xhr.loaded / xhr.total *100 + '%';
            if(xhr.loaded === xhr.total){
                // count ++;
                // console.log(count);
                orbiting = false;
                loadingElem.style.display = 'none';
                loaded = true;
            }
        },
        // called when loading has errors
        ( error ) => {

            console.log( error );
            alert('an error occured, try refreshing the page or viewing the optimised version')

        }
        
        
        );


        // environment
        {
            const geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
            // invert the geometry on the x-axis so that all of the faces point inward
            geometry.scale( - 1, 1, 1 );

            const texture = new THREE.TextureLoader().load( assets + 'nyokabi.jpg' );
            const material = new THREE.MeshBasicMaterial( { map: texture } );

            const mesh = new THREE.Mesh( geometry, material );
            mesh.rotation.y = -90*Math.PI/180;

            scene.add( mesh );
        }

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }



    //

    function animate() {

        requestAnimationFrame( animate );

        if(world !== 2  && root !== undefined){
            nyokabi_sound.pause();
        } 
    

        if(world === 2){
            render();
        }

    }

    function render() {

        const time = Date.now() * 0.00005;

        const h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
        material.color.setHSL( h, 0.5, 0.5 );
        
        particles.position.y = 50*Math.sin(time);
        particles.position.x = 50*Math.cos(time);
        particles.position.z = 50*Math.sin(time)

        renderer.render( scene, camera );

        if(root !== undefined){
            root.position.y = -4 + 4* Math.sin(time*2);;
        }

    }
}

let arafa_sound;

function init_2(){
    let camera, scene, renderer, material;

    let particles;

    let root, sound;

    const canvas = document.querySelector('#c-3')

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0xF6A7FF, 0.001 );

            // bring in audio listener
        const listener = new THREE.AudioListener();
        camera.add(listener)
        const audioLoader = new THREE.AudioLoader();

        {
            const color = 0xffffff;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-10, 0, -100);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            scene.add(light.target);
            light.castShadow = true;
        }
    
        {
            const color = 0xffffff;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, 100, 0);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            scene.add(light.target);
            light.castShadow = true;
        }
    
    
        {
            const color = 0xffffff;
            const intensity = 0.7;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, -100, 10);
            light.target.position.set(0, 0, 0);
            scene.add(light);
            scene.add(light.target);
            light.castShadow = true;
        }
        
        const light = new THREE.AmbientLight( 0xFFB0A7, 1 ); 
        scene.add(light);

        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        const sprite = new THREE.TextureLoader().load( assets + 'disc.png' );

        for ( let i = 0; i < 200000; i ++ ) {

            const x = 1000 * Math.random() - 500;
            const y = 1000 * Math.random() - 500;
            const z = 1000 * Math.random() - 500;

            vertices.push( x, y, z );

        }

        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

        material = new THREE.PointsMaterial( { size: 1, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
        material.color.setHSL( 1.0, 0.3, 0.7 );

        particles = new THREE.Points( geometry, material );
        particles.position.set(0, -50, 0)
        scene.add( particles );

        //

        renderer = new THREE.WebGLRenderer({canvas});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );


        let controls = new OrbitControls( camera, renderer.domElement );
        //

        //add model

        let loaded = false;

        function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
            const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
            const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
            const distance = 100;
            // compute a unit vector that points in the direction the camera is now
            // in the xz plane from the center of the box
            const direction = (new THREE.Vector3())
                .subVectors(camera.position, boxCenter)
                .multiply(new THREE.Vector3(1, -0.8, 1))
                .normalize();
        
            // move the camera to a position distance units way from the center
            // in whatever direction the camera was from the center already
            camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
        
            // pick some near and far values for the frustum that
            // will contain the box.
            camera.near = boxSize / 100;
            camera.far = boxSize * 100;
        
            camera.updateProjectionMatrix();
        
            // point the camera to look at the center of the box
            camera.lookAt(boxCenter.x, boxCenter.y + 10, boxCenter.z);
        }
        
        const gltfLoader = new GLTFLoader();
        gltfLoader.load( assets + 'arafa.gltf', (gltf) => {
            root = gltf.scene;
            root.position.set(0, -40, 0);
            root.rotation.y = 180*Math.PI/180;
            
            arafa_sound = new THREE.PositionalAudio( listener );
            audioLoader.load( assets + 'Arafa_Audio.mp3', function ( buffer ) {

                arafa_sound.setLoop(true)
                arafa_sound.setBuffer( buffer );
                arafa_sound.setRefDistance( 10 );
                arafa_sound.play()

            } );

            root.children[3].children[63].material = new THREE.MeshPhongMaterial({color: 0x287DE7, flatShading: true, transparent: true, opacity: 0.7})
            root.children[0].add( arafa_sound );
        

            // root.children.forEach(child => {
            //     child.castShadow = true; //default is false
            //     child.receiveShadow = true; //default
            // })
            scene.add(root);
            console.log(root);

            // compute the box that contains all the stuff
            // from root and below
            const box = new THREE.Box3().setFromObject(root);
        
            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());
        
            // set the camera to frame the box
            frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
        
            // update the Trackball controls to handle the new size
            controls.maxDistance = boxSize*3;
            controls.minDistance = boxSize*0.1;
            controls.target.copy(boxCenter);
            controls.update();
        },
        
        // called while loading is progressing
        ( xhr ) => {

            // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            progressBarElem.style.width = xhr.loaded / xhr.total *100 + '%';
            if(xhr.loaded === xhr.total){
                // count ++;
                // console.log(count);
                orbiting = false;
                loadingElem.style.display = 'none';
                loaded = true;
            }
        },
        // called when loading has errors
        ( error ) => {

            console.log( error );
            alert('an error occured, try refreshing the page or viewing the optimised version')


        }
        
        
        );


        // environment
        {
            const geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
            // invert the geometry on the x-axis so that all of the faces point inward
            geometry.scale( - 1, 1, 1 );

            const texture = new THREE.TextureLoader().load( assets + 'arafa.jpg' );
            const material = new THREE.MeshBasicMaterial( { map: texture } );

            const mesh = new THREE.Mesh( geometry, material );
            // mesh.rotation.y = -90*Math.PI/180;

            scene.add( mesh );
        }

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }



    //

    function animate() {

        requestAnimationFrame( animate );

        if(world !== 3  && root !== undefined){
            arafa_sound.pause();
        } 
    

        if(world === 3){
            render();
        }

    }

    function render() {

        const time = Date.now() * 0.00005;

        const h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
        material.color.setHSL( h, 0.5, 0.5 );
        
        particles.position.y = 50*Math.sin(time);
        particles.position.x = 50*Math.cos(time);
        particles.position.z = 50*Math.sin(time)

        renderer.render( scene, camera );

        if(root !== undefined){
            root.position.y = -4 + 4* Math.sin(time*2);
        }

    }
}






window.addEventListener('click', e => {
    if(e.target.id === 'Nyokabi'){
        console.log('Nyokabi');
        canvas.classList.add('d-none');
        canvas1.classList.remove('d-none');
        select_container.classList.add('d-none');
        world = 2;
        if(!visited_Nyokabi){
            loadingElem.style.display = 'flex';
            progressBarElem.style.width = '0px';
            init_1();
            visited_Nyokabi = true;
        }else {
            nyokabi_sound.play();
        }
        back_div.classList.remove('d-none');

    }
    if(e.target.id === 'Arafa'){
        console.log('Arafa');
        canvas.classList.add('d-none');
        canvas2.classList.remove('d-none');
        select_container.classList.add('d-none');
        world = 3;
        if(!visited_Arafa){
            loadingElem.style.display = 'flex';
            progressBarElem.style.width = '0px';
            init_2();
            visited_Arafa = true;
        } else {
            arafa_sound.play();
        }
        back_div.classList.remove('d-none');
    }
})

back_btn.addEventListener('click', () => {
    // loadingElem.style.display = 'flex';
    // progressBarElem.style.width = '0px';
    canvas.classList.remove('d-none');
    canvas1.classList.add('d-none');
    canvas2.classList.add('d-none');
    select_container.classList.remove('d-none');
    world = 1;
    back_div.classList.add('d-none');
    select_container.innerHTML = '<h5>Select a model to view their world</h5>';
})