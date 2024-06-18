class NewCoursePage {
  setCourseName(x) {
    cy.get("#txtCourseName").type(x);
  }

  setCourseSubject(x) {
    cy.get("#courseSubject").select(x);
  }
  getSelectedCourseSubject() {
    return cy.get("#courseSubject").find("option:selected");
  }
  setGrade(x) {
    cy.get("#courseGrade").select(x);
  }

  getSelectedGrade() {
    return cy.get("#courseGrade").find("option:selected");
  }

  selectTeacher(x) {
    cy.get("#teacherOnBehalf").click();

    cy.get("#lnkteacherFullName").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("rehan")) {
        cy.wrap($el).click();
      }
    });
  }
  submitCourse() {
    cy.get("#btnSaveAsDraftCourse").click();
  }
}
export default NewCoursePage;
