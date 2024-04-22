import { isDate } from "date-fns"
import React, { useState } from "react"
import { DatePicker } from "@/components/ui/date-picker"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ActionDialog from "@/components/action-dialog"
import { useRouter } from "next/router"
import { useToast } from "@/components/ui/use-toast"

const CoachingBulkDelete = ({
  staff_id,
  school_id,
}: {
  staff_id: string
  school_id: string
}) => {
  const router = useRouter()
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const deleteBulk = async () => {
    if (isDate(date)) {
      setLoading(true)
      try {
        const response = await fetch("/api/update-observation", {
          method: "POST",
          body: JSON.stringify({
            published_at: new Date(date as Date).toISOString(),
            staff_id,
            school_id,
          }),
        })

        if (!response.ok) {
          toast({
            title: "Failed to Delete!",
            description: "please try again",
          })
        }

        // Handle response if necessary
        const result = await response.json()
        if (result) {
          toast({
            title: "Deleted Successfully",
            description: "",
          })
          router.reload()
        } else {
          setOpen(false)
          setLoading(false)
        }
        // ...
      } catch (error) {
        toast({
          title: "Failed to Delete!",
          description: "please try again",
        })
      } finally {
        setOpen(false)
        setLoading(false)
      }
    }
  }

  const onDelete = () => {
    deleteBulk()
  }

  return (
    <div className="pt-8 space-y-4">
      <h3 className="col-span-12 sm:col-span-8 text-lg font-bold text-secondary ">
        Bulk Delete
      </h3>
      <DatePicker
        className="w-full"
        date={date}
        setDate={setDate}
        disabled={{ after: new Date() }}
      />
      <div className="bg-cyan-100 shadow-sm rounded flex items-center p-3 text-[10px] space-x-2 w-full">
        <Image
          height={20}
          width={20}
          src="/images/alarm.png"
          alt="info"
          style={{ objectFit: "contain" }}
        />
        <p>Warning: This action cannot be undone.</p>
      </div>

      <ActionDialog
        title="Are you absolutely sure?"
        description="This action cannot be undone."
        onAction={onDelete}
        open={open}
        setOpen={setOpen}
        actionLabel="Delete"
        loading={loading}
      >
        <Button disabled={!date} variant="destructive" className="w-full h-12">
          Delete
        </Button>
      </ActionDialog>
    </div>
  )
}

export default CoachingBulkDelete
