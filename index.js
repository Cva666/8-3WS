let bank = [];
let odd = [];
let even = [];

function addToBank(n) {
  bank.push(Number(n));
}
function sortOne() {
  const num = bank.shift();
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
  render();
}
function sortAll() {
  while (bank.length > 0) {
    sortOne();
  }
}

function BankList() {
  const $bank = document.createElement("p");
  $bank.innerHTML = `${bank}
   <button class = "sort1">sort1</button>
   <button class = "sortall">sort all</button>`;
  const $sortBtn = $bank.querySelector(".sort1");
  const $sortAllBtn = $bank.querySelector(".sortall");
  $sortBtn.addEventListener("click", sortOne);
  $sortAllBtn.addEventListener("click", sortAll);

  return $bank;
}

function oddList() {
  const $oddList = document.createElement("p");
  $oddList.innerHTML = `
    <span>Odd NUMBERS</span> ${odd}`;
  return $oddList;
}
function evenList() {
  const $evenList = document.createElement("p");
  $evenList.innerHTML = `
    <span>Even NUMBERS</span> ${even}`;
  return $evenList;
}

function numForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Please input numbers here!
      <input name="num" type="number" min="1" />
    </label>
    <button>Add</button>
  `;
  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData($form);
    const bankNum = data.get("num");
    addToBank(bankNum);
    render();
    // console.log(bank);
  });
  return $form;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>ODDS & Evens</h1>
    <main>
    <numberform></numberform>
    <bank></bank>
    <odd></odd>
    <even></even>
    </main>
  `;
  $app.querySelector("numberform").replaceWith(numForm());
  $app.querySelector("bank").replaceWith(BankList());
  $app.querySelector("odd").replaceWith(oddList());
  $app.querySelector("even").replaceWith(evenList());
}
render();
