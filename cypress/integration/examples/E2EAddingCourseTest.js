/// <reference types="Cypress" />
import LoginPage from "../pageObjects/LoginPage";
import HomePage from "../pageObjects/HomePage";
import CoursesPage from "../pageObjects/CoursesPage";
import NewCoursePage from "../pageObjects/NewCoursePage";
import ViewedCoursePage from "../pageObjects/ViewedCoursePage";

describe("Testing Adding Course Feature", () => {
  let data;

  before(function () {
    cy.fixture("example").then(function (fdata) {
      data = fdata;
    });
  });
  it("Adding a Course Test Case", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const coursesPage = new CoursesPage();
    const newcoursePage = new NewCoursePage();
    const viewedcoursePage = new ViewedCoursePage();

    cy.visit(Cypress.env("url"));
    loginPage.setEmail("testregister@aaa.com");
    loginPage.setPassword("Wakram_123");
    loginPage.signIn();
    homePage.goToCoursesPage();
    coursesPage.goToAddNewCoursePage();
    newcoursePage.setCourseName(data.courseName);
    newcoursePage.setCourseSubject(data.courseSubject);
    newcoursePage
      .getSelectedCourseSubject()
      .should("have.text", data.courseSubject);
    newcoursePage.setGrade(data.grade);

    newcoursePage.getSelectedGrade().should("have.text", data.grade);
    newcoursePage.selectTeacher("rehan");
    newcoursePage.submitCourse();

    viewedcoursePage.closePopup();
    viewedcoursePage.getCourseName().should("have.text", data.courseName);
  });
});
