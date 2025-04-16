"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

function Login() {
  const [identification, setIdentification] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      const decoded: any = JSON.parse(atob(token.split(".")[1]));

      const role = decoded.role?.name;
      console.log(role)

      if (role == "hub-manager") router.push("/hub-manager");
      else if (role == "local-manager") router.push("/local-manager");
      else if (role == "gatekeeper") router.push("/gatekeeper");
      else router.push("/")
    }
  }, [])

  const handleLogin = async (e: any) => {
    e.preventDefault()

    const res = await axios.post('http://localhost:4000/auth/login', {
      id: identification,
      password
    })
    if (typeof window !== "undefined") {
      localStorage.setItem('token', res.data)
    }

    const decoded: any = JSON.parse(atob(res.data.split(".")[1]));

    const role = decoded.role?.name;
    console.log(role)

    if (role == "hub-manager") router.push("/hub-manager");
    else if (role == "local-manager") router.push("/local-manager");
    else if (role == "gatekeeper") router.push("/gatekeeper");
    else router.push("/")
  }

  return (
    <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="text" className="block text-sm/6 font-medium text-gray-900">
              Mã người dùng
            </label>
            <div className="mt-2">
              <input
                id="id"
                type="text"
                required
                value={identification}
                onChange={(e) => setIdentification(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Mật khẩu
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={e => handleLogin(e)}
              className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login