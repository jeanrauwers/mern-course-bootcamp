import React, { useState, useContext } from 'react';
import api from '../../services/api'
import { Alert, Container, Button, Form, FormGroup, Input } from 'reactstrap';
import { UserContext } from '../../user-context'

export default function Login({ history }) {
    const { setIsloggedIn } = useContext(UserContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("false")

    const handleSubmit = async evt => {
        evt.preventDefault();
        const response = await api.post('/login', { email, password })
        const user_id = response.data.user_id || false;
        const user = response.data.user || false;

        try {
            if (user && user_id) {
                localStorage.setItem('user', user)
                localStorage.setItem('user_id', user_id)
                setIsloggedIn(true);
                history.push('/')
            } else {
                const { message } = response.data
                setError(true)
                setErrorMessage(message)
                setTimeout(() => {
                    setError(false)
                    setErrorMessage("")
                }, 2000)
            }
        } catch (error) {
            setError(true)
            setErrorMessage("Error, the server returned an error")
        }
    }

    return (
        <Container>
            <h2>Login:</h2>
            <p>Please <strong>Login</strong> into your account</p>
            <Form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FormGroup className="form-group-"></FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="email" name="email" id="email" placeholder="Your email" onChange={evt => setEmail(evt.target.value)} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="password" name="password" id="password" placeholder="Your password" onChange={evt => setPassword(evt.target.value)} />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Button className="submit-btn">Submit</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="secondary-btn" onClick={() => history.push("/register")}>New Account</Button>
                </FormGroup>
            </Form>
            {error ? (
                <Alert className="event-validation" color="danger"> {errorMessage}</Alert>
            ) : ""}
        </Container>
    );
}