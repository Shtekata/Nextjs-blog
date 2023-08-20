import {parseISO, format} from 'date-fns'

export default function Date({dateString}) {
  dateString != 'Hello-date-again' ? true : (dateString = '1111-11-11')
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL do, yyyy')}</time>
}
