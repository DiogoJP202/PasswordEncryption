document.addEventListener('click', (event) =>{
    element = event.target;

    if(element.classList.contains('btnSend')){
        const text = document.querySelector('#Itext');
        passWordValidator(text.value, true);
    }

    if(element.classList.contains('btnSend2')){
        const text = document.querySelector('#Itext1');
        passWordValidator(text.value, false);
    }
});

function passWordValidator(password, btn){
    const resp = document.querySelector('.response');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const letters2 = letters.map((value) => value.toLowerCase());
    const symbols = ['!','"','#','\'','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~',' '];
    const all = [...letters, ...letters2, ...symbols];

    let textInput = password.split('');
    let response = [];

    for(let index = 0; index < (textInput.length); index++){
        if(btn === true) response.push(encryptData(textInput[index], all));
        if(btn === false) response.push(decryptData(textInput[index], all));
    };

    resp.innerHTML = response.join('');
}

function encryptData(data, all){
    const index = all.indexOf(data)
    if(index === 0) return all[all.length -1];
    if(index === all.length - 1) return all[0];
    return all[index + 1];
}

function decryptData(data, all){
    const index = all.indexOf(data)
    if(index === 0) return all[all.length -1];
    if(index === all.length - 1) return all[0];
    return all[index - 1];
}