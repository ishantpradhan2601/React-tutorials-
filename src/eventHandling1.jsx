class eventHandling1 extends React.component{

    newFun(){
        alert('ok')
    }
    render(){
        return (
            <div>
                <h1>Event handling class component</h1>
                <button onClick={()=>{
                    alert('confirm yes or no')
                }}>Click</button>
            </div>
        )
    }
}