import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Todo } from '../types/todo'

const Show = () => {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    title: "",
    content: "",
    isCompleted: false,
    createdAt: "",
})
  const {todoId} = useParams()
  const navigate = useNavigate()

  const handleGetTodoById = () => {
    fetch(`http://localhost:8080/todos/${todoId}`)
    .then(response => response.json())
    .then((json) => setTodo(json))
    .then(data => console.log(data))
  }

  useEffect(() => {handleGetTodoById()}, [])

  const moveToHomePage = () => {
    navigate("/")
  }

  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <button onClick={moveToHomePage}>Homeへ</button>
    </>
  )
}

export default Show