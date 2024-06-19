import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { storId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storId,
      userId,
    },
  })
  if (!store) {
    redirect('/')
  }
  return (
    <>
      <div>This will be a navbar</div>
      {children}
    </>
  )
}
