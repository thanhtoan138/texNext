
import { trace } from 'console';
import React, { useState, FormEvent } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [phone,setPhone] = useState<any>('');
  const [password,setPassword] = useState<string>('');
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts

    try {
    
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      // Handle response if necessary
      data?.map((u)=>{
         if(u.phone === phone && +u.password === +password){
              alert('ok to');
            }else{
              alert('failed  to');
            }
      })
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="phone"  onChange={(e)=>setPhone(e.target.value)}/>
      <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}