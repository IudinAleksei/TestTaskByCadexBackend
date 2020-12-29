const checkRequestSizes = (sizes) => {
  const requeredSizes = ['x', 'y', 'z'];
  const isValid = requeredSizes.every((size) => Number.isFinite(sizes[size]) && sizes[size] > 0 );
  return isValid;
}

module.exports = checkRequestSizes;
