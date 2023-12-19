const timeTranslate = (time: any) => {
  const timeSplit = time.split(" ");
  const timeNumber = timeSplit[0];

  if (time === "a few seconds") {
    return <>Vài giây trước</>;
  }
  let timetranslate = null;
  switch (time) {
    case `${timeNumber} minutes`:
      timetranslate = `${timeNumber} phút trước `;
      break;
    case `${timeNumber} minute`:
      timetranslate = `1 phút trước `;
      break;
    case `${timeNumber} hours`:
      timetranslate = `${timeNumber} giờ trước `;
      break;
    case `an hour`:
      timetranslate = `1 giờ trước `;
      break;
    case `a day`:
      timetranslate = `1 ngày trước `;
      break;
    case `${timeNumber} day`:
    case `${timeNumber} days`:
      timetranslate = `${timeNumber} ngày trước`;
      break;
    default:
      timetranslate = time;
  }
  return <>{timetranslate}</>;
};
export default timeTranslate;
