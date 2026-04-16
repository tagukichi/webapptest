const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf-8');
const marker = 'FLOCSS - Architecture for CSS';
let startIndex = css.indexOf(marker);

if(startIndex !== -1) {
    let base = css.substring(0, startIndex);
    let bad = css.substring(startIndex);
    
    // fix spaces around hyphens in words like font - size, --color - primary
    bad = bad.replace(/([a-zA-Z0-9_])\s+-\s+([a-zA-Z0-9_])/g, '$1-$2');
    bad = bad.replace(/([a-zA-Z0-9_])\s+-\s+([a-zA-Z0-9_])/g, '$1-$2'); // double pass
    
    // fix pseudo elements like :: before
    bad = bad.replace(/::\s+([a-zA-Z])/g, '::$1');
    
    // fix percentages like 100 %
    bad = bad.replace(/(\d+)\s+%/g, '$1%');

    fs.writeFileSync('style.css', base + bad);
    console.log('Fixed style.css');
} else {
    console.log('Marker not found');
}
