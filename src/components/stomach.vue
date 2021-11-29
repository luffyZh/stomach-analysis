<template>
  <div>
    <canvas ref="canvasRef" width="400" height="500"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
export default {
  name: "stomach",
  data() {
    return {};
  },
  methods: {
    initStomach() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvasRef,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const geometry2 = new THREE.BoxGeometry();
      const material2 = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
      const cube2 = new THREE.Mesh(geometry2, material2);
      scene.add(cube2);

      cube2.position.x = 3;

      camera.position.z = 150;
      const light = new THREE.DirectionalLight(0xffffff, 1, 100);
      light.position.set(15, -25, 15);
      scene.add(light);

      // const light2 = new THREE.DirectionalLight(0xffffff, 1, 100);
      // light2.position.set(-15, 25, 15);
      // scene.add(light2);

      renderer.render(scene, camera);

      // instantiate a loader
      const loader = new OBJLoader();
      const mtl = new MTLLoader();

      mtl.load("static/stomach.mtl", function (materials) {
        loader.setMaterials(materials);
        // load a resource
        loader.load(
          // resource URL
          "static/stomach.obj",
          // called when resource is loaded
          function (object) {
            scene.add(object);

            console.log(object);
            object.scale.y = object.scale.z = object.scale.x = 0.05;
            renderer.render(scene, camera);

            const animate = function () {
              requestAnimationFrame(animate);

              object.rotation.y += 0.01;
              renderer.render(scene, camera);
            };

            animate();
          },
          // called when loading is in progresses
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          // called when loading has errors
          function (error) {
            console.log("An error happened");
          }
        );
      });
    },
  },
  mounted() {
    this.initStomach();
  },
};
</script>

<style>
</style>
