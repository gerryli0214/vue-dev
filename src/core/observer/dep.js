/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'
import config from '../config'

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * 发布-订阅模式
 */
export default class Dep {
  // 同一时间只能有一个watcher被计算
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }
  // 添加订阅者
  addSub (sub: Watcher) {
    this.subs.push(sub)
  }
  // 移除订阅者
  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    // 稳定订阅列表，返回一个数组内容拷贝？@todo
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      // 确定订阅者的执行次序
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      // 执行订阅对象批量更新？？？@todo
      // 每个subs都有update方法
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// 设置当前时间点的执行对象
Dep.target = null
const targetStack = []
// 进栈
export function pushTarget (target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}
// 出栈
export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
