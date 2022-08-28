const request = require( 'supertest' );
const server = require( '../server.js' );

let loginToken;

beforeEach(async () => {
    const loginUrl = '/api/auth/login';
    await request( server ).post( loginUrl ).send({
        username: 'test',
        password: 'test',
    }).then(res => {
        loginToken = res.body.token;
    });
});

describe( 'Unit testing user lesson\'s route', () => {
    const url = '/api/user-lessons/1';
    describe( 'can get all user lessons by user_id', () => {
        it( 'should return an OK status code, json, and an array of length 1', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.body.length ).toEqual( 1 );
        });
    });
});