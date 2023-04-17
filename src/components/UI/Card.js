 const Card =(props)=>{
    return(
        <div className=" rounded-xl shadow-lg p-6 bg-white">
            {props.children}
        </div>
    )
}
export default Card