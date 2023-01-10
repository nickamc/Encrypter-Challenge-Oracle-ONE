const btnEncrypt = document.getElementById("btn-encrypt")
const btnDecrypt = document.getElementById("btn-decrypt")
const textarea = document.getElementById("textarea")
const card = document.getElementsByClassName("card")

const encrypt = (text) => {
    let newText = ""
    for (const t of text) {
        switch (t) {
            case "a":
                newText += "ai"
                break;
        
            case "e":
                newText += "enter"
                break;
            
            case "i":
                newText += "imes"
                break;
        
            case "o":
                newText += "ober"
                break;

            case "u":
                newText += "ufat"
                break;
            
            default:
                newText += t
                break;
        }
    }
    return newText
}

const decrypt = (text) => {
    let reg = [[/ai/g, "a"], [/enter/g, "e"], [/imes/g, "i"], [/ober/g, "o"] , [/ufat/g, "u"]]
    reg.forEach((r) => {
        text = text.replace(r[0], r[1])
    })
    return text
}

const copy = (node) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", node.innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

const createReply = (text) => {
    card[0].innerHTML = ""
    const p = document.createElement("p")
    p.innerText = text
    p.className = "res-textarea"
    card[0].appendChild(p)

    const button = document.createElement("button")
    button.innerText = "Copiar"
    button.className = "btn-copy"
    button.id = "copy"
    button.setAttribute("type", "button")
    button.addEventListener("click", (e) => {
        copy(p)
        alert("Text copiado")
    })
    card[0].appendChild(button)

    textarea.value = ""

    card[0].style.cssText =  "justify-content: space-between;"
}

btnEncrypt.addEventListener("click", (e) => {
    createReply(encrypt(textarea.value))
})

btnDecrypt.addEventListener("click", (e) => {
    createReply(decrypt(textarea.value))
})