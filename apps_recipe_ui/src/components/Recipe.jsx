export default function Recipe() {
  const steps = [
    {
      description: "Chop all vegetables finely.",
      image: "https://example.com/images/step1.jpg",
    },
    {
      description: "Heat oil in a pan and add the vegetables.",
      image: "https://example.com/images/step2.jpg",
    },
    {
      description: "Cook for 10 minutes and add spices.",
      image: "https://example.com/images/step3.jpg",
    },
    {
      description: "Serve hot with rice or bread.",
      image: "",
    },
  ];
  return (
    <>
      <div className="px-4 py-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
            >
              {step.image && (
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Step {index + 1}
                </h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium text-sm rounded-lg transition focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700"
          >
            Add into Cart
          </button>
        </div>
      </div>
    </>
  );
}
