import { useState } from "react";
import './Auth.css';
import icon from '../../assets/icon.png';
import Aboutauth from "./Aboutauth";

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!email && !password) {
            alert("Enter email and password");
        }
        if(isSignUp) {
            if(!name) {
                alert("Enter a name to continue");
            }
            console.log(name, password, email);
        } else {
            console.log(email, password);
        }
    };

    const handleSwitch = () => {
        setIsSignUp(!isSignUp);
        setName("");
        setEmail("");
        setPassword("");

    };

    return (
        <section className="auth-section">
            {isSignUp && <Aboutauth />}
            <div className="auth-container-2">
                <img src={icon} alt="icon" className="login-logo"/>
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </label>
                    )}
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </label>
                    <label htmlFor="password">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h4>Password</h4>
                            {!isSignUp && (
                                <p style={{color: "#007ac6", fontSize: "13px"}}>
                                    Forgot Password?
                                </p>
                            )}
                        </div>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </label>
                    <button type="submit" className="auth-btn">
                        {isSignUp ? "Sign up": "Log in"}
                    </button>
                </form>
                <p>
                    {isSignUp ? "Already have an account?": "Don't have an account"}
                    <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
                        {isSignUp ? "Log in" : "Sign up"}
                    </button>
                </p>
            </div>
        </section>
    )
};

export default Auth;