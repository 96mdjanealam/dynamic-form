# Dynamic Form

A responsive and dynamic React-based form with conditional rendering for state/territory fields, integrated modal for data preview, and styled using Tailwind CSS and DaisyUI.


## 🚀 Introduction

This project is a dynamic, responsive form built with React and Vite. It conditionally renders fields based on selected country (e.g., showing Australian states when "Australia" is selected) and displays the submitted data in a modal for quick review.

## ✨ Features

- 🌍 Country/Region selection with dynamic state/territory fields
- 🧾 Input validation and conditional rendering
- 💾 Form submission with data reset
- 📦 Modal dialog for submitted data
- 🎨 Styled using Tailwind CSS and DaisyUI
- ⚡ Built with React 19 and Vite for fast performance

## 🔧 Installation

```bash
git clone https://github.com/96mdjanealam/dynamic-form.git
cd dynamic-form
npm install
````

## ▶️ Usage

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## ⚙️ Configuration

No additional configuration is required. The form behavior is hardcoded for two countries:

* **Netherlands** (no dynamic state field)
* **Australia** (shows a list of states/territories)

To add more countries or dynamic fields, you can update the logic in the `App` component.

## 📦 Dependencies

### Runtime

* `react` ^19.1.0
* `react-dom` ^19.1.0
* `tailwindcss` ^4.1.8
* `daisyui` ^5.0.42
* `@tailwindcss/vite` ^4.1.8

### Development

* `vite` ^6.3.5
* `eslint` ^9.25.0
* `@vitejs/plugin-react` ^4.4.1
* TypeScript types for React

## 🛠 Development

The form is implemented in a single `App.jsx` file using React Hooks:

* `useState` for form management
* `setShowModal` for modal toggling
* `setSubmittedData` for holding submitted form values

Tailwind classes and DaisyUI components are used for responsive layout and consistent UI.

## 💡 Examples

Upon selecting **Australia**, a dropdown for state/territory appears:

```jsx
{formData.country === "Australia" && (
  <select>
    <option value="">Select State/Territory</option>
    ...
  </select>
)}
```

On submission, a modal appears showing:

```text
firstName: John
lastName: Doe
country: Australia
...
```

## 🧩 Troubleshooting

* **Form doesn't submit**: Ensure all required fields are filled.
* **Modal doesn't show**: Check `setShowModal(true)` is triggered and Tailwind classes are applied.
* **Tailwind/DaisyUI styles not applying**: Make sure `tailwind.config.js` is properly set up.