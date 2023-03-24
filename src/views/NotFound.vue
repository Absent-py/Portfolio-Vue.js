<template>
    <div :style="{ backgroundImage: createBackgroundString }" class="main">
        <h1 class="big-font">404</h1>
        <h1 class="less-big-font">Oops! Content not found...</h1>
        <h1 class="less-big-font">Make sure that you type everything right!</h1>
    </div>
</template>

<script>
export default {
    data() {
    return {
        show1: false,
        angle: '10',
        color1: 'black',
        color2: 'MidnightBlue'
    }
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2})`;
    }
  }
}
</script>

<style scoped>
.main {
    height: 100vh;
}
.big-font {
    font-size: 120px;
    padding-top: 10%;
}
.less-big-font {
    font-size: 60px;
}
</style>