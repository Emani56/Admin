import { useMemo, ReactElement, useEffect, useState } from "react";
import { useTheme as useCustomTheme } from "../ThemeContext"; // Import useTheme from ThemeContext
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

interface CustomerRowModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  "billing-address": string;
  "total-spent": number;
}

const CustomerTable = ({
  searchText,
}: {
  searchText: string;
}): ReactElement => {
  const { isDarkMode } = useCustomTheme(); // Custom theme context
  const [rows, setRows] = useState<CustomerRowModel[]>([
    {
      id: 1,
      name: "Emanuel Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      "billing-address": "123 Main St, City, Country",
      "total-spent": 100.5,
    },
    {
      id: 2,
      name: "William rock",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      "billing-address": "456 Elm St, City, Country",
      "total-spent": 200.75,
    },
  ]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAll, setShowAll] = useState<boolean>(false); // State to control showing all rows
  // Example: Delete a customer
  const handleDelete = async (id: number) => {
    console.log("emanuel",id)
    try {
      const response = await fetch(`https://api.example.com/customers/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete customer");
      setRows(rows.filter((row) => row.id !== id)); // Update state
    } catch (err) {
      console.error("Error deleting customer:", err);
    }
  };

  // Example: Update a customer
  const handleUpdate = async (id: number) => {
    console.log("naol",id)
    try {
      const response = await fetch(`https://api.example.com/customers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Failed to update customer: ${response.statusText}`);
      }

      const updatedRow = await response.json();

      setRows((prevRows) =>
        prevRows.map((row) => (row.id === id ? updatedRow : row))
      ); // ✅ Use functional state update to avoid stale state issues
    } catch (err) {
      console.error("Error updating customer:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/customers"); // Replace with your backend API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRows(data); // Assuming the API returns an array of customer data
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Filter rows based on search text
  const filteredRows = useMemo(() => {
    if (!searchText) return rows;
    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [rows, searchText]);

  // Limit rows to 10 initially
  const displayedRows = showAll ? filteredRows : filteredRows.slice(0, 10);

  return (
    <div
      className="table-responsive"
      data-theme={isDarkMode ? "dark" : "light"}
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <table
        className="table"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "var(--header-bg-color)" }}>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              ID
            </th>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              Name
            </th>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              Email
            </th>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              Phone
            </th>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              Billing Address
            </th>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              Total Spent
            </th>
            <th
              scope="col"
              style={{
                backgroundColor: "var(--header-bg-color)",
                color: "var(--text-color)",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7} className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </td>
            </tr>
          ) : filteredRows.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center">
                No results found.
              </td>
            </tr>
          ) : (
            displayedRows.map((row) => (
              <tr
                key={row.id}
                style={{
                  backgroundColor: "var(--header-bg-color)",
                  color: "var(--text-color)",
                }}
              >
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  {row.id}
                </td>
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  {row.name}
                </td>
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  {row.email}
                </td>
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  {row.phone}
                </td>
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  {row["billing-address"]}
                </td>
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  {currencyFormat(row["total-spent"], {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td
                  style={{
                    backgroundColor: "var(--header-bg-color)",
                    color: "var(--text-color)",
                  }}
                >
                  <div
                    className="d-flex flex-md-row flex-column gap-2" // Flexbox for layout
                    style={{
                      width: "100%", // Ensure full width
                    }}
                  >
                    <button
                      className="btn btn-sm btn-primary flex-grow-1" // Flex-grow to make buttons equal width
                      style={{
                        backgroundColor: "var(--btn-bg-color)",
                        color: "var(--btn-text-color)",
                        height: "38px", // Fixed height for consistency
                      }}
                      onClick={() => handleUpdate(row.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger flex-grow-1" // Flex-grow to make buttons equal width
                      style={{
                        backgroundColor: "var(--btn-bg-color)",
                        color: "var(--btn-text-color)",
                        height: "38px", // Fixed height for consistency
                      }}
                      onClick={() => handleDelete(row.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* "See All Data" Button */}
      {rows.length > 10 && !showAll && (
        <button
          // Use Bootstrap classes for styling
          style={{
            backgroundColor: "var(--btn-bg-color)",
            color: "var(--btn-text-color)", // Dynamic text color
            border: "none", // Remove default border
            borderRadius: "8px", // Rounded corners
            fontSize: "1rem", // Adjust font size
            fontWeight: "500", // Medium font weight
            transition: "all 0.3s ease", // Smooth hover effect
          }}
          onClick={() => setShowAll(true)}
        >
          See All Data
        </button>
      )}
    </div>
  );
};

// If the currencyFormat function is not defined in another module, define it here
const currencyFormat = (value: number, options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  }).format(value);
};

export default CustomerTable;
