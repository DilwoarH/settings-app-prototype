import { User } from "@prisma/client"
import type { Icon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon: string
  href: string
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type NavMenuItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon: string
  href: string
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type DashboardConfig = {
  navMenu: NavMenuItem[]
}
