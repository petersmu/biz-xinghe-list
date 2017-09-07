<template>
  <div class="xh-list">
    <group v-for="(item,index) in compList"
           :key="index"
           class="group-main">
      <cell @click.native="onClickList(item.guid)">
        <div slot="title"
             class="list-cell-title cell-desc">{{item.title || ''}}</div>
        <div slot="inline-desc">
          <span class="cell-desc"
                v-for="(cont, index) in item.desc"
                :key="index">{{cont.id ? cont.id + ': ' : ''}}{{cont.contant || ''}}</span>
          <div class="div-date"
               v-if="item.more">
            <div class="div-left"
                 v-if="item.more.left">{{item.more.left.id}}: {{item.more.left.contant}}</div>
            <div class="div-right"
                 v-if="item.more.right">{{item.more.right.id}}: {{item.more.right.contant}}</div>
          </div>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import store from '../store'
import * as T from '../store/types'
import cloneDeep from 'lodash/cloneDeep'
import mock from '../mock'
import Axios from 'axios'

export default {
  components: {
    Group, Cell
  },
  data () {
    return {
      namespace: 'bizXingheList_' + (new Date()).getTime(),
      compList: this.designtime ? [{
        title: '采购01',
        guid: 'guid-01',
        desc: [
          {
            id: '所属公司',
            contant: '集团'
          },
          {
            id: '负责人',
            contant: '张总'
          },
          {
            id: '发布日期',
            contant: '2016-02-19'
          }
        ],
        more: {
          left: {
            id: '有效期至',
            contant: '2017-05-09'
          }
        }
      }, {
        title: '采购02',
        guid: 'guid-02',
        desc: [
          {
            id: '所属公司',
            contant: '集团'
          },
          {
            id: '负责人',
            contant: '张总'
          },
          {
            id: '发布日期',
            contant: '2016-02-19'
          }
        ],
        more: {
          left: {
            id: '有效期至',
            contant: '2017-05-09'
          }
        }
      }] : []
    }
  },
  props: {
    designtime: Boolean,
    apiUrl: {
      type: String,
      default: 'mock01'
    },
    action: {
      type: String,
      default: ''
    },
    href: {
      type: Object,
      default () {
        return {
          name: ''
        }
      }
    }
  },
  computed: {
    search_params () {
      return this.$store.state[this.namespace].search_params
    }
  },
  methods: {
    onKeywordsSearch (params) {
      this.$store.dispatch(this.namespace + '/' + T.SET_SEARCH_KEYWORD, params)
      this.fetch(this.search_params)
    },
    fetch (params) {
      Axios.post(this.apiUrl, params).then((res) => {
        // console.log(res)
        this.compList = res.data.list
      }).catch((err) => {
        console.log(err)
      })
    },
    onClickList (id) {
      console.log(id)
      // const name = this.href && this.href.name
      if (this.href.name || false) {
        alert(this.href.name)
        this.$router.push({ name: this.href.name, query: { guid: id } })
      }
    }
  },
  created () {
    this.$store.registerModule(this.namespace, cloneDeep(store))
    if (this.$event) {
      // 关键字搜索
      // let onKeywordsEvent = this.action
      if (this.action) {
        this.$event.$on(this.action, (params) => {
          this.onKeywordsSearch(params)
        })
      }
    }

    this.designtime || this.fetch()
  }
}
</script>

<style lang="less">
.wrap {
  text-align: center;
  padding-top: 30px;

  h1 {
    margin-bottom: 10px;
  }
}

.list-cell-title {
  font-size: 17px;
  color: #111111;
  font-weight: bold;
}

.cell-desc {
  width: 100%;
  display: block;
  margin: 5px 0px;
  word-break: keep-all;
  /* 不换行 */
  white-space: nowrap;
  /* 不换行 */
  overflow: hidden;
  /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis;
  /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}

.xh-list .weui-cells {
  &:after,
  &:before,
  .weui-cell__ft {
    display: none;
  }
  margin: 10px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.div-date {
  border-top: 1px dashed #E4E4E4;
  margin: 15px 0 0 0;
  padding-top: 10px;
}

.div-left {
  float: left;
}

.div-right {
  float: right;
}
</style>
