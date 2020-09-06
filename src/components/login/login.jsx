import React from 'react';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from '@material-ui/core/Button';
import Input from "./input";
import { Link } from 'react-router-dom';
import './style/login.scss';

const Login = () => {
    return ( 
        <div className="appOuterContainer">
            <div className="appContainer">
                <div className="login">
                    <div className="login__iconWrapper">
                        <LockOutlinedIcon  className="login__icon"/>
                    </div>
                    <div className="login__signin">Sign in</div>
                    <div className="login__username">
                        <Input 
                            label="username"
                            type="text"
                        />
                    </div>
                    <div className="login__password">
                        <Input 
                            label="password"
                            type="password"
                        />
                    </div>
                    <div className="login__button">
                        <Button 
                            variant="contained" 
                            // onClick={this.handleSubmit}
                            fullWidth
                            color="primary"
                        >
                            SIGN IN
                        </Button>
                    </div>
                    <div className="login__message">Don't have an account? Sign Up </div>
                    <div className="login__or">
                        <div className="login__or--line"></div>
                        <div className="login__or--text">or</div>
                        <div className="login__or--line"></div>
                    </div>
                    <div className="login__options">
                        <Link style={{textDecoration: "none"}} to="/join">
                            <Button 
                                variant="contained" 
                                fullWidth
                                color="primary"
                            >
                                Without Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;