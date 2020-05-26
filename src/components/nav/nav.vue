<template>
  <div>导航</div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Emit } from "vue-property-decorator";
export default class Nav extends Vue {
  private visible: boolean = false;
  private handleFlag: string = "";
  private title: string = "导航";
  mounted() {};
  @Emit()
  clickBtn (val: boolean): void {
    console.log('12', typeof val)
  }
  @Watch('$route')
  routerChange():void {
    console.log('路由切换了')
  }
}
</script>
<style lang="scss" scoped>
</style>