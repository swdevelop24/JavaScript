// If문 문제

// 문제 1
// 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오
// let num = 7;
// if(num == 0){
//     console.log("숫자는 0");
// }else if(num <0){
//     console.log("음수입니다");
// }else{
//     console.log("양수입니다.");
// }


// 문제 2
// 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오


// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

// let score = 90
// if (score<59){
//     console.log("F")
// }else if(score<70){
//     console.log("D")
// }else if(score<80){
//     console.log("C")
// }else if(score<90){
//     console.log("B")
// }else if(score<=100){
//     console.log("A")
// }


// 문제 3
// 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
// let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘 다 할 줄 안다면 “합격!” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

// input : let skills = ["HTML","CSS","Javascript","React"]
// output: 합격 

// input:let skills = ["HTML","CSS","Javascript"] 
// output: 예비 

// input:let skills = ["HTML","CSS"] 
// output: 탈락

// let skills = ["HTML","CSS","Javascript","React"];
//let skills = ["HTML","CSS","Javascript"];
// let skills = ["HTML","CSS"];  

// if (skills.includes("Javascript") && skills.includes("React")){
//     console.log("합격");
// }else if(skills.includes("Javascript") || skills.includes("React")) {
//     console.log("예비"); 
// }else{
//     console.log("불합격");
// }