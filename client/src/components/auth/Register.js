import BgImage from "./BgImage";

const Register = () => {
    return (
        <>
            <div className="row mt-80">
                <div className="col-8">
                    <BgImage />
                </div>
                <div className="col-4">
                    <div className="account">
                        <div className="account_section">
                            <form>
                            <div className="group">
                                    <h3 className="form-heading">Register</h3>
                                </div>
                                <div className="group">
                                    <input type="text" name="" className="group_control" placeholder="Enter Name"/>
                                </div>
                                <div className="group">
                                    <input type="email" name="" className="group_control" placeholder="Enter Email"/>
                                </div>
                                <div className="group">
                                    <input type="password" name="" className="group_control" placeholder="Create Password"/>
                                </div>
                                <div className="group">
                                    <input type="submit" name="" className="btn btn-default btn-block" value="Register"/>
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