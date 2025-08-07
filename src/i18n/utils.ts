// Import translation files
import * as enTranslations from "./translations/en.json";
import * as esTranslations from "./translations/es.json";
import * as ptTranslations from "./translations/pt.json";

export const languages = {
  en: "English",
  es: "Español",
  pt: "Português",
} as const;

export const defaultLang = "en";
export type Language = keyof typeof languages;

// Language configuration with country codes and flag info
export const languageConfig = {
  en: {
    name: "English",
    nativeName: "English",
    countryCode: "US",
    flag: "🇺🇸",
    flagName: "United States",
  },
  es: {
    name: "Spanish",
    nativeName: "Español",
    countryCode: "ES",
    flag: "🇪🇸",
    flagName: "Spain",
  },
  pt: {
    name: "Portuguese",
    nativeName: "Português",
    countryCode: "BR",
    flag: "🇧🇷",
    flagName: "Brazil",
  },
} as const;

// Translations object using imported JSON files
const staticTranslations = {
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations,
};

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: any = staticTranslations[lang];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to default language
        value = staticTranslations[defaultLang];
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }

    return typeof value === "string" ? value : key;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);

  // Remove language segment if present
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }

  return pathname;
}

export function translatePath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getLocalizedPath(
  currentPath: string,
  targetLang: Language
): string {
  // Remove current language prefix if present
  const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";

  // Add target language prefix if not default
  if (targetLang === defaultLang) {
    return pathWithoutLang;
  }

  return `/${targetLang}${pathWithoutLang}`;
}
