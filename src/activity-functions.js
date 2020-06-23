const MODULE_USER_PREFIX = '/user'
const MODULE_SPACE_PREFIX = '/space'
const MODULE_EMAIL_PREFIX = '/mfs-email'
const MODULE_FORUM_PREFIX = "/mfs-forum"
const MODULE_TESTBANK_PREFIX = "/mfs-testBank"


const SPEICAL_EXIST_NAVBAR_PWD_URLS = [ '/user/change/pwd', '/user/change/skin' ]

function startsWith (location, prefix) {
  return location.pathname.startsWith(prefix)
}

export function user (location) {
  return startsWith(location, MODULE_USER_PREFIX)
}

export function navbar (location) {
  return SPEICAL_EXIST_NAVBAR_PWD_URLS.includes(location.pathname) || (!location.pathname.startsWith(MODULE_USER_PREFIX) && !location.pathname.startsWith(MODULE_TESTBANK_PREFIX) && !location.pathname.startsWith(MODULE_FORUM_PREFIX))
}

export function space (location) {
  return startsWith(location, MODULE_SPACE_PREFIX)
}

export function email (location) {
  return startsWith(location, MODULE_EMAIL_PREFIX)
}

export function forum (location) {
  return startsWith(location, MODULE_FORUM_PREFIX)
}

export function testBank (location) {
  return startsWith(location, MODULE_TESTBANK_PREFIX)
}
