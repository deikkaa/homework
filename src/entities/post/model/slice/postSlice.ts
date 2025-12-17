import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { Post } from '../types'

const postAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
})

const initialState = postAdapter.getInitialState()

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  },
})

export const { reducer: postReducer } = postSlice
export const { selectAll: selectAllPosts } = postAdapter.getSelectors(
  (state: any) => state.post
)