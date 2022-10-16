import React, { FormEvent, useState } from 'react'
import { FormBody } from '../components/FormBody'
import { FormFooter } from '../components/FormFooter'
import { FormHeader } from '../components/FormHeader'
import axios from "axios"

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post("/sessions", {
      email: "galdino_mateus1000@outlook.com"
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <FormHeader />
      <FormBody handleSignIn={handleSignIn} isUserSignedIn={isUserSignedIn} />
      <FormFooter />
    </div>
  )
}