import Layout from "../components/layout";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Search() {
    const router = useRouter()
    const {q} = router.query;
    return (
        <Layout>
            <h1>
                البحث عن <span>{q}</span>
            </h1>
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
        </Layout>
    )
}