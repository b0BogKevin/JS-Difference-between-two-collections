function diff(a, b){
  return [...new Set([...a, ...b].filter(val => a.includes(val) ^ b.includes(val)))].sort();
}