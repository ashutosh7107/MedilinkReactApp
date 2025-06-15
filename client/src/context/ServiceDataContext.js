import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ServiceDataContext = createContext();

export const useServiceData = () => useContext(ServiceDataContext);

export const ServiceDataProvider = ({ children }) => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setServiceData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ServiceDataContext.Provider value={{ serviceData, loading }}>
      {children}
    </ServiceDataContext.Provider>
  );
};
