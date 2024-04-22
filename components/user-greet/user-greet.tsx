import React from "react"

type StaffProps = {
  id: string
  surname: string
  title: string
}

function UserGreet({ staff }: { staff: StaffProps }) {
  return (
    <div>
      <h5 className="font-bold text-xl">
        Hello, {staff.title} {staff.surname} 👋
      </h5>
      <p className="text-sm text-gray-400">
        Welcome back to Progress Teaching!
      </p>
    </div>
  )
}

export default UserGreet
