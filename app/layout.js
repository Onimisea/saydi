import AppProvider from "@/context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import localFont from "next/font/local";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

const montserrat_italic = localFont({
  src: "../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat-italic",
});

const gillsans_bold = localFont({
  src: "../public/fonts/GillSansBold.otf",
  display: "swap",
  variable: "--font-gillsans-bold",
});

const gillsans_heavy = localFont({
  src: "../public/fonts/GillSansHeavy.otf",
  display: "swap",
  variable: "--font-gillsans-heavy",
});

export const metadata = {
  title: "Saving African Youths Dream Initiative (SAYDi)",
  description:
    "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
  metadataBase: new URL("https://saydi.org"),
  applicationName: "SAYDi",
  authors: [{ name: "Onimisea", url: "https://onimisea.com" }],
  colorScheme: "light",
  creator: "Onimisea",
  publisher: "SAYDi",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: "Saving African Youths Dream Initiative (SAYDi)",
    description:
      "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
    url: "https://saydi.org",
    siteName: "Saving African Youths Dream Initiative (SAYDi)",
    images: [
      {
        url: "../../public/imgs/home/saydi_home.png",
        width: 800,
        height: 600,
        alt: "Saving African Youths Dream Initiative (SAYDi)",
      },
      {
        url: "../../public/imgs/home/saydi_home.png",
        width: 1800,
        height: 1600,
        alt: "Saving African Youths Dream Initiative (SAYDi)",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@SAYDinitiative",
    title: "Saving African Youths Dream Initiative (SAYDi)",
    description:
      "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
    images: {
      url: "../../public/imgs/home/saydi_home.png",
      alt: "Saving African Youths Dream Initiative (SAYDi)",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    bing: "bing",
  },

  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  bookmarks: ["https://saydi.org"],
  category: "ngo",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${montserrat_italic.variable} ${gillsans_bold.variable} ${gillsans_heavy.variable}`}
    >
      <AppProvider>
        <ToastContainer />
        <body className="">{children}</body>
      </AppProvider>
    </html>
  );
}
