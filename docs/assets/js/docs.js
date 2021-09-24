function zoomImage(element) {
  if (element.classList.contains('full')) {
    element.classList.remove('full');
    element.classList.add('small');
  }
  else if (element.classList.contains('small')) {
    element.classList.remove('small');
    element.classList.add('full');
  }
};
