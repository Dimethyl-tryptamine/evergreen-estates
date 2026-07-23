
import Footer from "../componenets/Layout/Footer";
import Header from "../componenets/Layout/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <>
      <Header/>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
    
    
  )
}