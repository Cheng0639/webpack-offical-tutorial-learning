import _ from "lodash";
import print from "./print";

function component() {
    let element = document.createElement("div");
    let btn = document.createElement("button");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    btn.innerText = "Click me and check the console.";
    btn.onclick = print;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
