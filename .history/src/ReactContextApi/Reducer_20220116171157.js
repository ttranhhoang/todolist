const initialState = [
  {
    value: "",
    todos: [],
  },
];

const reducer = (state, type) => {
  switch (type) {
      case TYPING_VALUE:
          return []

    default:
      throw new Error("Lỗi reducer");
  }
};
export { initialState };
export default reducer;
