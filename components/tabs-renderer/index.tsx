import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabsDataProps {
  label: string
  value: string
  content: JSX.Element
}

interface TabsRendererProps {
  tabsData: TabsDataProps[]
  defaultValue: string
}

const TabsRenderer = ({ tabsData, defaultValue }: TabsRendererProps) => {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="w-full h-12">
        {tabsData.map((tab) => (
          <TabsTrigger
            key={tab.value}
            className="w-full h-12 text-primary data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-lg"
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsData.map((tab) => (
        <TabsContent
          value={tab.value}
          key={tab.value}
          className="space-y-3 pt-8"
          data-testid={`tabs-content-${tab.value}`}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default TabsRenderer
