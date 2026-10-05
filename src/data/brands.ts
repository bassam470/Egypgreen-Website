import type { BrandId, Category, L10n } from "./products/types";

export interface Brand {
  id: BrandId;
  name: string;
  country: L10n;
  logo: string;
  category: Category;
  line: L10n;
  about: L10n;
  website: string;
}

export const brands: Brand[] = [
  {
    id: "tormac",
    name: "Tormac",
    country: { ar: "الهند", en: "India" },
    logo: "/images/brands/tormac.png",
    category: "pumps",
    line: { ar: "طلمبات غاطسة استانلس ستيل (TS) ومواتير غاطسة (ECO)", en: "Stainless-steel submersible pumps (TS) and submersible motors (ECO)" },
    about: {
      ar: "شركة هندية متخصصة في طلمبات ومواتير الآبار الغاطسة. نوزع منها سلسلة TS للطلمبات من 4 إلى 10 بوصة، وسلسلة ECO للمواتير القابلة لإعادة اللف حتى 150 حصان.",
      en: "An Indian manufacturer focused on borehole submersible pumps and motors. We distribute its TS pump series from 4 to 10 inches and its rewindable ECO motor series up to 150 HP.",
    },
    website: "",
  },
  {
    id: "astral",
    name: "Astral",
    country: { ar: "الهند", en: "India" },
    logo: "/images/brands/astral.png",
    category: "pipes",
    line: { ar: "مواسير أعمدة uPVC للآبار، سلسلة Bore-Well", en: "Bore-Well uPVC column pipes" },
    about: {
      ar: "من أكبر مصنعي أنظمة المواسير البلاستيك في الهند منذ 1996. نوزع منها مواسير Bore-Well الخالية من الرصاص، التي تحمل الطلمبة الغاطسة داخل البئر.",
      en: "One of India's largest plastic piping manufacturers, founded in 1996. We distribute its lead-free Bore-Well column pipes, which carry the submersible pump inside the well.",
    },
    website: "",
  },
  {
    id: "longi",
    name: "LONGi",
    country: { ar: "الصين", en: "China" },
    logo: "/images/brands/longi.png",
    category: "solar",
    line: { ar: "ألواح شمسية أحادية البلورة، 7 موديلات", en: "Monocrystalline solar panels, 7 models" },
    about: {
      ar: "من أكبر مصنعي الألواح الشمسية أحادية البلورة في العالم. نوزع 7 موديلات من سلاسل Hi-MO للأسطح والمحطات الأرضية ومشروعات الري.",
      en: "One of the world's largest makers of monocrystalline solar panels. We distribute 7 models from its Hi-MO series for rooftops, ground-mounted plants and irrigation projects.",
    },
    website: "",
  },
];

export const brandById = (id: BrandId) => brands.find((b) => b.id === id)!;
