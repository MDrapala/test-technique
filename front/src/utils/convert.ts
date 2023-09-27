export const FormatDate = (inputDate?: string) => {
  const parts = inputDate && inputDate.split("-");
  if (parts?.length === 3) {
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}/${month}/${year}`;
  } else {
    return "Invalid date format";
  }
};
