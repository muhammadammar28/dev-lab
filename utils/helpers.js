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
