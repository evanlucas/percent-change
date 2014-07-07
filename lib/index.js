module.exports = change

function change(from, to, places, fmt) {
  if ('boolean' === typeof places) fmt = places, places = 2

  places = 'number' === typeof places
    ? places
    : 2

  from = +from
  to = +to
  if (isNaN(from)) return 0
  if (isNaN(to)) return 0
  if (from === 0) return Infinity
  var o = ((to - from) / from)
  if (fmt) {
    o = o * 100
    o = o.toFixed(places)
    return o + '%'
  }
  return +o
}

change.format = function(from, to, places) {
  return change(from, to, places, true)
}
