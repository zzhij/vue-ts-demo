<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="clickBtn('true')">点击</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  /**
   * showMsg
   */
  @Emit() // 不添加 也可以简单触发函数
  public showMsg (val: boolean) {
    console.log('12', typeof val)
  }

  @Emit() // 不添加 也可以简单触发函数
  public clickBtn (val: boolean) {
    console.log('12', typeof val)
    this.showMsg(true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
