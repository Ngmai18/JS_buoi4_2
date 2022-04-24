// Bài 1
const form1 = document.getElementById("bai1");
var dataDom1 = [
  document.getElementById("number1"),
  document.getElementById("number2"),
  document.getElementById("number3"),
];

const result = document.getElementById("ketqua1");
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let revertData = dataDom1.map((number) => {
    return parseInt(number.value);
  });
  let tg;
  for (let i = 0; i < revertData.length - 1; i++) {
    for (let j = i + 1; j < revertData.length; j++) {
      if (revertData[i] > revertData[j]) {
        // Hoan vi 2 so a[i] va a[j]
        tg = revertData[i];
        revertData[i] = revertData[j];
        revertData[j] = tg;
      }
    }
  };
  result.innerText = `${revertData}`; 
});

// Bài 2:
const ele = document.forms.elements.elements["element"];
showValue();
function showValue() {
  let val = "";
  switch (parseInt(ele.value)) {
    case 1:
      val = "Bố";
      break;
    case 2:
      val = "Mẹ";
      break;
    case 3:
      val = "Anh trai";
      break;
    case 4:
      val = "Em gái";
      break;
    default:
      break;
  }
  document.getElementById("results").innerHTML = `Xin chào ${val}`;
}

// Bài 3
const form3 = document.getElementById("bai3");
var dataDom = [
  document.getElementById("number3_1"),
  document.getElementById("number3_2"),
  document.getElementById("number3_3"),
];
// const result3 = document.getElementById("ketqua1");
form3.addEventListener("submit", function (e) {
    e.preventDefault();
let countE = 0,
      countO = 0;
  dataDom.forEach((number) => {
      if(!number.value) return;
      if(number.value % 2 === 0){
          countE+=1;
      }else{
          countO+=1
      }
  });
  document.getElementById("ketqua3_1").innerText = `${countO}`;
  document.getElementById("ketqua3_2").innerText = `${countE}`;

});



// Bài 4
const form4 = document.getElementById("bai4");
let a = document.getElementById("number4_1");
let b = document.getElementById("number4_2");
let c = document.getElementById("number4_3");
let text = "";
form4.addEventListener("submit", function (e) {
    e.preventDefault();
    a = parseInt(a.value);
    b = parseInt(b.value);
    c = parseInt(c.value);

    if ((a>=(b+c)) || (b>=(c+a)) || (c >= (a+b))) {
        text = 'khong phai cua mot tam giac';
    }else if((a==b) && (b==c) &&(c==a)){
        text = 'deu';
    }else if((a == b) || (b == c) || (c == a)){
        text = ' can';
    }else if (((a*a) == (b*b)+(c*c)) || ((b*b)== (c*c)+(a*a)) || ((c*c) == (a*a)+(b*b)) ){
        text = ' vuong';
    }else {
        text = "thường"
    }
    document.getElementById("ketqua4").innerText = `${text}`;
});