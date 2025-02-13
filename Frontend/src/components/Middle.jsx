import { useState, useEffect } from "react";
import styles from "./Middle.module.css";

import Vector1 from "../assets/images/Vector (1).png";

function Card() {
  const [tasks, setTasks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [finalPrice, setFinalPrice] = useState(250000)

  useEffect(() => {
    fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889")
      .then(response => response.json())
      .then(data => setTasks(data.items || [])) // Ensure it doesn't break if items are undefined
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  let removeTask = () => {
    setQuantity(quantity-1)
    setFinalPrice(finalPrice*quantity)
  }
 
  function handleCheckout(){
    alert(`Your total order amount is  ${finalPrice*quantity}`)
  }

  return (
    <>
    <div className={styles.parent}>
    <div style={{width:"70%"}}>
      <ul className={styles.navBar} >
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
      </ul>

      <div>
        {tasks.map((task) => (
          <div key={task.id} className={styles.product}>
            <img style={{marginLeft:"20px"}} src={task.image} alt="image not available" width={50} height={50} />
            <p>{task.title}</p>
            <p>{task.price}</p>
            <button onClick={()=> {setQuantity(quantity+1)}}>
              {quantity}
            </button>
            
            <p>{task.presentment_price *quantity}</p>
            <button onClick={removeTask}>
              <img src={Vector1} alt="delete" width={20} height={20}/>
            </button>
          </div>
        ))}
      </div>  
    </div >
    
    <div className={styles.right} style={{ width: "20%", textAlign:"center",backgroundColor:"#F9F1E7"}}>
    <h2 style={{marginTop:"20px"}}>Cart Totals</h2>
    <h5 style={{marginTop:"40px"}} >SubTotal: Rs. {finalPrice*quantity}</h5>
    <h5 style={{marginTop:"40px"}}>Total : Rs. {finalPrice*quantity}</h5>
    <button onClick={handleCheckout} style={{padding:"15px",paddingRight:"40px",paddingLeft:"40px", borderRadius:"10px", marginTop:"20px", backgroundColor:"#F9F1E7"}} > Checkout </button>
   </div>
   </div>
</>
  );
}

export default Card;
