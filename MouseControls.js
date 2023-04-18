import * as THREE from 'three';

class MouseControls {
    constructor(camera, scene) {
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        document.addEventListener('click', this.onMouseClick.bind(this), false);
        
        this.camera = camera;
        this.scene = scene;
    }

    onMouseClick(event) {
        event.preventDefault();
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children);
        if (intersects.length > 0) {
            console.log(intersects[0].object.name);
            console.log(intersects[0].object.position);
        }
    }
}

export default MouseControls;
