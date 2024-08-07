document.addEventListener("DOMContentLoaded", () => {
    // Initialize the scene, camera, and renderer
    const container = document.getElementById('when');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create geometry and material for cubes
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Function to create and animate falling objects
    const createFallingObject = () => {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set((Math.random() - 0.5) * 10, 20 + Math.random() * 10, (Math.random() - 0.5) * 10);
        cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        scene.add(cube);

        const fallSpeed = 0.1;
        const rotationSpeedX = 0.03;
        const rotationSpeedY = 0.05;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.position.y -= fallSpeed;
            cube.rotation.x += rotationSpeedX;
            cube.rotation.y += rotationSpeedY;

            if (cube.position.y < -10) {
                
                scene.remove(cube);
                cube.geometry.dispose(); // Clean up geometry
                cube.material.dispose(); // Clean up material
            }

            renderer.render(scene, camera);
        };
        animate();
    };

   

    // Set initial camera position
    camera.position.z = 15;

    createFallingObject();


    // Handle window resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});



































































//large 2d image spinner


/*document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#when');
    const imageSrcs = [
        'images/cube-removebg-preview.png',
        // Add more image paths as needed
    ];

    let zcounter = 1;

    const createImage = () => {
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];
        img.style.left = `${Math.random() * 100}%`;
        img.style.zIndex = zcounter++;
        img.style.animation = 'none';  // Disable animations
        img.offsetHeight;  // Trigger reflow to reset animation
        img.style.top = `${Math.random() * -100}px`; // Random vertical starting position
        img.style.animation = `fall ${2 + Math.random() * 3}s linear, spin3d ${2 + Math.random() * 3}s linear`;  // Apply animations


        container.appendChild(img);

        img.addEventListener('animationend', () => {
            img.remove();
            setTimeout(createImage, 0); // Create the next image immediately after the current one finishes
        });
    };

    createImage(); // Start the first image
});
*/


