import './item.css';
function Item({ name, pric, onDecrease, onIncrease }) {
  return (
    <div className="item">
      <span>{name} - {pric}$</span>
      <button  onClick={onIncrease}>More</button>
      <button className='btn' onClick={onDecrease}>Less</button>
    </div>
  );
}

export default Item;
