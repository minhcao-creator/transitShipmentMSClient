"use client"

import { api, useAuth } from "@/context/AuthContext/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Logout() {

  const router = useRouter()

  const { authState } = useAuth()

  useEffect(() => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    handleLogout()
  }, [])

  const handleLogout = async () => {
    //console.log(authState.user)
    await api.post('auth/logout', null, {
      params: {
        id: authState.user?.id
      }
    })
    router.replace('/login')
  }


  return (
    <div>Logout</div>
  )
}

export default Logout