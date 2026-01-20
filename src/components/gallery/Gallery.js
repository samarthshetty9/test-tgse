'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
    { src: '/gallery/DSC_7167.JPG', alt: 'School Event 1' },
    { src: '/gallery/DSC_8067.JPG', alt: 'School Event 2' },
    { src: '/gallery/DSC_8073.JPG', alt: 'School Event 3' },
    { src: '/gallery/DSC_8077.JPG', alt: 'School Event 4' },
    { src: '/gallery/IMG-20191221-WA0050.jpg', alt: 'School Activity 1' },
    { src: '/gallery/IMG-20200204-WA0019.jpg', alt: 'School Activity 2' },
    { src: '/gallery/IMG20190919122136.jpg', alt: 'Campus Life 1' },
    { src: '/gallery/IMG20191214112557.jpg', alt: 'Campus Life 2' },
    { src: '/gallery/IMG_20190711_145936.jpg', alt: 'Student Activities 1' },
    { src: '/gallery/IMG_20190713_121529.jpg', alt: 'Student Activities 2' },
    { src: '/gallery/IMG_20190720_115815.jpg', alt: 'Student Activities 3' },
    { src: '/gallery/WhatsApp Image 2026-01-19 at 2.11.11 PM.jpeg', alt: 'School Moment 1' },
    { src: '/gallery/WhatsApp Image 2026-01-19 at 2.11.15 PM (1).jpeg', alt: 'School Moment 2' },
    { src: '/1.jpeg', alt: 'School Photo 1' },
    { src: '/2.jpeg', alt: 'School Photo 2' },
    { src: '/3.jpg', alt: 'School Photo 3' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-8">

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-2xl transition-all duration-300 animate-scale-in`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-[#5D1528]/0 group-hover:bg-[#5D1528]/30 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-[#F3D03E] transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
