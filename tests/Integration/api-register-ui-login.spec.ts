import {test, expect, APIResponse} from "@playwright/test"
import registrationData from '../../src/test-data/registration-user.json';


test('API register and UI login', async ({ request}) => {
  const Api_URL = process.env.API_BASE_URL;
  if (!Api_URL) {
    throw new Error('API_BASE_URL is not configured');
  }     

// 1. Register a new user
const userData = {
...registrationData,
email: `test-${Date.now()}@gmail.com`,
};

const response:APIResponse = await request.post(`${Api_URL}/users/register`, {
  data:userData,
});

expect(response.status()).toBe(201);
const registeredUser = await response.json();
expect(registeredUser.email).toBe(userData.email);
});


