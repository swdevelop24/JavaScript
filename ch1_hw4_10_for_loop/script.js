// 반복문 문제
// 문제 1
// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

// let val=0; 
// for(let i=1; i<=100; i++){
//     val+=i; 
// }
// console.log(val);



// 문제 2
// 1부터 100까지 홀수만 출력하자.

// for(let i=1; i<=100; i+=2){
//     console.log(i);
// }



// 문제 3
// 1부터 50까지 369결과를 프린트하자.

// 1
// 2
// 짝 
// 4
// 5 
// 짝
// ...생략 

// 28 
// 짝
// 짝 
// 짝
// 짝 
// 짝짝 

// let digit=0;
// let tenth=0; 
// for(let i=1; i<=50; i++){
//     tenth = Math.floor(i/10);
//     digit = i% 10; 
//     if(((digit == 3 && tenth  == 3)) ||((digit == 6 && tenth == 6) ) || ((digit== 9 && tenth == 9) )){
//         console.log("짝짝");
//     }
//     else if((digit == 3 || tenth == 3) ||(digit == 6 || tenth == 6) || (digit == 9 || tenth == 9)){
//         console.log("짝");
//     }else{
//         console.log(i)
//     }
// }


// for (let i = 1; i <= 50; i++) {
//     let strval = i.toString() // 숫자 타입을 string 타입으로 
//     let ret = ""
//     for (let j = 0; j < strval.length; j++) {
//         if (strval[j] == "3" || strval[j] == "6" || strval[j] == "9") {
//             ret += "짝"
//         }
//     }
//     console.log(ret.length > 0 ? ret : i)
// }

// 문제 4
// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

// let num = 70;
// let flag = 1; // 소수라고 가정

// // 1은 소수가 아님
// if (num <= 1) {
//     flag = 0;
// } else if (num === 2) {
//     // 2는 항상 소수
//     flag = 1;
// } else {
//     // 2부터 num의 제곱근까지 검사
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             flag = 0; // 나누어떨어지면 소수가 아님
//             break;
//         }
//     }
// }


// let answer = (flag) ? "true" : "false";
// console.log(answer);

//참고:
// let n =11
// let isPrime = true

// if (n ===1){// 1은 소수가 아님 
//     isPrime = false
// }else{
//     for(let i=2;i<n;i++){
//       if(n % i == 0){
//         isPrime =  false 
//       }
//     }
// }

// console.log(isPrime)




