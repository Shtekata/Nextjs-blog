import {useRouter} from 'next/router'

function ActiveLink({children, href, color}) {
  const colorLink = color ? color : 'black'
  const router = useRouter()
  const style = {
    marginLeft: 20,
    marginRight: 20,
    color: router.asPath === href ? 'red' : colorLink,
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
