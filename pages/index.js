import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Alert from '../components/Alert'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {props: {allPostsData}}
}

export let home = true
let type = 'success'
export const change = () => {
  home == true ? (home = false) : (home = true)
  type == 'success' ? (type = 'error') : (type = 'success')
}

export default function Home({allPostsData}) {
  return (
    <>
      <Link href='' onClick={x => change()}>
        home
      </Link>
      <br />
      <Link href='/posts/first-post'>first-post</Link>
      <br />
      <Link href='/posts/second-post'>second-post</Link>
      <Layout ho={home} ch={change}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Alert type={type}>
          <section className={utilStyles.headingMd}>
            <p>
              Hello, I'm Ghu. I'm a software enginer and a translator (English/Japanese). You can contact me on{' '}
              <a href=''>Twetter</a>.
            </p>
            <p>
              (This is a sample website - you'll be building a site like this on{' '}
              <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
            </p>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({id, date, title}) => (
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              ))}
            </ul>
          </section>
        </Alert>
      </Layout>
    </>
  )
}
