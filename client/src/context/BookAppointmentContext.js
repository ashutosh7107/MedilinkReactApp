import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BookAppointmentContext = createContext();

export const useBookAppointmentData = () => useContext(BookAppointmentContext);

export const BookAppointmentDataProvider = ({ children }) => {
  const [appointmentData, setBookAppointmentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookAppointment")
      .then((res) => setBookAppointmentData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <BookAppointmentContext.Provider value={{ appointmentData, loading }}>
      {children}
    </BookAppointmentContext.Provider>
  );
};
