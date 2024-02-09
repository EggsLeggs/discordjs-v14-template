import type { InitOptions } from "i18next";
import common_en from "./locales/en/common.json";

export const fallbackLng = "en";
export const locales = [fallbackLng, "ko"] as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = "common";

// Useful guide: https://carlogino.com/blog/nextjs13-i18n

export function getOptions(): InitOptions {
  // lang = fallbackLng // I don't think we need this (was a parameter)
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    defaultNS,
    // lng: lang, // I don't think we need this
    resources,
  };
}

const resources = {
  en: {
    common: common_en,
  },
};
