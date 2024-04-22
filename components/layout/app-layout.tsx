import React from "react"
import { dashboardConfig } from "@/config/dashboard"
import Sidebar from "@/components/sidebar/sidebar"
import Header from "@/components/header/header"
import { Toaster } from "@/components/ui/toaster"

interface AppLayoutProps {
  children: React.ReactNode
  title: string
}

function AppLayout(props: AppLayoutProps) {
  const { title } = props
  return (
    <div className="pb-28 sm:pb-0  sm:flex sm:overflow-hidden sm:h-screen">
      <Sidebar items={dashboardConfig.navMenu} />
      <div className="w-full sm:overflow-auto style-scrollbar pb-24">
        <div className="sm:w-full sm:max-w-6xl sm:overflow-auto sm:mx-auto p-2 sm:px-6">
          <Header title={title} />
          {props.children}
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default AppLayout
