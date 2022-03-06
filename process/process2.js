/** 
 * process.nextTick
 * - Node.js의 이벤트 루프는 다른 콜백 함수보다 nextTick에 인수로 전달한 콜백함수를
 *   우선적으로 처리함
 * - nextTick를 통해 추가한 콜백 함수는 'next tick queue'에 추가됨
*/
//import process from 'process';
const { nextTick } = require('process');

console.log('start');

setTimeout(() => {
    console.log("timeout callback");
});

nextTick(() => {
  console.log("nextTick callback");  
});

console.log('end');
/**start
 * end
 * nextTick callback
 * timeout callback
 */
