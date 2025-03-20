import { useState, ChangeEvent, useCallback, ReactElement } from "react";
import { useTheme as useCustomTheme } from "../ThemeContext"; // Import useTheme from ThemeContext
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import CustomerTable from "./CustomersTable";
const Customers = (): ReactElement => {
  const [search, setSearch] = useState<string>("");
  const { isDarkMode } = useCustomTheme(); // Custom theme context

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  }, []);

  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      className={`p-3 p-sm-4 p-md-4 h-100`}
      style={{
        borderRadius: "8px",
        transition: "background 0.3s, color 0.3s",
        backgroundColor: "var(--header-bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Header Section */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-5 flex-wrap gap-3">
        <h1
          className="h4 mb-0"
          style={{
            fontWeight: 600,
            backgroundColor: "var(--header-bg-color)",
            color: "var(--text-color)",
          }}
        >
          Customers
        </h1>

        {/* Search Bar */}
        <div className="w-100 w-sm-auto" style={{ maxWidth: "400px" }}>
          <div
            className="input-group"
            style={{
              borderRadius: "25px",
              overflow: "hidden",
              border: "1px solid gray",
              transition: "box-shadow 0.3s",
              backgroundColor: "var(--header-bg-color)",
              color: "var(--text-color)",
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={search}
              onChange={handleChange}
              style={{
                padding: "10px 20px", // Custom padding
                fontSize: "0.875rem", // Custom font size
                border: "none", // Remove default border
                flex: 1, // Ensure input takes available space
                transition: "background 0.3s, color 0.3s",
                backgroundColor: "var(--input-bg-color)",
                color: "var(--input-text-color)",
              }}
            />
            <div
              className="btn"
              style={{
                padding: "10px 20px", // Match input padding
                border: "none", // Remove default border
                cursor: "pointer", // Add pointer cursor for better UX
                transition: "background 0.3s, color 0.3s",
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{
                  color: "var(--text-color)",
                  transition: "color 0.3s",
                }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Table Section */}
      <div className="w-100" style={{ minHeight: "325px" }}>
        <CustomerTable searchText={search} />
      </div>
    </div>
  );
};

export default Customers;
