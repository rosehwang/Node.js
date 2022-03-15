/**
 * URL
 * - 인터넷 주소에 해당되는 url을 다루기 위한 모듈
 * - url모듈은 Node.js 전용 레거시 API, 웹 브라우저에서 사용하는 것과 동일한 WHATWG URL 표준을 
 *   구현하는 최신 API
*/

/**
 * (1) WHATWG URL
 * - URL 객체를 사용한다. 
 * - 각각의 속성은 클래스 프로토타입의 getter 및 setter로 구현되기 때문에 속성 정보를 가져오거나 
 *   변경할 수 있다.
 */
const myURL = 
new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log("WHATWG URL :: {}"+myURL);

console.log('hash :: {} '+myURL.hash);//#hash
console.log('href :: {} '+myURL.href);//https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash

/**
 * URL에서 쿼리데이터 추출하는 법
 * - searchParams는 URLSearchParams 클래스로 쿼리 데이터를 조작하기 위한 다양한 내장 함수 제공함
 */

const myURLParam = new URL('https://example.org/?user=abc&query=xyz');
console.log(myURLParam.searchParams.get('user'));//abc 키에 해당되는 값 반환
console.log(myURLParam.searchParams.has('user'));//true 해당되는 키에 대한 값이 있는지 여부 체크 
console.log(myURLParam.searchParams.keys());// URLSearchParams Iterator { 'user', 'query' } Iterator로 모든 키를 반환
console.log(myURLParam.searchParams.values());// URLSearchParams Iterator { 'abc', 'xyz' } Iterator로 모든 키값을 반환
myURLParam.searchParams.append('user','admin');//주어진 키로 값을 추가. 동일한 키가 이미 있으면 그대로 유지하고 하나 더 추가 

console.log(myURLParam.searchParams.getAll('user'));//[ 'abc', 'admin' ] 키에 해당되는 값을 모두 배열로 반환
myURLParam.searchParams.set('user','admin');//주어진 키로 값을 추가. 동일한 키가 이미 있으면 모두 삭제하고 새로 추가 
myURLParam.searchParams.delete('user','admin');//해당키를 삭제 
console.log(myURLParam.searchParams.toString());//query=xyz searchParams 객체를 문자열로 반환

/**
 * (2) 레거시API
 * - WHATWG방식과 레거시API 방식은 반환되는 Object의 구조가 다릅니다. 
 * - 보안이슈가 있으므로 url.parse를 추천하지 않는다.
 */
const url = require('url');
console.log(url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'));
// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'sub.example.com:8080',
//     port: '8080',
//     hostname: 'sub.example.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
//   }