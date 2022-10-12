import Vue from 'vue'
import CxltToastr from 'cxlt-vue2-toastr'

import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

//Vue.use(CxltToastr)

var toastrConfigs = {
  position: 'top right',
  showDuration: 5000,
  Delay: 1000,
  timeOut: 5000
}
Vue.use(CxltToastr, toastrConfigs)
