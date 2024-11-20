import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Navbar from "../components/common/Navbar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{minHeight:"100vh",margin:"0",padding:"0"}}>
        <Header/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}