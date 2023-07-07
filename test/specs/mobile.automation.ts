describe('Open Application',() => {
    it('should open apps', async() => {
        await $('//*[@text="Welcome..."]').click();
    })
})
describe('Submit User Form Data',() => {
    it('input field name: abdul alim', async() => {
        await $('//*[@text="Name"]').setValue("abdul alim");
    })
    it('input field weight: 78', async() => {
        await $('//*[@text="Weight"]').setValue(50);
    })
    it('input field height: 175', async() => {
        await $('//*[@text="Height"]').setValue(160);
    })
    it('click choose field gender: Male', async() => {
        await $('//*[@text="Male"]').click();
    })
    it('click button NEXT', async() => {
        await $('//*[@text="NEXT"]').click();
    })
})
describe('Submit User Form Data Page 2',() => {
    it('click choose field aktivitas sehari-hari', async() => {
        await $('//*[@text="Tidur, Bekerja, dsj."]').click();
    })
    it('click button SELESAI', async() => {
        await $('//*[@text="SELESAI"]').click();
    })
    it('validate home screen diet meal app', async() => {
        await expect($('//*[@text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
    })
})