export const getMovieDuration = (totalDuration: number | undefined) => {
  if (typeof totalDuration === 'number') {
    const hours = +(totalDuration / 60).toFixed(0);
    const minutes = totalDuration % 60;
    return `${hours}h ${padTo2Digits(minutes)}m`;
  }
};

const padTo2Digits = (num: number) => num.toString().padStart(2, '0');
