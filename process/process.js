/** 
 * Process
 * - Node.js 프로세스에 대한 정보와 제어를 제공 
 * - requrie또는 import를 통해 명시적으로 호출해서 사용하는 것이 좋음  
*/
import process from 'process';//명시적 호출 

/**
 * (1) beforeExit
 * - Node.js가 이벤트 루프를 비우고 예약할 추가 작업이 없을 때 발생되는 이벤트
 * - Node.js 프로세스는 예정 작업이 없는 경우 종료되지만, beforeExit 이벤트에 등록된 리스너가 비동
 *   기식 호출을 하여 Node.js를 계속 사용 가능 .
 */
process.on('beforeExit', (code) => {
 console.log('2. 이벤트 루프에 등록된 작업이 모두 종료된 후 노드 프로세스를 종료하기 직적 : ',code);
});

/** 
 * (2) exit
 * - process.exit()를 호출하거나 Node.js 이벤트 루프가 더 이상 수행할 추가작업이 없을때 발생함
 * - Node.js 프로세스는 종료됨
*/
process.on('exit', (code) =>{
    console.log('3. 노드 프로세스가 종료될 때:', code);
});

console.log('1. 콘솔에 출력되는 첫번째 메시지');

/**
 * 이외 
 * (3) disconnect 
 * - Node.js프로세스가 IPC(클러스터로 자식 프로세스를 생성했을 때 생성된 경우 IPC 채널이 닫힐 때 이벤트 발생함
 * 
 * (4) message
 * - Node.js프로세스가 IPC채널로 생성된 경우 childprocess.send()를 사용해서 상위 프로세스가 보낸 메시지를 하위 프로세
 * 스에서 수신할때마다 발생함.
 */
