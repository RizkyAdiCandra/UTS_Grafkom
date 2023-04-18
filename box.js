import * as THREE from 'three';

class Box {
    constructor(size, color, name) {
        this.mesh = new THREE.Mesh(
            new THREE.BoxGeometry(size, size, size),
            new THREE.MeshStandardMaterial({
                color: color,
            })
        );
        
        this.mesh.name = name; // Menambahkan nama objek
        
        this.select = function () {
        // Menambahkan fungsi untuk melakukan seleksi objek
            this.mesh.material.color.set(0x00ff00);
        };
        this.deselect = function () {
        // Menambahkan fungsi untuk menghilangkan seleksi objek
            this.mesh.material.color.set(color);
        };
    }
}

export default Box;
