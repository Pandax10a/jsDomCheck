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
    middle[counter][`innerText`] = `grabbed by my class, differently`;
    counter++;
}

//used queryselector this part of knowledge check

let header2 = document.querySelector(`#header3`);
header2[`innerHTML`] = `Found you Header <a href= "https://www.yahoo.ca">to yahoo</a>`;

let to_outer = document.querySelector(`#header3`);

/*
to_outer[`outerHTML`] =  `<h5>Hi There too</h5>` + to_outer[`outerHTML`];
*/
to_outer[`outerHTML`] =`<h4>Trying another</h4>`+  to_outer[`outerHTML`] + `<h4>Hi There</h4>`;

let to_shared = document.querySelectorAll(`.mixed`);
let counter2 = 0;
while (counter2 < to_shared.length) {
    to_shared[counter2][`outerHTML`] = `<h1>Hacked</h1>`;
    counter2++;
}
