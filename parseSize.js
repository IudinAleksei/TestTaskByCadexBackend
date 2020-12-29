const parseSizesFromGet = (params) => {
  const sizesArray = params.slice(2).split('&');
  const sizes = sizesArray.reduce((acc, elem) => {
    acc[elem[0]] = +elem.slice(2);
    console.log(acc[elem[0]]);
    return acc;
  }, {});
  return sizes;
}

module.exports = parseSizesFromGet;
