import { handleSignOut } from '@/contexts/auth'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

export function Dashboard() {
  return <button onClick={handleSignOut}>logout</button>
}

Dashboard.layout = AuthenticatedLayout
