const containerScacchiera = document.getElementById("scacchiera");

for (let i = 1; i <= 100; i++) {
    let numero = i;
    let bgColor = "bg-primary";
    let multipli3 = i % 3 === 0;

    if (multipli3) {
        bgColor = "bg-success";
        numero = "frizz";
    }

    let multipli5 = i % 5 === 0;
    if (multipli5) {
        bgColor = "bg-warning";
        numero = "buzz";
    }

    if (multipli5 && multipli3) {
        bgColor = "bg-danger";
        numero = "frizzbuzz";
    }

    containerScacchiera.innerHTML += `
                    <div class="p-2">
                        <div class="ratio ratio-1x1 ${bgColor}">
                          <div class="d-flex justify-content-center align-items-center fs-3 ">${numero}</div>
                        </div>
                    </div>
                      `;
}