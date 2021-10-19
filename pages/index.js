import Link from 'next/link'
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <article>
                <h2>كافة الأعمال</h2>
                <ul>
                    <li>
                        <Link href="killing-stalking">
                            <a>
                                <img
                                    src="https://ccdn.lezhin.com/v2/comics/6019162930675712/images/tall.jpg?updated=1614584782188&width=840"/>
                                <h3>Killing Stalking</h3>
                            </a>
                        </Link>
                    </li>
                </ul>
            </article>
            <article>
                <h2>الإصدارات الأخيرة</h2>
                <ul>
                    <li>
                        <Link href="Killing-Stalking/release/1">
                            <a>
                                <img
                                    src="https://ccdn.lezhin.com/v2/comics/6019162930675712/images/tall.jpg?updated=1614584782188&width=840"/>
                                <h3>Killing Stalking - 01</h3>
                                <p>منذ يومين</p>
                                <div>بواسطة<Link href="user/majid"><a>
                                    <img
                                        src="https://ccdn.lezhin.com/v2/comics/6019162930675712/images/tall.jpg?updated=1614584782188&width=840"/>
                                    ماجد
                                </a></Link></div>
                                <p>١٠٠ مشاهد</p>
                            </a>
                        </Link>
                    </li>
                </ul>
            </article>
            <aside>
                <h2>المساهمون</h2>
                <ul>
                    <li>
                        <Link href="user/767">
                            <a>
                                <img
                                    src="https://ccdn.lezhin.com/v2/comics/6019162930675712/images/tall.jpg?updated=1614584782188&width=840"/>
                                Majid
                            </a>
                        </Link>
                        <p>$100</p>
                    </li>
                </ul>
            </aside>
        </Layout>
    )
}
