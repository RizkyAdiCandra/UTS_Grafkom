import * as THREE from 'three';

function Texture(){
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('');
    texture.repeat.set(10,10);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}

export default Texture;