
import React, { useState, FormEvent } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch(`http://localhost:8000/users`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      // Handle response if necessary
      const data = await response.json();
      if (data.phone === formData) {
        console.log('sai')
      } else {
        console.log('ok')
      }


      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="phone" />
      <input type="text" name="password" />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}