let objData = {
    blog1: "https//",
    blog2: "https//"
};

const create_form = document.getElementById('create_form');

let objDataKeys = Object.keys(objData);

for (let i = 0; i < objDataKeys.length; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'https://';
    input.value = objData[objDataKeys[i]];
    input.id = i;
    create_form.appendChild(input);
}

var last_create_form = document.getElementById(create_form.lastChild.id);

last_create_form.addEventListener('blur', () => {
    if (last_create_form.value) {
        let input = document.createElement('input');
        let nowId = parseInt(create_form.lastChild.id) + 1;
        input.type = 'text';
        input.placeholder = 'https://';
        input.id = nowId;
        create_form.appendChild(input);
    }
})
