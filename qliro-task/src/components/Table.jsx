

const Table = ({ orderPerPage,order, pagesVisited}) => {

  
  return <div className='table'>
    <div className='order-header'>
    <h1>Anna's orders</h1>
    <p className='help'>
    <p className='i'>i</p> 
      <a style={{color :"#439B83" ,textDecoration: "none"}} href="#">Help</a></p>
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

  {order.slice(pagesVisited,pagesVisited + orderPerPage).map(element =>{
    return(
      <tr key={element.id} className='table-data'>
      <td className='status'>
      <div id='status' className={element.status}><p>{element.status}</p></div>
      </td>
      <td className='corner-down-right'>
      <td style={{color :"#0A8F73"}}>{element.ordernumber}</td>
      <img  src="./assets/corner-down-right.svg" alt="" />
      </td>
      <td>{element.created}</td>
      <td className='img-country'>
      <img  src={element.country} alt="cardtype" />
      <td>{element.store}</td>
      </td>
      <td>
      <td className='paymentmethod'>
      <img  className={element.cardtypesize} src={element.cardtype} alt="cardtype" />
      <td>  {element.paymentmethod}</td>
      </td>
      </td>
      <td>
      <td className='payment-status'><div className={element.paymentstatus}></div>{element.paymentstatus}</td></td>
      <td  className='amount'>{element.amount} kr</td>
    </tr>
    );
  })}
  </tbody>
</table>
</div>
  </div>;

  
};

export default Table;
