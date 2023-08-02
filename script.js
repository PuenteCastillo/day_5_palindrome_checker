// varaibles
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const input = document.querySelector(".input");

// events

btn.addEventListener("click", palindrome);

// functions
function palindrome() {
  const input = document.querySelector(".input-text").value;
  let len = input.length;

  let start = input.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = input.substring(len - Math.floor(len / 2)).toLowerCase();
  let flip = end.split("").reverse().join("");

  if (start === flip) {
    result.innerHTML = "It's a palindrome";
    return;
  }
  result.innerHTML = "It's not a palindrome";
  return;
}
