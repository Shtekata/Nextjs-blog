import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import {change, home} from '..'
import utilStyles from '../../styles/utils.module.css'
import Alert from '../../components/Alert'
import useSWR from 'swr'

function Profile() {
  const fetcher = url => fetch(url).then(r => r.json())
  const {data, error} = useSWR('http://localhost:5000/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

export default function Post({allCommentsData}) {
  return (
    <Layout ch={change} ho={home}>
      <Head>
        <title>Third Post</title>
      </Head>
      <h1>Third Post</h1>
      <Alert type='ala_bala'>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>{Profile()}</section>
      </Alert>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  )
}
