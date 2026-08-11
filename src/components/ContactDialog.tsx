import { Dialog, DialogContent, IconButton, Box } from "@mui/material"
import { X } from "lucide-react"
import ContactSection from "./ContactSection"

interface ContactDialogProps {
  open: boolean
  onClose: () => void
}

export default function ContactDialog({ open, onClose }: ContactDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: { xs: 2, sm: 3 },
          maxHeight: "95vh",
          bgcolor: "transparent",
          boxShadow: "none",
          overflow: "hidden",
          margin: { xs: 1, sm: 2 },
        },
      }}
    >
      <DialogContent sx={{ p: 1, bgcolor: "transparent", overflow: "hidden" }}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#f7f6ee",
            borderRadius: { xs: 2, sm: 3 },
            overflow: "hidden",
            maxHeight: "calc(95vh - 16px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={onClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              color: "#16241c",
              bgcolor: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(61,107,63,0.15)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.95)" },
            }}
          >
            <X size={20} />
          </IconButton>
          <Box sx={{ overflowY: "auto", overflowX: "hidden" }}>
            <ContactSection inDialog />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
