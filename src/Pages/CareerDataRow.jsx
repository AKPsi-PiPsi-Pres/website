export default function CareerDataRow({ data }) {
  console.log(data[0]);
  return (
    <>
      {
      <tr>
        <td>{data.Name}</td>
        <td>{data.Position}</td>
        <td>{data.Company}</td>
        <td>{data.Sector}</td>
      </tr>
      }
    </>
  );
}
