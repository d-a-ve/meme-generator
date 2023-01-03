import React from "react";

export default function Form() {
  const [name, setName] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    colors: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLTextAreaElement & HTMLInputElement & HTMLSelectElement
    >
  ) {
    const { name, value, type, checked } = e.target;
    setName((prevNameObj) => {
      return { ...prevNameObj, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={name.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={name.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={name.email}
      />
      <textarea
        placeholder="Write your comments"
        onChange={handleChange}
        name="comments"
        value={name.comments}
      />
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>

      <br />
      <br />
      <fieldset>
        <legend>Employment Status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          checked={name.employment === "unemployed"}
          value="unemployed"
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <input
          type="radio"
          id="part-time"
          name="employment"
          checked={name.employment === "part-time"}
          value="part-time"
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <input
          type="radio"
          id="employed"
          name="employment"
          checked={name.employment === "employed"}
          value="employed"
          onChange={handleChange}
        />
        <label htmlFor="employed">Employed</label>
      </fieldset>

      <br />
      <label htmlFor="colors">What is your Favorite Color</label>
      <br />
      <select
        id="colors"
        onChange={handleChange}
        name="colors"
        value={name.colors}
      >
        <option value="">-- Choose a Color --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="violet">Violet</option>
        <option value="indigo">Indigo</option>
      </select>
      <button>Send it in</button>
    </form>
  );
}
