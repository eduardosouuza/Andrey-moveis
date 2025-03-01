import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PenTool as Tool,
  Tv,
  ShoppingBag,
  Wrench,
  Warehouse,
  Home,
  Star,
  Clock,
  Shield,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// Lazy load sections
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const GallerySection = lazy(() => import('./components/GallerySection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

// Types
interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  datetime: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    datetime: '',
    message: ''
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }

      // Throttle section detection
      if (!window.requestAnimationFrame) {
        detectActiveSection();
      } else {
        window.requestAnimationFrame(detectActiveSection);
      }
    };

    const detectActiveSection = () => {
      const sections = ['services', 'features', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection || '');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, activeSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedDateTime = new Date(formData.datetime).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const message = `Olá! Gostaria de solicitar um serviço:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Serviço: ${formData.service}
Data e Hora: ${formattedDateTime}
${formData.message ? `\nMensagem adicional: ${formData.message}` : ''}`;

    const whatsappNumber = '5511999999999';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  const navLinks = [
    { href: "#services", text: "Serviços", id: "services" },
    { href: "#gallery", text: "Galeria", id: "gallery" },
    { href: "#features", text: "Diferenciais", id: "features" },
    { href: "#contact", text: "Contato", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Tool className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Andrey</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-gray-600 hover:text-blue-600 transition-all duration-300 ${activeSection === link.id ? 'text-blue-600 font-semibold' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.text}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 btn-click"
                onClick={() => handleNavClick('contact')}
              >
                Agendar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors btn-click"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'max-h-screen opacity-100 visible'
                : 'max-h-0 opacity-0 invisible'
            }`}
          >
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`block text-gray-600 hover:text-blue-600 transition-all duration-300 ${activeSection === link.id ? 'text-blue-600 font-semibold' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 btn-click"
                onClick={() => handleNavClick('contact')}
              >
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3')"
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Montagem e Instalação de Móveis com Precisão
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transforme sua casa ou escritório com nossos serviços profissionais de montagem e instalação.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 btn-click"
                  onClick={() => handleNavClick('contact')}
                >
                  Agende Agora
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 btn-click"
                  onClick={() => handleNavClick('services')}
                >
                  Nossos Serviços
                </a>
              </div>
            </div>
            <div className="hidden md:block animate-float">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500" 
                alt="Montagem de Móveis"
                className="rounded-lg shadow-2xl"
                loading="eager"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-6 h-6 text-yellow-500" />,
                title: "Qualidade Garantida",
                description: "Serviço de excelência com garantia de satisfação"
              },
              {
                icon: <Clock className="w-6 h-6 text-blue-500" />,
                title: "Pontualidade",
                description: "Respeitamos seu tempo com horários precisos"
              },
              {
                icon: <Shield className="w-6 h-6 text-green-500" />,
                title: "Segurança",
                description: "Profissionais verificados e confiáveis"
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-purple-500" />,
                title: "Experiência",
                description: "Anos de experiência no mercado"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300 animate-slide-up-delay-${index + 1} btn-click`}
              >
                <div className="inline-block p-3 rounded-full bg-gray-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
        <ServicesSection />
        <GallerySection />
        <ContactSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;