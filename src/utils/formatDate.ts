export const formatDate = (date: string | undefined) => {
  if (date) {
    const releaseDate = new Date(date);
    const monthsArr = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const releaseDay = releaseDate.getDate();
    const releaseMonth = releaseDate.getMonth();
    const releaseYear = releaseDate.getFullYear();
    return `${releaseDay} ${monthsArr[releaseMonth]} ${releaseYear}`;
  }
};
