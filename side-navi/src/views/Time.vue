<template>
  <div class="time ma-n3">
      <h1>{{ now }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    now: "",
  }),

  mounted : function(){
    let self = this;
    setInterval(function(){ self.getDate() }, 1000);
    },
  
  methods: {
    getDate(){
      // 今日の日付データをcurrentDateに格納
      const currentDate = new Date();

      // 年・月・日・曜日を取得
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      const day = currentDate.getDay();
      const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      // 時間を取得
      const hour = this.formatTime(currentDate.getHours());
      const minute = this.formatTime(currentDate.getMinutes());
      const second = this.formatTime(currentDate.getSeconds());
      this.now = year + "/" + month + "/" + date  + "/" + weekday[day]  + "/ " + hour + ":" + minute + ":" + second;
    },

    formatTime(num) {
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
  background-image: url("~@/assets/img/BackImg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time h1 {
  color: aliceblue;
  margin-left: auto;
  margin-right: 15%;
  margin-top: 10%;
}
</style>