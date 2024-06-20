import prismadb from '@/lib/prismadb'

interface DashBoardPageProps {
  params: { sotreID: string }
}

const DashboardPage: React.FC<DashBoardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.sotreID,
    },
  })
  return <div>Active Store:{store?.name}</div>
}

export default DashboardPage
