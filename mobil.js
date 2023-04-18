import * as THREE from 'three';

class CarGeometry {
  constructor() {
    // membuat material dasar
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.4,
      roughness: 0.6
    });

    // membuat material kaca
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.2,
      opacity: 0.3,
      transparent: true
    });

    // membuat material roda
    const wheelMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.2,
      roughness: 0.8
    });

    // membuat bodi mobil
    const bodyGeometry = new THREE.BoxGeometry(3, 1, 1.5);
    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bodyMesh.position.set(0, 0.5, 0);

    // membuat kaca depan
    const windshieldGeometry = new THREE.BoxGeometry(2.8, 0.7, 0.1);
    const windshieldMesh = new THREE.Mesh(windshieldGeometry, glassMaterial);
    windshieldMesh.position.set(0, 0.85, 0.75);

    // membuat kaca samping
    const sideWindowGeometry = new THREE.BoxGeometry(0.2, 0.6, 1.2);
    const leftWindowMesh = new THREE.Mesh(sideWindowGeometry, glassMaterial);
    leftWindowMesh.position.set(1.5, 0.7, 0);
    const rightWindowMesh = new THREE.Mesh(sideWindowGeometry, glassMaterial);
    rightWindowMesh.position.set(-1.5, 0.7, 0);

    // membuat roda
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
    const frontLeftWheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
    frontLeftWheelMesh.position.set(1, 0.3, 0.75);
    const frontRightWheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
    frontRightWheelMesh.position.set(-1, 0.3, 0.75);
    const backLeftWheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
    backLeftWheelMesh.position.set(1, 0.3, -0.75);
    const backRightWheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
    backRightWheelMesh.position.set(-1, 0.3, -0.75);

    // membuat grup mesh
    const carGroup = new THREE.Group();
    carGroup.add(bodyMesh);
    carGroup.add(windshieldMesh);
    carGroup.add(leftWindowMesh);
    carGroup.add(rightWindowMesh);
    carGroup.add(frontLeftWheelMesh);
    carGroup.add(frontRightWheelMesh);
    carGroup.add(backLeftWheelMesh);
    carGroup.add(backRightWheelMesh);

    this.mesh = carGroup;
  }
}

export default CarGeometry;
