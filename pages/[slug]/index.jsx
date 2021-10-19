import Layout from "../../components/layout";
import Link from 'next/link'

export default function Comic() {
    return (
        <Layout>
            <article>
                <img
                    src="https://ccdn.lezhin.com/v2/comics/6019162930675712/images/tall.jpg?updated=1614584782188&width=840"/>
                <h2>Killing Stalking</h2>
                <button>إضافة مفضلة</button>
                <p>اكشن، زق، زب</p>
                <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                    أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                    أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
                    أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
                    نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
                    كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.</p>
                <section>
                    <h3>التعليقات</h3>
                    <ul>
                        <li>
                            <Link href="user/majid">
                                <a>Majid</a>
                            </Link>
                            <p>شكرًا لكم</p>
                        </li>
                    </ul>
                    <form>
                        <textarea placeholder="كتابة تعليق"/>
                        <button type="submit">إرسال</button>
                    </form>
                </section>
                <section>
                    <h3>الفصول</h3>
                    <ul>
                        <li>
                            <Link href="killing-stalking/release/1">
                                <a>الحلقة ١</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="killing-stalking/release/2">
                                <a>الحلقة ٢</a>
                            </Link>
                        </li>
                    </ul>
                </section>

            </article>
        </Layout>
    )
}