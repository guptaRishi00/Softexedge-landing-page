import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "SoftEXedge",
  description: "Crafting Digital Experiences",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning prevents crashes from extension-injected attributes
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Main Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N6G4FRSN');`}
        </Script>

        {/* Meta Pixel - Restricted to production domain */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'landing.softexedge.in') {
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '545854811195121');
              fbq('track', 'PageView');
            }
          `}
        </Script>
      </head>
      <body className={`${gilroy.variable} ${gilroy.className} antialiased`}>
        {/* Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6G4FRSN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
