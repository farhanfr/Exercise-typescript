"use strict";
//numeric enums
// enum Month{
//     JAN = 1,FEB,MAR,APR
// }
// console.log(Month.JAN)
//String, jika string maka harus inisialisasi semua, karena tidak bisa increment
var Month;
(function (Month) {
    Month["JAN"] = "jan";
    Month["FEB"] = "feb";
    Month["MAR"] = "mar";
    Month["APR"] = "apr";
})(Month || (Month = {}));
console.log(Month.JAN);
