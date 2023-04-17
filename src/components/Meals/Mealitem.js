import Card from "../UI/Card";
import MealForm from "./MealForm";
import OneMeal from "./OneMeal";
const dummy_meals = [  {    "id": 1,    "description": "Grilled chicken with rice",   
 "name": "Chicken Rice",    "price": 10.99  },  {    "id": 2,    "description": "Classic burger with fries",    "name": "Burger",    "price": 8.99  },  
 {    "id": 3,    "description": "Caesar salad with croutons",    "name": "Caesar Salad",    "price": 7.49  },  
 {    "id": 4,    "description": "Spaghetti with meatballs",    "name": "Spaghetti",    "price": 12.99  }, 
  {    "id": 5,    "description": "Vegetable stir-fry",    "name": "Stir Fry",    "price": 9.99  },  {    "id": 6,    "description": "Fish and chips",    "name": "Fish and Chips",    "price": 11.49  },  {    "id": 7,    "description": "Margherita pizza",    "name": "Pizza Margherita",    "price": 13.99  },  {    "id": 8,    "description": "Beef tacos with salsa",    "name": "Beef Tacos",    "price": 10.49  },  {    "id": 9,    "description": "Pad Thai with shrimp",    "name": "Pad Thai",    "price": 11.99  },  {    "id": 10,    "description": "Grilled salmon with asparagus",    "name": "Grilled Salmon",    "price": 14.99  }]
; 


export default function Mealitem(props){
    const meals = dummy_meals
    // const onAdd = (amount)=>{

    // }
    return(
     <div className=" mx-auto w-3/5 mt-5">
            <Card>    <ul>
                    {meals.map(e => 
                       <OneMeal name={e.name} price={e.price} description={e.description} id={e.id}></OneMeal>
                    )}
                </ul>
                </Card>
            
                </div>
    )
}