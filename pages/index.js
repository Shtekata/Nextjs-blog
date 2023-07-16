import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

let home = true
const change = home => {
  home == true ? (home = false) : (home = true)
  return home
}

export default function Home() {
  return (
    <>
      <Link href='' onClick={x => (home = change(home))}>
        home
      </Link>
      <Layout ho={home} change>
        <Head>
          <title>{siteTitle}</title>
        </Head>
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
      </Layout>
    </>
  )
}
