export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatDateHeader = (date: Date) => {

  const weekday = capitalize(
    date.toLocaleDateString("pt-BR", { weekday: "long" }).split("-")[0]
  );

  const day = date.getDate();

  const month = capitalize(
    date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")
  );

  return `${weekday}, ${day} ${month}`;
};

export const getWeekDays = () => {
  const today = new Date();
  const days = [];
  const currentDay = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay); 
  for (let i = 0; i < 7; i++) {
    const tempDate = new Date(startOfWeek);
    tempDate.setDate(startOfWeek.getDate() + i);
    days.push(tempDate);
  }
  return days;
};
