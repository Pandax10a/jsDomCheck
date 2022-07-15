let first_h1_tag = document.querySelector(`#bigheader`);
first_h1_tag[`innerText`] = `Transform 1`;

let all_class_tag = document.querySelectorAll(`.moveright`);
for (let i = 0; i < all_class_tag.length; i++) {
    all_class_tag[i][`innerText`] = `grabbed by my class`;
}


let header = document.getElementById(`header2`);
header[`innerText`] = `Something id`;

let footer = document.getElementById(`footer2`);
footer[`innerText`] = `Something footer id`;

let middle = document.getElementsByClassName(`theone`);
let counter = 0;
while (counter < middle.length) {
    middle[`innerText`] = `grabbed by my class, differently`;
    counter++;
}
