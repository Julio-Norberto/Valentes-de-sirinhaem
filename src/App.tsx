import './App.css'
import { AuthProvider } from './contexts/authContext'
import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from './routes/AppRoutes.js'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
