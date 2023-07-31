import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import {change, home} from '..'
import {getSortedCommentsData} from '../../lib/comments'
import utilStyles from '../../styles/utils.module.css'
import Alert from '../../components/Alert'

export async function getServerSideProps() {
  const allCommentsData = getSortedCommentsData()
  return {props: {allCommentsData}}
}

export default function FirstPost({allCommentsData}) {
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
            </li>
          ))}
        </section>
      </Alert>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  )
}
