import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function CoverLetter() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-12 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-12 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cover letter tips
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              A cover letter plays a pivotal role in the hiring process as it
              provides a unique opportunity for job seekers to go beyond their
              resume and engage with prospective employers on a more personal
              level. It serves as a tailored introduction, offering insights
              into an applicant's personality, motivations, and qualifications.
              A well-crafted cover letter not only highlights a candidate's
              relevant skills and experiences but also showcases their genuine
              interest in the company and the position. It demonstrates an
              individual's ability to communicate effectively, their attention
              to detail, and their commitment to the role. Moreover, it enables
              employers to assess a candidate's cultural fit, communication
              skills, and enthusiasm, making it an invaluable tool for both job
              seekers and hiring managers in making informed hiring decisions.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <ol role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  Customize Each Letter: Tailor your cover letter to the
                  specific job you're applying for. Mention the job title and
                  company name, and explain why you're a great fit for that
                  role.
                </li>

                <li className="flex gap-x-3">
                  Address it to a Specific Person: Whenever possible, address
                  the letter to the hiring manager or recruiter by name. This
                  personal touch can make a positive impression.
                </li>

                <li className="flex gap-x-3">
                  Opening Paragraph: Start with a strong opening that grabs the
                  reader's attention. Mention how you heard about the job or
                  company and briefly state your enthusiasm for the role.
                </li>

                <li className="flex gap-x-3">
                  Highlight Your Qualifications: In the body of the letter,
                  explain how your skills and experiences match the job
                  requirements. Use specific examples to showcase your abilities
                  and achievements.
                </li>

                <li className="flex gap-x-3">
                  Show Your Knowledge: Demonstrate your understanding of the
                  company and its values. Explain why you want to work there and
                  how your values align with the company's mission.
                </li>

                <li className="flex gap-x-3">
                  Demonstrate Your Enthusiasm: Convey your genuine interest in
                  the position and the company. Show that you're not just
                  applying for any job but that you genuinely want this job.
                </li>

                <li className="flex gap-x-3">
                  Use Keywords: Incorporate keywords from the job posting into
                  your cover letter to show that you are a good match for the
                  position.
                </li>

                <li className="flex gap-x-3">
                  Keep it Concise: A cover letter should be brief but
                  informative. Aim for three to four paragraphs, and avoid
                  unnecessary details or overly lengthy explanations.
                </li>

                <li className="flex gap-x-3">
                  Professional Tone: Maintain a professional and formal tone
                  throughout the letter. Avoid slang or overly casual language.
                </li>

                <li className="flex gap-x-3">
                  Highlight Soft Skills: In addition to technical
                  qualifications, emphasize soft skills like teamwork,
                  communication, problem-solving, and adaptability.
                </li>

                <li className="flex gap-x-3">
                  Prove Your Value: Don't just list your qualifications; explain
                  how they can benefit the company. Describe the positive impact
                  you can make if hired.
                </li>

                <li className="flex gap-x-3">
                  Be Positive: Maintain a positive tone throughout the letter.
                  Focus on what you can offer rather than what you lack.
                </li>

                <li className="flex gap-x-3">
                  Edit and Proofread: Carefully proofread your cover letter for
                  grammar and spelling errors. Consider asking someone else to
                  review it for you.
                </li>

                <li className="flex gap-x-3">
                  Avoid Repetition: Your cover letter should complement your
                  resume, not duplicate it. Use the letter to tell a story and
                  provide context for your qualifications.
                </li>

                <li className="flex gap-x-3">
                  Follow a Structure: Use a clear structure for your cover
                  letter, with an introduction, body, and conclusion. This helps
                  the reader follow your points easily.
                </li>

                <li className="flex gap-x-3">
                  Call to Action: End your cover letter with a clear call to
                  action. Express your interest in further discussing your
                  qualifications in an interview.
                </li>

                <li className="flex gap-x-3">
                  Formatting: Use a clean and professional format. Stick to a
                  standard font and maintain consistent formatting throughout
                  the letter.
                </li>

                <li className="flex gap-x-3">
                  Keep It Honest: Always be truthful in your cover letter.
                  Exaggerating or providing false information can have negative
                  consequences.
                </li>

                <li className="flex gap-x-3">
                  Use Action Verbs: Start sentences with strong action verbs to
                  convey a sense of energy and accomplishment.
                </li>

                <li className="flex gap-x-3">
                  Thank the Reader: Express gratitude for considering your
                  application, and let them know you look forward to the
                  opportunity to discuss your qualifications in an interview.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
