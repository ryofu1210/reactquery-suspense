const fetchData1 = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('promise fullfilled')
    }, 3000)
  })
}

let data: string | undefined

// ローディング中はPromiseをthrowするおかげで、フックのインタフェースからundefinedがなくなった
const useData1 = (): string => {
  if (data === undefined) {
    throw fetchData1().then(d => data = d)
  }
  return data
}

export const DataLoader: React.VFC = () => {
  const data = useData1()
  return (
    <div>
      <div>Data is {data}</div>
    </div>
  )  
}
