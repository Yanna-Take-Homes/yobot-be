const request = require( 'supertest' );
const server = require( '../server.js' );

let loginToken;

beforeEach(async () => {
    const loginUrl = '/api/auth/login';
    await request( server ).post( loginUrl ).send({
        username: 'yanna',
        password: 'faith',
    }).then(res => {
        loginToken = res.body.token;
    });
});

describe( 'Unit testing users route', () => {
    const url = '/api/users';
    describe( 'can get all users', () => {
        it( 'should return an OK status code and json response type', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect ( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
        });
    });

    describe( 'can get user by id', () => {
        const url = '/api/users/1';
        it( 'should return an OK status code, json type, and object with property id matching id param', async () => {
            const response = await request( server ).get( url ).set( 'Authorization', `${loginToken}` );
            expect ( response.status ).toEqual( 200 );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.body.id ).toEqual( 1 );
        });
    });
});