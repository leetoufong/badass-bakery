export const formatUSD = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

export const throttle = (fn, delay) => {
    let timeoutId;
    
    return function (...args) {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                fn.apply(this, args);
                timeoutId = null;
            }, delay);
        }
    };
};
