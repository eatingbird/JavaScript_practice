function firstDuplicate(a) {
  var occur = [];
  for (let i = 0; i < a.length; i++) {
    if (occur.indexOf(a[i]) !== -1) {
      return a[i];
    } else {
      occur.push(a[i]);
    }
  }
  return -1;  
}
