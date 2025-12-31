export default function Button({children,primary=true,secondary=false, type="submit", handleClick=()=>{}}){
    let styleClasses = ''
     if(primary){
        styleClasses = "flex justify-center rounded-sm p-2 bg-orange-500 text-white"
     }else if(secondary){
        styleClasses = "flex justify-center rounded-sm p-2 bg-green-500 text-white"
     }else{
         styleClasses = "flex justify-center rounded-sm p-5"
     }
    return(<button onClick={handleClick} type={type} className={styleClasses}>
    {children}
    </button>)
}