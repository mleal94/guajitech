const CustomErrors = {
  MISSING_NAME_ERROR: {
    MESSAGE: 'The name is a mandatory path',
  },
  EXIST_EMAIL_ERROR: {
    MESSAGE: 'This email is used by other user',
  },
  MISSING_PASSWORD_ERROR: {
    MESSAGE: 'The password is a mandatory path',
  },
  MISSING_AVATAR_ERROR: {
    MESSAGE: 'The avatar is a mandatory path',
  },
  PASSWORD_LENGTH_ERROR: {
    MESSAGE: 'The password must be at least 4 characters',
  },
  NOT_EQUALS_PASSWORD_ERROR: {
    MESSAGE: 'Passwords do not match',
  },
  MISSING_EMAIL_ERROR: {
    MESSAGE: 'The email is a mandatory path',
  },
  MISSING_IDENTIFIER_ERROR: {
    MESSAGE: 'The identifier must be provided for the authentication',
  },
  USER_NOT_FOUND_ERROR: {
    MESSAGE: 'User not found',
  },
  NOT_VALID_ID_ERROR: {
    MESSAGE: 'Not valid id',
  },
  USER_CREATION_ERROR: {
    MESSAGE: 'Something was wrong in user creation',
  },

};

module.exports = CustomErrors;
