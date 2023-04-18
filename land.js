import * as THREE from 'three';

function Land(){
    this.name = 'land';
    const geometry = new THREE.BoxGeometry(15,0.1,20);
    const material = new THREE.MeshStandardMaterial({
        color:0x00999999
    });
    const mesh = new THREE.Mesh(geometry,material);
    mesh.position.set(0,-1,0);
    mesh.name = this.name;
    return mesh;
}

export default Land;