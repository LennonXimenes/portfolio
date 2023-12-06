import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

export const App = () => {

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <Footer />
    </div>
  )
}
