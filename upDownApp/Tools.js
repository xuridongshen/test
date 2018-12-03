const Tools = {
  getToDayTime() {
    // 获取今天0：0：0的时间
    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },
  getToNDayTime(all) {
    // 获取前天或者后天的时间   参数all： 一个时间
    let date = new Date(all);
    return date.getTime();
  },
  uniqArray(arr) {
    // 去重(只能作用与一维数组) 参数arr： 不能为空
    // 使用map进行数组去重但是[ 数组中的对象与数组不能去重 ] (优点--效率高)
    const tmp = new Map();
    return arr.filter(item => {
      // 如果不包含指定的元素则添加一个新建元素到映射
      return !tmp.has(String(item)) && tmp.set(String(item));
    });
  },
  uq(arr) {// 快排数组
    if (arr.length <= 1) return arr // 节制
    var centerIndex = Math.floor(arr.length / 2), // 基数的索引
      contentValue = arr.splice(centerIndex, 1)[0], // 基数的值
      left = [], // 比基数小的存在
      right = []; // 比基数大的存在

    // 逻辑处理核心
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > contentValue) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    // 合并
    return uq(left).concat([contentValue], uq(right))
  },
  trim(str, is_global) { // 去除多余空格 参数：str 需要操作的值  is_global 是否去除所有(包括值内部的空格)
    let result;
    result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (is_global && is_global.toLowerCase() == 'g') {
      result = result.replace(/\s/g, '');
    }
    return result;
  }
};
