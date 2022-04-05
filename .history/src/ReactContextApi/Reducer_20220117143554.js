import TYPING_VALUE from ''
const initialState = [
  {
    value: "",
    todos: [],
  },
];

const reducer = (state, action) => {
  switch (action) {
      case TYPING_VALUE:
          return []

    default:
      throw new Error("Lỗi reducer");
  }
};
export { initialState };
export default reducer;
