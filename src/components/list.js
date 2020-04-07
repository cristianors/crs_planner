import React from 'react';

function List(props){

    const listItems = props.items.map( item => {
            return <a href="#" className="list-group-item list-group-item-action" key={item.id} onClick={() => props.deleteItem(item.id)}>{item.designation}</a>
        });

    return (
        <div className="list-group">
              <li className="list-group-item list-group-item-dark">{props.list}</li>
              {listItems}
        </div>
    );

}

export default List;