document.addEventListener("DOMContentLoaded", () => {
    // Initialize the scene, camera, and renderer
    const container = document.getElementById('when');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create renderer with alpha transparency enabled
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 alpha (transparent)
    container.appendChild(renderer.domElement);

    // Create geometry and material for cubes
    const geometry = new THREE.BoxGeometry(.15, 1.3, .9);
    const loader = new THREE.TextureLoader();
    const material = [
        new THREE.MeshBasicMaterial({ map: loader.load('images/book.jpg') }),
        new THREE.MeshBasicMaterial({ color: 0x2d703c}),
        new THREE.MeshBasicMaterial({ map: loader.load('images/book-side.png')}),
        new THREE.MeshBasicMaterial({ map: loader.load('images/book-side.png')}),
        new THREE.MeshBasicMaterial({ map: loader.load('images/book-side.png')}),
        new THREE.MeshBasicMaterial({ color: 0x2d703c})
        
    ];

    // Variable to hold the current falling object
    let fallingObject = null;

    // Function to create and animate falling objects
    const createFallingObject = () => {
        // Clean up the existing cube if any
        if (fallingObject) {
            scene.remove(fallingObject);
            fallingObject.geometry.dispose(); // Clean up geometry
            //fallingObject.material.dispose(); // Clean up material
            material.forEach(material => material.dispose());
        }

        // Create a new cube
        fallingObject = new THREE.Mesh(geometry, material);
        fallingObject.position.set((Math.random() - 0.5) * 10, 20 + Math.random() * 10, 1);
        fallingObject.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        scene.add(fallingObject);
    };

    // Animate the scene
    const animate = () => {
        requestAnimationFrame(animate);

        if (fallingObject) {
            fallingObject.position.y -= 0.1;
            fallingObject.rotation.x += 0.03;
            fallingObject.rotation.y += 0.05;

            if (fallingObject.position.y < -14) {
                // Create a new falling object when the current one goes out of view
                createFallingObject();
            }
        }

        renderer.render(scene, camera);
    };

    // Create the first falling object
    createFallingObject();

    animate();

    // Set initial camera position
    camera.position.z = 15;

    // Handle window resizing
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});






/* 
te
/*

# in hex color picking is 0x




/*
t
/*

# in hex color picking is 0x

# Found STL working link, but not redering correctly, check this next





    //basic book
    // Create geometry and material for cubes
    /*const geometry = new THREE.BoxGeometry(.15, 1.3, .9);
    const loader = new THREE.TextureLoader();
    const material = [
        new THREE.MeshBasicMaterial({ map: loader.load('book.jpg') }),
        new THREE.MeshBasicMaterial({ color: 0x2d703c}),
        new THREE.MeshBasicMaterial({ map: loader.load('book-side.png')}),
        new THREE.MeshBasicMaterial({ map: loader.load('book-side.png')}),
        new THREE.MeshBasicMaterial({ map: loader.load('book-side.png')}),
        new THREE.MeshBasicMaterial({ color: 0x2d703c})

    ];

    // Variable to hold the current falling object
    let fallingObject = null;

    // Function to create and animate falling objects
    const createFallingObject = () => {
        // Clean up the existing cube if any
        if (fallingObject) {
            scene.remove(fallingObject);
            fallingObject.geometry.dispose(); // Clean up geometry
            //fallingObject.material.dispose(); // Clean up material
            material.forEach(material => material.dispose());
        }

        // Create a new cube
        fallingObject = new THREE.Mesh(geometry, material);
        fallingObject.position.set((Math.random() - 0.5) * 10, 20 + Math.random() * 10, 1);
        fallingObject.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        scene.add(fallingObject);
    };

    // Animate the scene
    const animate = () => {
        requestAnimationFrame(animate);

        if (fallingObject) {
            fallingObject.position.y -= 0.1;
            fallingObject.rotation.x += 0.03;
            fallingObject.rotation.y += 0.05;

            if (fallingObject.position.y < -14) {
                // Create a new falling object when the current one goes out of view
                createFallingObject();
            }
        }

        renderer.render(scene, camera);
    };

    // Create the first falling object
    createFallingObject();

    animate();
*/
// Set initial camera position
























































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


