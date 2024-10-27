// app/layout.tsx
import Header from "@/components/Headers";
import Footer from "@/components/Footers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col bg-black'>
        <Header />
        <main className='flex-grow'>
          {" "}
          {/* Adjusts padding for header height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
