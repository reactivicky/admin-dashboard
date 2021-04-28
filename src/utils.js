import * as R from 'ramda'

export const getUniqueData = (data) => {
  const uniqueArray = R.pipe(R.map(R.toPairs), R.unnest, R.groupBy(R.head), R.map(R.map(R.last)))
  const mappedProperties = uniqueArray(data)
  const domainData = R.uniq(mappedProperties.domain)
  const countDuplicates = R.pipe(R.countBy(R.identity))
  const domainObject = countDuplicates(mappedProperties.domain)
  return {
    domainData, domainObject
  }
}