import {useState} from 'react'
import axios from 'axios'

const App = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('* make sure passwords match!')
            return
        }

        axios.post('/signup', {
            username,
            password
        })

        setError(null)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                id="password"
                name="password"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                id="password-check"
                name="password-check"
                placeholder="confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input type="submit"/>
            <p>{error}</p>
        </form>
    )
}
export default App
