const Card = ({ title, description, icon }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 text-center py-4" style={{ backgroundColor: '#e9ecef' }}>
        <div className="card-body">
          <div className="mb-3">
          <i className={`fas ${icon} fa-3x mb-3`}></i>
          </div>
          <h4 className="card-title mb-3">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-transparent border-0 pb-4">
          <button className="btn btn-primary">Find Out More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
