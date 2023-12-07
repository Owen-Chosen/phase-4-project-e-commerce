function Product({props}) {
    return (
      <div className="admin-container">
        <span>{props.name}</span>
        <span>{}</span>
      </div>
    );
  }
  
  export default Product;