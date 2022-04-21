const Card = ({img, title, price, qty}) =>{
    return(
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Precio:$ {price} </p>
                    <p className="card-text">Cantidad: {qty}</p>
                    <button type="button" className="btn btn-secondary"></button>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Card;