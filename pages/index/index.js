//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    today: {}
  },
  getTodayString() {
    var weeks = ["日", "一", "二", "三", "四", "五", "六"];
    var today = new Date();
    return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
  },
  getTotalObject() {
    var activities = [{ name: "喝二锅头", good: "还有什么能比二锅头更能体现纯爷们儿的风范", bad: "酒醉会丧失表白的良机", weekend: true },
    { name: "上微博", good: "微博不仅是看热闹的娱乐小报，更是利用碎片时间学习的好工具，多关注分享知识的账号，日积月累逆袭终可成", bad: "打着学习知识的名义看各种八卦，别骗自己了", weekend: true },
    { name: "带蓝牙耳机打电话", good: "用路人仰望的目光大幅增强自信心", bad: "这种213行为一定会把你带到沟里", weekend: true },
    { name: "主动跟邻居打招呼", good: "大爷大妈笑哈哈，邻家小妹把你夸", bad: "大爷大妈笑哈哈，因为你牙齿上有片儿韭菜", weekend: true },
    { name: "长跑", good: "逆袭女神之日（ri），高富帅找你单挑的时候，打不过，你还能跑", bad: "同学，你的阿迪王底漏了，跑步会崴（wai）脚", weekend: true },
    { name: "相亲", good: "屌丝终有逆袭日，亮兵器上吧！", bad: "看看你的右手，它才是你一辈子的依靠！放弃吧骚年", weekend: true },
    { name: "斗地主", good: "底牌总翻两个王，顺子从3连到A，赢就一个字", bad: "底牌总翻两个王，顺子从3连到A，可惜不是的你也不是你队友的", weekend: true },
    { name: "睡懒觉", good: "多睡一会儿养足精神，可以提高一整天的效率", bad: "你想不到的是：比你优秀的人还比你更努力", weekend: true },
    { name: "网购", good: "周年庆，N.5年庆，N.75年庆……总之网上到处都在优惠，可以出手", bad: "今天你自制力太差，将引发无数的冲动消费", weekend: true },
    { name: "大鱼大肉", good: "放纵不是你本意，发育需要打牙祭", bad: "一个连肉欲都无法抵挡的怪兽怎么能打败奥特曼呢", weekend: true },
    { name: "洗澡", good: "神清气爽，一扫颓势！", bad: "洗的再干净，也无法掩盖一身屌丝样，时间还是继续学习吧", weekend: true },
    { name: "抽烟", good: "左手夹烟，右手托腮，斜向上45度仰望天空，就好像很有深度的样子，瞬间提升了逼格", bad: "抽烟会导致性能力下降，不过你也用不着这个能力，那随便抽吧", weekend: true },
    { name: "睡前祈祷", good: "祈祷是一种非常有效地心理暗示，给你动力", bad: "祈祷本不是坏事，但你念叨要中500万，这就不是祈祷了，是病，不要放弃治疗", weekend: true },
    { name: "打DOTA", good: "队友真给力，冲出三里地，2000分，有戏！", bad: "对手虐我千百遍,我待对手如初恋，擦！猪一样的队友", weekend: true },
    { name: "玩手机", good: "没事摇一摇，摇出软妹子", bad: "走路玩手机，阴沟卡JJ", weekend: true },
    { name: "练习乐器", good: "学习乐器能扩充你的想象空间", bad: "你今天的音乐细胞，还是比较适合说唱……", weekend: true },
    { name: "听重金属", good: "能让你的血液沸腾，助你进步", bad: "将引发你身体里的超标重金属强烈共振", weekend: true },
    { name: "做手工", good: "做手工获得的成就感能海量增加逆袭道路上的信心", bad: "作业写完了吗？工作干完了吗？少年，玩物丧志，不要太痴迷", weekend: true },
    { name: "考虑辞职", good: "公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋", bad: "下一份工作真的会比现在强吗？老板还是一样的抠门，前台还是一样的冰冷" },
    { name: "加班", good: "事业成功才是你唯一的出路", bad: "高富帅都带女神去Happy了~备好纸巾放松一下吧" },
    { name: "在妹子面前吹牛", good: "展示你的口才，并且妹子不会识破", bad: "妹子当面对你娇，心里默念买了个表", weekend: true },
    { name: "撸管", good: "据说撸管可以有效提高APM和智商", bad: "昨天你已经撸过三发了，休息休息", weekend: true },
    { name: "浏览成人网站", good: "鄙视一下成年人的世界，可以舒缓自己的压力", bad: "你会贫血", weekend: true },
    { name: "看爱动片", good: "看爱动片，提高APM，做MVP", bad: "倒是没什么不好，就是今天没有纸了", weekend: true },
    { name: "和领导吃饭", good: "小伙子稳重、实在，好好干，不会亏待你的~", bad: "你今天极有可能胡言乱语，领导内心：“这SB会不会聊天啊，给老子等着！”" },
    { name: "学英语", good: "英文好了搞洋货~", bad: "你学的是：oh yes oh no~oh fuck，喝喝隔壁~", weekend: true },
    { name: "看电视", good: "看晚上7点的CCAV能带给你巨大的幸福感", bad: "看电视是让人智商降低的最佳方法，没有之一", weekend: true },
    { name: "整理电脑桌面", good: "琢桌面变整洁，工作也♂愉悦♂", bad: "你又shift + del 了，2G的种子，没了", weekend: true },
    { name: "提加薪", good: "今天你看了屌丝黄历，所以你又进步了，所以加薪成功概率又涨了1.01倍", bad: "今天老板犯痔疮，赌钱输，闯红灯……总之心情不太好" },
    { name: "打扫房间", good: "改变自己先从改变环境做起，做讲究人儿有礼有面儿！", bad: "打扫房间是应该的，但你今天会把藏私房钱的鞋塞进垃圾袋", weekend: true },
    { name: "热水泡脚", good: "睡前热水跑脚相当于多睡2个小时", bad: "因为你懒得擦脚，导致洗脚盆被踩翻", weekend: true },
    { name: "玩扫雷", good: "可有效提高右手apm，麻麻再也不用担心你的DOTA", bad: "连续10把第一下就点到雷，去写作业吧少年", weekend: true },
    { name: "去夜店认识异性", good: "领导带你喝花酒，领导带你扑妹子，今儿你运气不错啊", bad: "高富帅今天包场，你去了只能当背景", weekend: true },
    { name: "请女同事吃午饭", good: "女同事会教给你相处与女人约会的秘诀", bad: "你吃饭的凶残面目将完全败露" },
    { name: "请朋友喝酒", good: "人生难得几回醉，有朋友路好走", bad: "朋友醉了，你也醉了，你在路边睡了，朋友跟老婆回家睡了", weekend: true }
 ];
    var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];
    var drinks = ["水", "茶", "红茶", "绿茶", "咖啡", "奶茶", "可乐", "鲜奶", "豆奶", "果汁", "果味汽水", "苏打水", "运动饮料", "酸奶", "酒"];
    var _activities = this.filter(activities);
    var today = new Date();
    var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    var numGood = 3;
    var numBad = 3;
    var eventArr = this.pickRandomActivity(_activities, numGood + numBad);
    var goodList = [];
    var badList = [];
    for (var i = 0; i < numGood; i++) {
      goodList.push(eventArr[i]);
    }
    for (var i = 0; i < numBad; i++) {
      badList.push(eventArr[numGood + i]);
    }
    var totalList = {
      "today": this.getTodayString(),
      "goodList": goodList,
      "badList": badList,
      "direction": directions[this.random(iday, 2) % directions.length],
      "drinks": this.pickRandom(drinks, 2),
      "stars": this.star(this.random(iday, 6) % 5 + 1)
    }
    return totalList;
  },
  star(num) {
    var result = "";
    var i = 0;
    while (i < num) {
      result += "★";
      i++;
    }
    while (i < 5) {
      result += "☆";
      i++;
    }
    return result;
  },
  filter(activities) {
    var result = [];
    if (this.isWeekend()) {
      for (var i = 0; i < activities.length; i++) {
        if (activities[i].weekend) {
          result.push(activities[i]);
        }
      }
      return result;
    }
    return activities;
  },
  isWeekend() {
    var today = new Date();
    return today.getDay() == 0 || today.getDay() == 6;
  },
  pickRandomActivity(activities, size) {
    var picked_events = this.pickRandom(activities, size);

    for (var i = 0; i < picked_events.length; i++) {
      picked_events[i] = picked_events[i];
    }

    return picked_events;
  },
  pickRandom(array, size) {
    var result = [];
    var today = new Date();
    var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    for (var i = 0; i < array.length; i++) {
      result.push(array[i]);
    }
    for (var j = 0; j < array.length - size; j++) {
      var index = this.random(iday, j) % result.length;
      result.splice(index, 1);
    }
    return result;
  },
  random(dayseed, indexseed) {
    var n = dayseed % 11117;
    for (var i = 0; i < 100 + indexseed; i++) {
      n = n * n;
      n = n % 11117;
    }
    return n;
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.setData({
      today: this.getTotalObject()
    })
  }
})
wx.showShareMenu({
  withShareTicket: true
})