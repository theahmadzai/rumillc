export const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.0/8 are considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
)

export const SITE_URL = isLocalhost ? 'http://127.0.0.1:8000' : 'http://rumillc.com'

export const requestStatus = Object.freeze({
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 3
})

export const movement = Object.freeze({
  PREV: 0,
  NEXT: 1
})
