function asTabs(node) {
    let tabs = Array.from(node.children);
    console.log(node.getAttribute("data-tabname"));
    console.log(tabs);
    let tabList = document.createElement("div");
    tabs.forEach(element =>{
        let button = document.createElement("button");
        button.textContent = node.getAttribute("data-tabname");
        tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);
}


  asTabs(document.querySelector("tab-panel"));