import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function TemplateEmails() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-12 sm:py-12">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Email Template
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Emails play a crucial role in job applications as they serve as the
            initial point of contact between a candidate and a potential
            employer. The importance of a well-crafted email lies in its ability
            to create a positive first impression, showcasing professionalism
            and attention to detail. Below is an email template to get you
            started on your job application journey!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “A bad email reputation is like a hangover: hard to get rid of
                  and it makes everything else hurt.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src={require("../assets/chris_marriot.jpeg")}
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />

                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">
                    Chris Marriott
                  </div>
                  <div className="text-gray-600">
                    President of Email Connect
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              <head>
                <title>Application for [Job Title] - [Your Name]</title>
              </head>
              <body>
                <p>Dear [Hiring Manager's Name],</p>

                <p className="pt-4">
                  I hope this email finds you well. I am writing to express my
                  strong interest in the [Job Title] position at [Company Name],
                  as advertised on [Job Board/Company Website/Reference]. With
                  my [relevant number of years] years of experience in [relevant
                  field], a track record of [mention specific achievements or
                  skills], and a passion for [mention a relevant aspect of the
                  company's mission or work], I am excited about the opportunity
                  to contribute to your team.
                </p>

                <p className="pt-4">
                  Here's a brief overview of my qualifications:
                </p>
                <ul>
                  <li>
                    [Highlight your key skills and qualifications relevant to
                    the job]
                  </li>
                  <li>
                    [Mention any specific achievements or projects that
                    demonstrate your capabilities]
                  </li>
                  <li>[Include any relevant education or certifications]</li>
                </ul>

                <p className="pt-4">
                  What sets me apart is my commitment to [mention a unique
                  quality, e.g., continuous learning, problem-solving, teamwork,
                  etc.], which I believe aligns well with [Company Name]'s
                  values and vision. I am impressed by [Company Name]'s
                  reputation for [mention something positive about the company,
                  e.g., innovation, commitment to quality, impact on the
                  industry], and I am eager to contribute to your continued
                  success.
                </p>

                <p className="pt-4">
                  I have attached my resume, which provides more detail on my
                  professional background. I would appreciate the opportunity to
                  discuss how my skills and experiences align with the needs of
                  your team. I am available for a conversation at your earliest
                  convenience. Please feel free to contact me at [your phone
                  number] or via email at [your email address].
                </p>

                <p className="pt-4">
                  Thank you for considering my application. I look forward to
                  the possibility of joining [Company Name] and contributing to
                  your team's success.
                </p>

                <p className="pt-4">Sincerely,</p>
                <p>[Your Full Name]</p>
                <p>[Your Phone Number]</p>
                <p>[Your Email Address]</p>
              </body>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
