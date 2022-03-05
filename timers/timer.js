/**
 * Timers
 * - 타이머 모듈의 모든 함수는 전역함수 이기때문에 require('timers')없이 사용가능
 * - 웹 브라우저의 타이머 API와 매우 유사
 */

/**
 * (1) setTimeout(콜백함수, 밀리초)
 * - 설정한 밀리초 이후에 지정된 콜백함수가 실행
 * - clearTimeout(변수명)을 통해 setTimeout 취소 가능
 * - 설정한 타임아웃 간격이 정확하게 밀리초 후에 실행된다는 보장없음
 *   (이벤트 루프를 블로킹하거나 이벤트 큐에 보유하고 있는 다른 실행코드가 타임아웃의 실행을 뒤로 미룰수있음)
 */

const timeout = setTimeout(() => {//1초후에 실행됨
 console.log('1초후에 실행됨');
}, 1000);

/**
 * (2) setInterval(콜백함수, 밀리초)
 * - 설정한 밀리초마다 지정된 콜백 함수가 실행됨
 * - clearInterval(변수명)을 통해 취소 가능
 */
const Interval = setInterval(() => {//1초마다 실행됨
 console.log("1초마다 실행됩니다.");
},1000);

/**
 * (3)setImmediate(콜백함수)
 * - 현재 이벤트 루프 주기 끝에 코드 실행 
 * - clearImmediate(변수명)을 통해 취소 가능 
 */
const immediate = setImmediate(()=>{//이벤트 루프가 없으므로 가장먼저 실행됨 
 console.log("이벤트 루프 끝나고 실행되는 setImmdediate")
});
