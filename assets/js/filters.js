//
// filters.js
//
function filterBy(list, value) {
  return list.filter(function(item) {
    return item.indexOf(value) > -1;
  });
}

function findBy(list, value) {
  return list.filter(function(item) {
    return item == value
  });
}

function reverse(value) {
  return value.split('').reverse().join('');
}

function wrap (value, begin, end) {
  return begin + value + end
}

export {filterBy, reverse, findBy, currencyDisplay, wrap}
