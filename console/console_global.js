/*
전역 객체 console
- console 모듈은 전역 객체로 등록되기 때문에 require('console')없이 바로 사용 가능
*/ 

/** 
 * (1) 일반적인 로그 콘솔에 출력 
*/
console.log('hello world'); //일반적인 로그
console.log('hello %s','world');//일반적인 로그 %s를 사용해서 문자열 데이터를 파라미터로 전달 

const world = 'world';
console.log('hello ${world}');//자바스크립트의 템플릿 리터럴 문법을 사용

/**
 *  (2) 에러를 콘솔에 출력
 */
console.error(new Error('에러메시지 출력'));//에러 로그 출력 

/**
 *  (3) 배열/오프젝트를 테이블 형태로 콘솔에 출력 
 */
const arr = [
 {name: 'John Doe', email:'john@mail.com'},
 {name: 'Jeremy Doe', email:'jeremy@mail.com'},
];

console.table(arr);//테이블 형태로 배열/오브젝트 데이터 출력 

/**
 *  (4) console.dir(오브젝트, 옵션)객체를 콘솔에 출력할 때 사용 
 * 오브젝트 : 객체, 옵션 : depth는 객체안의 객체를 몇 단계까지 보여줄지.
 */
const obj = {
  student: {
     grade1: {class1:{}, class:{}},
     grade2: {class1:{}, class:{}},
     teachers: ['John Doe', 'Jeremy Doe'] 
  }  
}

console.dir(obj,{depth:1, colors:true});

/**
 * (5) console.time 과 console.timeEnd에 전달한 인수값이 일치하는 코드 사이의 실행시간을 측정, 출력
 */
console.time('time for for-loop');//console.time에 파라미터로 전달한 레이블과 뒤에 나오는 console.timeENd중
//일치하는 레이블을 가지고 있는 console.timeEnd 코드 사이의 실행히간 측정 

for(let i=0; i<99999; i++){}
console.timeEnd('time for for-loop');//앞에 나온 console.time 중 console.timeEnd 와 레이블이 일치하는 코드 사이의 
//실행 시간 측정 