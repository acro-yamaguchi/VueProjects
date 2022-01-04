<template>
  <div id='stage'>
		<div class='cell' v-for="i in stage_size" :key="i" :class="{ head: snake_head_index === i - 1 }"></div>
	</div>
</template>

<script>
  export default {
  data: () => ({
    stage_length: 10,
    snake: {
      head_pos: {
        x: 0,
        y: 0,
      }
    }
  }),

  computed: {
    stage_size(){
       return this.stage_length * this.stage_length
    },
    snake_head_index() {
			return this.snake.head_pos.y * this.stage_length + this.snake.head_pos.x
		},
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

.cell {
	width: 30px;
	height: 30px;
	margin: 2px;
	background: whitesmoke;
}

.cell.head {
	background: dimgray;
}
</style>
