import Head from 'next/head'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>R2025</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          r2025
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {!auth?.user && <button onClick={e => auth.signinWithGitHub()}>Sign In</button>}
        <div>{auth?.user?.email}</div>
        {auth?.user && <button onClick={e => auth.signout()}>Sign Out</button>}
      </main>
    </div>
  )
}
