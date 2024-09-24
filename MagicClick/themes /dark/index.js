const neg = document.getElementById("neg");
const res = document.getElementById("res");
const pos = document.getElementById("pos");
const click = document.getElementById("click");
const countLabel = document.getElementById("countLabel");
let count = 0;

pos.onclick = function(){
    count++;
    countLabel.textContent = count
}
click.onclick = function(){
    count++;
    countLabel.textContent = count
}
neg.onclick = function(){
    count--;
    countLabel.textContent = count
}
res.onclick = function(){
    count = 0;
    countLabel.textContent = count
}