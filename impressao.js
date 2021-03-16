const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const start = urlParams.get('inicio')
const qtd = urlParams.get('qtd')
var table = document.getElementById("myTable");
var content = '<tr>';
for (var i = 1; i < parseInt(qtd) + 1; i++) {
    var num = parseInt(start) + i - 1;
    content += '<td>' +
        '<div class="uni"><p>Universidade Federal do Sul</p><p> e Sudeste do Pará</p><br/>' +
        '<p>Migração SIADS</p></div>' +
        '<p>'+ num + '</p>' +
        '</td>'
    if ((i !== 0) && (i % 65 === 0)){
        content += '</tr>'
        content += '<tr class="pagebreak">'
    } else if ((i % 5 === 0) && (i !== qtd) && (i % 65 !== 0)){
        content += '</tr>'
        content += '<tr>'
    }
}
content += '</tr>'
table.innerHTML = content;
window.print();
// 9900000001
