import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Todo } from '../types/todo'

const Edit = () => {
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
      <input type='text' onChange={(e) => setTodo({...todo, title: e.target.value})} value={todo.title} />
      <br/>
      <textarea onChange={(e) => setTodo({...todo, content: e.target.value})} value={todo.content} />
      {/* <button onClick={() => handleUpdateTodo(todo)}>update</button> */}
      <button onClick={moveToHomePage}>Homeへ</button>
    </>
  )
}

export default Edit