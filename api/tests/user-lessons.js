const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing user lesson\'s route', () => {
    const url = '/api/user-lessons/1';
    describe( 'can get all user lessons by user_id', () => {
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this array:[{"id":1,"lesson_id":1,"lesson_name":"labels","user_id":1,"completed":1,"feedback":"Great lesson!","rating":5}]', async () => {
            const expectedBody = [{"id":1,"lesson_id":1,"lesson_name":"labels","user_id":1,"completed":1,"feedback":"Great lesson!","rating":5}];
            const response = await request( server ).get( url );
            expect( response.body ).toEqual( expectedBody );
        });
    });
});