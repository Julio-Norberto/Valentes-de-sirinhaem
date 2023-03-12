import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from './routes/AppRoutes'

function App() {

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
