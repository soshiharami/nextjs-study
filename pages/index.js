import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
      <Layout home>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico"/>
          </Head>

          <p className={utilStyles.headingMd}>
            れんちょんかわいいな
          </p>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Read <Link href="/post/frist-post"><a>this page!</a></Link>
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>

            <section className={utilStyles.headingMd}>…</section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                {allPostsData.map(({id, date, title}) => (

                    <li className={utilStyles.listItem} key={id}>
                      {title}
                      <Link href={`/post/${id}`}>
                        <a>
                          <br/>
                          {id}
                        </a>
                      </Link>
                      <br/>
                      {date}
                    </li>
                ))}
              </ul>
            </section>

          </main>

          <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
              <img src={"/favicon.ico"} alt="a Logo" className={styles.logo}/>
            </a>
          </footer>
        </div>
      </Layout>
  )
}
