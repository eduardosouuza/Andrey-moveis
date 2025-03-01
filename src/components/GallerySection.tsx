import React from 'react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
    title: "Montagem de Móveis de Escritório"
  },
  {
    url: "https://images.unsplash.com/photo-1604328471151-b52226907017?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
    title: "Estações de Trabalho Corporativas"
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
    title: "Móveis para Sala de Reunião"
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
    title: "Instalação de Prateleiras"
  },
  {
    url: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
    title: "Montagem de Móveis de Cozinha"
  },
  {
    url: "https://images.unsplash.com/photo-1609347744403-2306e8a9ae27?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
    title: "Instalação de Armários"
  }
];

const GallerySection = () => (
  <section className="py-20 bg-white" id="gallery">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Galeria de Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 btn-click"
          >
            <img 
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover"
              loading="lazy"
              width="600"
              height="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;