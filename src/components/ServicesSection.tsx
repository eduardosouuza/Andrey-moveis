import React from 'react';
import {
  PenTool as Tool,
  Tv,
  ShoppingBag,
  Wrench,
  Warehouse,
  Home
} from 'lucide-react';

const services = [
  {
    icon: <Tool className="w-8 h-8 text-blue-600" />,
    title: "Montagem e Desmontagem de Móveis",
    description: "Deixe-nos cuidar da montagem dos seus móveis novos ou da desmontagem para mudanças."
  },
  {
    icon: <Tv className="w-8 h-8 text-blue-600" />,
    title: "Instalação de Painéis e TVs",
    description: "Garantimos que sua TV e painéis estejam perfeitamente instalados e seguros."
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
    title: "Instalação de Prateleiras e Cortinas",
    description: "Maximize o espaço da sua casa com prateleiras bem instaladas e cortinas que complementam o seu décor."
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "Reparos de Portas e Gavetas",
    description: "Problemas com portas que não fecham ou gavetas emperradas? Nós resolvemos de forma rápida e eficiente."
  },
  {
    icon: <Warehouse className="w-8 h-8 text-blue-600" />,
    title: "Guarda-Roupas e Armários",
    description: "Montamos e instalamos todos os tipos de armários e estantes com precisão."
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Cômodas e Outros Móveis",
    description: "Seja qual for o móvel, nós temos a expertise para montá-lo corretamente."
  }
];

const ServicesSection = () => (
  <section className="py-20 bg-gray-50" id="services">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 btn-click"
          >
            <div className="mb-4 animate-float">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;