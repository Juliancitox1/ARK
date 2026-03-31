// --- CONFIGURACIÓN DEL CARRUSEL ---
const filaropa = document.getElementById("filaropa");
const flechaDerecha = document.querySelector(".flecha-derecha");
const flechaIzquierda = document.querySelector(".flecha-izquierda");

// Función para mover a la derecha (con retorno al inicio)
const moverDerecha = () => {
    //Margen de error de 5px para el cálculo
    const maxScroll = filaropa.scrollWidth - filaropa.clientWidth;
    
    if (filaropa.scrollLeft >= maxScroll - 5) {
        filaropa.scrollLeft = 0; // Vuelve al inicio
    } else {
        filaropa.scrollLeft += filaropa.clientWidth;
    }
};

// Función para mover a la izquierda
const moverIzquierda = () => {
    if (filaropa.scrollLeft <= 5) {
        filaropa.scrollLeft = filaropa.scrollWidth;
    } else {
        filaropa.scrollLeft -= filaropa.clientWidth;
    }
};

// Eventos de clic
flechaDerecha.addEventListener("click", moverDerecha);
flechaIzquierda.addEventListener("click", moverIzquierda);

// AUTO-SCROLL
let autoScrollInterval;

const iniciarAutoScroll = () => {
    autoScrollInterval = setInterval(moverDerecha, 7000);
};

const detenerAutoScroll = () => {
    clearInterval(autoScrollInterval);
};

// Iniciar al cargar la página
iniciarAutoScroll();

// Detener si el ratón está encima del carrusel para que el usuario pueda ver las fotos
filaropa.addEventListener("mouseenter", detenerAutoScroll);
filaropa.addEventListener("mouseleave", iniciarAutoScroll);

// PRODUCTOS
const productos = {
    1: {
        nombre: "Producto 1",
        descripcion: "Descripción del producto 1",
        precio: "$100.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    },
    2: {
        nombre: "Producto 2",
        descripcion: "Descripción del producto 2",
        precio: "$120.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    },
    3: {
        nombre: "Producto 3",
        descripcion: "Descripción del producto 3",
        precio: "$90.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    },
    4: {
        nombre: "Producto 4",
        descripcion: "Descripción del producto 4",
        precio: "$150.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    },
    5: {
        nombre: "Producto 5",
        descripcion: "Descripción del producto 5",
        precio: "$80.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    },
    6: {
        nombre: "Producto 6",
        descripcion: "Descripción del producto 6",
        precio: "$200.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    },
    7: {
        nombre: "Producto 7",
        descripcion: "Descripción del producto 7",
        precio: "$110.000",
        colores: {
            Negro: {
                colorBoton: "#000000",
                imagen: "/Images/Imagen1.jpeg"
            },
            Blanco: {
                colorBoton: "#ffffff",
                imagen: "/Images/Imagen1-Blanco.jpeg"
            },
            Rojo: {
                colorBoton: "#ff0000",
                imagen: "/Images/Imagen1-Rojo.jpeg"
            }
        }
    }
};

// --- ELEMENTOS DE LA VENTANA ---
const modalProducto = document.getElementById("ropaProducto");
const imagenRopa = document.getElementById("imagenRopa");
const tituloRopa = document.getElementById("tituloRopa");
const descripcionRopa = document.getElementById("descripcionRopa");
const precioRopa = document.getElementById("precioRopa");
const linkWhatsapp = document.getElementById("linkWhatsapp");
const cerrarProducto = document.getElementById("cerrarProducto");
const selectorColores = document.getElementById("selectorColores");
const opcionesColores = document.getElementById("opcionesColores");

let productoActual = null;
let colorActual = null;

// --- NUMERO WHATSAPP ---
const numero = "573160551532";

const actualizarLinkWhatsapp = () => {
    const producto = productos[productoActual];
    if (!producto) return;

    const mensaje = encodeURIComponent(
        `Hola ARK, estoy interesad@ en el producto ${producto.nombre} - ${producto.precio} - Color: ${colorActual}`
    );

    linkWhatsapp.href = `https://wa.me/${numero}?text=${mensaje}`;
};

const renderizarColores = (id) => {
    const producto = productos[id];
    if (!producto || !producto.colores) return;

    opcionesColores.innerHTML = "";

    const coloresDisponibles = Object.keys(producto.colores);
    colorActual = coloresDisponibles[0];

    imagenRopa.src = producto.colores[colorActual].imagen;

    coloresDisponibles.forEach(color => {
        const boton = document.createElement("button");
        boton.classList.add("boton-color");
        boton.style.backgroundColor = producto.colores[color].colorBoton;
        boton.setAttribute("aria-label", color);
        boton.title = color;

        if (color === colorActual) {
            boton.classList.add("activo");
        }

        boton.addEventListener("click", () => {
            colorActual = color;
            imagenRopa.src = producto.colores[color].imagen;

            document.querySelectorAll(".boton-color").forEach(b => {
                b.classList.remove("activo");
            });

            boton.classList.add("activo");
            actualizarLinkWhatsapp();
        });

        opcionesColores.appendChild(boton);
    });

    actualizarLinkWhatsapp();
};

// --- CLICK EN IMÁGENES ---
const imagenes = document.querySelectorAll(".imagen img");

// --- FUNCIÓN GLOBAL PARA ABRIR PRODUCTO ---
const abrirProducto = (img, id) => {
    const producto = productos[id];
    if (!producto) return;

    productoActual = id;

    tituloRopa.textContent = producto.nombre;
    descripcionRopa.textContent = producto.descripcion;
    precioRopa.textContent = producto.precio;

    selectorColores.style.display = "block";
    renderizarColores(id);

    modalProducto.style.display = "flex";
    document.body.style.overflow = "hidden";
};

// --- EVENTOS EN IMÁGENES DEL CARRUSEL ---
const imagenesCarrusel = document.querySelectorAll(".imagen img");

imagenesCarrusel.forEach(img => {
    img.addEventListener("click", () => {
        const id = img.getAttribute("data-id");
        abrirProducto(img, id);
    });
});

// --- EVENTOS EN IMÁGENES DE "VER TODO" ---
const imagenesArmario = document.querySelectorAll(".ropacompleta img");

imagenesArmario.forEach(img => {
    img.addEventListener("click", () => {
        const id = img.getAttribute("data-id");
        abrirProducto(img, id);
    });
});

// --- CERRAR VENTANA PRODUCTO ---
cerrarProducto.addEventListener("click", () => {
    modalProducto.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === modalProducto) {
        modalProducto.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// --- ABRIR / CERRAR ARMARIO ---
const armario = document.getElementById("armariocompleto");

function abrirArmario() {
    armario.style.display = "block";
}

function cerrarArmario() {
    armario.style.display = "none";
}

