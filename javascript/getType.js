export  function t (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}