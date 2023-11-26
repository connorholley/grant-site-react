import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Interview() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-12 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600"></p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Interview tips
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Job interviews are an extremely important part in acquiring
                employment. They allow a space for mutual evaluation between
                interviewer and applicant. Interpersonal skills, decision
                making, and company culture are often scrutinized during the
                process. Below are a series of tips that may help streamline
                this process.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img className="" src={require("../assets/interview.jpg")} alt="" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ol role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  Research the Company: Prior to the interview, thoroughly
                  research the company. Understand their mission, values,
                  products, services, and recent news. This knowledge will
                  demonstrate your genuine interest.
                </li>

                <li className="flex gap-x-3">
                  Know Your Resume: Be prepared to discuss your resume in
                  detail. Highlight your accomplishments and experiences, and be
                  ready to provide examples that demonstrate your skills.
                </li>

                <li className="flex gap-x-3">
                  Practice Common Questions: Prepare answers to common interview
                  questions such as "Tell me about yourself," "What is your
                  greatest strength/weakness?" and "Why do you want to work
                  here?" Practice your responses to ensure clarity and
                  confidence.
                </li>

                <li className="flex gap-x-3">
                  Tell Stories: Use the STAR method (Situation, Task, Action,
                  Result) to provide specific examples from your experiences.
                  These stories help illustrate your skills and abilities.
                </li>

                <li className="flex gap-x-3">
                  Ask Questions: Prepare thoughtful questions to ask the
                  interviewer. This shows your interest and engagement.
                  Questions about the company culture, team, and expectations
                  are usually well-received.
                </li>

                <li className="flex gap-x-3">
                  Dress Appropriately: Dress in professional attire that is
                  appropriate for the industry and company culture. It's better
                  to be slightly overdressed than underdressed.
                </li>

                <li className="flex gap-x-3">
                  Arrive Early: Aim to arrive 10-15 minutes early. Punctuality
                  demonstrates your commitment and respect for the interviewer's
                  time.
                </li>

                <li className="flex gap-x-3">
                  Body Language: Maintain good posture, make eye contact, and
                  offer a firm handshake. Your body language should convey
                  confidence and professionalism.
                </li>

                <li className="flex gap-x-3">
                  Stay Positive: Focus on your strengths and accomplishments.
                  Avoid speaking negatively about previous employers or
                  colleagues.
                </li>

                <li className="flex gap-x-3">
                  Be Concise: Answer questions directly and avoid long, rambling
                  responses. Be concise and to the point while providing
                  relevant information.
                </li>

                <li className="flex gap-x-3">
                  Listen Actively: Pay attention to the interviewer. Make sure
                  you understand the question before responding. Active
                  listening helps you provide relevant answers.
                </li>

                <li className="flex gap-x-3">
                  Adaptability: Be ready for unexpected questions or changes in
                  the interview format. Adaptability and thinking on your feet
                  can make a positive impression.
                </li>

                <li className="flex gap-x-3">
                  Address Weaknesses: If asked about weaknesses, frame them
                  positively and discuss your efforts to improve. Show
                  self-awareness and a commitment to growth.
                </li>

                <li className="flex gap-x-3">
                  Follow-Up: Send a thank-you email within 24 hours of the
                  interview. Express gratitude for the opportunity and reiterate
                  your interest in the position.
                </li>

                <li className="flex gap-x-3">
                  Confidence, Not Arrogance: Confidence is important, but avoid
                  appearing arrogant. Humility and a willingness to learn are
                  often seen as positive traits.
                </li>

                <li className="flex gap-x-3">
                  Emphasize Your Fit: Demonstrate how your skills and experience
                  align with the job and the company's culture. Show why you're
                  the perfect fit for the role.
                </li>

                <li className="flex gap-x-3">
                  Prepare for Behavioral Interviews: Some interviews focus on
                  behavioral questions that assess past actions. Review the job
                  description and consider how your experiences match the
                  required competencies.
                </li>

                <li className="flex gap-x-3">
                  Manage Stress: Practice relaxation techniques to manage
                  pre-interview nerves. Deep breathing, meditation, or a brief
                  walk can help calm your nerves.
                </li>

                <li className="flex gap-x-3">
                  Role Play: If possible, conduct mock interviews with a friend
                  or career coach to practice your responses and get
                  constructive feedback.
                </li>

                <li className="flex gap-x-3">
                  Learn from Rejections: If you don't get the job, seek feedback
                  to understand what you could improve. Each interview is a
                  learning opportunity.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
