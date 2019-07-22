import React, {useContext, useMemo} from "react";
import {createValidator} from "@mouseover/js-validation";
import {defaultRuleSet} from "./defaultRuleSet";
import {ValidatorContext} from "./ValidatorContext";


export const useValidator = (rules) => {
    const validatorContext = useContext(ValidatorContext);
    return useMemo(() => {
        return validatorContext ? validatorContext(rules) : createValidator(defaultRuleSet)(rules);
    }, [rules]);
};

export default useValidator;