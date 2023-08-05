import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import {change, home} from '..'

export default function Post() {
  return (
    <Layout ch={change} ho={home}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <form action='/' method='post'>
        <label for='first'>First name:</label>
        <br />
        <input type='text' id='first' name='first' />
        <br />
        <label for='last'>Last name:</label>
        <br />
        <input type='text' id='last' name='last' />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      <form action='/' method='post'>
        <label for='roll'>Roll Number</label>
        <br />
        <input type='text' id='roll' name='roll' required minlength='10' maxlength='20' />
        <br />
        <label for='name'>Name:</label>
        <br />
        <input type='text' id='name' name='name' required />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  )
}
