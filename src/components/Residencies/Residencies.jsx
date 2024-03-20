import React from "react";
import "./Residencies.css";
import "swiper/css";
import r1 from "../../images/r1.png";
import r2 from "../../images/r2.png";
import r3 from "../../images/r3.png";

function Residencies() {
  return (
    <div className="container">
      <div className="r-head flexColStart">
        <span className="r-title">Best Chocies</span>
        <span className="r-title2">Popular Residencies</span>
      </div>
      {/*  */}
      <div className="cards">
      <div className="card">
        <img src={r1} width={250} />
        <div className="card-body">
          <p className="price">$ 35,853</p>
          <h5 className="card-title">Citralan Puri Serang</h5>
          <p className="card-text">
            Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang,
            Banten
          </p>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <img src={r2} width={250} />
        <div className="card-body">
          <p className="price">$ 47,043</p>
          <h5 className="card-title">Aliva Priva Jardin</h5>
          <p className="card-text">
            Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI
            Jakarta
          </p>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <img src={r3} width={250} />
        <div className="card-body">
          <p className="price">$ 66,353</p>
          <h5 className="card-title">Asatti Garden City</h5>
          <p className="card-text">
            Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat
          </p>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <img src={r2} width={250} />
        <div className="card-body">
          <p className="price">$ 35,853</p>
          <h5 className="card-title">Citralan Puri Serang</h5>
          <p className="card-text">
            Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang,
            Banten
          </p>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <img src={r1} width={250} />
        <div className="card-body">
          <p className="price">$ 35,853</p>
          <h5 className="card-title">Citralan Puri Serang</h5>
          <p className="card-text">
            Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang,
            Banten
          </p>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <img src={r2} width={250} />
        <div className="card-body">
          <p className="price">$ 47,043</p>
          <h5 className="card-title">Aliva Priva Jardin</h5>
          <p className="card-text">
            Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI
            Jakarta
          </p>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <img src={r3} width={250} />
        <div className="card-body">
          <p className="price">$ 66,353</p>
          <h5 className="card-title">Aliva Priva Jardin</h5>
          <p className="card-text">
            Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat
          </p>
        </div>
      </div>

      {/*  */}
      <div className="card">
        <img src={r2} width={250} />
        <div className="card-body">
          <p className="price">$ 35,853</p>
          <h5 className="card-title">Citralan Puri Serang</h5>
          <p className="card-text">
            Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang,
            Banten
          </p>
        </div>
      </div>
      </div>
      
      {/* &&&&&&&&&&&&&&&&&&&& */}
    </div>
  );
}

export default Residencies;
