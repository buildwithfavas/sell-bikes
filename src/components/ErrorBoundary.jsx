import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function FallBackUI({ error, resetErrorBoundary }) {
  return (
    <div className="text-center mt-10">
      <h2 className="text-red-600 font-bold text-xl">
        Something went wrong 😢
      </h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={FallBackUI}>
      {children}
    </ReactErrorBoundary>
  );
}
