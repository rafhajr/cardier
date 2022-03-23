import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

export function Dashboard() {
  return <h1>Dashboard</h1>
}

Dashboard.layout = AuthenticatedLayout
