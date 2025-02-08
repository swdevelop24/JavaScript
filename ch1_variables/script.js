// 1. Exchange the value of variable a with the value of variable b.
let a=30;
let b=50;

// before change
console.log("before change:");
console.log("a:" + a);
console.log("b:" + b);

let temp=a;
a=b;
b=temp; 

console.log("after the exchange:");
console.log("a:" + a);
console.log("b:" + b);


// 문제2.다음 연산자들의 결과값을 예측한후 console.log()를 통해 확인해 보시오
// 배운점 정리:
// #6관련 ( 1 / 0): 0으로 나눴을때 error가 나오는게 아니라 Infinity 임에 유의
//참고 : NaN (Not-a-Number): 숫자 연산에서 결과가 숫자가 아닐 때 나타나는 값입니다. 예: 0 / 0
// #8관련 (7.5 % 2) : 나머지가 정수가 아니고 실수(1.5)임에 유의 =>실수가 포함된 경우 계산 결과도 실수로 나옵
// 정수 나머지가 필요
// 하면 경우에 따라라 Math.round(7.5 % 2) => 2 나 Math.ceil =>2 혹은 Math.floor=>1 사용 
// #14관련 (5 !== 5.0):5는 정수로 보이지만 JavaScript에서는 내부적으로 부동소수점으로 저장
//                   => 5.0과 동일하게 처리 false 출력. 두 값은 이미 숫자 타입으로 type conversion이 일어나지 않음.
//                   => console.log(typeof 5) //number  
//



// 20 + 30
console.log("#1 question: 20 + 30 => " + 50);
console.log("#1 answer: ", 20+30 );


// “20” + “30”
console.log("#2 question: “20” + “30” => " + 2030);
console.log("#2 answer: ", "20" + "30" );

// “Hello” + " " + 2021
console.log('#3 question: "Hello" + "" + 2021 => ' + 'Hello2021');
console.log('#3 answer: ', "Hello" + " " + 2021 );

// 1 + 2 * 3
console.log('#4 question: 1 + 2 * 3 => ' + 7);
console.log('#4 answer: ', 1 + 2 * 3 );

// (1 + 3) ** 2
console.log('#5 question: (1 + 3) ** 2 => ' + 16);
console.log('#5 answer: ', (1 + 3) ** 2  );

// 1 / 0
console.log('#6 question: 1 / 0 => ' + 'Infinity');
console.log('#6 answer: ', 1/0 );


// 6 % 2
console.log('#7 question: 6 % 2 => ' + 0);
console.log('#7 answer: ', 6 % 2 );

// 7.5 % 2
console.log('#8 question: 7.5 % 2 => ' + 1.5);
console.log('#8 answer: ', 7.5 % 2 );

// 5 == 5
console.log('#9 question: 5 == 5 => ' + true);
console.log('#9 answer: ', 5==5);


// 5 === 5
console.log('#10 question: 5 === 5 => ' + true);
console.log('#10 answer: ', 5 === 5);

// 5 == “5”
console.log('#11 question: 5 == “5” => ' + true);
console.log('#11 answer: ', 5 == "5");


// 5 === “5”
console.log('#12 question: 5 === “5” => ' + false);
console.log('#12 answer: ', 5 === "5");

// 5 != 5.0
console.log('#13 question: 5 != 5.0 => ' + false);
console.log('#13 answer: ', 5 != 5.0);
console.log('typeof 5:', typeof 5, 'vs.typeof 5.0:', typeof 5.0);

// 5 !== 5.0
console.log('#14 question: 5 !== 5.0 => ' + false);
console.log('#14 answer: ', 5 !== 5.0);

// “true” === true
console.log('#15 question: “true” === true => ' + false);
console.log('#15 answer: ', "true" === true);

// 5 <= 5.0
console.log('#16 question: 5 <= 5.0 => ' + true);
console.log('#16 answer: ', 5 <= 5.0);

// 5 >= 5
console.log('#17 question: 5 >= 5.0 => ' + true);
console.log('#17 answer: ', 5 >= 5.0);

// true || true
console.log('#18 question: true || true => ' + true);
console.log('#18 answer: ', true || true);

// true || false
console.log('#19 question: true || false => ' + true);
console.log('#19 answer: ', true || false);

// true && true
console.log('#20 question:  true && true => ' + true);
console.log('#20 answer: ',  true && true);

// true && false 
console.log('#21 question:  true && false  => ' + false);
console.log('#21 answer: ',  true && false);


// !true  
console.log('#22 question:  !true   => ' + false);
console.log('#22 answer: ',  !true );


// !false
console.log('#23 question:  !false  => ' + true);
console.log('#23 answer: ',  !false );
