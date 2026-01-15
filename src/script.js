const container = document.querySelector("#grid")

function grid(size) {
    for(let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.border = "1px solid black";
            newDiv.style.height = "5px";
            newDiv.style.width = "5px";
            container.appendChild(newDiv);
        }
    }
}

grid(16);