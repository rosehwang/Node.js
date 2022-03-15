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
 * path.dirname(path)
 * -파일이 위치한 폴더 경로를 반환합니다. 
 */
console.log(__filename);
console.log(path.dirname(__filename));

/**
 * path.extname(path)
 * -파일의 확장자를 반환합니다.
 */
console.log(path.extname('index.html'));

/**
 * path.format(pathObject)
 * -pathObject로 주어진 프로퍼티를 사용해서 경로 문자열을 반환합니다.
 */

path.format({
 root: '/ignored',
 dir : '/home/user/dir',
 base: 'file.txt'
});

console.log('format :: {} '+path);

/**
 * path.isAbsolute
 * - 주어진 파일의 경로가 절대 경로인지 상대 경로인지 알 수 있습니다.
 *   절대경로면 true를 반환합니다.
 */

console.log(path.isAbsolute);

/**
 * path.join([..paths])
 * - 문자열로 주어진 경로들을 모두 합쳐서 하나의 경로로 만들어서 반환합니다.
 */
path.join('/foo', 'bar', 'baz/asdf');
console.log(path);

/**
 * path.parse(path)
 * - 문자열로 된 경로를 pathObject로 반환합니다.
 */

path.parse('/home/user/dir/file.txt');
console.log(path);

/**
 * path.sep
 * - 경로 구분자를 반환.
 * - 윈도우는 역슬래시(\), 맥은 슬래시(/) 반환.
 */
console.log(path.sep);

