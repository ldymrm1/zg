import Header from "./header";
import Footer from "./footer";

export default function Layout({children}) {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-grow">{children}</div>
        <Footer/>
    </div>
}