const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing routes route', () => {
    const url = '/api/routes';
    describe( 'can get all routes', () => {
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return an array of length ', async () => {
            const expectedLen = 15;
            const response = await request( server ).get( url );
            expect( response.body.length ).toEqual( expectedLen );
        });
    });

    describe( 'can get routes by lesson_id', () => {
        const url = '/api/routes/for-lesson/1';
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return an array of length ', async () => {
            const expectedLen = 15;
            const response = await request( server ).get( url );
            expect( response.body.length ).toEqual( expectedLen );
        });
    });

    describe( 'can get route by id', () => {
        const url = '/api/routes/1';
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this object: {"id":1,"lesson_id":1,"lesson_name":"labels","text":"Can I tell you something?","replies":"sure","payloads":"","routes":"2","tag":"labels-start"}', async () => {
            const expectedBody = {"id":1,"lesson_id":1,"lesson_name":"labels","text":"Can I tell you something?","replies":"sure","payloads":"","routes":"2","tag":"labels-start"};
            const response = await request( server ).get( url );
            expect( response.body ).toEqual( expectedBody );
        });
    });
});