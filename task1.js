function filter_list(a) {
  return a.filter(function(x) {
    if (typeof(x) === 'number')
      return true;
  });
}
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
