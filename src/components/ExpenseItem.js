import './ExpenseItem.css';

/*toISOString() = returns date object as string using ISO standards. */
function ExpenseItem(data) {

  // const date = new Date(2023, 4, 28);
  // const description = 'Car Insuranse';
  // const price = 100;

  return (
    <div className='expense-item'>
       <div>{data.date.toISOString()}</div>     
       <div className='expense-item__description'>
          <h2>{data.title}</h2>
          <div className='expense-item__price'>${data.amount}</div>
       </div>
    </div>
  );
}

export default ExpenseItem;
