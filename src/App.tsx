// Akanskha Agree Tech Web App
import { ThemeProvider, CssBaseline } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import theme from "./theme"
import "./i18n"
import Header from "./components/Header"
import Hero from "./components/Hero"
import PartnerBrands from "./components/PartnerBrands"
import LegacyStatement from "./components/LegacyStatement"
import AgricultureProblems from "./components/AgricultureProblems"
import OurSolutions from "./components/OurSolutions"
import Services from "./components/Services"
import OurVision from "./components/OurVision"
import ContactSection from "./components/ContactSection"
import AICropDoctor from "./components/AICropDoctor"
import GovtSchemes from "./components/GovtSchemes"
import Roadmap from "./pages/Roadmap"
import TeamMembers from "./components/TeamMembers"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PartnerBrands />
              <LegacyStatement />
              <AgricultureProblems />
              <OurSolutions />
              <Services />
              <AICropDoctor />
              <GovtSchemes />
              <OurVision />
              <ContactSection />
              <TeamMembers />
            </>
          }
        />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
