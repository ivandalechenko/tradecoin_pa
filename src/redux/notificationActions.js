import { toast } from "react-toastify";
import ToastConfig from "../components/UI/ToastConfig";

export const warningNotification = (message) => {
    toast.warn(message, ToastConfig);
}
export const successNotification = (message) => {
    toast.success(message, ToastConfig);
}
export const infoNotification = (message) => {
    toast.info(message, ToastConfig);
}
