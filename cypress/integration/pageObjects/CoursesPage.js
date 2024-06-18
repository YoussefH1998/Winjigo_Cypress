class CoursesPage {
  goToAddNewCoursePage() {
    cy.get("#btnListAddCourse").click();
  }
}
export default CoursesPage;
