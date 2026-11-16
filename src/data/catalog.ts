export type CategoryId =
  | 'all'
  | 'stationery'
  | 'notebooks-art'
  | 'occasion-gifts'
  | 'gift-decor'
  | 'sports'
  | 'school-materials';

export interface CategoryInfo {
  id: Exclude<CategoryId, 'all'>;
  title: string;
  shortLabel: string;
  description: string;
  highlights: string[];
  accentColor: string;
  accentSurface: string;
  image: string;
  imageAlt: string;
}

export interface ProductItem {
  id: string;
  name: string;
  categoryId: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
}

export const BUSINESS_INFO = {
  name: 'VRM Stationery, Gifts & Sports',
  branch: 'VRM Second Branch',
  tagline: 'Your Everyday Destination for Stationery, Gifts & Sports',
  street: 'Cheyyur Road (Near Railway Gate)',
  locality: 'Sothupakkam – 603319',
  region: 'Tamil Nadu, India',
  fullAddress: 'Cheyyur Road (Near Railway Gate), Sothupakkam – 603319, Tamil Nadu, India',
  phoneDisplay: '9790586876',
  phoneFormatted: '+91 97905 86876',
  telHref: 'tel:+919790586876',
  whatsappHref: 'https://wa.me/919790586876',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Cheyyur+Road,+Sothupakkam,+603319,+Tamil+Nadu,+India&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cheyyur+Road+Near+Railway+Gate+Sothupakkam+603319+Tamil+Nadu+India',
  heroImage: '/src/assets/images/hero_vrm_showcase_1794843201837.jpg',
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'stationery',
    title: 'School and Office Stationery',
    shortLabel: 'School & Office',
    description:
      'Essential desk tools, document folders, staplers, adhesives, and daily writing supplies for classrooms and workplaces.',
    highlights: ['Files & Folders', 'Desk Organizers', 'Staplers & Clips'],
    accentColor: 'text-blue-700',
    accentSurface: 'bg-blue-50',
    image: '/src/assets/images/product_stationery_pens_1794843202575.jpg',
    imageAlt: 'School and office stationery items including pens, spiral notebook, stapler, and folders',
  },
  {
    id: 'notebooks-art',
    title: 'Notebooks, Pens, Pencils & Art Supplies',
    shortLabel: 'Notebooks & Art',
    description:
      'Ruled and unruled notebooks, smooth-writing pens, graphite and colored pencils, sketchbooks, watercolors, and brushes.',
    highlights: ['Ruled Notebooks', 'Gel & Ball Pens', 'Paints & Sketchbooks'],
    accentColor: 'text-amber-700',
    accentSurface: 'bg-amber-50',
    image: '/src/assets/images/product_notebooks_art_1794843203684.jpg',
    imageAlt: 'Colorful hardcover notebooks, colored pencils, watercolor palette, and paintbrushes',
  },
  {
    id: 'occasion-gifts',
    title: 'Birthday and Special Occasion Gifts',
    shortLabel: 'Occasion Gifts',
    description:
      'Thoughtful birthday presents, greeting cards, gift bags, wrapping paper, and celebratory hampers for memorable milestones.',
    highlights: ['Birthday Presents', 'Greeting Cards', 'Gift Wrapping'],
    accentColor: 'text-rose-700',
    accentSurface: 'bg-rose-50',
    image: '/src/assets/images/product_birthday_gifts_1794843203295.jpg',
    imageAlt: 'Colorful wrapped birthday gift boxes with satin ribbons, gift bags, and greeting cards',
  },
  {
    id: 'gift-decor',
    title: 'Gift Items and Decorative Products',
    shortLabel: 'Gifts & Decor',
    description:
      'Elegant tabletop showpieces, photo frames, decorative vases, and keepsake accents suited for homes and festive gifting.',
    highlights: ['Photo Frames', 'Tabletop Showpieces', 'Home Accents'],
    accentColor: 'text-teal-700',
    accentSurface: 'bg-teal-50',
    image: '/src/assets/images/product_decorative_items_1794843203642.jpg',
    imageAlt: 'Ceramic decorative vase, wooden photo frame, miniature bird showpiece, and candle holder',
  },
  {
    id: 'sports',
    title: 'Sports Equipment and Accessories',
    shortLabel: 'Sports Gear',
    description:
      'Cricket bats and balls, badminton rackets and shuttlecocks, footballs, grips, and outdoor play essentials for all ages.',
    highlights: ['Cricket & Football', 'Badminton Sets', 'Sports Accessories'],
    accentColor: 'text-emerald-700',
    accentSurface: 'bg-emerald-50',
    image: '/src/assets/images/product_sports_equipment_1794843205456.jpg',
    imageAlt: 'Wooden cricket bat, red cricket ball, two badminton rackets with shuttlecocks, and football',
  },
  {
    id: 'school-materials',
    title: 'School Supplies and Educational Materials',
    shortLabel: 'School & Study',
    description:
      'Complete student checklists featuring school bags, geometry compass boxes, exam clipboards, scales, and learning aids.',
    highlights: ['Geometry Boxes', 'School Backpacks', 'Exam Clipboards'],
    accentColor: 'text-indigo-700',
    accentSurface: 'bg-indigo-50',
    image: '/src/assets/images/product_school_supplies_1794843204612.jpg',
    imageAlt: 'School backpack, geometry box, exam clipboard, rulers, exercise books, and desk globe',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'office-desk-stationery',
    name: 'Office Desk & Filing Essentials',
    categoryId: 'stationery',
    categoryLabel: 'School and Office Stationery',
    description:
      'Everyday office files, document folders, heavy-duty staplers, sticky notes, and desk organizers for tidy workspaces.',
    details: ['Document & project folders', 'Staplers, pins & paper clips', 'Tape dispensers & sticky notes'],
    image: '/src/assets/images/product_stationery_pens_1794843202575.jpg',
    imageAlt: 'Office stationery set with spiral notebook, folders, stapler, and desk organizer',
  },
  {
    id: 'everyday-writing-pens',
    name: 'Everyday Gel & Ballpoint Pen Collection',
    categoryId: 'stationery',
    categoryLabel: 'School and Office Stationery',
    description:
      'Reliable smooth-flow ballpoint pens, fine-tip gel pens, markers, and correction supplies suited for daily notes.',
    details: ['Blue, black & colored inks', 'Refillable & grip-friendly barrels', 'Markers & highlighters'],
    image: '/src/assets/images/hero_vrm_showcase_1794843201837.jpg',
    imageAlt: 'Display shelves of assorted pens, colorful notebooks, gifts, and sports gear',
  },
  {
    id: 'hardcover-spiral-notebooks',
    name: 'Ruled, Unruled & Hardcover Notebooks',
    categoryId: 'notebooks-art',
    categoryLabel: 'Notebooks, Pens, Pencils & Art Supplies',
    description:
      'Durable long-size notebooks, spiral pads, and neat cloth-bound journals for schoolwork, college notes, and personal planning.',
    details: ['Single-ruled & unruled pages', 'Spiral & stitched bindings', 'Multiple sizes & cover colors'],
    image: '/src/assets/images/product_notebooks_art_1794843203684.jpg',
    imageAlt: 'Stack of colorful hardcover notebooks beside sketchbook and art supplies',
  },
  {
    id: 'creative-art-supplies',
    name: 'Pencils, Sketchbooks & Watercolor Kits',
    categoryId: 'notebooks-art',
    categoryLabel: 'Notebooks, Pens, Pencils & Art Supplies',
    description:
      'Drawing pencils, vibrant color pencil sets, thick-paper sketchbooks, watercolor cakes, and fine paintbrushes for young artists.',
    details: ['120 GSM drawing sketchbooks', 'Colored pencil & crayon packs', 'Watercolor palettes & brushes'],
    image: '/src/assets/images/product_notebooks_art_1794843203684.jpg',
    imageAlt: 'Colored pencils, watercolor paint tin, brushes, eraser, and sketchbook',
  },
  {
    id: 'birthday-gift-boxes',
    name: 'Birthday Gift Boxes & Wrapping Sets',
    categoryId: 'occasion-gifts',
    categoryLabel: 'Birthday and Special Occasion Gifts',
    description:
      'Vibrant gift bags, satin ribbons, decorative gift boxes, and printed birthday cards ready for memorable celebrations.',
    details: ['Patterned gift wraps & bags', 'Satin ribbons & gift tags', 'Birthday & occasion greeting cards'],
    image: '/src/assets/images/product_birthday_gifts_1794843203295.jpg',
    imageAlt: 'Wrapped birthday gift boxes with satin bows, gift bags, and celebration cards',
  },
  {
    id: 'special-occasion-hampers',
    name: 'Special Occasion Celebration Hampers',
    categoryId: 'occasion-gifts',
    categoryLabel: 'Birthday and Special Occasion Gifts',
    description:
      'Curated gift combinations paired with greeting cards and festive packaging for anniversaries, return gifts, and family events.',
    details: ['Ready-to-gift box packaging', 'Custom card pairing available', 'Suited for kids & adults'],
    image: '/src/assets/images/product_birthday_gifts_1794843203295.jpg',
    imageAlt: 'Festive special occasion gift packages with colorful wrapping and greeting cards',
  },
  {
    id: 'wooden-photo-frames',
    name: 'Classic Photo Frames & Keepsakes',
    categoryId: 'gift-decor',
    categoryLabel: 'Gift Items and Decorative Products',
    description:
      'Tasteful tabletop photo frames and miniature keepsakes designed to display cherished family memories and milestone moments.',
    details: ['Tabletop & shelf display frames', 'Natural wood-tone & modern finishes', 'Ideal housewarming gift choice'],
    image: '/src/assets/images/product_decorative_items_1794843203642.jpg',
    imageAlt: 'Wooden tabletop photo frame beside ceramic vase and decorative bird showpiece',
  },
  {
    id: 'home-decorative-showpieces',
    name: 'Decorative Vases & Tabletop Accents',
    categoryId: 'gift-decor',
    categoryLabel: 'Gift Items and Decorative Products',
    description:
      'Handpicked ceramic vases, candle holders, and compact tabletop showpieces that brighten living rooms and study desks.',
    details: ['Ceramic vases & candle holders', 'Compact sculptural showpieces', 'Easy-to-wrap giftable pieces'],
    image: '/src/assets/images/product_decorative_items_1794843203642.jpg',
    imageAlt: 'Ceramic vase with dried botanicals, speckled candle holder, and wooden frame',
  },
  {
    id: 'cricket-outdoor-gear',
    name: 'Cricket Bats, Balls & Match Accessories',
    categoryId: 'sports',
    categoryLabel: 'Sports Equipment and Accessories',
    description:
      'Sturdy willow cricket bats with cushioned grips, leather and tennis cricket balls, and essential pitch accessories.',
    details: ['Junior & full-size cricket bats', 'Leather & tennis cricket balls', 'Bat grips & outdoor play gear'],
    image: '/src/assets/images/product_sports_equipment_1794843205456.jpg',
    imageAlt: 'Wooden cricket bat with green grip beside red leather cricket ball',
  },
  {
    id: 'badminton-football-gear',
    name: 'Badminton Rackets, Shuttles & Footballs',
    categoryId: 'sports',
    categoryLabel: 'Sports Equipment and Accessories',
    description:
      'Lightweight badminton rackets, durable feather and nylon shuttlecocks, and stitched footballs for evening practice and school play.',
    details: ['Balanced badminton rackets', 'Shuttlecock tubes', 'Training & match footballs'],
    image: '/src/assets/images/product_sports_equipment_1794843205456.jpg',
    imageAlt: 'Pair of badminton rackets, shuttlecocks, and stitched football on clean floor',
  },
  {
    id: 'student-backpacks-geometry',
    name: 'School Backpacks, Geometry & Exam Pads',
    categoryId: 'school-materials',
    categoryLabel: 'School Supplies and Educational Materials',
    description:
      'Everyday school bags, precision metal geometry compass boxes, transparent exam clipboards, and wooden or steel rulers.',
    details: ['Spacious student backpacks', 'Complete geometry instrument sets', 'Exam clipboards & scales'],
    image: '/src/assets/images/product_school_supplies_1794843204612.jpg',
    imageAlt: 'Navy and grey school backpack with geometry box, exam clipboard, and rulers',
  },
  {
    id: 'educational-study-aids',
    name: 'Exercise Books & Educational Study Aids',
    categoryId: 'school-materials',
    categoryLabel: 'School Supplies and Educational Materials',
    description:
      'Subject-wise exercise notebooks, desk globes, charts, and classroom learning materials for primary and high school students.',
    details: ['Subject exercise notebooks', 'Desk globes & study charts', 'Classroom project materials'],
    image: '/src/assets/images/product_school_supplies_1794843204612.jpg',
    imageAlt: 'Subject exercise books, rulers, and educational desk globe on a study table',
  },
];

export function buildWhatsAppProductUrl(productName: string): string {
  const text = encodeURIComponent(
    `Hello VRM Stationery, Gifts & Sports (VRM Second Branch), I would like to enquire about availability for: ${productName}.`
  );
  return `${BUSINESS_INFO.whatsappHref}?text=${text}`;
}
