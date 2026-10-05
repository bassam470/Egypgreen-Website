import type { L10n, Product } from "./types";

/**
 * Astral Bore-Well uPVC column pipes.
 * Figures: Astral "uPVC Bore-Well Column Pipes" catalogue, technical chart
 * (pp.17 and 19), coupler-type pipes. Standard effective length 3 m.
 *
 * Row: [class, working pressure kgf/cm², ultimate breaking load kg,
 *       safe pulling load kg, safe total pump head m].
 */
type Row = [string, number, number, number, number];

const SIZES: { inch: string; od: string; rows: Row[] }[] = [
  { inch: "1", od: "33.0", rows: [
    ["V4 Cub", 12.5, 750, 360, 125], ["V4", 12.5, 800, 400, 125], ["Medium", 16, 1050, 620, 160],
    ["Crystal", 21, 1250, 740, 210], ["Standard", 30, 1700, 1250, 300],
  ] },
  { inch: "1¼", od: "42.0", rows: [
    ["V4 Eco", 10, 960, 565, 100], ["V4 Cub", 12.5, 1250, 700, 125], ["V4", 12.5, 1300, 740, 125],
    ["Medium", 15, 1550, 900, 150], ["Crystal", 21, 1800, 1050, 210], ["Standard", 25, 2150, 1250, 250],
    ["Standard Plus", 30, 2550, 1450, 300], ["Heavy", 35, 3100, 1550, 350], ["Heavy Plus", 38, 3250, 1650, 380],
    ["Super Heavy", 40, 3500, 1850, 400],
  ] },
  { inch: "1½", od: "48.0", rows: [
    ["V4", 12.5, 1700, 970, 125], ["Medium", 15, 2000, 1250, 150], ["Crystal", 21, 2400, 1500, 210],
    ["Standard", 26, 3000, 1700, 260], ["Heavy", 35, 4000, 2000, 350], ["Super Heavy", 40, 4100, 2350, 400],
  ] },
  { inch: "2", od: "60.0", rows: [
    ["Eco Medium", 8, 2150, 1180, 80], ["Eco Medium Plus", 10, 2250, 1225, 100], ["Medium", 13, 2900, 1550, 130],
    ["Crystal", 17, 3200, 1870, 170], ["Standard", 20, 3800, 2100, 200], ["Heavy", 27, 5000, 3030, 270],
    ["Super Heavy", 35, 5600, 3500, 350],
  ] },
  { inch: "2¼", od: "62.85", rows: [["Super Heavy", 35, 7600, 4200, 350]] },
  { inch: "2½", od: "75.2", rows: [
    ["Medium", 10, 3550, 1930, 100], ["Eco Standard", 13, 3650, 2150, 130], ["Standard", 16, 5300, 2860, 160],
    ["Standard Plus", 21, 5900, 3500, 210], ["Heavy", 26, 7000, 4200, 260], ["Super Heavy", 35, 8600, 4800, 350],
  ] },
  { inch: "3", od: "88.0", rows: [
    ["Medium", 11, 4500, 2500, 110], ["Eco Standard", 14, 5250, 3100, 140], ["Standard", 17, 7200, 4110, 170],
    ["Standard Plus", 21, 8200, 4850, 210], ["Heavy", 26, 10600, 6350, 260], ["Super Heavy", 35, 11900, 6600, 350],
  ] },
  { inch: "3½", od: "100.0", rows: [["Heavy Plus", 30, 14100, 7900, 300]] },
  { inch: "4", od: "113.0", rows: [
    ["Eco Medium", 8, 4800, 2800, 80], ["Medium", 10, 7500, 4100, 100], ["Standard", 15, 10500, 5800, 150],
    ["Standard Plus", 21, 13000, 7650, 210], ["Heavy", 26, 16000, 9500, 260], ["Super Heavy", 35, 19800, 11000, 350],
  ] },
  { inch: "5", od: "140.0", rows: [
    ["Standard", 16, 16400, 9650, 160], ["Heavy", 26, 24200, 14600, 260], ["Super Heavy", 35, 30500, 18600, 350],
  ] },
];

const n = (v: number) => v.toLocaleString("en-US");
const inch = (s: string): L10n => ({ ar: `${s} بوصة`, en: `${s} in` });

export const astral: Product = {
  slug: "astral-bore-well-column-pipes",
  category: "pipes",
  brand: "astral",
  name: { ar: "مواسير Astral Bore-Well للآبار uPVC", en: "Astral Bore-Well uPVC column pipes" },
  summary: {
    ar: "مواسير أعمدة uPVC خالية من الرصاص للطلمبات الغاطسة، مقاسات 1 إلى 5 بوصة ورفع حتى 400 متر.",
    en: "Lead-free uPVC column pipes for submersible pumps, 1 to 5 inch, for pump heads up to 400 m.",
  },
  intro: {
    ar: [
      "مواسير Astral Bore-Well هي العمود الذي تُعلَّق عليه الطلمبة الغاطسة داخل البئر وترتفع فيه المياه إلى السطح. مصنوعة من uPVC خالٍ من الرصاص والمعادن الثقيلة، فتصلح لمياه الشرب والري والاستخدام الصناعي.",
      "طول الماسورة الفعلي 3 أمتار، والمقاسات من 1 إلى 5 بوصة بأكثر من فئة ضغط لكل مقاس. الفئة تحدد أقصى رفع للطلمبة وأقصى حمل شد، فتختار الأخف للآبار الضحلة والأثقل للأعماق الكبيرة.",
    ],
    en: [
      "Astral Bore-Well pipes form the column that the submersible pump hangs from inside the well and that carries water to the surface. They are made from uPVC free of lead and heavy metals, so they suit drinking water, irrigation and industrial use.",
      "Each pipe has a 3 m effective length, in sizes from 1 to 5 inches with several pressure classes per size. The class sets the maximum pump head and pulling load, so lighter classes suit shallow wells and heavier classes suit deep ones.",
    ],
  },
  image: "/images/products/astral-bore-well-pipes.webp",
  cardImage: "/images/products/astral-bore-well-pipes-card.webp",
  keyFigures: [
    { value: { ar: "1 – 5 بوصة", en: "1 – 5 in" }, label: { ar: "المقاسات", en: "Sizes" } },
    { value: { ar: "3 م", en: "3 m" }, label: { ar: "طول الماسورة", en: "Pipe length" } },
    { value: { ar: "حتى 400 م", en: "Up to 400 m" }, label: { ar: "أقصى رفع للطلمبة", en: "Max pump head" } },
    { value: { ar: "حتى 40 كجم/سم²", en: "Up to 40 kgf/cm²" }, label: { ar: "ضغط التشغيل", en: "Working pressure" } },
  ],
  cardSpecs: [
    { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "1 – 5 بوصة", en: "1 – 5 in" } },
    { label: { ar: "الخامة", en: "Material" }, value: { ar: "uPVC خالي من الرصاص", en: "Lead-free uPVC" } },
    { label: { ar: "أقصى رفع", en: "Max head" }, value: { ar: "400 م", en: "400 m" } },
  ],
  features: {
    ar: [
      "خالية من الرصاص والمعادن الثقيلة، فلا تلوث مياه البئر.",
      "سن مربع مشغول على ماكينات CNC يتحمل وزن العمود والطلمبة.",
      "حلقة EPDM على كل وصلة تمنع التسريب وتمتص اهتزاز الطلمبة.",
      "قفل مزدوج بمسامير استانلس ستيل بين الماسورة والجلبة، مع حلقة مطاط إضافية.",
      "أطراف الماسورة أسمك من منتصفها لتعويض مكان السن.",
      "لا تصدأ ولا تتأثر بالمياه المالحة أو الرملية، وسطحها الداخلي الأملس يقلل فقد الاحتكاك.",
      "أخف كثيرًا من المواسير الحديد، فالتنزيل والرفع أسهل.",
      "خط ملون داخل جدار الماسورة يحدد الفئة ويميز المنتج الأصلي.",
    ],
    en: [
      "Free of lead and heavy metals, so the well water stays clean.",
      "CNC-cut square threads carry the weight of the column and the pump.",
      "An EPDM O-ring on every joint stops leaks and absorbs pump vibration.",
      "Double stainless-steel stud-pin lock between pipe and coupler, plus an extra rubber ring.",
      "Pipe ends are thicker than the barrel to make up for the thread.",
      "Doesn't rust or react with salty or sandy water, and the smooth bore cuts friction loss.",
      "Much lighter than steel pipe, so lowering and lifting are easier.",
      "A coloured stripe inside the pipe wall marks the class and identifies genuine product.",
    ],
  },
  overview: {
    id: "overview",
    title: { ar: "المواصفات العامة", en: "General specifications" },
    columns: [{ ar: "البند", en: "Item" }, { ar: "القيمة", en: "Value" }],
    rowHeads: true,
    rows: [
      [{ ar: "الخامة", en: "Material" }, { ar: "uPVC خالي من الرصاص والمعادن الثقيلة", en: "uPVC, lead and heavy-metal free" }],
      [{ ar: "المقاسات", en: "Sizes" }, { ar: "1، 1¼، 1½، 2، 2¼، 2½، 3، 3½، 4، 5 بوصة", en: "1, 1¼, 1½, 2, 2¼, 2½, 3, 3½, 4, 5 in" }],
      [{ ar: "الطول الفعلي", en: "Effective length" }, { ar: "3 متر", en: "3 m" }],
      [{ ar: "الوصلة", en: "Joint" }, { ar: "سن مربع + جلبة + حلقة EPDM + قفل مسامير استانلس", en: "Square thread + coupler + EPDM O-ring + stainless stud-pin lock" }],
      [{ ar: "ضغط التشغيل", en: "Working pressure" }, { ar: "8 – 40 كجم/سم² حسب الفئة", en: "8 – 40 kgf/cm² by class" }],
      [{ ar: "أقصى رفع للطلمبة", en: "Max pump head" }, { ar: "80 – 400 متر حسب الفئة", en: "80 – 400 m by class" }],
      [{ ar: "الاختبارات", en: "Testing" }, { ar: "IS 4985، IS 12818، IS 12235، ASTM D256", en: "IS 4985, IS 12818, IS 12235, ASTM D256" }],
    ],
  },
  tables: [
    {
      id: "chart",
      title: { ar: "الجدول الفني حسب المقاس والفئة", en: "Technical chart by size and class" },
      note: {
        ar: "من كتالوج Astral Bore-Well. أقصى رفع وحمل الشد قيم آمنة للعمود كاملًا مع الطلمبة.",
        en: "From the Astral Bore-Well catalogue. Max head and pulling load are safe values for the full column with the pump.",
      },
      columns: [
        { ar: "المقاس", en: "Size" },
        { ar: "القطر الخارجي (مم)", en: "OD (mm)" },
        { ar: "الفئة", en: "Class" },
        { ar: "ضغط التشغيل (كجم/سم²)", en: "Working pressure (kgf/cm²)" },
        { ar: "أقصى رفع (م)", en: "Max head (m)" },
        { ar: "حمل الشد الآمن (كجم)", en: "Safe pulling load (kg)" },
        { ar: "حمل الكسر (كجم)", en: "Breaking load (kg)" },
      ],
      rows: SIZES.flatMap((s) =>
        s.rows.map(([cls, p, brk, pull, head]) => [inch(s.inch), s.od, cls, String(p), String(head), n(pull), n(brk)]),
      ),
    },
  ],
  selector: {
    groupLabel: { ar: "مقاس الماسورة", en: "Pipe size" },
    optionLabel: { ar: "الفئة", en: "Class" },
    groups: SIZES.map((s) => ({
      value: s.inch,
      label: inch(s.inch),
      options: s.rows.map(([cls, p, , , head]) => ({
        value: cls,
        label: { ar: cls, en: cls },
        detail: { ar: `${p} كجم/سم² · رفع حتى ${head} م`, en: `${p} kgf/cm² · head up to ${head} m` },
      })),
    })),
  },
  catalogs: ["astral-bore-well"],
  applications: ["agriculture", "homes", "industry", "solar-pumping"],
  related: ["tormac-ts-submersible-pumps", "tormac-eco-submersible-motors"],
};
