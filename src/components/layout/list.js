import React from 'react';

function List(props){

    const listItems = props.items.map( item => {
            return <a href="#" className="list-group-item list-group-item-action btn btn-secondary" data-toggle="modal" data-target="#exampleModal" key={item.id} onClick={() => props.selectItem(item.id)}>{item.designation}</a>
        });

    return (
        <div className="list-group">
              <li className="list-group-item list-group-item-dark">{props.list}</li>
              {listItems}
        </div>
    );

}

export default List;