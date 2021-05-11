onLoad();

function onLoad() {
    /*
     * Get the container where we draw the Square
     * @type @exp;document@call;getElementById
     */
    var container = document.getElementById("container");

    /*
     * Create a THREE.js renderer and add it to the container.
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    /*
     * Create a THREE.js Scene
     */
    var scene = new THREE.Scene();

    /*
     * Create a Perspective camera and add it to the Scene
     */
    var camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
    camera.position.set(0, 0, 3.3333);
    scene.add(camera);

    /*
     * Create a Rectangle 
     */
    var geometry = new THREE.PlaneGeometry(1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xDB1E1E,
        //wireframe: true
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /*
     * Render the Scene 
     */
    renderer.render(scene, camera);
}
