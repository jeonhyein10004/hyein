//6가지의 요소 조작 메서드

//1.대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;

//4. 증감 연산자
let num8 = 10;
console.log(--unm8); // 전위 연산
console.log(unm8--); // 후위 연산

//5. 논리 연산자
let or = true || false; // 둘 중 하나만 true면 true

let and = true && false; // 둘 다 모두 true여야 true // 그렇지 않으면 false

let not = !true; // true면 false // false면 true

//6. 비교 연산자 (두개의 값을 비교하는 것)

//1.push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6, 7);

// console.log(arr1);

//2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

//3. shift
//배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftItem = arr3.shift();
// console.log(shiftItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 매서드
let arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4);
