<template>
  <div class="xh-list">
    <group v-for="(item,index) in compList"
           :key="index"
           class="group-main">
      <cell link="/biz-mycomponent-innerPage">
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
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Group, Cell
  },
  data () {
    return {
      mock1: [{
        title: '星河采购01',
        desc: [
          {
            id: '所属公司',
            contant: '星河集团'
          },
          {
            id: '发布日期',
            contant: '2016-02-19'
          }
        ],
        more: {
          left: {
            id: '招标经办人',
            contant: '曾海莉'
          },
          right: {
            id: '电话',
            contant: '13413033005'
          }
        }
      }, {
        title: '星河采购02',
        desc: [
          {
            id: '所属公司',
            contant: '星河集团'
          },
          {
            id: '发布日期',
            contant: '2016-02-19'
          }
        ],
        more: {
          left: {
            id: '招标经办人',
            contant: '曾海莉'
          },
          right: {
            id: '电话',
            contant: '13413033005'
          }
        }
      }, {
        title: '星河采购03',
        desc: [
          {
            id: '所属公司',
            contant: '星河集团'
          },
          {
            id: '发布日期',
            contant: '2016-02-19'
          }
        ],
        more: {
          left: {
            id: '招标经办人',
            contant: '曾海莉'
          },
          right: {
            id: '电话',
            contant: '13413033005'
          }
        }
      }, {
        title: '星河采购04',
        desc: [
          {
            id: '所属公司',
            contant: '星河集团'
          },
          {
            id: '发布日期',
            contant: '2016-02-19'
          }
        ],
        more: {
          left: {
            id: '招标经办人',
            contant: '曾海莉'
          },
          right: {
            id: '电话',
            contant: '13413033005'
          }
        }
      }],
      mock2: [{
        title: '融信采购01',
        desc: [
          {
            id: '所属公司',
            contant: '融信集团'
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
        title: '融信采购02',
        desc: [
          {
            id: '所属公司',
            contant: '融信集团'
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
        title: '融信采购03',
        desc: [
          {
            id: '所属公司',
            contant: '融信集团'
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
      }],
      lastId: ''
    }
  },
  props: {
    mock: {
      type: String,
      default: 'mock1'
    },
    compId: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      result: 'results'
    }),
    compList () {
      console.log(this.$store.module)
    //   // const f = this.$store.getters.results.filter((item)=>{
    //   //   return item.id === this.compId
    //   // })
    //   // return f[0].cont
      
    //   // this.$store.getters.results.map((item,index) => {
    //   //   // console.log(item)
    //   //   if (item.id === this.compId) {
    //   //     // console.log(item)
    //   //     return item.cont
    //   //   }
    //   // })
      
    //   // const state = this.$store.state['biz-mycomponent-example']
    //   // console.log(state)
      return this.result[this.compId] || []
    },
    state () {
      console.log(this.$store.state['biz-mycomponent-example'])
      return this.$store.state['biz-mycomponent-example'].result
    }
  },
  methods: {
    toInner () {
      this.$router.push('/biz-mycomponent-innerPage')
    },
    ...mapActions({
      changeList: 'changeList',
      removeList: 'removeList',
      addList: 'addList'
    })
  },
  watch: {
    mock () {
      this.changeList({ id: this.compId, cont: this[this.mock] })
    },
    compId () {
      this.changeList({ id: this.compId, cont: this[this.mock] })
      // this.result = this.$store.getters.results[this.compId]
      this.lastId = this.compId
    }
  },
  created () {
    this.changeList({ id: this.compId, cont: this[this.mock] })
    // this.$store.dispatch({
    //   type: 'newList',
    //   meta: this.mock1
    // })
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
  border-top: 0.5px dashed #E4E4E4;
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
