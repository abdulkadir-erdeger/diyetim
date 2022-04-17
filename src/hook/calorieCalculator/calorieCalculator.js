export default function calorieCalculator(data) {
  let calori = 0;
  const d = JSON.parse(data);

  if (data != null) {
    for (let i = 0; i < d.length; i++) {
      calori = calori + parseInt(d[i].kahvalti.bDegeri);
      calori = calori + parseInt(d[i].firstAraOgun.bDegeri);
      calori = calori + parseInt(d[i].ogle.bDegeri);
      calori = calori + parseInt(d[i].secondAraOgun.bDegeri);
      calori = calori + parseInt(d[i].aksam.bDegeri);
    }
  }

  return { calori };
}
