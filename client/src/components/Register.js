import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    const { auth } = useContext(UserContext);
    const loggedIn = auth.loggedIn;

    return (
        <>
            {loggedIn ? (
                <Redirect to='/dashboard' />
            ) : (
                <form>
                    <h5>Register</h5>
                    <input
                        placeholder='enter first name'
                        required
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br />
                    <input
                        placeholder='enter last name'
                        required
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />

                    <input
                        placeholder='enter email'
                        required
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <input
                        placeholder='enter password'
                        required
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />

                    <input
                        placeholder='re-enter password'
                        required
                        type='password'
                        value={passwordMatch}
                        onChange={(e) => setPasswordMatch(e.target.value)}
                    />
                    <br />
                    <button type='submit'>register</button>
                </form>
            )}
        </>
    );
};
