/* eslint-disable react/prop-types */
// function ListItem(props) {
//     return <li key={props.animal}>{props.animal}</li>
// }
import Button from "./Button"

function ListItem(props) {

    const handleClick = () => {
        props.onButtonClick(props.color);
    }

    return <li><Button text={props.color} handleClick={handleClick} /></li>
}


export default ListItem;