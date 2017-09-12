### Scene（场景）
```
  // 创建一个场景 即一个三维空间
  var scene = new THREE.Scene()
```
### Material & Texture（材质 & 纹理）
```
  // 创建一个材质
  var material = new THREE.MeshBasicMaterial({
    color: 材质颜色,
    wireframe: 是否以线框显示
  })
```
### Geometry（几何）
```
  // 创建一个物体 例如四方体
  var geometry = new THREE.BoxGeometry(宽度，长度，深度，宽度分割，高度分割，深度分割)
```
### Object （物体）
### Light （光线）
### Camera （相机）
### Renderer & Shader (渲染器 & 着色器)
### Loader （加载器）
