type LoadableState<T> = { status: 'pending', promise: Promise<T> } | { status: 'fullfilled', data: T } | { status: 'rejected', error: unknown }

export class Loadable<T> {
   private state: LoadableState<T>

   constructor(promise: Promise<T>){
    this.state = {
      status: 'pending',
      promise: promise.then(
        (data) => {
          this.state = {
            status: 'fullfilled',
            data: data
          }
          return data
      },
      (error) => {
        this.state = {
          status: 'rejected',
          error
        }
        throw error
      }
      )
    }
   }

   getOrThrow(): T {
     switch(this.state.status) {
       case 'pending':
         throw this.state.promise
       case 'fullfilled':
         return this.state.data
       case 'rejected':
         throw this.state.error
     }
   }
}
