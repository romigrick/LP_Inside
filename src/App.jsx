import React, { useState, useEffect, useRef } from 'react'
import logoWhite from './assets/logo.png'
import logoBlack from './assets/logo-black.png'
import logoIcon from './assets/logo-icon.png'
import mockupImg from './assets/mockup.png'
import bgTexture from './assets/bg.png'
import desktopPreview from './assets/img.png'
import bg from './assets/Group 2.png'

import imex from './assets/imex.png'
import bf from './assets/bf.png'
import patoeste from './assets/patoeste.png'
import uplay from './assets/uplay.png'

import calendar from './assets/CalendarSlash.svg'
import camera from './assets/DeviceMobileCamera.svg'
import gps from './assets/GpsSlash.svg'
import sidebar from './assets/Sidebar.svg'


/* ─── Layout ──────────────────────────────────────────────────── */
const MAX_W = '1280px'
const CONTAINER = { maxWidth: MAX_W, margin: '0 auto', width: '100%', padding: '0 48px' }

/* ─── Hooks ───────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Shared button ───────────────────────────────────────────── */
function Btn({ children, variant = 'dark', href = '#contato', full = false, style: ex = {} }) {
  const [h, setH] = useState(false)
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    padding: '14px 30px', borderRadius: 30,
    fontSize: 14, fontWeight: 700, letterSpacing: '0.02em',
    cursor: 'pointer', fontFamily: 'var(--font-body)', textDecoration: 'none',
    transition: 'all 0.22s ease',
    transform: h ? 'translateY(-2px)' : 'none',
    width: full ? '100%' : 'auto',
    ...ex,
  }
  const v = {
    dark: { background: h ? '#222' : '#0a0a0a', color: '#fff', border: 'none', boxShadow: h ? '0 8px 28px rgba(0,0,0,0.3)' : 'none' },
    white: { background: h ? '#ececec' : '#fff', color: '#000', border: 'none', boxShadow: h ? '0 8px 28px rgba(255,255,255,0.15)' : 'none' },
    blue: { background: h ? '#2a4ae8' : '#3b5bfc', color: '#fff', border: 'none', boxShadow: h ? '0 8px 28px rgba(59,91,252,0.45)' : 'none' },
    outline: { background: h ? '#fff' : 'transparent', color: h ? '#000' : '#fff', border: '1.5px solid rgba(255,255,255,0.65)' },
  }
  return <a href={href} style={{ ...base, ...v[variant] }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>
}

/* ─── Navbar ─────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 70,
      background: scrolled ? 'rgba(10,10,10,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.35s ease',
    }}>
      <div style={{ ...CONTAINER, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top"><img src={logoWhite} alt="Inside Studio" style={{ height: 28 }} /></a>
        <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
          {links.map(({ label, href }) => <NavLink key={label} label={label} href={href} />)}
          <Btn variant="outline" href="#contato">Começar projeto</Btn>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ label, href }) {
  const [h, setH] = useState(false)
  return (
    <a href={href} style={{ fontSize: 14, color: h ? '#fff' : 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
  )
}

/* ─── 1. HERO — proposta de valor clara: quem, o quê, resultado ─ */
function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh',
      background: `url(${bgTexture}) center/cover no-repeat, #0a0a0a`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 55% 50% at 72% 55%, rgba(59,91,252,0.1) 0%, transparent 65%)' }} />

      <div style={{
        ...CONTAINER,
        minHeight: '100vh',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', gap: 48,
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ animation: 'fadeInUp 0.9s ease both' }}>

          {/* Headline: quem atende + o quê faz + resultado concreto */}
          <img src={logoWhite} alt="Inside Studio" style={{ height: 48, marginBottom: 16 }} />
          <h1 style={{ fontSize: 'clamp(34px, 3.8vw, 42px)', fontWeight: 400, lineHeight: 1.12, color: '#fff', marginBottom: 20 }}>
            Sites de alta performance<br />
            para marcas que querem<br />
            <strong style={{ fontWeight: 900 }}>vender mais no digital.</strong>
          </h1>

          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 380, marginBottom: 16 }}>
            Transformamos a presença digital da sua empresa em um ativo que atrai, convence e converte — todos os dias.
          </p>

          {/* Micro-prova social junto ao CTA */}
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 32, letterSpacing: '0.01em' }}>
            ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta em até 24h &nbsp;·&nbsp; ✓ Proposta gratuita
          </p>

          <Btn variant="white" href="#contato">
            Quero minha proposta gratuita →
          </Btn>
        </div>


      </div>

      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,0.18)', fontSize: 10, letterSpacing: '0.18em',
      }}>
        <span>SCROLL</span>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)' }} />
      </div>
    </section>
  )
}

/* ─── 2. DOR ─────────────────────────────────────────────────── */
function PainSection() {
  const [ref, visible] = useInView()
  const cards = [
    { img: calendar, title: 'Design que envelhece', desc: 'Um site desatualizado sinaliza que sua empresa também está. A primeira impressão é a que fica.' },
    { img: gps, title: 'Navegação que confunde', desc: 'Se o visitante não sabe o que fazer em 8 segundos, ele vai para o concorrente.' },
    { img: sidebar, title: 'Site sem estratégia', desc: 'Página bonita sem intenção de conversão é catálogo caro — não máquina de vendas.' },
    { img: camera, title: 'Ignorando o mobile', desc: 'Mais de 80% do seu público está no celular. Um site quebrado ali custa caro todo dia.' },
  ]

  return (
    <section id="dores" style={{ background: '#f5f5f5', padding: '96px 0', color: '#111' }} ref={ref}>
      <div style={CONTAINER}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
          <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 400, marginBottom: 14 }}>
            Por que seu site atual <strong style={{ fontWeight: 800 }}>está custando vendas?</strong>
          </h2>
          <p style={{ fontSize: 15, color: '#666', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            Esses são os 4 erros que fazem empresas como a sua perderem clientes todos os dias para concorrentes com presença digital mais forte.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 52 }}>
          {cards.map((card, i) => <PainCard key={i} card={card} delay={i * 0.1} visible={visible} />)}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Btn variant="blue" href="#contato">Quero resolver isso agora</Btn>
        </div>
      </div>
    </section>
  )
}

function PainCard({ card, delay, visible }) {
  const [h, setH] = useState(false)
  
  return (
    <div style={{
      background: '#fff', borderRadius: 14, padding: '28px 22px',
      boxShadow: h ? '0 16px 40px rgba(0,0,0,0.11)' : '0 2px 12px rgba(0,0,0,0.05)',
      border: `1px solid ${h ? 'rgba(59,91,252,0.2)' : 'rgba(0,0,0,0.04)'}`,
      transform: `translateY(${h ? -5 : visible ? 0 : 24}px)`,
      opacity: visible ? 1 : 0,
      transition: `all 0.25s ease, opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}
      onMouseEnter={() => setH(true)} 
      onMouseLeave={() => setH(false)}
    >
      {/* CORREÇÃO: Usando a tag img para renderizar o SVG e aumentar o tamanho */}
      <div style={{ marginBottom: 16 }}>
        <img 
          src={card.img} 
          alt={card.title} 
          style={{ 
            width: 32,      // Aumente aqui o tamanho (ex: 42, 48, 54)
            height: 'auto', 
            display: 'block' 
          }} 
        />
      </div>

      <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 8 }}>{card.title}</h3>
      <p style={{ fontSize: 13, color: '#777', lineHeight: 1.65 }}>{card.desc}</p>
    </div>
  )
}

/* ─── 3. PROCESSO — "como resolvemos" vem antes dos serviços ──── */
function ProcessSection() {
  const [ref, visible] = useInView()
  const steps = [
    { num: '01', title: 'Imersão', desc: 'Entendemos seu negócio, público e concorrência. Sem isso, nenhum pixel é desenhado.' },
    { num: '02', title: 'Estratégia', desc: 'Mapeamos a jornada de conversão ideal e definimos a arquitetura do site.' },
    { num: '03', title: 'Prototipagem', desc: 'Você aprova cada tela antes do desenvolvimento. Sem surpresas.' },
    { num: '04', title: 'Desenvolvimento', desc: 'Código limpo, rápido e responsivo. Entrega com treinamento incluso.' },
  ]

  return (
    <section id="processo" style={{ background: '#0f0f0f', padding: '96px 0', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.05)' }} ref={ref}>
      <div style={CONTAINER}>
        <div style={{ textAlign: 'center', marginBottom: 64, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.28)', marginBottom: 14, textTransform: 'uppercase' }}>Como trabalhamos</p>
          <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 400 }}>
            Um processo desenhado para <strong style={{ fontWeight: 800 }}>garantir seu resultado.</strong>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', position: 'relative' }}>
          {/* Linha conectora */}
          <div style={{ position: 'absolute', top: 27, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(to right, transparent, rgba(59,91,252,0.5), transparent)', zIndex: 0 }} />
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              position: 'absolute', top: 20, left: `${i * 25}%`, transform: 'translateX(-50%)',
              width: 14, height: 14, borderRadius: '50%',
              background: '#0f0f0f', border: '1px solid rgba(59,91,252,0.5)', zIndex: 1,
            }} />
          ))}

          {steps.map((step, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '0 24px', position: 'relative', zIndex: 2,
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)',
              transition: `all 0.6s ease ${i * 0.12}s`,
            }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%',
                border: '1px solid rgba(59,91,252,0.45)', background: '#0f0f0f',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <span style={{ fontSize: 24, fontWeight: 900, fontFamily: 'var(--font-display)', color: 'transparent', WebkitTextStroke: '1px rgba(59,91,252,0.9)' }}>{step.num}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 4. SERVIÇOS ────────────────────────────────────────────── */
function ServicesSection() {
  const [openItem, setOpenItem] = useState(0)
  const [ref, visible] = useInView()
  const services = [
    { title: 'UX/UI Design', desc: 'Interfaces bonitas e estratégicas que conduzem o visitante naturalmente até a conversão.' },
    { title: 'Performance', desc: 'Sites carregando em menos de 2s, com Core Web Vitals no verde e SEO técnico impecável.' },
    { title: 'Copywriting', desc: 'Cada palavra escolhida para comunicar valor, quebrar objeções e gerar desejo.' },
    { title: 'Escalabilidade', desc: 'Arquitetura que cresce com você — sem reescrever tudo quando o negócio escalar.' },
  ]

  return (
    <section id="servicos" style={{ background: '#ebebeb', padding: '96px 0', color: '#111' }} ref={ref}>
      <div style={CONTAINER}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 400, textAlign: 'center', marginBottom: 64, lineHeight: 1.2 }}>
            Tudo que seu site precisa para <strong style={{ fontWeight: 800 }}>converter mais.</strong>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <div>
            {services.map((item, i) => (
              <AccordionItem key={i} item={item} isOpen={openItem === i} onToggle={() => setOpenItem(openItem === i ? -1 : i)} />
            ))}
          </div>
          <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.18)', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}>
            <img src={desktopPreview} alt="Projeto Inside Studio" style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div onClick={onToggle} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '22px 0', cursor: 'pointer' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 3, height: 20, borderRadius: 2, flexShrink: 0, background: isOpen ? '#3b5bfc' : '#ccc', transition: 'background 0.25s' }} />
          <span style={{ fontSize: 17, fontWeight: isOpen ? 700 : 500, color: isOpen ? '#3b5bfc' : '#111', transition: 'color 0.25s' }}>{item.title}</span>
        </div>
        <span style={{ fontSize: 18, color: '#aaa', display: 'inline-block', transition: 'transform 0.25s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>⌄</span>
      </div>
      {isOpen && <p style={{ fontSize: 14, color: '#555', lineHeight: 1.72, marginTop: 14, paddingLeft: 17, animation: 'fadeInUp 0.28s ease' }}>{item.desc}</p>}
    </div>
  )
}

/* ─── 5. PORTFÓLIO + PROVA SOCIAL ────────────────────────────── */
function PortfolioSection() {
  const [ref, visible] = useInView()
  const stats = [
    { value: '5+', label: 'Anos de experiência' },
    { value: '150+', label: 'Projetos entregues' },
    { value: '100%', label: 'Clientes satisfeitos' },
  ]
  const testimonials = [
    { text: 'Triplicamos os leads qualificados em 60 dias após o lançamento. O ROI foi absurdo.', name: 'Marcos Andrade', role: 'CEO · Andrade Energia' },
    { text: 'Finalmente um site que parece nossa empresa de verdade. Nossos clientes perceberam na hora.', name: 'Camila Rocha', role: 'Diretora · Studio CR' },
    { text: 'A Inside entregou no prazo, dentro do orçamento e acima das expectativas. Raro hoje.', name: 'Rafael Torres', role: 'Fundador · Patoeste' },
  ]

  return (
    <section id="portfolio" style={{
      background: `url(${bg}) center/cover no-repeat, #0a0a0a`,
      padding: '96px 0', color: '#fff', position: 'relative', overflow: 'hidden',
    }} ref={ref}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 45% 60% at 15% 55%, rgba(59,91,252,0.07) 0%, transparent 70%)' }} />

      <div style={{ ...CONTAINER, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.28)', marginBottom: 14, textTransform: 'uppercase' }}>Portfólio selecionado</p>
          <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, lineHeight: 1.18 }}>
            Onde a estética <strong style={{ fontWeight: 800 }}>encontra o resultado.</strong>
          </h2>
        </div>

        {/* Portfolio grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 72 }}>
          {projetos.map((proj, i) => (
            <PortfolioCard
              key={i}
              image={proj.img} // Passando a imagem única de cada projeto
              imgPos={proj.pos}
              index={i}
              visible={visible}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 80, marginBottom: 80,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '40px 0',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', opacity: visible ? 1 : 0, transition: `opacity 0.6s ease ${0.2 + i * 0.1}s` }}>
              <div style={{ fontSize: 36, fontWeight: 900, fontFamily: 'var(--font-display)', color: '#fff', marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials — prova social real */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ textAlign: 'center', fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.28)', marginBottom: 36, textTransform: 'uppercase' }}>O que nossos clientes dizem</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {testimonials.map((t, i) => <TestimonialCard key={i} t={t} visible={visible} delay={i * 0.12} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

const projetos = [
  { img: bf, pos: 0 },
  { img: patoeste, pos: 25 },
  { img: uplay, pos: 50 },
  { img: imex, pos: 75 },
];

// Adicione 'image' aqui nas props
function PortfolioCard({ image, imgPos, index, visible, delay }) {
  const [h, setH] = useState(false)
  return (
    <div style={{
      // ... seus estilos de container (mantidos iguais)
    }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      <img
        src={image} // <--- Agora ele usa a imagem que vem do map
        alt={`Projeto ${index + 1}`}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: `center ${imgPos}%`,
          opacity: h ? 0.9 : 0.65, transition: 'opacity 0.25s',
        }}
      />
    </div>
  )
}

function TestimonialCard({ t, visible, delay }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)', borderRadius: 14,
      padding: '28px 26px',
      border: '1px solid rgba(255,255,255,0.07)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(20px)',
      transition: `all 0.6s ease ${delay}s`,
    }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
        {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: '#3b5bfc', fontSize: 14 }}>★</span>)}
      </div>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Avatar placeholder */}
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b5bfc, #6b8fff)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 15, fontWeight: 700, color: '#fff', flexShrink: 0,
        }}>{t.name[0]}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.name}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

/* ─── EmailJS config ─────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'service_phqmznv'
const EMAILJS_TEMPLATE_ID = 'template_a26d45n'
const EMAILJS_REPLY_ID = 'template_426xx6q'
const EMAILJS_PUBLIC_KEY = '0sABaEPF59PqSVtsU'
const WA_NUMBER = '5542998141401'

/* ─── WhatsApp Popup ─────────────────────────────────────────── */
function WhatsAppPopup({ name, challenge, onClose }) {
  const [h, setH] = useState(false)
  const challengeLabels = {
    redesign: 'redesenhar meu site',
    new: 'criar um site do zero',
    convert: 'melhorar a conversão do meu site',
    mobile: 'corrigir meu site no mobile',
  }
  const msg = encodeURIComponent(
    `Olá! Sou o(a) ${name} e acabei de preencher o formulário do site. Meu interesse é ${challengeLabels[challenge] || challenge}. Pode me ajudar?`
  )
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      animation: 'fadeIn 0.25s ease',
    }}
      onClick={onClose}
    >
      <div style={{
        background: '#fff', borderRadius: 24,
        padding: '48px 44px',
        maxWidth: 460, width: '100%',
        textAlign: 'center',
        boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
        animation: 'fadeInUp 0.3s ease',
        position: 'relative',
      }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 18,
          background: 'none', border: 'none', fontSize: 22,
          color: '#bbb', cursor: 'pointer', lineHeight: 1,
          transition: 'color 0.15s',
        }}
          onMouseEnter={e => e.target.style.color = '#555'}
          onMouseLeave={e => e.target.style.color = '#bbb'}
        >✕</button>

        {/* WhatsApp icon */}
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 10 }}>
          Proposta enviada! 🎉
        </h3>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 28 }}>
          Seu e-mail já está a caminho. Que tal acelerar ainda mais e falar direto com a nossa equipe agora pelo WhatsApp?
        </p>

        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            padding: '15px 28px',
            background: h ? '#1da855' : '#25d366',
            border: 'none', borderRadius: 30,
            color: '#fff', fontSize: 15, fontWeight: 700,
            textDecoration: 'none',
            transition: 'all 0.2s',
            transform: h ? 'translateY(-2px)' : 'none',
            boxShadow: h ? '0 8px 24px rgba(37,211,102,0.4)' : 'none',
            marginBottom: 14,
          }}
          onMouseEnter={() => setH(true)}
          onMouseLeave={() => setH(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp agora
        </a>

        <button onClick={onClose} style={{
          background: 'none', border: 'none', fontSize: 13,
          color: '#aaa', cursor: 'pointer', fontFamily: 'var(--font-body)',
          transition: 'color 0.15s',
        }}
          onMouseEnter={e => e.target.style.color = '#666'}
          onMouseLeave={e => e.target.style.color = '#aaa'}
        >
          Prefiro aguardar o e-mail
        </button>
      </div>
    </div>
  )
}

/* ─── 6. CONTATO ─────────────────────────────────────────────── */
function ContactSection() {
  const [ref, visible] = useInView()
  const [challenge, setChallenge] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const challenges = [
    { id: 'redesign', label: '🎨 Quero redesenhar meu site' },
    { id: 'new', label: '🚀 Preciso de um site do zero' },
    { id: 'convert', label: '📈 Meu site não converte' },
    { id: 'mobile', label: '📱 Meu site quebra no celular' },
  ]

  const challengeLabels = {
    redesign: 'Redesign de site',
    new: 'Site do zero',
    convert: 'Melhorar conversão',
    mobile: 'Problemas no mobile',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!challenge || !name || !email || !phone) return
    setLoading(true)
    setError(null)

    try {
      // Inicializa EmailJS
      window.emailjs.init(EMAILJS_PUBLIC_KEY)

      const templateParams = {
        work_type: challengeLabels[challenge],
        from_name: name,
        email: email,
        subject: `Nova proposta — ${challengeLabels[challenge]}`,
        phone: phone,
        reply_to: email,
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      setShowPopup(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {showPopup && (
        <WhatsAppPopup
          name={name}
          challenge={challenge}
          onClose={() => setShowPopup(false)}
        />
      )}

      <section id="contato" style={{ background: '#f5f5f5', padding: '96px 0', color: '#111' }} ref={ref}>
        <div style={CONTAINER}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

            {/* Left */}



            <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
              <img src={logoIcon} alt="Inside Studio" style={{
                width: 130, height: 130,
                filter: 'brightness(0)', opacity: 0.75,
                animation: 'float 25s ease-in-out infinite',
              }} />
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 44px)', fontWeight: 400, lineHeight: 1.12, marginBottom: 18 }}>
                Seu próximo site pode estar<br />
                <strong style={{ fontWeight: 900 }}>no ar em 30 dias.</strong>
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.72, maxWidth: 380, marginBottom: 36 }}>
                Preencha ao lado e receba uma proposta personalizada gratuitamente. Sem compromisso.
              </p>

              <div style={{
                background: '#fff', borderRadius: 14, padding: '20px 22px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginBottom: 24,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>🛡️</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 4 }}>Sem cobranças escondidas</p>
                    <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>
                      Tudo será detalhado do início ao fim. Sem letras miúdas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{
              background: '#fff', borderRadius: 20, padding: '44px 40px',
              boxShadow: '0 8px 48px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)',
              opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.15s',
            }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Solicite sua proposta grátis</h3>
                  <p style={{ fontSize: 13, color: '#999' }}>Resposta garantida em até 24h</p>
                </div>

                {/* Challenge selector */}
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#555', letterSpacing: '0.04em', display: 'block', marginBottom: 10 }}>
                    Qual é seu maior desafio agora? *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {challenges.map(c => (
                      <button key={c.id} type="button" onClick={() => setChallenge(c.id)} style={{
                        padding: '10px 14px', borderRadius: 10, textAlign: 'left',
                        fontSize: 12, fontWeight: 500, fontFamily: 'var(--font-body)',
                        cursor: 'pointer', transition: 'all 0.18s',
                        background: challenge === c.id ? 'rgba(59,91,252,0.08)' : '#f8f8f8',
                        border: `1.5px solid ${challenge === c.id ? '#3b5bfc' : '#e8e8e8'}`,
                        color: challenge === c.id ? '#3b5bfc' : '#444',
                      }}>{c.label}</button>
                    ))}
                  </div>
                </div>

                <FormField label="Seu nome *" name="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ex: João Silva" />
                <FormField label="Seu e-mail *" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="joao@empresa.com" />
                <FormField label="Seu WhatsApp *" name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(42) 99999-9999" />

                {error && (
                  <p style={{ fontSize: 13, color: '#e53e3e', background: '#fff5f5', padding: '10px 14px', borderRadius: 8, border: '1px solid #fed7d7' }}>
                    ⚠️ {error}
                  </p>
                )}

                <SubmitBtn disabled={!challenge || !name || !email || !phone} loading={loading} />

                <p style={{ fontSize: 11, color: '#bbb', textAlign: 'center', lineHeight: 1.5 }}>
                  🔒 Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: '#555', letterSpacing: '0.04em' }}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required
        style={{
          padding: '12px 16px', borderRadius: 10,
          border: `1.5px solid ${focused ? '#3b5bfc' : '#e0e0e0'}`,
          fontSize: 14, fontFamily: 'var(--font-body)',
          color: '#111', background: '#fafafa', outline: 'none', transition: 'border-color 0.2s',
        }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      />
    </div>
  )
}

function SubmitBtn({ disabled, loading }) {
  const [h, setH] = useState(false)
  const isDisabled = disabled || loading
  return (
    <button type="submit" disabled={isDisabled} style={{
      padding: '15px 28px',
      background: isDisabled ? '#ccc' : h ? '#1a1a1a' : '#0a0a0a',
      border: 'none', borderRadius: 28, color: '#fff',
      fontSize: 14, fontWeight: 700,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)', letterSpacing: '0.02em',
      transform: !isDisabled && h ? 'translateY(-2px)' : 'none',
      boxShadow: !isDisabled && h ? '0 8px 24px rgba(0,0,0,0.25)' : 'none',
      transition: 'all 0.2s',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    >
      {loading ? (
        <>
          <span style={{
            width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)',
            borderTop: '2px solid #fff', borderRadius: '50%',
            display: 'inline-block',
            animation: 'spin 0.7s linear infinite',
          }} />
          Enviando...
        </>
      ) : isDisabled ? 'Preencha os campos acima' : 'Quero minha proposta gratuita →'}
    </button>
  )
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: '#f5f5f5', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '24px 0' }}>
      <div style={{ ...CONTAINER, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="https://insidestudio.com.br" target="_blank">
          <img src={logoWhite} alt="Inside Studio" style={{ height: 22, filter: 'brightness(0)', opacity: 0.28 }} />
        </a>
        <p style={{ fontSize: 12, color: '#bbb' }}>Copyright Inside Studio | 2026</p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Instagram'].map(s => <FooterLink key={s} label={s} />)}
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ label }) {
  const [h, setH] = useState(false)
  return (
    <a href="https://www.instagram.com/insidestd_/" style={{ fontSize: 12, color: h ? '#111' : '#bbb', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{label}</a>
  )
}

/* ─── App ────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Hero />
      <PainSection />
      <ProcessSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  )
}