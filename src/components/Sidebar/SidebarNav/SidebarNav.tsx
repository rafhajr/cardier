import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'
import { NavLink } from '../NavLink'
import { NavSection } from '../NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink
          title="Dashboard"
          icon={RiDashboardLine}
          href="/app/dashboard"
        />
      </NavSection>

      <NavSection title="Admin">
        <NavLink title="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>
    </Stack>
  )
}
