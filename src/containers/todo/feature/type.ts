export default interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoList {
  list: ITodo[];
}
