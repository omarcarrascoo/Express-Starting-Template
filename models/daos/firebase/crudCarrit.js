const db = require('./config.js')

class crudCart {

  readCart = async () => {
    const cart = await getDocs(collection(db, "cart"))
    const items = cart.docs.map(producto => [cart.id, cart.data()])
    return items
  }

  updateCart = async (id, info) => {
    const estado = await updateDoc(doc(db, "cart", id), info)
    return estado
  }

  deleteCart = async (id) => {
    const estado = await deleteDoc(doc(db, "cart", id))
    return estado
  }

  createCart = async (objCart) => {
    const estado = await addDoc(collection(db, "cart"), {
      nombre: objCart.nombre,
      stock: objCart.stock,
      precio: objCart.precio,
    })

    return estado
  }
}


export {
  cargarBaseDeDatos,
  getProductos,
  getProducto,
  updateProducto,
  deleteProducto,
  createProducto
}