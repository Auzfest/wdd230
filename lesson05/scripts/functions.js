const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let count = 0;

button.addEventListener('click', function() {

    if (input.value != '') {
        const li = document.createElement('li');
        const deletebutton = document.createElement('button');

        count += 1;

        li.textContent = count + ". " + input.value;
        deletebutton.textContent = '❌';

        li.append(deletebutton);
        list.append(li);

        deletebutton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = '';
    }
});