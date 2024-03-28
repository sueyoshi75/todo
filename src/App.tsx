import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Show from './pages/Show'
import Edit from './pages/Edit'
import Employee from './pages/Employee'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:todoId" element={<Show />} />
        <Route path="/todos/:todoId/edit" element={<Edit />} />
        <Route path="/employees/new" element={<Employee />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
