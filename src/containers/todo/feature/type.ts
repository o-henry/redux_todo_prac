export default interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoList {
  list: ITodo[];
}

export type FilterType = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
