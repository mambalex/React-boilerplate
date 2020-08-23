import { errorMessages } from 'constants/index';
import { AxiosError } from 'axios';

/**
 * Create a readable error message for the front-end user
 */
const handleErrorMessage = (error: AxiosError): string => {
  if (error.response) {
    if (error.response.status === 503) {
      return error.response.statusText;
    }
    if (error.response.status === 401) {
      return error.response.statusText;
    }
    // if (error.response.status === 500) {
    //   return errorMessages.server;
    // }
    // if (dbError(error.response.data.error)) {
    //   return errorMessages.server;
    // }
    // client received an error response (5xx, 4xx)
    return error.response.data.error;
  }
  if (error.request) {
    // client never received a response, or request never left
    return errorMessages.default;
  }
  // Something happened in setting up the request that triggered an Error
  return error.message;
};

export { handleErrorMessage };
