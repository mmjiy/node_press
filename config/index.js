let url = ['companysoso', 'tenderbangsoso', 'peoplesoso', 'buildersoso', 'techlist', 'redlist', 'blacklist']
const baseApi = 'https://demo.cbi360.net';
const { guid } = require('./guid')
function getDetailUrl() {
  const MaxNum = 100000;
  let num = Math.floor(Math.random() * MaxNum);
  let arr = [
    `road/${num}.html`,
    `zb/${num}.html`,
    `jy/${num}.html`,
    `ry/${num}.html`,
    `jzs/${num}.html`,
    `jzs/ry_${num}.html`,
    `jzs/jy_${num}.html`,
    `qygsxx/${num}.html`,
    `fy/${num}.html`,

    `fygg/${guid()}.html`,
    `ktgg/${guid()}.html`,
    `sxxx/${guid()}.html`,
    `sxxx/${guid()}.html`,
    `bzxxx/${guid()}.html`,
    `xzcf/${guid()}.html`,
    `gqcz/${guid()}.html`,
    `jyyc/${guid()}.html`,
    `dcdy/${guid()}.html`
    
  ]
  return arr;
}
let detailUrl = getDetailUrl();
url  = [...url,...detailUrl];

module.exports = {
  url,
  baseApi
}