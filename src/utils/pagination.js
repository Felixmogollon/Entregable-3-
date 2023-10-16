const paginationLogic = (currentPage,residents) => {
// excepcion para el primer render
if (residents.length == 0) {
    return{
        pages:[1],
        residentsInPage: []
    }
    
}

    // cantida de residentes por pagina
const   RESIDENTS_PER_PAGE = 20;

// CANTIDAD TOTAL DE PAGINAS
 const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)


 //residentes que se van a  mostrar en la pagina 
 const sliceEnd = RESIDENTS_PER_PAGE * currentPage
 const sliceStart =  sliceEnd - RESIDENTS_PER_PAGE
 const residentsInPage = residents.slice(sliceStart,sliceEnd)

 //generacion del arreglo de las paginas que se van a mostrar
 const pages = []
 for (let i = 0; i < totalPages; i++) {
    pages.push(i)
    
    
 }
 return{
    residentsInPage,
    pages,
 }
}

export {
    paginationLogic
}