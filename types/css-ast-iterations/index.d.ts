// Type definitions for css-ast-iterations 0.5
// Project: https://github.com/afonsopacifer/css-ast-iterations#readme
// Definitions by: shadowtime2000 <https://github.com/shadowtime2000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="css" />

export interface DeclarationModifications extends Declaration {
    getParam: (param: number) => string;
}

export interface RuleModifications extends Rule {
    findDeclarations: (callback: (declaration: DeclarationModifications, declarationIndex: number) => void) => void;
    findDeclarationsBySelectors: (selectors: string, callback: (declaration: DeclarationModifications, declarationIndex: number) => void) => void;
    findDeclarationsByProperty: (selectors: string, callback: (declaration: DeclarationModifications, declarationIndex: number) => void) => void;
    findDeclarationsByValue: (selectors: string, callback: (declaration: DeclarationModifications, declarationIndex: number) => void) => void;
    addDeclaration: (property: string, value: string, declarationIndex: number) => void;
    removeDeclaration: (declarationIndex: number) => void;
}

export interface StylesheetModifications extends Stylesheet {
    findAllRules: (callback: (rule: RuleModifications, ruleIndex: number) => void) => void;
    moonWalkAllRules: (callback: (rule: RuleModifications, ruleIndex: number) => void) => void;
    findAllRulesByType: (type: string, callback: (rule: RuleModifications, ruleIndex: number) => void) => void;
    addRule: (rule: RuleModifications, index: number) => void;
    removeRule: (index: number) => void;
    findAllSelectors: (callback: (selectors: any, selectorIndex: number) => void) => void;
    findAllImport: (callback: (url: string) => void) => void;
    findAllDeclarations: (callback: (declaration: DeclarationModifications) => void) => void;
    findAllDeclarationsBySelectors: (selector: string, callback: (declaration: DeclarationModifications) => void) => void;
    findAllDeclarationsByProperty: (property: string, callback: (declaration: DeclarationModifications) => void) => void;
    findAllDeclarationsByValue: (value: string, callback: (declaration: DeclarationModifications) => void) => void;
}

export default function addIterations(ast: Stylesheet): StylesheetModifications;
