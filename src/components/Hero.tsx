import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_INFO } from '../data/catalog';
import { SafeImage } from './SafeImage';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <div className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-zinc-600">
              <span className="text-blue-700 font-semibold">{BUSINESS_INFO.branch}</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span>Sothupakkam – 603319</span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] [text-wrap:balance]">
              {BUSINESS_INFO.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-zinc-800 sm:text-xl">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600">
              Find school and office stationery, notebooks, pens, art supplies, birthday and special
              occasion gifts, decorative products, and sports equipment all in one neighborhood
              store on Cheyyur Road.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Store Location
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-800">
                    {BUSINESS_INFO.street}, {BUSINESS_INFO.locality}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Call or WhatsApp
                  </p>
                  <a
                    href={BUSINESS_INFO.telHref}
                    className="mt-0.5 inline-block text-sm font-semibold text-zinc-900 tabular-nums hover:text-blue-700 hover:underline"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <SafeImage
                src={BUSINESS_INFO.heroImage}
                alt="Display shelves at VRM Stationery, Gifts & Sports featuring colorful notebooks, pens, wrapped birthday gifts, and sports equipment"
                fallbackLabel="VRM Stationery, Gifts & Sports"
                className="aspect-[16/10] w-full object-cover lg:h-full lg:aspect-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
