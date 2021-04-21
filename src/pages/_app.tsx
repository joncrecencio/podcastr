import styles from '../styles/app.module.scss'
import '../styles/global.scss'
import { Header } from '../components/Player'
import { Player } from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>

      <Player />
    </div>
  )
}

export default MyApp


