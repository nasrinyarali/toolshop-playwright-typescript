import {test, expect, APIResponse} from '@playwright/test';
import registrationData from '../../src/test-data/registration-user.json';
import {randomUUID} from 'node:crypto';
test("API Registers a new user", async ({ request}) => {
  const userData = {
  ...registrationData, 
  email: `test-${randomUUID()}@example.com`,
}

const response: APIResponse = await request.post("https://api.practicesoftwaretesting.com/users/register", {
  data: userData,
  headers: {
    'Content-Type': 'application/json'
    },

  });    
  console.log("Response: ", await response.text());
  expect( response.status()).toBe(201);
  let user = await response.json();
  expect(user).toMatchObject({
    first_name: userData.first_name,
    last_name: userData.last_name,  
    email: userData.email,
    phone: userData.phone,
    dob: userData.dob,
    address: userData.address,
  });
  expect(user.id).toEqual(expect.any(String));
  expect(user.id).not.toBe('');
  expect(user).not.toHaveProperty('password');

});