import { Container, Card, Button } from "react-bootstrap";
function Hero() {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is a boilerplate for MERN Authentication that stores a JWT in
            an HTTP-Only Cookie. It also uses Redux Toolkit and the React
            Bootstrap Library.
          </p>
          <div className="d-flex justify-content-center">
            <Button variant="primary" href="/login" className="me-3">
              Sign In
            </Button>
            <Button variant="secondary" href="/register" className="me-3">
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Hero;