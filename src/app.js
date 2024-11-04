import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// Take canvas tag
const canvas = document.querySelector("canvas#webgl");

// Creating a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x999999);
// creating of camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 500);
camera.position.z = 5; 
camera.position.y = 5; 
camera.position.x = 5; 

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias:true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshLambertMaterial({ color: 'red' });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true
scene.add(cube);

const light = new THREE.AmbientLight('white', 0.01);
scene.add(light);
const directionalLight = new THREE.DirectionalLight("red", 2)
directionalLight.position.set( 0.5, 1.0, 0.5 ).normalize();
scene.add(directionalLight)

const controls = new OrbitControls(camera, document.body);
const gridHelper = new THREE.GridHelper(50, 50, 0xffffff, 0x7b7b7b); 
gridHelper.position.y = -0.75
scene.add(gridHelper);

function animate (){
    window.requestAnimationFrame(animate)

    controls.update()
    camera.lookAt(cube.position)
    renderer.render(scene, camera);
}
animate()


