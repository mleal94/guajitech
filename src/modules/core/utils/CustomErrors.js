const CustomErrors = {
  MISSING_NAME_ERROR: {
    MESSAGE: 'The name is a mandatory path',
  },
  EXIST_EMAIL_ERROR: {
    MESSAGE: 'This email is used by other user',
  },
  MISSING_TOKEN_ERROR: {
    MESSAGE: 'No token provided',
  },
  INVALID_TOKEN_ERROR: {
    MESSAGE: 'Invalid token provided',
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
  ANIMAL_NOT_FOUND_ERROR: {
    MESSAGE: 'Animal not found',
  },
  ANIMAL_NON_STOCK_ERROR: {
    MESSAGE: 'Out of stock animal',
  },
  BREED_NOT_FOUND_ERROR: {
    MESSAGE: 'Breed not found',
  },
  SHOP_NOT_FOUND_ERROR: {
    MESSAGE: 'Shop not found',
  },
  PET_NOT_FOUND_ERROR: {
    MESSAGE: 'Pet not found',
  },
  NOT_VALID_ID_ERROR: {
    MESSAGE: 'Not valid id',
  },
  MISSING_ANIMAL_TO_BUY: {
    MESSAGE: 'The animal must be specified',
  },
  MISSING_PET_NAME_TO_BUY: {
    MESSAGE: 'The pet name must be specified',
  },
  MISSING_USER_TO_BUY: {
    MESSAGE: 'The user must be specified',
  },
  USER_CREATION_ERROR: {
    MESSAGE: 'Something was wrong in user creation',
  },
  BREED_DUPLICATION_ERROR: {
    MESSAGE: 'This animal breed already exist',
  },
  SHOP_DUPLICATION_ERROR: {
    MESSAGE: 'This animal breed already exist',
  },
  MISSING_BREED_NAME_ERROR: {
    MESSAGE: 'The breed name is path is mandatory',
  },
  MISSING_PRICE_ANIMAL_ERROR: {
    MESSAGE: 'The breed name is path is mandatory',
  },
  MISSING_ANIMAL_ERROR: {
    MESSAGE: 'The breed name is path is mandatory',
  },
  MISSING_SHOP_ERROR: {
    MESSAGE: 'The shop path is mandatory',
  },
  MISSING_QUANTITY_ERROR: {
    MESSAGE: 'The quantity path is mandatory',
  },
  MISSING_BREED_ERROR: {
    MESSAGE: 'The breed path is mandatory',
  },
  MISSING_SHOP_NAME_ERROR: {
    MESSAGE: 'The breed name is path is mandatory',
  },

};

module.exports = CustomErrors;
