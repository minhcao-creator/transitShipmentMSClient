"use client"

import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api, useAuth } from "@/context/AuthContext/AuthContext"

function Login() {
  const [identification, setIdentification] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  const { dispatch } = useAuth()

  useEffect(() => {

    const accessToken = localStorage.getItem("accessToken") || '';

    if (!accessToken) return

    const payload = accessToken.split('.')[1]

    console.log(JSON.parse(window.atob(payload)))

    const userId = JSON.parse(window.atob(payload)).id;

    checkAuth(userId)

  }, [])


  async function checkAuth(userId: string) {
    try {
      const res = await api.get(`users/${userId}`)

      if (res.data) {
        dispatch({
          type: "SET_AUTH", payload: {
            user: {
              id: res.data.id,
              username: res.data.username,
              lastname: res.data.lastname,
              firstname: res.data.firstname,
              phoneNumber: res.data.phoneNumber,
              email: res.data.email,
              role: res.data.role.name,
              station: res.data.station.id,
            },
            isAxiosConfigured: true,
            isCheckAuth: true,
          }
        })
        if (res.data.role.name == "hub-manager") router.push("/hub-manager");
        else if (res.data.role.name == "local-manager") router.push("/local-manager");
        else if (res.data.role.name == "gatekeeper") router.push("/gatekeeper");
      }

    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        console.log("Token expired. Logging out...");
        localStorage.removeItem("accessToken");
      }
    }
  }

  //useEffect(() => {
  //   if (!accessToken) return;

  //   const requestInterceptor = api.interceptors.request.use(
  //     (config) => {
  //       if (accessToken) {
  //         config.headers["Authorization"] = `Bearer ${accessToken}`;
  //       }
  //       return config;
  //     },
  //     (error) => Promise.reject(error)
  //   );

  //   setIsAxiosConfigured(true);

  //   checkAuth();

  //   return () => {
  //     api.interceptors.request.eject(requestInterceptor);
  //     setIsAxiosConfigured(false);
  //   };
  // }, [accessToken]);

  const handleLogin = async (e: any) => {
    e.preventDefault()

    const res = await axios.post('http://localhost:4000/api/v1.0/auth/login', {
      id: identification,
      password
    })

    if (typeof window !== "undefined") {
      localStorage.setItem('accessToken', res.data.accessToken)
      localStorage.setItem('refreshToken', res.data.refreshToken)
    }

    dispatch({
      type: "SET_AUTH", payload: {
        user: {
          id: res.data.id,
          username: res.data.username,
          lastname: res.data.lastname,
          firstname: res.data.firstname,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          role: res.data.role,
          station: res.data.station,
        },
        isAxiosConfigured: true,
        isCheckAuth: true,
      }
    })

    const role = res.data.role;

    if (role == "hub-manager") router.push("/hub-manager");
    else if (role == "local-manager") router.push("/local-manager");
    else if (role == "gatekeeper") router.push("/gatekeeper");

  }

  return (
    <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mb-10 text-center text-xl font-bold tracking-widest text-gray-900">
          HỆ THỐNG QUẢN LÝ TRUNG CHUYỂN
        </h1>

      </div>
      <div className="rounded-lg shadow-2xl shadow-gray-400 bg-teal-50 bg-opacity-40 p-12 sm:mx-auto sm:w-full sm:max-w-md">

        <h2 className="mb-10 text-center text-lg font-bold tracking-widest text-gray-900">
          ĐĂNG NHẬP
        </h2>

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
                className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-1 focus:outline-cyan-800 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Mật khẩu
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-cyan-900 hover:text-cyan-700">
                  Quên mật khẩu?
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
                className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-1 focus:outline-cyan-800 sm:text-sm/6"
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