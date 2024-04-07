const cardName = document.getElementById('name');
const cardNum = document.getElementById('number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const submit = document.querySelector('button[type="submit"]');
const activeNum = document.getElementById('activeNum');

cardNum.addEventListener( 'keydown', function (e) {
 
    if (this.value.length == 4 || this.value.length == 9 || this.value.length == 14 ) {
        
        if ( e.key != 'Backspace') {
            
            this.value += " ";
        }
    } 
    else if (this.value.length == 19) {

        if ( e.key != 'Backspace') {

            e.preventDefault();
        }
    }
   
});

cardNum.addEventListener('keyup', function () {

    activeNum.innerText = this.value || '0000 0000 0000 0000';
});

cardName.addEventListener("keyup", function(){
    document.getElementById('activeName').innerHTML = this.value || 'JANE APPLESEED';
});

month.addEventListener('input' ,function (e) {
    let active =  document.getElementById('activeMonth');
    if (this.value.length <= 2) {
        active.innerHTML = this.value; 
        if (this.value.length == 2) {
            this.blur();
            year.focus();
            e.preventDefault();
        }else{
            month.focus();
        }
        
    }
});

year.addEventListener('input' ,function (e) {
    let active =  document.getElementById('activeYear');
    if (this.value.length <= 2) {
        active.innerHTML = this.value; 
        if (this.value.length == 2) {
            this.blur();
            cvc.focus();
            e.preventDefault();
        }
        
    }else {
        year.focus();
    }
});

submit.addEventListener('click', function(){
    

    if ( /[0-9]/g.test(cardName.value)) {
        cardName.nextElementSibling.innerHTML = "Only alphabets are allowed";
        cardName.nextElementSibling.style.display= 'block' ;
        cardName.style.outline = '1px solid red';
    }else if ( cardName.value.trim().length == 0) {
        cardName.nextElementSibling.innerHTML = 'this field is requierd';
        cardName.nextElementSibling.style.display = 'block' ;
        cardName.style.outline = '1px solid red';
    }else {
        cardName.nextElementSibling.innerHTML =""
        cardName.nextElementSibling.style.display = 'none';
        cardName.style.outline = 'none';
    }    
        
    if ( /[^0-9\s]/g.test(cardNum.value) ) {
        cardNum.nextElementSibling.innerHTML = 'Wrong format , numbers only';
        cardNum.nextElementSibling.style.display = 'block' ;       
        cardNum.style.outline = '1px solid red';
    }else if (cardNum.value.trim().length == 0) {
        cardNum.nextElementSibling.innerHTML = "can't be blank";
        cardNum.nextElementSibling.style.display = 'block' ;   
        cardNum.style.outline = '1px solid red';

    }else if (cardNum.value.length != 19) {
        cardNum.nextElementSibling.innerHTML = "Should have 16 digits";
        cardNum.style.outline = '1px solid red';
    }else {
        cardNum.nextElementSibling.innerHTML ="";
        cardNum.nextElementSibling.style.display= 'none' ;    
        cardNum.style.outline = 'none';
    }
    
    if (/[^0-9]/.test(month.value) || /[^0-9]/.test(year.value) ) {
        year.nextElementSibling.innerHTML = 'Invalid Date';
        year.nextElementSibling.style.display='block';
        month.style.outline = '1px solid red';
        year.style.outline = '1px solid red';
        
    }else if (year.value.trim().length == 0 || month.value.trim().length == 0) {
        year.nextElementSibling.innerHTML = 'can\'t be blank';
        year.nextElementSibling.style.display = 'block';
        month.style.outline = '1px solid red';
        year.style.outline = '1px solid red';
    } else{
        year.nextElementSibling.innerHTML =""
        year.nextElementSibling.style.display = 'none';
        month.style.outline = 'none';
        year.style.outline = 'none';
    }

    if (/[^0-9]/.test(cvc.value)) {
        cvc.nextElementSibling.innerHTML = 'Digits Only';
        cvc.nextElementSibling.style.display = 'block';
        cvc.style.outline = '1px solid red';
    }else if (cvc.value.trim().length == 0){
        cvc.nextElementSibling.innerHTML = 'can\'t be blank';
        cvc.nextElementSibling.style.display = 'block';
        cvc.style.outline = '1px solid red';
    }else{
        cvc.nextElementSibling.innerHTML =""
        cvc.nextElementSibling.style.display = 'none';
        cvc.style.outline = 'none';
    }
    
    if (
        cardName.nextElementSibling.innerHTML =='' &&
        cardNum.nextElementSibling.innerHTML =='' &&
        cvc.nextElementSibling.innerHTML =="" &&
        year.nextElementSibling.innerHTML ==''
    ) {
        
        document.getElementById('form').innerHTML = `
        <div style="
        width: 310px;
        display: grid;
        place-items: center;
        ">
            <img src="./images/icon-complete.svg" alt="...">
            <h2 style="
            margin-top:20px;
            margin-bottom:0;
            ">THANK YOU!</h2>
            <p style="margin-block:8px; color: var(--light-violet);">We've added your card details</p>
           
            <button style="
            padding: 15px;
            outline: none;
            border: none;
            border-radius: 8px;
            background-color: var(--Very-dark-violet);
            color: #fff;
            cursor: pointer;
            width:100%;
            margin-top:20px;
            ">
            Continue</button>
        </div>
        `;

    }


});


