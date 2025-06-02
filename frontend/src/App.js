import { useContext, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";

import { Navbar, Table, Loading, FilterByFilename } from "./components";
import { Context } from "./context";

function App() {
  const { data, loading, error, getData } = useContext(Context);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      <Container
        style={{
          marginTop: "1rem",
        }}
      >
        {error && (
          <Alert variant="danger">
            <Alert.Heading>
              {error.errorType} ({error.status})
            </Alert.Heading>
            <p>{error.msg}</p>
          </Alert>
        )}
        <FilterByFilename />
        {data && <Table data={data} />}
      </Container>
    </>
  );
}

export default App;
