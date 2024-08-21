"use client";
import { useState } from "react";

export default function BookingComponent() {
  const [formInput, setFormInput] = useState({
    fullName: ''
  });

  const [hasErrors, setHasErrors] = useState(false);

  const handleChangeEvent = (e) => {
    
// need to add error handling if field left blank!!
// need new state for error, setError

      const { name, value } = e.target;
      setFormInput(prevData => ({
        ...prevData,
          [name]: value
      }))
    // Destructure the name and value from the event target (input field).
    // Update the formInput state by spreading the previous state and setting the new value for the input field that triggered the event.
    // The property name in the state is dynamically determined by the input field's name attribute.
  }
    const handleSubmit = (e) => {
      e.preventDefault(); //prevent reload
      
    // Check for any validation errors
    if (Object.values(formInput).some(field => field === '')) {
      setHasErrors(true);
      console.log('Form has errors, cannot submit.');
      return;
    }

    setHasErrors(false);
    console.log('Form submitted:', formInput);
    // Here you would typically send the data to an API
    }
  
  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <h1>Design Booking</h1>
          <fieldset>
            <legend>Personal Information:</legend>
            <div>
              <div>
                <label>
                  Full name:
                  <input
                    type="text"
                    name="fullName"
                    value={formInput.fullName}
                    onChange={(event) => {
                      handleChangeEvent(event);
                    }}
                  ></input>
                </label>
              </div>
              <div>
                //next field
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend> Contact Information:</legend>
            <div>

            </div>
          </fieldset>
          {hasErrors && <p style={{ color: 'red' }}>Please fill in all fields.</p>}
          <button type="submit">Request Design Consultation</button>
        </form>
      </article>
    </section>
  );
}
