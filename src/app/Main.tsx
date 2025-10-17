import {useState} from "react";
import {Inicio} from "./components/Inicio.tsx";
import {Cv} from "./components/Cv.tsx"
import {Projecto} from "./components/Projecto.tsx"
import {Menu} from "lucide-react";
import Logotipo from "../assets/Logotipo.png"
import '../css/tailwind.css'

export const Main = () => {
    const [activeTab, setActiveTab] = useState('inicio');
    const [open, setOpen] = useState(false);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'inicio':
                return <Inicio onChangeTab={handleTabChange} />
            case 'cv':
                return <Cv />
            case 'projecto':
                return <Projecto />
            default:
                return <Inicio onChangeTab={handleTabChange} />
        }
    }

    const handleOptionClick = () => {
        setOpen(false);
    }


    return (
        <div className=" bg-gray-100 flex flex-col w-full relative h-full">
            <nav className="fixed top-0 left-0 w-full z-50 bg-cortitulo py-3">
                <ul className="flex justify-between items-center px-10">
                    <li className="font-bold">
                        <button onClick={() => setActiveTab('inicio')} className="cursor-pointer flex">
                            <img src={Logotipo} alt="Logo" className="w-9 h-8 "/>
                            <h1 className="mt-1 text-white ">Valter Viola Muriela</h1>
                        </button>
                    </li>
                    <button onClick={() => setOpen (!open)} className="md:hidden">
                        <Menu className="w-10 h-10 text-white hover:text-gray-300"/>
                    </button>
                    <div className="hidden md:flex gap-5">
                        <li className="text-white text-lg opacity-95 hover:border-b-3 border-white transition-all"><button className="cursor-pointer" onClick={() => handleTabChange("cv")}>Currículo</button></li>
                        <li className="text-white text-lg opacity-95 hover:border-b-3 transition-all border-white"><button className="cursor-pointer" onClick={() => handleTabChange("projecto")}>Projectos</button></li>
                    </div>
                </ul>
            </nav>

            {open && (
                <div className="absolute top-18 left-74 flex flex-col space-y-3 sm:hidden">
                    <button onClick={handleOptionClick} className="text-white text-lg opacity-95 hover:border-b-3 transition-all border-white"> <a onClick={() => handleTabChange("cv")}>Currículo</a></button>
                    <button onClick={handleOptionClick} className="text-white text-lg opacity-95 hover:border-b-3 transition-all border-white"><a onClick={() => handleTabChange("projecto")}>Projectos</a></button>
                </div>
            )}

            <div className="bg-gray-100 w-full h-full">
                {renderContent()}
            </div>
        </div>
    )
}