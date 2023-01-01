const initialState = {
  searches: [{ id: 1, text: "my post" }],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      const dataForSearch = {
        id:
          state.searches.length === 0
            ? 1
            : Math.max(...state.searches.map((item) => item.id)) + 1,
        ...action.payload,
      };
      return { ...state, searches: [...state.searches, dataForSearch] };

    case "DELETE_SEARCH":
      const filtered = state.searches.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, searches: filtered };

    default:
      return state;
  }
}
