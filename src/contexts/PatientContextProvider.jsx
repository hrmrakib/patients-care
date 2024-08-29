import React, { createContext, useState } from "react";

export const PatientContext = createContext(null);

// It's a cutom hook for track current user index
const PatientContextProvider = ({ children }) => {
  const [currentPatientIndex, setCurrentPatientIndex] = useState(3);

  const patientInfo = {
    currentPatientIndex,
    setCurrentPatientIndex,
  };

  return (
    <PatientContext.Provider value={patientInfo}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContextProvider;
