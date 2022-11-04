let sub = document.forms[0],
  checks = document.querySelectorAll("form >div div div input"),
  upper,
  lower,
  symp,
  nums,
  length = document.querySelector("#length"),
  res = document.querySelector("span"),
  copy = document.querySelector("u"),
  div = document.querySelector("body>div>div");
for (let i = 0; i < checks.length; i++) {
  ele = checks[i];
  if (ele.id == "upper") {
    upper = ele;
  } else if (ele.id == "lower") {
    lower = ele;
  } else if (ele.id == "symp") {
    symp = ele;
  } else if (ele.id == "nums") {
    nums = ele;
  }
}
sub.onsubmit = (e) => {
  e.preventDefault();
  passCode = new Array();
  pass = "";
  if (symp.checked) {
    passCode.push("!@#$%^&*?");
  }
  if (upper.checked) {
    passCode.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (lower.checked) {
    passCode.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (nums.checked) {
    passCode.push("0123456789");
  }
  for (let i = 0; i < length.value; i++) {
    index = parseInt(Math.random() * passCode.length);
    char = parseInt(Math.random() * passCode[index].length);
    pass += passCode[index][char];
  }
  div.classList.add("active");
  res.innerText = pass;
};
copy.addEventListener("click", () => {
  let textarea = document.createElement("input");
  textarea.value = res.innerText;
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  alert("copied");
  textarea.parentNode.removeChild(textarea);
});
//  res.innerText = pass;
// console.log( Clipboard.prototype.write( res.innerText = pass));
