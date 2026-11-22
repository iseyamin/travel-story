const getLocal=()=>{
   const book=localStorage.getItem('book');
    return book?  JSON.parse(book) :  [];
};

const addLocal=(id)=>{
    const book=getLocal();
    book.push(id);
    localStorage.setItem('book',JSON.stringify(book))
};

export{
    getLocal as get,
    addLocal as add
}