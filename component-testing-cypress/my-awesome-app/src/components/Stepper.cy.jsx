import Stepper from "./Stepper";

describe("<Stepper>", () => {
  it("mounts", () => {
    cy.mount(<Stepper />);
  });

  it("stepper should default to 0", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  it('supports a "count" prop to set the value', () => {
    cy.mount(<Stepper count={100} />);
    cy.get("[data-cy=counter]").should("have.text", "100");
  });

  it("when the increment button is pressed, the counter is incremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });

  it("clicking + fires a change event with the incremented value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Stepper onChange={onChangeSpy} />);
    cy.get("[data-cy=increment]").click();

// As the developer of the Stepper Component, you want to make sure when the end-user clicks the increment and decrement buttons, 
// that the appropriate event is triggered with the proper values in the consuming component.
    cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  });
});
