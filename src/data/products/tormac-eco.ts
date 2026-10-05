import type { Product } from "./types";
import { hpLabel, inchLabel } from "./units";

/**
 * Tormac ECO series submersible motors.
 * Figures: Tormac "Submersible Motor 50Hz" catalogue, electrical data (pp.23-25,
 * 380/415 V three-phase rows) and technical data (pp.20-22). Listed to 150 HP.
 *
 * Row: [HP, kW, full-load current A, locked-rotor current A, efficiency %, thrust N, model].
 * The catalogue's 7 in table prints the two current columns swapped; the rows
 * below are in the corrected order, matching the same machines in the 8 in table.
 */
type Row = [number, number, number, number, number, number, string];

const ROWS: Record<string, Row[]> = {
  "4": [
    [0.5, 0.37, 1.9, 5, 48, 3000, "D4-03"],
    [0.75, 0.55, 2.4, 7, 57, 3000, "D4-05"],
    [1, 0.75, 2.8, 9, 64, 3000, "D4-07"],
    [1.5, 1.1, 3.9, 15, 67, 3000, "D4-11"],
    [2, 1.5, 4.7, 19, 68, 3000, "D4-15"],
    [3, 2.2, 7.1, 32, 70, 6500, "D4-22"],
    [4, 3, 9.1, 42, 72, 6500, "D4-30"],
    [5, 3.7, 10.1, 50, 71, 6500, "D4-37"],
    [5.5, 4, 10.3, 52, 69, 6500, "D4-40"],
    [7.5, 5.5, 14.2, 71, 71, 6500, "D4-55"],
    [10, 7.5, 18.2, 93, 72, 6500, "D4-75"],
  ],
  "6": [
    [5.5, 4, 10.8, 43, 76, 15500, "D6-40"],
    [6, 4.5, 12, 48, 76, 15500, "D6-45"],
    [7.5, 5.5, 13.5, 52, 78, 15500, "D6-55"],
    [10, 7.5, 18.5, 70, 82, 15500, "D6-75"],
    [12.5, 9.3, 21, 84, 82, 15500, "D6-93"],
    [15, 11, 25, 102, 82, 15500, "D6-110"],
    [17.5, 13, 29.5, 118, 83, 15500, "D6-130"],
    [20, 15, 33, 148, 83, 15500, "D6-150"],
    [25, 18.5, 42.5, 188, 83, 15500, "D6-185"],
    [30, 22, 49.2, 225, 83, 15500, "D6-220"],
    [35, 26, 56.5, 270, 83, 27500, "D6-260"],
    [40, 30, 67.2, 355, 83, 27500, "D6-300"],
    [50, 37, 83, 420, 82, 27500, "D6-370"],
    [60, 45, 93, 465, 82, 27500, "D6-450"],
  ],
  "7": [
    [50, 37, 80, 280, 86, 45500, "D7-370"],
    [60, 45, 92, 315, 85, 45500, "D7-450"],
    [75, 55, 112, 410, 87, 45500, "D7-550"],
    [85, 63, 126, 510, 88, 45500, "D7-630"],
    [100, 75, 151, 592, 89, 45500, "D7-750"],
  ],
  "8": [
    [50, 37, 80, 280, 86, 45500, "D8-370"],
    [60, 45, 92, 315, 85, 45500, "D8-450"],
    [75, 55, 112, 410, 86, 45500, "D8-550"],
    [85, 63, 126, 510, 88, 45500, "D8-630"],
    [100, 75, 151, 592, 87, 45500, "D8-750"],
    [125, 93, 188, 636, 88, 45500, "D8-930"],
    [150, 110, 225, 785, 87, 45500, "D8-1100"],
  ],
  "10": [
    [110, 81, 166, 824, 86, 75000, "D10-810"],
    [125, 93, 181, 1102, 87, 75000, "D10-930"],
    [150, 110, 220, 1326, 87, 75000, "D10-1100"],
  ],
};

const n = (v: number) => v.toLocaleString("en-US");

export const tormacEco: Product = {
  slug: "tormac-eco-submersible-motors",
  category: "pumps",
  brand: "tormac",
  name: { ar: "مواتير Tormac الغاطسة، سلسلة ECO", en: "Tormac ECO submersible motors" },
  summary: {
    ar: "مواتير غاطسة مبردة بالمياه وقابلة لإعادة اللف، مقاسات 4 إلى 10 بوصة وقدرات حتى 150 حصان.",
    en: "Water-cooled, rewindable submersible motors in 4 to 10 inch frames, up to 150 HP.",
  },
  intro: {
    ar: [
      "سلسلة ECO من Tormac مواتير غاطسة ثلاثية الأوجه 380/415 فولت، مملوءة بمياه منزوعة الأملاح تقوم بالتبريد والتزييت معًا. الموتور قابل لإعادة اللف، فإصلاحه ممكن بدل استبداله.",
      "الغلاف الخارجي وقاعدة الموتور من الاستانلس ستيل، ومانع التسرب على العمود مع واقي الرمل يمنعان دخول مياه البئر والرمل إلى الملفات. أبعاد التركيب حسب مواصفة NEMA، فيناسب طلمبات Tormac TS والطلمبات القياسية بنفس المقاس.",
    ],
    en: [
      "The Tormac ECO series are 380/415 V three-phase submersible motors filled with demineralised water that both cools and lubricates. The motor is rewindable, so it can be repaired instead of replaced.",
      "The outer shell and motor base are stainless steel, and the shaft seal with its sand guard keeps well water and sand out of the winding. Mounting dimensions follow NEMA, so the motor fits Tormac TS pumps and standard pumps of the same size.",
    ],
  },
  image: "/images/products/tormac-eco-motors.webp",
  cardImage: "/images/products/tormac-eco-motors-card.webp",
  keyFigures: [
    { value: { ar: "4 – 10 بوصة", en: "4 – 10 in" }, label: { ar: "مقاس الموتور", en: "Frame size" } },
    { value: { ar: "0.5 – 150 حصان", en: "0.5 – 150 HP" }, label: { ar: "القدرة", en: "Power" } },
    { value: { ar: "380/415 فولت", en: "380/415 V" }, label: { ar: "ثلاثي الأوجه، 50 هرتز", en: "Three-phase, 50 Hz" } },
    { value: { ar: "IP68", en: "IP68" }, label: { ar: "درجة الحماية", en: "Protection" } },
  ],
  cardSpecs: [
    { label: { ar: "المقاسات", en: "Frames" }, value: { ar: "4، 6، 7، 8، 10 بوصة", en: "4, 6, 7, 8, 10 in" } },
    { label: { ar: "الجهد", en: "Voltage" }, value: { ar: "380/415 فولت", en: "380/415 V" } },
    { label: { ar: "القدرة", en: "Power" }, value: { ar: "0.5 – 150 حصان", en: "0.5 – 150 HP" } },
  ],
  features: {
    ar: [
      "قابل لإعادة اللف، فالإصلاح يتم في الورشة بدل تغيير الموتور.",
      "غلاف الاستاتور والأغطية وقاعدة الموتور من استانلس ستيل 304 أو 316.",
      "مملوء من المصنع بمياه منزوعة الأملاح آمنة على البيئة للتبريد والتزييت.",
      "كرسي تحميل محوري يتحمل من 3,000 حتى 75,000 نيوتن حسب المقاس.",
      "مانع تسرب على العمود وواقي رمل يحميان الملفات.",
      "تشغيل مستمر S1، ويدور في الاتجاهين.",
      "إصدارات للمياه الساخنة حتى 70 أو 90 درجة مئوية بطلب خاص.",
    ],
    en: [
      "Rewindable: repairs are done in the workshop instead of replacing the motor.",
      "Stator shell, housings and motor base in 304 or 316 stainless steel.",
      "Factory-filled with environmentally safe demineralised water for cooling and lubrication.",
      "Thrust bearing rated from 3,000 to 75,000 N depending on frame.",
      "Shaft seal and sand guard protect the winding.",
      "Continuous S1 duty, clockwise or counter-clockwise rotation.",
      "Hot-water versions up to 70 or 90 °C on special order.",
    ],
  },
  overview: {
    id: "overview",
    title: { ar: "المواصفات العامة", en: "General specifications" },
    columns: [{ ar: "البند", en: "Item" }, { ar: "القيمة", en: "Value" }],
    rowHeads: true,
    rows: [
      [{ ar: "النوع", en: "Type" }, { ar: "مملوء بالمياه، قابل لإعادة اللف", en: "Water-filled, rewindable" }],
      [{ ar: "المقاسات", en: "Frames" }, { ar: "4، 6، 7، 8، 10 بوصة", en: "4, 6, 7, 8, 10 in" }],
      [{ ar: "القدرة", en: "Rated output" }, { ar: "0.37 – 110 كيلوواط (0.5 – 150 حصان)", en: "0.37 – 110 kW (0.5 – 150 HP)" }],
      [{ ar: "السرعة", en: "Speed" }, { ar: "2900 لفة/دقيقة", en: "2900 rpm" }],
      [{ ar: "الجهد", en: "Voltage" }, { ar: "380/415 فولت، 3 أوجه، 50 هرتز", en: "380/415 V, 3-phase, 50 Hz" }],
      [{ ar: "تفاوت الجهد المسموح", en: "Voltage tolerance" }, { ar: "−15% / +6%", en: "−15% / +6%" }],
      [{ ar: "درجة الحماية", en: "Protection" }, { ar: "IP58 / IP68", en: "IP58 / IP68" }],
      [{ ar: "نظام التشغيل", en: "Duty" }, { ar: "S1 مستمر", en: "S1 continuous" }],
      [{ ar: "أقل سرعة مياه حول الموتور", en: "Min. cooling flow past motor" }, { ar: "0.15 م/ث (4–6 بوصة)، 0.16 م/ث (7–10 بوصة)", en: "0.15 m/s (4–6 in), 0.16 m/s (7–10 in)" }],
      [{ ar: "أقصى حرارة للمياه", en: "Max water temperature" }, { ar: "38°م", en: "38 °C" }],
      [{ ar: "طريقة التشغيل", en: "Starting" }, { ar: "مباشر أو ستار-دلتا (ستار-دلتا فوق 37 كيلوواط)", en: "DOL or star-delta (star-delta above 37 kW)" }],
      [{ ar: "أبعاد التركيب", en: "Mounting" }, { ar: "NEMA", en: "NEMA" }],
    ],
  },
  tables: [
    {
      id: "frames",
      title: { ar: "البيانات الفنية حسب المقاس", en: "Technical data by frame" },
      columns: [
        { ar: "البند", en: "Item" },
        { ar: "4 بوصة", en: "4 in" },
        { ar: "6 بوصة", en: "6 in" },
        { ar: "7 بوصة", en: "7 in" },
        { ar: "8 بوصة", en: "8 in" },
        { ar: "10 بوصة", en: "10 in" },
      ],
      rowHeads: true,
      rows: [
        [{ ar: "القدرة (حصان)", en: "Power (HP)" }, "0.5 – 10", "5.5 – 60", "50 – 100", "50 – 150", "110 – 150"],
        [{ ar: "القطر الخارجي (مم)", en: "Outer diameter (mm)" }, "98", "143", "180", "196", "236"],
        [{ ar: "الحماية", en: "Protection" }, "IP58", "IP58 / IP68", "IP68", "IP58 / IP68", "IP68"],
        [{ ar: "الحمل المحوري (نيوتن)", en: "Thrust load (N)" }, "3,000 – 6,500", "15,500 – 27,500", "45,500", "45,500", "75,000"],
        [{ ar: "مرات التشغيل في الساعة", en: "Starts per hour" }, "20", "20", "4", "15", "10"],
        [{ ar: "طريقة التشغيل", en: "Starting" }, { ar: "مباشر", en: "DOL" }, { ar: "مباشر / ستار-دلتا", en: "DOL / SD" }, { ar: "مباشر / ستار-دلتا", en: "DOL / SD" }, { ar: "مباشر / ستار-دلتا", en: "DOL / SD" }, { ar: "مباشر / ستار-دلتا", en: "DOL / SD" }],
      ],
    },
    {
      id: "electrical",
      title: { ar: "البيانات الكهربائية، 380/415 فولت", en: "Electrical data, 380/415 V" },
      note: {
        ar: "من كتالوج Tormac للمواتير الغاطسة 50 هرتز. المعروض حتى 150 حصان.",
        en: "From the Tormac submersible motor 50 Hz catalogue. Listed up to 150 HP.",
      },
      columns: [
        { ar: "المقاس", en: "Frame" },
        { ar: "الموديل", en: "Model" },
        { ar: "حصان", en: "HP" },
        { ar: "كيلوواط", en: "kW" },
        { ar: "التيار (أمبير)", en: "Current (A)" },
        { ar: "تيار البدء (أمبير)", en: "Locked rotor (A)" },
        { ar: "الكفاءة %", en: "Efficiency %" },
        { ar: "الحمل المحوري (نيوتن)", en: "Thrust (N)" },
      ],
      rows: Object.entries(ROWS).flatMap(([frame, rows]) =>
        rows.map(([hp, kw, a, lra, eff, thrust, model]) => [
          { ar: `${frame} بوصة`, en: `${frame} in` },
          model,
          String(hp),
          String(kw),
          String(a),
          String(lra),
          String(eff),
          n(thrust),
        ]),
      ),
    },
  ],
  selector: {
    groupLabel: { ar: "مقاس الموتور", en: "Frame size" },
    optionLabel: { ar: "القدرة", en: "Power" },
    groups: Object.entries(ROWS).map(([frame, rows]) => ({
      value: frame,
      label: inchLabel(frame),
      options: rows.map(([hp, kw, , , , , model]) => ({
        value: String(hp),
        label: hpLabel(hp),
        detail: { ar: `${kw} كيلوواط · ${model}`, en: `${kw} kW · ${model}` },
      })),
    })),
  },
  catalogs: ["tormac-motors"],
  applications: ["agriculture", "homes", "industry", "solar-pumping"],
  related: ["tormac-ts-submersible-pumps", "astral-bore-well-column-pipes"],
};
