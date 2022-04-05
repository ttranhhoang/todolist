import TYPING_VALUE from './constants';
const initialState = [
  {
    value: "",
    todos: [],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
      case TYPING_VALUE:
          return {
            ...state,
            value,
          };

    default:
      throw new Error("Lỗi reducer");
  }
};
export { initialState };
export default reducer;
