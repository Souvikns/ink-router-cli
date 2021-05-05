import parser, { ParserOption, checkForHelpFlags, checkRequiredFlags } from './parser';

const checkHelpcommand = (
    isHelpDisabled: boolean | undefined,
    HelpComponent: string | undefined,
    ErrorCompoennt: string
) => {
    if (!isHelpDisabled) {
        if (typeof HelpComponent !== "undefined") {
            return HelpComponent;
        } else {
            return ErrorCompoennt;
        }
    }

    return isHelpDisabled;
}

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

describe('checkAndRenderHelpCommand', () => {

    it("should return true", () => {
        let Comp = checkHelpcommand(true, "help", "error");
        expect(Comp).toBeTruthy();
    })

    it("should return help component", () => {
        expect(checkHelpcommand(undefined, "help", "error")).toMatch(/help/);
    })

    it("should return error Component", () => {
        expect(checkHelpcommand(undefined, undefined, "error")).toMatch(/error/);
    })
})

describe("checkRequiredFlags", () => {
    it("should return true", () => {
        expect(checkRequiredFlags({}, { watch: { alias: "w", required: true } })).toBeTruthy()
    })

    it("should return false", () => {
        expect(checkRequiredFlags({ w: true }, { watch: { alias: "w", required: true } })).toBeFalsy();
        expect(checkRequiredFlags({watch: true}, {watch: {alias: "w"}})).toBeFalsy();
        expect(checkRequiredFlags({watch: true}, {watch: {alias: "w", required: true}})).toBeFalsy();
    })

    it("should return false if no options was passed", () => {
        expect(checkRequiredFlags({}, {})).toBeFalsy();
    })

})