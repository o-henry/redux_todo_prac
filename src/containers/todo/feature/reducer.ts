import {
  createSlice,
  PayloadAction,
  createAction,
  nanoid,
} from "@reduxjs/toolkit";

import ITodo, { TodoList } from "./type";

// ducks pattern => action + reducer

/**
 * @param createAction :
 * type을 인자로 받아 액션 함수를 만들어준다.
 * createAction의 /ADD 부분은 reducer의 key값과 일치해야 한다.
 * https://redux-toolkit.js.org/api/createAction
 */
const actionPrefix = "todos";
// const addTodo = createAction<object>(`${actionPrefix}/ADD`);
// const toggleTodo = createAction<object>(`${actionPrefix}/TOGGLE`);

// export const actions = {
//   addTodo,
//   toggleTodo,
// };

/**
 * @param createSlice :
 * As createSlice creates your actions as well as your reducer for you, you don't have to worry about type safety here. Action types can just be provided inline:
 * Immer library의 produce로 래핑합니다. 이 함수를 사용하는 개발자는 리듀서 내부의 상태를 "변형하는"코드를 작성할수 있으며, Immer는 상태를 안전하게 불변하게 다룰수 있도록 처리해줍니다.
 * 객체에서 key/value로 구분되는 object를 "slice"라고 하며, slice의 상태를 업데이트 하는 리듀서를 "slice reducer"라고 합니다
 */

const initialState: TodoList = {
  list: [],
};

const reducers = {
  ADD: (
    { list }: TodoList,
    { payload: { text, completed } }: PayloadAction<ITodo>
  ) => {
    const newTodo: ITodo = {
      id: nanoid(),
      text: text.toString(),
      completed,
    };

    list.push(newTodo);
  },

  TOGGLE: (
    { list }: TodoList,
    { payload: { id, completed } }: PayloadAction<ITodo>
  ) => {
    const targetIdx = list.findIndex((item: ITodo) => item.id === id);
    list[targetIdx].completed = !completed;
  },
};

/**
 * @param name : 생성 된 action types를 생성하기 위해 사용되는 prefix
 * @param initialState : 초기 상태
 * @param reducers : 액션이 dispatch 될때 실행될 reducer
 */

const todoSlice = createSlice({
  name: actionPrefix,
  initialState,
  reducers,
});

export default todoSlice;
