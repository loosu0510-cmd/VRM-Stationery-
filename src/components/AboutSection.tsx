import { BookOpen, Gift, Trophy } from 'lucide-react';
import { BUSINESS_INFO } from '../data/catalog';
import { SafeImage } from './SafeImage';

const STORE_PILLARS = [
  {
    icon: BookOpen,
    title: 'Stationery & Study Needs',
    description:
      'From everyday notebooks, pens, and pencils to school bags, geometry sets, and office files for daily work and exams.',
  },
  {
    icon: Gift,
    title: 'Gifts & Decorative Items',
    description:
      'Birthday presents, greeting cards, wrapping supplies, photo frames, and decorative keepsakes ready for every celebration.',
  },
  {
    icon: Trophy,
    title: 'Sports & Active Play',
    description:
      'Cricket bats and balls, badminton rackets, shuttlecocks, footballs, and accessories for students and local players.',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-zinc-200 bg-[#FAFAF9] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-semibold text-blue-700">About Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl [text-wrap:balance]">
              Your Neighborhood Retail Store in Sothupakkam
            </h2>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              {BUSINESS_INFO.name} ({BUSINESS_INFO.branch}) is a local retail destination conveniently
              located on {BUSINESS_INFO.street}, {BUSINESS_INFO.locality}. We bring together
              essential stationery, thoughtful gift collections, and dependable sports gear in one
              welcoming shop.
            </p>

            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              Whether you are preparing a student’s school checklist, restocking office desks,
              picking up a birthday gift, or gearing up for an evening game, our team is ready to
              help you find what you need quickly and easily.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-3">
              {STORE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title}>
                    <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <h3 className="mt-2.5 font-display text-base font-semibold text-zinc-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid h-full grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <SafeImage
                  src="/src/assets/images/product_stationery_pens_1794843202575.jpg"
                  alt="Neatly arranged stationery, pens, folders, and notebooks"
                  fallbackLabel="Stationery & Study Essentials"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <SafeImage
                  src="/src/assets/images/product_birthday_gifts_1794843203295.jpg"
                  alt="Colorful wrapped birthday gifts and greeting cards"
                  fallbackLabel="Birthday & Occasion Gifts"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <SafeImage
                  src="/src/assets/images/product_sports_equipment_1794843205456.jpg"
                  alt="Cricket bat, cricket ball, badminton rackets, shuttlecocks, and football"
                  fallbackLabel="Sports Equipment & Accessories"
                  className="aspect-[16/9] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
