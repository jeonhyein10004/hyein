//props는 부모컴포넌트에서 자식 컴포넌트로만 전달할 수 있다.
// 자식 컴포넌트에서 부모로 전달 불가
//이벤트 객체
const Button = ({ text, color, children }) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button
        onClick={onClickButton}
        // onMouseEnter= {onClickButton}
        style={{color: color}}
        >
           {text} - {color.toUpperCase()}
           {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;