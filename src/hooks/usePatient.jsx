import { useContext } from "react";
import { PatientContext } from "../contexts/PatientContextProvider";

const usePatient = () => {
  const patient = useContext(PatientContext);
  return patient;
};

export default usePatient;
