import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Box, Typography, Button, Stack, Drawer, IconButton } from "@mui/material"
import { Languages, Menu, X } from "lucide-react"
import { useLocation, Link as RouterLink } from "react-router-dom"
import logo from "../assets/logo.jpeg"
import ContactDialog from "./ContactDialog"

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const isHome = location.pathname === "/"
  const isSolid = scrolled || !isHome

  const [activeSection, setActiveSection] = useState(() =>
    location.pathname === "/" ? location.hash.replace("#", "") : ""
  )

  useEffect(() => {
    if (location.pathname !== "/") return
    const sections = ["services", "solutions", "ai-crop-doctor", "vision"]
    const threshold = 140
    const updateActive = () => {
      let current = ""
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (!el) continue
        const { top } = el.getBoundingClientRect()
        if (top <= threshold) {
          current = sections[i]
          break
        }
      }
      setActiveSection((prev) => (prev === current ? prev : current))
    }
    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    return () => window.removeEventListener("scroll", updateActive)
  }, [location.pathname])

  const getActive = (href: string) => {
    if (href.includes("#")) {
      const section = href.split("#")[1]
      return location.pathname === "/" && activeSection === section
    }
    if (href === "/") return location.pathname === "/" && activeSection === ""
    return location.pathname === href
  }

  const navLinks = [
    { labelKey: "nav.home", href: "/", fallback: "Home" },
    { labelKey: "nav.about", href: "/#vision", fallback: "About Us" },
    { labelKey: "nav.solutions", href: "/#solutions", fallback: "Solutions" },
    { labelKey: "nav.services", href: "/#services", fallback: "Services" },
    { labelKey: "nav.roadmap", href: "/roadmap", fallback: "Roadmap" },
    {
      labelKey: "nav.register",
      href: "https://venkat5923.github.io/akanksha-agree-tech/",
      fallback: "Register",
      isExternal: true,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          width: "100%",
          background: isSolid
            ? "rgba(6, 17, 10, 0.88)"
            : "transparent",
          backdropFilter: isSolid ? "blur(18px)" : "none",
          borderBottom: isSolid ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 300ms ease",
          py: { xs: 1.8, md: 2.2 },
          px: { xs: 2.5, sm: 3.5, md: 5, lg: 7 },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1440,
            mx: "auto",
          }}
        >
          {/* Brand Logo */}
          <Stack
            component={RouterLink}
            to="/"
            direction="row"
            spacing={1.2}
            sx={{
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: { xs: 38, sm: 44 },
                height: { xs: 38, sm: 44 },
                borderRadius: "12px",
                overflow: "hidden",
                bgcolor: "#22c55e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(34,197,94,0.3)",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Akanksha Agree Tech Logo"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1.05rem", sm: "1.2rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Akanksha Agree Tech
              </Typography>
            </Box>
          </Stack>

          {/* Center Pill Navbar (Dribbble/Reference layout) */}
          <Stack
            component="nav"
            direction="row"
            spacing={0.5}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              bgcolor: "rgba(16, 28, 18, 0.72)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              borderRadius: "999px",
              p: "4px 6px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            {navLinks.map((item) => {
              const active = getActive(item.href)
              const isAnchor = item.href.includes("#")
              const label = t(item.labelKey, item.fallback)

              const pillSx = {
                borderRadius: "999px",
                px: 2.2,
                py: 0.7,
                fontSize: "0.85rem",
                fontWeight: active ? 700 : 500,
                textTransform: "none",
                transition: "all 0.2s ease",
                color: active ? "#0d2011" : "rgba(255,255,255,0.85)",
                bgcolor: active ? "#ffffff" : "transparent",
                boxShadow: active ? "0 2px 8px rgba(0,0,0,0.18)" : "none",
                "&:hover": {
                  bgcolor: active ? "#ffffff" : "rgba(255,255,255,0.1)",
                  color: active ? "#0d2011" : "#ffffff",
                },
              }

              if (item.isExternal) {
                return (
                  <Button
                    key={item.labelKey}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={pillSx}
                  >
                    {label}
                  </Button>
                )
              }

              return isAnchor ? (
                <Button key={item.labelKey} component="a" href={item.href} sx={pillSx}>
                  {label}
                </Button>
              ) : (
                <Button key={item.labelKey} component={RouterLink} to={item.href} sx={pillSx}>
                  {label}
                </Button>
              )
            })}
          </Stack>

          {/* Right Actions */}
          <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
            {/* Language Switcher */}
            <Button
              size="small"
              startIcon={<Languages size={14} />}
              onClick={() => i18n.changeLanguage(i18n.language === "te" ? "en" : "te")}
              sx={{
                px: 1.8,
                py: 0.8,
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.45)",
                borderRadius: "999px",
                bgcolor: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(14px)",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.24)",
                  borderColor: "rgba(255,255,255,0.7)",
                },
              }}
            >
              {i18n.language === "te" ? "తెలుగు" : "English"}
            </Button>

            {/* Contact Us Pill Button */}
            <Button
              variant="contained"
              onClick={() => setContactOpen(true)}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                borderRadius: "999px",
                px: 2.6,
                py: 0.85,
                bgcolor: "#ffffff",
                color: "#0d2011",
                fontSize: "0.84rem",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                "&:hover": {
                  bgcolor: "#f1f5f9",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {t("nav.contact", "Contact Us")}
            </Button>

            {/* Mobile Menu Toggle */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "12px",
                bgcolor: "rgba(255,255,255,0.08)",
                p: 0.8,
              }}
            >
              <Menu size={20} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 290,
            p: 3,
            pt: 4,
            bgcolor: "#0d2011",
            color: "#ffffff",
            backgroundImage: "radial-gradient(ellipse at top, rgba(34,197,94,0.15), transparent 70%)",
          },
        }}
      >
        <Stack spacing={4} sx={{ height: "100%" }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 800, fontSize: "1.1rem" }}>Akanksha Agree Tech</Typography>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "10px",
                p: 0.7,
              }}
            >
              <X size={18} />
            </IconButton>
          </Stack>

          <Stack component="nav" spacing={1}>
            {navLinks.map((item) => {
              const active = getActive(item.href)
              return (
                <Button
                  key={item.labelKey}
                  component="a"
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    justifyContent: "flex-start",
                    px: 2,
                    py: 1.1,
                    borderRadius: "12px",
                    color: active ? "#22c55e" : "rgba(255,255,255,0.85)",
                    bgcolor: active ? "rgba(34,197,94,0.12)" : "transparent",
                    fontSize: "0.95rem",
                    fontWeight: active ? 700 : 500,
                    textTransform: "none",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.08)", color: "#ffffff" },
                  }}
                >
                  {t(item.labelKey, item.fallback)}
                </Button>
              )
            })}
          </Stack>

          <Stack spacing={1.5} sx={{ mt: "auto" }}>
            <Button
              onClick={() => {
                setMobileOpen(false)
                setContactOpen(true)
              }}
              sx={{
                width: "100%",
                py: 1.1,
                borderRadius: "999px",
                bgcolor: "#b8f35c",
                color: "#0d2611",
                fontSize: "0.88rem",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "#cbf77e" },
              }}
            >
              {t("nav.contact", "Contact Us")}
            </Button>
          </Stack>
        </Stack>
      </Drawer>

      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
