"use client"
import { usePathname } from "next/navigation";    
import style from "./app-layout.module.css"
import Link from "next/link";

const NavLink =({href, children})=>{
    const path = usePathname();
    return(
        <div className={path.startsWith(href) ? style.active:undefined}>
        <Link href={href} >
            {children}
        </Link>
        </div>

    )

}

export default NavLink;