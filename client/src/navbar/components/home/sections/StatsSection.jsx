const StatsSection = () => {
  return (
    <div className="container">
      <div
        className="text-white text-center py-5 align-items-center"
        style={{
          marginTop: "-60px",
          position: "relative",
          zIndex: 2,
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          backgroundColor: "rgba(15, 227, 175, 1)",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3 text-black">
              <h4 className="fw-bold font-size-100px">540+</h4>
              <p className="text-primary">Happy clients</p>
            </div>
            <div className="col-md-3 text-black">
              <h4 className="fw-bold">1240+</h4>
              <p className="text-primary">Medicament Invented</p>
            </div>
            <div className="col-md-3 text-black">
              <h4 className="fw-bold">30</h4>
              <p className="text-primary">Awards Wined</p>
            </div>
            <div className="col-md-3 text-black">
              <h4 className="fw-bold">15+</h4>
              <p className="text-primary">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
