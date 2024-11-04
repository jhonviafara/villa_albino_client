import { get } from "./utils.services"

export async function getCategorias () {
try {
    const ruta = "/categorias"
    const res = await  get(ruta)
    console.log(res);
    
    return res
} catch (error) {
    throw new Error(error);
}
}