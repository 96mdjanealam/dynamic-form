import { useState } from "react";

function App() {
  const initialFormState = {
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    postalCode: "",
    state: "",
    city: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const australiaStates = [
    "New South Wales",
    "Victoria",
    "Queensland",
    "Western Australia",
    "South Australia",
    "Tasmania",
    "Australian Capital Territory",
    "Northern Territory",
  ];

  const submit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowModal(true);
    setFormData(initialFormState);
  };

  return (
    <div className="relative py-10 px-4 sm:px-6 md:px-20 lg:px-32 min-h-screen">
      <h2 className="font-bold text-center text-xl mb-4">Dynamic Form</h2>
      <form
        onSubmit={submit}
        className="bg-base-200 border-base-300 space-y-3 max-w-2xl mx-auto rounded-box border p-4"
      >
        <select
          className="select w-full"
          required
          value={formData.country}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              country: e.target.value,
              state: "",
            }))
          }
        >
          <option value="">Select Country/Region</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Australia">Australia</option>
        </select>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="input w-full"
            placeholder="First name"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <input
            type="text"
            className="input w-full"
            placeholder="Last name"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </div>
        <input
          type="text"
          className="input w-full"
          placeholder="Company (optional)"
          value={formData.company}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, company: e.target.value }))
          }
        />
        <input
          type="text"
          className="input w-full"
          placeholder="Address"
          required
          value={formData.address}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, address: e.target.value }))
          }
        />
        <input
          type="text"
          className="input w-full"
          placeholder="Apartment, suite, etc. (optional)"
          value={formData.apartment}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, apartment: e.target.value }))
          }
        />
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="number"
            className="input w-full"
            placeholder="Postal code"
            required
            value={formData.postalCode}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                postalCode: e.target.value,
              }))
            }
          />
          {formData.country === "Australia" && (
            <select
              className="select w-full"
              required
              value={formData.state}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  state: e.target.value,
                }))
              }
            >
              <option value="">Select State/Territory</option>
              {australiaStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          )}
          <input
            type="text"
            className="input w-full"
            placeholder="City"
            required
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </div>
        <input
          type="number"
          className="input w-full"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
        <button type="submit" className="btn btn-neutral mt-4 w-full md:w-auto">
          Submit
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-lg relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-semibold mb-4">Submitted Information</h3>
            <div className="space-y-2 text-sm">
              {Object.entries(submittedData).map(([key, value]) => (
                <div key={key}>
                  <strong className="capitalize">{key}:</strong>{" "}
                  {value || "N/A"}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
