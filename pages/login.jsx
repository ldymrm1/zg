import Layout from "../components/layout";

export default function Login() {
    return (
        <Layout>
            <h2>دخول</h2>
            <form method="post" action="login">
                <label htmlFor="username">اسم المستخدم</label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="password">كلمة السر</label>
                <input type="password" id="password" name="password"/>

                <button type="submit">إرسال</button>
            </form>
        </Layout>
    )
}