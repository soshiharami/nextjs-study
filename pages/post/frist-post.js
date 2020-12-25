import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <h1>This is first Page</h1>
            <h2>
                <Link href={"/"}>
                    <a>back</a>
                </Link>
            </h2>
        </>
    )
}
