var gl; // A global variable for the WebGL context
var black = (0.0, 0.0, 0.0, 0.0);
var blue = (0.0, 0.0, 1.0, 1.0);


function start() {
  var canvas = document.getElementById("glcanvas");

  // Initialize the GL context
  gl = initWebGL(canvas);
  
  // Only continue if WebGL is available and working
  
  if (gl) {
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 1.0, 0.0, 0.4);
    // Enable depth testing
    gl.enable(gl.DEPTH_TEST);
    // Near things obscure far things
    gl.depthFunc(gl.LEQUAL);
    // Clear the color as well as the depth buffer.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  startTimer();
}

function initWebGL(canvas) {
  gl = null;
  
  try {
    // Try to grab the standard context. If it fails, fallback to experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
  
  // If we don't have a GL context, give up now
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
    gl = null;
  }
  
  return gl;
}

function startTimer() {
  setInterval(cb, 1000);
}

function cb() {
  
}



