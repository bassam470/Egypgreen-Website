import raw from "../../../data/solar-panels-longi.json";
import type { L10n, Product, SpecTable } from "./types";

/**
 * LONGi solar panels: one product with 7 models. Every figure comes from
 * data/solar-panels-longi.json, transcribed from LONGi's datasheets.
 */
type Model = (typeof raw.products)[number] & { bifaciality?: string };
const models = raw.products as Model[];

/** Where each model fits best, from its size, glass and LONGi's own market note. */
const USE: Record<string, L10n> = {
  "longi-hi-mo-x10-lr7-72hvh": { ar: "أسطح كبيرة ومشروعات تجارية", en: "Large rooftops and commercial projects" },
  "longi-hi-mo-x10-lr7-60hvd": { ar: "أسطح ومحطات أرضية", en: "Rooftops and ground-mounted arrays" },
  "longi-hi-mo-x10-lr7-54hvd": { ar: "أسطح المنازل والمساحات المحدودة", en: "Home rooftops and tight spaces" },
  "longi-hi-mo-x6-lr7-72hth": { ar: "أسطح ومنازل ومشروعات تجارية", en: "Rooftops, homes and commercial" },
  "longi-hi-mo-7-lr8-66hgd": { ar: "محطات أرضية كبيرة وري زراعي", en: "Large ground plants and farm pumping" },
  "longi-hi-mo-7-lr7-54hgbb": { ar: "أسطح المنازل، شكل أسود بالكامل", en: "Home rooftops, all-black look" },
  "longi-hi-mo-5-lr5-72hbd": { ar: "محطات أرضية كبيرة وري زراعي", en: "Large ground plants and farm pumping" },
};

const yesNo = (b: boolean): L10n => (b ? { ar: "نعم", en: "Yes" } : { ar: "لا", en: "No" });
const dims = (d: number[]) => `${d[0]} × ${d[1]} × ${d[2]}`;
const watts = (m: Model) => `${m.power_range_w[0]} – ${m.power_range_w[1]}`;
const modelName = (m: Model) => `${m.series} · ${m.model}`;
const imageOf = (m: Model) => `/images/products/longi/${m.slug}.webp`;

const glass = (m: Model): L10n =>
  m.glass.startsWith("Dual")
    ? { ar: `زجاج مزدوج ${m.glass.match(/[\d.]+\+[\d.]+ mm/)?.[0].replace("mm", "مم") ?? ""}`.trim(), en: m.glass }
    : { ar: "زجاج واحد 3.2 مم مقسّى", en: m.glass };

const comparison: SpecTable = {
  id: "models",
  title: { ar: "مقارنة الموديلات السبعة", en: "The 7 models compared" },
  columns: [
    { ar: "الموديل", en: "Model" },
    { ar: "القدرة (وات)", en: "Power (W)" },
    { ar: "أقصى كفاءة", en: "Max efficiency" },
    { ar: "خلايا", en: "Cells" },
    { ar: "ثنائي الوجه", en: "Bifacial" },
    { ar: "الأبعاد (مم)", en: "Size (mm)" },
    { ar: "الوزن (كجم)", en: "Weight (kg)" },
    { ar: "ضمان المنتج / الأداء", en: "Product / performance warranty" },
    { ar: "الاستخدام الأنسب", en: "Best for" },
  ],
  rowHeads: true,
  rows: models.map((m) => [
    modelName(m),
    watts(m),
    `${m.max_efficiency_pct}%`,
    String(parseInt(m.cells, 10)),
    m.bifacial ? { ar: `نعم (${m.bifaciality})`, en: `Yes (${m.bifaciality})` } : yesNo(false),
    dims(m.dimensions_mm),
    String(m.weight_kg),
    { ar: `${m.product_warranty_years} / ${m.performance_warranty_years} سنة`, en: `${m.product_warranty_years} / ${m.performance_warranty_years} years` },
    USE[m.slug],
  ]),
};

const common: SpecTable = {
  id: "common",
  title: { ar: "مواصفات مشتركة بين كل الموديلات", en: "Specifications shared by all models" },
  columns: [{ ar: "البند", en: "Item" }, { ar: "القيمة", en: "Value" }],
  rowHeads: true,
  rows: [
    [{ ar: "الإطار", en: "Frame" }, { ar: "ألومنيوم مؤكسد", en: "Anodised aluminium alloy" }],
    [{ ar: "صندوق التوصيل", en: "Junction box" }, "IP68"],
    [{ ar: "الكابل", en: "Cable" }, { ar: "4 مم²", en: "4 mm²" }],
    [{ ar: "أقصى جهد للنظام", en: "Max system voltage" }, "DC 1500 V"],
    [{ ar: "حرارة التشغيل", en: "Operating temperature" }, { ar: "−40 حتى +85°م", en: "−40 to +85 °C" }],
    [{ ar: "تفاوت القدرة", en: "Power tolerance" }, "0 ~ +3%"],
    [{ ar: "الحمل الأمامي / الخلفي", en: "Front / rear load" }, "5400 Pa / 2400 Pa"],
    [{ ar: "اختبار البَرَد", en: "Hail test" }, { ar: "حبة 25 مم بسرعة 23 م/ث", en: "25 mm at 23 m/s" }],
    [{ ar: "ظروف القياس القياسية", en: "Standard test conditions" }, { ar: "1000 وات/م²، 25°م، AM1.5", en: "1000 W/m², 25 °C, AM1.5" }],
    [{ ar: "الشهادات", en: "Certificates" }, "IEC 61215, IEC 61730"],
  ],
};

const perModel: SpecTable[] = models.map((m) => ({
  id: m.slug,
  title: { ar: `${modelName(m)}: ${watts(m)} وات`, en: `${modelName(m)}: ${watts(m)} W` },
  image: imageOf(m),
  collapsible: true,
  note: {
    ar: `${m.bifacial ? "ثنائي الوجه، " : ""}${glass(m).ar}، ${parseInt(m.cells, 10)} خلية، ${dims(m.dimensions_mm)} مم، ${m.weight_kg} كجم. معامل حرارة القدرة ${m.temp_coeff_pmax}%/°م، وتدهور أول سنة ${m.first_year_degradation_pct}% ثم ${m.annual_degradation_pct}% سنويًا.`,
    en: `${m.bifacial ? "Bifacial, " : ""}${m.glass}, ${parseInt(m.cells, 10)} cells, ${dims(m.dimensions_mm)} mm, ${m.weight_kg} kg. Pmax temperature coefficient ${m.temp_coeff_pmax}%/°C; degradation ${m.first_year_degradation_pct}% in year 1, then ${m.annual_degradation_pct}% a year.`,
  },
  columns: [
    { ar: "الموديل", en: "Model" },
    { ar: "القدرة Pmax (وات)", en: "Pmax (W)" },
    { ar: "Voc (فولت)", en: "Voc (V)" },
    { ar: "Isc (أمبير)", en: "Isc (A)" },
    { ar: "Vmp (فولت)", en: "Vmp (V)" },
    { ar: "Imp (أمبير)", en: "Imp (A)" },
    { ar: "الكفاءة %", en: "Efficiency %" },
  ],
  rowHeads: true,
  rows: m.variants.map((v) => [v.model, String(v.pmax_w), String(v.voc_v), String(v.isc_a), String(v.vmp_v), String(v.imp_a), String(v.efficiency_pct)]),
}));

const top = models.reduce((a, b) => (b.max_efficiency_pct > a.max_efficiency_pct ? b : a));
const minW = Math.min(...models.map((m) => m.power_range_w[0]));
const maxW = Math.max(...models.map((m) => m.power_range_w[1]));

export const longi: Product = {
  slug: "longi-solar-panels",
  category: "solar",
  brand: "longi",
  name: { ar: "ألواح LONGi الشمسية", en: "LONGi solar panels" },
  summary: {
    ar: `7 موديلات من LONGi بقدرات من ${minW} إلى ${maxW} وات وكفاءة تصل إلى ${top.max_efficiency_pct}%.`,
    en: `7 LONGi models from ${minW} to ${maxW} W, with efficiency up to ${top.max_efficiency_pct}%.`,
  },
  intro: {
    ar: [
      `نوفر 7 موديلات من ألواح LONGi أحادية البلورة من سلاسل Hi-MO X10 وHi-MO X6 وHi-MO 7 وHi-MO 5، بقدرات من ${minW} إلى ${maxW} وات للوح. منها ألواح بزجاج واحد للأسطح، وألواح ثنائية الوجه بزجاج مزدوج تلتقط الضوء المنعكس من الأرض في المحطات الأرضية.`,
      "اختر الموديل حسب المساحة المتاحة ونوع المشروع: الألواح المقاس 1800 مم تناسب أسطح المنازل، والألواح 2382 مم تقلل عدد الألواح والهياكل في المحطات الكبيرة ومشروعات الري بالطاقة الشمسية.",
    ],
    en: [
      `We supply 7 LONGi monocrystalline models from the Hi-MO X10, Hi-MO X6, Hi-MO 7 and Hi-MO 5 series, from ${minW} to ${maxW} W per panel. They include single-glass panels for rooftops and dual-glass bifacial panels that also catch light reflected from the ground in ground-mounted arrays.`,
      "Pick the model by the space available and the type of project: 1800 mm panels suit home rooftops, while 2382 mm panels cut the number of panels and mounting structures in large plants and solar irrigation projects.",
    ],
  },
  image: "/images/products/longi-panel-angle.webp",
  cardImage: "/images/products/longi-panel-angle-card.webp",
  gallery: [
    { src: "/images/products/longi-panel-angle.webp", alt: { ar: "لوح LONGi شمسي", en: "LONGi solar panel" } },
    { src: "/images/products/longi-panel-front.webp", alt: { ar: "لوح LONGi من الأمام", en: "LONGi panel, front view" } },
  ],
  keyFigures: [
    { value: { ar: "7 موديلات", en: "7 models" }, label: { ar: "4 سلاسل", en: "4 series" } },
    { value: { ar: `${minW} – ${maxW} وات`, en: `${minW} – ${maxW} W` }, label: { ar: "قدرة اللوح", en: "Panel power" } },
    { value: { ar: `حتى ${top.max_efficiency_pct}%`, en: `Up to ${top.max_efficiency_pct}%` }, label: { ar: "الكفاءة", en: "Efficiency" } },
    { value: { ar: "حتى 30 سنة", en: "Up to 30 years" }, label: { ar: "ضمان الأداء", en: "Performance warranty" } },
  ],
  cardSpecs: [
    { label: { ar: "الموديلات", en: "Models" }, value: { ar: "7 موديلات", en: "7 models" } },
    { label: { ar: "القدرة", en: "Power" }, value: { ar: `${minW} – ${maxW} وات`, en: `${minW} – ${maxW} W` } },
    { label: { ar: "الكفاءة", en: "Efficiency" }, value: { ar: `حتى ${top.max_efficiency_pct}%`, en: `Up to ${top.max_efficiency_pct}%` } },
  ],
  features: {
    ar: [
      `خلايا أحادية البلورة بكفاءة تصل إلى ${top.max_efficiency_pct}% في سلسلة Hi-MO X10.`,
      "خلايا نصفية تقلل الفقد الحراري وتأثير الظل الجزئي.",
      "موديلات ثنائية الوجه تضيف إنتاجًا من الضوء المنعكس على الوجه الخلفي.",
      "ضمان أداء 25 إلى 30 سنة حسب الموديل.",
      "إطار ألومنيوم يتحمل 5400 باسكال على الوجه الأمامي.",
      "صندوق توصيل IP68 مقاوم للمياه والأتربة.",
      "معتمدة حسب IEC 61215 وIEC 61730.",
    ],
    en: [
      `Monocrystalline cells with efficiency up to ${top.max_efficiency_pct}% in the Hi-MO X10 series.`,
      "Half-cut cells reduce resistive loss and the effect of partial shade.",
      "Bifacial models add yield from light reflected onto the rear face.",
      "25 to 30 year performance warranty depending on model.",
      "Aluminium frame rated for 5400 Pa on the front face.",
      "IP68 junction box sealed against water and dust.",
      "Certified to IEC 61215 and IEC 61730.",
    ],
  },
  overview: comparison,
  tables: [common, ...perModel],
  selector: {
    groupLabel: { ar: "الموديل", en: "Model" },
    optionLabel: { ar: "القدرة", en: "Power" },
    groups: models.map((m) => ({
      value: m.model,
      label: { ar: `${modelName(m)} (${watts(m)} وات)`, en: `${modelName(m)} (${watts(m)} W)` },
      options: m.variants.map((v) => ({
        value: v.model,
        label: { ar: `${v.pmax_w} وات`, en: `${v.pmax_w} W` },
        detail: { ar: `${v.model} · كفاءة ${v.efficiency_pct}%`, en: `${v.model} · ${v.efficiency_pct}% efficiency` },
      })),
    })),
  },
  catalogs: models.map((m) => `longi-${m.model.toLowerCase()}`),
  applications: ["agriculture", "homes", "industry", "solar-pumping"],
  related: ["tormac-ts-submersible-pumps", "tormac-eco-submersible-motors"],
};
