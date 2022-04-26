import { api } from '@/services/api'
import { useCallback } from 'react'
// import {
//   Si
// } from '../contexts/cards/models'

const sendEmail = useCallback(async ({ data }: any): Promise<void> => {
  try {
    const { data: newData } = await api.post<any>('api/send',{
      data
    })

    console.log(newData)
  } catch(err){
    console.log(err)
  } finally {
    console.log('uepa')
  }
}, [])
