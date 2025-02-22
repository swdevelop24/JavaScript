// 1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오

// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"

// let store = {    name:name,    fruits:fruits,    address:address
// }
// console.log(store)



//1번 답
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"

// let store={name, fruits, address};
// console.log(store);



// 2. es6 문법을 이용하여 다음과 같이 출력하시오
// 1번 문제의 store 변수를 사용하여 다음과 같이출력해주세요 
// 제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul 에 있습니다



// 2번답: 
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"

// let store={name, fruits, address};

// console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address} 에 있습니다`)




// 3. 다음 코드를 Destructoring을 이용하여 해결하시오

// function calculate(obj){    // 함수 안을 바꾸시오
//     return obj.a+obj.b+obj.c
// }

// calculate({a:1,b:2,c:3})



//3번 답: object destructuring.
// function calculate(obj){    
//     let {a,b,c} = obj //참고 let a = obj.a  let b = obj.b let c=obj.c 
//     return a+b+c;
// }

// console.log(calculate({a:1,b:2,c:3}));



// 4. 다음 문제에 정답이 true가 나오게 하시오

// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// function findStore(obj){
//     return name==="noona store" && city === "Seoul"
// }
// console.log(findStore({name,fruits,address}))



//4번 답:
// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// function findStore(obj){
//     let {name, address:{city}} = obj; //obj 안에 obj 표현유의하기!
//     return name==="noona store" && city === "Seoul"
// }
// console.log(findStore({name,fruits,address}))




// 5. 다음과같이 프린트되게 코드를 바꾸시오
// function getNumber(){
//     let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
//     return {first,third,forth}
// }
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }



// 5번답:
// function getNumber(){
//     let array = [1,2,3,4,5,6]    
//     // let [first,,third, forth , ...rest] =array;  // [] 사용하고 & , ,사용 ...rest는 배열의 끝에만 사용가능. 
//     let [first, ,third,forth] =array;
//     return {first,third,forth}
// }
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }




// 6. 다음의 결과가 true가 되게 하시오
// function getCalendar(first, ...rest) {
//   return (
//     first === "January" &&
//     rest[0] === "Febuary" &&
//     rest[1] === "March" &&
//     rest[2] === undefined
//   );
// }
// console.log(getCalendar()); // 여기를 바꾸시오


// 6번답:
// function getCalendar(first, ...rest) { //Rest Parameter (...rest):
//     return (
//       first === "January" &&
//       rest[0] === "Febuary" &&
//       rest[1] === "March" &&
//       rest[2] === undefined
//     );
//   }
//   console.log(getCalendar("January","Febuary","March")); // 여기를 바꾸시오




// 7. 두 어레이들중 최소값을 찾는 함수를 완성하시오
// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
//     return Math.min() // 여기를 바꾸시오
// }
// console.log(getMinimum())


//7번답:
// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
    
//     return Math.min(...a, ...b) //스프레드
// }
// console.log(getMinimum()) //9




// 8. 다음의 함수를 화살표 함수로 바꾸시오
// function sumNumber() {
//   // 여기서부터 바꾸시오
//   const sum = function (a, b) {
//     return a + b;
//   };
//   return sum(40, 10);
// }


//8번답:
// function sumNumber() {
//   // 여기서부터 바꾸시오
//   const sum = (a, b) => a+b;
//   return sum(40, 10);
// }

// console.log(sumNumber()); //50



// 9. 다음함수를 화살표 함수로 바꾸시오
// function sumNumber() {
//   //여기 아래부분 함수 정의를 바꾸시오 
//   return addNumber(1)(2)(3);
//   function addNumber(a) {
//     return function (b) {
//       return function (c) {
//         return a + b + c;
//       };
//     };
//   }
// }
//  console.log(sumNumber());




//9번 답:
// function sumNumber() {
//     // 함수 정의 위치 변경
//     let addNumber = (a) => (b) => (c) => a + b + c;  // 화살표 함수로 변환
//     return addNumber(1)(2)(3);  // 호출
  
//   }
  
//   console.log(sumNumber());  // 6
  
  


//5번관련 chatgpt 정리 : ...는 나머지 요소를 모은다는 의미입니다. 
// 하나의 ...는 배열의 나머지 모든 요소를 하나의 변수에 담기 위해 사용됩니다.
//두 개의 ...를 중간에 배치하는 것은 문법적으로 허용되지 않습니다
// ...는 배열의 시작 또는 끝에서만 사용할 수 있으며, 중간에 여러 개를 사용하는 것은 불가능함
// 가운데 값을 생략하려면 쉼표를 사용


//6번 관련 chatgpt정리
// | 구분               | 배열에서 `...rest`                    | 객체에서 `...rest`                |
// |-------------------- |-------------------------------------|-----------------------------------|
// | **동작 방식**        | 나머지 요소를 배열로 묶음             | 나머지 속성을 객체로 묶음        |
// | **예시**            | `const [...rest, last] = array;`     | `const { name, ...rest } = obj;`  |
// | **결과**            | `rest: [1, 2, 3, 4], last: 5`        | `rest: { age: 30, country: "USA" }` |
// | **위치**            | 맨 앞에도 올 수 있음                   | 맨 뒤에만 와야 함                 |


//7번관련 chatgpt 정리
// Spread(스프레드) vs Destructuring(디스트럭처링)
// | 비교 항목    | Spread (...)                          | Destructuring (구조 분해 할당)  |
// |-------------|----------------------------------|------------------------------|
// | 목적        | 배열/객체를 개별 요소로 펼치기         | 배열/객체에서 특정 요소를 추출하여 변수에 할당 |
// | 사용 예시    | `[...arr]`, `{ ...obj }`, `func(...arr)` | `[a, b, ...rest] = arr`, `{ name, ...rest } = obj` |
// | Rest와 차이  | 펼치는 역할 (`...spread`)          | 남은 요소들을 묶는 역할 (`...rest`) |
// | 함수 매개변수  | `func(a, b, ...args)` → **Spread 가능** | `function(a, ...rest) {}` → **Rest Parameter** |


//9번관련 chatgpt정리
// *커링(Currying)**이라는 기법을 사용한 예제입니다. 
// 커링은 여러 개의 인자를 받는 함수를, 하나의 인자만 받는 여러 개의 함수로 변환하는 기법입니다. 
// 이 예제에서는 addNumber 함수가 부분적으로 인자를 받는 함수들로 구성되어 있으며,
//  이를 체인처럼 연결해서 값을 더하는 방식입니다.
//  커링을 사용하면 함수의 재사용성, 유연성, 가독성이 향상되며, 
//  여러 개의 인자를 받는 함수를 단계적으로 처리하여 다양한 방식으로 부분적으로 적용할 수 있습니다.
//예시
// const calculatePrice = (taxRate) => (price) => price + price * taxRate;
// const applyTax = calculatePrice(0.2);  // 세금률을 고정
// console.log(applyTax(100));  // 120 (100 + 100 * 0.2)
// 이렇게 세금률을 고정하고 applyTax라는 함수를 만들어서 나중에 가격만 넘기면 됩니다.
// 함수가 "세금률을 적용한 가격을 계산한다"는 의도를 명확히 나타냅니다.



