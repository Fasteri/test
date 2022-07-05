
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
  

  
  // var input = document.getElementById('age');
 
  // var dateInputMask = function dateInputMask(elm) {
   
  //     elm.addEventListener('keyup', function(e) {
  //     if( e.keyCode < 47 || e.keyCode > 57) {
  //       e.preventDefault();
  //     }
   
  //    var len = elm.value.length;
   
  //     if(len !== 1 || len !== 3) {
  //       if(e.keyCode == 47) {
  //         e.preventDefault();
  //       }
  //     }
  //    if(len === 2) {
  //     if (e.keyCode !== 8 && e.keyCode !== 46) { 
  //       elm.value = elm.value+'.';
  //     }}
   
  // if(len === 5) {
  //     if (e.keyCode !== 8 && e.keyCode !== 46) { 
  //       elm.value = elm.value+'.';
  //     }}
  //   });
  // };
  // dateInputMask(input);
});


document.getElementById('file').addEventListener('change', function(){

    var div = document.getElementById('filename');
    div.style.display = div.style.display = 'block';
 

  var a = document.getElementById('file').files[0].name;
  var el = document.getElementById('filename');
if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = a;
} else {
    // Нормальные браузеры
    el.textContent = a;
}
 
});


document.getElementById('999').onclick = function (evt) {
  evt.preventDefault();
  reset();
  check();
};

 function reset(){
  point=0;
  total=0;
  kok=0;
 }

var sum=0;
var point =0;
var total=0;
var kok = 0;
function validate(i){
  
  let a = document.forms['myForm'][i].value;
  let b = document.querySelectorAll('.item')[i];
  let d = document.querySelectorAll('.error')[i];
  switch (i) {
    case 0:
    case 1:
    case 5:
      if (sum == 0){
     
        if ( /^[a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ']+$/.test(a)){
          d.style.display = d.style.display = 'none';
          b.classList.remove('input_error');
        } else{
          point++;
          kok++;
          d.style.display = d.style.display = 'block';
          b.classList.add('input_error');
        }
        if (point == 0) {
          b.classList.add('green');
        }
        else{
          b.classList.remove('green');
        }
      }
  
      break;

    case 2:   
      if (sum == 0){
      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      if(validateEmail(a)) {
        d.style.display = d.style.display = 'none';
        b.classList.remove('input_error');
      }
        else{
          kok++;
          point++;
          let c = document.getElementById('third');
          let d = c.querySelector('.error');
          d.style.display = d.style.display = 'block';
          document.getElementById('third').classList.add('input_error');
        }
        if (point == 0) {
          b.classList.add('green');
        }
        else{
          b.classList.remove('green');
        }
      }
      break;
    
    case 3:
      if (sum == 0){
          if (/^([0-9]{1,2})\.([0-9]{1,2})\.([0-9]{4})$/.test(a)) {
            d.style.display = d.style.display = 'none';
            b.classList.remove('input_error');     
          }
          else {
            kok++;
            point++;
            d.style.display = d.style.display = 'block';
            b.classList.add('input_error');
          }

    if (point == 0) {
    b.classList.add('green');
    }
    else{
    b.classList.remove('green');
     }
  }
      break;
 
    case 4:
      if (sum == 0){
      let ee = a.length;

      if (ee == 17){
        d.style.display = d.style.display = 'none';
        b.classList.remove('input_error');
      }
      else {
        kok++;
        point++;
        d.style.display = d.style.display = 'block';
        b.classList.add('input_error');
      }
      if (point == 0) {
        b.classList.add('green');
      }
      else{
        b.classList.remove('green');
      }
    }
    break;

    case 6:
      if (sum == 0){
        b.classList.add('green');
      }
      else{
        b.classList.remove('green');
      }
    break;
  }
  if (kok!==0){
    point=1;
  }
}

function check(){
  for (let i = 0; i < document.querySelectorAll('.item').length; i++) {    
    let a = document.forms['myForm'][i].value;
    let b = document.querySelectorAll('.item')[i];
    let c = document.querySelectorAll('.request')[i];
    let d = document.querySelectorAll('.error')[i];
    if (a == ""){
      sum++;
      total++;
      b.classList.remove('green');
      c.style.display = c.style.display = 'block';
      b.classList.add('input_error');
      d.style.display = d.style.display = 'none';
    }
    else{
      c.style.display = c.style.display = 'none';
      b.classList.remove('input_error'); 
    }

    validate(i);
    sum=0;
    point=0;
  }
  if ((total==0)&(kok==0)){

    var bg = document.getElementById('bg');
    bg.classList.add('bg');

    var aler = document.getElementById("322");
    aler.style.display = aler.style.display = 'block';
  }
  
}


var finish = document.getElementById('777');
finish.addEventListener('click', function(){
  document.forms['myForm'].submit();

  
});
