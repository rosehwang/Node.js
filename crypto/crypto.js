/** Crypto
 *  - 이 연습 소스에서는 단방향 암호화만 다룰 예정
 */

const crypto = require('crypto');

/**
 * createHash()
 * - 파라미터로 암호화에 사용할 알고리즘을 전달하는 함수 
 * update()
 * - 파라미터로 암호화할 문자열을 전달하는 함수 
 * digest()
 * - 파라미터로 어떤 인코딩 방식으로 암호화된 문자열을 표시할지를 전달 
 */
crypto.createHash('sha512').update('pw1234').digest('base64');
crypto.createHash('sha512').update('pw1234').digest('hex');

/**
 * salting 암호화
 * - 해커들은 실제로 레인보우 테이블이라는 것을 사용함.
 * - 레인보우 테이블은 다양한 암호화 결과 값과 암호화 전 원본 값을 테이블로 갖고있는 것.
 * - 해커들이 원본값을 알아내기 어렵게 처리하기 위해 salting 암호화 사용
 */

/**
 * randomBytes()
 * - 64바이트 길이의 salt를 생성
 */
const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
           if (err) reject (err);
           resolve(buf.toString("base64"));  
        });
    })
};
