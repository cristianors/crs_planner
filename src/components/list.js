import React from 'react';

function List(props){

    return (
        <div className="list-group">
              <li className="list-group-item list-group-item-dark">{props.list}</li>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
              <a href="#" className="list-group-item list-group-item-action">crs planner</a>
        </div>
    );

}

export default List;