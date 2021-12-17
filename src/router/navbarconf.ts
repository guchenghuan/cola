const navlists: Array<any> = [
  {
    name: '竞品性能',
    isActive: false,
    path: '/Quality'
  },
  {
    name: '通用工具',
    isactive: false,
    isSubShow: false,
    children: [
      {
        name: '覆盖率',
        isActive: false,
        path: '/vuex'
      }
    ]
  },
  {
    name: 'Web专项',
    isactive: false,
    isSubShow: false,
    children: [
      {
        name: 'XSS巡检',
        isActive: false,
        path: '/Axios'
      }
    ]
  },
  {
    name: '活动专项',
    isactive: false,
    isSubShow: false,
    children: [
      {
        name: '积分流程',
        isActive: false,
        path: '/Test'
      }
    ]
  },
  {
    name: '播放专项',
    isactive: false,
    isSubShow: false,
    children: [
      {
        name: '卡顿监控',
        isActive: false,
        path: '/pns'
      }
    ]
  },
  {
    name: '反馈建议',
    isactive: false,
    path: '/proback'
  }

  // {
  //   name: 'Vuex',
  //   isActive: false,
  //   path: '/vuex'
  // },
  // {
  //   name: 'Axios',
  //   isActive: false,
  //   path: '/axios'
  // },
  // {
  //   name: 'Test',
  //   isActive: false,
  //   path: '/test'
  // },
  // {
  //   name: 'pns',
  //   isActive: false,
  //   path: '/pns'
  // }
]

export default navlists
