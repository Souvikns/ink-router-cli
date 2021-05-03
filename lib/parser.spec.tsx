import parser, { ParserOption, checkForHelpFlags } from './parser';

describe("parser", () => {
    it("should exist", () => {
        expect(parser).toBeTruthy();
    })
})

describe("parserOption", () => {
    it("should have helpOption undefined if help is disabled", () => {
        let options: ParserOption = { option: { disableHelp: true } };
        expect((options.option.disableHelp) ? options.helpComponent : null).toBeUndefined();
    })
})

describe("checkForHelpFlags", () => {
    it("should return true", () => {
        expect(checkForHelpFlags({ help: true })).toBeTruthy();
        expect(checkForHelpFlags({ h: true })).toBeTruthy();
    })

    it("should return false", () => {
        expect(checkForHelpFlags({ name: true })).toBeFalsy();
    })
})