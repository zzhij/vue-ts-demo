<template>
  <div class="verify-code">
    <el-form :model="login" :rules="rules" ref="login" >
      <el-form-item prop="codePhone">
        <el-input type="text" autocomplete="off" placeholder="手机号" v-model="login.codePhone" maxlength="11" prefix-icon="iconfont icon-shouji"></el-input>
      </el-form-item>
      <el-form-item prop="verifyCode">
        <div style="display:flex;justify-content:space-between;">
          <el-input type="text" autocomplete="off"  maxlength="6" placeholder="验证码" style="width:178px;min-width:150px;" v-model="login.verifyCode" prefix-icon="iconfont icon-mimasuo"></el-input>
          <!-- <el-button style="height:40px;width:115px;line-height:11px;border:1px solid #0068D6;color:#0068D6;margin-left:10px;" @click="sendCode" :disabled="login.codePhone == '' || Codedisabled"> -->
          <el-button style="height:40px;width:115px;line-height:11px;border:1px solid #0068D6;color:#0068D6;margin-left:10px;" @click="sendCode">
            <span v-if="!sendCodeDisabled">获取验证码</span>
            <span v-if="sendCodeDisabled">{{codeTime+'秒后获取'}}</span>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { VerifyCodeParams } from '@/types/user'

@Component
export default class VerifyCode extends Vue {
  private login: VerifyCodeParams = {
    codePhone: '',
    verifyCode: ''
  }

  rules: object = {
    codePhone: [
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ],
    verifyCode: [
      { required: true, message: '请输入验证码', trigger: 'blur' }
    ]
  }

  private Codedisabled: boolean = false;
  private sendCodeDisabled = false;

  private codeTime = 60;

  // 获取验证码
  @Emit()
  sendCode (): void {
    this.Codedisabled = true
    this.sendSms()
  }

  @Emit()
  // 获取验证码
  async sendSms () {
    const res = await Promise.resolve({ code: 0, message: '成功了' })
    console.log(res)
    if (res.code === 0) {
      this.$message({
        message: '发送成功！',
        type: 'success'
      })

      console.log('点击了')
      const codeInterval = setInterval((): void => {
        console.log('定时器')
        this.codeTime--
        if (this.codeTime <= 0) {
          this.codeTime = 59
          clearInterval(codeInterval)
          this.sendCodeDisabled = false
        }
      }, 1000)
      this.sendCodeDisabled = true
      this.Codedisabled = false
    } else {
      this.$message({
        message: res.message,
        type: 'error'
      })
      this.Codedisabled = false
      this.login.verifyCode = ''
    }
  }
}
</script>
