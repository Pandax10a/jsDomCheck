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
    to_shared[counter2][`outerHTML`] += `<inline>Hacked</inline>`;
    counter2++;
}

let test_3 = document.getElementById(`k3`);
test_3[`style`][`color`] = `white`;
test_3[`style`][`backgroundColor`] = `black`;
test_3[`style`][`transformStyle`] = `translateX(300px)`


let edit_pic = document.getElementById(`pic1`);
edit_pic.setAttribute(`src`, `https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80`)

