export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const s = {
        ...state,
        transactions: state.transactions.filter((t) => t.id != action.payload),
      };
      console.log(s);
      return s;
    case "ADD_TRANSACTION":
      const s1 = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      console.log(s1);
      return s1;
    default:
      return state;
  }
};
