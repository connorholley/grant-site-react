const stats = [
  { label: "Date Started", value: "2021" },
  { label: "Grants Recieved", value: "5" },
  { label: "Funds Raised", value: "$55,500" },
];

export default function About() {
  return (
    <div className="bg-white  sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <img
              className="rounded-md py-12 md:py-0 lg:py-0"
              src={require("../assets/connor.jpg")}
            />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower students
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  My name is Connor Holley, I previously graduated with a
                  biochemistry and business degree before going back to school
                  to pursue a compressed computer science degree. I worked as a
                  grant administrator briefly during covid and leveraged this
                  knowledge to fund my return to school and career switch. I
                  hope that these resources can help you in your own job
                  application process!
                </p>
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4 py-10 ">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
