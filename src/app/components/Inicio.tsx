import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import instagram from "./img/instagram.png";
import bgImage from "./img/fundo.png"
import Typewriter from "typewriter-effect";

type InicioProps = {
    onChangeTab: (tab: string) => void;
};

export const Inicio = ({onChangeTab}: InicioProps) => {
    return (
        <div className="flex-col w-full h-full" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className=" flex flex-col md:flex-row items-center gap-50 justify-center py-[90px]">
                <div className="flex">
                    <div className="bg-white md:w-6 h-6 rounded-full animate-ping opacity-5"></div>
                    <img src="/Foto.png" alt="foto" className="w-[350px] h-[100px] md:w-[450px] h-[400px] hover:scale-105 transition duration-200 delay-75 shadow-2xl animate-float"/>
                </div>
                <div className="-mt-30 mx-7 md:-mt-0">
                    <h1 className="text-[20px] md:text-2xl text-corFontNavbar mb-5 font-roboto">
                        Ola!
                    </h1>
                    <h2 className="font-bold text-2xl md:text-5xl text-corFontNavbar  mb-3 font-roboto">
                        <Typewriter
                            options = {{
                                strings: ["Um pouco sobre mim"],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                            }}
                        />
                    </h2>
                    <div className="mb-5">
                        <p className="text-[15px] md:text-md mb-2 font-victor text-corFontNavbar">Sou profissional de TI com paixão por resolver problemas através</p>
                        <p className="text-[15px] md:text-md mb-2 font-victor text-corFontNavbar">da tecnologia e otimizar processos com soluções inteligentes.</p>
                        <p className="text-[15px] md:text-md mb-2 font-victor text-corFontNavbar">Trabalho com desenvolvimento e suporte de sistemas, sempre buscando</p>
                        <p className="text-[15px] md:text-md mb-2 font-victor text-corFontNavbar">melhorar a experiência dos usuários e a performance das aplicações.</p>
                    </div>
                    <div className="flex gap-3 mx-10 md:mx-0">
                        <button className="w-30 h-10 bg-white rounded-xl hover:bg-gray-500 transition-all duration-300" onClick={() => onChangeTab("cv")}><a href="#">Currículo</a></button>
                        <button className="w-30 h-10 bg-white rounded-xl hover:bg-gray-500 transition-all duration-300" onClick={() => onChangeTab("projecto")}><a href="#">Projectos</a></button>
                    </div>
                </div>
            </div>

            <hr className="mt-10 mb-15 w-full bg-white opacity-20 shadow-2xl"/>

            <div className="px-7 grid grid-cols-1 w-full md:grid-cols-4 gap-6 md:px-20">
                <div>
                    <h1 className="font-bold text-white ">Telefone</h1>
                    <p className="text-corFontNavbar">(+258) 84 4101 647</p>
                </div>
                <div>
                    <h1 className="font-bold text-white ">Email</h1>
                    <p className="text-corFontNavbar">valterviola1402@gmail.com</p>
                </div>
                <div>
                    <h1 className="font-bold text-white mb-1">Me siga</h1>
                    <div className="flex flex-row gap-2">
                        <div className="">
                            <a href="https://www.linkedin.com/in/valter-viola-muriela-576b772a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <img src={linkedin} alt="linkedin" className="w-7 h-7 hover:scale-110 transition duration-200"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/djiValter">
                                <img src={github} alt="github" className="w-7 h-7 hover:scale-110 transition duration-200"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/djivalter?utm_source=qr&igsh=ZmY4MWdoZ3JiaDUy">
                                <img src={instagram} alt="instagram" className="w-7 h-7 hover:scale-110 transition duration-200"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pb-16 text-corFontNavbar">
                    <p className="">
                        Política de Cookies<br/>
                        Política de Privacidade<br/>
                        © 2025 Por Valter Viola Muriela.
                    </p>
                </div>
            </div>
        </div>
    )
}