export const BASE_URL = "http://localhost:2000/api";

export const ENDPOINTS = {
  signupOtp: `${BASE_URL}/user/generate-signup-otp`,
  register: `${BASE_URL}/user/register`,
  generatePassword: `${BASE_URL}/user/generate-password`,
  login: `${BASE_URL}/user/login`,

  dashboard: `${BASE_URL}/user/dashboard`,
  favBarbers:`${BASE_URL}/user/favbarber`,
  forgotpassword:`${BASE_URL}/user/forgotpassword`,
  changePassword:`${BASE_URL}/user/change-password`
};