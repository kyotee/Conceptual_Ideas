// import C from "../constants/action-types.js";

// const initialState = (localStorage['redux-store']) ?
//   JSON.parse(localStorage['redux-store']) : {
//   bidInfo: {
//     bidPrice: 50,
//     bidCount: 0,
//     seller: "none"
//   },
//   soldStatus: false
// };


// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case C.ADD_BID:
//       return { ...state, bidInfo: action.payload};
//      case C.SOLD_BID:
//       return { ...state, soldStatus: action.payload}; 
//     default:
//       return state;
//   }
