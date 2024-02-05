// SubscriptionOverlay.tsx
const SubscriptionOverlay = () => {
  const handleSubscribeClick = () => {
    // Direct window location change for redirect
    window.location.href = "/subscription";
  };

  return (
    // Use absolute instead of fixed, and z-index to ensure it overlays the widget
    <div className="absolute inset-0 flex justify-center backdrop-blur items-center z-10 shadow-md rounded-xl p-6 w-auto h-auto">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center opacity-95">
        <h2 className="text-lg font-semibold mb-4">
          Gain access to the Radio by subscribing
        </h2>
        <button
          className="bg-red-500 text-white rounded-xl py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out"
          onClick={handleSubscribeClick}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionOverlay;
