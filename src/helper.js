// export const makeEndPoint = (url) => {
//   console.log(url);
//   const endPoint = url.split('/');
//   return endPoint[endPoint.length - 1];
// }

export const makeEndPoint = (url) => {

  const endPoint = url.split('v2/');
  // console.log(endPoint);
  return endPoint[endPoint.length - 1];
}
