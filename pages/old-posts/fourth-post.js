import {useCallback, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const handleSubmit = useCallback(e => {
    e.preventDefault()
    const data = {firstName: e.target.firstName.value, lastName: e.target.lastName.value}
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.ok) router.push('/dashboard')
        else return res.json()
      })
      .then(result => {
        if (result) alert(`Server response: ${result.data}`)
      })
  }, [])

  useEffect(() => {
    router.prefetch('/dashboard')
  }, [router])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <br />
        <input type='text' id='firstName' name='firstName' required />
        <br />
        <label htmlFor='lastName'>Last Name</label>
        <br />
        <input type='text' id='lastName' name='lastName' required />
        <br />
        <button type='submit'>Login</button>
      </form>
      <Link href='/'>Home</Link>
      <h3>
        <Link href='/popState'>popState</Link>
      </h3>
    </>
  )
}
