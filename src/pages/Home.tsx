import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  // const [todos, setTodos] = useState<Todo[]>([])
  // const [title, setTitle] = useState("")
  // const [content, setContent] = useState("")
  // const navigate = useNavigate()

  // const toggleCompleted = (todo: Todo) => {
  //   const updatedTodos = todos.map((item) => {
  //     if(item.id === todo.id){
  //       return {...item, isCompleted: !item.isCompleted}
  //     }
  //     return item
  //   })
  //   setTodos(updatedTodos)
  // }

  // useEffect(() => {
  //   handleGetAllTodo()
  // }, [])

  // const handleGetAllTodo = () => {
  //   fetch('http://localhost:8080/todos')
  //   .then(response => response.json())
  //   .then((json) => setTodos(json))
  //   .then(data => console.log(data))
  // }

  // const handleCreateTodo = () => {
  //   fetch('http://localhost:8080/todos', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       id: "",
  //       title: title,
  //       content: content,
  //       isCompleted: false,
  //       createdAt: ""
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .then(handleGetAllTodo)
  //   setTitle("")
  //   setContent("")
  // }

  // const handleUpdateTodo = (todo: Todo) => {
  //   fetch(`http://localhost:8080/todos/${todo.id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(todo)
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  // const handleDeleteTodo = (todo: Todo) => {
  //   fetch(`http://localhost:8080/todos/${todo.id}`, { method: 'DELETE' })
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  //   const updatedTodos = todos.filter(item => item.id !== todo.id)
  //   setTodos(updatedTodos)
  // }

  // const moveToShowPage = (todo: Todo) => {
  //   navigate(`/todos/${todo.id}`)
  // }

  // const moveToEditPage = (todo: Todo) => {
  //   navigate(`/todos/${todo.id}/edit`)
  // }

  return (
    <>
      <h1>To do</h1>
      {/* <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => handleCreateTodo()}
      >
        save
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            onChange={() => toggleCompleted(todo)}
          />
          <span>{todo.title}</span>
          <button onClick={() => moveToShowPage(todo)}>view</button>
          <button onClick={() => handleDeleteTodo(todo)}>delete</button>
          <button onClick={() => moveToEditPage(todo)}>edit</button>
        </div>
      ))} */}
    </>
  )
}

export default Home
