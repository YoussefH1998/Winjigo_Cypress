class ViewedCoursePage {
  closePopup() {
    cy.get("#btnDialogCancel").click();
  }
  getCourseName() {
    return cy.get("#courseNameView");
  }
}
export default ViewedCoursePage;
