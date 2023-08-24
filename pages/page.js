import {useRouter} from 'next/router'

export default function Page() {
  const router = useRouter()
  return (
    // <button type='button' onClick={() => router.push('/about')}>
    <button type='button' onClick={() => router.push('/posts/ssg-ssr')}>
      Click me
    </button>
  )
}
