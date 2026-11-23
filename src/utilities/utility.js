const getLocal=()=>{
   const book=localStorage.getItem('book');
    return book?  JSON.parse(book) :  [];
};

const addLocal=(id)=>{
    const book=getLocal();
    book.push(id);
    localStorage.setItem('book',JSON.stringify(book))
};

const removeLocal=(id)=>{
    const book=getLocal();
    const neww=book.filter(ids=>ids!==id);
    localStorage.setItem('book',JSON.stringify(neww))
}

export{
    getLocal as get,
    addLocal as add,
    removeLocal as remove
}