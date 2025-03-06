document.addEventListener("DOMContentLoaded", async () => {
    const mindarThree = new mindarThree.MindARThree({
        container: document.querySelector("#container"),
        imageTargetSrc: "./ArProjcete/marker.mind",
    });

    const { renderer, scene, camera} = mindarThree;
    const anchor = mindarThree.addAnchor(0);

    const loader = new THREE.GLTFLoader();
    loader.load("./ArProjcete/model.glb", (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(0, 0, 0);

        anchor.group.add(model);
    });
    
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
});