import { useState, useEffect } from 'react';
import { Calendar, Clock, MessageCircle, Sparkles, CheckCircle, X, Send, Star, Award, Phone, Mail, MapPin, Instagram, Facebook, ChevronRight, Menu, Shield, Heart, Zap, MessageSquare, TrendingUp, Users, Camera, Smile, BadgeCheck, Gift, CreditCard, FileText, HelpCircle } from 'lucide-react';

const InnerlyOdonto = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Olá! Sou a assistente virtual da Innerly Odonto. Como posso ajudá-lo hoje?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [typedText, setTypedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const fullText = 'Seu sorriso merece o melhor cuidado';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const availableDates = [
    '2026-01-15', '2026-01-16', '2026-01-17',
    '2026-01-20', '2026-01-21', '2026-01-22', '2026-01-23'
  ];

  const availableTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const services = [
    { 
      name: 'Clareamento Dental', 
      desc: 'Tecnologia LED de última geração para um sorriso radiante e natural',
      detail: 'Tratamento personalizado com resultados em até 3 sessões',
      icon: <Sparkles className="w-8 h-8" /> 
    },
    { 
      name: 'Implantes Dentários', 
      desc: 'Implantologia avançada com materiais premium e técnicas minimamente invasivas',
      detail: 'Próteses de altíssima qualidade e durabilidade',
      icon: <Award className="w-8 h-8" /> 
    },
    { 
      name: 'Invisalign', 
      desc: 'Alinhadores transparentes de última geração para correção discreta',
      detail: 'Planejamento digital 3D e acompanhamento personalizado',
      icon: <CheckCircle className="w-8 h-8" /> 
    },
    { 
      name: 'Design de Sorriso', 
      desc: 'Harmonização facial e dental com técnicas de alta precisão',
      detail: 'Análise estética computadorizada e mockup digital',
      icon: <Star className="w-8 h-8" /> 
    },
    { 
      name: 'Lentes de Contato Dental', 
      desc: 'Lâminas ultra finas de porcelana para transformação completa',
      detail: 'Procedimento minimamente invasivo com durabilidade superior',
      icon: <Zap className="w-8 h-8" /> 
    },
    { 
      name: 'Periodontia', 
      desc: 'Tratamento especializado de gengivas e estruturas de suporte',
      detail: 'Protocolos avançados para saúde bucal completa',
      icon: <Shield className="w-8 h-8" /> 
    }
  ];

  const team = [
    {
      name: 'Dra. Maria Santos',
      role: 'Ortodontista',
      specialty: 'Especialista em Invisalign',
      experience: '15 anos de experiência',
      image: '👩‍⚕️',
      description: 'Formada pela USP com especialização em Harvard'
    },
    {
      name: 'Dr. João Silva',
      role: 'Implantodontista',
      specialty: 'Mestre em Implantologia',
      experience: '20 anos de experiência',
      image: '👨‍⚕️',
      description: 'Referência nacional em implantes de carga imediata'
    },
    {
      name: 'Dra. Ana Costa',
      role: 'Especialista em Estética',
      specialty: 'Design de Sorriso e Harmonização',
      experience: '12 anos de experiência',
      image: '👩‍⚕️',
      description: 'Pioneira em técnicas de harmonização orofacial'
    },
    {
      name: 'Dr. Carlos Mendes',
      role: 'Endodontista',
      specialty: 'Especialista em Tratamento de Canal',
      experience: '18 anos de experiência',
      image: '👨‍⚕️',
      description: 'Expertise em casos complexos com tecnologia microscópica'
    }
  ];

  const testimonials = [
    {
      name: 'Patricia Oliveira',
      text: 'Excelência do início ao fim! A equipe é extremamente profissional e o resultado superou todas as minhas expectativas.',
      rating: 5,
      treatment: 'Lentes de Contato Dental'
    },
    {
      name: 'Ricardo Almeida',
      text: 'Fiz meu implante com total segurança. A clínica tem equipamentos de ponta e o Dr. João é sensacional!',
      rating: 5,
      treatment: 'Implante Dentário'
    },
    {
      name: 'Juliana Ferreira',
      text: 'O clareamento ficou perfeito! Resultado natural e duradouro. Super recomendo a Innerly!',
      rating: 5,
      treatment: 'Clareamento Dental'
    },
    {
      name: 'Fernando Costa',
      text: 'O Invisalign mudou minha vida! Tratamento discreto e resultado impecável. Profissionais excelentes!',
      rating: 5,
      treatment: 'Invisalign'
    }
  ];

  const differentials = [
    { icon: <Shield className="w-6 h-6" />, title: 'Tecnologia de Ponta', desc: 'Equipamentos de última geração' },
    { icon: <Heart className="w-6 h-6" />, title: 'Atendimento Humanizado', desc: 'Cuidado personalizado' },
    { icon: <Award className="w-6 h-6" />, title: 'Equipe Especializada', desc: 'Profissionais altamente qualificados' },
    { icon: <Zap className="w-6 h-6" />, title: 'Resultados Rápidos', desc: 'Protocolos otimizados' }
  ];

  const beforeAfter = [
    { title: 'Clareamento Dental', improvement: '8 tons mais branco', time: '3 sessões' },
    { title: 'Lentes de Porcelana', improvement: 'Transformação total', time: '2 consultas' },
    { title: 'Invisalign', improvement: 'Alinhamento perfeito', time: '12-18 meses' },
    { title: 'Implante Total', improvement: 'Sorriso renovado', time: '6 meses' }
  ];

  const faqs = [
    {
      question: 'Quanto tempo dura um tratamento de clareamento?',
      answer: 'O clareamento dental profissional na Innerly é realizado em 2 a 3 sessões de aproximadamente 1 hora cada. Os resultados podem durar de 1 a 3 anos, dependendo dos cuidados e hábitos alimentares.'
    },
    {
      question: 'Implantes dentários doem?',
      answer: 'O procedimento é realizado com anestesia local, tornando-o praticamente indolor. Após a cirurgia, pode haver um leve desconforto que é facilmente controlado com medicação prescrita.'
    },
    {
      question: 'Quanto tempo leva para colocar lentes de contato dental?',
      answer: 'O processo completo geralmente leva de 2 a 3 consultas. Na primeira, fazemos o planejamento e moldagem. Na segunda, instalamos as lentes provisórias. Na terceira, cimentamos as lentes definitivas.'
    },
    {
      question: 'O Invisalign funciona para todos os casos?',
      answer: 'O Invisalign é eficaz para a maioria dos casos de má oclusão. Durante a consulta de avaliação, nossos especialistas fazem uma análise completa para determinar se o tratamento é adequado para você.'
    },
    {
      question: 'A clínica trabalha com planos odontológicos?',
      answer: 'Sim! Aceitamos os principais convênios e também oferecemos planos de pagamento facilitados para todos os tratamentos. Entre em contato para mais informações.'
    }
  ];

  const paymentOptions = [
    { icon: <CreditCard className="w-8 h-8" />, title: 'Parcelamento Sem Juros', desc: 'Até 12x sem juros no cartão' },
    { icon: <Gift className="w-8 h-8" />, title: 'Planos Flexíveis', desc: 'Condições especiais para tratamentos completos' },
    { icon: <BadgeCheck className="w-8 h-8" />, title: 'Convênios', desc: 'Aceitamos os principais planos odontológicos' },
    { icon: <FileText className="w-8 h-8" />, title: 'Orçamento Gratuito', desc: 'Avaliação sem compromisso' }
  ];

  const invisalignBenefits = [
    { title: 'Invisível', desc: 'Ninguém vai perceber que você está usando', icon: <Camera /> },
    { title: 'Removível', desc: 'Pode ser retirado para comer e higienizar', icon: <Smile /> },
    { title: 'Confortável', desc: 'Sem brackets ou fios que machucam', icon: <Heart /> },
    { title: 'Previsível', desc: 'Visualize o resultado antes de começar', icon: <TrendingUp /> }
  ];

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { role: 'user', text: userInput }];
    setChatMessages(newMessages);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = {
        'agendar': 'Perfeito! Vou abrir nosso sistema de agendamento para você. Qual tratamento você procura?',
        'preço': 'Nossos valores variam conforme o tratamento. Posso agendar uma avaliação gratuita para você receber um orçamento personalizado?',
        'horário': 'Funcionamos de segunda a sexta das 8h às 18h, e sábados das 8h às 13h. Deseja agendar?',
        'equipe': 'Nossa equipe é formada por especialistas com mais de 15 anos de experiência cada um! Acesse a seção "Equipe" para conhecer nossos profissionais.',
        'invisalign': 'O Invisalign é uma excelente opção! É discreto, confortável e você pode ver o resultado antes de começar. Quer agendar uma avaliação gratuita?',
        'default': 'Entendo! Para melhor atendê-lo, posso agendar uma consulta de avaliação? Ou se preferir, me conte qual tratamento você procura!'
      };

      let response = responses.default;
      const input = userInput.toLowerCase();
      
      if (input.includes('agendar') || input.includes('consulta') || input.includes('marcar')) {
        response = responses.agendar;
        setTimeout(() => setShowBooking(true), 1000);
      } else if (input.includes('preço') || input.includes('valor') || input.includes('custo')) {
        response = responses.preço;
      } else if (input.includes('horário') || input.includes('funciona') || input.includes('aberto')) {
        response = responses.horário;
      } else if (input.includes('equipe') || input.includes('dentista') || input.includes('doutor')) {
        response = responses.equipe;
      } else if (input.includes('invisalign') || input.includes('aparelho') || input.includes('ortodontia')) {
        response = responses.invisalign;
      }

      setChatMessages([...newMessages, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedService) {
      const formattedDate = new Date(selectedDate).toLocaleDateString('pt-BR');
      alert(`✨ Agendamento confirmado!\n\nServiço: ${selectedService}\nData: ${formattedDate}\nHorário: ${selectedTime}\n\nEntraremos em contato em breve para confirmar.`);
      setShowBooking(false);
      setSelectedDate('');
      setSelectedTime('');
      setSelectedService('');
    }
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />;
      case 'sobre':
        return <AboutSection />;
      case 'servicos':
        return <ServicesSection />;
      case 'invisalign':
        return <InvisalignSection />;
      case 'equipe':
        return <TeamSection />;
      case 'galeria':
        return <GallerySection />;
      case 'contato':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  const HomeSection = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D1C3A6]/20 via-white to-[#42554F]/5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#D4AE7D]/30 to-[#A38561]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-[#42554F]/10 to-[#364540]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center space-x-2 bg-gradient-to-r from-[#D1C3A6]/50 to-[#D4AE7D]/50 px-4 py-2 rounded-full border border-[#A38561]/50">
              <Star className="w-5 h-5 text-[#42554F]" />
              <span className="text-[#364540] font-medium">Odontologia de Excelência</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-[#D4AE7D]">|</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Clínica odontológica premium com tecnologia de ponta e profissionais especializados para transformar seu sorriso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setShowBooking(true)}
                className="bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta</span>
              </button>
              
              <button
                onClick={() => setChatOpen(true)}
                className="bg-white text-[#42554F] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl border-2 border-[#D4AE7D] transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar com IA</span>
              </button>
            </div>

            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Innerly Odonto" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#42554F] hover:text-[#364540] font-medium transition-all duration-300 group"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Ou fale conosco pelo WhatsApp</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-[#42554F] via-[#364540] to-[#42554F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D4AE7D]/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Anos de Experiência' },
              { number: '8.500+', label: 'Sorrisos Transformados' },
              { number: '98%', label: 'Satisfação dos Pacientes' },
              { number: '24/7', label: 'Suporte Online' }
            ].map((stat, i) => (
              <div key={i} className="transform hover:scale-110 transition-all duration-300">
                <div className="text-5xl font-bold mb-2 text-[#D4AE7D]">{stat.number}</div>
                <div className="text-[#D1C3A6]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-[#D1C3A6]/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
              Por que escolher a Innerly?
            </h3>
            <p className="text-gray-600 text-lg">Diferenciais que fazem toda a diferença</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#D1C3A6] text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#42554F] group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#42554F] to-[#D4AE7D] bg-clip-text text-transparent">
              O que nossos pacientes dizem
            </h3>
            <p className="text-gray-600 text-lg">Depoimentos reais de quem confia na Innerly</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D1C3A6]"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AE7D] text-[#D4AE7D]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-sm">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-[#A38561]">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#D1C3A6]/10 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#42554F] to-[#D4AE7D] bg-clip-text text-transparent">
              Facilidades de Pagamento
            </h3>
            <p className="text-gray-600 text-lg">Diversas opções para você realizar seu tratamento</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentOptions.map((option, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D1C3A6] text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#42554F] group-hover:scale-110 transition-all duration-300">
                  {option.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{option.title}</h4>
                <p className="text-gray-600">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const AboutSection = () => (
    <section id="sobre" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
            Sobre a Innerly Odonto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excelência em odontologia há mais de 15 anos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#42554F] mb-4">Nossa História</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fundada em 2010, a Innerly Odonto nasceu do sonho de proporcionar tratamentos odontológicos de excelência, aliando tecnologia de ponta ao atendimento humanizado e personalizado.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ao longo dos anos, conquistamos a confiança de mais de 8.500 pacientes, tornando-nos referência em odontologia premium. Nossa missão é transformar sorrisos e elevar a autoestima de cada pessoa que nos procura.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Investimos continuamente em capacitação profissional e equipamentos de última geração para garantir os melhores resultados com máximo conforto e segurança.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#D4AE7D]/20 via-[#D1C3A6]/20 to-[#42554F]/10 p-8 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-[#42554F] mb-6">Nossos Valores</h3>
            <div className="space-y-4">
              {[
                { title: 'Excelência', desc: 'Busca constante pela perfeição em cada procedimento' },
                { title: 'Humanização', desc: 'Cuidado personalizado e acolhedor' },
                { title: 'Inovação', desc: 'Tecnologia de ponta a serviço do seu sorriso' },
                { title: 'Ética', desc: 'Transparência e honestidade em todas as relações' },
                { title: 'Compromisso', desc: 'Dedicação total ao resultado e satisfação' }
              ].map((value, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#D4AE7D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-[#42554F]">{value.title}</p>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#42554F] via-[#364540] to-[#42554F] text-white p-12 rounded-3xl shadow-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Certificações e Reconhecimentos</h3>
          <p className="text-[#D1C3A6] mb-8 text-lg max-w-3xl mx-auto">
            Orgulhosamente reconhecidos pelos principais órgãos de odontologia e acreditados pelas mais importantes certificações de qualidade do setor
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['CRO Certificado', 'ISO 9001', 'ONA Acreditado', 'Prêmio Excelência 2024'].map((cert, i) => (
              <div key={i} className="bg-[#D4AE7D]/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section id="servicos" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
            Nossos Tratamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Procedimentos personalizados com tecnologia de última geração
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-[#D1C3A6] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/20 rounded-2xl flex items-center justify-center mb-6 text-[#42554F] group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3 text-gray-800">{service.name}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <p className="text-sm text-[#A38561] font-medium">{service.detail}</p>
                
                <button
                  onClick={() => {
                    setSelectedService(service.name);
                    setShowBooking(true);
                  }}
                  className="mt-6 flex items-center space-x-2 text-[#42554F] font-semibold hover:text-[#364540] transition-colors group/btn"
                >
                  <span>Agendar avaliação</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#D1C3A6]/30 to-[#D4AE7D]/30 p-12 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#42554F]">Não encontrou o que procura?</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Oferecemos diversos outros tratamentos. Entre em contato conosco e descubra como podemos ajudá-lo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setChatOpen(true)}
              className="bg-gradient-to-r from-[#D4AE7D] to-[#A38561] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Falar com Especialista
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#42554F] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const InvisalignSection = () => (
    <section id="invisalign" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-[#D1C3A6]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
            Invisalign - Ortodontia Invisível
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A tecnologia mais avançada em alinhadores transparentes
          </p>
        </div>

        {/* Hero Invisalign */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#42554F] mb-6">O Futuro da Ortodontia</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O Invisalign revolucionou o tratamento ortodôntico ao oferecer uma solução praticamente invisível, confortável e eficaz. Utilizando tecnologia 3D de ponta, criamos alinhadores personalizados que movem seus dentes gradualmente para a posição ideal.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Diferente dos aparelhos tradicionais, você pode visualizar o resultado final antes mesmo de começar o tratamento!
              </p>
              <button
                onClick={() => {
                  setSelectedService('Invisalign');
                  setShowBooking(true);
                }}
                className="bg-gradient-to-r from-[#D4AE7D] to-[#A38561] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 self-start"
              >
                Agendar Avaliação Gratuita
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/20 p-3 flex items-center justify-center">
                <img src="invisalign.jpg" alt="Invisalign" srcset="" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#42554F]">Vantagens do Invisalign</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {invisalignBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D1C3A6] text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#42554F] group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-r from-[#42554F] to-[#364540] text-white p-12 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Como Funciona o Tratamento</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta', desc: 'Avaliação completa e scan 3D' },
              { step: '02', title: 'Planejamento', desc: 'Visualize seu novo sorriso' },
              { step: '03', title: 'Alinhadores', desc: 'Receba seus alinhadores personalizados' },
              { step: '04', title: 'Resultado', desc: 'Acompanhamento até o sorriso perfeito' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-[#D4AE7D] mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-[#D1C3A6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const TeamSection = () => (
    <section id="equipe" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-[#D1C3A6]/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
            Nossa Equipe de Especialistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e dedicados ao seu sorriso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#D4AE7D]/20 via-[#D1C3A6]/20 to-[#42554F]/10 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                {member.image}
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h4>
                <p className="text-[#A38561] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.specialty}</p>
                <p className="text-[#42554F] text-sm font-medium mb-4">{member.experience}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#42554F]">Educação Continuada</h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Nossos profissionais participam regularmente de congressos nacionais e internacionais, cursos de atualização e workshops especializados. Estamos sempre em busca das técnicas mais modernas e eficazes para oferecer o melhor tratamento aos nossos pacientes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { value: '50+', label: 'Cursos por ano' },
              { value: '100%', label: 'Equipe especializada' },
              { value: '10+', label: 'Certificações internacionais' }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-[#D1C3A6]/20 to-[#D4AE7D]/20 rounded-xl">
                <div className="text-4xl font-bold text-[#42554F] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const GallerySection = () => (
    <section id="galeria" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
            Antes & Depois
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais que transformam vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {beforeAfter.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#D4AE7D]/20 via-[#D1C3A6]/20 to-[#42554F]/10 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                😁
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2 text-[#42554F]">{item.title}</h4>
                <p className="text-[#A38561] font-semibold mb-1">{item.improvement}</p>
                <p className="text-gray-600 text-sm">{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-[#D1C3A6]/20 to-white p-12 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#42554F]">Perguntas Frequentes</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-[#D1C3A6]"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#D1C3A6]/10 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-[#42554F] flex-shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contato" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#42554F] via-[#A38561] to-[#D4AE7D] bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600">Estamos prontos para atendê-lo</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#D1C3A6]">
              <h3 className="text-2xl font-bold mb-6 text-[#42554F]">Informações de Contato</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <Phone className="w-6 h-6" />, 
                    title: 'Telefone', 
                    info: '(11) 3456-7890',
                    link: 'tel:+551134567890'
                  },
                  { 
                    icon: <MessageSquare className="w-6 h-6" />, 
                    title: 'WhatsApp', 
                    info: '(11) 99999-9999',
                    link: 'https://wa.me/5511999999999',
                    highlight: true
                  },
                  { 
                    icon: <Mail className="w-6 h-6" />, 
                    title: 'Email', 
                    info: 'contato@innerlyodonto.com.br',
                    link: 'mailto:contato@innerlyodonto.com.br'
                  },
                  { 
                    icon: <MapPin className="w-6 h-6" />, 
                    title: 'Endereço', 
                    info: 'Av. Paulista, 1000 - São Paulo/SP'
                  }
                ].map((contact, i) => (
                  <div key={i} className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${contact.highlight ? 'bg-[#42554F]/5 border-2 border-[#42554F]' : 'hover:bg-[#D1C3A6]/20'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${contact.highlight ? 'bg-[#42554F] text-white' : 'bg-gradient-to-br from-[#D4AE7D]/30 to-[#42554F]/30 text-[#42554F]'}`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1">{contact.title}</h4>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${contact.highlight ? 'text-[#42554F] font-semibold' : 'text-gray-600'} hover:underline`}
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{contact.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#D4AE7D]/20 to-[#42554F]/10 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#42554F]">Horário de Funcionamento</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="font-bold text-[#42554F]">08h - 18h</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Sábado</span>
                  <span className="font-bold text-[#42554F]">08h - 13h</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Domingo</span>
                  <span className="text-gray-500">Fechado</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#D1C3A6]">
              <h3 className="text-2xl font-bold mb-4 text-[#42554F]">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#D4AE7D] to-[#A38561] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#D4AE7D] to-[#A38561] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#D1C3A6]">
            <h3 className="text-2xl font-bold mb-6 text-[#42554F]">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AE7D] focus:outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AE7D] focus:outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AE7D] focus:outline-none transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
                <textarea 
                  rows="4"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AE7D] focus:outline-none transition-all resize-none"
                  placeholder="Como podemos ajudá-lo?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#42554F] to-[#364540] text-white p-12 rounded-3xl shadow-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Prefere falar pelo WhatsApp?</h3>
          <p className="text-[#D1C3A6] mb-8 text-lg">Atendimento rápido e personalizado direto no seu celular!</p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Innerly Odonto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-[#42554F] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageSquare className="w-6 h-6" />
            <span>Iniciar Conversa no WhatsApp</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-sans">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm shadow-md'}`}>
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-20 flex items-center">
              <img
                src="logo.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </div>

          </div>

          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Sobre', id: 'sobre' },
              { name: 'Serviços', id: 'servicos' },
              { name: 'Invisalign', id: 'invisalign' },
              { name: 'Equipe', id: 'equipe' },
              { name: 'Galeria', id: 'galeria' },
              { name: 'Contato', id: 'contato' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium relative group transition-all duration-300 ${
                  activeSection === item.id ? 'text-[#42554F]' : 'text-gray-700 hover:text-[#42554F]'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#42554F] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-[#42554F] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            
            <button
              onClick={() => setShowBooking(true)}
              className="bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Agendar
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-6 py-4 space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Invisalign', id: 'invisalign' },
                { name: 'Equipe', id: 'equipe' },
                { name: 'Galeria', id: 'galeria' },
                { name: 'Contato', id: 'contato' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id ? 'bg-[#D1C3A6]/50 text-[#42554F] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      {renderContent()}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#42554F] via-[#364540] to-[#42554F] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] rounded-full flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D4AE7D] to-[#A38561] bg-clip-text text-transparent">Innerly</h3>
              <p className="text-xs text-[#D4AE7D]">ODONTO</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">© 2026 Innerly Odonto. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-sm">Desenvolvido com excelência para transformar sorrisos</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full my-8">
            <div className="bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] p-6 rounded-t-3xl flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Agendar Consulta
              </h3>
              <button onClick={() => setShowBooking(false)} className="text-white hover:bg-white/20 p-2 rounded-full transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-4 text-lg">Selecione o tratamento:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(service => (
                    <button
                      key={service.name}
                      onClick={() => setSelectedService(service.name)}
                      className={`p-4 rounded-xl font-medium text-left transition-all duration-300 ${
                        selectedService === service.name
                          ? 'bg-gradient-to-br from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-[#D1C3A6]/30 hover:border-[#D4AE7D] border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${selectedService === service.name ? 'text-white' : 'text-[#42554F]'}`}>
                          {service.icon}
                        </div>
                        <span className="font-semibold">{service.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedService && (
                <>
                  <div className="mb-8 animate-fadeIn">
                    <label className="block text-gray-700 font-semibold mb-4 text-lg">Escolha uma data disponível:</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {availableDates.map(date => {
                        const dateObj = new Date(date + 'T12:00:00');
                        const formatted = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
                        return (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`p-4 rounded-xl font-medium transition-all duration-300 ${
                              selectedDate === date
                                ? 'bg-gradient-to-br from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-[#D1C3A6]/30 hover:border-[#D4AE7D] border-2 border-transparent'
                            }`}
                          >
                            {formatted}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
              
              {selectedDate && (
                <div className="mb-8 animate-fadeIn">
                  <label className="block text-gray-700 font-semibold mb-4 text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#42554F]" />
                    Horários disponíveis:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg font-medium transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-gradient-to-br from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-[#D1C3A6]/30 hover:border-[#D4AE7D] border-2 border-transparent'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedDate && selectedTime && selectedService && (
                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span>Confirmar Agendamento</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#42554F]" />
              </div>
              <div>
                <h4 className="text-white font-bold">Assistente IA</h4>
                <p className="text-white/80 text-xs flex items-center">
                  <span className="w-2 h-2 bg-[#42554F] rounded-full mr-2 animate-pulse"></span>
                  Online agora
                </p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-white hover:bg-white/20 p-2 rounded-full transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gradient-to-br from-gray-50 to-[#D1C3A6]/10">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl shadow-md ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none border border-[#D1C3A6]'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-md border border-[#D1C3A6]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#D4AE7D] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#D4AE7D] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-[#D4AE7D] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AE7D] focus:outline-none transition-all"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white p-3 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="w-16 h-16 bg-gradient-to-r from-[#D4AE7D] via-[#A38561] to-[#D4AE7D] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="Chat com IA"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        )}
        
        <a
          href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Innerly Odonto"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#42554F] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="WhatsApp"
        >
          <MessageSquare className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default InnerlyOdonto;