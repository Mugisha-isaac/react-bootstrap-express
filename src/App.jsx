import { useState } from 'react'
import './index.css'
import AuthForm from './components/Auth/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthForm />
    </div>
  )
}

export default App
