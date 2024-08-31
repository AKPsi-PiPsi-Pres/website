export default function CareerDataRow({ data }) {
  console.log(data[0]);
  return (
    <>
      {
        <tr key={data[0]}>
          <td>{data[0]}</td>
          <td>{data[5]}</td>
          <td>{data[4]}</td>
          <td>{data[3]}</td>
        </tr>
      }
    </>
  );
}
