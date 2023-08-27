import Link from 'next/link'
import ReadMore from '../components/ReadMore'

export default () => (
  <>
    <h1>
      <Link href='/post/123_Ala-bala-nica'>123_Ala-bala-nica</Link>
      <ReadMore post={{id: '123_Ala-bala-nica'}} />
    </h1>
    <h1>
      <Link href='/post/456_Ala-bala-pica'>456_Ala-bala-pica</Link>
      <ReadMore post={{id: '456_Ala-bala-pica'}} />
    </h1>
    <h1>
      <Link href='/post/789_Ala-bala-cica'>789_Ala-bala-cica</Link>
      <ReadMore post={{id: '789_Ala-bala-cica'}} />
    </h1>
    <h3>
      <Link href='/'>Home</Link>
    </h3>
  </>
)
