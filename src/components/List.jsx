/* eslint-disable react/prop-types */
import ListItem from './ListItem'

function List(props) {
    return (
        <ul>
            {props.colors.map((color, index) => {
                return <ListItem key={index} color={color} onButtonClick={props.onButtonClick} />;
            })}
        </ul>
    );
}


export default List;