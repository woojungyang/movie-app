export function sliceLongText(text = '', max = '10') {
  return text.length > max ? text.slice(0, max) + '....' : text;
}
