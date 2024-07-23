function Input({ placeholder, classes, type, inputref, onChange }) {
    return (
        <input
            placeholder={placeholder}
            className={classes}
            type={type}
            ref={inputref && inputref}
            onChange={() => onChange(e.target.value)}
        />
    )
}

export default Input