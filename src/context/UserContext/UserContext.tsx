"use client"

import { User, UserAction } from "@/types/user"
import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react"
import { api, useAuth } from "../AuthContext/AuthContext"

const initialData: User[] = []

const UserContext = createContext({
  userState: initialData,
  dispatch: (action: UserAction) => { }
})

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { authState } = useAuth();

  const [userState, dispatch] = useReducer(
    userReducer,
    initialData
  )
  useEffect(() => {
    if (!authState.isAxiosConfigured) return
    loadData();
  }, [authState.isAxiosConfigured])

  async function loadData() {
    try {
      const res = await api.get('/users')
      dispatch({ type: "SET_USERS", payload: res.data });
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }


  const [loading, setLoading] = useState<boolean>(false)

  if (loading) return;

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext);
}

function userReducer(state: User[], action: UserAction): User[] {
  switch (action.type) {
    case "SET_USERS": {
      return action.payload
    }

    case "ADD_USER": {
      return [...state, action.payload];
    }

    case "EDIT_USER": {
      const idUserEdit = action.payload.id
      const newState = [...state]
      newState.forEach((user) => {
        if (user.id === idUserEdit) {
          user.role = action.payload.role
          user.station = action.payload.station
        }
      })

      return newState
    }

    case "DELETE_USER": {
      const idUserDel = action.payload.id
      const newState = [...state]
      newState.filter((user) => user.id !== idUserDel)
      return newState
    }

    default:
      return initialData
  }
}
