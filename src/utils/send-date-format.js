import dayjs from "dayjs";

const sendDateFormat = (data) => {
  return dayjs(data).format("YYYY-MM-DDTHH:mm:ssZ");
};

export default sendDateFormat;
