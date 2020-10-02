import apiLogin from './interface/login'
import apiRegister from './interface/register'

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
          apiLogin,
          apiRegister
        )
      }
    }
  })
}

export default install