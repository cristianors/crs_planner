import React from 'react';

function Create (props){

    return(
           <div className="col-md-6 offset-md-1 p-4">

            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" className="form-control" id="designation" onChange={props.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="obs">OBS</label>
                    <input type="text" className="form-control" id="obs" aria-describedby="obsHelp" onChange={props.handleChange}/>
                    <small id="obsHelp" className="form-text text-muted">Be specific.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
       )

}

export default Create;