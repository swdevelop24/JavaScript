// 모든 문제에는 다음 배열이 쓰입니다.

let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];



// 1-map 문제 
// 1.모든 이름을 대문자로 바꾸어서 출력하시오.
// 2.성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 3.이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])



//1-1. map 대문자로 답:
// let upperCaseName = names.map((item) => { return item.toUpperCase() });
// console.log("map-upper", upperCaseName);


//map 1-2 ..성을 제외한 이름만 출력력 답: 
// let onlyNames = names.map((item) => {
//     let idx = item.split(" ");
//     return item.split(" ")[0];
// });

// console.log("map-onlynames", onlyNames);


//map 1-2 성을 제외한 이름만 출력 다른풀이:
// let onlyNames2 = names.map((item) => {
//     let idx = item.indexOf(" ");
//     return idx == -1 ? item : item.slice(0, idx);
// });

// console.log("map-onlynames2", onlyNames2);


//map 1-3 이름의 이니셜만 출력력 답: 
// let onlyInitials = names.map((item) => {
//     let splitted = item.split(" ");
//     // console.log(splitted)
//     let initials = "";
//     splitted.forEach((item) =>
//         initials += item[0]
//     )
//     return initials;

// })

// console.log("map-onlyinitials", onlyInitials);


//비교: 
// forEach는 배열의 각 요소에 대해 주어진 함수를 한 번씩 실행하는 메서드
// map()은 배열의 각 요소를 변환하여 새로운 배열을 생성하는 메서드


//map 1-3 이니셜만 다른답: 

// let onlyInitials2 = names.map((item) => {
//     let splitted = item.split(" ");
    // 첫 글자만 문자로 이어 붙임  join("")이 없으면, 배열이 그대로 반환
    //["J", "D"].join("")  // "JD"
//     let initials = splitted.map((name) => name[0]).join("");

//     return initials;
// });

// console.log("map-onlyinitials2", onlyInitials2);




// 2.filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)



//2-1. filter 이름 a 포함 답: 
// let includeA= names.filter((item) => item.includes("a"));
// console.log("filter-includeA", includeA);


//2-2. filter 이름 연속 글자 답: 
// let sameLetter = names.filter((item) => {
//     let splitted = item.split('');
//     return splitted.some((letter, idx) => letter == item[idx+1]);
// }); 
    

// console.log("beforesplit" , names.filter((item) => console.log(item)));
// console.log("splitcheck",names.filter((item) => item.split('')));
// console.log("filter-sameLetter", sameLetter);


//item은 각각의 문자열이고 split('')을 통해 문자열을 배열로 변환해서 그 배열에서 some사용함. 
//some은 배열에서 사용되어야 하는 메소드임. 




// 3.some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)



//3-1.some 이름길이 20자 이상 답: 
// let overAnd20 = names.some((item) => item.length>=20);
// console.log(overAnd20);



//3-2. some 성제외한 이름에 p 포함 답:
// let includeP = names.some((item) => {
//     let splitted = item.split(' ');
//     splitted.pop(); // 성을 제외 (성은 맨 뒤에 있음)
//     return splitted.some((nameItem) => {
//         // p가 포함되어 있는지 확인
//         return nameItem.toLowerCase().includes("p");
//     });
// });

// console.log("includeP", includeP);



//3-2. some 성과 미들네임 모두 제외한 퍼스트네임에만만 p 포함 답:
// let includeP2 = names.some((item) => {
//     let splitted = item.split(' ');
//     let firstName = splitted[0]; // 퍼스트 네임만 선택
//     console.log("firstname:", firstName);
//     return firstName.toLowerCase().includes("p"); // 퍼스트 네임에 p가 포함되는지 확인
// });

// console.log("includeP", includeP2);




// 4.every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
// 모두의 이름에 a 가 포함되어 있는가?


//4-1. every 전체 이름의 길이 답: 
// let every20 = names.every((item)=>{
//     return item.length >=20;
// })
// console.log("every20:", every20);


//4-2. every 모두의 이름에 a가 포함 답: 
// let everyA = names.every((item)=>{
//     return item.toLowerCase().includes("a")
// })
// console.log("everyA:", everyA);





// 5.find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// 미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)


//5-1.find 전체 길이 20자 이상사람 답: 
// let find20 = names.find((item) => item.length>=20);
// console.log(find20);


//5-2: find 미들네임이 포함되어있는 첫번째 사람 답: 
// let findMiddle = names.find((item) => {
//     return item.split(' ').length >=3; 
// })

// console.log(findMiddle);





// 6.findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.


// 6-1.findIndex 전체길이 20자이상 인덱스번호 답:
// let findIndex = names.findIndex((item) => item.length>=20);
// console.log("findIndex:",findIndex);


// 6-2. 미들네임 포함되어있는 사람의 인덱스 번호 답: 
// let findIndexMiddle = names.findIndex((item) => item.split(' ').length>=3);
// console.log("findIndexMiddle:", findIndexMiddle);




//chatgpt 정리
// | 메소드          | 설명                                                       | 반환값                          | 작동 방식                                                                                                                                  | 조건                                                                                      |
// |-----------------|------------------------------------------------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
// | **`some`**      | 배열 요소 중 하나라도 조건을 만족하면 `true`를 반환         | `boolean`                       | 배열을 순회하며 조건을 만족하는 요소가 **하나라도 있으면** `true`를 반환하고, 모두 만족하지 않으면 `false`를 반환                   | 조건을 만족하는 요소가 **하나라도 있으면** `true`                                        |
// | **`every`**     | 배열의 모든 요소가 조건을 만족해야 `true`를 반환           | `boolean`                       | 배열을 순회하며 **모든 요소가 조건을 만족하면** `true`를 반환하고, 하나라도 만족하지 않으면 `false`를 반환                           | 조건을 만족하는 **모든 요소**가 필요                                                   |
// | **`find`**      | 조건을 만족하는 첫 번째 요소를 반환                        | `element` 또는 `undefined`      | 배열을 순회하며 조건을 만족하는 첫 번째 요소를 반환. 조건을 만족하는 요소가 없으면 `undefined`를 반환                                  | 조건을 만족하는 첫 번째 요소 반환, 없으면 `undefined`                                    |
// | **`findIndex`** | 조건을 만족하는 첫 번째 요소의 인덱스를 반환                | `index` 또는 `-1`               | 배열을 순회하며 조건을 만족하는 첫 번째 요소의 **인덱스**를 반환. 조건을 만족하는 요소가 없으면 `-1`을 반환                           | 조건을 만족하는 첫 번째 요소의 **인덱스** 반환, 없으면 `-1`                             |
// | **`map`**       | 배열의 각 요소를 변환하여 새로운 배열을 반환               | `new array`                     | 배열의 각 요소에 대해 주어진 변환 작업을 수행하고, **새로운 배열을 반환**합니다. 원본 배열은 변경되지 않음.                            | 배열의 각 요소를 변환하여 새로운 배열 반환                                                |
// | **`filter`**    | 조건을 만족하는 요소만 모은 새로운 배열을 반환             | `new array`                     | 배열을 순회하며 조건을 만족하는 요소들만 **새로운 배열에 포함시켜 반환**합니다. 원본 배열은 변경되지 않음.                              | 조건을 만족하는 요소만 새로운 배열에 포함                                               |
// | **`forEach`**   | 배열의 각 요소에 대해 주어진 함수를 실행                    | `undefined`                     | 배열의 각 요소에 대해 주어진 함수를 **실행**합니다. **반환값 없음**. 원본 배열을 변경할 수 있음.                                           | 배열의 각 요소에 대해 주어진 함수를 **실행**                                               |


//일급 함수는 함수가 다른 값들과 같은 방식으로 취급되는 특성입니다.
// 람다 함수는 일급 함수 특성을 활용하여 간결하고 직관적으로 작성된 함수를 의미합니다.
// 따라서 람다 함수는 일급 함수의 하나의 예시이며, 일급 함수의 특성을 쉽게 활용할 수 있는 방법


