//Bài 1

/**
 * Khối 1: input
 * nhập vào 3 số nguyên: num1, num2, num3
 * Khối 2:
 * B1: tạo biến và lấy giá trị từ form
 * B2: kiểm tra điều kiện
 * a > b, a > c, nếu b > c => a > b > c
 *                   b < c => a > c > b
 * b > a, b > c, nếu a > c => b > a > c
 *                   a < c => b > c > a
 * c > a, c > b, nếu a > b => c > a > b 
 *                   a < b => c > b > a
 * B3: hiển thị kết quả
 * 
 * Khối 3:
 * xuất ra kết quả
 */


function sapXep() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    if (a > b && a > c) {
        if (b > c) {
            document.getElementById("result").innerHTML = a + " > " + b + " > " + c;
        } else {
            document.getElementById("result").innerHTML = a + " > " + c + " > " + b;
        }
    }
    if (b > a && b > c) {
        if (a > c) {
            document.getElementById("result").innerHTML = b + " > " + a + " > " + c;
        } else {
            document.getElementById("result").innerHTML = b + " > " + c + " > " + a;
        }
    }
    if (c > a && c > b) {
        if (a > b) {
            document.getElementById("result").innerHTML = c + " > " + a + " > " + b;
        } else {
            document.getElementById("result").innerHTML = c + " > " + b + " > " + a;
        }
    }

}
document.getElementById("sapXep").onclick = sapXep;

//Bài 2

/**
 * Khối 1: input
 * B M A E
 * 
 * Khối 2:
 * B1: tạo biến và lấy giá trị từ form
 * B2: kiểm tra điều kiện
 * chọn ai thì đưa ra lời chào tương ứng
 * B3: hiển thị kết quả
 * 
 * Khối 3:
 * xuất ra kết quả
 */

function chonThanhVien() {
    var thanhVien = document.getElementById("thanhvien").value;
    // console.log(thanhVien);
    switch (thanhVien) {
        case "B":
            document.getElementById("result2").innerHTML = "Chào Bố";
            break;
        case "M":
            document.getElementById("result2").innerHTML = "Chào Mẹ";
            break;
        case "A":
            document.getElementById("result2").innerHTML = "Chào Anh";
            break;
        case "E":
            document.getElementById("result2").innerHTML = "Chào Em";
            break;

        default:
            document.getElementById("result2").innerHTML = "Chào Người Lạ ơi!";
            break;
    }


}
document.getElementById("chao").onclick = chonThanhVien;

//Bài 3

/**
 * Khối 1: input
 * num1 num2 num3
 * 
 * Khối 2:
 * B1: tạo biến và lấy giá trị từ form
 * B2: kiểm tra điều kiện
 * nếu num % 2 = 0 => chẵn
 * count++
 * soLe = 3 - count
 * 
 * B3: hiển thị kết quả
 * 
 * Khối 3:
 * xuất ra kết quả
 */

function demChanLe() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var count = 0;

    if (num1 % 2 == 0) {
        count++;
    }
    if (num2 % 2 == 0) {
        count++;
    }
    if (num3 % 2 == 0) {
        count++;
    }
    var soLe = 3 - count;
    document.getElementById("result3").innerHTML = "Có " + count + " số chẵn và " + soLe + " số lẽ";
}
document.getElementById("dem").onclick = demChanLe;

//Bài 4

/**
 * Khối 1: input
 * canh1 canh2 canh3
 * 
 * Khối 2:
 * B1: tạo biến và lấy giá trị từ form
 * B2: kiểm tra điều kiện
 * nếu canh1 == canh2 && canh1 == canh3 => tam giác đều
 * nếu canh1 == canh2 || canh2 == canh3 || canh1 == canh3 => tam giác cân
 * nếu (canh1 * canh1 == canh2 * canh2 + canh3 * canh3) || (canh2 * canh2 == canh1 * canh1 + canh3 * canh3) || (canh3 * canh3 == canh2 * canh2 + canh1 * canh1) => tam giác vuông
 * 
 * 
 * B3: hiển thị kết quả
 * 
 * Khối 3:
 * xuất ra kết quả
 */

function tamGiac() {
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;

    if (canh1 == canh2 && canh1 == canh3) {
        document.getElementById("result4").innerHTML = "Đây là tam giác đều !";
    } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
        document.getElementById("result4").innerHTML = "Đây là tam giác cân !";
    } else if ((canh1 * canh1 == canh2 * canh2 + canh3 * canh3) || (canh2 * canh2 == canh1 * canh1 + canh3 * canh3) || (canh3 * canh3 == canh2 * canh2 + canh1 * canh1)) {
        document.getElementById("result4").innerHTML = "Đây là tam giác vuông !";
    } else {
        document.getElementById("result4").innerHTML = "Đây là một loại tam giác nào đó !";
    }

}
document.getElementById("dudoan").onclick = tamGiac;