import { test, expect } from '@playwright/test';
import registrationData from '../../src/test-data/registration-user.json';

test('New user can register, login, and retrieve their profile', async ({request,}) => {
const apiURL = process.env.API_BASE_URL;

if (!apiURL) {
throw new Error('API_BASE_URL is not configured');
}

// 1. Register a new user
const userData = {
...registrationData,
email: `test-${Date.now()}@gmail.com`,
};

const registerResponse = await request.post(`${apiURL}/users/register`,
{
data: userData,
});

expect(registerResponse.status()).toBe(201);
const registeredUser = await registerResponse.json();
expect(registeredUser.email).toBe(userData.email);

// 2. Log in with the same email and password
const loginResponse = await request.post(`${apiURL}/users/login`,
{
data: {
email: userData.email,
password: userData.password,
},
});

expect(loginResponse.status()).toBe(200);
const loginData = await loginResponse.json();
const token = loginData.access_token;

expect(token).toEqual(expect.any(String));
expect(token).not.toBe('');

// 3. Retrieve the user's profile using the token
const profileResponse = await request.get(`${apiURL}/users/me`,
{
headers: {
Authorization: `Bearer ${token}`,
},
});

expect(profileResponse.status()).toBe(200);
const profile = await profileResponse.json();

// 4. Verify that the profile belongs to the registered user
expect(profile).toMatchObject({
id: registeredUser.id,
email: userData.email,
first_name: userData.first_name,
last_name: userData.last_name,
});

expect(profile).not.toHaveProperty('password');
});
