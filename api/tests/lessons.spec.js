const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing lessons route', () => {
    const url = '/api/lessons';
    describe( 'can get all lessons', () => {
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this array: [{"id":1,"name":"labels"},{"id":2,"name":"feelings"}]', async () => {
            const expectedBody = [{"id":1,"name":"labels"},{"id":2,"name":"feelings"}];
            const response = await request( server ).get( url );
            expect( response.body ).toEqual( expectedBody );
        });
    });

    describe( 'can get lesson by id', () => {
        const url = '/api/lessons/1';
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this object: {"id":1,"name":"labels"}', async () => {
            const expectedBody = {"id":1,"name":"labels"};
            const response = await request( server ).get( url );
            expect( response.body ).toEqual( expectedBody );
        });
    });
});