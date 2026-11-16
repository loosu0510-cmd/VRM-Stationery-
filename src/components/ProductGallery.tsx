import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import {
  CATEGORIES,
  PRODUCTS,
  buildWhatsAppProductUrl,
  type CategoryId,
  type ProductItem,
} from '../data/catalog';
import { SafeImage } from './SafeImage';

interface ProductGalleryProps {
  selectedCategory: CategoryId;
  onSelectCategory: (categoryId: CategoryId) => void;
}

const FILTER_OPTIONS: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Products' },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.shortLabel })),
];

export function ProductGallery({
  selectedCategory,
  onSelectCategory,
}: ProductGalleryProps) {
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.categoryId === selectedCategory);

  useEffect(() => {
    if (!activeProduct) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProduct]);

  return (
    <section id="products" className="border-b border-zinc-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700">Product Gallery</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl [text-wrap:balance]">
              Browse Stationery, Gifts &amp; Sports Gear
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              Filter by category or select any item to view details and check stock availability on
              WhatsApp.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter products by category"
            className="flex items-center gap-1 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-100 p-1"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = selectedCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCategory(option.id)}
                  className={`min-h-10 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                    isSelected
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-[#FAFAF9] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setActiveProduct(product)}
                className="aspect-[4/3] w-full overflow-hidden border-b border-zinc-200 bg-zinc-100 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <SafeImage
                  src={product.image}
                  alt={product.imageAlt}
                  fallbackLabel={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {product.categoryLabel}
                </p>

                <h3 className="mt-1.5 font-display text-lg font-semibold text-zinc-900">
                  <button
                    type="button"
                    onClick={() => setActiveProduct(product)}
                    className="text-left hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    {product.name}
                  </button>
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-200 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveProduct(product)}
                    className="min-h-10 text-sm font-semibold text-zinc-900 underline-offset-4 hover:text-blue-700 hover:underline whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    View Details
                  </button>

                  <a
                    href={buildWhatsAppProductUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-800 whitespace-nowrap shrink-0 transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              aria-label="Close product details"
              className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-[4/3] w-full bg-zinc-100">
              <SafeImage
                src={activeProduct.image}
                alt={activeProduct.imageAlt}
                fallbackLabel={activeProduct.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {activeProduct.categoryLabel}
              </p>
              <h3
                id="product-modal-title"
                className="mt-1 font-display text-2xl font-bold text-zinc-900"
              >
                {activeProduct.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {activeProduct.description}
              </p>

              <ul className="mt-4 space-y-1.5 border-t border-zinc-100 pt-4 text-sm text-zinc-700">
                {activeProduct.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="text-blue-700" aria-hidden="true">
                      ·
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppProductUrl(activeProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Check Availability on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProduct(null)}
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 whitespace-nowrap transition-colors hover:bg-zinc-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
