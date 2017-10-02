// const 定义的变量：不可改变、且必须初始化

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 日期格式化成：周一到周日
const formatWeeks = date => {
  var weeks = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat")
  var num = date.getDay()
  return weeks[num]
}

// 日期加法函数
const dateAdd = (startDate, increaseNum) => {
  startDate = new Date(startDate)
  startDate = + startDate + 1000 * 60 * 60 * 24 * increaseNum
  var nextDate = new Date(startDate)
  return nextDate
}

// 将其中包含的方法“暴露”出去，以供其他方法调用
module.exports = {
  formatTime: formatTime,
  formatWeeks: formatWeeks,
  dateAdd: dateAdd
}


