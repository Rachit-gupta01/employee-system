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
        background:
          "linear-gradient(135deg, #dbeafe 0%, #eef2ff 40%, #f8fafc 100%)",
        padding: "20px",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 30px auto",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          padding: "18px 25px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #e2e8f0",
        }}
      >
        <div>
          <h1
            style={{
              color: "#4f46e5",
              fontSize: "2rem",
              marginBottom: "4px",
              fontWeight: "bold",
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
            padding: "9px 15px",
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
