import THREE from 'three.js'

init ()

function init() {
  // 创建一个场景 Scene
  var scene = new THREE.Scene()
  // 创建一个摄像机 Camera
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000)
  camera.position.set(0, 0, 155)
  // 创建一个渲染器 Renderer
  var renderer  = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x212121)
  document.getElementsByTagName('body')[0].appendChild(renderer.domElement)

  // 创建一个球体 SphereGeometry
  var sphereGeometry = new THREE.SphereGeometry(20, 20, 200)
  var sphereMaterial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('image/earth.jpg')
  })
  var mesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

  scene.add(camera)
  scene.add(mesh)
  renderer.render(scene, camera)

  animate()

  function animate () {
    requestAnimationFrame( animate )
    render()
  }

  function render () {
    renderer.render( scene, camera )
    mesh.rotation.y += 0.01
  }
}
