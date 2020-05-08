import * as actives from './activity-functions'
const { registerApplication, start, navigateToUrl } = singleSpa

axios.get('/api/v1/sites/current/config').then(({ data }) => {
  const customProps = data.siteConfig
  // user module
  registerApplication(
    '@xcedu/navbar',
    () => System.import('@xcedu/navbar'),
    actives.navbar,
    customProps
  )

  registerApplication(
    '@xcedu/user',
    () => System.import('@xcedu/user'),
    actives.user,
    customProps
  )

  registerApplication(
    '@xcedu/space',
    () => System.import('@xcedu/space'),
    actives.space,
    customProps
  )

  start({ urlRerouteOnly: true })
  if (location.pathname === '/') {
    navigateToUrl('/space')
  }
})


