import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import { AlertContextType } from "../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext) as AlertContextType;

  if (alert !== null) {
    return (
      <div className={`alert alert-${alert.type} max-w-md`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    );
  } else {
    return null;
  }
}

export default Alert;
