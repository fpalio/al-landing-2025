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

// Complete translations object
const staticTranslations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      contact: "Contact Us",
    },
    meta: {
      title: {
        home: "American Loyalty - Loyalty Programs & Customer Retention Solutions",
        about: "About Us - American Loyalty",
        services: "Our Services - American Loyalty",
        contact: "Contact Us - American Loyalty",
      },
      description: {
        home: "Transform your business with American Loyalty's innovative customer loyalty programs and retention solutions.",
        about:
          "Learn about American Loyalty's mission to help businesses build stronger customer relationships through effective loyalty programs.",
        services:
          "Discover our comprehensive loyalty program services including design, implementation, and management solutions.",
        contact:
          "Get in touch with American Loyalty to discuss your customer loyalty and retention needs.",
      },
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      retry: "Try again",
      close: "Close",
      menu: "Menu",
      language: "Language",
      select_language: "Select Language",
    },
    home: {
      hero: {
        title: "American Loyalty",
        subtitle: "Where Engagement meets Excellence in every Reward",
        description:
          "Unlock the full potential of Customer Loyalty and let's achieve success together. Our team is ready and waiting to collaborate with you.",
        cta_button: "Work With Us!",
      },
      about: {
        section_title: "ABOUT US",
        heading:
          'Built on <span class="text-brand-red">Loyalty.</span> Powered by Trust.',
        description:
          "Unlock the full potential of Customer Loyalty and let's achieve success together. Unlock the full potential of Customer Loyalty and let's achieve success together. Unlock the full potential of Customer Loyalty and let's achieve success together. Unlock the full potential of Customer Loyalty and let's achieve success together.",
        cta_button: "Learn More About Us",
        image_alt: "Two women shopping together",
      },
      stats: {
        countries_served: "Countries Served",
        customers_reached: "Customers Reached",
        years_experience: "Years Experience",
        collectibles_delivered: "Collectibles Delivered",
      },
      services: {
        section_title: "OUR SERVICES",
        heading:
          'Tailored Solutions for <span class="text-brand-red">Every Partner</span>',
        description:
          "Unlock the full potential of Customer Loyalty and let's achieve success together",
        retailers: {
          title: "Retailers",
          description:
            "Cover your loved ones from in and out from normal injuries until operations.",
          features: [
            "Market Research",
            "Selection & Product Design",
            "Production & Logistics",
            "Promotion Implementation",
            "Supervision & Reporting",
          ],
          cta_button: "Learn More About Retailers",
        },
        brands: {
          title: "Brands",
          description:
            "Cover your loved ones from in and out from normal injuries until operations.",
          features: [
            "Global Brand Visibility",
            "Be the Reward",
            "In-Home Presence",
            "Build Lasting Loyalty",
            "Seen. Collected. Loved.",
          ],
          cta_button: "Learn More About Brands",
        },
      },
      testimonials: {
        section_title: "REVIEWS",
        heading: "Proven Impact, Shared by Partners",
        description:
          "Unlock the full potential of Customer Loyalty and let's achieve success together",
        testimonial: {
          quote:
            '"A <span class="text-brand-red">Game-Changer</span> for Our Business"',
          content: [
            'Working with <span class="font-bold">American Loyalty</span> helped us increase campaign engagement by <span class="font-bold">40%</span> in just <span class="font-bold">three months.</span> Their reward system was <span class="font-bold">easy</span> to implement and highly effective — it brought measurable results fast.',
            'Partnering with American Loyalty was a <span class="font-bold">game-changer</span> for us. As a regional retail chain, we were looking for a solution that could boost customer engagement without adding operational complexity.',
          ],
          author_name: "John Doe",
          author_title: "Marketing Director, ABC Retail",
          author_image_alt: "John Doe - Marketing Director",
        },
      },
    },
    footer: {
      copyright: "Copyright Notice: © Copyright American Loyalty LLC. 2024",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de Nosotros",
      services: "Nuestros Servicios",
      contact: "Contáctanos",
    },
    meta: {
      title: {
        home: "American Loyalty - Programas de Lealtad y Soluciones de Retención de Clientes",
        about: "Acerca de Nosotros - American Loyalty",
        services: "Nuestros Servicios - American Loyalty",
        contact: "Contáctanos - American Loyalty",
      },
      description: {
        home: "Transforma tu negocio con los programas innovadores de lealtad de clientes y soluciones de retención de American Loyalty.",
        about:
          "Conoce la misión de American Loyalty de ayudar a las empresas a construir relaciones más sólidas con los clientes a través de programas de lealtad efectivos.",
        services:
          "Descubre nuestros servicios integrales de programas de lealtad, incluyendo diseño, implementación y soluciones de gestión.",
        contact:
          "Ponte en contacto con American Loyalty para discutir tus necesidades de lealtad y retención de clientes.",
      },
    },
    common: {
      loading: "Cargando...",
      error: "Ocurrió un error",
      retry: "Intentar de nuevo",
      close: "Cerrar",
      menu: "Menú",
      language: "Idioma",
      select_language: "Seleccionar Idioma",
    },
    home: {
      hero: {
        title: "American Loyalty",
        subtitle:
          "Donde el Compromiso se encuentra con la Excelencia en cada Recompensa",
        description:
          "Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos. Nuestro equipo está listo y esperando para colaborar contigo.",
        cta_button: "¡Trabaja con Nosotros!",
      },
      about: {
        section_title: "ACERCA DE NOSOTROS",
        heading:
          'Construido sobre <span class="text-brand-red">Lealtad.</span> Impulsado por Confianza.',
        description:
          "Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos. Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos. Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos. Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos.",
        cta_button: "Conoce Más Sobre Nosotros",
        image_alt: "Dos mujeres comprando juntas",
      },
      stats: {
        countries_served: "Países Servidos",
        customers_reached: "Clientes Alcanzados",
        years_experience: "Años de Experiencia",
        collectibles_delivered: "Coleccionables Entregados",
      },
      services: {
        section_title: "NUESTROS SERVICIOS",
        heading:
          'Soluciones Personalizadas para <span class="text-brand-red">Cada Socio</span>',
        description:
          "Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos",
        retailers: {
          title: "Minoristas",
          description:
            "Protege a tus seres queridos por dentro y por fuera desde lesiones normales hasta operaciones.",
          features: [
            "Investigación de Mercado",
            "Selección y Diseño de Productos",
            "Producción y Logística",
            "Implementación de Promociones",
            "Supervisión e Informes",
          ],
          cta_button: "Conoce Más Sobre Minoristas",
        },
        brands: {
          title: "Marcas",
          description:
            "Protege a tus seres queridos por dentro y por fuera desde lesiones normales hasta operaciones.",
          features: [
            "Visibilidad Global de Marca",
            "Sé la Recompensa",
            "Presencia en el Hogar",
            "Construye Lealtad Duradera",
            "Visto. Coleccionado. Amado.",
          ],
          cta_button: "Conoce Más Sobre Marcas",
        },
      },
      testimonials: {
        section_title: "RESEÑAS",
        heading: "Impacto Comprobado, Compartido por Socios",
        description:
          "Libera todo el potencial de la Lealtad del Cliente y logremos el éxito juntos",
        testimonial: {
          quote:
            '"Un <span class="text-brand-red">Cambio Total</span> para Nuestro Negocio"',
          content: [
            'Trabajar con <span class="font-bold">American Loyalty</span> nos ayudó a aumentar el compromiso de campaña en un <span class="font-bold">40%</span> en solo <span class="font-bold">tres meses.</span> Su sistema de recompensas fue <span class="font-bold">ágil</span> de implementar y altamente efectivo — trajo resultados medibles rápidamente.',
            'Asociarse con American Loyalty fue un <span class="font-bold">cambio total</span> para nosotros. Como una cadena minorista regional, estábamos buscando una solución que pudiera impulsar el compromiso del cliente sin agregar complejidad operacional.',
          ],
          author_name: "John Doe",
          author_title: "Director de Marketing, ABC Retail",
          author_image_alt: "John Doe - Director de Marketing",
        },
      },
    },
    footer: {
      copyright:
        "Aviso de Derechos de Autor: © Copyright American Loyalty LLC. 2024",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Nós",
      services: "Nossos Serviços",
      contact: "Fale Conosco",
    },
    meta: {
      title: {
        home: "American Loyalty - Programas de Fidelidade e Soluções de Retenção de Clientes",
        about: "Sobre Nós - American Loyalty",
        services: "Nossos Serviços - American Loyalty",
        contact: "Fale Conosco - American Loyalty",
      },
      description: {
        home: "Transforme seu negócio com os programas inovadores de fidelidade de clientes e soluções de retenção da American Loyalty.",
        about:
          "Conheça a missão da American Loyalty de ajudar as empresas a construir relacionamentos mais fortes com os clientes através de programas de fidelidade eficazes.",
        services:
          "Descubra nossos serviços abrangentes de programas de fidelidade, incluindo design, implementação e soluções de gestão.",
        contact:
          "Entre em contato com a American Loyalty para discutir suas necessidades de fidelidade e retenção de clientes.",
      },
    },
    common: {
      loading: "Carregando...",
      error: "Ocorreu um erro",
      retry: "Tentar novamente",
      close: "Fechar",
      menu: "Menu",
      language: "Idioma",
      select_language: "Selecionar Idioma",
    },
    home: {
      hero: {
        title: "American Loyalty",
        subtitle: "Onde o Engajamento encontra a Excelência em cada Recompensa",
        description:
          "Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos. Nossa equipe está pronta e esperando para colaborar com você.",
        cta_button: "Trabalhe Conosco!",
      },
      about: {
        section_title: "SOBRE NÓS",
        heading:
          'Construído sobre <span class="text-brand-red">Lealdade.</span> Alimentado pela Confiança.',
        description:
          "Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos. Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos. Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos. Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos.",
        cta_button: "Saiba Mais Sobre Nós",
        image_alt: "Duas mulheres fazendo compras juntas",
      },
      stats: {
        countries_served: "Países Atendidos",
        customers_reached: "Clientes Alcançados",
        years_experience: "Anos de Experiência",
        collectibles_delivered: "Colecionáveis Entregues",
      },
      services: {
        section_title: "NOSSOS SERVIÇOS",
        heading:
          'Soluções Personalizadas para <span class="text-brand-red">Cada Parceiro</span>',
        description:
          "Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos",
        retailers: {
          title: "Varejistas",
          description:
            "Proteja seus entes queridos por dentro e por fora, desde lesões normais até operações.",
          features: [
            "Pesquisa de Mercado",
            "Seleção e Design de Produtos",
            "Produção e Logística",
            "Implementação de Promoções",
            "Supervisão e Relatórios",
          ],
          cta_button: "Saiba Mais Sobre Varejistas",
        },
        brands: {
          title: "Marcas",
          description:
            "Proteja seus entes queridos por dentro e por fora, desde lesões normais até operações.",
          features: [
            "Visibilidade Global da Marca",
            "Seja a Recompensa",
            "Presença Domiciliar",
            "Construa Lealdade Duradoura",
            "Visto. Colecionado. Amado.",
          ],
          cta_button: "Saiba Mais Sobre Marcas",
        },
      },
      testimonials: {
        section_title: "AVALIAÇÕES",
        heading: "Impacto Comprovado, Compartilhado por Parceiros",
        description:
          "Desbloqueie todo o potencial da Lealdade do Cliente e vamos alcançar o sucesso juntos",
        testimonial: {
          quote:
            '"Uma <span class="text-brand-red">Mudança de Jogo</span> para Nosso Negócio"',
          content: [
            'Trabalhar com a <span class="font-bold">American Loyalty</span> nos ajudou a aumentar o engajamento da campanha em <span class="font-bold">40%</span> em apenas <span class="font-bold">três meses.</span> Seu sistema de recompensas foi <span class="font-bold">fácil</span> de implementar e altamente eficaz — trouxe resultados mensuráveis rapidamente.',
            'Fazer parceria com a American Loyalty foi uma <span class="font-bold">mudança de jogo</span> para nós. Como uma rede varejista regional, estávamos procurando uma solução que pudesse aumentar o engajamento do cliente sem adicionar complexidade operacional.',
          ],
          author_name: "John Doe",
          author_title: "Diretor de Marketing, ABC Retail",
          author_image_alt: "John Doe - Diretor de Marketing",
        },
      },
    },
    footer: {
      copyright:
        "Aviso de Direitos Autorais: © Copyright American Loyalty LLC. 2024",
    },
  },
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
