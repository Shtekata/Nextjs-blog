import '../styles/global.css'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function App({Component, pageProps}) {
  const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url, {shallow}) =>
  //     console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`)

  //   router.events.on('routeChangeStart', handleRouteChange)

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [router])

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) console.log(`Route to ${url} was cancelled`)
    }
    router.events.on('routeChangeError', handleRouteChangeError)
    return () => router.events.off('routeChangeError', handleRouteChangeError)
  }, [router])

  // return <Component key={router.asPath} {...pageProps} />
  return <Component {...pageProps} />
}
