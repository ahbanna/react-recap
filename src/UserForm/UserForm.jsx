const UserForm = () => {
  const formData = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };
  return (
    <div>
      <h2>This is Managing Form Submit</h2>
      <form onSubmit={formData}>
        <input type="text" name="" id="" placeholder="Your Name" />
        <input type="email" name="" id="" placeholder="Your Email" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
