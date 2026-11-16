import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold text-white">
              {BUSINESS_INFO.name}
            </p>
            <p className="mt-1 text-sm font-medium text-blue-400">
              {BUSINESS_INFO.branch}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              {BUSINESS_INFO.street}, {BUSINESS_INFO.locality}, {BUSINESS_INFO.region}.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#categories" className="hover:text-white hover:underline">
                  Product Categories
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:underline">
                  Product Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white hover:underline">
                  Store Location
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Direct Contact
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.telHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white tabular-nums hover:text-blue-300"
              >
                <Phone className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 w-fit items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.branch}).
          </p>
          <p>Sothupakkam – 603319, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
