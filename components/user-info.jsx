import Link from "next/link";

export default function UserInfo() {
    return <>
        <ul>
            <li>
                <Link href='register'>
                    <a>تسجيل</a>
                </Link>
            </li>
            <li>
                <Link href='login'>
                    <a>دخول</a>
                </Link>
            </li>
        </ul>
        <Link href="upload">
            <a>رفع</a>
        </Link>
        <div>
            <Link href="settings">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces"/>
            </Link>
        </div>
    </>
}