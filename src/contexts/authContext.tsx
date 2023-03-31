import { User } from "firebase/auth";
import { useEffect, useState, useContext, createContext } from "react";
import { auth } from '../services/firebase'

type ContextProps = {
  user: User | null | undefined
}

export const AuthContext = createContext({} as ContextProps)

export const AuthProvider = (props: any) => {
  const { children } = props
  const [user, setUser] = useState<User | null>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((userFirebase) => {
      setUser(userFirebase)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <> Carregando... </>
  }

  return (
    <AuthContext.Provider value={{ user }}> {children} </AuthContext.Provider>
  )
}

