const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing server module -- server.js', () => {
    describe( 'server health check route', () => {
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( '/api' );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( '/api' );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this object: { message: "API Running!" }', async () => {
            const expectedBody = { message: "API Running!" };
            const response = await request( server ).get( '/api' );
            expect( response.body ).toEqual( expectedBody );
        });
    });
});