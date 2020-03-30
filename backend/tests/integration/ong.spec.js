const request = require('supertest')
const app = require('../../src/app')

describe('ONG', () => {
    it('should be able to crate a new ONG', async () => {
        const response = await request(app)
        .post('./ongs')
        .send({
            name: "CRIEI AGORA",
            email: "contato@gmail.com",
            whatsapp: "16993131815",
            city: "Franca",
            uf: "SP"
        })

        console.log(response.body);
    })
})