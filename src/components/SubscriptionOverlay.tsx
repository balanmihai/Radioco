// SubscriptionOverlay.tsx
const SubscriptionOverlay = () => {
  return (
    // Use absolute instead of fixed, and z-index to ensure it overlays the widget
    <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center opacity-95">
        <h2 className="text-2xl font-bold mb-4">
          Gain access to the Radio by subscribing
        </h2>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out"
          // onClick={handleSubscribeClick}
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default SubscriptionOverlay;
