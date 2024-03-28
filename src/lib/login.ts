import { ChangeEvent, useState } from "react"
import client, { urls } from "../client/client"

export const useLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const changeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin({...login, [name]: value})
  }

  const handleLogin = async () => {
    await client.login(urls.api + "login", login)
  }

  return {changeLogin, handleLogin}
}