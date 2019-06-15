let arr = [1,2,3,4,5,6,7,8,9,10]

// 将指定数组按指定大小分成不同的块
let chunk = function (arr, size) {
    let ret = []
    for (let i in arr) {
        let pos = Math.floor(i/size)
        ret[pos] = ret[pos] || []
        ret[pos].push(arr[i])
    }
    return ret
}
console.log(chunk(arr, 4));

let chunk2 = (arr, size) => {
  let tempArr = []
  let result = []
  for (let i in arr) {
    if (i % size == 0) {
      i = Number(i)
      tempArr = arr.slice(i, i+size)
      result.push(tempArr)
    }
  }
  return result
}
console.log(chunk2(arr, 4));

console.log('------------------------------------------------------------------');

/**
 * 简单数组的交集
 * @param {Array} a
 * @param {Array} b
 */
Utils.getIntersect = (a, b) => {
  if (a.constructor === Array && b.constructor === Array) {
    const set1 = new Set(a)
    const set2 = new Set(b)
    return Array.from(new Set([...set1].filter(x => set2.has(x))))
  }
  return null
}

console.log('------------------------------------------------------------------');

function insertItem(item, arr) {
  const { order } = item
  if (typeof arr[order] !== 'number') {
    arr[order] = item
    return
  }
  let moveBegin
  let moveEnd
  let pos
  let i = order + 1

  while (arr[i]) {
    if (arr[i].order > order) {
      if (!moveBegin) {
        moveBegin = i
        pos = i
      }
    }
    i += 1
  }

  if (moveBegin) {
    moveEnd = i
  } else {
    pos = i
  }

  if (!moveEnd) {
    arr[pos] = item
    return
  }

  // 需要移动
  for (let i = moveEnd; i >= moveBegin; i -= 1) {
    arr[i + 1] = arr[i]
  }
  arr[pos] = item
}

/**
 * 根据数组的 order 字段排序
 * @param {Array} source
 */
Utils.sortByOrder = (source = []) => {
  if (!Array.isArray(source)) {
    console.error('sortByOrder 传入参数不符合要求, 应为数组', source)
    return source
  }
  const tmp = []
  let target = []

  // 将带排序的子项添加进临时数组 tmp
  for (let i = 0; i < source.length; i += 1) {
    if (typeof source[i].order !== 'number') {
      continue
    }
    let { order } = source[i]
    // 支持设置倒数顺序
    if (order < 0) {
      order = source.length + order
      if (order < 0) {
        order = 0
      }
    }

    // 确保整数
    source[i].order = Math.floor(order)

    // 插入临时数组
    insertItem(source[i], tmp)
  }

  // 合并临时数组和原数组
  for (let i = 0, j = 0; i < source.length; i += 1) {
    if (typeof source[i].order === 'number') {
      continue
    }
    // 找需要填的坑
    while (tmp[j]) {
      j += 1
    }
    tmp[j] = source[i]
  }
  // 筛除空隙
  target = tmp.filter(item => !!item)
  return target
}

console.log('------------------------------------------------------------------');

/**
 * 深度遍历，深拷贝
 * @param {*} data
 */
Utils.deepClone = data => {
  const t = type(data)
  let o
  let i
  let ni

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (i = 0, ni = data.length; i < ni; i++) {
      // eslint-disable-line
      o.push(Utils.deepClone(data[i]))
    }
    return o
  } else if (t === 'object') {
    /* eslint-disable */
    for (i in data) {
      o[i] = Utils.deepClone(data[i])
    }
    /* eslint-enable */
    return o
  }
  return data
}
