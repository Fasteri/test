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

});
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
  
  var input = document.querySelectorAll('#mydata')[0];
 
  var dateInputMask = function dateInputMask(elm) {
   
      elm.addEventListener('keyup', function(e) {
      if( e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }
   
     var len = elm.value.length;
   
      if(len !== 1 || len !== 3) {
        if(e.keyCode == 47) {
          e.preventDefault();
        }
      }
     if(len === 2) {
      if (e.keyCode !== 8 && e.keyCode !== 46) { 
        elm.value = elm.value+'.';
      }}
   
  if(len === 5) {
      if (e.keyCode !== 8 && e.keyCode !== 46) { 
        elm.value = elm.value+'.';
      }}
    });
  };
   
  dateInputMask(input);
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
  // Отменяем переход по ссылке
  evt.preventDefault();
  validate();

};


function validate() {
  let z = document.forms['myForm']["first_name"].value;
if (z == "") {
  alert("Укажите ваше имя");
  return false;
}
var b = document.forms["myForm"]["last_name"].value;
if (b == "") {
  alert("Укажите вашу фамилию");
  return false;
}
var с = document.forms["myForm"]["email"].value;
var inputEmail = document.getElementById("111");
var emailVal = inputEmail.value;
if (с == "") {
  alert("Укажите ваш Е-майл");
  return false;
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
if(!validateEmail(emailVal)) {
  console.log('email not valid');
  alert("Неверный Е-майл");
  return false;
}
var d = document.forms["myForm"]["age"].value;
if (d == "") {
  alert("Укажите вашу дату рождения");
  return false;
}

var ee = document.forms["myForm"]["tel"].value.length;
if (ee == 17){
}
else {
  alert("Неверный номер телефона");
  return false;
}

var e = document.forms["myForm"]["tel"].value;
if (e == "") {
  alert("Укажите ваш телефон");
  return false;
}

var f = document.forms["myForm"]["city"].value;
if (f == "") {
  alert("Укажите ваш город");
  return false;
}
var g = document.forms["myForm"]["document"].value;
if (g== "") {
  alert("Выберите файл портофолио");
  return false;
}

var bg = document.getElementById('bg');
bg.classList.add('bg');

var aler = document.getElementById("322");
aler.style.display = aler.style.display = 'block';







var finish = document.getElementById('777');
finish.addEventListener('click', function(){
  document.forms['myForm'].submit();
  // document.getElementById('ok').target = "dasd" ;
  // document.getElementById('id_iframe').remove();
  // document.forms['myForm'].submit();
  // window.location.reload(true);
  
  
  



// // var finishOk = document.getElementById('ok');

});


}





// })
