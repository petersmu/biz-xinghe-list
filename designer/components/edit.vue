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
      <el-form-item label="组件标识">
        <el-input :value="form.props.compId"
                  @change="changeId"></el-input>
      </el-form-item>
    </el-form>
    <x-button @click.native="changeProp">确认修改</x-button>
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
          compId: this.value.props && this.value.props.compId
        }
      }
    }
  },
  watch: {
    value () {
      console.log(this.form.props)
      this.form.props.mock = this.value.props && this.value.props.mock
      this.form.props.compId = this.value.props && this.value.props.compId
    }
  },
  methods: {
    changeTitle (title) {
      this.form.props.mock = title
      this.$emit('onupdate', this.form)
    },
    changeId (id) {
      this.form.props.compId = id
      this.$emit('onupdate', this.form)
    },
    changeProp(){
      // this.form.props.mock = title
      // this.form.props.compId = id
      this.$emit('onupdate', this.form)
    }
  }
}
</script>
