const table = document.querySelector("table")
const abc = ' ABCDEFGH'

chess(2, 1)

function chess(l, n) {
    let kod = ''
    for (let i = 0; i <= 8; i++) {
        kod += '<tr>'
        for (let j = 0; j <= 8; j++) {
            let color = (j === 0 || i === 0) ? '' : 
                        (i + j) % 2 ? 'yellow' : 'orange'
            let cell =  i === 0 ? abc[j] :
                        j === 0 ? i : 
                        j == l && i == n ? '♞' : ''
            
            if((j - l === 2 || j - l === -2) && (i- n ===1 || i-n ===-1) && i>0 && j>0) {cell=='*';}
            else if((j - l === 1 || j - l === -1) && (i- n === 2 || i-n ===-2) && i>0 && j>0) {cell=='*';}
                    
            kod += `<td onclick="chess(${j}, ${i})" class="${color}">${cell}</td>`
        }
        kod += '</tr>'
    }
    table.innerHTML = kod
}