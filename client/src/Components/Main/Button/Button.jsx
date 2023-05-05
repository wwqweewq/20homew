import './button.scss';

const Button = (props) => {
    return(
        <button ref={props.btnForFormRef} className={props.btnClass}>{props.btnText}</button>
    )
};

export default Button ;