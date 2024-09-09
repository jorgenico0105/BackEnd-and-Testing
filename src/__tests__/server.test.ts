import request from 'supertest'
import server from '../server'

describe('Get API', () => {
  it('Should send json response',async()=>{
    const res=await request(server).get('/api')
    expect(res.status).toBe(200)
    expect(res.body.Nicolas).toBe('dice hola')

    expect(res.status).not.toBe(404)
    expect(res.body.Nicolas).not.toBe('LALALLA')
  })
})
