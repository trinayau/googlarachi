const request = require('supertest');
const app = require('../app');

describe ('API Server', () => {
    let api;
    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server running at port 5000!')
        }) //listen in on another port to not confuse matters. test server listening at 5000 hardcoded. 
    });
    afterAll((done) => { //just built in, passing it thru. we arent actually sending thru an api to test
        api.close(done);
        console.log('Gracefully stopping test server') //gracefully - no artifacts jangling 
    });
    it('responds to get / with a status of 200', (done) => {
        request(api).get('/').expect(200, done)
    });
    
})
