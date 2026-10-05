import type { Product } from "./types";
import { HP_TO_KW, hpLabel, inchLabel } from "./units";

/**
 * Tormac TS series stainless-steel submersible pumps.
 * Figures: Tormac "Submersible Pumps 50Hz" catalogue (operating limits on p.5
 * and the per-model performance tables). The power list stops at 150 HP, the
 * largest rating supplied.
 */
const HP_BY_BORE: Record<string, number[]> = {
  "4": [0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 5.5, 7.5, 10, 12.5, 15, 17.5],
  "6": [1, 2, 3, 4, 5, 5.5, 7.5, 10, 12.5, 15, 17.5, 20, 25, 30, 35, 40, 50, 60, 75, 85],
  "8": [7.5, 12.5, 15, 17.5, 20, 25, 30, 35, 40, 50, 60, 75, 85, 100, 125, 150],
  "10": [12.5, 15, 17.5, 20, 25, 30, 35, 40, 50, 60, 75, 85, 100, 125, 150],
};

const SERIES: Record<string, string> = { "4": "TS 100", "6": "TS 150", "8": "TS 200", "10": "TS 250" };

const range = (hps: number[]) => {
  const lo = hps[0], hi = hps[hps.length - 1];
  return { ar: `${lo} – ${hi} حصان`, en: `${lo} – ${hi} HP` };
};

export const tormacTs: Product = {
  slug: "tormac-ts-submersible-pumps",
  category: "pumps",
  brand: "tormac",
  name: { ar: "طلمبات Tormac الغاطسة استانلس ستيل، سلسلة TS", en: "Tormac TS stainless-steel submersible pumps" },
  summary: {
    ar: "طلمبات أعماق استانلس ستيل لآبار 4 و6 و8 و10 بوصة، بقدرات من 0.5 إلى 150 حصان.",
    en: "Stainless-steel borehole pumps for 4, 6, 8 and 10 inch wells, from 0.5 to 150 HP.",
  },
  intro: {
    ar: [
      "سلسلة TS من Tormac طلمبات غاطسة لآبار المياه الجوفية، مصنوعة كلها من الاستانلس ستيل: الجسم والمراوح والناشرات والعمود. الإصدار TS من درجة AISI 304، والإصدار TN من درجة AISI 316 للمياه عالية الملوحة.",
      "تغطي السلسلة 4 مقاسات آبار من 4 إلى 10 بوصة، بتصرف من 0.4 إلى 280 م³ في الساعة ورفع يصل إلى 870 مترًا. كل الطلمبات تعمل على 2900 لفة في الدقيقة وتُركَّب على أي موتور غاطس قياسي بنفس المقاس عن طريق وصلة NEMA.",
    ],
    en: [
      "The Tormac TS series are borehole submersible pumps built entirely from stainless steel: casing, impellers, diffusers and shaft. The TS version uses AISI 304, and the TN version uses AISI 316 for high-salinity water.",
      "The range covers 4 well sizes from 4 to 10 inches, with flow from 0.4 to 280 m³/h and head up to 870 m. Every pump runs at 2900 rpm and fits any standard submersible motor of the same size through a NEMA coupling.",
    ],
  },
  image: "/images/products/tormac-ts-pumps.webp",
  cardImage: "/images/products/tormac-ts-pumps-card.webp",
  keyFigures: [
    { value: { ar: "4 – 10 بوصة", en: "4 – 10 in" }, label: { ar: "مقاس البئر", en: "Well size" } },
    { value: { ar: "حتى 280 م³/س", en: "Up to 280 m³/h" }, label: { ar: "التصرف", en: "Flow" } },
    { value: { ar: "حتى 870 م", en: "Up to 870 m" }, label: { ar: "الرفع الكلي", en: "Total head" } },
    { value: { ar: "0.5 – 150 حصان", en: "0.5 – 150 HP" }, label: { ar: "القدرة", en: "Power" } },
  ],
  cardSpecs: [
    { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "4، 6، 8، 10 بوصة", en: "4, 6, 8, 10 in" } },
    { label: { ar: "الخامة", en: "Material" }, value: { ar: "استانلس 304 / 316", en: "AISI 304 / 316" } },
    { label: { ar: "التصرف", en: "Flow" }, value: { ar: "0.4 – 280 م³/س", en: "0.4 – 280 m³/h" } },
  ],
  features: {
    ar: [
      "استانلس ستيل في كل الأجزاء الملامسة للمياه، درجة 304 أو 316.",
      "كل مرحلة في غلاف مستقل، فيمكن تغيير مرحلة واحدة بدل الطلمبة كلها.",
      "محبس عدم رجوع داخل رأس الطلمبة، وفقده محسوب في منحنيات الأداء.",
      "تشغيل مستمر على 2900 لفة في الدقيقة وكهرباء 50 هرتز.",
      "تتحمل حتى 50 جرامًا من الرمل في كل متر مكعب.",
      "وصلة إسبلاين بمقاسات NEMA تناسب المواتير الغاطسة القياسية.",
      "أداء مختبر حسب المواصفة ISO 9906:2012 درجة 3B.",
    ],
    en: [
      "Stainless steel in every wetted part, grade 304 or 316.",
      "Each stage has its own casing, so a single stage can be replaced instead of the whole pump.",
      "Check valve built into the pump head, with its loss already counted in the performance curves.",
      "Continuous duty at 2900 rpm on a 50 Hz supply.",
      "Tolerates up to 50 g of sand per cubic metre.",
      "NEMA-dimension spline coupling that fits standard submersible motors.",
      "Performance tested to ISO 9906:2012 Grade 3B.",
    ],
  },
  overview: {
    id: "overview",
    title: { ar: "المواصفات العامة", en: "General specifications" },
    columns: [{ ar: "البند", en: "Item" }, { ar: "القيمة", en: "Value" }],
    rowHeads: true,
    rows: [
      [{ ar: "الإصدارات", en: "Versions" }, { ar: "TS (استانلس 304) و TN (استانلس 316)", en: "TS (AISI 304) and TN (AISI 316)" }],
      [{ ar: "مقاس البئر", en: "Well size" }, { ar: "4، 6، 8، 10 بوصة", en: "4, 6, 8, 10 in" }],
      [{ ar: "السرعة", en: "Speed" }, { ar: "2900 لفة/دقيقة", en: "2900 rpm" }],
      [{ ar: "التصرف", en: "Flow" }, { ar: "0.4 – 280 م³/ساعة", en: "0.4 – 280 m³/h" }],
      [{ ar: "الرفع الكلي", en: "Total head" }, { ar: "4 – 870 متر", en: "4 – 870 m" }],
      [{ ar: "أقصى ضغط تشغيل", en: "Max operating pressure" }, { ar: "حتى 85 بار", en: "Up to 85 bar" }],
      [{ ar: "وصلة العمود", en: "Shaft coupling" }, { ar: "إسبلاين، وخابور أو إسبلاين في مقاس 10 بوصة", en: "Splines; keyway or splines on 10 in" }],
      [{ ar: "أقصى حرارة للمياه", en: "Max water temperature" }, { ar: "35°م (جوان NBR)، 50°م (جوان Viton)", en: "35 °C (NBR seals), 50 °C (Viton seals)" }],
      [{ ar: "نسبة الرمل المسموحة", en: "Sand content" }, { ar: "حتى 50 جم/م³", en: "Up to 50 g/m³" }],
      [{ ar: "التركيب الأفقي", en: "Horizontal installation" }, { ar: "بميل 30 درجة على الأقل", en: "At least 30° incline" }],
    ],
  },
  tables: [
    {
      id: "limits",
      title: { ar: "حدود التشغيل حسب مقاس البئر", en: "Operating limits by well size" },
      note: {
        ar: "من كتالوج Tormac للطلمبات الغاطسة 50 هرتز. القدرات المعروضة حتى 150 حصان.",
        en: "From the Tormac submersible pumps 50 Hz catalogue. Powers listed up to 150 HP.",
      },
      columns: [
        { ar: "البند", en: "Item" },
        { ar: "4 بوصة", en: "4 in" },
        { ar: "6 بوصة", en: "6 in" },
        { ar: "8 بوصة", en: "8 in" },
        { ar: "10 بوصة", en: "10 in" },
      ],
      rowHeads: true,
      rows: [
        [{ ar: "السلسلة", en: "Series" }, "TS 100", "TS 150", "TS 200", "TS 250"],
        [{ ar: "القدرة", en: "Power" }, range(HP_BY_BORE["4"]), range(HP_BY_BORE["6"]), range(HP_BY_BORE["8"]), range(HP_BY_BORE["10"])],
        [{ ar: "التصرف (م³/س)", en: "Flow (m³/h)" }, "0.4 – 19", "7 – 120", "20 – 126", "18 – 280"],
        [{ ar: "الرفع الكلي (م)", en: "Total head (m)" }, "4 – 535", "4.5 – 870", "8 – 518", "6 – 488"],
        [{ ar: "مقاس الطرد (مم)", en: "Outlet (mm)" }, "32 / 40 / 50", "50 / 65 / 80 / 100", "100 / 125", "150"],
        [{ ar: "أقصى ضغط (بار)", en: "Max pressure (bar)" }, "54", "85", "52", "49"],
      ],
    },
  ],
  selector: {
    groupLabel: { ar: "مقاس البئر", en: "Well size" },
    optionLabel: { ar: "قدرة الموتور", en: "Motor power" },
    groups: Object.entries(HP_BY_BORE).map(([bore, hps]) => ({
      value: bore,
      label: inchLabel(bore, SERIES[bore]),
      options: hps.map((hp) => ({ value: String(hp), label: hpLabel(hp), detail: { ar: `${HP_TO_KW[hp]} كيلوواط`, en: `${HP_TO_KW[hp]} kW` } })),
    })),
  },
  catalogs: ["tormac-pumps"],
  applications: ["agriculture", "homes", "industry", "solar-pumping"],
  related: ["tormac-eco-submersible-motors", "astral-bore-well-column-pipes"],
};
