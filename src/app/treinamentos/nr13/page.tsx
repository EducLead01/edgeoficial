import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CheckCircle, Award, Users, Building2, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "NR-13 | Treinamentos | EDGE Engenharia",
  description:
    "Treinamentos e consultoria em NR-13 — Caldeiras, Vasos de Pressão e Tubulações. Cases reais, equipe especializada e certificação reconhecida.",
  openGraph: {
    title: "NR-13 | Treinamentos | EDGE Engenharia",
    description:
      "Treinamentos e consultoria em NR-13 — Caldeiras, Vasos de Pressão e Tubulações. Cases reais, equipe especializada e certificação reconhecida.",
    url: "https://edgeeng.com.br/treinamentos/nr13",
    siteName: "EDGE Engenharia",
    locale: "pt_BR",
    type: "website",
  },
};

const cases = [
  {
    client: "Indústria Alimentícia — Goiânia / GO",
    challenge:
      "Empresa com 12 vasos de pressão sem documentação técnica atualizada, sob risco de interdição pela fiscalização do Ministério do Trabalho.",
    solution:
      "Levantamento completo de dados, elaboração do Prontuário da Instalação, Registro de Segurança e treinamento da brigada interna de operação.",
    result: "100% da documentação regularizada em 45 dias. Zero notificações na vistoria seguinte.",
    icon: Building2,
  },
  {
    client: "Frigorífico — Anápolis / GO",
    challenge:
      "Operadores sem habilitação formal para caldeiras de 3ª categoria e ausência de PIS (Plano de Inspeção e Segurança).",
    solution:
      "Treinamento teórico-prático de 40h com simulações de emergência, elaboração do PIS e acompanhamento na primeira inspeção periódica.",
    result: "Equipe certificada e PIS aprovado pelo SRTE/GO. Operação regularizada.",
    icon: Users,
  },
  {
    client: "Petroquímica — Região Centro-Oeste",
    challenge:
      "Sistema de tubulações industriais sem prontuários, inspeções atrasadas e ausência de profissional habilitado (PH) interno.",
    solution:
      "Consultoria para enquadramento das tubulações conforme Anexo D da NR-13, contratação assistida de PH e treinamento da equipe de manutenção.",
    result: "Conformidade total obtida antes do prazo da autuação. Economia de R$ 280 mil em multas potenciais.",
    icon: Award,
  },
  {
    client: "Laticínio — Interior de Goiás",
    challenge:
      "Dois acidentes com pressurização nos últimos 3 anos, cultura de segurança frágil e falta de procedimentos documentados.",
    solution:
      "Diagnóstico de segurança, revisão de todos os procedimentos operacionais, treinamento comportamental e implantação de check-lists digitais.",
    result: "Zero acidentes nos 18 meses seguintes. Redução de 60% nas paradas não programadas.",
    icon: CheckCircle,
  },
];

const diferenciais = [
  {
    title: "Equipe com PH certificado",
    description: "Profissionais Habilitados (PH) pela norma, aptos a assinar documentos técnicos exigidos pelo MTE.",
  },
  {
    title: "Treinamento in loco",
    description: "Realizamos o treinamento diretamente na sua planta, com equipamentos reais da operação.",
  },
  {
    title: "Documentação completa",
    description: "Entregamos Prontuário da Instalação, Registro de Segurança, PIS e laudos técnicos assinados.",
  },
  {
    title: "Suporte pós-treinamento",
    description: "Acompanhamento durante a primeira inspeção periódica e suporte para dúvidas por 90 dias.",
  },
];

export default function NR13Page() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0A0E1A] pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Início</Link>
            <span>/</span>
            <Link href="/#treinamentos" className="hover:text-orange-400 transition-colors">Treinamentos</Link>
            <span>/</span>
            <span className="text-orange-400">NR-13</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Norma Regulamentadora 13
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight mb-6">
              Caldeiras, Vasos de Pressão{" "}
              <span className="text-orange-400">&amp; Tubulações</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              Regularize sua operação, capacite sua equipe e evite interdições. A EDGE Engenharia entrega treinamentos NR-13 com documentação técnica completa e cases comprovados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5562991605338?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+treinamento+NR-13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold uppercase text-sm px-8 py-4 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Falar com especialista
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase text-sm px-8 py-4 hover:border-orange-400 hover:text-orange-400 transition-colors"
              >
                Ver cases
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O que é NR-13 */}
      <section className="bg-[#0D1120] py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3 block">
                Entenda a norma
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight mb-6">
                O que exige a NR-13?
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                A NR-13 estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão, tubulações e tanques metálicos de armazenamento — equipamentos presentes em indústrias, laticínios, frigoríficos, petroquímicas e hospitais.
              </p>
              <p className="text-white/60 leading-relaxed">
                O descumprimento pode gerar <strong className="text-white">interdição imediata</strong>, multas de até <strong className="text-white">R$ 6.700 por infração</strong> e responsabilização criminal em caso de acidente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Prontuário da Instalação", desc: "Documentação histórica obrigatória de cada equipamento" },
                { label: "Registro de Segurança", desc: "Livro de ocorrências exigido pela fiscalização" },
                { label: "PIS", desc: "Plano de Inspeção e Segurança com periodicidade definida" },
                { label: "Profissional Habilitado", desc: "PH responsável técnico pela operação e inspeção" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 p-5">
                  <p className="text-orange-400 font-bold text-sm uppercase mb-2">{item.label}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="bg-[#0A0E1A] py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3 block">
              Resultados reais
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight">
              Cases de NR-13
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {cases.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.client}
                  className="border border-white/10 bg-white/3 p-8 hover:border-orange-500/40 transition-colors group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-10 h-10 bg-orange-500/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide leading-snug">{c.client}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Desafio</p>
                      <p className="text-white/60 text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Solução</p>
                      <p className="text-white/60 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Resultado</p>
                      <p className="text-white text-sm font-semibold leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-[#0D1120] py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3 block">
              Por que EDGE
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase">
              Nossa entrega vai além do treinamento
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d) => (
              <div key={d.title} className="border-t-2 border-orange-500 pt-6">
                <p className="text-white font-bold text-sm uppercase mb-3">{d.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight mb-4">
            Sua empresa está em conformidade com a NR-13?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Fale agora com um especialista EDGE e receba um diagnóstico gratuito da situação dos seus equipamentos.
          </p>
          <a
            href="https://wa.me/5562991605338?text=Ol%C3%A1%2C+quero+um+diagn%C3%B3stico+gratuito+de+NR-13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-orange-500 font-black uppercase text-sm px-10 py-5 hover:bg-orange-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Quero o diagnóstico gratuito
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
