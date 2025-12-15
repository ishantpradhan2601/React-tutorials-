const mystyle ={
    color:"Red",
    backgroundColor:"yellowgreen",
    border:"2px solid black",
    borderRadius:"10px",
    textAlign: "center"

}
const style2={
    color:"blue",
    backgroundColor:"lightgrey",
    border:"2px solid green",
    borderRadius:"10px",
    textAlign: "center"
}




function CSSInline(){
    return(
        <>
        <div style = {mystyle}>
            <h1>
                This is Inline Css
            </h1>
        </div>
        <div style={style2}>
            <h1>
                This is second div with different style
            </h1>
        </div>
        </>
    )
}
export default CSSInline;