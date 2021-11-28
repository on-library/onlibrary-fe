export const getStatusRent = (val) => {
  switch (val) {
    case "0":
      return {
        color: "#33333",
        text: "Belum dikonfirmasi",
      };
    case "1":
      return {
        color: "#33333",
        text: "Menunggu diambil",
      };
    case "2":
      return {
        color: "#4444",
        text: "Buku sedang dipinjam",
      };

    case "3":
      return {
        color: "#444",
        text: "Permintaan Perpanjangan",
      };

    case "4":
      return {
        color: "#444",
        text: "Selesai, Tunggu pengembalian",
      };

    case "-1":
      return {
        color: "#444",
        text: "Telat mengembalikan",
      };

    case "-3":
      return {
        color: "#444",
        text: "SELESAI",
      };

    default:
      return {
        color: "",
        text: "",
      };
  }
};
