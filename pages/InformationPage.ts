import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';

export default class InformationPage {
    public readonly continueButton: Selector;


    constructor() {
        this.continueButton = Selector('#continue');

    }

    //Provide a random firstname, lastname and a zip code in the next page 
    public async generateInfomation(): Promise<void> {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const zipCode = faker.address.zipCode('#####');

        const checkoutInformationPage = Selector('.checkout_info');
        await t.typeText(checkoutInformationPage.find('#first-name'), firstName)
            .typeText(checkoutInformationPage.find('#last-name'), lastName)
            .typeText(checkoutInformationPage.find('#postal-code'), zipCode)
    }

    //Click continue button
    public async continueOder(): Promise<void> {
        await t.click(this.continueButton);

    }

}  