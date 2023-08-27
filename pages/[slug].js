import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'

export default function Page({mostData}) {
  const router = useRouter()
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <p>params.name: {mostData.name}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <br />
      <Link href='/one'>one</Link>
      <br />
      <Link href='/two'>two</Link>
      <br />
      <Link href='/three'>three</Link>
      <br />
      <Link href='/'>HOME</Link>
    </div>
  )
}

export function getStaticPaths() {
  const paths = [{params: {slug: 'one'}}, {params: {slug: 'two'}}, {params: {slug: 'three'}}]
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({params}) {
  const mostData = {name: params.slug}
  return {props: {mostData}}
}
