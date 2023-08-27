import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import {change, home} from '..'
import {getSortedCommentsData} from '../../lib/comments'
import utilStyles from '../../styles/utils.module.css'
import Alert from '../../components/Alert'
import ReadMore from '../../components/ReadMore'
import {useRouter} from 'next/router'

export async function getServerSideProps(context) {
  const allCommentsData = await getSortedCommentsData()
  return {props: {allCommentsData}}
}

export default function Post({allCommentsData}) {
  const router = useRouter()
  return (
    <Layout ch={change} ho={home}>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <Alert type='ala_bala'>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {allCommentsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              <ReadMore post={{id}} />
            </li>
          ))}
        </section>
      </Alert>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
      <Link href='/Ala-bala-home'>
        <button
          type='button'
          onClick={e => {
            e.preventDefault()
            router.replace('/')
          }}>
          Click me to go to home
        </button>
      </Link>
    </Layout>
  )
}
