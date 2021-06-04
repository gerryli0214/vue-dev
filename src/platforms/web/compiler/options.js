/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  // 负责编译class,style,v-model
  modules,
  // 指令
  directives,
  // pre标签
  isPreTag,
  // 是否为一元标签
  isUnaryTag,
  // 一些必须用于props的属性
  mustUseProp,
  // 只有开始的标签
  canBeLeftOpenTag,
  // 保留标签
  isReservedTag,
  // 命名空间
  getTagNamespace,
  // 静态key
  staticKeys: genStaticKeys(modules)
}
