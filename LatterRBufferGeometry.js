import * as THREE from 'three';

export default class LetterRBufferGeometry {
  constructor(size, height) {
    const geometry = new THREE.BufferGeometry();

    const halfSize = size / 2;

    // Array of vertex positions
    const vertices = new Float32Array([
      -halfSize, 0, -halfSize, // Bottom left
      halfSize, 0, -halfSize, // Bottom right
      halfSize, 0, halfSize, // Top right
      -halfSize, 0, halfSize, // Top left
      0, height, 0 // Top center
    ]);

    // Array of indices
    const indices = new Uint16Array([
      0, 1, 2, // Bottom face
      2, 3, 0, // Bottom face
      0, 4, 1, // Left face
      1, 4, 2, // Front face
      2, 4, 3, // Right face
      3, 4, 0  // Back face
    ]);

    // Adding attributes to geometry
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    // Creating material
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });

    // Creating mesh
    this.mesh = new THREE.Mesh(geometry, material);

    
  }
}
