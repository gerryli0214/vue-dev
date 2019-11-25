import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * Vue构造函数
 * @param options
 * @constructor
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 初始化vue _init方法
initMixin(Vue)
// 初始化data, prop watch等
stateMixin(Vue)
// 初始化发布-订阅事件模型
eventsMixin(Vue)
// 初始化组件生命周期钩子
lifecycleMixin(Vue)
// 初始化nextTick, render
renderMixin(Vue)

export default Vue
