import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";

function Login() {
        return(
        <div className="card my-5 shadow-sm">
            <span>
                <form>
                    <article className="card-body mx-auto">
                        <span><h1 className="text-center">Login</h1></span>
                        <div className="form-group">
					        <label>Username</label>
                            <input type="text" className="form-control" placeholder="Enter Username" value=""/>
				        </div>
                        <div className="form-group">
					        <label>Password</label>
                            <input type="text" className="form-control" placeholder="Enter Password" value=""/>
				        </div>
                        <Link to="/manageuser">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </Link>
                    </article>
                </form>
            </span>
        </div>
        );
}
export default Login;