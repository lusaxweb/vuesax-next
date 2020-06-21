const getPage = (data: any, page: number, maxItems: number = 5): any => {
  // console.log(data)
  const max = Math.ceil(page * maxItems)
  const min = max - maxItems

  const items: any = []
  data.forEach((item: any, index: number) => {
    if (index >= min && index < max) {
      items.push(item)
    }
  })
  return items
}

const getLength = (data: any, maxItems: number = 5): any => {
  const length = Math.ceil(data.length / maxItems)
  return length
}

const checkAll = (selected: any, data: any): any => {
  if (selected.length !== data.length) {
    selected = []
    data.forEach((item: any) => {
      selected.push(item)
    })
    return selected
  } else {
    return []
  }

}

const getSearch = (data: any, search: string = ''): any => {

  function flattenDeep(val: any): any {
    return Object.values(val || []).reduce(
      (acc: any, val: any) => (typeof val === 'object') ?
      acc.concat(flattenDeep(val)) :
      acc.concat(val), [])
  }

  function getValues(obj: any) {
    return flattenDeep(obj).filter(function (item: any) {
      return (typeof item === 'string') || (typeof item === 'number');
    });
  }

  function normalize(text: string) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  }

  const searchNormalize = normalize(search)

  return data.filter((item: any) => {
    return normalize(getValues(item).toString()).indexOf(searchNormalize) != -1
  })
}

const sortData = (evt: any, data: any, sortKey: string, type: string) => {
  data = [...data].sort(returnOriginalIndex)
  let sortType = type || 'desc'
  const el = evt.target

  if (el.dataset[`sortType${sortKey}`] == 'desc') {
    sortType = 'asc'
  } else if (el.dataset[`sortType${sortKey}`] == 'asc') {
    sortType = null
  }

  if (sortType == 'desc') {
    data.map((item: any, i: number) => {
      item[`vsOriginalIndex${sortKey}`] = i
    })
  }

  el.dataset[`sortType${sortKey}`] = sortType
  el.dataset[`sortType`] = sortType
  el.dataset[`sortKey`] = `sortType${sortKey}`

  const parent = el.closest('.vs-table__tr')
  const ths = parent.querySelectorAll('th.sort')
  ths.forEach((th: any) => {
    if (th != el) {
      th.dataset.sortType = null
      th.dataset[th.dataset[`sortKey`]] = null
    }
  })

  function compare(a: any, b: any) {
    if (a[sortKey] < b[sortKey]) {
      return sortType !== 'desc' ? 1 : -1
    }
    if (a[sortKey] > b[sortKey]) {
      return sortType !== 'desc' ? - 1 : 1
    }
    return 0
  }

  function returnOriginalIndex(a: any, b: any) {
    return a[`vsOriginalIndex${sortKey}`] - b[`vsOriginalIndex${sortKey}`]
  }

  return sortType !== null ? [...data].sort(compare) : [...data].sort(returnOriginalIndex)
}

export {
  getPage,
  getLength,
  checkAll,
  getSearch,
  sortData
}
