//renders a p that should accept a property of “name” and display text “My name is name”.

const FirstComponent = (prop) => {
  return (
    <p>
      ({"My name is "} {prop})
    </p>
  );
};
