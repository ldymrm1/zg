import Layout from "../components/layout";

export default function Settings() {
    return (
        <Layout>
            <h2>لإعدادات</h2>
            <h3>إعدادات الحساب</h3>
            <h4>اسم المستعار</h4>
            <form method="post">
                <input type="text" name="username"/>
                <button type="submit">إرسال</button>
            </form>
            <h4>كلمة السر</h4>
            <form method="post">
                <label for="current-password">كلمة السر الحالية</label>
                <input id="current-password" type="password" name="current-password"/>
                <label for="new-password">كلمة السر الجديدة</label>
                <input type="password" id="new-password" name="new-password"/>
                <button type="submit">إرسال</button>
            </form>
            <h4>البريد الإلكتروني</h4>
            <form method="post">
                <input type="text" name="email"/>
                <button type="submit">إرسال</button>
            </form>
        </Layout>
    )
}