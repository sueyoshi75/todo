import axios from "axios"

const get = async <T>(url: string): Promise<T> => {
  return await axios
    .get(url, { withCredentials: true })
}

const post = async <T>(url: string, data: any): Promise<T> => {
  return await axios
    .post(url, data, { withCredentials: true })
}

const login = async (url: string, data: any) => {
  await axios.post(url, data, { withCredentials: true })
}

const client = {
  get,
  post,
  login,
}

export const urls = {
  api: import.meta.env.VITE_API_URL,
}

export default client