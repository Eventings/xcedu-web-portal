import * as actives from './activity-functions'
const { registerApplication, start, navigateToUrl } = singleSpa

registerApplication(
  '@xcedu/navbar',
  // () => System.import('@xcedu/navbar'),
  function () {
    return System.import('@xcedu/navbar')
  },
  actives.navbar
)

registerApplication(
  '@xcedu/user',
  // () => System.import('@xcedu/user'),
  function () {
    return System.import('@xcedu/user')
  },
  actives.user
)

registerApplication(
  '@xcedu/space',
  // () => System.import('@xcedu/space'),
  function () {
    return System.import('@xcedu/space')
  },
  actives.space
)

registerApplication(
  '@xcedu/email',
  // () => System.import('@xcedu/email'),
  function () {
    return System.import('@xcedu/email')
  },
  actives.email
)

registerApplication(
  '@xcedu/forum',
  // () => System.import('@xcedu/forum'),
  function () {
    return System.import('@xcedu/forum')
  },
  actives.forum
)

registerApplication(
  '@xcedu/testBank',
  // () => System.import('@xcedu/testBank'),
  function () {
    return System.import('@xcedu/testBank')
  },
  actives.testBank
)

registerApplication(
  '@xcedu/course-selection',
  // () => System.import('@xcedu/course-selection'),
  function () {
    return System.import('@xcedu/course-selection')
  },
  actives.courseSelection
)

registerApplication(
  '@xcedu/conference-management',
  function () {
    return System.import('@xcedu/conference-management')
  },
  actives.conferenceManagement
)

start({ urlRerouteOnly: true })
if (location.pathname === '/') {
  // 获取url从旧的系统中带过来的token
  let tokenParams = window.location.search.replace(/\?.*token=(.+)(&.*|#.*)?$/, (w, l) => l)
  const token = tokenParams.split('&')[0]
  if(token){
    if(!localStorage.getItem('token')){
      localStorage.setItem('token',token)
    }
  }
  // 判断是否有token 如果有 跳到默认页面 如果没有 跳到登陆页
  if(localStorage.getItem('token')){
    navigateToUrl('/mfs-email')
  }else{
    navigateToUrl('/user/login')
  }
}


