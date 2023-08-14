import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import {change, home} from '..'
import React, {useState, useEffect} from 'react'

export default function Post() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  useEffect(() => {
    document.title = 'You clicked ' + count + ' times'
  })

  function validateFormWithJS(event) {
    event.preventDefault()
    if (!name && rollNumber.length < 3) {
      alert('Please enter your name and roll number should be at least 3 digits long.')
      return
    }
    if (!name) {
      alert('Please enter your name.')
      return
    }
    if (rollNumber.length < 3) {
      alert('Roll number should be at least 3 digits long.')
      return
    }
    setName('')
    setRollNumber('')
  }

  return (
    <Layout ch={change} ho={home}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <form action='/' method='post'>
        <label htmlFor='first'>First name:</label>
        <br />
        <input type='text' id='first' name='first' />
        <br />
        <label htmlFor='last'>Last name:</label>
        <br />
        <input type='text' id='last' name='last' />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      <form action='/' method='post'>
        <label htmlFor='roll'>Roll Number</label>
        <br />
        <input type='text' id='roll' name='roll' required minLength='10' maxLength='20' />
        <br />
        <label htmlFor='name'>Name:</label>
        <br />
        <input type='text' id='name' name='name' required />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      <form onSubmit={validateFormWithJS}>
        <label htmlFor='rollNumber'>Roll Number:</label>
        <br />
        <input
          onChange={event => setRollNumber(event.target.value)}
          value={rollNumber}
          type='text'
          name='rollNumber'
          id='rollNumber'
        />
        <br />
        <label htmlFor='name2'>Name:</label>
        <br />
        <input onChange={event => setName(event.target.value)} value={name} type='text' name='name2' id='name2' />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  )
}
