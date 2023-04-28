const Button = ({text, onClick, color}) => {
    return(
        <div className={`text-xl font-semibold rounded-md px-4 py-2 ${color}`} onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;