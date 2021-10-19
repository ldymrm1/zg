import Layout from "../components/layout";

export default function Upload() {
    return (
        <Layout>
            <h2>إضافة فصل</h2>
            <form>
                <label htmlFor="comic">اسم العمل</label>
                <input id="comic" name="comic" type="text"/>
                <label htmlFor="comic">الوصف</label>
                <input id="comic" name="comic" type="text"/>

                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label htmlFor="vehicle1"> I have a bike</label>

                <label htmlFor="release">الاصدار</label>
                <input type="file" name="release"/>
                <button type="submit">إرسال</button>
            </form>
        </Layout>
    )
}