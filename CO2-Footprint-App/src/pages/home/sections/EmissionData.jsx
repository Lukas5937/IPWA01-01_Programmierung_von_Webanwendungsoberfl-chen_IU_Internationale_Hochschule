import { useState } from 'react'
import rawData from '../../../data/emission-data.json'
import useDataProcessor from '../hooks/useDataProcessor.jsx'

export default function EmissionData() {
  const { sortData, filterData, formatRawData } = useDataProcessor()

  const formattedData = formatRawData(rawData)
  const initialData = sortData(formattedData, 'unternehmen')

  const [data, setData] = useState(initialData)

  const [sortSettings, setSortSettings] = useState({
    unternehmen: 'asc',
    branche: null,
    land: null,
    kontinent: null,
    co2_emissionen_2024: null,
    co2ChangeInPercent: null,
  })

  console.log('filterData: ', filterData)

  function setNewOrder(criterion) {
    const newOrder = sortSettings[criterion] === 'asc' ? 'desc' : 'asc'

    setSortSettings(() => ({
      unternehmen: null,
      branche: null,
      land: null,
      kontinent: null,
      co2_emissionen_2024: null,
      co2ChangeInPercent: null,
      [criterion]: newOrder,
    }))
    return newOrder
  }

  function sortList(criterion) {
    const newOrder = setNewOrder(criterion)
    console.log('newOrder: ', newOrder)
    setData((prevData) => {
      return sortData(prevData, criterion, newOrder)
    })
    console.log('sortSettings: ', sortSettings)
  }

  return (
    <div className="bg-amber-300 py-24 px-12">
      <table>
        <thead>
          <tr className="py-2 ">
            <th scope="col" className="px-2">
              <div className="flex items-center">
                Unternehmen
                <button
                  className="ml-2"
                  onClick={() => sortList('unternehmen')}
                >
                  {sortSettings.unternehmen === 'asc' ? '^' : '°'}
                </button>
              </div>
            </th>
            <th scope="col" className="px-2">
              <div className="flex items-center">
                Branche
                <button className="ml-2" onClick={() => sortList('branche')}>
                  {sortSettings.branche === 'asc' ? '^' : '°'}
                </button>
              </div>
            </th>
            <th scope="col" className="px-2">
              <div className="flex items-center">
                Land
                <button className="ml-2" onClick={() => sortList('land')}>
                  {sortSettings.land === 'asc' ? '^' : '°'}
                </button>
              </div>
            </th>
            <th scope="col" className="px-2">
              <div className="flex items-center">
                Kontinent
                <button className="ml-2" onClick={() => sortList('kontinent')}>
                  {sortSettings.kontinent === 'asc' ? '^' : '°'}
                </button>
              </div>
            </th>
            <th scope="col" className="px-2">
              <div className="flex items-center">
                Emissionen 2024 (t CO₂)
                <button
                  className="ml-2"
                  onClick={() => sortList('co2_emissionen_2024')}
                >
                  {sortSettings.co2_emissionen_2024 === 'asc' ? '^' : '°'}
                </button>
              </div>
            </th>
            <th scope="col" className="px-2">
              <div className="flex items-center">
                Veränderung zum Vorjahr (%)
                <button
                  className="ml-2"
                  onClick={() => sortList('co2ChangeInPercent')}
                >
                  {sortSettings.co2ChangeInPercent === 'asc' ? '^' : '°'}
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.unternehmen}>
              <td>{item.unternehmen}</td>
              <td>{item.branche}</td>
              <td>{item.land}</td>
              <td>{item.kontinent}</td>
              <td>{item.co2_emissionen_2024}</td>
              <td>{item.co2ChangeInPercent}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}
