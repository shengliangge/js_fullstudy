import apiLogin from './interface/login'

const install = Vue => {
  if (install.install) {
    return;
  }
  install.install = true
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin
        )
      }
    }
  })
}

export default install