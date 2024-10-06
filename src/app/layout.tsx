import "./globals.css";
import { ReactNode } from "react";
import Footers from "@/components/Footers";
import Headers from "@/components/Headers";

type LayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Carnaval of Screams",
  description: "COS: Cleopatra",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <head>
        <title>Carnaval of Screams</title>
        <meta name='description' content='COS: Cleopatra' />
        <link rel='icon' href='/images/icon.png' type='image/png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
          integrity='sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMhH1ER+IVPRNnaM3fXh3g1g/2dSPLJ88TxWg2'
          crossOrigin='anonymous'
        />
      </head>
      <body className='bg-background text-foreground'>
        <Headers />
        <main>{children}</main>
        <Footers />
      </body>
    </html>
  );
}
