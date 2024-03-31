import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  console.log(AlertHandlerContext.visible);
  AlertHandlerContext.setAlert("タスクの名前が設定されていません。");

  useEffect(() => {
    if(AlertHandlerContext.visible === true){
      setTimeout(() => {
        AlertHandlerContext.closeAlert(AlertHandlerContext.errorText);
      }, 5000);
    }
  })
  
  return(
    <Alert
    isActive={AlertHandlerContext.visible}
    context={AlertHandlerContext.errorText}
    />
  )
}

