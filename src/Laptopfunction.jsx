// function Laptopfunction(props) {
//     const { color, brand, config } = props;
//     return (
//         <div>
//             <h1>This is the laptop function</h1>
//             <p>
//                 the color of the laptop is {color} <br />
//                 and the brand is {brand} <br />
//                 and the configuration is RAM: {config?.ram} &amp; SSD: {config?.storage}
//             </p>
//         </div>
//     );
// }
// export default Laptopfunction;

class LaptopComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            brand :'Hp',
            color :'black',
            processor:'ryzen'
        }
    }
    render(){
       return(
        <div>
            <h1>The brand of the laptop is {this.state.brand} , processor is {this.state.processor} & color is {this.state.color}</h1>
        </div>
       )
    }
}
