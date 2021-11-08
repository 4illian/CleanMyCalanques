import React, { useState } from 'react';


const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    const handleLogin = (e) =>{
        e.preventDefault();
        const test =  {
            email,
            password
        }
        console.log(test);
        

    };
    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                type="text"
                name="email"
                id="email"
                onChange = {(e) => setEmail(e.target.value)}
                value={email}
                />
                <div class="email error"></div>
                <label htmlFor="password">password</label>
                <input
                type="password"
                name="password"
                id="password"
                onChange = {(e) => setPassword(e.target.value)}
                value={password}
                />
                <div class="password error"></div>

                <input type="submit" value="Se connecter"></input>
            </form>
        </div>
    );
};

export default SignInForm;