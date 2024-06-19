import { auth } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()

    if (!userId) {
      return new NextRequest('Unauthorized', { status: 401 })
    }
  } catch (error) {
    console.log('[STORES_POST]', error)
    return new NextRequest('Interal error', { status: 500 })
  }
}
