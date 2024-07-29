import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다 (조건문, 반복문 불가)
// 2. JSX에서는 숫자, 문자열, 배열 값만 렌더링 된다 (트루, 널, 언디파인 불가)
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상의 태그는 반드시 하나여야만 한다
const Main = () => {
    const user = {
        name: "전혜인",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div className="logout">로그아웃</div>; 
    } else {
        return <div>로그인</div>;
    }
  };

  export default Main;