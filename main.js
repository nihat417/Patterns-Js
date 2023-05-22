const n=document.getElementById("n");
const table=document.querySelector("table");
let kod='';

const methods = [
    { value: 2, label: "Method1", method: cedvel1 },
    { value: 3, label: "Method2", method: cedvel2 },
    { value: 4, label: "Method3", method: cedvel3 },
    { value: 5, label: "Method4", method: cedvel4 },
    { value: 6, label: "Method5", method: cedvel5 },
    { value: 7, label: "Method6", method: cedvel6 },
    { value: 8, label: "Method7", method: cedvel7 },
    { value: 9, label: "Method Color 1", method: cedvel8 },
    { value: 10, label: "Method Color 2", method: cedvel9 },
    { value: 11, label: "Method Color 3", method: cedvel10 },
    { value: 12, label: "Method Color 4", method: cedvel11 },
    { value: 13, label: "Method Color 5", method: cedvel12 },
    { value: 14, label: "Method Color 6", method: cedvel13 },
];

for (let i = 0; i < methods.length; i++) {
    kod += `<option value="${methods[i].value}">${methods[i].label}</option>`;
}

n.innerHTML = kod;
n.value = methods[0].value;

SelectionChance();

function SelectionChance(){
    const selectedValue =  +n.value;
    const selectedMethod = methods.find(method => method.value === selectedValue);
    selectedMethod.method();
}

function cedvel1() {
    let c =7;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = (i <= j - 1 && i <= c - j) || (i >= j-1 && i >= c - j) ?  c-j: '';
            kod += `<td>${x}</td>`;
        }
        kod += '</td>';
    }
    
    table.innerHTML = kod;
}


function cedvel2() {
let y = 1;
let c =5;
let kod = '';
for (let i = 0; i <= c-1; i++) {
    kod += '<tr>';
    for (let j = 1; j <= c; j++) {
        let x = (i + j) % 2 ? y : '';
        kod += `<td>${x}</td>`;
        y++;
    }
    kod += '</tr>';
}

table.innerHTML = kod;
}


function cedvel3() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = (i + j) 
            kod += `<td>${x}</td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel4() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x =  j 
            kod += `<td>${x}</td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel5() {
    let y = 1;
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x =  (c>=i-j) ? y :''
            kod += `<td>${x}</td>`;
            y++;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel6() {
    let y = 1;
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x =  ((i+j)%2) ? '0' :y
            kod += `<td>${x}</td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel7() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x =  (j%2) ? j :''
            kod += `<td>${x}</td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}


function cedvel8() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x =  (j%2) ? "bggreen" : "bgwhite"
            kod += `<td class="${x}"></td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel9() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = (i + j) % 2  ? "bggreen" : "bgwhite"
            kod += `<td class="${x}"></td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel10() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = i>=j ? "bggwhite" : "bggreen"
            kod += `<td class="${x}"></td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel11() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = (i%2) ? "bggreen" : "bggwhite"
            kod += `<td class="${x}"></td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}

function cedvel12() {
    let c =5;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = ( i=== 0 || j===1 || i===c-1 || j-1=== c-1) ? "bggreen" : "bgwhite"
            kod += `<td class="${x}"></td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}


function cedvel13() {
    let c =7;
    let kod = '';
    for (let i = 0; i <= c-1; i++) {
        kod += '<tr>';
        for (let j = 1; j <= c; j++) {
            let x = (i <= j - 1 && i <= c - j) || (i >= j-1 && i >= c - j) ? "bggreen" : "bgwhite"
            kod += `<td class="${x}"></td>`;
        }
        kod += '</tr>';
    }
    
    table.innerHTML = kod;
}