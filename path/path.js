/** Path
 *  - 파일과 디렉토리 경로 작업을 위한 유틸리티 제공
 *  - 운영체제별로 파일 경로를 관리하는 방식이 달라 사용이됨
 *  - require 함수를 사용함 
 */

const path = require('path');

/** path.basename(path[,ext])
 *  - 경로의 마지막 부분을 반환함
 */
console.log(__filename);//전체 path 반환 
console.log(path.basename(__filename));// path.js 만 반환 
console.log(path.basename(__filename, '.js'));// path 만 반환

/**path.delimiter
 * - 운영체제별로 환경 변수 구분자를 가져옴
 */
console.log(path.delimiter);//환경 변수 구분자 필자는 윈도우이므로, 세미콜론[;]을 가져옴
//맥과 리눅스는 콜론(:)을 가져옴

//윈도우
console.log(process.env.PATH);//
process.env.PATH.split(path.delimiter);
  
/**
 * 
 */