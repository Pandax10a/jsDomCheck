let first_h1_tag = document.querySelector(`#bigheader`);
first_h1_tag[`innerText`] = `Transform 1`;

let all_class_tag = document.querySelectorAll(`.moveright`);
for (let i = 0; i < all_class_tag.length; i++) {
    all_class_tag[i][`innerText`] = `grabbed by my class`;
}
