const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing auth routes', () => {

    describe( 'can login a user', () => {
        const url = '/api/auth/login';

        it( 'should return a JSON object', async () => {
            const response = await request( server ).post( url ).send({
                username: 'test',
                password: 'test',
            })
            expect( response.body ).toHaveProperty( 'token' );
            expect( response.type ).toEqual( 'application/json' );
            expect( response.status ).toEqual( 200 );
        });

    });

});