const paragraph = document.querySelectorAll(".paragraph");
const seccions = document.querySelectorAll(".seccion");
const img_phamtom = document.querySelector(".img-phantom");
// Transicion
const recicle = document.querySelector(".recicle");


paragraph.forEach(element => {
    element.addEventListener("dragstart", event => {
        console.log("Se esta arrastrando " + element.innerText)
        element.classList.add("dragging");
        event.dataTransfer.setData("id", element.id);
        // imagen fantasma
        event.dataTransfer.setDragImage(img_phamtom, 0, 0)
    })
    element.addEventListener("dragend", () => {
        element.classList.remove("dragging");
    })
})

seccions.forEach(seccion => {
    seccion.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy" //por defecto
    })
    seccion.addEventListener("drop", (e) => {
        console.log("Drop")
        const id_p = e.dataTransfer.getData("id");
        // console.log(id_p)
        const paragraph = document.getElementById(id_p);
        seccion.appendChild(paragraph);
    })
})

/* Reciclar */
recicle.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
})

recicle.addEventListener("drop", e => {
    const id_p = e.dataTransfer.getData("id");
    document.getElementById(id_p).remove();
})