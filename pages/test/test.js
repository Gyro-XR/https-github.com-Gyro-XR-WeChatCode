// test.js
const util = require('../../utils/util.js')

Page({
  data: {
    week_list: [],
    time_list: [


    ],
  },

  onLoad() {
    // 加载表格头：日期
    var weeksArray = new Array(5);

    for (var i = 0; i < weeksArray.length; i++) {
      var date = new Date()
      date = util.dateAdd(date, i)
      date = util.formatWeeks(date)
      weeksArray[i] = { weeks: date }
    }

    this.setData({
      week_list: weeksArray
    })

  },

  changeClass() {
    console.log('click')

  }

})