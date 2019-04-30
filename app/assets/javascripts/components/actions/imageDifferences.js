import C from './imageDifferencesTypes.js';

export function updateView(view) {
  return {
    type: C.UPDATE_VIEW,
    view: view
  };
}

export function updateShowImageOne(imgShowOne) {
  return {
    type: C.UPDATE_SHOW_IMAGE_ONE,
    imgShowOne: imgShowOne
  };
}

export function updateShowImageTwo(imgShowTwo) {
  return {
    type: C.UPDATE_SHOW_IMAGE_TWO,
    imgShowTwo: imgShowTwo
  };
}
