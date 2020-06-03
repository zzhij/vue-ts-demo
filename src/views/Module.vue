<template>
  <div class="about">
    <div>
      <nav></nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Emit } from 'vue-property-decorator'
import Nav from '@/components/nav/nav.vue'
@Component({
  components: {
    Nav
  }
})
export default class Module extends Vue {
  private visible = false;
  private handleFlag = '';
  private title = '导航';
  @Emit()
  clickBtn (val: boolean): void {
    console.log('12', typeof val)
  }

  @Watch('$route')
  routerChange (): void {
    console.log('路由切换了')
  }
}
</script>
<style lang="scss" scoped>

</style>
