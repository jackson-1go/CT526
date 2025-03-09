let dataArray = [];

while(true) {
    let input = prompt("เพิ่มรายการข้อมูล (หากต้องการจบการทำงานให้กด Cancel):");

    if(input === null) {
        break;
    }

    dataArray.push(input);
}

dataArray.sort();
let ulElement = document.getElementById("dataList");

dataArray.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ulElement.appendChild(li);
});