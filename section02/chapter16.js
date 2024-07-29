// 1.상수 객체
// 기존 선언된 animal을 수정하는 건 불가하나 내부의 객체를 수정, 추가, 삭제하는 일은 가능하다
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2;
animal.name = "까망이"; //수정
delete animal.color; //삭제

console.log(animal);


//2.메서드 
// ->값이 함수인 프로퍼티를 말함
const person = {
    name: "이정환",
    //메서드 선언
    sayHi: () }
        console.log("안녕!");
    },
};

person.sayHi();
