export default function when(check) {
  if (check) {
    return function (fn) {
      return fn();
    }
  }

  return () => {};
}
