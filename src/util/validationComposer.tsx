/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax */
import * as EmailValidator from 'email-validator';

const required = (value) => {
    return value ? null : 'Required';
};

const phone = (value) => {
    const phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!phoneRe.test(value)) {
        return 'Invalid phone number';
    }
    return null;
};

const email = (value) => {
    if (!EmailValidator.validate(value)) {
        return 'Invalid email.';
    }
    return null;
};

const notZero = (value) => {
    if (value === 0 || value === '0') {
        return 'Please enter a number above zero.';
    }
    return null;
};

const isNumber = (value) => {
    const numberRe = /^-?\d+$/;
    if (!numberRe.test(value)) {
        return 'Please enter a number.';
    }
    return null;
};

const validationComposer = (value, validators) => {
    for (const validator of validators) {
        const error = validator(value);
        if (error) {
            return error;
        }
    }
    return null;
};

const requiredPhone = (value) => validationComposer(value, [required, phone]);
const requiredEmail = (value) => validationComposer(value, [required, email]);
const requiredNotZero = (value) => validationComposer(value, [required, isNumber, notZero]);

export { required, phone, validationComposer, requiredPhone, requiredEmail, requiredNotZero };
