export function KeyMetricsSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-5xl font-extrabold text-gray-900">70%</p>
            <p className="mt-2 text-lg font-medium text-gray-600">Family Control</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-5xl font-extrabold text-gray-900">R0</p>
            <p className="mt-2 text-lg font-medium text-gray-600">Cash Required</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-5xl font-extrabold text-green-600">+229%</p>
            <p className="mt-2 text-lg font-medium text-gray-600">Revenue Growth (Eben & Hein)</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-5xl font-extrabold text-brand">R1.8M</p>
            <p className="mt-2 text-lg font-medium text-gray-600">Year 5 Target</p>
          </div>
        </div>
      </div>
    </section>
  );
}
