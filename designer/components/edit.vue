<template>
  <div>
    <!-- <div class="header">
      <tabs v-model="curTabIndex"></tabs>
    </div> -->
    <el-form :model="form"
             label-width="80px">
      <el-form-item label="接口地址">
        <el-input :value="form.props.mock"
                  @change="changeTitle"></el-input>
      </el-form-item>
      <el-form-item label="事件ID">
        <el-input :value="form.props.action"
                  :readonly="true"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'
import Input from 'element-ui/lib/input'
import tabs from '@designer/edit-tabs/index'
import {XButton} from 'vux'


Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)

export default {
  props: {
    value: Object
  },
  components: {
    tabs,
    XButton
  },
  data () {
    return {
      // curTabIndex: 0,
      form: {
        props: {
          mock: this.value.props && this.value.props.mock,
          action: this.value.props && this.value.props.action
        }
      }
    }
  },
  watch: {
    value () {
      this.form.props.mock = this.value.props && this.value.props.mock
    }
  },
  methods: {
    changeTitle (title) {
      this.form.props.mock = title
      this.$emit('onupdate', this.form)
    }
  }
}
</script>
