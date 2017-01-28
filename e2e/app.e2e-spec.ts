import { PatientDataPage } from './app.po';

describe('patient-data App', function() {
  let page: PatientDataPage;

  beforeEach(() => {
    page = new PatientDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
