{
  type: 1,
  tag,
  attrsList: attrs,
  attrsMap: makeAttrsMap(attrs),
  rawAttrsMap: {},
  parent,
  children: [],
  // 命名空间
  ns,
  for: '迭代器，比如数组',
  alias: '别名，比如item',
  // input
  type: 'checkbox',
  key: 'exp',
  ref: val,
  refInFor: Boolean,
  // 插槽
  slotTarget: '插槽名',
  slotTargetDynamic: Boolean,
  slotScope: '作用域插槽值',
  scopedSlots: {
    name: {
      slotTarget: '插槽名',
      slotTargetDynamic: Boolean,
      children: [], // 插槽内所有的子元素
      slotScope: '作用域插槽的值'
    }
  },
  slotName: '具名插槽名称',
  // 动态组件
  component: 'componentName',
  inlineTemplate: Boolean,
  staticClass: '静态class',
  classBinding: '动态class',
  staticStyle: '静态style',
  styleBinding: '动态style',
  nativeEvents: {},
  events: {},
  props: {},
  attrs: {},
  dynamicAttrs: {},
  directives: [{}],
  processed: '标记已经被处理了',
  // v-if
  ifConditions: [],
  elseIf: elseIfCondition,
  else: true,
  // v-pre
  pre: true,
  once: Boolean
}