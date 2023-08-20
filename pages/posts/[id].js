import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import {change, home} from '..'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
  return (
    <Layout ch={change} ho={home}>
      <Head>
        <title>{postData ? postData.title : 'Hello'}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData ? postData.title : 'Hello-title'}</h1>
        <p>{postData ? postData.id : 'Hello-id'}</p>
        <div className={utilStyles.lightText}>
          {postData ? postData.date : 'Hello-date'}
          <p className={utilStyles.pmargin}>Posted at: </p>
          <Date dateString={postData ? postData.date : 'Hello-date-again'} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{__html: postData ? postData.contentHtml : <h3>Hello-contentHtml</h3>}} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id)
  return {props: {postData}}
}
