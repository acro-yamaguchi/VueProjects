<template>
  <div class="time ma-n3">
      <h1>Hello World</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    
  }),
  
  methods: {
    set2fig(num) {
      // 桁数が1桁だったら先頭に0を加えて2桁に調整する
      var ret;
      if( num < 10 ) { ret = "0" + num; }
      else { ret = num; }
      return ret;
    },
  },
}
</script>

<style scoped>
.time {
  background-image: url("~@/assets/img/maxresdefault.jpg");
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time h1 {
  color: aliceblue;
}
</style>