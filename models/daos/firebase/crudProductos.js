const db = require('./config.js')
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"
class crudProductos {
  getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
  }

  getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
  }

  updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
  }

  deleteProducto = async (id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
  }

  createProducto = async (objProd) => {
    const estado = await addDoc(collection(db, "productos"), {
      nombre: objProd.nombre,
      marca: objProd.marca,
      modelo: objProd.modelo,
      categoria: objProd.idCategoria,
      stock: objProd.stock,
      precio: objProd.precio,
      img: objProd.img
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