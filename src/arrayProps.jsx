
export function ArrayWithProps({arr}){
    return (
        <>
        {arr.map(item=>{
            return <span key={item} >{item }{' '}</span>
        })} 
        </>    
    )
}