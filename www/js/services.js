angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '智利 中央山谷 格雷曼家族限量私酿干红葡萄酒',
    lastText: '格雷曼品牌智利驻上海大使馆指定用酒！比利时布鲁塞尔世界葡萄酒竞赛Venere2002--金奖',
    price: 9880.0,
    face: 'images/wine/00.jpg'
  }, {
    id: 1,
    name: '智利 中央山谷 格雷曼家族限量珍藏干红葡萄酒',
    lastText: '格雷曼品牌智利驻上海大使馆指定用酒！2008世界精选葡萄酒大赛最高奖金奖',
    price: 1980.0,
    face: 'images/wine/01.jpg'
  }, {
    id: 2,
    name: '智利 空加瓜山谷 蒙特斯欧法赤霞珠干红葡萄酒 3000ml',
    lastText: '',
    price: 1700.0,
    face: 'images/wine/02.jpg'
  }, {
    id: 3,
    name: '智利 拉帕塔园顶级 盘古干红葡萄酒 2009年',
    lastText: '开天辟地，澳洲酒王酿酒大师之作',
    price: 1780.0,
    face: 'images/wine/03.jpg'
  }, {
    id: 4,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/04.jpg'
  },{
    id: 5,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/05.jpg'
  }, {
    id: 6,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/06.jpg'
  }, {
    id: 7,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/07.jpg'
  }, {
    id: 8,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/08.jpg'
  }, {
    id: 9,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/09.jpg'
  }, {
    id: 10,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/10.jpg'
  }, {
    id: 11,
    name: '澳大利亚 维多利亚 帕丁山黑皮诺拉米智者干红葡萄酒',
    lastText: '',
    price: 1288.0,
    face: 'images/wine/11.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
