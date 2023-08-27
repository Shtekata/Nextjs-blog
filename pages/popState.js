import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()

  useEffect(() => {
    router.beforePopState(({url, as, options}) => {
      if (as !== '/' && as !== '/other') {
        window.location.href = as
        return false
      }
      return true
    })
  }, [router])

  return (
    <>
      <p>Welcome to the page</p>
      <Link href='/'>Home</Link>
      <br />
      <Link href='/post'>Post</Link>
      <br />
      <Link href='/old-posts/fourth-post'>/old-posts/fourth-post</Link>
    </>
  )
}
