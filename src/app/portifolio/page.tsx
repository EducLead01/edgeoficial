import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  Wind,
  Sun,
  GraduationCap,
  Layers,
  Phone,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfólio | EDGE Engenharia",
  description:
    "Conheça o portfólio e o panorama completo da EDGE Engenharia — Climatização, Energia Solar, Treinamentos e Engenharia Modular.",
  openGraph: {
    title: "Portfólio | EDGE Engenharia",
    description:
      "Conheça o portfólio e o panorama completo da EDGE Engenharia — Climatização, Energia Solar, Treinamentos e Engenharia Modular.",
    url: "https://edgeeng.com.br/portifolio",
    siteName: "EDGE Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const areas = [
  {
    icon: Wind,
    title: "Climatização",
    desc: "Projetos e instalações de sistemas de ar-condicionado para indústrias, comércios e condomínios. Da especificação ao comissionamento.",
    href: "/#climatizacao",
  },
  {
    icon: Sun,
    title: "Energia Solar",
    desc: "Soluções fotovoltaicas on-grid e off-grid para redução de custo energético em médio e grande porte.",
    href: "/#energia-solar",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    desc: "Capacitação técnica em NRs, segurança do trabalho e operação de equipamentos industriais, com emissão de certificados.",
    href: "/#treinamentos",
  },
  {
    icon: Layers,
    title: "Engenharia Modular",
    desc: "Desenvolvimento de estruturas modulares e projetos sob medida para expansão industrial com menor prazo e custo.",
    href: "/#engenharia-modular",
  },
];

const numeros = [
  { valor: "+200", label: "Projetos entregues" },
  { valor: "+10", label: "Anos de mercado" },
  { valor: "+80", label: "Clientes ativos" },
  { valor: "5", label: "Estados atendidos" },
];

const projetos = [
  {
    area: "Climatização",
    titulo: "Sistema VRF — Shopping Center",
    local: "Goiânia / GO",
    ano: "2024",
    desc: "Projeto executivo e instalação de sistema VRF de 480 TR com 340 unidades internas, cobrindo 42.000 m² de área climatizada. Controle centralizado com BMS.",
  },
  {
    area: "Energia Solar",
    titulo: "Usina Fotovoltaica Industrial",
    local: "Anápolis / GO",
    ano: "2024",
    desc: "Implantação de sistema on-grid de 1,2 MWp para indústria química. Redução de 65% na conta de energia. ROI obtido em 4,2 anos.",
  },
  {
    area: "Treinamentos NR-13",
    titulo: "Capacitação em Vasos de Pressão",
    local: "Rio Verde / GO",
    ano: "2023",
    desc: "Treinamento de 48 operadores em caldeiras e vasos de pressão. Elaboração do PIS e regularização documental de 18 equipamentos junto ao SRTE/GO.",
  },
  {
    area: "Engenharia Modular",
    titulo: "Expansão de Planta Frigorífica",
    local: "Itumbiara / GO",
    ano: "2023",
    desc: "Projeto e execução de módulo de processamento de 800 m² com estrutura metálica, painéis isotérmicos e instalações prediais completas. Prazo: 90 dias.",
  },
  {
    area: "Climatização",
    titulo: "Retrofit HVAC — Hospital",
    local: "Goiânia / GO",
    ano: "2022",
    desc: "Substituição de sistema central por fan-coils de alta eficiência em ambiente crítico (UTI e centros cirúrgicos), com intervenção sem interrupção das operações.",
  },
  {
    area: "Energia Solar",
    titulo: "Geração Distribuída — Agronegócio",
    local: "Jataí / GO",
    ano: "2022",
    desc: "Sistema de 480 kWp para irrigação e processamento de grãos. Integração com gerador de backup e monitoramento remoto 24h.",
  },
];

const areaColors: Record<string, string> = {
  "Climatização": "text-sky-400 border-sky-400/30 bg-sky-400/10",
  "Energia Solar": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  "Treinamentos NR-13": "text-orange-400 border-orange-400/30 bg-orange-400/10",
  "Engenharia Modular": "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0A0E1A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-orange-400">Portfólio</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Panorama geral
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight mb-6">
              EDGE Engenharia —{" "}
              <span className="text-orange-400">quem somos</span>{" "}
              e o que entregamos
            </h1>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Há mais de uma década atuando no Centro-Oeste, a EDGE Engenharia combina excelência técnica e gestão ágil para entregar soluções completas em climatização, energia solar, treinamentos e engenharia modular.
            </p>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-orange-500 py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {numeros.map((n) => (
              <div key={n.label} className="text-center">
                <p className="text-5xl font-black text-white leading-none mb-2">{n.valor}</p>
                <p className="text-white/80 text-sm uppercase tracking-widest">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section className="bg-[#0D1120] py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3 block">
              O que fazemos
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase">
              Áreas de atuação
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.title}
                  href={a.href}
                  className="group border border-white/10 bg-white/3 p-8 hover:border-orange-500/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-500/15 flex items-center justify-center mb-6 group-hover:bg-orange-500/25 transition-colors">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-white font-black text-base uppercase mb-3">{a.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{a.desc}</p>
                  <span className="inline-flex items-center gap-1 text-orange-400 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                    Ver mais <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="bg-[#0A0E1A] py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3 block">
              Cases
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase">
              Projetos em destaque
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projetos.map((p) => (
              <div
                key={p.titulo}
                className="border border-white/10 bg-white/3 p-7 hover:border-white/20 transition-colors flex flex-col"
              >
                <span
                  className={`self-start text-xs font-bold uppercase tracking-widest px-3 py-1 border mb-5 ${areaColors[p.area] ?? "text-orange-400 border-orange-400/30 bg-orange-400/10"}`}
                >
                  {p.area}
                </span>

                <h3 className="text-white font-black text-base uppercase mb-4 leading-snug">
                  {p.titulo}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>

                <div className="flex items-center gap-4 text-white/30 text-xs border-t border-white/10 pt-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {p.local}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {p.ano}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D1120] py-20 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 block">
            Próximo passo
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight mb-4">
            Leve a EDGE para o seu projeto
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Fale com nossa equipe e descubra qual solução se encaixa melhor na realidade da sua empresa.
          </p>
          <a
            href="https://wa.me/5562991605338?text=Ol%C3%A1%2C+vi+o+portf%C3%B3lio+da+EDGE+e+gostaria+de+saber+mais"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-black uppercase text-sm px-10 py-5 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Falar com a EDGE
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
