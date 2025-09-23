'use client';

import Image from 'next/image';
import { useCallback } from 'react';

export default function Hero() {
  const scrollToBooking = useCallback(() => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20" style={{background: 'linear-gradient(135deg, var(--hero-gradient-start) 0%, var(--hero-gradient-middle) 50%, var(--hero-gradient-end) 100%)'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 ml-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Winchester Therapy Services LLC
            </h1>
            <h2 className="text-2xl lg:text-3xl text-white/95">
              Renew Your Mind, Heal Your Soul
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Welcome to a therapy experience designed just for you. I&apos;m Michael Ellis, LCSW, 
              committed to helping you broaden your perspective and discover peace and purpose 
              as you move forward in your life.
            </p>
            <button
              onClick={scrollToBooking}
              className="px-6 py-3 rounded-lg transition-all duration-300 font-medium text-white cursor-pointer hover:transform hover:-translate-y-1 hero-cta-button"
            >
              Learn More
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Boat_on_lake.jpg"
              alt="Peaceful therapy environment"
              width={750}
              height={456}
              className="rounded-lg shadow-lg"
              priority
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHw8f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEH4Q6LdGuFVHzTVEsN7xXPDQVdBJN1OGdR5rwrN4RZP8AhGWz5cL7/t1wJqoePRVZENcMp1gN0NjCDqxC8/ZOAeOONOW1QKiRTdmQJ6z7ZTNm+dOqIYWWJyTcPmQ+yJWmBnkfI3U/RXfwP//Z"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, (max-width: 1024px) 600px, 750px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}