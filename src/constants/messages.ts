export const errorMessages = {
  // Defaults
  default: 'Something went wrong.',
  server: 'Internal server error',
  timeout: 'Server Timed Out. Check your internet connection',
  invalidJson: 'Response returned is not valid JSON',
  missingData: 'Missing data',

  // User
  userNotAuthd: 'You need to be logged in, to update your profile',
  userExists: 'User already exists',
  missingFirstName: 'First name is missing',
  missingLastName: 'Last name is missing',
  missingEmail: 'Email is missing',
  missingPassword: 'Password is missing',
  passwordsDontMatch: 'Passwords do not match',
  userNotFound: 'There is no user record corresponding to this email',
  invalidPassword: 'The password is invalid',
};
