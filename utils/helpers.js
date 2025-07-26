// Simple debounce function for async operations
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

module.exports = { debounce };
// auto update: Sat Jul 26 19:28:48 UTC 2025
// auto update: Sat Jul 26 19:29:21 UTC 2025
// patch: Sat Jul 26 19:34:05 UTC 2025
// patch: Sat Jul 26 19:37:10 UTC 2025
// patch: Sat Jul 26 19:42:44 UTC 2025
// patch: Sat Jul 26 19:45:16 UTC 2025
