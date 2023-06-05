import { getTodosGroupedByColumns } from '@/lib/getTodosGroupedByColumns';
import { create } from 'zustand'

interface BoardState {
board: Board;
getBoard: () => void;
}


export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },
  getBoard: async() => {
    const board = await getTodosGroupedByColumns();
    set( { board });
  }
}))




//I need to learn more about state management libraries. Lets start with Zustand and move forward


/// todo: [task1, task 5, task 7]. inprogress:[task 2, task 8, task9]*/

