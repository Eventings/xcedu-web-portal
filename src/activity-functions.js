const MODULE_USER_PREFIX = '/user'
const MODULE_SPACE_PREFIX = '/space'


const SPEICAL_EXIST_NAVBAR_URLS = ['/user/change/pwd']

function startsWith (location, prefix) {
  return location.pathname.startsWith(prefix)
}


export function user (location) {
  return startsWith(location, MODULE_USER_PREFIX)
}

export function navbar (location) {
  return SPEICAL_EXIST_NAVBAR_URLS.includes(location.pathname) || !location.pathname.startsWith(MODULE_USER_PREFIX)
}


export function space (location) {
  return startsWith(location, MODULE_SPACE_PREFIX)
}
