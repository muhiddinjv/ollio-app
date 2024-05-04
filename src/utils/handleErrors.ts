import axios from "axios";

type ApiError = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
  };
  
  function isApiErrorResponse(res: any) {
    return (
      res &&
      "type" in res &&
      "title" in res &&
      "status" in res &&
      "detail" in res &&
      "instance" in res
    );
  }
  
  export const handleErrorMessage = (error: any) => {
    if (!axios.isAxiosError(error)) {
      return "Unknown error";
    }
  
    if (!error.response) {
      return error.message;
    }
  
    if (!isApiErrorResponse(error.response.data)) {
      return error.message;
    }
  
    return error.response.data.detail;
  };
  
  export const handleErrorCode = (error: any) => {
    if (!axios.isAxiosError(error)) {
      throw Error("Unknown error");
    }
  
    if (!error.response) {
      return error.status;
    }
  
    if (!isApiErrorResponse(error.response.data)) {
      return error.response.status;
    }
  
    return error.response.data.status;
  };