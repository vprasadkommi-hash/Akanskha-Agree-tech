// Akanksha Agree Tech Web App
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
import { useState, lazy, Suspense } from "react"
import TeamMembers from "./components/TeamMembers"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ComingSoonPopup from "./components/ComingSoonPopup"
import WelcomeVideoModal from "./components/WelcomeVideoModal"
import welcomeVideo from "./assets/welcome-video.mp4"

const Roadmap = lazy(() => import("./pages/Roadmap"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  const handleVideoComplete = () => {
    setShowWelcomeVideo(false)
    setShowPopup(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WelcomeVideoModal
        open={showWelcomeVideo}
        videoSrc={welcomeVideo}
        onComplete={handleVideoComplete}
      />
      <ComingSoonPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <Header />
      <Suspense fallback={null}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
