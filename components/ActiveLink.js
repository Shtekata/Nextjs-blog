import {useRouter} from 'next/router'

function ActiveLink({children, href}) {
  const router = useRouter()
  const style = {
    marginLeft: 20,
    marginRight: 20,
    color: router.asPath === href ? 'red' : 'black',
  }
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
    // location = href
  }
  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
export default ActiveLink
