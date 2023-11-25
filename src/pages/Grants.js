import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function Grants() {
  return (
    <div className="bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-blue-500">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Canadian Hiring Grant Sources and Information
        </h1>
        <p className="mt-6 text-xl leading-8">
          Welcome to our grant information section! Here we will assist with:
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Salary Grants for Graduates
                </strong>{" "}
                Under the age of 30? Recent graduate? We have you sorted!
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Salary Grants for Students
                </strong>{" "}
                Current student looking for a way to fund an internship or
                co-op? Let us help!
              </span>
            </li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Recent Graduate Grants
          </h2>
          <p className="mt-6">
            There are a variety of incentives available to employers for hiring
            recent graduates. The primary grant that is used for graduates is
            the digital skills for youth grant. The value of the grant is
            $25,500 and anyone under the age of 30 with an undergraduate degree
            qualifies so long as the position they are occupying involves
            "digital skills" in any capacity. The definition of digital skills
            is intentionally vague and can vary from a software developer to a
            marketer or communications specialisty. The employer applies on
            behalf of the applicant, once the grant is awarded the employer pays
            the graduate and is recompensated at the end of the contract term.
            What is unique about the digital skills for youth grant is that it
            is 100% recompensation, whereas most salary grant incentives are
            only partial recompensation.
          </p>
          <p>
            {" "}
            To find out more click
            <a
              href="https://ised-isde.canada.ca/site/digital-skills-youth-program/en/frequently-asked-questions-digital-skills-youth"
              target="_blank"
              className="text-blue-500"
            >
              &nbsp;here!
            </a>
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “The opportunities should help prepare youth to adapt to the
                major changes expected in tomorrow’s workplace, including in
                emerging areas where the jobs may not yet exist, such as those
                related to cybersecurity, the automation of knowledge tasks, big
                data and artificial intelligence, among others.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">DS4Y</strong> –
                Home page
              </div>
            </figcaption>
          </figure>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={require("../assets/ds4y.jpg")}
            alt=""
          />
        </figure>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Current Student Grants
          </h2>
          <p>
            The student work placement program is the primary arm of the
            government for funding student led projects and co-op positions.
            There are a wide list of distributors for the grant based on the
            industry the student is in but they are all essentially the same in
            terms of qualifying rules and amounts awarded. The coverage has been
            subject to change year to year but currently the program awards
            employers 70% coverage for a visible minority or underrepresented
            group (this includes first time co-ops) and 50% for non visible
            minorities on $10,000. To find out more click{" "}
            <a
              target="_blank"
              href="https://www.canada.ca/en/employment-social-development/services/student-work-placements-wage-subsidies.html"
              className="text-blue-500"
            >
              here!
            </a>
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Work placements are a win-win for employers and students.
                Through the Student Work Placement program, employers can apply
                for wage subsidies to help them hire post-secondary students
                across Canada.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">SWPP</strong> –
                Home page
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Some of the SWPP distributors
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a
              href="https://technationcanada.ca/en/future-workforce-development/career-ready-program/"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/technation.jpg")}
                width={158}
                height={48}
              />
            </a>

            <a
              href="https://eco.ca/environmental-students/student-work-placement-program/"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/eco_canada.jpg")}
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.biotalent.ca/programs/student-work-placement-program/"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/biotalent.jpg")}
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://ehrc.ca/programs/empowering-futures/"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/ehrc.jpg")}
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://mihr.ca/career-development/gearing-up/"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={require("../assets/mining.jpg")}
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
