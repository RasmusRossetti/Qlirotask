import React ,{ useState, useEffect} from 'react';
import { data } from './data/data';







const Table = () => {


// const [order, setOrder] = useState([]);


// useEffect(() => {
//   const fetchOrders = async () => {
//     const res = await fetch ("./data.json");
//     const data = await res.json();
//     setOrder(data);
//     // console.log(order.orders[2].store) 
//   }
//  fetchOrders();
// }, []);





  return <div className='table'>
    <div className='order-header'>
    <h1>Anna's orders</h1>
    <p><a style={{color :"#439B83" ,textDecoration: "none"}} href="#">Help</a></p>
    </div>
    <div className='container-table'>
    <table className='table-person'>
      <tbody>
  <tr className='table-row-header'>
    <th ></th>
    <th >Order number</th>
    <th>Created</th>
    <th>Store</th>
    <th>Payment method</th>
    <th> Payment status</th>
    <th>Amount</th>
  </tr>
  {data.map(element => {
  return(
    <tr className='table-data'>
    
    <div className={element.status}><p>{element.status}</p></div>
    <td style={{color :"#0A8F73"}}>{element.ordernumber}</td>
    <td>{element.created}</td>
    <td>{element.store}</td>
    
    
    <td> <img className='img-card-type' src={element.cardtype} alt="cardtype" /> {element.paymentmethod}</td>
    <td className='payment-status'><div className={element.paymentstatus}></div>{element.paymentstatus}</td>
    <td>{element.amount}</td>
    
  </tr>
  )
})}

  </tbody>
</table>
</div>
<div className='paginate'>
  <p className='back'><a style={{color :"#999999" ,textDecoration: "none"}} href="#">Back</a></p>
  <p style={{color :"#222222"}}>1</p>
  <p style={{color :"#222222"}}>2</p>
  <p className='Next'><a style={{color :"#0A8F73" ,textDecoration: "none"}} href="#">Next</a></p>
</div>


  </div>;

  
};

export default Table;
