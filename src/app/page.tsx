'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: 'bdtrabalhos@gmail.com',
    phone: '',
    deadline: '',
    pages: '',
    theme: '',
    area: '',
    level: '',
    institution: '',
    details: ''
  })

  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  // Update date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format message for WhatsApp
    let message = `🎓 *SOLICITAÇÃO DE ORÇAMENTO - BD TRABALHOS* 🎓%0A%0A`
    message += `*Serviço:* ${formData.service}%0A`
    message += `*Nome:* ${formData.name}%0A`
    message += `*E-mail:* ${formData.email}%0A`
    message += `*Telefone:* ${formData.phone}%0A`
    message += `*Tema:* ${formData.theme}%0A`
    message += `*Área de Estudo:* ${formData.area}%0A`
    message += `*Nível Acadêmico:* ${formData.level}%0A`
    
    if (formData.institution) {
      message += `*Instituição:* ${formData.institution}%0A`
    }
    
    message += `*Prazo:* ${formData.deadline}%0A`
    
    if (formData.pages) {
      message += `*Número de páginas:* ${formData.pages}%0A`
    }
    
    message += `%0A*Detalhes do trabalho:*%0A${formData.details}%0A%0A`
    message += `📅 *Data da solicitação:* ${new Date().toLocaleDateString('pt-BR')}%0A%0A`
    message += `Aguardo seu retorno! Obrigado(a)!`
    
    // Your WhatsApp number
    const whatsappNumber = "5533987530571"
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Show notification
    showNotificationMessage('Solicitação enviada com sucesso! Redirecionando para o WhatsApp...')
    
    // Reset form
    setFormData({
      service: '',
      name: '',
      email: 'bdtrabalhos@gmail.com',
      phone: '',
      deadline: '',
      pages: '',
      theme: '',
      area: '',
      level: '',
      institution: '',
      details: ''
    })
  }

  const selectService = (serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      service: serviceName
    }))
    document.getElementById('budget')?.scrollIntoView({ behavior: 'smooth' })
  }

  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 5000)
  }

  const services = [
    { id: 'tcc', name: 'TCC e Monografias', icon: 'fas fa-file-alt', description: 'Elaboração completa de Trabalhos de Conclusão de Curso e Monografias' },
    { id: 'dissertacoes', name: 'Dissertações e Teses', icon: 'fas fa-book', description: 'Acompanhamento especializado para Dissertações de Mestrado e Teses de Doutorado' },
    { id: 'projetos', name: 'Projetos de Pesquisa', icon: 'fas fa-search', description: 'Desenvolvimento de projetos de pesquisa para aprovação em instituições' },
    { id: 'traducao', name: 'Tradução de Textos', icon: 'fas fa-language', description: 'Tradução profissional de textos acadêmicos com terminologia especializada' },
    { id: 'artigos', name: 'Artigos Científicos', icon: 'fas fa-newspaper', description: 'Elaboração de artigos científicos para publicação em periódicos' },
    { id: 'resumos', name: 'Resumos Acadêmicos', icon: 'fas fa-file-contract', description: 'Criação de resumos acadêmicos para trabalhos e apresentações' },
    { id: 'revisao', name: 'Revisão Bibliográfica', icon: 'fas fa-books', description: 'Análise e síntese de referências bibliográficas para seu trabalho' },
    { id: 'formatacao', name: 'Revisão e Formatação', icon: 'fas fa-edit', description: 'Revisão ortográfica, gramatical e formatação segundo normas ABNT' }
  ]

  return (
    <>
      <style jsx global>{`
        :root {
          --primary: #6a0dad;
          --primary-dark: #4a0a7d;
          --secondary: #8e44ad;
          --light: #f8f9fa;
          --dark: #343a40;
          --success: #28a745;
          --white: #ffffff;
          --glass-bg: rgba(255, 255, 255, 0.1);
          --glass-border: rgba(255, 255, 255, 0.2);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          line-height: 1.6;
          color: var(--dark);
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Glassmorphism */
        .glass {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        /* Header Styles */
        header {
          background: rgba(106, 13, 173, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: var(--white);
          padding: 20px 0;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          z-index: 100;
          animation: slideDown 0.8s ease-out;
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo i {
          font-size: 2.5rem;
          margin-right: 15px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .logo h1 {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .tagline {
          font-size: 0.9rem;
          font-style: italic;
          opacity: 0.9;
        }
        
        /* Hero Section */
        .hero {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          color: var(--white);
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          animation: rotate 30s linear infinite;
          z-index: -1;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .hero h2 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: 1px;
          animation: fadeInUp 1s ease-out;
        }
        
        .hero p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 30px;
          animation: fadeInUp 1s ease-out 0.2s;
          animation-fill-mode: both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          color: var(--white);
          padding: 15px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          animation: fadeInUp 1s ease-out 0.4s;
          animation-fill-mode: both;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          z-index: -1;
          transition: transform 0.5s;
          transform: translateX(-100%);
        }
        
        .cta-button:hover::before {
          transform: translateX(0);
        }
        
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        /* Services Section */
        .services {
          padding: 100px 0;
          position: relative;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .section-title h2 {
          font-size: 2.8rem;
          color: var(--white);
          margin-bottom: 15px;
          font-weight: 800;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .section-title p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid var(--glass-border);
          text-align: center;
          transition: all 0.4s ease;
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: -1;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        
        .service-card i {
          font-size: 3rem;
          color: var(--white);
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        
        .service-card:hover i {
          transform: scale(1.2);
        }
        
        .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: var(--white);
          font-weight: 600;
        }
        
        .service-card p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
          font-size: 1rem;
        }
        
        .select-service {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          color: var(--white);
          border: none;
          padding: 12px 25px;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .select-service::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          z-index: -1;
          transition: transform 0.5s;
          transform: translateX(-100%);
        }
        
        .select-service:hover::before {
          transform: translateX(0);
        }
        
        .select-service:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Budget Form Section */
        .budget-form {
          padding: 100px 0;
          position: relative;
        }
        
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid var(--glass-border);
          animation: fadeInUp 1s ease-out;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: var(--white);
          font-size: 1.1rem;
        }
        
        .form-control {
          width: 100%;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(106, 13, 173, 0.3);
          background: rgba(255, 255, 255, 0.2);
        }
        
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        /* FIXED: Select dropdown styling */
        select.form-control {
          color: #333 !important;
          background: rgba(255, 255, 255, 0.95) !important;
        }
        
        select.form-control option {
          color: #333 !important;
          background: white !important;
          padding: 10px;
        }
        
        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .submit-btn {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          color: var(--white);
          border: none;
          padding: 18px 30px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 10px;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .submit-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          z-index: -1;
          transition: transform 0.5s;
          transform: translateX(-100%);
        }
        
        .submit-btn:hover::before {
          transform: translateX(0);
        }
        
        .submit-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        /* Footer */
        footer {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: var(--white);
          padding: 50px 0;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .footer-logo i {
          font-size: 2.5rem;
          margin-right: 15px;
        }
        
        .footer-logo h2 {
          font-size: 2rem;
          font-weight: 700;
        }
        
        .contact-info {
          margin-bottom: 25px;
        }
        
        .contact-info p {
          margin-bottom: 10px;
          font-size: 1.1rem;
        }
        
        .social-links {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }
        
        .social-links a {
          color: var(--white);
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          color: var(--primary);
          transform: translateY(-5px);
        }
        
        .copyright {
          margin-top: 30px;
          font-size: 1rem;
          opacity: 0.8;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }
          
          .logo {
            margin-bottom: 15px;
          }
          
          .hero h2 {
            font-size: 2.2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .form-container {
            padding: 30px 20px;
          }
        }
        
        /* Notification Styles */
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(45deg, var(--success), #2ecc71);
          color: var(--white);
          padding: 20px 30px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transform: translateX(150%);
          transition: transform 0.5s ease;
          z-index: 1000;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .notification.show {
          transform: translateX(0);
        }
        
        .notification i {
          margin-right: 10px;
          font-size: 1.5rem;
        }
        
        /* Scroll animations */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Liquid glass effect */
        .liquid-glass {
          position: relative;
          overflow: hidden;
        }
        
        .liquid-glass::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
          animation: rotate 20s linear infinite;
          z-index: -1;
        }
        
        /* Floating animation */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Floating Clock Styles */
        .floating-clock {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: var(--glass-bg);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 20px 25px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid var(--glass-border);
          z-index: 1000;
          animation: float 4s ease-in-out infinite;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .floating-clock:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
        }
        
        .floating-clock::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
          animation: rotate 15s linear infinite;
          z-index: -1;
          border-radius: 20px;
        }
        
        .clock-time {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          margin-bottom: 5px;
          font-family: 'Courier New', monospace;
        }
        
        .clock-date {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
          font-weight: 500;
        }
        
        .clock-icon {
          position: absolute;
          top: -10px;
          right: -10px;
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 0.8rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .floating-clock {
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
          }
          
          .clock-time {
            font-size: 1.2rem;
          }
          
          .clock-date {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Header */}
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h1>BD TRABALHOS</h1>
                <div className="tagline">Qualidade acadêmica que impressiona</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero liquid-glass">
        <div className="container">
          <h2>Serviços Acadêmicos Profissionais</h2>
          <p>Oferecemos suporte completo para suas necessidades acadêmicas com qualidade e profissionalismo</p>
          <a href="#services" className="cta-button">Conheça Nossos Serviços</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Serviços</h2>
            <p>Oferecemos uma ampla gama de serviços acadêmicos para atender às suas necessidades</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <i className={service.icon}></i>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button className="select-service" onClick={() => selectService(service.name)}>
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Form Section */}
      <section className="budget-form" id="budget">
        <div className="container">
          <div className="section-title">
            <h2>Solicite um Orçamento</h2>
            <p>Preencha o formulário abaixo e entraremos em contato via WhatsApp</p>
          </div>
          
          <div className="form-container glass liquid-glass">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="service">Serviço Desejado</label>
                <select 
                  id="service" 
                  name="service" 
                  className="form-control" 
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {services.map(service => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Seu Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefone (com DDD)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-control" 
                  placeholder="(XX) XXXXX-XXXX" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="deadline">Prazo Desejado</label>
                  <input 
                    type="text" 
                    id="deadline" 
                    name="deadline" 
                    className="form-control" 
                    placeholder="Ex: 15 dias, 30 dias, etc." 
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="pages">Número de Páginas (se aplicável)</label>
                  <input 
                    type="number" 
                    id="pages" 
                    name="pages" 
                    className="form-control" 
                    min="1"
                    value={formData.pages}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="theme">Tema do Trabalho</label>
                <input 
                  type="text" 
                  id="theme" 
                  name="theme" 
                  className="form-control" 
                  placeholder="Ex: Impacto das redes sociais na sociedade" 
                  value={formData.theme}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="area">Área de Estudo</label>
                  <select 
                    id="area" 
                    name="area" 
                    className="form-control" 
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione a área</option>
                    <option value="Exatas">Ciências Exatas</option>
                    <option value="Humanas">Ciências Humanas</option>
                    <option value="Biologicas">Ciências Biológicas</option>
                    <option value="Saude">Ciências da Saúde</option>
                    <option value="Engenharia">Engenharia</option>
                    <option value="Outra">Outra</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="level">Nível Acadêmico</label>
                  <select 
                    id="level" 
                    name="level" 
                    className="form-control" 
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione o nível</option>
                    <option value="Graduacao">Graduação</option>
                    <option value="Especializacao">Especialização</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="institution">Instituição de Ensino</label>
                <input 
                  type="text" 
                  id="institution" 
                  name="institution" 
                  className="form-control" 
                  placeholder="Ex: Universidade Federal de Minas Gerais"
                  value={formData.institution}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="details">Detalhes do Trabalho</label>
                <textarea 
                  id="details" 
                  name="details" 
                  className="form-control" 
                  placeholder="Descreva seu trabalho, orientações específicas, etc." 
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Enviar Solicitação via WhatsApp
                <i className="fab fa-whatsapp" style={{ marginLeft: '10px' }}></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo floating">
              <i className="fas fa-graduation-cap"></i>
              <h2>BD TRABALHOS</h2>
            </div>
            
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> bdtrabalhos@gmail.com</p>
              <p><i className="fab fa-whatsapp"></i> (33) 98753-0571</p>
            </div>
            
            <div className="social-links">
  <a href="#"><i className="fab fa-facebook"></i></a>
  <a href="https://www.instagram.com/bdtrabalhos/"><i className="fab fa-instagram"></i></a>
  <a href="#"><i className="fab fa-linkedin"></i></a>
</div>
            
            <div className="copyright">
              <p>&copy; 2023 BD TRABALHOS - Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Clock */}
      <div className="floating-clock">
        <div className="clock-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="clock-time">
          {currentDateTime.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
          })}
        </div>
        <div className="clock-date">
          {currentDateTime.toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Notification */}
      <div className={`notification ${showNotification ? 'show' : ''}`}>
        <i className="fas fa-check-circle"></i>
        <span>{notificationMessage}</span>
      </div>
    </>
  )
}
