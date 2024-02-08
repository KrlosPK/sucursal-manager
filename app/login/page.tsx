'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import { useEffect } from 'react'
import { Button } from '@/components/atoms/Button'
import { Error } from '@/components/atoms/Error'

interface Inputs {
  username: string
  password: string
}

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
    if (username === 'admin@admin.com' && password === 'Admin123') {
      window.localStorage.setItem('isLoggedIn', 'true')

      window.location.href = '/'
    } else {
      alert('Invalid username or password')
    }
  }

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')

    if (isLoggedIn !== null) {
      window.location.href = '/'
    } else {
      window.localStorage.removeItem('isLoggedIn')
    }
  }, [])

  return (
    <form className="w-80 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your username
        </label>

        <input
          type="text"
          id="username"
          autoComplete="username"
          placeholder="email@gmail.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register('username', {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          })}
        />
        {errors.username?.type === 'required' && (
          <Error message="Username is required" />
        )}
        {errors.username?.type === 'pattern' && (
          <Error message="Username invalid" />
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>

        <input
          type="password"
          id="password"
          maxLength={20}
          autoComplete="current-password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register('password', {
            required: true,
            minLength: 4,
            maxLength: 19
          })}
        />
        {errors.password?.type === 'required' && (
          <Error message="Password is required" />
        )}
        {errors.password?.type === 'minLength' && (
          <Error message="Password length must be greater than 3 characters" />
        )}
        {errors.password?.type === 'maxLength' && (
          <Error message="Password length must be less than 20 characters" />
        )}
      </div>

      <Button text="SUBMIT" />
    </form>
  )
}
