import React, { useDebugValue } from "react";

export default function Alert({ alert }) {
  const capFirst = (word) => {
    const lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capFirst(alert.type)}</strong> , <strong>{alert.msg}</strong>
          {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
        </div>
      )}
    </div>
  );
}
