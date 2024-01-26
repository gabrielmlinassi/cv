export function formatPostDate(date: string) {
  const dateObj = new Date(date);

  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const MonthMapper = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${MonthMapper[month]} ${year}`;
}
