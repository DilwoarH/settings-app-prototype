import { useRouter } from "next/router"
import {
  ClipboardList,
  Cog,
  Command,
  FileBadge2,
  Home,
  School,
  Sparkle,
  Users2,
} from "lucide-react"
import { SidebarNavItem } from "@/types"

interface SidebarProps {
  items: SidebarNavItem[]
}

const Sidebar = ({ items }: SidebarProps) => {
  const router = useRouter()

  const icons = (icon: string) => {
    switch (icon) {
      case "home":
        return <Home className="text-white" />
      case "appraisal":
        return <ClipboardList className="text-white" />
      case "coaching":
        return <School className="text-white" />
      case "site-setting":
        return <Cog className="text-white" />
      case "behaviour":
        return <Sparkle className="text-white" />
      case "attainment":
        return <FileBadge2 className="text-white" />
      case "strategies":
        return <Command className="text-white" />
      case "users":
        return <Users2 className="text-white" />
      default:
        return null
    }
  }

  return (
    <>
      <aside
        data-testid="test-sidebar"
        className="z-30 fixed flex items-center justify-between left-1/2 -translate-x-1/2  w-full mx-auto sm:justify-center sm:mx-0 sm:left-0 sm:translate-x-0 navigation-shadow bg-pt-primary py-4 px-3 sm:static sm:h-screen sm:w-[120px] sm:flex-col sm:py-60 bottom-0 "
      >
        <div className="flex items-center sm:flex-col sm:gap-y-6 2xl:gap-y-10 w-full justify-between sm:justify-self-auto">
          {items?.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item?.href)}
              className={`${
                router.asPath === item?.href ? "bg-pt-primarydark" : ""
              } w-16 h-14  rounded-[10px] flex justify-center flex-col items-center cursor-pointer hover:bg-opacity-25`}
            >
              {icons(item.icon)}
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
