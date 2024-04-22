import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { LoaderIcon } from "lucide-react"

interface Props {
  onAction: () => void
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  description?: string
  actionLabel: string
  children: React.ReactNode
  loading?: boolean
}

const ActionDialog = ({
  onAction,
  open,
  setOpen,
  title,
  description,
  actionLabel,
  children,
  loading = false,
}: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
          <Button disabled={loading} onClick={onAction}>
            {loading && <LoaderIcon className="animate-spin mr-2" />}
            {actionLabel}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ActionDialog
