import linkedin from "./img/linkedin.png"
import github from "./img/github.png"
import { ArrowUp,FileText} from 'lucide-react';
import {useEffect, useState} from "react";

export  const Cv = () => {
    const [color, setColor] = useState('bg-corNavbar')

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }


    useEffect(() => {
         localStorage.setItem('color', color)
    }, [color]);


    return (
        <div className={`pt-30 w-full h-full transition-colors duration-500 ${color}`}>
            <div className="flex gap-5 ml-60 mb-10">
                <div className="bg-corNavbar w-7 h-7 rounded-full cursor-pointer" onClick={()=> setColor('bg-corNavbar')}></div>
                <div className="bg-black w-7 h-7 rounded-full cursor-pointer" onClick={() => setColor('bg-black')}></div>
                <div className="bg-blue-950 w-7 h-7 rounded-full cursor-pointer" onClick={()=> setColor('bg-blue-950')}></div>
            </div>
            <div className="flex gap-6 md:gap-190">
                <h1 className="font-bold text-white text-3xl ml-5 md:ml-60 mb-20 md:text-4xl">Curriculum vitae</h1>
                <a
                    href="/CV-Valter.pdf"
                    download="CV - Valter.pdf"
                    className="
                    group relative flex items-center justify-center
                    w-24 h-12 rounded-xl font-roboto font-semibold text-md
                    bg-gray-200 border border-corFontNavbar text-gray-800
                    hover:bg-gray-400 transition-colors duration-300
                    overflow-hidden animate-bounce"
                >
                    <span
                        className="
                          transition-opacity duration-300
                          group-hover:opacity-0"
                    >
                        Baixar
                    </span>

                    {/* Ícone */}
                    <FileText
                        className="
                          absolute opacity-0 w-5 h-5
                          transition-all duration-300
                          group-hover:opacity-100
                        "
                    />
                </a>
            </div>
            <div className="ml-5 md:ml-60">
                <div className="flex gap-20 md:justify-between md:gap-0">
                    <h1 className="font-bold text-white text-md md:text-2xl  ">
                        Experiência<br/>
                        Profissional
                    </h1>
                    <div className="mr-62 flex flex-col">
                        <div>

                            <h1 className="font-bold text-white  mr-10 font-victor">2023</h1>
                            <p className="font-victor text-corFontNavbar">
                                Trabalhou como responsável por operar máquinas fotocopiadoras <br/>
                                na Smart.
                            </p>
                        </div>
                        <div className="mt-10">
                            <h1 className="font-bold text-white  font-victor">2024</h1>
                            <p className="font-victor text-corFontNavbar">
                                Trabalhou como Membro de Mesa de Voto nas eleições Presidências.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-20 w-full bg-white opacity-20 shadow-2xl"/>

            <div className=" flex gap-20 md:justify-between ml-5 md:ml-60 mt-20 md:gap-0">
                <h1 className="font-bold text-white text-md md:text-2xl">Educação</h1>
                <div className="mr-24 flex flex-col">
                    <div className="mt-4">
                        <h1 className="font-bold text-white  font-victor">2024</h1>
                        <p className="font-victor text-corFontNavbar">
                            Concluiu o curso de Montagem e Reparação de Computadores (TECNICOL)
                        </p>
                    </div>
                    <div className="mt-10">
                        <h1 className="font-bold text-white  font-victor">2025</h1>
                        <p className="font-victor text-corFontNavbar">
                            Concluiu o curso de Montagem e Administração de Redes de Computadores (TECNICOL)
                        </p>
                    </div>
                    <div className="mt-10">
                        <h1 className="font-bold text-white font-victor">2025</h1>
                        <p className="font-victor text-corFontNavbar">
                            Frequentando o 2º ano do curso de Informática Pós - Laboral (Universidade Eduardo <br/> Mondlane)
                        </p>
                    </div>
                </div>
            </div>

            <hr className="mt-20 w-full bg-white opacity-20 shadow-2xl"/>

            <div className="flex gap-10 md:justify-between ml-5 md:ml-60 mt-20 md:gap-0">
                <h1 className="font-bold text-corFontNavbar text-md md:text-2xl">
                    Skills <br/>
                    & Especializações
                </h1>
                <div className="mr-7 flex flex-col">
                    <div>
                        <p className="font-victor text-corFontNavbar">
                            Conhecimentos de Microsoft Office (Word, Excel, Power Point,), internet na óptica do <br/> utilizador
                        </p>
                    </div>
                    <div className="mt-10">
                        <p className="font-victor text-corFontNavbar">
                            Bons conhecimentos de rede de computadores (implementação, manuntenção e troubleshooting,<br/>
                            Windows XP, Windows 7 e Windows 10/11);
                        </p>
                    </div>
                    <div className="mt-10">
                        <p className="font-victor text-corFontNavbar">
                            Capacidade de manter informações confidencias e sensíveis de trabalho;
                        </p>
                    </div>
                </div>
            </div>

            <hr className="mt-20 w-full bg-white opacity-20 shadow-2xl"/>

            <div className="flex flex-col gap-6 mt-20 ml-5 md:mx-10 md:flex-row justify-between">
                <div>
                    <h1 className="font-bold text-white ">Telefone</h1>
                    <p className="text-corFontNavbar">(+258) 84 4101 647</p>
                </div>
                <div>
                    <h1 className="font-bold text-white ">Email</h1>
                    <p className="text-corFontNavbar">valterviola1402@gmail.com</p>
                </div>
                <div>
                    <h1 className="font-bold text-white mb-1 ">Me siga</h1>
                    <div className="flex">
                        <div className="mr-2">
                            <a href="https://www.linkedin.com/in/valter-viola-muriela-576b772a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt="linkedin" className="w-7 h-7 hover:scale-110 transition duration-200"/></a>
                        </div>
                        <div>
                            <a href="https://github.com/djiValter"><img src={github} alt="github" className="w-7 h-7 hover:scale-110 transition duration-200"/></a>
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <p className="text-corFontNavbar">
                        Política de Cookies<br/>
                        Política de Privacidade<br/>
                        © 2025 Por Valter Viola Muriela.
                    </p>
                </div>

                <button className="cursor-pointer hidden rounded-full w-13 h-13
                    bg-white mr-5 md:flex justify-center items-center
                    hover:bg-corBackground animate-float" onClick={scrollToTop}><ArrowUp /></button>
            </div>
        </div>
    )
}