var arrSoN = [];
document.getElementById('btnThemSo').onclick = function () {
    var soN = document.getElementById('txt-soN').value *1;
    arrSoN.push(soN);
    document.getElementById('mangSoN').innerHTML = arrSoN;
}

document.getElementById('btnTinhTongSoDuong').addEventListener('click', function() {
    var sum = 0;
    var count = 0;
   for (var i = 0; i < arrSoN.length; i++) {
       if (arrSoN[i] > 0) {
        sum += arrSoN[i];
       }
   }
   alert (sum);
});