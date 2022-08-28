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

describe( 'Unit testing routes route', () => {
    const url = '/api/routes';
    describe( 'can get all routes', () => {
        it( 'should return an OK status code, json, and an array of length 15', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect ( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.body.length ).toEqual( 15 );
        });
    });

    describe( 'can get routes by lesson_id', () => {
        const url = '/api/routes/for-lesson/1';
        it( 'should return an OK status code, json, and an array of length 15', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect ( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.body.length ).toEqual( 15 );
        });
    });

    describe( 'can get route by id', () => {
        const url = '/api/routes/1';
        it( 'should return an OK status code, json, and an object with and id matching the id param', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect ( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.body.id ).toEqual( 1 );
        });
    });
});