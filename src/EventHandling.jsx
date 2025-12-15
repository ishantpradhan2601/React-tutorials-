function EventHandling(){

    function clickFun(){
        alert('Here is the alert')
    }

    return (
        <div>
        <h1> Event Handling function component </h1>
        <button onClick={()=>{
                    alert('confirm yes or no')
                }}>Click Here</button>
        </div>
    )
}
export default EventHandling