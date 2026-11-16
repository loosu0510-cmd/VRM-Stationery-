import {
  ArrowUpRight,
  BookOpen,
  Gift,
  Palette,
  PenTool,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { CATEGORIES, type CategoryId } from '../data/catalog';
import { SafeImage } from './SafeImage';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

const CATEGORY_ICONS: Record<CategoryInfoId, typeof PenTool> = {
  stationery: PenTool,
  'notebooks-art': Palette,
  'occasion-gifts': Gift,
  'gift-decor': Sparkles,
  sports: Trophy,
  'school-materials': BookOpen,
};

type CategoryInfoId = (typeof CATEGORIES)[number]['id'];

export function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  const handleCategoryClick = (categoryId: CategoryInfoId) => {
    onSelectCategory(categoryId);
    const galleryEl = document.getElementById('products');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="categories"
      className="border-b border-zinc-200 bg-[#FAFAF9] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-700">What We Carry</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl [text-wrap:balance]">
            Six Essential Aisles Under One Roof
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
            Browse our core product departments. Select any category to explore featured items in
            our gallery.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryClick(category.id)}
                className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-zinc-100 bg-zinc-100">
                  <SafeImage
                    src={category.image}
                    alt={category.imageAlt}
                    fallbackLabel={category.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${category.accentSurface} ${category.accentColor}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-700"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">
                    {category.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                    {category.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-zinc-100 pt-3 text-xs font-medium text-zinc-500">
                    {category.highlights.map((item, idx) => (
                      <span key={item} className="inline-flex items-center gap-2">
                        {idx > 0 && (
                          <span aria-hidden="true" className="text-zinc-300">
                            ·
                          </span>
                        )}
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
