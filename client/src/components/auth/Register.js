import { useState } from "react";
import BgImage from "./BgImage";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { postRegister } from "../../store/asyncMethods/AuthMethods";

const Register = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const  {loading, registerErrors} = useSelector( (state) => state.AuthReducer);
    const dispatch =  useDispatch();

    const handleInputs = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    //функция която изпраща на нашият api server
    const userRegister = async (e) => {
        e.preventDefault();
        dispatch(postRegister(state));
    };

    return (
        <>
            <Helmet>
                <title>User Register</title>
                <meta name="description" content="User Register form"/>
            </Helmet>
            <div className="row mt-80">
                <div className="col-8">
                    <BgImage />
                </div>
                <div className="col-4">
                    <div className="account">
                        <div className="account_section">

                            <form onSubmit={userRegister}>
                            <div className="group">
                                    <h3 className="form-heading">Register</h3>
                                </div>
                                <div className="group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="group_control" 
                                        placeholder="Enter Name"
                                        value={state.name}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="group_control" 
                                        placeholder="Enter Email"
                                        value={state.email}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input 
                                        type="password" 
                                        name="password" className="group_control" 
                                        placeholder="Create Password"
                                        value={state.password}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="group">
                                    <input 
                                        type="submit" 
                                        name="" 
                                        className="btn btn-default btn-block" 
                                        value={loading ? '...' : 'Register'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;