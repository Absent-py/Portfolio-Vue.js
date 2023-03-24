<template>
  <Renderer shadow resize="window" orbitCtrl="true" ref="renderer">
    <Camera :position="{ x: 0, y: 15, z: 25 }" />
    <Scene background="Cornsilk" >
      <PointLight cast-shadow :position="{ x: 0, y: 5, z: 0 }" intensity="0.5" />
      <GltfModel
          :position=" {x: 0, y: 0, z:0 }"
          cast-shadow
          receive-shadow
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
