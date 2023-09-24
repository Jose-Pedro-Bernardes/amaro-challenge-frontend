import { toast } from "react-toastify";

export function callTheToast() {
  toast.success("Produto adicionado ao carrinho!", {
    position: "top-center",
    autoClose: 1800,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
