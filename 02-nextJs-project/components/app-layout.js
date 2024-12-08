import Link from "next/link";
import Image from "next/image";

const AppLayout = () => {

    return (
        <header className="bg-gray-900 p-4  shadow-md ">
            <nav className="container mx-auto flex">
                <ul className="flex space-x-4 items-center">
                    <li>
                        <Link href="/">
                        <Image
                         width={150}
                         height={150}
                         src="" 
                         alt="Logo" 
                         priority
                         className="h-8 w-8 rounded-full hover:scale-110 transition-transform duration-300" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/dishes" className="text-white hover:text-gray-300 transition-colors duration-300">Browse Dishes</Link>
                    </li>
                    <li>
                        <Link href="/hub" className="text-white hover:text-gray-300 transition-colors duration-300">Cuisine Hub</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AppLayout;