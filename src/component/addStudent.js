import React from 'react';

export default function AddStudent() {
    return(
        <div className="card card-body my-3">
            <form>
                <div className="form-group">
                    <label>Add new student</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Student</span>
                        </div>
                        <input type="text" className="form-control" placeholder="First Name"/>
                        <input type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                    <label>User id</label>
                    <input type="text" className="form-control" placeholder="Enter User id" value=""/>
                </div>
                <div className="form-group">
					<label>Password</label>
                    <input type="text" className="form-control" placeholder="Enter Password" value=""/>
				</div>
                <input type="submit" className="btn btn-primary" value="create"/>
            </form>
        </div>
    );
}