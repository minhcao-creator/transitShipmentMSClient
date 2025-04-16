"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Logout() {
  const router = useRouter()
  useEffect(() => {
    localStorage.removeItem("token")
    router.replace('/login')
  }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout