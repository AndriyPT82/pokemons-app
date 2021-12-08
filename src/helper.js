export const makeEndPoint = (url) => {
  const endPoint = url.split('/');
  return endPoint[endPoint.length - 1];
}
