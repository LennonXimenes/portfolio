import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { ContactSection } from "./components/ContactSection"
import { ProjectSection } from "./components/ProjectSection"

export const App = () => {

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
