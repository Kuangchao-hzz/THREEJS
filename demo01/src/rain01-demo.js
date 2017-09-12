import THREE from 'three.js'
RainInit()
function RainInit() {
  var scene, camera, renderer

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 1, 1000)
  camera.position.set(0, 0, 200)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000)

  document.getElementsByTagName('body')[0].appendChild(renderer.domElement)

  var geometry = new THREE.Geometry()

  for (let i = 0; i < 1000; i++) {
    var x = 50 * (Math.random() - 0.5)
    var y = 50 * (Math.random() - 0.5)
    var z = 50 * (Math.random() - 0.5)
    var vertex = new THREE.Vector3(x, y, z)
    geometry.vertices.push(vertex)
  }

  var PrintsMaterial = new THREE.PointsMaterial({
    size: 1,
    color: '#fff'
  })

  var points = new THREE.Points(geometry, PrintsMaterial)

  scene.add(points)

  animate()
  function animate () {
    requestAnimationFrame(animate)
    render()
  }
  function render() {
    renderer.render( scene, camera )
    scene.rotation.y += 0.01
  }
}
