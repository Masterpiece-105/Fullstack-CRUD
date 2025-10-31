import React, { useState } from "react";
// import Topbar from "../../components/Topbar";
import { COLORS } from "../../constants/colors";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"; // add globally once, not here
// import "bootstrap-icons/font/bootstrap-icons.css"; // if using icons globally

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      setSubmitting(true);
      // await signInWithEmailAndPassword(auth, email.trim(), password);
      // navigate("/dashboard", { replace: true });
      // Temporary success feedback:
      alert("Logged in! Wire Firebase here.");
    } catch (err) {
      setError(err?.message || "Failed to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* <Topbar title="Aadhaar Admin" /> */}

      <main className="container flex-grow-1 d-flex align-items-center justify-content-center py-4">
        <div className="w-100" style={{ maxWidth: 420 }}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h4 className="mb-3 text-center" style={{ color: COLORS.aadhaarOrange }}>
                Login
              </h4>

              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="loginEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPwd ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => setShowPwd((s) => !s)}
                    >
                      <i className={`bi ${showPwd ? "bi-eye-slash" : "bi-eye"}`} />
                    </Button>
                  </InputGroup>
                </Form.Group>

                {error && <div className="text-danger small mb-2">{error}</div>}

                <Button
                  type="submit"
                  className="w-100 border-0"
                  style={{ background: COLORS.aadhaarOrange }}
                  disabled={submitting}
                >
                  {submitting ? "Signing in..." : "Login"}
                </Button>
              </Form>

              <div className="d-flex justify-content-between mt-3">
                {/*<a href="#" className="small text-decoration-none">
                  Forgot password?
                </a> */}
                <span className="small text-muted">Admin access only</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </main>
    </div>
  );
}
