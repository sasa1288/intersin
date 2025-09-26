import Image from 'next/image';
import { getHeroInfo } from '@/lib/get-hero-section';

export const Hero = async () => {
  const { hero } = await getHeroInfo();

  return (
    <section className="relative bg-white pt-16 pb-0 min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={`${process.env.STRAPI_HOST}${hero.heroImg.url}`}
          alt="hero_cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="max-w-xl space-y-6 md:space-y-8 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A3CA4] leading-tight">
            {/* <BlocksRenderer content={title} /> */}
            Internet a <span className="italic">máxima velocidad</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#8B7BEA]">
            ¡Tu Internet Ideal! Internet más{' '}
            <span className="italic">rápido</span> para todos sus dispositivos
          </h2>
          <a
            href="#contratar"
            className="inline-block bg-[#F94D6A] text-white font-bold text-base md:text-lg py-4 px-10 rounded-full shadow-lg hover:bg-[#d93e5c] transition mb-3"
          >
            CONTRATAR AHORA <span className="ml-2 text-xl">➔</span>
          </a>
          <div className="mt-2 text-base space-y-1">
            <div>
              <strong>LLÁMANOS AHORA</strong>
            </div>
            <div>
              AL{' '}
              <span className="text-[#F94D6A] font-semibold">
                (800) 953-0600
              </span>
            </div>
            <div>PARA OBTENER UN SERVICIO MÁS RÁPIDO</div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative md:-right-16 min-w-[320px] md:min-w-[420px] h-[340px] md:h-[520px] flex items-center mt-10 md:mt-0">
          <img
            src={`${process.env.STRAPI_HOST}${hero.heroImg.url}`}
            alt="hero_cover"
          />
        </div>
      </div>
    </section>
  );
};
