import React, {useMemo} from "react";
import {createValidator} from "@mouseover/js-validation";
import {defaultRuleSet} from "./defaultRuleSet";
import {ValidatorContext} from "./ValidatorContext";

export const ValidatorProvider = (props) => {
    const {ruleSet} = props;
    const validator = useMemo(() => createValidator(ruleSet || defaultRuleSet), [ruleSet]);
    return <ValidatorContext.Provider value={validator} {...props} />;
};