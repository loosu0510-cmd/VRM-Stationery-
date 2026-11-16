import { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';

export function ContactLocationSection() {
  const [copiedField, setCopiedField] = useState<'phone' | 'address' | null>(null);

  const handleCopy = async (text: string, field: 'phone' | 'address') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2000);
    } catch {
      // Clipboard API may be restricted in some environments; links remain directly clickable.
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-700">Visit &amp; Contact</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl [text-wrap:balance]">
            Visit {BUSINESS_INFO.branch} in Sothupakkam
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
            Call or message us on WhatsApp to enquire about product availability, bulk stationery
            orders, or gift items, or visit our shop near the railway gate on Cheyyur Road.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-[#FAFAF9] p-6 sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Business &amp; Branch
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-zinc-900">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-blue-700">
                  {BUSINESS_INFO.branch}
                </p>
              </div>

              <div className="border-t border-zinc-200 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Shop Address
                      </p>
                      <address className="mt-1 not-italic text-sm leading-relaxed text-zinc-800">
                        {BUSINESS_INFO.street}
                        <br />
                        {BUSINESS_INFO.locality}
                        <br />
                        {BUSINESS_INFO.region}
                      </address>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_INFO.fullAddress, 'address')}
                    aria-label="Copy shop address"
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Contact Number
                      </p>
                      <a
                        href={BUSINESS_INFO.telHref}
                        className="mt-1 inline-block text-lg font-bold text-zinc-900 tabular-nums hover:text-blue-700 hover:underline"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(BUSINESS_INFO.phoneDisplay, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row">
              <a
                href={BUSINESS_INFO.telHref}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div
            id="location"
            className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 lg:col-span-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-white px-5 py-3.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
                <span>Cheyyur Road (Near Railway Gate), Sothupakkam – 603319</span>
              </div>

              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline whitespace-nowrap shrink-0"
              >
                Open in Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="relative min-h-[340px] flex-1 bg-zinc-100 sm:min-h-[400px]">
              <iframe
                title="Google Map showing Cheyyur Road, Near Railway Gate, Sothupakkam – 603319"
                src={BUSINESS_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full border-0 sm:min-h-[400px]"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
