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

  function filterData(data, filters) {
    return data.filter((item) => {
      for (const key in filters) {
        const filterValue = filters[key]
        const itemValue = item[key]

        if (filterValue !== '' && itemValue !== filterValue) {
          return false
        }
      }
      return true
    })
  }

  function getco2Change(emissionsYear1, emissionsYear2) {
    const absoluteChange = emissionsYear1 - emissionsYear2
    const percentageChange = (absoluteChange / emissionsYear2) * 100
    return Number(percentageChange.toFixed(2))
  }

  function formatRawData(rawData) {
    return rawData.map(({ emissionen2024, emissionen2023, ...rest }) => {
      const co2Change = getco2Change(emissionen2024, emissionen2023)
      return {
        ...rest,
        emissionen2024,
        veraenderungVorjahr: co2Change,
      }
    })
  }

  return {
    sortData,
    filterData,
    formatRawData,
  }
}
