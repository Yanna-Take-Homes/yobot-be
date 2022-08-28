const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing auth routes', () => {

    describe( 'can login a user', () => {
        const url = '/api/auth/login';
        it( 'should return a JSON object', async () => {
            await request( server ).post( url ).send({
                username: 'yanna',
                password: 'faith',
            }).then(res => {
                expect( res.body ).toHaveProperty( 'token' );
                expect( res.type ).toEqual( 'application/json' );
                expect( res.status ).toEqual( 200 );
            });
        });
    });

});