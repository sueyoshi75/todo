import { ChangeEvent, useEffect, useState } from "react"
import client, { urls } from "../client/client"
import { Employee } from "../types/types"

const Employee = () => {
  const defaultForm = {
    employeeid: "",
    name: "",
  }
  const [form, setForm] = useState(defaultForm)
  const [employees, setEmployees] = useState<Employee[]>([])
  const setFormHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log("success!")
    console.log(form)
  }

  const getHandler = async () => {
    try {
      const res: any = await client.get(`${urls.api}employees`)
      setEmployees(res.data)
    } catch {
      console.log("error Muuuuuuuu")
    }
  }

  useEffect(() => {
    getHandler()
  }, [])

  const createHandler = async () => {
    try {
      await client.post<Employee>(`${urls.api}employees`, form)
      console.log(form)
    } catch {
      console.log("error oh my god")
      console.log(form)
    }
  }

  // const createHandler = () => {
  //   fetch('http://localhost:8080/employees', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       employeeid: form.employeeid,
  //       name: form.name,
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  // const createHandler = () => {
  //   fetch('http://localhost:8080/todos', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       body: form.name
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  return (
    <>
      <div>Create Employee</div>
      <label>EmployeeID</label>
      <input
        type='text'
        name="employeeid"
        value={form.employeeid}
        onChange={setFormHandler}
      />
      <br/>
      <label>Name</label>
      <input
        type='text'
        name="name"
        value={form.name}
        onChange={setFormHandler}
      />
      <button
        onClick={createHandler}
      >
        Submit
      </button>
      {employees.map((employee) => (
        <>
          <div>{employee.employeeid}</div>
          <div>{employee.name}</div>
        </>
      ))}
    </>
  )
}

export default Employee