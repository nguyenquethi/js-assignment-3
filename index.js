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
        count++;
       }
   }
   alert (sum);
});

document.getElementById('btnSoNhoNhat').addEventListener('click', function() {
    for (var i = 0; i < arrSoN.length; i++) {
        var min = arrSoN[0];
        if (arrSoN[i] < min) {
            min = arrSoN[i];
        }
    }
    alert(`Số nhỏ nhất trong mảng ${min}`);
});

document.getElementById('btnSoDuongNhoNhat').addEventListener('click', function() {
    for (var i = 0; i < arrSoN.length; i++) {
        var minPos = arrSoN[0];
        if (arrSoN[i] > 0 && arrSoN[i] < minPos){
            minPos = arrSoN[i];
        }
    }
    alert(`Số dương nhỏ nhất trong mảng ${minPos}`);
});