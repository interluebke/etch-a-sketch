const container = document.querySelector("#grid")

function grid(size) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.display = "flex";
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.border = "1px solid black";
            newDiv.style.height = "5px";
            newDiv.style.width = "5px";
            row.appendChild(newDiv);
        }
        container.appendChild(row);
    }
}

grid(16);