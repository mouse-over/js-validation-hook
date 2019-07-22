import React from 'react';
import {render, cleanup} from '@testing-library/react';
import useValidator, {ValidatorProvider} from '../src/useValidator';
import {defaultRuleSet} from "../src/defaultRuleSet";

const rules = {
    minTest: {
        required: {message: 'Please set!'},
        min: 5,
        minLength: 2
    }
};

const ValidatedComponent = ({children, validations}) => children(useValidator(validations));

function setup(ruleSet, validations) {
    const returnVal = {current: null};
    render(
        <ValidatorProvider ruleSet={ruleSet}>
            <ValidatedComponent validations={validations}>{(val) => {
                returnVal.current = val;
                return null;
            }}</ValidatedComponent>
        </ValidatorProvider>
    );
    return returnVal.current;
}

afterEach(cleanup);

test('useValidator', () => {
    const validator = setup(defaultRuleSet, rules);

    expect(validator.rules).toStrictEqual(rules);
    expect(validator.ruleSet).toStrictEqual(defaultRuleSet);
    expect(validator.validateObject).toBeInstanceOf(Function);
    expect(validator.validateObject).toBeInstanceOf(Function);

    expect(
        validator.validateField(9, 'minTest')
    ).toStrictEqual({
        messages: [
            "Please enter at least 2 characters."
        ],
        valid: false
    });

    const result = validator.validateObject(
        {
            minTest: 12,
            noRules: 'foo'
        }
    );

    expect(result).toStrictEqual({
        "children": {
            "minTest": {
                "messages": [],
                "valid": true
            }
        },

        "valid": true
    });
});