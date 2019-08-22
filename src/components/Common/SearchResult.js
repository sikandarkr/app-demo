import React from 'react';
function List(props) {
    console.log("this is your props data",props);
    return <p>{props.data}</p>;
}
export default List;

