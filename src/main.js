// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {Plugin1, Plugin2} from './plugin';
import "./assets/css/index.css";

Vue.config.productionTip = false;
Vue.prototype.getData = function(){
    return 1;
}

Vue.use(Plugin1, '11111');
Vue.use(Plugin2, '222222');

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})

// Vue.directive('pin', {
//     bind: function (el, binding, vnode) {
//       el.style.position = 'fixed'
//       el.style.top = binding.value + 'px'
//     }
// })

Vue.directive('pin', {
    bind: function (el, binding, vnode) {
      el.style.position = 'fixed'
      var s = (binding.arg == 'left' ? 'left' : 'top')
      el.style[s] = binding.value + 'px'
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
