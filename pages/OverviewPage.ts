import { Selector, t } from "testcafe";

export default class OverviewPage {
    public readonly finishButton: Selector;

    constructor() {
        this.finishButton = Selector('#finish');
    }


    //Click Finish 
    public async finishOder(): Promise<void> {
        await t.click(this.finishButton);
    }
}  