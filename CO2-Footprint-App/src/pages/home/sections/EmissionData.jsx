export default function EmissionData() {
  return (
    <div className="bg-amber-300 py-24 px-12">
      <table>
        <thead>
          <tr className="py-2 ">
            <th scope="col" className="px-2">
              Unternehmen
            </th>
            <th scope="col" className="px-2">
              Branche
            </th>
            <th scope="col" className="px-2">
              Land
            </th>
            <th scope="col" className="px-2">
              Kontinent
            </th>
            <th scope="col" className="px-2">
              Jährliche CO₂-Emissionen 2024
            </th>
            <th scope="col" className="px-2">
              % Unterschied zu 2023
            </th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}
