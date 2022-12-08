export default function hashToObj(obj) {
  return obj
    .split('&')
    .map((v) => v.split('='))
    .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {});
}
