import * as THREE from 'three';
import Land from './land.js';
import Box from './box.js';
import keyboardIInput from './keyboardControls.js';
// import * as dat from 'dat.gui';
import MouseControls from './MouseControls.js';
import OrbitControlsWrapper from './orbitControls.js';
import Car from './mobil.js';
import LatterRBufferGeometry from './LatterRBufferGeometry.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 100);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(new THREE.Color(0x00AEC2B6));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement);

// Orbit Controls
const orbitControls = new OrbitControlsWrapper(camera, renderer);

// Controller
const keyboard = new keyboardIInput();

// Lighting Ambient
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Land
const land = new Land();
scene.add(land);

// Box
const box = new Box(1, 0x00DBE4C6, 'box1');
box.mesh.position.set(-1.6000000000000003, -0.499999999999, -1.8000000000000005);
scene.add(box.mesh);


// Mouse
const mouse = new MouseControls(camera, scene);

// Car
const car = new Car();
car.mesh.position.set(1.5,-0.7,0);
scene.add(car.mesh);

// latter R
const latterR = new LatterRBufferGeometry(1, 1.5);
scene.add(latterR.mesh);




// position gui
// let kendali = {
    // x: 0,
    // y: 0,
    // z: 0
// }

// scale gui
// let scale = {
//     x: 1,
//     y: 1,
//     z: 1
// }


// let gui = new dat.GUI();



// var folder1 = gui.addFolder('position');
// position
// folder1.add(kendali, 'x', -4, 4,0.1);
// folder1.add(kendali, 'y', -4, 4,0.1);
// folder1.add(kendali, 'z', -4, 4,0.1);

// var folder2 = gui.addFolder('scale');
// scale
// folder2.add(scale, 'x', 0, 4,0.1);
// folder2.add(scale, 'y', 0, 4,0.1);
// folder2.add(scale, 'z', 0, 4,0.1);

// var folder3 = gui.addFolder('rotation');
// rotation
// folder3.add(box.mesh.rotation, 'x', 0, 4,0.1);
// folder3.add(box.mesh.rotation, 'y', 0, 4,0.1);
// folder3.add(box.mesh.rotation, 'z', 0, 4,0.1);






// Draw
const draw = () => {
    // mouse click
    mouse.raycaster.setFromCamera(mouse.mouse, camera);
    let results = mouse.raycaster.intersectObjects(scene.children);
    results.forEach( benda => {
        if (benda.object.name == 'box1') {
            box.select();
        } else {
            box.deselect();
        }
    });


    
    

    // box position GUI
    // box.mesh.position.set(kendali.x,kendali.y,kendali.z);
    // box.mesh.scale.set(scale.x,scale.y,scale.z);
    // box.mesh.rotation.set(box.mesh.rotation.x,box.mesh.rotation.y,box.mesh.rotation.z);

    // mouse result
    // mouse.raycaster.setFromCamera(mouse.mouse, camera);
    // let results = mouse.raycaster.intersectObjects(scene.children);
    // results.forEach( benda => {
        // console.log(benda.object);
    // });


    // keyboard input position
    if (keyboard.keys['w'] || keyboard.keys['W']) car.mesh.position.y += 0.1;
    if (keyboard.keys['s'] || keyboard.keys['S']) car.mesh.position.y -= 0.1;
    if (keyboard.keys['a'] || keyboard.keys['A']) car.mesh.position.x -= 0.1;
    if (keyboard.keys['d'] || keyboard.keys['D']) car.mesh.position.x += 0.1;
    if (keyboard.keys['x'] || keyboard.keys['X']) car.mesh.position.z -= 0.1;
    if (keyboard.keys['z'] || keyboard.keys['Z']) car.mesh.position.z += 0.1;

    // keboar input rotation

    // keyboard input camera
    if (keyboard.keys['ArrowLeft']) camera.position.x -= 0.1;
    if (keyboard.keys['ArrowRight']) camera.position.x += 0.1;
    if (keyboard.keys['ArrowUp']) camera.position.y += 0.1;
    if (keyboard.keys['ArrowDown']) camera.position.y -= 0.1;

    

    // box
    // box.mesh.rotation.x += 0.01;
    // box.mesh.rotation.y += 0.01;
    

    
    renderer.render( scene, camera);
    requestAnimationFrame(draw);
}
draw();