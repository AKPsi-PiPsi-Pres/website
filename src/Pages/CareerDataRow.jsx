import "./CareerDataRow.css";

export default function CareerDataRow({ data }) {
  return (
      <tr>
        <td>{data.Name}</td>
        <td>{data.Position}</td>
        <td>{data.Company}</td>
        <td>{data.Sector}</td>
      </tr>
  );
}
