import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from "../../assets/heroes.png"

import api from '../../services/api'

export default function Login() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            console.log(response.data.name);

            history.push('./profile')
        } catch (err) {
            alert('falha no login, tente novamente')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="be the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input 
                    placeholder="Your Id"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Login</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Sign In
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}