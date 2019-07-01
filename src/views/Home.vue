<template>
  <div class="home">
      <div class="play-area">
          <PlayArea></PlayArea>
      </div>
      <div class="info">
          <h2>LEADERBOARD</h2>
          <el-table
                  :data="tableData"
                  style="width: 100%"
                  :row-class-name="tableRowClassName">
              <el-table-column
                      prop="place"
                      label="Place"
                      width="180">
              </el-table-column>
              <el-table-column
                      prop="name"
                      label="Name"
                      width="180">
              </el-table-column>
              <el-table-column
                      prop="points"
                      label="Points taken"
                      width="180">
              </el-table-column>
          </el-table>
          <h2>Your score so far:</h2>
          <h1 class="score"> 200€</h1>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayArea from '@/components/PlayArea.vue'

export default {
  name: 'home',
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 === 0) {
                return 'success-row';
            } else if (rowIndex%2 === 1) {
                return 'warning-row';
            }
            return '';
        }
    },
data() {
    return {
        tableData: [
            {
                place: '1',
                name: 'Tom',
                points: '22'
            },
            {
                place: '1',
                name: 'Tom',
                points: '22'
            },
            {
                place: '1',
                name: 'Tom',
                points: '22'
            },
            {
                place: '1',
                name: 'Tom',
                points: '22'
            }
            ]
    }
},
  components: {
      PlayArea
  }
}
</script>
<style>
  @import url(http://fonts.googleapis.com/css?family=Changa+One);
  .home {
      width: 100%;
      display: flex;
      flex-direction: row;
  }
  .play-area {
      max-width: 70vw;
      width: 50vw;
  }
  .info {
      max-width: 30vw;
      width: 50vw;
  }
  .el-table .warning-row {
      background: white;
  }

  .el-table .success-row {
      background: #c4376f;
  }
    .score {
        color: #b32656;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 36px;
        line-height: 90px;
        letter-spacing: 4px;
        margin: 0;
    }
</style>
