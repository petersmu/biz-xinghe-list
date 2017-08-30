import EditComponent from './components/edit'

export default {
  name: '采招列表',

  // 预览区域默认数据
  previewData: {
    props: {
      mock: 'mock01',
      action: 'onKeywordsSearch-{{uuid}}'
    }
  },

  // 编辑区域配置
  ctrl: {

    // 设计器编辑区域显示的编辑组件
    component: EditComponent
  }
}
