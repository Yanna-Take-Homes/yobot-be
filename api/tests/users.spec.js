const request = require( 'supertest' );
const server = require( '../server.js' );

describe( 'Unit testing users route', () => {
    const url = '/api/users';
    describe( 'can get all users', () => {
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this array:[{"id":1,"username":"JohnnyAppleseed","firstName":"John","email":"John@yo.com","password":"test","last_route_id":1}]', async () => {
            const expectedBody = [{"id":1,"username":"JohnnyAppleseed","firstName":"John","email":"John@yo.com","password":"test","last_route_id":1}];
            const response = await request( server ).get( url );
            expect( response.body ).toEqual( expectedBody );
        });
    });

    describe( 'can get user by id', () => {
        const url = '/api/users/1';
        it( 'should return an OK status code', async () => {
            const expectedStatusCode = 200;
            const response = await request( server ).get( url );
            expect ( response.status ).toEqual( expectedStatusCode );
        });

        it( 'should return a JSON object', async () => {
            const response = await request( server ).get( url );
            expect( response.type ).toEqual( 'application/json' );
        });

        it( 'should return this object: {"id":1,"username":"JohnnyAppleseed","firstName":"John","email":"John@yo.com","password":"test","last_route_id":1}', async () => {
            const expectedBody = {"id":1,"username":"JohnnyAppleseed","firstName":"John","email":"John@yo.com","password":"test","last_route_id":1};
            const response = await request( server ).get( url );
            expect( response.body ).toEqual( expectedBody );
        });
    });
});