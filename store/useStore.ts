import create from 'zustand'
import ITodo from './types/ITodo'
import createTodoSlice from './slices/todoSlice'

const useStore = create<ITodo>()((...a) =>({
    ...createTodoSlice(...a)
}))

export default useStore;