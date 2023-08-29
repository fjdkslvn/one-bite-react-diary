import React from "react";

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  return (
    <Container>
      <MyHeader />
      <Counter initialValue={5} />
    </Container>
  );
}

export default App;
