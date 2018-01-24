/*
* @Author: Marte
* @Date:   2018-01-24 10:36:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-24 11:03:37
*/
const Router = require('koa-router')
const axios = require('axios')
const getMovie = async () => {
  const data = await axios('http://api.douban.com/v2/movie/in_theaters', {
    params: {
      start: 0,
      count: 10
    }
  })
  return data
}

export default function apiRouter (app) {
    const router = new Router();
    router.get('/api/movie', async (ctx, body)=>{
      const movieData = await getMovie()
      //console.log(movieData.data)
      ctx.body= movieData.data

    })

    app.use(router.routes()).use(router.allowedMethods())
}
