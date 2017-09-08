<template>
  <div>
    <!-- <div class="header">
        <tabs v-model="curTabIndex"></tabs>
      </div> -->
    <el-form :model="form"
             label-width="80px">
      <el-form-item label="接口地址">
        <el-input :value="form.props.apiUrl"
                  @change="changeApi"></el-input>
      </el-form-item>
      <el-form-item label="事件ID">
        <el-input :value="form.props.action"
                  :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="跳转地址">
        <link-editor :pages="linkPages"
                     v-model="form.props.href"
                     @change="changeHref"></link-editor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'
import Input from 'element-ui/lib/input'
import { XButton } from 'vux'
import linkEditor from '@/emulator/components/link-editor/index'

Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)

export default {
  props: {
    value: Object,
    linkPages: Object
  },
  components: {
    XButton,
    linkEditor
  },
  data () {
    return {
      // curTabIndex: 0,
      form: {
        props: {
          apiUrl: this.value.props && this.value.props.apiUrl,
          action: this.value.props && this.value.props.action,
          href: this.value.props && this.value.props.href
        }
      }
    }
  },
  watch: {
    value () {
      this.form.props.apiUrl = this.value.props && this.value.props.apiUrl
      this.form.props.href = this.value.props && this.value.props.href
    }
  },
  methods: {
    changeApi (api) {
      this.form.props.apiUrl = api
      this.$emit('onupdate', this.form)
    },
    changeHref (href) {
      console.log(href)
      this.form.props.href = href
      this.$emit('onupdate', this.form)
    }
  }
}
</script>
