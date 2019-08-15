import {isEmail, isRequired, isValidMax, isValidMaxLength, isValidMin, isValidMinLength, isValidPattern} from "@mouseover/js-utils";

export const defaultRuleSet = {
    required: {
        validate: isRequired,
        message: 'This field is required'
    },
    minLength: {
        validate: isValidMinLength,
        message: 'Please enter at least {0} characters.'
    },
    maxLength: {
        validate: isValidMaxLength,
        message: 'Please enter no more than {0} characters.'
    },
    min: {
        validate: isValidMin,
        message: 'Please enter value less than {0}.'
    },
    max: {
        validate: isValidMax,
        message: 'Please enter value greater than {0}.'
    },
    email: {
        validate: isEmail,
        message: 'Please provide valid email'
    },
    pattern: {
        validate: isValidPattern,
        message: 'Please provide valid value'
    }
};