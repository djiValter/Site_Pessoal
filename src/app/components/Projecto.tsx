import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowUp } from "lucide-react";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import image1 from "./img/dashboard webapp login ui.jpg";
import image2 from "./img/Fintechdb Login.jpg";
import image3 from "./img/Health Dashboard.jpg";
import image4 from "./img/Login page template _ Premium PSD.jpg";
import image5 from "./img/Patient profile - Dashboard Medical web app.jpg";
import { useEffect, useRef } from "react";

const images = [image1, image2, image3, image4, image5];
const servicos = [
    {
        titulo: "Desenvolvimento Web",
        descricao: "Criação de sites modernos, responsivos e otimizados para todos os dispositivos..",
        icone: "💻",
    },
    {
        titulo: "UI/UX Design",
        descricao: "Criação de layouts funcionais e atraentes, focados na melhor experiência do usuário. " +
            "Protótipos em Figma e interfaces interativas com transições suaves e usabilidade aprimorada",
        icone: "🎨",
    },
    {
        titulo: "Sistemas Web",
        descricao: "Construção de sistemas personalizados conforme a necessidade do cliente. Dashboards, sistemas " +
            "de gestão e painéis administrativos com autenticação e banco de dados",
        icone: "⚙️",
    },
    {
        titulo: "Otimização SEO",
        descricao: "Melhoria da velocidade e posicionamento do site nos motores de busca. Sites rápidos, " +
            "bem ranqueados no Google e prontos para atrair mais visitantes",
        icone: "🚀",
    },
    {
        titulo: "Integrações",
        descricao: "Conexão do site com APIs e serviços externos. Automatizações com Firebase, WhatsApp API, " +
            "formulários inteligentes e envio de e-mails automáticos",
        icone: "🔌",
    },
    {
        titulo: "Hospedagem & Manutenção",
        descricao: "Configuração de domínio, deploy e suporte contínuo. Cuidado completo com o site após " +
            "o lançamento — atualizações, backup e monitoramento",
        icone: "☁️",
    },
];

export const Projecto = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const skills = [
        { nome: "HTML", porcentagem: 100 },
        { nome: "CSS, Tailwind & Bootstrap", porcentagem: 100 },
        { nome: "UI design in Figma", porcentagem: 100 },
        { nome: "React", porcentagem: 80 },
        { nome: "React Native", porcentagem: 70 },
        { nome: "Java", porcentagem: 50 },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const barra = (entry.target as HTMLElement).querySelector<HTMLElement>(
                            ".nivel-barra"
                        );
                        if (barra) {
                            const percent = barra.getAttribute("data-percent");
                            if (percent) barra.style.width = `${percent}%`;
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = containerRef.current?.querySelectorAll(".skill-item");
        sections?.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-corNavbar w-full h-full pt-25">
            <div className="flex flex-col gap-25 px-10 md:px-19 md:flex-row">
                <div className="flex flex-col gap-10">
                    <h1 className="text-cortituloDiv font-bold text-3xl">Habilidades</h1>
                    <div className="flex flex-col gap-3">
                        <p className="text-cortituloDiv text-1xl">
                            Sou desenvolvedor Full Stack com experiência em desenvolvimento web,
                        </p>
                        <p className="text-cortituloDiv text-1xl">
                            desde interfaces modernas e responsivas até arquiteturas back-end robustas
                        </p>
                        <p className="text-cortituloDiv text-1xl">
                            e seguras transformo ideias em experiências digitais completas do front-end
                        </p>
                        <p className="text-cortituloDiv text-1xl">
                            ao back-end, construo soluções que conectam.
                        </p>
                        <p className="text-cortituloDiv text-1xl">
                            Trabalho com paixão em todo o ciclo de desenvolvimento: concepção,
                        </p>
                        <p className="text-cortituloDiv text-1xl">
                            design, programação, testes e deploy.
                        </p>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="flex flex-col gap-4 text-white text-md font-roboto mt-19"
                >
                    {skills.map((skill, i) => (
                        <div key={i} className="skill-item flex flex-col gap-1">
                            <div className="flex flex-row justify-between text-cortituloDiv">
                                <h1>{skill.nome}</h1>
                                <p>{skill.porcentagem}%</p>
                            </div>

                            <div className="relative w-80 md:w-180 h-3 rounded-2xl bg-cortituloDiv/30 overflow-hidden">
                                <div
                                    className="nivel-barra absolute top-0 left-0 h-3 rounded-2xl bg-cortituloDiv shadow-xl transition-all duration-[2000ms] ease-out"
                                    style={{ width: "0%" }}
                                    data-percent={skill.porcentagem}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="mt-30 w-full bg-white opacity-15 shadow-2xl" />


            <div className="flex flex-col gap-5 px-10 md:px-19 mt-25">
                <h1 className="text-cortituloDiv font-bold text-3xl mb-10">Serviços</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mt-25">
                    {servicos.map((card, i) => (
                        <div
                            key={i}
                            className="w-full h-60 bg-corCard rounded-xl shadow-xl/50 p-5 flex flex-col gap-4 justify-center items-center hover:scale-110 transition duration-700"
                        >
                            <div className="text-2xl">{card.icone}</div>
                            <div className="flex flex-col gap-3 items-center">
                                <h3 className="font-bold text-xl">{card.titulo}</h3>
                                <p className="text-sm text-white opacity-90">{card.descricao}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-col gap-20 px-2 md:px-19 mt-45">
                <h1 className="text-cortituloDiv font-bold text-3xl px-9 md:px-0">Projectos</h1>
                <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        speed={4000}
                        slidesPerView={3}
                        spaceBetween={20}
                        grabCursor={true}
                    >
                        {images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={src}
                                    alt={`slide-${i}`}
                                    className="rounded-2xl shadow-lg w-full h-60 md:h-64 object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            <div className="flex flex-col justify-center mb-20 px-10 md:px-19 mt-50">
                <h1 className="font-bold text-cortituloDiv text-3xl mb-5">Contacte-me</h1>
                <form className="flex flex-col gap-5 w-80 h-50">
                    <input
                        type="text"
                        className="w-full h-10 border-2 border-corCard bg-white px-5 rounded-md hover:bg-corBackground"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="w-full h-10 border-2 border-corCard px-5 bg-white rounded-md hover:bg-corBackground"
                        placeholder="Senha"
                    />
                    <button className="font-bol text-1xl w-40 h-10 border-2 border-corCard bg-white rounded-md hover:bg-corBackground">
                        Enviar
                    </button>
                </form>
            </div>

            <hr className="mb-15 w-full bg-white opacity-20 shadow-2xl" />


            <div className="bg-corNavbar px-10 gap-6 md:px-22 grid grid-cols-1 md:grid-cols-5 md:gap-35">
                <div>
                    <h1 className="font-bold text-white">Telefone</h1>
                    <p className="text-corFontNavbar">(+258) 84 4101 647</p>
                </div>
                <div>
                    <h1 className="font-bold text-white">Email</h1>
                    <p className="text-corFontNavbar">valterviola1402@gmail.com</p>
                </div>
                <div>
                    <h1 className="font-bold text-white">Me siga</h1>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/valter-viola-muriela-576b772a6">
                            <img src={linkedin} alt="linkedin" className="w-7 h-7 hover:scale-110 transition duration-200" />
                        </a>
                        <a href="https://github.com/djiValter">
                            <img src={github} alt="github" className="w-7 h-7 hover:scale-110 transition duration-200" />
                        </a>
                    </div>
                </div>
                <div className="pb-16 text-corFontNavbar">
                    <p className="text-corFontNavbar">
                        Política de Cookies
                        <br />
                        Política de Privacidade
                        <br />
                        © 2025 Por Valter Viola Muriela.
                    </p>
                </div>
                <button
                    className="cursor-pointer hidden rounded-full w-13 h-13 bg-white md:flex justify-center items-center hover:bg-corBackground animate-float"
                    onClick={scrollToTop}
                >
                    <ArrowUp />
                </button>
            </div>
        </div>
    );
};
