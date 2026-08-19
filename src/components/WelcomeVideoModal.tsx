import { useState, useRef, useEffect } from "react"
import { Box, Button, Fade } from "@mui/material"
import { ChevronRight } from "lucide-react"

interface WelcomeVideoModalProps {
  open: boolean
  videoSrc?: string
  onComplete: () => void
}

export default function WelcomeVideoModal({
  open,
  videoSrc,
  onComplete,
}: WelcomeVideoModalProps) {
  const [isExiting, setIsExiting] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ensure muted playback for strict mobile browsers (iOS/Android)
          if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch(() => {})
          }
        })
      }
    }
  }, [open, videoSrc])

  const handleFinish = () => {
    setIsExiting(true)
    setTimeout(() => {
      onComplete()
    }, 400)
  }

  if (!open) return null

  return (
    <Fade in={!isExiting} timeout={400}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99999,
          bgcolor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          /* Support modern mobile dynamic viewport height */
          "@supports (height: 100dvh)": {
            height: "100dvh",
            minHeight: "100dvh",
          },
          userSelect: "none",
          touchAction: "none",
        }}
      >
        {/* Subtle Ambient Radial Lighting for both Mobile & Desktop */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.18) 0%, rgba(0, 0, 0, 0.95) 75%)",
            pointerEvents: "none",
          }}
        />

        {/* Video Animation Container */}
        {videoSrc && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "100vw",
              maxHeight: "100dvh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              p: { xs: 1, sm: 2, md: 4 },
              boxSizing: "border-box",
            }}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              playsInline
              muted
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              onEnded={handleFinish}
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </Box>
        )}

        {/* Responsive, Touch-friendly Skip Button */}
        <Box
          sx={{
            position: "absolute",
            top: {
              xs: "max(14px, env(safe-area-inset-top, 14px))",
              sm: "max(24px, env(safe-area-inset-top, 24px))",
            },
            right: {
              xs: "max(14px, env(safe-area-inset-right, 14px))",
              sm: "max(28px, env(safe-area-inset-right, 28px))",
            },
            zIndex: 10,
          }}
        >
          <Button
            onClick={handleFinish}
            endIcon={<ChevronRight size={16} />}
            sx={{
              color: "rgba(255, 255, 255, 0.85)",
              bgcolor: "rgba(0, 0, 0, 0.55)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "30px",
              fontSize: { xs: "0.72rem", sm: "0.8rem" },
              fontWeight: 700,
              letterSpacing: "0.03em",
              px: { xs: 1.8, sm: 2.2 },
              py: { xs: 0.6, sm: 0.75 },
              minHeight: { xs: "36px", sm: "40px" },
              textTransform: "none",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                borderColor: "rgba(74, 222, 128, 0.6)",
                transform: "scale(1.04)",
              },
              "&:active": {
                transform: "scale(0.96)",
              },
            }}
          >
            Skip
          </Button>
        </Box>
      </Box>
    </Fade>
  )
}
