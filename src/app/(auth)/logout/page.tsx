"use client"

import { api, useAuth } from "@/context/AuthContext/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Logout() {

  const router = useRouter()

  const { authState } = useAuth()

  useEffect(() => {
    localStorage.removeItem("accesstoken")
    localStorage.removeItem("refreshtoken")
    handleLogout()
    router.replace('/login')
  }, [])

  const handleLogout = async () => {
    const res = await api.post(`users/${authState.user?.id}`)
  }

  return (
    <div>Logout</div>
  )
}

export default Logout