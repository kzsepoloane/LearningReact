export function executeInMinute(func: () => void) {
  setTimeout(func, 1000 * 60);
}
export function executeEveryMinute(func: () => void) {
  setInterval(func, 1000 * 60);
}
