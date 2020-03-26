import React,  {useState} from 'react'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data)

            alert(`Seu id de acesso: ${response.data.id}`)
            history.push('/')
        } catch {
            alert('Erro no cadastro, tente novamente.')
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>

                    <h1>Sign In</h1>
                    <p>register, enter the platform and help people find the cases of your NGO.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder='NGO Name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    placeholder="E-mail" type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder='UF' 
                        style={{ width: 80 }}
                        value={uf}
                        onChange={e => setUF(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}