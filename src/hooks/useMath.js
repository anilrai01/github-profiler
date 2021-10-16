export default function useMath() {
  const abstractDate = (data) => {
    let pre = data.slice(0, 10);

    let months = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let finalDate = `${Number(pre.slice(8))} ${
      months[Number(pre.slice(5, 7) - 1)]
    } ${Number(pre.slice(0, 4))}`;

    // console.log(Number(pre.slice(5, 7) - 1));

    return finalDate;
  };
  return { abstractDate };
}
