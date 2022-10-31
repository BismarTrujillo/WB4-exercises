"use strict";

function parsePartCode(code) {

    let supplierCode = code.substring(0, code.indexOf(":"));
    let productNumber = code.substring(supplierCode.length, code.indexOf("-"));
    let size = code.substring(code.indexOf("-"));

    let codeObject = {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size,
    };
    return codeObject;
}

let code1 = "XYZ:1234-L";
console.log(parsePartCode(code1));






