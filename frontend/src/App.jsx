import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const API = "https://employee-system-bvtb.onrender.com";

function Main() {
  const { token } = useAuth();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f4f7fb, #eef2ff)",
        padding: "20px",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 30px auto",
          background: "#ffffff",
          padding: "18px 25px",
          borderRadius: "14px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              color: "#4f46e5",
              fontSize: "2rem",
              marginBottom: "4px",
            }}
          >
            EmployeeAI
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Smart Employee Performance System
          </p>
        </div>

        <div
          style={{
            background: "#eef2ff",
            color: "#4f46e5",
            padding: "8px 14px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          AI Dashboard
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {token ? <Dashboard API={API} /> : <Login API={API} />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
