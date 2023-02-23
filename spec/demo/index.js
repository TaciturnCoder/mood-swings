let regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

function hex2hsl(hex) {
    let digits = regex.exec(hex);

    let r = parseInt(digits[1], 16) / 255;
    let g = parseInt(digits[2], 16) / 255;
    let b = parseInt(digits[3], 16) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h;
    let s;
    let l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        } // switch (max)
        h /= 6;
    } // max != min

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
} // hex2hsl()

function swing(elem) {
    let hex = elem.value;
    ({ h, s, l } = hex2hsl(hex));

    let prefix = '--mood-swings-' + elem.name;
    document.documentElement.style.setProperty(`${prefix}-h`, h);
    document.documentElement.style.setProperty(`${prefix}-s`, s);
    document.documentElement.style.setProperty(`${prefix}-l`, l);
} // swing()

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
} // hslToHex()

// On load, set the initial values
window.addEventListener('load', () => {
    document.querySelectorAll('input').forEach((elem) => {
        let prefix = '--mood-swings-' + elem.name;

        // read --mood-swings-{elem.name}-h
        let h = getComputedStyle(document.documentElement).getPropertyValue(`${prefix}-h`);
        let s = getComputedStyle(document.documentElement).getPropertyValue(`${prefix}-s`);
        let l = getComputedStyle(document.documentElement).getPropertyValue(`${prefix}-l`);

        elem.value = hslToHex(h, s, l);
        console.log(`Element ${elem.name} set to ${elem.value}`)
    }); // document.querySelectorAll('input').forEach()
}); // window.addEventListener('load')
