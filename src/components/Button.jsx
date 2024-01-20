/* eslint-disable react/prop-types */
function Button({ text = 'Click Me', color = '#ffbe0b', font = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: font + 'px'
    }

    return <button style={buttonStyle} onClick={handleClick}>{text}</button>

}

export default Button