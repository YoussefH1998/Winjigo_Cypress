class HomePage {
  goToCoursesPage() {
    cy.get("#btnMyCoursesList").click();
  }
}
export default HomePage;
