// 深度遍历对象，如果是数组就进入递归，
// 如果是对象就将对象传入所传函数，如果对象有children 属性就继续递归
const deepTravel = (obj, func) => {
  if (Array.isArray(obj)) {
    obj.map(item => deepTravel(item, func))
    return
  }
  const { toString } = Object.prototype
  if (toString.call(obj) == '[object Object]') {
    func(obj)
  }
  if (obj.children && obj.children.length) {
    deepTravel(obj.children, func)
  }
}
const list = {}
const shook = [{
  name: 'zcx',
  age: 18,
  children: [{
    'name': 'superman',
    age: 99,
    gender: 'male'
  }, {
    'name': 'superman',
    age: 99,
    gender: 'male'
  }, {
    'name': 'superman',
    age: 99,
    gender: 'male'
  }]
}, {
  name: 'zcx2',
  age: 18,
  children: []
}, {
  name: 'zcx',
  age: 10,
  children: []
}]
// deepTravel(shook, item => {
//   const name = item.name
//   // list[name] = list[name] || []
//   // list[name].push(item)
//   list[name] = item
// })
// console.log(list);

for (const i in shook) {
    if (shook[i].children && !shook[i].children.length) {
        delete shook[i]
        console.log(shook);
    } else if (shook[i].children && !shook[i].children.length) {
        console.log('wrong');
    }
}

console.log('------------------------------------------------------------------------');
// 递归遍历数组中的对象，找到指定name的对象，使用缓存（利用闭包）
const getStageInfo = (stageConfig) => {
  const cache = {}

  const findStage = (stages, name) => {
    if (Array.isArray(stages)) {
      let stageInfo
      for (const stage of stages) {
        stageInfo  = findStage(stage, name)
        if (stageInfo) {
          break
        }
      }
      return stageInfo
    }
    if (stages.children) {
      const stageInfo = findStage(stages.children, name)
      if (stageInfo) {
        stageInfo.unshift(stages)
      }
      return stageInfo
    }
    if (stages.name == name) {
      return [stages]
    }
    return false
  }
  return name => {
    if (cache[name]) { // 从缓存中读取
      return cache[name]
    }
    const stageInfo = findStage(stageConfig, name)
    if (stageInfo) {
      cache[name] = stageInfo  // 存入缓存
    }
    return stageInfo
  }
}
const stageConfig = [{
  name: 'zcx',
  children: [{
    name:'zcx-1',
    children: [{
      name: 'zcx-1-1'
    }]
  }]
}, {
  name: 'batman',
  children: [{
    name: 'batman-1'
  }]
}]
const stage = getStageInfo(stageConfig)('zcx-1-1')
console.log(stage);
