import Layout from "../../components/layout";
import Link from "next/link";

export default function User() {
    return (
        <Layout>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces"/>
            <h2>Majid</h2>
            <p>عضو منذ يونيو 2016</p>
            <h3>الأعمال المفضلة</h3>
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