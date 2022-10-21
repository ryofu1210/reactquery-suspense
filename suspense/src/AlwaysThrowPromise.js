const sleep = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

export const AlwaysThrowPromise = () => {
  if(Math.random() > 0.5) {
    throw sleep()
  }

  return <p>render AlwaysThrowPromise</p>
}
