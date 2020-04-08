import React from 'react';

function Details (props) {

    let output = props.item ? <div className="modal fade align-self-center" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{props.item.designation}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {props.item.date}<br/><br/>
          {props.item.description} {props.item.obs}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => props.deleteItem(props.item.id)}>Delete</button>
        </div>
      </div>
    </div>

</div> : <div></div>;

    return (
        output
        
    )

}

export default Details;