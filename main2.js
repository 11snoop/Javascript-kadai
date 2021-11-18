ans = 0;
num = "0";
key = "";
kigou = "";
   
function calc_run(btn) {
  if (!isNaN(btn)) {
    if (kigou == "=") {
      ans = 0;
      kigou = "";
    }
      if (!isNaN(key)) {
          if (num == "0") {
              num = ""+btn;
          } else {
              num += ""+btn;
          }
      } else {
          num = ""+btn;
      }
      if (ans == 0) {
        document.getElementById("out").innerHTML = num;
      } else {
        document.getElementById("out").innerHTML = ans+kigou+num;
      }
  } else {
      if (!isNaN(key)) {
          if (kigou == "") ans = num;
          else ans = eval(ans + kigou + num);
          num = "0";
      }
      kigou = btn;
      if (ans == 0) {
        document.getElementById("out").innerHTML = ans;
      } else {
        document.getElementById("out").innerHTML = ans+kigou;
      }
  }
  key = btn;
}

function calc_period() {
  if (num.indexOf(".") < 0) num += "."; 
  key = 0;
  document.getElementById("out").innerHTML = num;
}

function calc_equal() {
  ans = eval(ans + kigou + num);
  key = "=";
  num = "0";
  kigou = key;
  document.getElementById("out").innerHTML = ans;
}

function calc_clear() {
  ans = 0;
  key = "";
  num = "0";
  kigou = key;
  document.getElementById("out").innerHTML = ans;
}