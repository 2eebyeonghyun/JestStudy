
// import getUser from './test1';
// const { getUser } = require('./test1');
// test('user 객체 가져온 결과', () => {

//     expect(getUser(1)).toEqual({
//         gunchim: 'ssak'
//     });
// });





// test('toBeTruthy / toBeFalsy 테스트', () => {

//     expect(0).toBeFalsy(); // 숫자 0 : false의 의미도 있음
//     expect('0').toBeTruthy(); // 문자 0은 false라 할 수 있음?
// });





// function drinkAll(callback, flavour) {
//     if (flavour !== 'octopus') {
//         callback(flavour);
//     }
// }

// // 테스트 그룹화의 의미는 실행했을 때 잘될까 안될까를 기본적으로 구분할 때 사용
// describe('drinkAll', () => {

//     // 테스트 코드들은 간단한 규칙만 기억해주시면 됩니다.
//     // 테스트할 내용을 호출한다.
//     //  -> 호출 후 결과를 예상해보는거
//     //  -> DBMS 연결 문제없나?( 주 사용처)
//     test('drinks something lemon-flavoured', () => {
//         const drink = jest.fn();
//         drinkAll(drink, 'lemon');
        
//         expect(drink).toHaveBeenCalled(); // 함수 호출 O
//     });
  
//     test('does not drink something octopus-flavoured', () => {
//         const drink = jest.fn();
//         drinkAll(drink, 'octopus');
        
//         // not 프로퍼티를 쓰는 의미 : 호출 안된게 사실이야? 라고 물어보는거
//         expect(drink).not.toHaveBeenCalled(); // 함수 호출 X
//     });
// });





// test('toHaveLength() / toContain() 테스트', () => {

//     const testArray = ['g', 'u', 'n', 'chim'];

//     // expect(testArray).toHaveLength(7);
//     // expect(testArray).toContain('ssak');
//     expect(testArray).toContain('chim');
// });





// const { getUser } = require('./test1');
// test('toThrow 테스트', () => {

//     expect(() => getUser(-1)).toThrow(); // 예외 발생여부 확인
//     // 예외처리 메세지는 Enum같은 공통된 값을 통해 관리하는것이
//     // 프로젝트의 규모가 커져도 메세지의 일관성을 쉽게 부여
//     expect(() => getUser(-1)).toThrow('군침쓰아악');
// });







// 아래와 같이 Jest에서 함수를 테스트할 때는 모의함수라는것을 임시로 만들어서 테스트하는 것을 권장
//  -> 아래와 같이 사용하는 방법을 mock함수라고 부른다.( 모의함수)
//     (주로 추적용이나 호출 시 확인용도로 사용한다.)
// const handleClick = jest.fn();
//  -> mock의 경우는 화살표 함수가 강제되는 단점이 있어
//     좀 더 복잡한 함수의 경우는 기존함수에 spy를 붙여 감시하는 형태로 구현도 가능

// const gunchim = jest.fn();

// spy의 경우는 객체의 메서드에만 사용할 수 있다는 특징이 있어서
// 날것 그대로 선언했을 경우 인식을 못하는 경우가 발생
// 객체 형태로 선언 후 spy에 객체를 인식시키는 방향으로 처리

// 이러한 형태가 마음에 안든다면
// 외부에서 함수를 만든 후 모듈화하여 모듈 전체를 import처리 후 
// import된 객체 자체를 들고오는 방법도 있다.
// const test1 = {

//     gunchim: function(test) {
    
//         return 'ssak';
//     }
// }

// 외부의 함수를 로딩하여 테스트하는것도 가능
import * as test1 from "./spyModule";

test('함수호출 테스트', () => {
    const spy = jest.spyOn(test1, 'gunchim');
    test1.gunchim('test');
    test1.gunchim('test');
    test1.gunchim('test');
    // expect(spy).toHaveBeenCalledTimes(3);
    // 내 생각에 a라는 값이 파라미터로 전달되어야 하는데 자꾸 다른값이 호출된다면 사용
    // expect(spy).toHaveBeenCalledWith('test1');
    // expect(spy).toReturn();
    expect(spy).toHaveReturnedWith('ssak');
});