export default function useDataProcessor() {
  function sortData(data, criterion, order = 'asc') {
    return [...data].sort((a, b) => {
      const valueA = a[criterion]
      const valueB = b[criterion]

      const valueType =
        typeof valueA === 'string' && typeof valueB === 'string'
          ? 'string'
          : 'number'

      if (order === 'asc' && valueType === 'number') {
        return valueA - valueB
      }
      if (order === 'desc' && valueType === 'number') {
        return valueB - valueA
      }
      if (order === 'asc' && valueType === 'string') {
        return valueA.localeCompare(valueB)
      }
      if (order === 'desc' && valueType === 'string') {
        return valueB.localeCompare(valueA)
      }
      return 0
    })
  }

  function filterData(data, criterion, value) {
    return data.filter((item) => item[criterion] === value)
  }

  function getco2_change(emissionsYear1, emissionsYear2) {
    const absoluteChange = emissionsYear1 - emissionsYear2
    const percentageChange = (absoluteChange / emissionsYear2) * 100
    return Number(percentageChange.toFixed(2))
  }

  function formatRawData(rawData) {
    return rawData.map(
      ({ co2_emissionen_2024, co2_emissionen_2023, ...rest }) => {
        const co2_change = getco2_change(
          co2_emissionen_2024,
          co2_emissionen_2023
        )
        return {
          ...rest,
          co2_emissionen_2024,
          co2_change: co2_change,
        }
      }
    )
  }

  return {
    sortData,
    filterData,
    formatRawData,
  }
}
