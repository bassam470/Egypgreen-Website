import type { L10n } from "./types";

/**
 * HP to kW as Tormac pairs them in both catalogues. It is a fixed frame table,
 * not a 0.746 conversion (5.5 HP is sold as 4 kW, 12.5 HP as 9.3 kW).
 */
export const HP_TO_KW: Record<number, number> = {
  0.5: 0.37, 0.75: 0.55, 1: 0.75, 1.5: 1.1, 2: 1.5, 3: 2.2, 4: 3, 5: 3.7, 5.5: 4, 6: 4.5,
  7.5: 5.5, 10: 7.5, 12.5: 9.3, 15: 11, 17.5: 13, 20: 15, 25: 18.5, 30: 22, 35: 26, 40: 30,
  50: 37, 60: 45, 75: 55, 85: 63, 100: 75, 110: 81, 125: 93, 150: 110,
};

export const hpLabel = (hp: number): L10n => ({ ar: `${hp} حصان`, en: `${hp} HP` });

export const inchLabel = (inch: string, suffix?: string): L10n => ({
  ar: `${inch} بوصة${suffix ? ` (${suffix})` : ""}`,
  en: `${inch} in${suffix ? ` (${suffix})` : ""}`,
});
