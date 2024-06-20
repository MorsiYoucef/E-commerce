import prismadb from '@/lib/prismadb'
import React from 'react'

interface DashBoardPageProps {
  params: { sotreID: string }
}

const DashboardPage: React.FC<DashBoardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.sotreID,
    },
  })
  return <div>Active Store:{store?.id}</div>
}

export default DashboardPage
