import { SIDEBAR_NAVIGATION } from '@/constants/index'
import { Stack } from '@chakra-ui/react'
import { RiContactsLine } from 'react-icons/ri'
import { NavLink } from '../NavLink'
import { NavSection } from '../NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        {Object.entries(SIDEBAR_NAVIGATION).map(([key, value]) => (
          <NavLink key={key} title={key} icon={value.icon} href={value.link} />
        ))}
      </NavSection>

      <NavSection title="Admin">
        <NavLink title="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>
    </Stack>
  )
}
