const containerScacchiera = document.getElementById("container-scacchiera");

for (let a = 1; a <= 10; a++) {
    const row = document.createElement("div");
    row.classList.add("row");
    let bgcolor = "bg-danger";
    for (let b = 1; b <= 7; b++) {
        const multipli3 = b % 3 === 0;
        let bgcolor = "";


        row.innerHTML += `<div class="col g-3">
                        <div class="ratio ratio-1x1 border ${bgcolor}">
                            <div></div>
                        </div>
                    </div>`;
    }

    containerScacchiera.append(row);
}

