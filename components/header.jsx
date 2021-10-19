import Link from "next/link";
import Container from "./container";
import Menu from "./menu";

function Logo() {
    return <>زق</>
}

export default function Header() {
    return <header>
        <Container>
            <h1>
                <Link href='/'>
                    <a>
                        <Logo/>
                    </a>
                </Link>
            </h1>
            <Menu/>
        </Container>
    </header>;
}