

const Table = ({displayOrders}) => {

  
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
  {displayOrders}
 
  </tbody>
</table>

</div>
{/* <div className='paginate'>
  <p className='back'><a style={{color :"#999999" ,textDecoration: "none"}} href="#">Back</a></p>
  <p style={{color :"#222222"}}>1</p>
  <p style={{color :"#222222"}}>2</p>
  <p className='Next'><a style={{color :"#0A8F73" ,textDecoration: "none"}} href="#">Next</a></p>
</div> */}


  </div>;

  
};

export default Table;
