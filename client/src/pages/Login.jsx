import { useState } from "react";
import styled from "styled-components"
import {mobile} from "../responsive"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";


const Container = styled.div`
width: 100vw;
height: 100vh;
background:  linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://i.pinimg.com/736x/64/e0/b8/64e0b8556d28d6e666dfc01a16c0168b.jpg" ) center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({ width: "75%"})};

`;
const Title = styled.h1`
  font-style: 24px; 
  font-weight:300;   
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color:red;
`;


const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password});
    }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"  onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>     
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>something went wrong.</Error>}
                <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login