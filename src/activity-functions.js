const MODULE_USER_PREFIX = '/user'
const MODULE_SPACE_PREFIX = '/space'
const MODULE_EMAIL_PREFIX = '/mfs-email'
const MODULE_FORUM_PREFIX = "/mfs-forum"
const MODULE_TESTBANK_PREFIX = "/mfs-testBank"
const MODULE_COURSE_SELECTION_PREFIX = "/mfs-course-selection"
const MODULE_CONFERENCE_MANAGEMENT_PREFIX = "/mfs-conference-management"

const NOT_EXIST_NAVBAR_URL_PREFIXES = [MODULE_USER_PREFIX, MODULE_TESTBANK_PREFIX, MODULE_FORUM_PREFIX,
  MODULE_COURSE_SELECTION_PREFIX, MODULE_CONFERENCE_MANAGEMENT_PREFIX]
const SPEICAL_EXIST_NAVBAR_PWD_URLS = [ '/user/change/pwd', '/user/change/skin' ]

function startsWith (location, prefix) {
  return location.pathname.startsWith(prefix)
}

export function user (location) {
  return startsWith(location, MODULE_USER_PREFIX)
}

export function navbar (location) {
  return SPEICAL_EXIST_NAVBAR_PWD_URLS.includes(location.pathname) || !NOT_EXIST_NAVBAR_URL_PREFIXES.some(function (prefix) {
    return location.pathname.startsWith(prefix)
  })
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

export function courseSelection (location) {
  return startsWith(location, MODULE_COURSE_SELECTION_PREFIX)
}

export function conferenceManagement (location) {
  return startsWith(location, MODULE_CONFERENCE_MANAGEMENT_PREFIX)
}
