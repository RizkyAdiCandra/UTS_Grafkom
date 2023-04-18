import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class OrbitControlsWrapper {
    constructor(camera, renderer) {
        this.controls = new OrbitControls(camera, renderer.domElement);
        this.controls.update();
    }

    update() {
        this.controls.update();
    }
}

export default OrbitControlsWrapper;
