import Link from 'next/link'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Page({data}) {
  const router = useRouter()
  const [count, setCount] = useState(0)

  // useEffect(() => setCount(0), [router.query.slug])

  return (
    <div>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <p>params.name: {data.name}</p>
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
  const data = {name: params.slug}
  return {props: {data}}
}
