import { useLogin } from "../lib/login"

const Login = () => {
  const { changeLogin, handleLogin } = useLogin()

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="email">email</label>
      <input
        type='text'
        id="email"
        name='email'
        onChange={changeLogin}
      />
      <br/>
      <label htmlFor="password">password</label>
      <input
        type='password'
        id="password"
        name='password'
        onChange={changeLogin}
      />
      <button onClick={() => handleLogin()}>ログイン</button>
    </>
  )
}

export default Login