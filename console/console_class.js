/* Console 클래스 
- 클래스를 사용하면 log파일을 만들어서 console.log(), console.error(), console.warn()
과 같은 함수를 사용하여 디버깅 혹은 각종 정보성 메시지를 파일로 기록 가능
*/

const fs = require('fs');//fs는 파일시스템 모듈로 파일읽기, 쓰기 등을 할 수 있는 내장 모듈
const {Console} = require('console');// console 모듈 사용

const output =  fs.createWriteStream("./stdout.log");//파일 쓰기가 가능하도록 스트림 생성
const errorOutput = fs.createWriteStream("./stderr.log");// 파일 쓰기가 가능하도록 스트림 생성 

const logger = new Console({stdout : output, stderr : errorOutput});//콘솔 객체 생성
const count = 5;

logger.log('count : %d', count);//stdout.log 파일에 찍힘
logger.error('count > ', count);//stderr.log 파일에 찍힘 
