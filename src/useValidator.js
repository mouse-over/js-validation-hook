import React, {useMemo, useContext} from "react";
import {createValidator} from "@mouseover/js-validation";
import {defaultRuleSet} from "./defaultRuleSet";


export const ValidatorContext = React.createContext(null);

export const ValidatorProvider = (props) => {
    const {ruleSet} = props;
    const validator = useMemo(() => createValidator(ruleSet || defaultRuleSet), [ruleSet]);
    return (<ValidatorContext.Provider value={validator} {...props} />);
};

export const useValidator = (rules) => {
    const validatorContext = useContext(ValidatorContext);
    return useMemo(() => {
        console.log('[useValidator][useMemo]', rules);
        return validatorContext ? validatorContext(rules) : createValidator(defaultRuleSet)(rules);
    }, [rules]);
};

export default useValidator;