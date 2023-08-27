import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Alert from '../components/Alert'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'
import ActiveLink from '../components/ActiveLink'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {props: {allPostsData}}
}

export let home = true
let type = 'success'
export const change = change => {
  if (change == true) {
    home == true ? (home = false) : (home = true)
    type == 'success' ? (type = 'error') : (type = 'success')
  }
}

export default function Home({allPostsData}) {
  return (
    <>
      <Link href='' onClick={x => change(true)}>
        change state
      </Link>
      <br />
      <br />
      <Link href='/old-posts/first-post'>first-post</Link>
      <br />
      <Link href='/old-posts/second-post'>second-post</Link>
      <br />
      <Link href='/old-posts/third-post'>third-post</Link>
      <br />
      <Link href='/old-posts/fourth-post'>fourth-post</Link>
      <br />
      <br />
      <Link href='/js-form'>js-form</Link>
      <br />
      <Link href='/no-js-form'>no-js-form</Link>
      <br />
      <Link href='/posts/ssg-ssr'>ssg-ssr</Link>
      <br />
      <Link href='/posts/pre-rendering'>pre-rendering</Link>
      <br />
      <ActiveLink href='https://www.google.com' color='green'>
        ActiveLink-google.com
      </ActiveLink>
      <ActiveLink href='/'>ActiveLink-home</ActiveLink>
      <ActiveLink href='/page' color='blue'>
        ActiveLink-page
      </ActiveLink>
      <ActiveLink href='/page2' color='brown'>
        ActiveLink-page2
      </ActiveLink>
      <ActiveLink href='/one' color='violet'>
        ActiveLink-one
      </ActiveLink>
      <br />
      <Link href='/post'>Post</Link>
      <br />
      <Link href='/popState'>popState</Link>
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
                  {id}
                  <br />
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Alert>
      </Layout>
    </>
  )
}
