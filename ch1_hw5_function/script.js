// 함수 문제
// 1."안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오


// function greet(){
//     console.log("안녕 내 이름은 제시카야");
// }

// greet();



// 2.이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”


// let name="제시카"; 
// function greet(name){
//     console.log("안녕 내 이름은", name + "야");
// }

// greet(name);


// function greet2(name){
//     console.log(`안녕 내 이름은 ${name}야`); //백틱(backtick)사용함에 유의 
// }

// greet2(name);




// 3.매개변수로 전달받은 이름을 반환하게 함수를 수정하시오


// let name="에밀리"; 
// function greet(name){
//     return name; 
// }

// console.log(greet(name));




//  4.meetAt 함수를 만들어주세요.
//      인자를 세개 받습니다.

//  첫번째 인자는 년도에 해당하는 숫자입니다.
//  두번째 인자는 월에 해당하는 숫자입니다.
//  세번째 인자는 일에 해당하는 숫자입니다.
//  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
//  년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을
//  리턴 해주세요.
//  년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
//  리턴 해주세요.

// 결과 예시
// meetAt(2022); // 결과 --> 2022년
// meetAt(2032, 3); // 결과 --> "2032년 3월"
// meetAt(1987, 10, 28); // 결과 --> "1987/10/28"



// function meetAt(year, month, date){   
//     if(date){ //most strict 한 경우부터 if절로 만들어줌.
//         return `${year}/${month}/${date}`;  //변수${}부분과 아닌것 잘 살펴보기  
//     }
//     if(month){
//         return `${year}년 ${month}월`
//     }
//     if(year){
//         return `${year}년`
//     }
// }


// console.log(meetAt(2022)); // 결과 --> 2022년
// console.log(meetAt(2032, 3)); // 결과 --> "2032년 3월"
// console.log(meetAt(1987, 10, 28)); // 결과 --> "1987/10/28"





// 5.findSmallestElement 함수를 구현해 주세요.

// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

// arr 의 값들 중 가장 작은 값을 리턴 해주세요.

// 만일 arr 가 비어있으면 0을 리턴 해주세요.

// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
// [100,200,3,0,2,1]

// function findSmallestElement(arr){
//     if(arr.length == 0) return 0;
//     let mini=arr[0];

//     for(let i of arr){
//         if(i < mini){
//             mini =i; 
//         }
//     }

//     return mini; 
// }

// let arr =[100,200,3,0,2,1]; 
// let brr=[100,-200,3,0,-2,-1]; 
// let crr =[]
// console.log("배열에서 최소값은?:",findSmallestElement(arr)); 
// console.log("배열에서 최소값은?:", findSmallestElement(brr));
// console.log("배열에서 최소값은?:", findSmallestElement(crr));








// 6. 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

// 출력예 )

// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3

// let arr = [50000, 10000, 5000, 1000, 500, 100]; // 금액 단위, greedy로 풀기 
// let money = 12300; // 계산할 금액


// function calc(money) {
//     let mini = 0; // 최소 개수
//     for (let i = 0; i < arr.length; i++) {
//         if (money / arr[i] >= 1) {
//             let count = Math.floor(money / arr[i]); // 개수 계산 (변수 선언 추가)
//             mini += count; // 총 개수 누적
//             money %= arr[i]; // 남은 금액 계산
//         }
//     }
//     return mini; // 최소 개수 반환
// }

// console.log(calc(money));

// //숙제에 대한 내 대답
// function calcprint(money) {
//     console.log(`${money}인 경우`)
//     for (let i = 0; i < arr.length; i++) {
//         if (money / arr[i] >= 1) {
//             let count = Math.floor(money / arr[i]); // 개수 계산 (변수 선언 추가)
//             console.log(arr[i], "X", count); // 해당갯수 출력
//             money %= arr[i]; // 남은 금액 계산
//         }
//         else{
//             console.log(arr[i], "X", 0);
//         }
//     }
// }

// calcprint(money);



