import * as actives from './activity-functions'
const { registerApplication, start, navigateToUrl } = singleSpa

registerApplication(
  '@xcedu/navbar',
  () => System.import('@xcedu/navbar'),
  actives.navbar
)

registerApplication(
  '@xcedu/user',
  () => System.import('@xcedu/user'),
  actives.user
)

registerApplication(
  '@xcedu/space',
  () => System.import('@xcedu/space'),
  actives.space
)

registerApplication(
  '@xcedu/email',
  () => System.import('@xcedu/email'),
  actives.email
)

start({ urlRerouteOnly: true })
if (location.pathname === '/') {
  // 判断是否有token 如果有 跳到默认页面 如果没有 跳到登陆页
  if(localStorage.getItem('token')){
    navigateToUrl('/mfs-email')
  }else{
    navigateToUrl('/user/login')
  }
}


