import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
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
    co2_change_in_percent: null,
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
      co2_change_in_percent: null,
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

  function addSortButton(label) {
    return (
      <IconButton
        aria-label={
          sortSettings.unternehmen === 'asc'
            ? `Sortiere ${label} aufsteigend`
            : `Sortiere ${label} absteigend`
        }
        size="small"
        onClick={() => sortList(label.toLowerCase())}
      >
        {sortSettings[label] === 'asc' ? (
          <ArrowDownwardIcon fontSize="inherit" color="#d0fae5" />
        ) : (
          <ArrowUpwardIcon fontSize="inherit" color="#d0fae5" />
        )}
      </IconButton>
    )
  }

  return (
    <div className="bg-[#2e6061] py-24 px-12 text-emerald-100">
      <table>
        <thead>
          <tr className="border-b border-emerald-100">
            <th scope="col">
              <div className="flex items-center text-left">
                Unternehmen
                {addSortButton('Unternehmen')}
              </div>
            </th>
            <th scope="col">
              <div className="flex items-center text-left">
                Branche
                {addSortButton('Branche')}
              </div>
            </th>
            <th scope="col">
              <div className="flex items-center text-left">
                Land
                {addSortButton('Land')}
              </div>
            </th>
            <th scope="col">
              <div className="flex items-center text-left">
                Kontinent
                {addSortButton('Kontinent')}
              </div>
            </th>
            <th scope="col">
              <div className="flex items-center text-left">
                Emissionen 2024 (t CO₂)
                {addSortButton('co2_emissionen_2024')}
              </div>
            </th>
            <th scope="col">
              <div className="flex items-center text-left">
                Veränderung zum Vorjahr (%)
                {addSortButton('co2_change_in_percent')}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((item) => (
            <tr key={item.unternehmen}>
              <td className="pr-8 py-2">{item.unternehmen}</td>
              <td className="pr-8 py-2">{item.branche}</td>
              <td className="pr-8 py-2">{item.land}</td>
              <td className="pr-8 py-2">{item.kontinent}</td>
              <td className="pr-8 py-2">{item.co2_emissionen_2024}</td>
              <td className="pr-8 py-2">{item.co2_change_in_percent}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}
