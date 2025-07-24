import { useState } from "react";
import { RiMenuLine } from "@remixicon/react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/about" },
        { name: "Contacto", href: "/contact" },
        { name: "Inicio de Sesion", href: "/auth/login" },
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl">Kawrapp</h1>
                <button onClick={toggleMenu} className="text-white md:hidden">
                    <RiMenuLine />
                </button>
                <div className={`md:flex ${isOpen ? "hidden" : "hidden"}`}>
                    {links.map((link) => (
                        <a key={link.name} className="text-white px-4 py-2 hover:bg-gray-700 item" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} space-y-2 mt-2`}>
                {links.map((link) => (
                    <a key={link.name} className="bg-gray-500/20 hover:bg-gray-700 text-white block px-4 py-2 item" href={link.href}>
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
