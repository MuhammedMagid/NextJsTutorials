"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";    
import style from "./app-layout.module.css"

const AppLayout = () => {
    const path = usePathname();

    return (
        <header className="bg-black p-4   text-white">
            <nav className="container mx-auto flex">
                <ul className="flex space-x-4 items-center  ">
                    <li className=""> 
                        <Link href="/" >
                        <Image
                         width={150}
                         height={150}
                         src="/logo.png" 
                         alt="Logo" 
                         priority
                         className="h-8 w-8 rounded-full hover:scale-110 transition-transform duration-300" />
                        </Link>
                    </li>

                    <li className={path.startsWith('/dishes') ? style.active:undefined}>
                        <Link href="/dishes">Browse Dishes</Link>
                    </li>

                    <li className={path.startsWith('/hub') ? style.active:undefined}>
                        <Link href="/hub" >Cuisine Hub</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AppLayout;