<template>
  <v-app>
    <v-app-bar
      app
      color="whitesmoke"
      dark
    >
      <v-container fluid>
        <v-row justify='center'>
          <h1 class="score">SCORE: {{ score }}</h1>
          <v-btn light v-if="is_gameover" onclick="location.reload()" class="ml-3">RETRY</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <div id="app">
        <div id='stage'>
          <div
          class='cell'
          v-for="i in stage_size"
          :key="i"
          :class="{ head: snake_head_index === i - 1,
            body: snake.body_indexes.includes(i - 1),
            fruit: fruit_index === i - 1, }">
          </div>
        </div>
        <p v-if="is_gameover" class="gameover">
          GAME OVER
        </p>
      </div>
      <!-- スマホ用コントローラー -->
      <v-container fluid v-if='is_smartPhone' class="button">
        <v-row justify='center'>
          <v-btn large @click="on_action_btn('↑')" color='#BBDEFB'>
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-row>
        <v-row justify='center'>
          <v-col cols='4'>
            <v-btn large @click="on_action_btn('←')" color='#BBDEFB'>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-col>
          <v-col cols='4'>
            <v-btn large @click="on_action_btn('→')" color='#BBDEFB'>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify='center'>
          <v-btn large @click="on_action_btn('↓')" color='#BBDEFB'>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
  data: () => ({
    stage_length: 10,
    snake: {
      speed: 400,
      direction: '→',
      head_pos: {
        x: 4,
        y: 2,
      },
      body_length: 1,
      body_indexes: [],
    },
      fruit_index: 1,
      is_smartPhone: false,
  }),

  created(){
    this.ramdomize_fruit_index()
    document.addEventListener('keydown', this.on_keydown)
    document.addEventListener('keyup', this.on_keyup)

    this.time_goes()
    this.getDevice()
  },

  computed: {
    stage_size(){
       return this.stage_length * this.stage_length
    },
    snake_head_index() {
      if(this.is_frameout) return null
			return this.snake.head_pos.y * this.stage_length + this.snake.head_pos.x
		},
    score() {
      return (this.snake.body_length - 1) * 100
    },
    is_frameout() {
      const {x, y} = this.snake.head_pos
      return x < 0 || this.stage_length <= x || y < 0 || this.stage_length <= y
    },
    is_collided() {
      return this.snake.body_indexes.includes(this.snake_head_index)
    },
    is_gameover() {
      return this.is_frameout || this.is_collided
    },
  },

  methods: {
    time_goes(){
      if(this.is_gameover) return //ゲームオーバーなら何もしない＝ヘビが進まない
      this.move_snake()
      setTimeout(this.time_goes, this.snake.speed)
    },

    move_snake(){
      if(this.snake.body_indexes.length >= this.snake.body_length) {
        this.snake.body_indexes.shift()
      }

      if(this.snake.body_indexes.length < this.snake.body_length) {
        this.snake.body_indexes.push(this.snake_head_index)
      }

      switch(this.snake.direction){
        case '↑': this.snake.head_pos.y--; break
        case '↓': this.snake.head_pos.y++; break
        case '←': this.snake.head_pos.x--; break
        case '→': this.snake.head_pos.x++; break
      }
    },

    on_keydown(event) {
      switch(event.key) {
        case 'ArrowUp':		this.snake.direction = '↑'; break
        case 'ArrowRight':	this.snake.direction = '→'; break
        case 'ArrowDown':	this.snake.direction = '↓'; break
        case 'ArrowLeft':	this.snake.direction = '←'; break
        case ' ':	this.snake.speed = 150; break
      }
    },
    on_keyup(event) {
      switch(event.key) {
        case ' ':	this.snake.speed = 400; break
      }
    },

    ramdomize_fruit_index() {
      this.fruit_index = Math.floor(Math.random() * this.stage_size)
    },

    getDevice() {
      var ua = navigator.userAgent
      if ((ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Mobile') > 0 )) {
        this.is_smartPhone = true
      }
      console.log(ua)
      console.log(this.is_smartPhone)
    },
    on_action_btn(key) {
      switch(key) {
        case '↑':	this.snake.direction = '↑'; break
        case '→':	this.snake.direction = '→'; break
        case '↓':	this.snake.direction = '↓'; break
        case '←':	this.snake.direction = '←'; break
      }
    },
  },
  watch: {
    snake_head_index(newValue) {
      if(newValue === this.fruit_index) {
        this.snake.body_length++
        this.ramdomize_fruit_index()
      }
    }
  }
};
</script>

<style scoped>
#stage {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  grid-gap: 2px;
  justify-content: center;
  margin-top: 12px;
}

#app {
  text-align: center;
}

.cell {
	width: 30px;
	height: 30px;
	margin: 2px;
	background: whitesmoke;
}

.cell.fruit {
  background: orangered;
}

.cell.head {
	background: dimgray;
}

.cell.body {
  background: darkgray;
}

.score {
  font-size: 1.4rem;
  color: aliceblue;
}

.gameover {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 168px;
  font-size: 1.7rem;
}

.button {
  position: absolute;
  bottom: 3%;
}
</style>
