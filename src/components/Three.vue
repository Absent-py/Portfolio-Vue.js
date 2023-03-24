<template>
    <Renderer alpha orbitCtrl="true" ref="renderer" height="400px">
      <Camera :position="{ x: 0, y: 0, z: 20 }"/>
      <Scene>
        <PointLight :position="{ x: 0, y: 5, z: 0 }" :intensity=0.5 />
        <GltfModel
            :position="{ x: 0, y: -4, z: 0 }"
            src="/room3_light.gltf"
            ref="model"
            @load="onReady"
        />
      </Scene>
    </Renderer>
  </template>
  
  <script>
  export default {
    mounted() {
      const renderer = this.$refs.renderer;
      const model = this.$refs.model;
    },
    onReady(e) {
      console.log('Ready', e)
    }
  };
  </script>
