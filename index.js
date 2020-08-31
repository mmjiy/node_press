const request = require('request');
const { url, baseApi } = require('./config/index');
function getPage(index) {
  let urlAddress = `${baseApi}/${url[index]}`
  request({
    url: `${urlAddress}`,
    method: 'get',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Cache-Control': 'no-cache',
    },
    encoding: null
  }, (err, res, body) => {
    
    if (res && res.statusCode && res.statusCode == 200) {
      console.log(`${new Date().toLocaleString()}--请求成功---${res.statusCode}`, urlAddress)
    } else  {
      console.log(`${new Date().toLocaleString()}--请求失败---${err}`, urlAddress)
    }

  }
  );
}
function forRequest() {
  let len = url.length;
  for (let i = 0; i < len; i++) {
    getPage(i)
  }
}

function init() {
  setInterval(()=>{
    forRequest()
  },1500)
}

init()
