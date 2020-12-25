import Link from "next/link";
import Head from 'next/head'


export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>This is first Page</h1>
            <h2>
                <Link href={"/"}>
                    <a>back</a>
                </Link>
            </h2>
        </>
    )
}
