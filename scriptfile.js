
let html_code = "";

for (let i = 1; i <= 12; i++) {
    html_code += `<img src="./img/img${i}.jpg" alt="galeriebild">`
}

document.getElementById("content").innerHTML = html_code;