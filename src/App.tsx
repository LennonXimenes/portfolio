import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { ContactSection } from "./components/ContactSection"

export const App = () => {

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <ContactSection />
      <Footer />
    </div>
  )
}
