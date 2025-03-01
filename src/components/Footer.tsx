import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PenTool as Tool
} from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Tool className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">Andrey</span>
          </div>
          <p className="text-gray-400">
            Transformando espaços com profissionalismo e dedicação.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> (51) 9526-9111</p>
            <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> contato@gmail.com</p>
            <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> Viamão, RS</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">Política de Privacidade</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">Termos de Serviço</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors btn-click">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 andrey. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;