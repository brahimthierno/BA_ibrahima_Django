
document.getElementById('mi').addEventListener('keyup',tableFilter);
function tableFilter(){
    let v = document.getElementById('mi').value
    let tab = document.getElementById('tab')
    let trs = tab.getElementsByTagName('tr')
    let vTd;
    for(let i=1;i<trs.length;i++){
        vTd = trs[i].getElementsByTagName('td')[0].innerText
        if(vTd.toLocaleLowerCase().indexOf(v.toLocaleLowerCase())>-1){
            trs[i].style.display = ''
        }else {
            trs[i].style.display = 'none'
        }
    }
}
