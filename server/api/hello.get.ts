// https://v3.nuxtjs.org/guide/features/server-routes/
export default defineEventHandler((event) => {
  console.log( event.context )
  return {
    extra: 'get'
  }
})