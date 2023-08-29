import Layout from '../../components/layout'
import {getAllPostNames, getPostData} from '../../lib/post'
import {change, home} from '..'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import ReadMore from '../../components/ReadMore'

export default function Post({post}) {
  return (
    <Layout ch={change} ho={home}>
      <Head>
        <title>{post ? post.title : 'Hello'}</title>
      </Head>
      <Link href='/post'>Back to Post</Link>
      <h2>
        <Link href='/old-posts/second-post'>Back to 'Second Post'</Link>
      </h2>
      <br />
      <ReadMore post={post} />
      <article>
        <h1 className={utilStyles.headingXl}>{post ? post.title : 'Hello-title'}</h1>
        <p>{post ? post.id : 'Hello-id'}</p>
        <div className={utilStyles.lightText}>
          {post ? post.date : 'Hello-date'}
          <p className={utilStyles.pmargin}>Posted at: </p>
          <Date dateString={post ? post.date : 'Hello-date-again'} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{__html: post ? post.contentHtml : <h3>Hello-contentHtml</h3>}} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // const paths = getAllPostPids()
  const paths = await getAllPostNames()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const post = await getPostData(params.pid)
  return {props: {post}}
}
