import type { L10n, L10nList } from "./products/types";

export interface Application {
  id: string;
  icon: string;
  title: L10n;
  summary: L10n;
  body: L10nList;
  points: L10nList;
  products: string[];
}

export const applications: Application[] = [
  {
    id: "agriculture",
    icon: "farm",
    title: { ar: "الري الزراعي", en: "Farm irrigation" },
    summary: {
      ar: "رفع المياه الجوفية لري الأراضي الجديدة والمزارع بالتنقيط أو الرش أو الغمر.",
      en: "Lifting groundwater to irrigate new land and farms by drip, sprinkler or flood.",
    },
    body: {
      ar: [
        "أغلب الأراضي المستصلحة تعتمد على آبار جوفية بأعماق تبدأ من عشرات الأمتار وتصل إلى مئات الأمتار. الطلمبة الغاطسة هي الحل العملي لهذه الأعماق، لأنها تدفع المياه من داخل البئر بدل أن تسحبها من السطح.",
        "يتحدد اختيار الطلمبة من قطر البئر والتصرف اللازم لمساحة الأرض والرفع الكلي حتى شبكة الري. وتكتمل المنظومة بماسورة عمود تتحمل وزن الطلمبة وضغطها، وموتور مناسب لمصدر الكهرباء المتاح.",
      ],
      en: [
        "Most reclaimed land relies on wells tens to hundreds of metres deep. A submersible pump is the practical choice at these depths, because it pushes water up from inside the well instead of drawing it from the surface.",
        "The pump is chosen from the well diameter, the flow the land needs and the total head up to the irrigation network. The system is completed by a column pipe that carries the pump's weight and pressure, and a motor that suits the available power supply.",
      ],
    },
    points: {
      ar: ["طلمبات استانلس تتحمل المياه المالحة والرملية", "مواسير uPVC لا تصدأ في الآبار العميقة", "ألواح شمسية لتقليل تكلفة الديزل والكهرباء"],
      en: ["Stainless pumps that handle salty and sandy water", "uPVC pipes that don't rust in deep wells", "Solar panels to cut diesel and grid costs"],
    },
    products: ["tormac-ts-submersible-pumps", "tormac-eco-submersible-motors", "astral-bore-well-column-pipes", "longi-solar-panels"],
  },
  {
    id: "homes",
    icon: "home",
    title: { ar: "المنازل والمجمعات السكنية", en: "Homes and residential compounds" },
    summary: {
      ar: "مياه الشرب والاستخدام اليومي للفيلات والمجمعات والقرى من آبار خاصة.",
      en: "Drinking and household water for villas, compounds and villages from private wells.",
    },
    body: {
      ar: [
        "في المناطق التي لا تصلها شبكة المياه أو تحتاج مصدرًا احتياطيًا، يغذي بئر خاص الخزانات العلوية أو شبكة المجمع. هنا تهم سلامة المياه بقدر ما يهم الأداء.",
        "مواسير Astral الخالية من الرصاص والطلمبات الاستانلس تحافظ على نظافة مياه الشرب، والطلمبات الصغيرة مقاس 4 بوصة تكفي أغلب المنازل والفيلات.",
      ],
      en: [
        "Where the water network doesn't reach, or a backup source is needed, a private well feeds rooftop tanks or the compound's network. Water safety matters here as much as performance.",
        "Lead-free Astral pipes and stainless pumps keep drinking water clean, and small 4 inch pumps cover most homes and villas.",
      ],
    },
    points: {
      ar: ["مواسير خالية من الرصاص آمنة لمياه الشرب", "طلمبات 4 بوصة من 0.5 حصان", "ألواح شمسية للأسطح من 440 وات"],
      en: ["Lead-free pipes safe for drinking water", "4 inch pumps from 0.5 HP", "Rooftop solar panels from 440 W"],
    },
    products: ["tormac-ts-submersible-pumps", "astral-bore-well-column-pipes", "longi-solar-panels"],
  },
  {
    id: "industry",
    icon: "factory",
    title: { ar: "المصانع والمنشآت", en: "Factories and facilities" },
    summary: {
      ar: "مياه التشغيل والتبريد والخدمات للمصانع والمنشآت في المناطق الصناعية.",
      en: "Process, cooling and service water for factories and facilities in industrial zones.",
    },
    body: {
      ar: [
        "المصانع تحتاج تصرفات كبيرة وتشغيلًا مستمرًا لساعات طويلة. طلمبات Tormac مصممة للتشغيل المستمر على 2900 لفة، ومواتير ECO تعمل بنظام S1 المستمر.",
        "الطلمبات مقاس 8 و10 بوصة تصل إلى 280 م³ في الساعة، والمواتير قابلة لإعادة اللف فيقل وقت التوقف عند الأعطال.",
      ],
      en: [
        "Factories need high flow and continuous running for long hours. Tormac pumps are designed for continuous duty at 2900 rpm, and ECO motors are rated S1 continuous.",
        "8 and 10 inch pumps reach 280 m³/h, and the motors are rewindable, which shortens downtime after a fault.",
      ],
    },
    points: {
      ar: ["تصرف حتى 280 م³/س", "تشغيل مستمر S1", "مواتير قابلة لإعادة اللف"],
      en: ["Flow up to 280 m³/h", "Continuous S1 duty", "Rewindable motors"],
    },
    products: ["tormac-ts-submersible-pumps", "tormac-eco-submersible-motors", "astral-bore-well-column-pipes"],
  },
  {
    id: "solar-pumping",
    icon: "sun",
    title: { ar: "الري بالطاقة الشمسية", en: "Solar-powered pumping" },
    summary: {
      ar: "تشغيل طلمبات الآبار من الألواح الشمسية بدل الديزل أو الكهرباء العمومية.",
      en: "Running well pumps from solar panels instead of diesel or the grid.",
    },
    body: {
      ar: [
        "مصر من أعلى دول العالم في ساعات السطوع الشمسي، وهذا يجعل الطاقة الشمسية خيارًا مناسبًا لري المزارع البعيدة عن الشبكة. تعمل الطلمبة نهارًا وتملأ خزانًا أو تروي مباشرة.",
        "نوفر مكونات هذه المنظومة الأساسية: ألواح LONGi، وطلمبات ومواتير Tormac الغاطسة، ومواسير Astral. ويُختار عدد الألواح حسب قدرة الموتور وظروف الموقع.",
      ],
      en: [
        "Egypt has some of the highest sunshine hours in the world, which makes solar a good fit for farms far from the grid. The pump runs during the day and fills a tank or irrigates directly.",
        "We supply the core parts of such a system: LONGi panels, Tormac submersible pumps and motors, and Astral pipes. The number of panels is chosen from the motor power and site conditions.",
      ],
    },
    points: {
      ar: ["ألواح حتى 670 وات وكفاءة حتى 24.8%", "طلمبات ومواتير من 0.5 حتى 150 حصان", "عرض سعر واحد لكل المكونات"],
      en: ["Panels up to 670 W and 24.8% efficiency", "Pumps and motors from 0.5 to 150 HP", "One quote for every part"],
    },
    products: ["longi-solar-panels", "tormac-ts-submersible-pumps", "tormac-eco-submersible-motors", "astral-bore-well-column-pipes"],
  },
];
