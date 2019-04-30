import C from '../../actions/imageDifferencesTypes.js';

const initalState = {
  view: false,
  imgShowOne: false,
  imgShowTwo: false
};

export default function counter(state = initalState, action) {
  switch (action.type) {
  case C.UPDATE_VIEW:
    return { ...state, view: action.view }; 
  case C.UPDATE_SHOW_IMAGE_ONE:
    return { ...state, imgShowOne: action.imgShowOne };
  case C.UPDATE_SHOW_IMAGE_TWO:
    return { ...state, imgShowTwo: action.imgShowTwo };
  default:
    return state;
  }
}
