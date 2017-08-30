import Mock from 'mockjs'

const mock1= [{
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
}]
const mock2= [{
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
}]

const mock = Mock.mock('mock01', (options)=>{
  console.log(options.body)
  const mock = mock1
  if(options.body){
    const params = JSON.parse(options.body)
    const search_result = mock.filter((item)=>{
      return item.title.indexOf(params.search) >= 0
    })
    console.log(search_result)
    return {list: search_result}
  } else {
    return {list:mock}
  }
  
})

export default mock