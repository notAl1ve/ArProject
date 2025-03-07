document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Проверка доступности зависимостей
        if (!window.THREE || !window.MindARThree) {
            throw new Error("Библиотеки не загружены!");
        }

        // Инициализация MindAR
        const mindarThree = new window.MindARThree({
            container: document.getElementById("container"),
            imageTargetSrc: "./ArProjecte/marker.mind",
        });

        // Получаем объекты Three.js
        const { renderer, scene, camera } = mindarThree;
        
        // Загрузка 3D-модели
        const loader = new window.THREE.GLTFLoader();
        loader.load("./ArProjecte/mecha_low_poly_phr_reupload.glb", (gltf) => {
            const model = gltf.scene;
            model.scale.set(0.5, 0.5, 0.5);
            mindarThree.addAnchor(0).group.add(model);
        });

        // Запуск AR
        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

    } catch (error) {
        console.error("Ошибка:", error);
    }
});