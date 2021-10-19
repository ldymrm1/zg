import Link from "next/link";
import UserInfo from "./user-info";

export default function Menu() {
    return <div>
        <form action="/search" method="get">
            <input name="q" placeholder="" type="text"/>
            <button>ابحث</button>
        </form>
        <UserInfo/>
    </div>
}