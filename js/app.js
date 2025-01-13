const productos = {
    1: {
        producto: "Suavitel",
        stock: 2,
        valor: 3500
    },
    2: {
        producto: "Frutiño",
        stock: 1,
        valor: 1500
    },
    3: {
        producto: "Compota",
        stock: 1,
        valor: 4000
    },
    4: {
        producto: "Coca-cola",
        stock: 1,
        valor: 8000
    },
    5: {
        producto: "Terreneitor",
        stock: 1,
        valor: 40000
    }
};

function vender(code) {
    let nameProd = productos[code].producto;
    let cantProd = parseInt(prompt("¿Cuántos productos desea vender de " + nameProd + "?"));

    if (isNaN(cantProd) || cantProd <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    if (cantProd > productos[code].stock) {
        alert("No hay suficiente stock. Solo quedan " + productos[code].stock + " productos.");
        return;
    }

    let finalStock = productos[code].stock - cantProd;
    productos[code].stock = finalStock;
    
    alert("Quedan " + finalStock + " en stock");
}

function comprar(code) {
    let nameProd = productos[code].producto;
    let cantProd = parseInt(prompt("¿Cuántos productos desea comprar de " + nameProd + "?"));

    if (isNaN(cantProd) || cantProd <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    productos[code].stock += cantProd;
    alert("Quedan " + productos[code].stock + " en stock");
}

function totalInv() {
    let valorCont = 0;

    for (let code in productos) {
        let product = productos[code];
        valorCont += product.valor * product.stock;
    }

    alert("El inventario total es de: " + valorCont);
}

function menu() {
    let opc = prompt("¿Qué desea hacer?\n1. Comprar\n2. Vender\n3. Totalizar inventario\n4. Salir");

    while (opc !== '4') {
        switch (opc) {
            case '1':
                let codeCompra = prompt("Ingrese el código del producto a comprar:");
                comprar(codeCompra);
                break;
            case '2':
                let codeVenta = prompt("Ingrese el código del producto a vender:");
                vender(codeVenta);
                break;
            case '3':
                totalInv();
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
        opc = prompt("¿Qué desea hacer?\n1. Comprar\n2. Vender\n3. Totalizar inventario\n4. Salir");
    }
}

menu();
