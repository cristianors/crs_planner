import React from 'react';

function Create(props){

    return(
           <div className="col-md-6 offset-md-1 p-4">

            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" className="form-control" id="designation" onChange={props.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="descriptionHelp" onChange={props.handleChange}/>
                    <small id="descriptionHelp" className="form-text text-muted">Describe the item.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
       )     
}

export default Create;