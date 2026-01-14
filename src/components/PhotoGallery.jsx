import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        {
            url: "/images/IMG_6536.jpeg",
            title: "Fachada do Imóvel - Graça/Alfama",
            description: "Estado atual do imóvel devoluto da Santa Casa."
        },
        {
            url: "/images/IMG_6537.jpeg",
            title: "Pormenor Arquitetónico",
            description: "Elementos originais a serem preservados no restauro."
        }
    ];

    const openLightbox = (index) => setSelectedImg(index);
    const closeLightbox = () => setSelectedImg(null);
    const nextImg = () => setSelectedImg((selectedImg + 1) % images.length);
    const prevImg = () => setSelectedImg((selectedImg - 1 + images.length) % images.length);

    return (
        <div className="py-12">
            <h3 className="text-2xl font-bold mb-8 text-[#044050] text-center italic">Galeria do Projeto</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer overflow-hidden rounded-xl shadow-lg aspect-video relative group"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={img.url}
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                            <h4 className="font-bold">{img.title}</h4>
                            <p className="text-sm opacity-90">{img.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                            onClick={closeLightbox}
                        >
                            <X size={40} />
                        </button>

                        <button
                            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hidden md:block"
                            onClick={(e) => { e.stopPropagation(); prevImg(); }}
                        >
                            <ChevronLeft size={60} />
                        </button>

                        <button
                            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors hidden md:block"
                            onClick={(e) => { e.stopPropagation(); nextImg(); }}
                        >
                            <ChevronRight size={60} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="max-w-5xl w-full h-full flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[selectedImg].url}
                                alt={images[selectedImg].title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="text-white text-center mt-6">
                                <h4 className="text-2xl font-bold">{images[selectedImg].title}</h4>
                                <p className="text-lg opacity-80">{images[selectedImg].description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PhotoGallery;
