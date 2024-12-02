import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_API = process.env.NEXT_PUBLIC_BASE_API

export const getBanner = createAsyncThunk('banner', async (page: number) => {
  try {
    const response = await axios.get(`${BASE_API}/danh-sach/phim-moi-cap-nhat`, {
      params: {
        page: page,
      },
    })
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('Data not found!')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
})
