import Layout from "../components/layout";

export default function Register() {
    return (
        <Layout>
            <h2>تسجيل</h2>
            <form method="post" action="login">
                <label htmlFor="username">اسم المستخدم</label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="text" id="email" name="email"/>

                <label htmlFor="password">كلمة السر</label>
                <input type="password" id="password" name="password"/>

                <button type="submit">إرسال</button>
            </form>
        </Layout>
    )
}