//  immediately invoked function
const Function = () => {
  let marks = 70;
  return (
    <div>
      <h2> immediately invoked function</h2>
      {(() => {
        if (marks >= 80) {
          return <p>Got A+</p>;
        } else {
          return <p>Not get A+</p>;
        }
      })()}
    </div>
  );
};

export default Function;
