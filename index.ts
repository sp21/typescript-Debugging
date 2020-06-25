// Import stylesheets
import './style.css';
debugger;
// Write TypeScript code!
    var input = 'stringofcharacters';
    var count: number = 0;
    for (var i = 0; i < input.length; i++) {
        var substring = input.substring(1, 1);
        if (substring== 's') {
            count++;
        }
    }
    console.log('Number of characters',count);
