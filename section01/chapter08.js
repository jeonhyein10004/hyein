// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1은 undefined이기 때문에 10 출력
let var5 = var1 ?? var3; // 20출력
let var6 = var3 ?? var2; // 둘다 undefined가 아니면 앞에 거 출력 20

//실제 응용사례 : 유저네임이 없으면 닉네임 출력 , 있으면 유저네임 출력
let userName;
let userNicName = "Winterlood";

let displayName = userName ?? userNickName;

//3. 삼항 연산자 (항을 3개 이용하는 연산자)
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수 -> "짝" , 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
