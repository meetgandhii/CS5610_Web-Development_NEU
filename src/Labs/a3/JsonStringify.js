function JsonStringify() {
    const squares = [
        1,
        4,
        16,
        25,
        36
    ]; 
return (
    <>
     <h3>JsonStringify</h3>
     squares = {squares}<br />
     squares = {JSON.stringify(squares)}<br />
     
     
    </>
   )   
}

export default JsonStringify
