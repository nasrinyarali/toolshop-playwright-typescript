import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import registrationData from '../../src/test-data/registration-user.json';


test('New user can register, login, and retrieve their profile', async ({request}) => {
 const apiURL = 'https://api.practicesoftwaretesting.com';
 // Register a new user with random email
 const userData = {
   ...registrationData,
   email: `test-${randomUUID()}@example.com`,
 };
 
 const registerResponse = await request.post(`${apiURL}/users/register`,{headers: {
        'Content-Type': 'application/json',
 },
     data: userData,
   }
 );

 expect(registerResponse.status()).toBe(201);
 const registeredUser = await registerResponse.json();
 expect(registeredUser.email).toBe(userData.email);

 // Login with the same username and password
 const loginResponse = await request.post(`${apiURL}/users/login`,{headers: {
        'Content-Type': 'application/json',
 },
     data: {
       email: userData.email,
       password: userData.password,
     },
   }
 );
 expect(loginResponse.status()).toBe(200);
 const loginData = await loginResponse.json();
 //retrive the access token from the login response
 const token = loginData.access_token;
 expect(token).toEqual(expect.any(String));
 expect(token).not.toBe('');

 // Get the profile of the logged-in user using the access token
 const profileResponse = await request.get(`${apiURL}/users/me`,
   {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   }
 );
 expect(profileResponse.status()).toBe(200);
 const profile = await profileResponse.json();
 // Verify that the profile data matches the registered user data
 expect(profile).toMatchObject({
   id: registeredUser.id,
   email: userData.email,
   first_name: userData.first_name,
   last_name: userData.last_name,
 });
 expect(profile).not.toHaveProperty('password');
});