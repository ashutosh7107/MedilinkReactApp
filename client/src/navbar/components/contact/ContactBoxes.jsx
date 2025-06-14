const ContactBoxes = () => {
  return (
    <div className="container pt-5">
      <div className="row gy-4">
        {/* Address */}
        <div className="col-lg-4 col-sm-6 d-flex">
          <div className="px-4 py-5 text-center rounded-3 border w-100">
            <h6 className="mb-2">Address</h6>
            <p className="m-0">
              209 North Dunbar St. Santa
              <br />
              Monica, CA 90403
            </p>
          </div>
        </div>

        {/* Call Us */}
        <div className="col-lg-4 col-sm-6 d-flex">
          <div className="px-4 py-5 text-center rounded-3 border w-100">
            <h6 className="mb-2">Call Us</h6>
            <p className="m-0">
              (+22) 123 - 4567 - 900
              <br />
              (+22) 123 - 4567 - 901
            </p>
          </div>
        </div>

        {/* Email Us */}
        <div className="col-lg-4 col-sm-6 d-flex">
          <div className="px-4 py-5 text-center rounded-3 border w-100">
            <h6 className="mb-2">E-mail Us</h6>
            <p className="m-0">
              support@doctorate.com
              <br />
              ashutosh.lilly@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBoxes;
