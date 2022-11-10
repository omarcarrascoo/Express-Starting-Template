import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: proccess.API_KEY,
  authDomain: "after-firebase-4bbb9.firebaseapp.com",
  projectId: "after-firebase-4bbb9",
  storageBucket: "after-firebase-4bbb9.appspot.com",
  messagingSenderId: "1097278765802",
  appId: "1:1097278765802:web:33d149db03c8dad1433593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
       await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            modelo: producto.modelo,
            categoria: producto.idCategoria,
            stock: producto.stock,
            precio: producto.precio,
            img: producto.img
       })
    })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db, "productos", id))
  return estado
}

const createProducto = async (objProd) => {
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

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto}