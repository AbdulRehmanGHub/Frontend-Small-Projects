let input_Data = document.querySelector('#inp');
let add_Btn = document.querySelector('#addBtn');
let Res_container = document.querySelector('#down');

add_Btn.addEventListener('click', ()=>{
    if(input_Data.value == ''){
        alert('write data');
    }else{
        let lists = document.createElement('li');
        lists.style.backgroundColor = 'lightgreen';

        let input_Result = document.createElement('input');
        input_Result.className = 'value-here'
        input_Result.value = input_Data.value;
        input_Result.setAttribute('disabled', '')


        let del_Button = document.createElement('button');
        del_Button.className = 'del-Btn';
        del_Button.innerHTML = 'X';

        del_Button.addEventListener('click', ()=>{
            lists.remove();
        })

        Res_container.append(lists);
        lists.append(input_Result);
        lists.append(del_Button);

        input_Data.value = '';
        
    }
});
