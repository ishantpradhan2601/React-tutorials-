import styl from './Food.module.css';
import FoodItem from './fooditem';

function Food(){
    return (
        <>
                <div className={styl.container}>
                <h1>My favourite Food</h1></div>
                <div className={styl.foodList}>
                    <food type ="Pizza" cuisine="Italian"></food>
                    <food type ="Noodles" cuisine="Chinese"></food>
                    <food type ="Pav Bhaji" cuisine="Indian"></food>
                    <food type ="Sushi" cuisine="Japanese"></food>
                </div>
        
        </>
    )
}export default Food;