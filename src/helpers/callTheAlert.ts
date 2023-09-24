import Swal from "sweetalert2";

export function finalizeAlert() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Compra finalizada!",
    showConfirmButton: false,
    timer: 1800,
  });
}

export function limitReached(text: string) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${text}`,
  });
}
