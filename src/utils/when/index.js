export default function when(check) {
  if (check) {
    return function truthy(fn) {
      return fn();
    };
  }

  return () => {};
}
