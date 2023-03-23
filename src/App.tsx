import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from './routes/AppRoutes.js'

function App() {

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
