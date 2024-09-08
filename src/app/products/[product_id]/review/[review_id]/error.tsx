"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => {};
}) {
  return (
    // some error go away by just refreshing to reset it for this.
    <div>
      {error.message}Error in review.
      <button onClick={reset}>Retry</button>
    </div>
  );
}
