import THREE from 'three.js'
import '../static/public.css'

function init() {
  // get the browser size
  var width = window.innerWidth
  var height = window.innerHeight

  // create scene
  var scene = new THREE.Scene()

  // create Perspective camera
  var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 800)

  // set camera position
  camera.position.x = 10
  camera.position.y = 10
  camera.position.z = 30
  camera.lookAt(scene.position)

  var renderer = new THREE.WebGLRenderer()

  renderer.setClearColor('#444')
  renderer.setSize(width, height)

  /*
  * =====================================
  *             创建一个box
  * =====================================
  * */
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4, 3, 3, 3)
  var cubeMaterial = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0x00ff00
  })
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.position.x = 0
  cube.position.y = 0
  cube.position.z = -4
/*
*=====================================
*             创建一个平面
* =====================================
* */
  // var planeGeometry = new THREE.PlaneGeometry(180, 180)
  // var planeMaterial = new THREE.MeshLambertMaterial({
  //   color: 'yellow'
  // })
  // var plane = new THREE.Mesh(planeGeometry, planeMaterial)
  // console.log(-0.5 * Math.PI)
  // plane.rotation.x = -0.5 * Math.PI
  // plane.position.x = 0
  // plane.position.y = 0
  // plane.position.Z = 0
  // var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  // console.log(planeGeometry.parameters.height / 5)
  // for (var j = 0; j < (planeGeometry.parameters.height / 5); j++) {
  //   for (var i = 0; i < planeGeometry.parameters.width / 5; i++) {
  //     var rnd = Math.random() * 0.75 + 0.25;
  //     var cubeMaterial = new THREE.MeshLambertMaterial();
  //     cubeMaterial.color = new THREE.Color(rnd, 0, 0);
  //     var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  //
  //     cube.position.z = -((planeGeometry.parameters.height) / 2) + 2 + (j * 5);
  //     cube.position.x = -((planeGeometry.parameters.width) / 2) + 2 + (i * 5);
  //     cube.position.y = 2;
  //
  //     scene.add(cube);
  //   }
  // }

  var light = new THREE.AmbientLight( 0xffffff )
  var axisHelper = new THREE.AxisHelper(10)

  scene.add(axisHelper)
  scene.add(cube)
  // scene.add(plane)
  scene.add(light)

  document.body.appendChild(renderer.domElement)

  renderer.render(scene, camera)
}

init()
