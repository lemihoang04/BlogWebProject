import {Box, TextField, Button, styled, Typography} from '@mui/material'

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    border-radius: 25px;
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
const Login = () => {
    const imgLink = 'https://vectorlogoseek.com/wp-content/uploads/2019/10/bloq-vector-logo.png';
    return(
        
        <Component>   
            <Box>      
            <Image src={imgLink} alt="login" />
            {/* <Wrapper>
                <TextField variant="standard" label="Username" />
                <TextField variant="standard" label="Password"/>
                <Button variant='contained'>Login</Button>
                <div>Don't have account?</div>
                <Button>Register an account</Button>
            </Wrapper> */}
            <Wrapper>
                <TextField variant="standard" label="Username" />
                <TextField variant="standard" label="Password"/>
                <TextField variant="standard" label="Password"/>
                <Button variant='contained'>Login</Button>
                <div>Don't have account?</div>
                <Button>Register an account</Button>
            </Wrapper>
            </Box>  
        </Component>

    )
}

export default Login;