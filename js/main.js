document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById('when');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
})









































































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


