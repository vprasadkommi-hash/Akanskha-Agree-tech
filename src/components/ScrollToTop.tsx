import { useState, useEffect } from "react"
import { Fade, IconButton } from "@mui/material"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <Fade in={visible}>
      <IconButton
        onClick={scrollToTop}
        aria-label="Scroll to top"
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 28 },
          right: { xs: 16, md: 28 },
          zIndex: 1300,
          width: { xs: 44, md: 50 },
          height: { xs: 44, md: 50 },
          bgcolor: "rgba(61,107,63,0.92)",
          color: "common.white",
          backdropFilter: "blur(8px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          transition: "background-color 0.2s ease, transform 0.2s ease",
          "&:hover": {
            bgcolor: "rgba(90,141,92,1)",
            transform: "translateY(-3px)",
          },
        }}
      >
        <ArrowUp size={22} />
      </IconButton>
    </Fade>
  )
}
