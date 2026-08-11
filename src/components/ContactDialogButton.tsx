import { useState } from "react"
import Button, { type ButtonProps } from "@mui/material/Button"
import ContactDialog from "./ContactDialog"

export default function ContactDialogButton(props: ButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        {...props}
        onClick={(event) => {
          props.onClick?.(event)
          setOpen(true)
        }}
      />
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}
