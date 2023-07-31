import styles from './alert.module.css'
import {clsx} from 'clsx'

export default function Alert({children, type}) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.ala_bala]: type === 'ala_bala',
      })}>
      {children}
    </div>
  )
}
