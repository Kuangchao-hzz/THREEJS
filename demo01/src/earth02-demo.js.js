import THREE from 'three.js'
import Stats from 'stats.js'
var OrbitControls = require('three-orbit-controls')(THREE)

var camera, scene, renderer, mesh, container, stats

EarthInit ()
function EarthInit() {
  console.log(Stats)
  container = document.getElementsByTagName( 'body' )[0]
  /*------------------------------------创建场景--------------------------------------------*/
  scene = new THREE.Scene()
  /*------------------------------------创建摄像机--------------------------------------------*/
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 1, 1000 )
  // 设置摄像机位置
  camera.position.set(0, 0, 300)
  var orbitControls = new OrbitControls(camera)
  orbitControls.autoRotate = true

  /*------------------------------------创建渲染器--------------------------------------------*/
  renderer = new THREE.WebGLRenderer()
  // 设置渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 清除并设置背景色
  // renderer.setClearColor(0xff0000)
  // 创建canvas标签并添加到指定元素中
  container.appendChild(renderer.domElement)
  stats = new Stats()
  container.appendChild(stats.dom)

  /*------------------------------------创建粒子--------------------------------------------*/
  var posXYZ = latlngToXYZ(chinaData, 100)
  // 创建一个几何体
  var geometry = new THREE.Geometry()
  var posXYZLength = posXYZ.length
  for (let i = 0; i < posXYZLength; i++) {
    var x = posXYZ[i].x
    var y = posXYZ[i].y
    var z = posXYZ[i].z
    // Vector3对象的构造函数.用来创建一个三维向量的对象
    var vertex = new THREE.Vector3(x, y, z)
    geometry.vertices.push(vertex)
  }
  // 创建粒子
  var material = new THREE.PointsMaterial({
    // 粒子大小
    size: 0.1,
    // 粒子颜色
    color: 0xffffff
  })
  var points = new THREE.Points(geometry, material)
  // 将粒子添加到场景中
  scene.add(points)
  // 执行动画
  animate()
}
/*------------------------------------生成粒子的x y z 坐标--------------------------------------------*/
function latlngToXYZ (coord, radius) {
  var sphereArray = []
  coord.forEach(function ($item, $index) {
    var lat = $item.lat
    var lng = $item.lng
    var radLat = (lat * Math.PI) / 180
    var radLng = (lng * Math.PI) / 180
    var subRadius = radius * Math.cos(radLat)
    var posX = subRadius * Math.cos(radLng)
    var posY = subRadius * Math.sin(radLng)
    var posZ = radius * Math.sin(radLat)

    sphereArray.push({
      x: posX,
      y: posY,
      z: posZ
    })
  })
  return sphereArray
}
/*------------------------------------跑动画--------------------------------------------*/
function animate () {
  requestAnimationFrame( animate )
  render()
}

function render () {
  renderer.render( scene, camera )
  scene.rotation.y += 0.01
  scene.rotation.x += 0.01
  stats.update();
}



