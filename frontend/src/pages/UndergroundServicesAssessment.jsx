import React from 'react';
import logoImage from '../img/logo.png';
import { coverImage } from '../img/question3';

const evaluationStatementsPage1 = [
  { id: 1, text: "I developed the skills expected from this training." },
  { id: 2, text: "I identified ways to build on my current knowledge and skills." },
  { id: 3, text: "The training focused on relevant skills." },
  { id: 4, text: "I developed the knowledge expected from this training." },
  { id: 5, text: "The training prepared me well for work." },
  { id: 6, text: "I set high standards for myself in this training." },
  { id: 7, text: "The training had a good mix of theory and practice." },
  { id: 8, text: "I looked for my own resources to help me learn." },
  { id: 9, text: "Overall, I am satisfied with the training." },
  { id: 10, text: "I would recommend the training organisation to others." },
  { id: 11, text: "Training organisation staff respected my background and needs." },
  { id: 12, text: "I pushed myself to understand things I found confusing." },
  { id: 13, text: "Trainers had an excellent knowledge of the subject content." },
  { id: 14, text: "I received useful feedback on my assessments." },
  { id: 15, text: "The way I was assessed was a fair test of my skills and knowledge." },
  { id: 16, text: "I learned to work with people." },
  { id: 17, text: "The training was at the right level of difficulty for me." },
  { id: 18, text: "The amount of work I had to do was reasonable." },
  { id: 19, text: "Assessments were based on realistic activities." }
];

const evaluationStatementsPage2 = [
  { id: 20, text: "It was always easy to know the standards expected." },
  { id: 21, text: "Training facilities and materials were in good condition." },
  { id: 22, text: "I usually had a clear idea of what was expected of me." },
  { id: 23, text: "Trainers explained things clearly." },
  { id: 24, text: "The training organisation had a range of services to support learners." },
  { id: 25, text: "I learned to plan and manage my work." },
  { id: 26, text: "The training used up-to-date equipment, facilities and materials." },
  { id: 27, text: "I approached trainers if I needed help." },
  { id: 28, text: "Trainers made the subject as interesting as possible." },
  { id: 29, text: "I would recommend the training to others." },
  { id: 30, text: "The training organisation gave appropriate recognition of existing knowledge and skills." },
  { id: 31, text: "Training resources were available when I needed them." },
  { id: 32, text: "I was given enough material to keep up my interest." },
  { id: 33, text: "The training was flexible enough to meet my needs." },
  { id: 34, text: "Trainers encouraged learners to ask questions." },
  { id: 35, text: "Trainers made it clear right from the start what they expected from me." },
  { id: 36, text: "The RTO supported my efforts to learn and complete this qualification.", shaded: true },
  { id: 37, text: "The RTO's pre enrolment information was clear and easy to understand.", shaded: true },
  { id: 38, text: "The enrolment process was quick and easy to complete.", shaded: true },
  { id: 39, text: "The RTO accommodated my special needs.", shaded: true },
  { id: 40, text: "The RTO was receptive to all my enquires.", shaded: true }
];

export default function UndergroundServicesAssessment() {
  return (
    <div className="flex flex-col bg-gray-100 font-sans text-black">
      {/* ======================= PAGE 1 (Cover Page) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Logo */}
            <div className="w-full flex justify-center mb-10">
              <img
                src={logoImage}
                alt="STA Safety Training Academy Logo"
                className="w-[300px] sm:w-[400px] h-auto object-contain"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wide text-black leading-tight">
                Identify, locate and protect underground services
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-black">RIICCM202E</h2>
            </div>

            {/* Central Image */}
            <div className="flex justify-center mb-10 flex-1 items-center">
              <img
                src={coverImage}
                alt="Identify, locate and protect underground services cover"
                className="w-full max-w-[500px] sm:max-w-[600px] h-auto object-contain border border-gray-300 shadow-sm rounded-sm"
              />
            </div>

            {/* Form Details Table */}
            <div className="w-full mt-auto mb-12 border border-gray-400 flex flex-col text-xs sm:text-sm">

              {/* Row 1: Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center text-center">
                  Name:
                </div>
                <div className="w-full sm:w-[37.5%] border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full h-full p-2.5 sm:p-3 text-center bg-transparent outline-none placeholder-gray-300"
                  />
                </div>
                <div className="w-full sm:w-[37.5%] flex items-center">
                  <input
                    type="text"
                    placeholder="Family Name"
                    className="w-full h-full p-2.5 sm:p-3 text-center bg-transparent outline-none placeholder-gray-300"
                  />
                </div>
              </div>

              {/* Row 2: Mobile No. */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center text-center">
                  Mobile No.
                </div>
                <div className="flex-1 flex items-center">
                  <input
                    type="text"
                    className="w-full h-full p-2.5 sm:p-3 bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Course Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center text-center">
                  Course Name:
                </div>
                <div className="flex-1 p-3 font-bold text-center flex items-center justify-center leading-tight">
                  Identify, locate and protect underground services - RIICCM202E
                </div>
              </div>

              {/* Row 4: Enrolment Date */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center text-center">
                  Enrolment Date:
                </div>
                <div className="flex-1 flex items-center">
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="w-full h-full p-2.5 sm:p-3 text-center bg-transparent outline-none placeholder-gray-300"
                  />
                </div>
              </div>

              {/* Row 5: USI */}
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center text-center">
                  USI
                </div>
                <div className="flex-1 flex items-center">
                  <input
                    type="text"
                    className="w-full h-full p-2.5 sm:p-3 bg-transparent outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Footer Section */}
            <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-gray-800 mt-auto pt-6 w-full border-t border-gray-100">
              <div className="text-left max-w-[60%]">
                <p className="font-bold">Participant assessment- STA-230831</p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
                <p>RTO ID 45234</p>
              </div>
              <div className="text-right flex flex-col items-end max-w-[40%]">
                <p className="mb-1 sm:mb-2 font-medium">1</p>
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 2 (LLN Page 1 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-2 mb-6">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-right">
                <span className="text-red-600 font-bold text-base sm:text-lg uppercase tracking-wide">LLN Assessment</span>
              </div>
            </div>

            {/* Student Details Fields */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0 text-sm sm:text-base">
              <div className="flex items-center flex-1 sm:mr-8">
                <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Student's name:</span>
                <input type="text" className="flex-1 border-b border-black outline-none px-1 bg-transparent" />
              </div>
              <div className="flex items-center w-full sm:w-[300px]">
                <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Date attempted:</span>
                <input type="text" className="flex-1 border-b border-black outline-none px-1 bg-transparent" />
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <h3 className="text-red-600 font-bold text-base sm:text-lg mb-4">Instructions</h3>
              <ul className="list-none space-y-4 pl-4 text-sm sm:text-base text-gray-800">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>This indicator should be considered only as a tool to determine your language, literacy and numeracy (LL&N) skills in relation to the requirements of the qualification/course into which you are about to enrol.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>The answers must be your own work and you must not get anyone else to help you.</span>
                </li>
              </ul>
            </div>

            {/* Subtext */}
            <p className="font-bold text-blue-900 mb-6 text-sm sm:text-base leading-snug">
              Below is an email you have received at work. Read the email and answer the multiple-choice questions
            </p>

            {/* Email Container */}
            <div className="border border-gray-300 rounded p-4 sm:p-6 bg-gray-50 flex-1 flex flex-col justify-start text-sm sm:text-base leading-relaxed text-gray-800">
              <p className="font-medium text-gray-900 border-b border-gray-200 pb-2 mb-4">
                <span className="font-bold text-gray-600">Subject:</span> Important Updates - Safety Training & Equipment Usage
              </p>

              <div className="space-y-4 font-normal">
                <p>Dear Team,</p>
                <p>I hope this message finds you well.</p>
                <p>As you know, safety is our top priority on the job site. Therefore, we are implementing a few changes.</p>

                <p>
                  <span className="font-bold text-black">Safety Training:</span> All team members are required to complete the updated Safety Training by the end of next week. Please confirm your completion by replying to this email.
                </p>

                <p>
                  <span className="font-bold text-black">Equipment Usage:</span> Remember, certain machines, such as the crane and the earthmover, must only be operated by licensed individuals. In addition, personal protective equipment (PPE) must always be worn while operating any machinery.
                </p>

                <p>
                  <span className="font-bold text-black">Working at Heights:</span> For those involved in work at heights, we've introduced new harnesses. Please get familiar with these before your next shift.
                </p>

                <p>
                  <span className="font-bold text-black">Reporting Issues:</span> If you see a safety issue or potential risk, please inform me immediately. We can only keep our site safe if we all work together.
                </p>

                <p>Thank you for your understanding and cooperation.</p>

                <div className="pt-2">
                  <p>Best,</p>
                  <p className="font-bold text-black">Tim David</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-[9px] sm:text-[10px] text-gray-600 mt-8 pt-4 flex flex-col items-center border-t border-gray-300">
              <div className="w-full flex justify-between">
                <span>Form 37</span>
                <span className="text-center font-bold text-black flex flex-col">
                  <span>Page 1 of 4</span>
                  <span className="font-normal text-gray-600 text-[8px] sm:text-[9px] mt-1">
                    Australian International Education & Training Pty Ltd trading as Safety Training Academy ABN 93 613 701 527 RTO ID 45234
                  </span>
                </span>
                <span>230330</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================= PAGE 3 (LLN Page 2 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-2 mb-6">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-right">
                <span className="text-red-600 font-bold text-base sm:text-lg uppercase tracking-wide">LLN Assessment</span>
              </div>
            </div>

            <h3 className="text-red-600 font-bold text-base sm:text-lg mb-6">Questions:</h3>

            <div className="space-y-6 sm:space-y-8 flex-1 text-sm sm:text-base text-gray-800">

              {/* Question 1 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">1. When is the deadline to complete the updated Safety Training?</p>
                <div className="space-y-1.5 pl-4">
                  {[
                    { val: 'a', text: 'Tomorrow' },
                    { val: 'b', text: 'Next month' },
                    { val: 'c', text: 'By the end of next week' },
                    { val: 'd', text: "There's no deadline" }
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                      <input type="radio" name="q1" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span>{opt.val}) {opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">2. Who can operate the crane and the earthmover?</p>
                <div className="space-y-1.5 pl-4">
                  {[
                    { val: 'a', text: 'Anyone' },
                    { val: 'b', text: 'Licensed individuals' },
                    { val: 'c', text: 'Only the supervisor' },
                    { val: 'd', text: 'New hires' }
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                      <input type="radio" name="q2" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span>{opt.val}) {opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">3. What must you wear when operating machinery?</p>
                <div className="space-y-1.5 pl-4">
                  {[
                    { val: 'a', text: 'Casual clothes' },
                    { val: 'b', text: 'Personal Protective Equipment (PPE)' },
                    { val: 'c', text: 'A name tag' },
                    { val: 'd', text: 'No special requirements' }
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                      <input type="radio" name="q3" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span>{opt.val}) {opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 4 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">4. What has been introduced for workers involved in work at heights?</p>
                <div className="space-y-1.5 pl-4">
                  {[
                    { val: 'a', text: 'Additional break times' },
                    { val: 'b', text: 'New harnesses' },
                    { val: 'c', text: 'Less supervision' },
                    { val: 'd', text: 'Higher wages' }
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                      <input type="radio" name="q4" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span>{opt.val}) {opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 5 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">5. What should you do if you see a safety issue or potential risk?</p>
                <div className="space-y-1.5 pl-4">
                  {[
                    { val: 'a', text: 'Ignore it' },
                    { val: 'b', text: 'Fix it yourself' },
                    { val: 'c', text: 'Inform the supervisor immediately' },
                    { val: 'd', text: "Tell your colleagues about it but don't tell the supervisor" }
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                      <input type="radio" name="q5" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span>{opt.val}) {opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="text-[9px] sm:text-[10px] text-gray-600 mt-8 pt-4 flex flex-col items-center border-t border-gray-300">
              <div className="w-full flex justify-between">
                <span>Form 37</span>
                <span className="text-center font-bold text-black flex flex-col">
                  <span>Page 2 of 4</span>
                  <span className="font-normal text-gray-600 text-[8px] sm:text-[9px] mt-1">
                    Australian International Education & Training Pty Ltd trading as Safety Training Academy ABN 93 613 701 527 RTO ID 45234
                  </span>
                </span>
                <span>230330</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================= PAGE 4 (LLN Page 3 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-2 mb-6">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-right">
                <span className="text-red-600 font-bold text-base sm:text-lg uppercase tracking-wide">LLN Assessment</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <p className="font-bold text-blue-900 mb-6 text-sm sm:text-base leading-relaxed">
                6. Imagine you spotted a safety risk on the site that the supervisor should be aware of. Write a clear and concise email to inform them about it, including what the risk is and where it is located.
              </p>

              {/* Lined Paper Textarea wrapper */}
              <div className="border border-gray-400 rounded p-1 flex-1 flex flex-col min-h-[500px] bg-white relative">
                <textarea
                  className="w-full flex-1 p-2 outline-none resize-none leading-[32px] bg-transparent text-sm sm:text-base text-gray-800"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #cbd5e1 31px, #cbd5e1 32px)',
                    backgroundAttachment: 'local',
                    lineHeight: '32px',
                    paddingTop: '6px'
                  }}
                  placeholder="Write your email here..."
                ></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="text-[9px] sm:text-[10px] text-gray-600 mt-8 pt-4 flex flex-col items-center border-t border-gray-300">
              <div className="w-full flex justify-between">
                <span>Form 37</span>
                <span className="text-center font-bold text-black flex flex-col">
                  <span>Page 3 of 4</span>
                  <span className="font-normal text-gray-600 text-[8px] sm:text-[9px] mt-1">
                    Australian International Education & Training Pty Ltd trading as Safety Training Academy ABN 93 613 701 527 RTO ID 45234
                  </span>
                </span>
                <span>230330</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================= PAGE 5 (LLN Page 4 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-2 mb-6">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-right">
                <span className="text-red-600 font-bold text-base sm:text-lg uppercase tracking-wide">LLN Assessment</span>
              </div>
            </div>

            <h3 className="text-red-600 font-bold text-base sm:text-lg mb-6">Numeracy</h3>

            <div className="space-y-6 text-sm sm:text-base text-gray-800 mb-8">

              {/* Question 7 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">
                  7. Each bag of cement covers 20 square meters. If your construction project needs to cover 80 square meters, how many bags of cement do you need?
                </p>
                <div className="space-y-1.5 pl-4">
                  {['3 bags', '4 bags', '5 bags', '6 bags'].map((text, idx) => {
                    const letters = ['a', 'b', 'c', 'd'];
                    return (
                      <label key={idx} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                        <input type="radio" name="q7" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span>{letters[idx]}) {text}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Question 8 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">
                  8. A worker earns $20 per hour. If he works 8 hours a day, how much will he earn in a day?
                </p>
                <div className="space-y-1.5 pl-4">
                  {['$80', '$120', '$160', '$200'].map((text, idx) => {
                    const letters = ['a', 'b', 'c', 'd'];
                    return (
                      <label key={idx} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                        <input type="radio" name="q8" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span>{letters[idx]}) {text}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Question 9 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">
                  9. If a water tank can hold 500 litres and is already half full, how many more litres does it need to be full?
                </p>
                <div className="space-y-1.5 pl-4">
                  {['100 litres', '250 litres', '500 litres', '750 litres'].map((text, idx) => {
                    const letters = ['a', 'b', 'c', 'd'];
                    return (
                      <label key={idx} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                        <input type="radio" name="q9" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span>{letters[idx]}) {text}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Question 10 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">
                  10. You have to install 15 windows and you've already installed 6. How many more do you need to install?
                </p>
                <div className="space-y-1.5 pl-4">
                  {['7 windows', '8 windows', '9 windows', '10 windows'].map((text, idx) => {
                    const letters = ['a', 'b', 'c', 'd'];
                    return (
                      <label key={idx} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                        <input type="radio" name="q10" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span>{letters[idx]}) {text}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Question 11 */}
              <div>
                <p className="font-bold text-blue-900 mb-2">
                  11. If you have to build a wall using bricks and each brick is 0.75 meters long, how many bricks do you need to build a 3-meter-long wall?
                </p>
                <div className="space-y-1.5 pl-4">
                  {['2 bricks', '3 bricks', '4 bricks', '6 bricks'].map((text, idx) => {
                    const letters = ['a', 'b', 'c', 'd'];
                    return (
                      <label key={idx} className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-gray-50">
                        <input type="radio" name="q11" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span>{letters[idx]}) {text}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Reviewer Table */}
            <div className="w-full mt-auto border border-gray-400 flex flex-col text-xs sm:text-sm text-gray-800">

              {/* Row 1: Reviewer Name & Score */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[20%] p-2.5 sm:p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center">
                  Name of Reviewer
                </div>
                <div className="w-full sm:w-[45%] border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center">
                  <input type="text" className="w-full h-full p-2 bg-transparent outline-none" />
                </div>
                <div className="w-full sm:w-[15%] p-2.5 sm:p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center text-center">
                  Score
                </div>
                <div className="flex-1 flex items-center justify-center font-bold text-blue-900 p-2">
                  <input type="text" className="w-12 p-1 text-center border-b border-gray-300 outline-none bg-transparent" /> /11
                </div>
              </div>

              {/* Row 2: LLN Skills Checklist */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[48px]">
                <div className="w-full sm:w-[65%] p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center leading-tight">
                  Do you feel the student has the necessary LLN skills to complete the course?
                </div>
                <div className="flex-1 p-3 flex items-center justify-center space-x-6 sm:space-x-8">
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-none text-blue-600" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-none text-blue-600" />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Row 3: Adjustments Comment */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[80px]">
                <div className="w-full sm:w-[65%] p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col justify-center leading-tight">
                  <span>Are there any reasonable adjustment actions to be implemented for this student?</span>
                </div>
                <div className="flex-1 flex flex-col p-2.5">
                  <div className="flex justify-center space-x-6 sm:space-x-8 mb-2">
                    <label className="flex items-center space-x-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-none text-blue-600" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-none text-blue-600" />
                      <span>No</span>
                    </label>
                  </div>
                  <textarea
                    className="w-full flex-1 p-2 text-xs border border-gray-300 rounded outline-none resize-none"
                    placeholder="Comment:"
                  ></textarea>
                </div>
              </div>

              {/* Row 4: Able to Start Course */}
              <div className="flex flex-col sm:flex-row min-h-[48px]">
                <div className="w-full sm:w-[65%] p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center leading-tight">
                  Student able to start the courses?
                </div>
                <div className="flex-1 p-3 flex items-center justify-center space-x-6 sm:space-x-8">
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-none text-blue-600" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-400 rounded-none text-blue-600" />
                    <span>No</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="text-[9px] sm:text-[10px] text-gray-600 mt-8 pt-4 flex flex-col items-center border-t border-gray-300">
              <div className="w-full flex justify-between">
                <span>Form 37</span>
                <span className="text-center font-bold text-black flex flex-col">
                  <span>Page 4 of 4</span>
                  <span className="font-normal text-gray-600 text-[8px] sm:text-[9px] mt-1">
                    Australian International Education & Training Pty Ltd trading as Safety Training Academy ABN 93 613 701 527 RTO ID 45234
                  </span>
                </span>
                <span>230330</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================= PAGE 6 (Enrolment Form Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <p className="italic font-bold text-xs sm:text-sm mb-4 text-center sm:text-left">
              PLEASE COMPLETE ALL SECTIONS clearly and carefully by writing in BLOCK LETTERS using a black or blue pen.
            </p>

            <h3 className="font-bold text-sm sm:text-base mb-2">SECTION 1 – APPLICANT INFORMATION</h3>

            {/* Applicant Details Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">APPLICANT DETAILS</div>
              <div className="border-b border-black p-2 font-medium">Please complete <span className="font-bold">full name and date of birth as listed on your ID documents</span></div>

              {/* Title tick */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Title (please tick)
                </div>
                <div className="flex-1 flex flex-wrap items-center p-2 gap-2.5 sm:gap-4">
                  <label className="flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Mr</span></label>
                  <label className="flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Mrs</span></label>
                  <label className="flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Miss</span></label>
                  <label className="flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Ms</span></label>
                  <label className="flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Dr</span></label>
                  <label className="flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Other</span></label>
                </div>
              </div>

              {/* Surname */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Surname
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Given name & Middle name */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Given name
                </div>
                <div className="w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Middle name
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Preferred name & Date of Birth */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[40px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center leading-tight font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Preferred name<br />If different to above
                </div>
                <div className="w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center leading-tight font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Date of Birth<br />Day/Month/Year
                </div>
                <div className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 p-2">
                  <input type="text" className="w-8 border border-gray-300 rounded text-center outline-none bg-transparent py-0.5" placeholder="DD" /> /
                  <input type="text" className="w-8 border border-gray-300 rounded text-center outline-none bg-transparent py-0.5" placeholder="MM" /> /
                  <input type="text" className="w-14 border border-gray-300 rounded text-center outline-none bg-transparent py-0.5" placeholder="YYYY" />
                </div>
              </div>

              {/* Gender & Email */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Gender (please tick)
                </div>
                <div className="w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r border-black flex items-center p-2 space-x-4">
                  <label className="flex items-center space-x-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Male</span></label>
                  <label className="flex items-center space-x-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span className="text-gray-800">Female</span></label>
                </div>
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Email
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Home Phone & Work Phone */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Home Phone
                </div>
                <div className="w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Work Phone
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Mobile Phone */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Mobile Phone
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Residential Address */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Residential Address
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Suburb, State, Postcode (Residential) */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex justify-start sm:justify-end items-center sm:pr-2 font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Suburb
                </div>
                <div className="w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[10%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  State
                </div>
                <div className="w-full sm:w-[15%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[10%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center text-[10px] sm:text-xs font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Postcode
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Postal Address */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Postal Address
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              {/* Suburb, State, Postcode (Postal) */}
              <div className="flex flex-col sm:flex-row min-h-[32px]">
                <div className="w-full sm:w-[20%] p-2 border-b sm:border-b-0 sm:border-r border-black flex justify-between items-center sm:pr-2 text-[10px] sm:text-xs font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  <span>If different from above</span><span>Suburb</span>
                </div>
                <div className="w-full sm:w-[30%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[10%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  State
                </div>
                <div className="w-full sm:w-[15%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[10%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center text-[10px] sm:text-xs font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Postcode
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>
            </div>

            {/* Emergency Contact Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">EMERGENCY CONTACT</div>

              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center leading-tight font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Full<br />Name
                </div>
                <div className="w-full sm:w-[20%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Relationship
                </div>
                <div className="w-full sm:w-[15%] border-b sm:border-b-0 sm:border-r border-black flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center text-[10px] sm:text-xs leading-tight font-semibold sm:font-normal bg-gray-50 sm:bg-transparent">
                  Contact Number
                </div>
                <div className="flex-1 flex p-1"><input type="text" className="w-full px-2 py-1 outline-none bg-transparent" /></div>
              </div>

              <div className="flex flex-col sm:flex-row p-3 min-h-[40px]">
                <div className="flex-1 flex items-center text-[10px] sm:text-xs leading-tight pr-2 pb-3 sm:pb-0">
                  In the event of an emergency do you give the STA permission to organise emergency transport and treatment and do you agree to pay all costs related to the emergency?
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span>Yes</span></label>
                  <label className="flex items-center space-x-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span>No</span></label>
                </div>
              </div>
            </div>

            {/* USI Section */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">UNIQUE STUDENT IDENTIFIER (USI)</div>
              <div className="p-2 sm:p-3 text-[10px] sm:text-xs text-[#2b4c7e] space-y-2 text-justify leading-snug">
                <p>From 1 January 2015, Safety Training Academy can be prevented from issuing you with a nationally recognised VET qualification or statement of attainment when you complete your course if you do not have a Unique Student Identifier (USI). In addition, we are required to include your USI in the data we submit to NCVER. If you have not yet obtained a USI you can apply for it directly at <a href="https://www.usi.gov.au/students/create-your-usi" target="_blank" rel="noopener noreferrer" className="underline">https://www.usi.gov.au/students/create-your-usi</a> on a computer or mobile device.</p>
                <p>Enter your Unique Student Identifier (USI) (if you already have one) You may already have a USI if you have done any nationally recognised training, which could include training at work, completing a first aid course or RSA (Responsible Service of Alcohol) course, getting a white card, or studying at a TAFE or training organisation. It is important that you try to find out whether you already have a USI before attempting to create a new one. You should not have more than one USI. To check if you already have a USI, use the 'Forgotten USI' link on the USI website at <a href="https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/" target="_blank" rel="noopener noreferrer" className="underline">https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/</a></p>

                <p className="font-bold italic text-black pt-2 text-xs sm:text-sm">17) Unique Student Identifier (USI)</p>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pt-2 gap-4">
                  <label className="flex items-start space-x-2 text-[#2b4c7e] max-w-full lg:max-w-[55%] cursor-pointer">
                    <input type="checkbox" className="mt-1 flex-shrink-0" />
                    <span>I give permission for Safety Training Academy to access my Unique Student Identifier (USI) for the purpose of recording my results.</span>
                  </label>

                  <div className="flex flex-nowrap items-center w-auto pb-2 lg:pb-0">
                    <div className="border border-black px-2 flex items-center justify-center font-bold text-black border-r-0 text-[10px] sm:text-xs h-7 sm:h-8 whitespace-nowrap bg-gray-50">USI</div>
                    {[...Array(10)].map((_, i) => (
                      <input key={i} type="text" maxLength={1} className="w-[22px] h-7 sm:w-7 sm:h-8 border border-black border-l-0 text-center outline-none text-black uppercase flex-shrink-0 font-bold text-xs sm:text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 6 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>

            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 1 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 7 (Enrolment Form Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="text-center mb-4">
              <p className="text-red-600 font-bold text-xs sm:text-sm underline uppercase">
                USI application through STA (if you do not already have one)
              </p>
            </div>

            <div className="text-xs sm:text-sm text-gray-800 space-y-3 mb-4 leading-relaxed text-justify">
              <p className="font-bold text-blue-900">Application for Unique Student Identifier (USI)</p>
              <p>If you would like us Safety Training Academy to apply for a USI on your behalf you must authorise us to do so and declare that you have read the privacy information at <a href="https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf" target="_blank" rel="noopener noreferrer" className="underline">https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf</a>. You must also provide some additional information as noted at the end of this form so that we can apply for a USI on your behalf.</p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span>I <strong>[Name]</strong></span>
                <input type="text" className="border-b border-black outline-none flex-1 min-w-[200px] px-1 font-bold bg-transparent" />
                <span>authorise Safety Training Academy to apply pursuant to sub-section 9(2) of the Student Identifiers Act 2014, for a USI on my behalf.</span>
              </div>

              <label className="flex items-start space-x-2 pt-2 cursor-pointer">
                <input type="checkbox" className="mt-1 flex-shrink-0" />
                <span>I have read and I consent to the collection, use and disclosure of my personal information (which may include sensitive information) pursuant to the information detailed at <a href="https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf" target="_blank" rel="noopener noreferrer" className="underline">https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf</a></span>
              </label>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span>Town/City of Birth</span>
                <input type="text" className="border-b border-black outline-none flex-1 min-w-[200px] px-1 bg-transparent" />
                <span>(please write the name of the Australian or overseas town or city where you were born)</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm font-bold text-blue-900 space-y-1 mb-3">
              <p>We will also need to verify your identity to create your USI.</p>
              <p>Please provide details for <u>one</u> of the forms of identity below (numbered 1 to 8).</p>
              <p>Please ensure that the name written in 'Personal Details' section is exactly the same as written in the document you provide below.</p>
            </div>

            {/* Verification Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">

              {/* Row 1: Licence */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  1. Australian Driver's Licence:
                </div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <span className="font-bold text-[#003366]">State:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <span className="font-bold text-[#003366]">Licence number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
              </div>

              {/* Row 2: Medicare Card (spans multiple rows) */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                {/* Left cell (spans both sub-rows on desktop) */}
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  2. Medicare Card:
                </div>
                
                {/* Nested right container */}
                <div className="flex-1 flex flex-col">
                  {/* Medicare Card Sub-row 1 */}
                  <div className="flex flex-col sm:flex-row border-b border-black">
                    <div className="w-full sm:w-[50%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                      <span className="font-bold text-[#003366]">Medicare card number:</span>
                      <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                    </div>
                    <div className="flex-1 p-2 flex items-center gap-2">
                      <span className="font-bold text-[#003366]">Individual reference number (next to your name on medicare card):</span>
                      <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                    </div>
                  </div>
                  
                  {/* Medicare Card Sub-row 2 */}
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-[50%] p-2 border-b sm:border-b-0 sm:border-r border-black flex flex-wrap items-center gap-3">
                      <span className="font-bold text-[#003366]">Card colour:</span>
                      <label className="flex items-center space-x-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span>Green</span></label>
                      <label className="flex items-center space-x-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span>Yellow</span></label>
                      <label className="flex items-center space-x-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-none" /><span>Blue</span></label>
                    </div>
                    <div className="flex-1 p-2 flex flex-wrap items-center gap-1.5">
                      <span className="font-bold text-[#003366]">Expiry date</span>
                      <input type="text" className="w-8 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="DD" /> /
                      <input type="text" className="w-8 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="MM" /> /
                      <input type="text" className="w-14 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="YYYY" />
                      <span className="text-[#003366]">(format DD/MM/YYYY)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Birth Certificate / Immicard */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  3. Australian Birth Certificate:
                </div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <span className="font-bold text-[#003366]">State/Territory:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
                <div className="flex-1 p-2 flex flex-col justify-center gap-1">
                  <div>
                    <span className="font-bold text-black">4. Immicard:</span> <span className="font-bold text-[#003366]">Immicard Number:</span>
                  </div>
                  <input type="text" className="border-b border-gray-400 outline-none w-full bg-transparent" />
                </div>
              </div>

              {/* Row 5: Passport */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  5. Australian Passport:
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <span className="font-bold text-[#003366]">Passport number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
              </div>

              {/* Row 6: Non-Australian Passport */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex flex-col justify-center leading-tight">
                  <span>6. Non-Australian Passport:</span>
                  <span className="font-normal text-xs">(with Australian Visa)</span>
                </div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <span className="font-bold text-[#003366]">Passport number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <span className="font-bold text-[#003366]">Country of issue:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
              </div>

              {/* Row 7: Citizenship Certificate */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  7. Citizenship Certificate:
                </div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <span className="font-bold text-[#003366]">Stock number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
                <div className="flex-1 p-2 flex flex-wrap items-center gap-1.5">
                  <span className="font-bold text-[#003366]">Acquisition date</span>
                  <input type="text" className="w-8 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="DD" /> /
                  <input type="text" className="w-8 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="MM" /> /
                  <input type="text" className="w-14 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="YYYY" />
                  <span className="text-[#003366]">(day/month/year)</span>
                </div>
              </div>

              {/* Row 8: Descent */}
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center leading-tight">
                  8. Certificate of Registration by Descent:
                </div>
                <div className="flex-1 p-2 flex flex-wrap items-center gap-1.5">
                  <span className="font-bold text-[#003366]">Acquisition date</span>
                  <input type="text" className="w-8 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="DD" /> /
                  <input type="text" className="w-8 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="MM" /> /
                  <input type="text" className="w-14 border-b border-gray-400 outline-none text-center bg-transparent" placeholder="YYYY" />
                  <span className="text-[#003366]">(day/month/year)</span>
                </div>
              </div>

            </div>

            {/* Office Use Only block */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#333] text-white font-bold p-2 text-sm sm:text-base">
                OFFICE USE Only
              </div>
              <div className="p-2 border-b border-black text-black text-justify leading-snug">
                In accordance with section 11 of the <span className="italic">Student Identifiers Act 2014</span>, Safety Training Academy will securely destroy personal information which we collect from individuals solely for the purpose of applying for a USI on their behalf as soon as practicable after we have made the application or the information is no longer needed for that purpose.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[50px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold text-blue-900 uppercase flex items-center bg-gray-50">
                  PHOTO ID VERIFIED:
                </div>
                <div className="flex-1 flex flex-col text-black">
                  <div className="flex flex-col sm:flex-row border-b border-black">
                    <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 border-black" />
                      <span>Passport number:</span>
                    </div>
                    <div className="w-full sm:w-1/2 p-2 flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 border-black" />
                      <span>Driver licence number:</span>
                    </div>
                  </div>
                  <div className="p-2 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>Other, please state:</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 7 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>

            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 2 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 8 (Enrolment Form Page 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <h3 className="font-bold text-sm sm:text-base mb-2">SECTION 2 – EDUCATION AND EMPLOYMENT INFORMATION</h3>

            <div className="mb-3 text-xs sm:text-sm">
              <p className="font-bold">AVETMISS DATA COLLECTION</p>
              <p className="italic text-gray-700">Information collected in this section is used for the purposes of National reporting and planning.</p>
              <p className="italic font-bold text-black">Please COMPLETE ALL SECTIONS.</p>
            </div>

            {/* Prior Education Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">PRIOR EDUCATION</div>
              <div className="border-b border-black p-2 font-medium">What was your highest <span className="font-bold italic">completed</span> level at school?</div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">12</span>
                  <span>Year 12 or equivalent</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">09</span>
                  <span>Year 9 or equivalent</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">11</span>
                  <span>Year 11 or equivalent</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">08</span>
                  <span>Year 8 or below</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">10</span>
                  <span>Year 10 or equivalent</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">02</span>
                  <span>Never attended school</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <span>In what <span className="font-bold italic">year</span> did you complete that level?</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent px-1" />
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <span>Name of School:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent px-1" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2 flex-wrap">
                  <span>If in Australia, State:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-16 bg-transparent px-1" />
                  <span>Postcode:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-16 bg-transparent px-1" />
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <span>If not in Australia, Country</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent px-1" />
                </div>
              </div>
            </div>

            {/* Qualifications Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">QUALIFICATIONS</div>
              <div className="border-b border-black p-2 font-medium">Do you have post-secondary or vocational/trade qualifications from any accredited/recognised educational institution(s)?</div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span>Yes – <span className="italic">Please specify and <span className="underline">provide a copy</span></span></span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span>No - <span className="italic">go to next question '<span className="font-bold">Employment Status</span>'</span></span>
                </div>
              </div>

              <div className="p-3 flex flex-col gap-2 bg-gray-50 text-[11px] sm:text-xs">
                <p className="font-semibold text-gray-700">If YES, then tick ANY applicable boxes.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">008</span><span>Bachelor Degree or Higher Degree</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">514</span><span>Certificate III (or Trade Certificate)</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">410</span><span>Advanced Diploma or Associate Degree</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">521</span><span>Certificate II</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">420</span><span>Diploma (or Associate Diploma)</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">524</span><span>Certificate I</span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[10px] text-blue-900 font-bold">511</span><span>Certificate IV (or Advanced Certificate/Technician)</span></label>
                  <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 mt-0.5" /><span className="text-[10px] text-blue-900 font-bold mt-0.5">990</span><span>Other education (including certificates or overseas qualifications not listed)</span></label>
                </div>
              </div>
            </div>

            {/* Employment Status Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">EMPLOYMENT STATUS</div>
              <div className="border-b border-black p-2 font-medium">Of the following, which best describes your current employment status? (please tick ONE box only)</div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">01</span>
                  <span>Full-time employee</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">06</span>
                  <span>Unemployed – seeking full-time work</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">02</span>
                  <span>Part-time employee</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">07</span>
                  <span>Unemployed – seeking part-time work</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">03</span>
                  <span>Self-employed- not employing others</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">08</span>
                  <span>Not employed – not seeking employment</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">04</span>
                  <span>Self employed – employing others</span>
                </div>
                <div className="flex-1 p-2 bg-gray-50 sm:bg-transparent"></div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">05</span>
                  <span>Employed – unpaid worker in family business</span>
                </div>
                <div className="flex-1 p-2 bg-gray-50 sm:bg-transparent"></div>
              </div>

              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">EMPLOYMENT DETAILS</div>

              {/* Row 1: Employer Name & Supervisor */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold bg-gray-50 sm:bg-transparent">
                  Employer's name
                </div>
                <div className="w-full sm:w-[35%] border-b sm:border-b-0 sm:border-r border-black flex p-1">
                  <input type="text" className="w-full px-2 py-1 outline-none bg-transparent" />
                </div>
                <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold bg-gray-50 sm:bg-transparent leading-tight">
                  Supervisor's name
                </div>
                <div className="flex-1 flex p-1">
                  <input type="text" className="w-full px-2 py-1 outline-none bg-transparent" />
                </div>
              </div>

              {/* Row 2: Address */}
              <div className="flex flex-col sm:flex-row border-b border-black min-h-[32px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold bg-gray-50 sm:bg-transparent">
                  Address
                </div>
                <div className="flex-1 flex p-1">
                  <input type="text" className="w-full px-2 py-1 outline-none bg-transparent" />
                </div>
              </div>

              {/* Row 3: Email & Phone */}
              <div className="flex flex-col sm:flex-row min-h-[32px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold bg-gray-50 sm:bg-transparent">
                  Email
                </div>
                <div className="w-full sm:w-[35%] border-b sm:border-b-0 sm:border-r border-black flex p-1">
                  <input type="text" className="w-full px-2 py-1 outline-none bg-transparent" />
                </div>
                <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-semibold bg-gray-50 sm:bg-transparent">
                  Phone
                </div>
                <div className="flex-1 flex p-1">
                  <input type="text" className="w-full px-2 py-1 outline-none bg-transparent" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 8 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>

            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 3 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 9 (Enrolment Form Page 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            {/* Reason Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2 flex items-center gap-2 flex-wrap">
                <span>REASON FOR UNDERTAKING TRAINING / RPL</span>
                <span className="font-normal text-[10px]">(tick ONE box only)</span>
              </div>
              <div className="border-b border-black p-2 font-medium">Of the following, which best describes your main reason for gaining this qualification?</div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">01</span>
                  <span>To get a job</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">06</span>
                  <span>It is a requirement for my job</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">02</span>
                  <span>To develop my existing business</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">07</span>
                  <span>I wanted extra skills for my job</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">03</span>
                  <span>To start my own business</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">08</span>
                  <span>To get into another course of study</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">04</span>
                  <span>To try for a different career</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">12</span>
                  <span>For personal interest or self-development</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">05</span>
                  <span>To get a better job or promotion</span>
                </div>
                <div className="flex-1 p-2 flex flex-wrap items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">11</span>
                  <span>Other <span className="italic">(please specify):</span></span>
                  <input type="text" className="outline-none bg-transparent flex-1 border-b border-gray-400 px-1" />
                </div>
              </div>
            </div>

            <h3 className="font-bold text-sm sm:text-base mt-2">SECTION 3 – ADDITIONAL INFORMATION</h3>
            <p className="italic text-xs sm:text-sm mb-2 leading-tight text-gray-700">Information collected in this section is strictly confidential, available only to limited college staff and for the purposes of reporting and planning.</p>

            {/* Special Needs Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">SPECIAL NEEDS</div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center font-medium">
                  Do you consider that you have any type of disability that may affect your ability to undertake assessment?
                </div>
                <div className="flex-1 p-3 flex flex-col justify-center gap-2 bg-gray-50 sm:bg-transparent">
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>No - <span className="italic">go to next question '<span className="font-bold">Language & Cultural Diversity</span>'</span></span></label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>Yes – <span className="italic">please provide details below</span></span></label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">11</span><span>Hearing</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">16</span><span>Acquired Brain Impairment</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">12</span><span>Physical</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">17</span><span>Vision</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">13</span><span>Intellectual</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">18</span><span>Medical Condition</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">14</span><span>Learning</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">15</span><span>Mental Illness</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="flex-1 p-2 flex flex-wrap items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">19</span>
                  <span>Other <span className="italic">(please specify):</span></span>
                  <input type="text" className="outline-none bg-transparent flex-1 border-b border-gray-400 px-1" />
                </div>
              </div>

              <div className="p-2 italic text-[11px] sm:text-xs text-gray-600 bg-gray-50">
                If you indicated the presence of a disability, impairment or long-term condition, please select the area(s) from the list above.
              </div>
            </div>

            {/* Language & Cultural Diversity Table */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">LANGUAGE AND CULTURAL DIVERSITY</div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  Country of Birth
                </div>
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">1101</span><span>Australia</span>
                </div>
                <div className="flex-1 p-2 flex flex-wrap items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="font-bold">Other <span className="text-[10px]">(please specify):</span></span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 min-w-[100px] bg-transparent" />
                  <span className="whitespace-nowrap">Place of Birth:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-20 bg-transparent" />
                </div>
              </div>

              {/* Stackable AboriginalOrigin row 1 */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center leading-tight">
                  Aboriginal &/or Torres Strait Islander Origin
                </div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">4</span><span>No</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">2</span><span>Torres Strait Islander</span>
                </div>
              </div>

              {/* Stackable AboriginalOrigin row 2 */}
              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black bg-gray-50 sm:bg-transparent"></div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">13</span><span>Aboriginal</span>
                </div>
                <div className="flex-1 p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-blue-900 font-bold">13</span><span>Aboriginal & Torres Strait Islander</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-black">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  Language spoken at home
                </div>
                <div className="w-full sm:w-[37.5%] p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2 leading-tight">
                  <input type="checkbox" className="w-4 h-4 border-black flex-shrink-0" />
                  <div><span className="text-[10px] text-blue-900 font-bold mr-1">1201</span>English Only <span className="text-[10px] text-gray-500">(skip next question)</span></div>
                </div>
                <div className="flex-1 p-2 flex flex-wrap items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="font-bold">Other <span className="text-[10px]">(please specify):</span></span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 min-w-[100px] bg-transparent" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-black font-bold bg-gray-50 flex items-center">
                  How well do you speak English?
                </div>
                <div className="flex-1 p-3 flex flex-wrap items-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>Very Well</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>Well</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>Not well</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>Not at all</span></label>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 9 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>

            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 4 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 10 (Enrolment Form Page 5) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <h3 className="font-bold text-sm sm:text-base mb-4 uppercase">SECTION 4– ENROLMENT INFORMATION</h3>

            <div className="flex flex-col text-xs sm:text-sm">

              {/* Qualifications */}
              <div className="w-full border border-black flex flex-col mb-4">
                <div className="bg-[#b3e5fc] border-b border-black font-bold p-2 flex justify-between items-center flex-wrap gap-1">
                  <span>Qualifications – please tick qualification for which you are applying.</span>
                  <span className="font-normal text-[10px] sm:text-xs">(Assess only- RPL)</span>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span className="font-semibold text-black">CPC30220 Certificate III in Carpentry</span>
                      <br />
                      <span className="font-normal text-gray-500">(34 Units of Competency)</span>
                    </div>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span className="font-semibold text-black">CPC30620 Certificate III in Painting and Decorating</span>
                      <br />
                      <span className="font-normal text-gray-500">(29 Units of Competency)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span className="font-semibold text-black">CPC31220 Certificate III Wall and Ceiling Lining</span>
                      <br />
                      <span className="font-normal text-gray-500">(29 Units of Competency)</span>
                    </div>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span className="font-semibold text-black">CPC31320 Certificate III in Wall and Floor Tiling</span>
                      <br />
                      <span className="font-normal text-gray-500">(20 Units of Competency)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black font-semibold bg-gray-50 sm:bg-transparent">
                    Are you applying for CT as well as RPL
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer"><span>Yes</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                    <label className="flex items-center gap-2 cursor-pointer"><span>No</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black font-semibold bg-gray-50 sm:bg-transparent">
                    Preferred Start Date
                  </div>
                  <div className="flex-1 p-2 text-gray-500">
                    ------/-----/-------
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex flex-wrap items-center gap-3">
                    <span className="font-semibold">Do you have access to a workplace</span>
                    <label className="flex items-center gap-2 cursor-pointer"><span>Yes</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                    <label className="flex items-center gap-2 cursor-pointer"><span>No</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <span className="font-semibold">Site location:</span>
                    <input type="text" className="bg-transparent outline-none flex-1 border-b border-gray-400 sm:border-none px-1" />
                  </div>
                </div>
              </div>

              {/* Short Courses */}
              <div className="w-full border border-black flex flex-col">
                <div className="bg-[#b3e5fc] border-b border-black font-bold p-2 text-center text-sm">Short Courses</div>
                <div className="bg-[#b3e5fc] border-b border-black font-bold p-2 flex justify-between items-center flex-wrap gap-1">
                  <span>Unit of competency – Please indicate course chosen</span>
                  <span className="font-normal text-[10px] sm:text-xs">(Training and Assessment program)</span>
                </div>

                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">White Card:</div>
                <div className="flex border-b border-black p-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>CPCWHS1001 - Prepare to work safely in the construction industry</span>
                  </label>
                </div>

                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Working at Heights :</div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>RIIWHS204E - Work safely at heights</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span className="leading-tight">ICTWHS201 - Provide telecommunications services safely on roofs</span></label>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Confined Spaces :</div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>RIIWHS202E - Enter and work in confined spaces</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>MSMWHS217 - Gas test atmospheres</span></label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>MSMWHS201 - Conduct hazard analysis</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>MSMPER300 - Issue work permits</span></label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>MSMPER200 - Work in accordance with an issued permit</span></label>
                  </div>
                  <div className="flex-1 p-2 bg-gray-50 sm:bg-transparent"></div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">High risk Work :</div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>TLILIC0003 - Licence to operate a forklift truck</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">TLILIC0005 - Licence to operate a boom-type elevating work platform (boom length 11m or more)</span></label>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Earthmoving and Machinery :</div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">RIIMPO320F - Conduct civil construction excavator operations</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">RIIMPO318F - Conduct civil construction skid steer loader operations</span></label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">RIIMPO321F - Conduct civil construction wheeled front end loader operations</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">RIIMPO337E - Conduct articulated haul truck operations</span></label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">RIIHAN309E - Conduct telescopic materials handler Operations (Telehandler)</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">RIIHAN301E – Operate elevating work platform (under 11m)</span></label>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Asbestos:</div>
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>CPCCDE3014 - Remove non-friable asbestos</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>CPCCDE4008 - Supervise asbestos removal</span></label>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Page 10 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>

            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 5 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 11 (Enrolment Form Page 6) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">

          <div className="flex-1 flex flex-col mt-4">

            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm">
              <div className="w-full border border-black flex flex-col">

                {/* Demolition */}
                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Demolition:</div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCBC4002 Manage work health and safety in the building and construction workplace</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE3020 Select and use tools and equipment for hot work in the demolition industry</span></label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCBC4012 Read and interpret plans and specifications</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE3022 Manage demolition recyclable waste materials and contaminated soil using load shifting equipment</span></label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE3016 Identify hazards on demolition sites and apply risk management strategies</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE4001 Plan and prepare for activities on demolition sites</span></label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE3018 Select and use small plant and equipment for demolition tasks</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE4002 Plan demolition work to minimise risk to health, safety and environment</span></label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE3018 Select and use small plant and equipment for demolition tasks</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE4003 Supervise operational activities on demolition sites</span></label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-start gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">CPCCDE4004 Finalise demolition activities and supervise property handover</span></label>
                  </div>
                  <div className="flex-1 p-2 bg-gray-50 sm:bg-transparent"></div>
                </div>

                {/* First Aid */}
                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">First Aid :</div>

                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>HLTAID011 - Provide First Aid</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>HLTAID009 - Provide cardiopulmonary resuscitation</span></label>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black mt-0.5 flex-shrink-0" /><span className="leading-tight">HLTAID012 - Provide First Aid in an education and care setting</span></label>
                  </div>
                  <div className="flex-1 p-2 bg-gray-50 sm:bg-transparent"></div>
                </div>

                {/* Traffic Control Courses */}
                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Traffic Control Courses:</div>
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-black flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>RIISS00054 – Traffic Controller Skill Set</span></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-2">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black" /><span>RIISS00055 – Traffic Management Implementer Skill Set</span></label>
                  </div>
                </div>

                {/* Other Courses */}
                <div className="bg-[#e6ddc5] border-b border-black font-bold p-2">Other Courses:</div>
                <div className="flex border-b border-black p-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>UETDREL006 - Working safely near live electrical apparatus as a non-electrical worker</span>
                  </label>
                </div>
                <div className="flex p-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>RIICCM202E – Identify, located and protect underground services</span>
                  </label>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Page 11 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>

            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 6 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 12 (Enrolment Form Page 7 - Privacy Notice) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-[#b3e5fc] border-b border-gray-400 font-bold p-2 text-base text-[#003366]">
                PRIVACY NOTICE
              </div>
              <div className="p-4 text-[#003366] text-[11px] leading-tight flex flex-col gap-2">
                <p className="font-bold underline">Why we collect your personal information</p>
                <p>As a registered training organisation (RTO), we collect your personal information so we can process and manage your enrolment in a vocational education and training (VET) course with us.</p>
                
                <p className="font-bold underline">How we use your personal information</p>
                <p>We use your personal information to enable us to deliver VET courses to you, and otherwise, as needed, to comply with our obligations as an RTO.</p>
                
                <p className="font-bold underline">How we disclose your personal information</p>
                <p>We are required by law (under the National Vocational Education and Training Regulator Act 2011 (Cth) (NVETR Act)) to disclose the personal information we collect about you to the National VET Data Collection kept by the National Centre for Vocational Education Research Ltd (NCVER). The NCVER is responsible for collecting, managing, analysing and communicating research and statistics about the Australian VET sector.</p>
                <p>We are also authorised by law (under the NVETR Act) to disclose your personal information to the relevant state or territory training authority.</p>
                
                <p className="font-bold underline">How the NCVER and other bodies handle your personal information</p>
                <p>The NCVER will collect, hold, use and disclose your personal information in accordance with the law, including the Privacy Act 1988 (Cth) (Privacy Act) and the NVETR Act. Your personal information may be used and disclosed by NCVER for purposes that include populating authenticated VET transcripts; administration of VET; facilitation of statistics and research relating to education, including surveys and data linkage; and understanding the VET market.</p>
                <p>The NCVER is authorised to disclose information to the Australian Government Department of Education, Skills and Employment (DESE), Commonwealth authorities, State and Territory authorities (other than registered training organisations) that deal with matters relating to VET and VET regulators for the purposes of those bodies, including to enable:</p>
                <ul className="list-disc pl-8 flex flex-col gap-1">
                  <li>administration of VET, including program administration, regulation, monitoring and evaluation</li>
                  <li>facilitation of statistics and research relating to education, including surveys and data linkage</li>
                  <li>understanding how the VET market operates, for policy, workforce planning and consumer information.</li>
                </ul>
                <p>The NCVER may also disclose personal information to persons engaged by NCVER to conduct research on NCVER's behalf.</p>
                <p>The NCVER does not intend to disclose your personal information to any overseas recipients.</p>
                <p>For more information about how the NCVER will handle your personal information please refer to the NCVER's Privacy Policy at <a href="http://www.ncver.edu.au/privacy" className="underline text-blue-600">www.ncver.edu.au/privacy</a></p>
                <p>If you would like to seek access to or correct your information, in the first instance, please contact your RTO using the contact details listed below.</p>
                <p>DESE is authorised by law, including the Privacy Act and the NVETR Act, to collect, use and disclose your personal information to fulfil specified functions and activities. For more information about how the DESE will handle your personal information, please refer to the DESE VET Privacy Notice at <a href="https://www.dese.gov.au/national-vet-data/vet-privacy-notice" className="underline text-blue-600">https://www.dese.gov.au/national-vet-data/vet-privacy-notice</a></p>
                
                <p className="font-bold underline">Surveys</p>
                <p>You may receive a student survey which may be run by a government department or an NCVER employee, agent, third-party contractor or another authorised agency. Please note you may opt out of the survey at the time of being contacted.</p>
                
                <p className="font-bold underline">Contact information</p>
                <p>At any time, you may contact Safety Training Academy to:</p>
                <ul className="list-disc pl-8 flex flex-col gap-1">
                  <li>request access to your personal information</li>
                  <li>correct your personal information</li>
                  <li>make a complaint about how your personal information has been handled</li>
                  <li>ask a question about this Privacy Notice</li>
                </ul>
                
                <p className="font-bold underline mt-2">Safety Training Academy</p>
                <p className="font-bold">Maria Hajjar</p>
                <p className="font-bold">0439 007 746</p>
                <a href="mailto:maria@safetytrainingacademy.edu.au" className="underline text-blue-600">maria@safetytrainingacademy.edu.au</a>
              </div>
            </div>

          </div>

          {/* Footer Page 12 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 7 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 13 (Enrolment Form Page 8 - Disability Supplement) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-[#b3e5fc] border-b border-gray-400 font-bold p-2 text-base text-[#003366]">
                DISABILITY SUPPLEMENT
              </div>
              <div className="p-4 text-[#003366] text-[11px] leading-tight flex flex-col gap-2">
                <p className="font-bold">*If you indicated the presence of a disability, impairment or long-term condition on page 4, please select the area(s) in the following list:</p>
                <p>Disability in this context does not include short-term disabling health conditions such as a fractured leg, influenza, or corrected physical conditions such as impaired vision managed by wearing glasses or lenses.</p>
                
                <p className="font-bold mt-1">'11 — Hearing/deaf'</p>
                <p>Hearing impairment is used to refer to a person who has an acquired mild, moderate, severe or profound hearing loss after learning to speak, communicates orally and maximises residual hearing with the assistance of amplification. A person who is deaf has a severe or profound hearing loss from, at, or near birth and mainly relies upon vision to communicate, whether through lip reading, gestures, cued speech, finger spelling and/or sign language.</p>
                
                <p className="font-bold mt-1">'12 — Physical'</p>
                <p>A physical disability affects the mobility or dexterity of a person and may include a total or partial loss of a part of the body. A physical disability may have existed since birth or may be the result of an accident, illness, or injury suffered later in life; for example, amputation, arthritis, cerebral palsy, multiple sclerosis, muscular dystrophy, paraplegia, quadriplegia or post-polio syndrome.</p>

                <p className="font-bold mt-1">'13 — Intellectual'</p>
                <p>In general, the term 'intellectual disability' is used to refer to low general intellectual functioning and difficulties in adaptive behaviour, both of which conditions were manifested before the person reached the age of 18. It may result from infection before or after birth, trauma during birth, or illness.</p>
                
                <p className="font-bold mt-1">'14 — Learning'</p>
                <p>A general term that refers to a heterogeneous group of disorders manifested by significant difficulties in the acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical abilities. These disorders are intrinsic to the individual, presumed to be due to central nervous system dysfunction, and may occur across the life span. Problems in self-regulatory behaviours, social perception, and social interaction may exist with learning disabilities but do not by themselves constitute a learning disability.</p>
                
                <p className="font-bold mt-1">'15 — Mental illness'</p>
                <p>Mental illness refers to a cluster of psychological and physiological symptoms that cause a person suffering or distress and which represent a departure from a person's usual pattern and level of functioning.</p>
                
                <p className="font-bold mt-1">'16 — Acquired brain impairment'</p>
                <p>Acquired brain impairment is injury to the brain that results in deterioration in cognitive, physical, emotional or independent functioning. Acquired brain impairment can occur as a result of trauma, hypoxia, infection, tumour, accidents, violence, substance abuse, degenerative neurological diseases or stroke. These impairments may be either temporary or permanent and cause partial or total disability or psychosocial maladjustment.</p>
                
                <p className="font-bold mt-1">'17 — Vision'</p>
                <p>This covers a partial loss of sight causing difficulties in seeing, up to and including blindness. This may be present from birth or acquired as a result of disease, illness or injury.</p>
                
                <p className="font-bold mt-1">'18 — Medical condition'</p>
                <p>Medical condition is a temporary or permanent condition that may be hereditary, genetically acquired or of unknown origin. The condition may not be obvious or readily identifiable, yet may be mildly or severely debilitating and result in fluctuating levels of wellness and sickness, and/or periods of hospitalisation; for example, HIV/AIDS, cancer, chronic fatigue syndrome, Crohn's disease, cystic fibrosis, asthma or diabetes.</p>
                
                <p className="font-bold mt-1">'19 — Other'</p>
                <p>A disability, impairment or long-term condition which is not suitably described by one or several disability types in combination. Autism spectrum disorders are reported under this category.</p>
              </div>
            </div>

          </div>

          {/* Footer Page 13 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 8 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 14 (Enrolment Form Page 9 - Terms & Conditions 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 p-4 text-[#003366]">
              <h3 className="font-bold text-center text-sm sm:text-base mb-4 uppercase text-[#003366]">TERMS & CONDITIONS OF ENROLMENT</h3>
              
              <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
                <p className="font-bold text-[#003366]">Enrolment & Selection</p>
                <ol className="list-decimal pl-4 flex flex-col gap-1">
                  <li>The student is responsible for notifying Safety Training Academy if they have a medical condition or disability or require assistance in their training.</li>
                  <li>A deposit must accompany enrolment to secure a placement within a course; this fee is also the Administration Fee.</li>
                  <li>It is the student's responsibility to note the date, time and location of the course as advertised.</li>
                  <li>Courses with low enrolments may be cancelled, every effort will be made to contact students, please ensure your contact details are correct.</li>
                  <li>Requests from the student to transfer or credit their course placement due to changed personal circumstances will be considered and every effort will be made to ensure a placement into an alternative course.</li>
                  <li>If you are unable to complete your course, due to changed personal circumstances, Safety Training Academy will make every effort to ensure you are placed into an alternative pre-scheduled course.</li>
                  <li>Students can only join after course commencement date if they meet all prerequisites. Full course fees are still payable for late enrolments.</li>
                  <li>Safety Training Academy reserves the right to decline admission to a course, terminate a student's enrolment in a class or change a course Trainer/Assessor at any time without notice.</li>
                  <li>Students participate in courses involving physical activity; practical demonstrations etc. and do so at their own risk. Safety Training Academy's students are covered by public liability insurance whilst working within the college premises.</li>
                </ol>

                <p className="font-bold mt-2 text-[#003366]">Course Fees, Payments and Refunds</p>
                <p>Students are provided with the refund policy and student enrolment form prior to enrolment. Refund information is always available from the CEO.</p>
                <ol className="list-decimal pl-4 flex flex-col gap-1">
                  <li>Fee Refund Applications are considered on a case-by-case basis.</li>
                  <li>The request for refund is made in writing to the CEO using the Fee Refund Application which is available upon request from the CEO.</li>
                  <li>The CEO is the person responsible for approval of fee refund applications.</li>
                  <li>Course cancellation after acceptance by Safety Training Academy may occur up to 7 days prior to commencement of the course without penalty and must be made in writing, by email or by fax. A full refund minus the non-refundable enrolment fee will be paid with notice of 7 days or more.</li>
                  <li>Course cancellation with less than 7 days' notice after acceptance by Safety Training Academy will not result in any refund.</li>
                  <li>Accepted students who withdraw after course commencement owing to unforeseen or exceptional circumstance can apply for fee refund. If granted, fees will be refunded on a pro-rata basis (based on the number of days remaining in the course).</li>
                  <li>Safety Training Academy defaults if a course does not commence on the designated day or is actually cancelled. No student will be disadvantaged.</li>
                  <li>Fee refunds will be made within 14 days after demand when Safety Training Academy defaults and within 28 days after demand when the student defaults.</li>
                  <li>Safety Training Academy's dispute resolution processes do not circumscribe the student's right to pursue other legal remedies. This agreement does not remove the right of either party to take further action under Australia's consumer protection laws for unpaid and overdue fees.</li>
                  <li>Students may contact the Australian Skills Quality Authority to make a formal complaint.</li>
                  <li>This refund policy is subject to review from time to time in accordance with the change to conditions policy outlined below.</li>
                  <li>Students have a right to obtain a refund for services not provided by Safety Training Academy in the event the arrangement is terminated early or Safety Training Academy fails to provide the agreed services.</li>
                  <li>Please refer to the course flyer for information on course fees, including any required deposit; administration fees; materials fees and any other charges (if applicable).</li>
                  <li>Safety Training Academy will not collect more than $1,500 prior to course commencement.</li>
                  <li>Certificates and Statements of Attainment are issued to students who are assessed as competent in the units completed. The cost of the certificates is included in the course fees.</li>
                </ol>
              </div>
            </div>

          </div>

          {/* Footer Page 14 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 9 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 15 (Enrolment Form Page 10 - Terms & Conditions 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 p-4 text-[#003366]">
              
              <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
                <ol className="list-decimal pl-4 flex flex-col gap-1" start="16">
                  <li>Refunds may be made in the following circumstances:
                    <ol className="list-[lower-alpha] pl-4">
                      <li>Participants have overpaid the administration charge</li>
                      <li>Participants enrolled in training that has been terminated by Safety Training Academy</li>
                      <li>Participant advises Safety Training Academy prior to course commencement that they are withdrawing from the course</li>
                      <li>If the participant withdraws from a course, prior to course commencement, due to illness or extreme hardship as determined by the Safety Training Academy</li>
                      <li>In the event that the Safety Training Academy fails to provide the agreed services</li>
                    </ol>
                  </li>
                  <li>A deposit of no more than $1,500 is required prior to course commencement; this deposit is to confirm a place in the course. Please refer to the Course Flyer for the deposit amount required.</li>
                  <li>No refunds will be issued once the course has commenced</li>
                  <li>Students are responsible for the safe storage of their Certificate and Statements of Attainment. If a student requires a reissue of their Certificate Statement of Attainment, a <strong>certificate re-issue fee of $50</strong> will be charged.</li>
                  <li>If a student is deemed not yet competent on completion of training, they will be offered an opportunity to be reassessed. If a student is deemed not yet competent a second time, they will be given another opportunity for reassessment.</li>
                </ol>

                <p className="font-bold mt-2 text-[#003366]">Recording:</p>
                <p>The complaint will be recorded in the Register of Complaints by the Administration Manager.</p>
                <p>A copy of all the documentation, in particular the complaint and its outcome, is placed in the student's file. A copy of the documentation is forwarded to the complainant.</p>
                <p>Where the resolution requires a documented change to policies and procedures, the CEO notifies the appropriate staff member of the change to ensure that the procedure for document change as listed in the procedure for Document Control is followed with the appropriate records made.</p>
                <p>In the event that a complaint is substantiated, Safety Training Academy will take prompt and appropriate action to resolve the circumstances.</p>
                <br/>
                <p>Complaints cannot be anonymous because this is considered unfair in that ongoing discussion cannot take place to resolve the issue between both parties. Information submitted to a trainer or any staff member is treated with respect and taken as an opportunity for improvement to the organisation's practices and Quality Management System.</p>
                <p>Privacy requirements and student/ individual rights are maintained at all times.</p>
                <p>If the student chooses to access our complaints and appeals processes, Safety Training Academy will maintain the student's enrolment while the complaints and appeals process is ongoing.</p>
                <p>*NOTE: We aim to finalise any complaints and appeals within 60 days of the initial lodgement. If the compliant cannot be finalised within the 60 days, we will notify the complainant in writing why it has not been finalised and any other information they can provide at the time to assist the complainant.</p>
                
                <p className="font-bold mt-4 text-[#003366]">APPEALS</p>
                <p>If you are not happy with the outcome of a complaint then the following appeal process is followed.</p>
                <p>The appeal is discussed directly with the CEO. If this does not resolve the matter then the appeal is to be documented and submitted to trigger mediation by using either a simple written letter or a copy of the complaints and appeals form.</p>
                <p>The CEO records the student's dispute in the Register for Continuous Improvement and puts written notification on the students file and organises attendance by the student as Safety Training Academy representatives at the local court to meet with the VET Ombudsman representative. These are trained mediators, familiar with the alternative dispute resolution mediation process. The process is also without cost.</p>
              </div>
            </div>

          </div>

          {/* Footer Page 15 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 10 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 16 (Enrolment Form Page 11 - Appeals & Reassessments) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 p-4 text-[#003366]">
              
              <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
                <p>You can also contact the Ombudsman</p>
                <a href="https://www.ombudsman.gov.au/" className="underline text-blue-600">https://www.ombudsman.gov.au/</a>
                <p>NOTE: The National Training Complaints Hotline is accessible on 13 38 73 (Monday to Friday from 8am to 6pm nationally) or via email at <a href="mailto:skilling@education.gov.au" className="underline text-blue-600">skilling@education.gov.au</a></p>
                <br/>
                <p>An appellant may deliver their own version of the matter to the mediator and request a support person be present. The rules of alternative dispute resolution apply.</p>
                <br/>
                <p>The matter should then consider the issues raised an attempt to resolve the appeal to the satisfaction of the appellant. All appeals of complaints that are found to be proven must be acted upon through the continuous improvement process to make systematic changes to prevent the recurrence of this a problem again</p>
                <p>The final agreement achieved through the alternative dispute resolution process is put into court orders which bind the parties to the agreed resolution. There is no further appeal mechanism beyond this point. The student may always revert to common law. Each step of the complaints and appeals process will allow the student to make representation either orally or in writing prior to reaching a decision.</p>
                <p>If the student has complaints that do not directly concern but may affect their ability to achieve competency, they shall be referred to appropriate external support groups for assistance</p>
                
                <p className="font-bold mt-2 text-[#003366]">APPEALS AGAINST ASSESSMENT OUTCOMES: REASSESSMENTS</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants to appeal their assessments and recognition decisions. Appeals are ideally resolved as amicably as possible using this formal appeal process.</p>
                <p>Step 1:<br/>Discuss the matter with your assessor and explain the reason why you believe the assessment outcome is unfair. If you are not satisfied with the discussion, then go to Step 2.</p>
                <br/>
                <p>Step 2:<br/>Lodge a written appeal to the Administration Manager by completing a Complaints and Appeals form (Form 06). The Administration Manager will forward the appeal to the CEO who will commence investigation into the matter within 10 working days.</p>
                <p>The CEO will appoint a mutually agreed-upon, qualified and independent assessor to review the records of assessment of the student's competence against the training package requirements. Where insufficient records to determine competence are available, the student may provide additional evidence of competence. The independent assessor's determination is final.</p>
                <p>No further appeal mechanism exists beyond this point in the process.</p>
                <p>In most cases there will be no reassessment fee. If a reassessment fee is applicable, this fee will be included on the course flyer.</p>
                
                <p className="font-bold text-[#003366] text-center my-4 text-sm px-8">STA is responsible for providing you with quality training and assessment and the issuance of AQF certification documentation.</p>
                
                <p>If a student is required to be reassessed, they will be provided with further guidance from their trainer prior to reassessment.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Consumer Guarantee</p>
                <p>Safety Training Academy guarantees that the services provided by STA will be:</p>
                <ul className="list-disc pl-8 flex flex-col gap-1">
                  <li>provided with due care and skill</li>
                  <li>fit for any specified purpose (express or implied)</li>
                  <li>provided within a reasonable time (when no timeframe is set for the training).</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Footer Page 16 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 11 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 17 (Enrolment Form Page 12 - Terms & Conditions 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 p-4 text-[#003366]">
              <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
                
                <p className="font-bold text-[#003366]">Fee Protection</p>
                <p>Safety Training Academy requires a minimum deposit, which will not exceed $1,500 per individual student, prior to course commencement. If the full course fees are less than $1,500, the full fees may be required to be paid prior to course commencement. Please refer to the course flyers for deposits and course fees.</p>
                <p>Following course commencement, full fees will be required to be paid by either a payment plan (if remaining fees are over $1500), or in full (if the remaining fees are below $1500) for training and other services yet to be delivered.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Changes to Agreed Services</p>
                <p>Where there are any changes to the agreed services that will affect the learner, including in the event of Safety Training Academy closing down, we will advise the learner as soon as practicable. This includes changes to any new third party arrangements or a change of ownership or any changes to existing third party arrangements.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Complaints and Appeals</p>
                <p>If we do not resolve or finalise complaints or appeals within 60 days, the complainant will be notified in writing by the Administration Manager.</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants, staff and stakeholders to lodge complaints. Complaints are ideally resolved as amicably as possible using this formal appeal process. We will adhere to the National Complaints Code to respond to complaints about vocational education and the organisation itself. This means that our complaints process is:</p>
                <ul className="list-disc pl-6 sm:pl-8 flex flex-col gap-1">
                  <li>well publicised and explained;</li>
                  <li>accessible so you can lodge complaints and appeals by phone, electronically or in writing;</li>
                  <li>fair and protect your rights;</li>
                  <li>free so you can lodge a complaint without charge;</li>
                  <li>handled in a manner that protects your privacy;</li>
                  <li>transparent, equitable, objective and unbiased;</li>
                  <li>comprehensive so that it effectively resolves a variety of complaints such as student dissatisfaction, assessment outcomes, poor service, fraud, misconduct etc;</li>
                </ul>

                <p className="font-bold mt-2 text-[#003366]">Step 1:</p>
                <p>If the complaint is regarding a fellow student, you should first discuss the matter with the student and try to resolve it. If you are not able to resolve it, then you should discuss the problem with your trainer/assessor to try to resolve it. If you were not able to resolve it, go to step 2.</p>
                <p>If your complaint is regarding your trainer / assessor, or the organisation, then go straight to step 2.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Step 2:</p>
                <p>You should lodge a formal written complaint to the Administration Manager by completing a Complaints and Appeals form that can be obtained from the Administration Manager. The Administration Manager will acknowledge receipt of the formal complaint in writing and record the complaint in the Register of Complaints.</p>
                <p>Safety Training Academy will commence the complaints process within 10 working days of the formal lodgement of the complaint and supporting information. All reasonable measures are taken to finalise the process as soon as practicable.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Step 3:</p>
                <p>If the complaint was not able to be resolved to your satisfaction by the Administration Manager, then you must ask for the complaint to be escalated to the CEO. The Administration Manager will email your complaint to the CEO.</p>
                <p>The CEO will acknowledge receipt of the formal complaint in writing and commence investigation into the matter within 10 working days. The CEO is empowered to make a determination that is considered to be fair and equitable by both parties. The complainant has the right to have their version of events heard in the resolution negotiation and have an independent advocate present.</p>
                <p>Complaints are investigated fairly and objectively with details of the investigation provided in writing to the complainant. The details will state the outcomes and reasons for the decisions made.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Step 4:</p>
                <p>If you are still not satisfied with the outcome, the matter may be referred to an independent mediator such as the local National Training Complaints Hotline (133873) or the Department of Fair Trading for review.</p>

              </div>
            </div>

          </div>

          {/* Footer Page 17 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 12 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 18 (Enrolment Form Page 13 - Student Signature) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 p-4 text-[#003366]">
              <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
                
                <p className="font-bold text-[#003366]">Credit Transfer</p>
                <p>STA recognises the Australian Qualifications Framework and Vocational Education and Training (VET) qualifications and VET statements of attainment issued by any other Registered Training Organisation.</p>
                <p>Credit Transfer will be awarded for all units of competencies that directly align with units from the qualification the student has enrolled. Evidence of competences achieved must be supplied for recognition to be processed (ie presentation of original certificate or transcript).</p>
                <p>Please refer to the Student Handbook or contact the office for the procedure on how to apply for a Credit Transfer.</p>
                
                <p className="font-bold mt-2 text-[#003366]">Language, Literacy and Numeracy (LLN)</p>
                <p>LLN support is available to provide students with advice and support services in the provision of language, literacy and numeracy assessment services. Students needing assistance with their learning should be identified upon enrolment. Trainers and staff can provide students with support to assist the student throughout the learning process.</p>
                <p>Language, Literacy and Numeracy skills are generally included and identified in Training Products and accredited course programs. In identifying language, literacy and numeracy requirements, students' are required to have basic skills in:</p>
                <ul className="list-disc pl-6 sm:pl-8 flex flex-col gap-1">
                  <li>Count, check and record accurately</li>
                  <li>Read and interpret</li>
                  <li>Estimate, calculate and measure</li>
                </ul>
                
                <p className="font-bold mt-2 text-[#003366]">Support Services</p>
                <p>All staff at Safety Training Academy act as Student Support Officers and can refer students to external support providers where required. Safety Training Academy caters to diverse client learning needs and aims to identify and respond to the learning needs of all clients. Clients are encouraged to express their views about their learning needs at all stages of their learning experience from the initial enrolment and induction stage to course completion, through their trainer or staff. Safety Training Academy is committed to providing clients requiring additional support, advice or assistance while training. Please see the Student Handbook on the types of support provided.</p>

                <p className="font-bold mt-2 text-[#003366]">Legislative and Regulatory Requirements</p>
                <p>All students will undergo an induction, which will include the student's rights and responsibilities against the relevant Commonwealth, State or Territory legislation and regulatory requirements. Students are issued with a Student Handbook, which also includes the Student's rights and responsibilities that will affect their participation in vocational education and training.</p>
                <p>The student acknowledges that they must observe Safety Training Academy's policies and procedures, according to State and Federal Government legislative and regulatory requirements, as set out in the Student Handbook.</p>

                <p className="font-bold mt-2 text-[#003366]">IMPORTANT INFORMATION</p>
                <p>I have read and understand the terms and conditions of my enrolment, as stated above. I acknowledge and agree with the terms and conditions of enrolment with specific reference to the our enrolment and selection, USI, course fees, payments and refunds, course requirements, Language Literacy and Numeracy requirements, complaints and appeals, Workplace Health and Safety, support services that will be provided for me, legislative and regulatory policies and procedures, which are also provided to me in the Student Handbook. By signing this document I also give permission for STA to access my Unique Student Identifier for the purpose of my training.</p>
                
                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2">
                    <span className="font-bold whitespace-nowrap text-sm">STUDENT NAME:</span>
                    <input type="text" className="border-b border-[#003366] flex-1 bg-transparent outline-none pb-1" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-end flex-1 gap-2">
                      <span className="font-bold whitespace-nowrap text-sm">STUDENT SIGNATURE:</span>
                      <input type="text" className="border-b border-[#003366] flex-1 bg-transparent outline-none pb-1" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end w-full sm:w-[250px] gap-2">
                      <span className="font-bold whitespace-nowrap text-sm">DATE:</span>
                      <div className="border-b border-[#003366] flex-1 flex gap-1 justify-center text-gray-400 pb-1">
                        <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" />/
                        <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />/
                        <input type="text" className="w-12 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Page 18 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 13 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 19 (Enrolment Form Page 14 - Payment & Submission) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-8">
              <div className="bg-[#b3e5fc] border-b border-gray-400 font-bold p-2 text-sm sm:text-base text-[#003366]">
                Payment method:
              </div>
              <div className="p-4 flex flex-col lg:flex-row justify-between gap-4 text-[#003366]">
                <div className="flex gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <p>Bank : Commonwealth Bank</p>
                    <p><strong>Account Name:</strong> AIET College</p>
                    <p><strong>BSB :</strong> 062 141 &nbsp;&nbsp;&nbsp; <strong>Account No :</strong> 10490235</p>
                    <p>Transaction Description : Your Name / Invoice Number</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6 items-start mt-1 lg:mt-0">
                  <span className="hidden lg:inline">----</span>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black shrink-0" /> Cash</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 border-black shrink-0" /> Debit/CreditCard EFTPOS</label>
                </div>
              </div>
              <div className="px-4 pb-4 text-right text-[#003366]">
                <p>Australian International Education & Training Pty Ltd</p>
              </div>
            </div>

            {/* Application Submission */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 text-[#003366]">
              <div className="bg-[#b3e5fc] border-b border-gray-400 font-bold p-2 text-sm sm:text-base">
                APPLICATION SUBMISSION
              </div>
              <div className="p-4 flex flex-col gap-4">
                <p className="italic">Please return this completed application form with proof of ID to <strong>Australian International Education & Training</strong> (AIET) to enrol in your chosen qualification.</p>
                <p>Once your application has been received and is accepted as complete, you will be notified. If any information or evidence is missing you will be contacted to provide any further required information. This may delay your enrolment process.</p>
                
                <p className="italic">Australian International Education & Training Assessment Centre:</p>
                <ul className="list-disc pl-6 sm:pl-8 flex flex-col gap-2">
                  <li>Address: 3/14-16 Marjorie Street, Sefton NSW 2162</li>
                  <li>Email: Info@safetytrainingacademy.edu.au</li>
                  <li>Phone: 1300 976 097</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Footer Page 19 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-black pb-2">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            
            <div className="w-full flex justify-between mt-4">
              <p>Form 36.</p>
              <p>Page 14 of 14</p>
              <p>230802</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 20 (Training Agreement Page 1 - Rights & Obligations) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO 45234</p>
              </div>
            </div>
            
            <h2 className="text-center font-bold text-lg sm:text-xl mb-1">Training Agreement</h2>
            <p className="text-center font-bold mb-4 text-xs sm:text-sm">(To be completed by the participant at enrolment)</p>

            <div className="text-xs sm:text-sm flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-y-2 leading-relaxed text-xs sm:text-sm my-2">
                <span>I</span>
                <input type="text" className="border-b border-black outline-none flex-1 min-w-[200px] bg-transparent px-2 text-center" placeholder="(insert full legal name)" />
                <span>agree to undertake training with Australian International Education and Training ( AIET ) , in the following course:</span>
              </div>
              
              <h3 className="text-center font-bold text-sm sm:text-base my-2 text-[#003366] uppercase bg-gray-100 py-2 border border-gray-400 rounded px-2">
                RIICCM202E - Identify, locate and protect underground services
              </h3>

              <p>During the course of this program, I understand and acknowledge that:</p>
              
              <p className="font-bold">My rights and obligations, as defined in the Participant Handbook include:</p>
              <ol className="list-decimal pl-6 sm:pl-10 flex flex-col gap-2">
                <li>My obligation at all times to conduct myself safely and in adherence to all relevant legislation.</li>
                <li>I will actively attempt all training and assessment tasks with serious effort.</li>
                <li>That I will comply with all safe and lawful requests</li>
                <li>I will arrive on time and will return on time from all breaks.</li>
                <li>That I will not bully, abuse, vilify or fail to treat all people participating, associated with, or in the vicinity of AIET venues with the utmost respect and courtesy.</li>
              </ol>

              <p className="font-bold mt-2">Australian International Education and Training ( AIET) rights and obligations include:</p>
              <ol className="list-decimal pl-6 sm:pl-10 flex flex-col gap-2" start="6">
                <li>To provide quality training and assessment services, compliant to the NVR Standards, in a competent manner through the provision of quality resources and staff resulting in the issuance of AQF statement of attainment.</li>
                <li>Assessment be performed by qualified assessors with the required knowledge and currency in the needs of industry.</li>
                <li>Guaranteeing to provide assessment services to customers who have met their obligations with regard to completion of enrolment details, and financial payments</li>
                <li>Guaranteeing that in the event that Australian International Education and Training ( AIET) cannot deliver a course, a full refund of all monies paid to Australian International Education and Training ( AIET) will be refunded to the purchaser.</li>
                <li>Committing that training will not be offered to participants who fail to wear PPE or fail to pay for the course.</li>
                <li>Choosing to terminate a customer's training if they fail to uphold these standards</li>
                <li>Keeping participants informed of any changes in the service delivery including trainers, our ownership, the engagement of third parties or any other aspect of the participants training experience.</li>
              </ol>

              <p className="mt-4">Agreed to and accepted by Participant:</p>
              
              <div className="flex flex-col sm:flex-row justify-between items-end gap-6 my-6 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-end flex-1 w-full gap-2">
                  <span className="font-bold whitespace-nowrap">Signed:</span>
                  <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-1" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end flex-1 w-full gap-2">
                  <span className="font-bold whitespace-nowrap">Date:</span>
                  <div className="border-b border-black flex-1 flex gap-1 justify-center text-gray-400 pb-1">
                    <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" />/
                    <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />/
                    <input type="text" className="w-12 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                  </div>
                </div>
              </div>

              {/* Office Use Only Box */}
              <div className="border border-black mt-6 relative rounded p-4 pt-6">
                <div className="font-bold underline text-sm px-2 py-1 bg-white absolute -top-3 left-4">Office use only</div>
                <div className="flex flex-col gap-6 text-xs sm:text-sm">
                  <p>Agreed to and accepted by Australian International Education and Training ( AIET) Representative:</p>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-end flex-1 w-full gap-2">
                      <span className="whitespace-nowrap">Signed:</span>
                      <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-1" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end flex-1 w-full gap-2">
                      <span className="whitespace-nowrap">Date:</span>
                      <div className="border-b border-black flex-1 flex gap-1 justify-center text-gray-400 pb-1">
                        <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" />/
                        <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />/
                        <input type="text" className="w-12 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end w-full sm:w-2/3 gap-2">
                    <span className="whitespace-nowrap">Print Name:</span>
                    <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-1" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Page 20 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p className="underline mb-2 text-center text-[8px] sm:text-[10px]">3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            
            <div className="w-full flex justify-between mt-2">
              <p>Issue Date : 230831</p>
              <p>Page 1 of 4</p>
              <p></p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 21 (Training Agreement Page 2 - Participant Record) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO 45234</p>
              </div>
            </div>
            
            <h2 className="text-center font-bold text-lg sm:text-xl mb-6">Participant record of Training</h2>

            {/* Participant Details */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-300 border-b border-gray-400 font-bold p-2">
                Participant details
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
                <div className="w-full sm:w-[170px] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center justify-between gap-2">
                  <span>D.O.B:</span>
                  <div className="flex gap-1 items-center flex-1 text-gray-400 justify-end sm:justify-center">
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" /> /
                    <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                  </div>
                </div>
                <div className="w-full sm:w-[120px] p-2 flex items-center justify-between sm:justify-center gap-2">
                  <span>Sex:</span>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="sex" value="M" /> M</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="radio" name="sex" value="F" /> F</label>
                  </div>
                </div>
              </div>
              <div className="p-2 border-b border-gray-400 flex flex-col sm:flex-row gap-2 min-h-[40px] items-start sm:items-center">
                <span className="whitespace-nowrap">Address:</span>
                <input type="text" className="w-full bg-transparent outline-none" />
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Phone:</span>
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
                <div className="flex-1 p-2 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Email:</span>
                  <input type="email" className="w-full bg-transparent outline-none" />
                </div>
              </div>
            </div>

            {/* Training Log */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-300 border-b border-gray-400 font-bold p-2">
                Training Log:
              </div>
              <div className="flex bg-gray-100 border-b border-gray-400 text-center font-semibold">
                <div className="w-[90px] sm:w-[120px] p-2 border-r border-gray-400 whitespace-nowrap">Training Date</div>
                <div className="flex-1 p-2 border-r border-gray-400">Participant full Name</div>
                <div className="flex-1 p-2">Participant Signature</div>
              </div>
              {[1, 2, 3, 4, 5].map((row, idx) => (
                <div key={idx} className="flex border-b last:border-b-0 border-gray-400 min-h-[36px]">
                  <div className="w-[90px] sm:w-[120px] p-2 border-r border-gray-400 flex items-center justify-center text-gray-400">
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400 min-w-0" maxLength="2" placeholder="DD" /> /
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />
                  </div>
                  <div className="flex-1 p-1 border-r border-gray-400">
                    <input type="text" className="w-full h-full bg-transparent outline-none px-2 min-w-0" />
                  </div>
                  <div className="flex-1 p-1">
                    <input type="text" className="w-full h-full bg-transparent outline-none px-2 min-w-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* Resources & Summary */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mt-6">
              <div className="bg-gray-300 border-b border-gray-400 font-bold p-2">
                Resources
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-400">
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" /> PowerPoint presentation
                </div>
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" /> Learner Guide
                </div>
                <div className="p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" /> Practical tasks
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-400">
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" /> Training Videos
                </div>
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" /> Review questions
                </div>
                <div className="p-2 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" /> 
                  <span className="whitespace-nowrap">Other:</span>
                  <input type="text" className="w-full bg-transparent outline-none border-b border-gray-400 px-1 min-w-0" />
                </div>
              </div>

              {/* Summary */}
              <div className="flex bg-gray-300 border-b border-gray-400 font-bold">
                <div className="flex-1 p-2 border-r border-gray-400">Summary</div>
                <div className="w-[100px] sm:w-[120px] p-2 text-center">Satisfactory?</div>
              </div>
              
              {/* Row 1: Header */}
              <div className="flex border-b border-gray-400 bg-gray-50">
                <div className="flex-1 p-2 border-r border-gray-400">The participant has:</div>
                <div className="w-[100px] sm:w-[120px] flex font-semibold">
                  <div className="flex-1 text-center p-2 border-r border-gray-400">Yes</div>
                  <div className="flex-1 text-center p-2">No</div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="flex border-b border-gray-200 min-h-[40px]">
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" />
                  <span>Attended PowerPoint Presentation /participated in PowerPoint Quiz</span>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-2">
                  <div className="flex-1 flex justify-center border-r border-gray-300 h-full items-center"><input type="checkbox" className="w-5 h-5 border-black shrink-0 cursor-pointer" /></div>
                  <div className="flex-1 flex justify-center h-full items-center"><input type="checkbox" className="w-5 h-5 border-black shrink-0 cursor-pointer" /></div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex border-b border-gray-200 min-h-[40px]">
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" />
                  <span>Completed Questions (Knowledge assessment)</span>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-2">
                  <div className="flex-1 flex justify-center border-r border-gray-300 h-full items-center"><input type="checkbox" className="w-5 h-5 border-black shrink-0 cursor-pointer" /></div>
                  <div className="flex-1 flex justify-center h-full items-center"><input type="checkbox" className="w-5 h-5 border-black shrink-0 cursor-pointer" /></div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex border-b border-gray-400 min-h-[40px]">
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0 cursor-pointer" />
                  <span>Completed Practical tasks</span>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-2">
                  <div className="flex-1 flex justify-center border-r border-gray-300 h-full items-center"><input type="checkbox" className="w-5 h-5 border-black shrink-0 cursor-pointer" /></div>
                  <div className="flex-1 flex justify-center h-full items-center"><input type="checkbox" className="w-5 h-5 border-black shrink-0 cursor-pointer" /></div>
                </div>
              </div>

              {/* Row 5 (Notes) */}
              <div className="flex">
                <div className="flex-1 p-2 flex flex-col">
                  <span>Notes/comments:</span>
                  <textarea className="w-full bg-transparent outline-none min-h-[40px] mt-1 resize-y" rows="2"></textarea>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-end text-sm gap-6 sm:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-end flex-1 w-full gap-2">
                <span className="mr-2 whitespace-nowrap font-bold">Trainer's Name :</span>
                <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-1" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end flex-1 w-full gap-2">
                <span className="mr-2 whitespace-nowrap font-bold">Trainer's signature:</span>
                <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-1" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end w-full sm:w-[200px] gap-2">
                <span className="mr-2 whitespace-nowrap font-bold">Date:</span>
                <div className="border-b border-black flex-1 flex gap-1 justify-center text-gray-400 pb-1">
                  <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" />/
                  <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />/
                  <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 21 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p className="underline mb-2 text-center text-[8px] sm:text-[10px]">3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            
            <div className="w-full flex justify-between mt-2">
              <p>Issue Date : 230831</p>
              <p>Page 2 of 4</p>
              <p></p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 22 (Assessment Page 1 of 24 - Candidate Assessment Tool) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-[#a2add0] mb-8">
              
              <div className="bg-[#d9e2f3] border-b border-[#a2add0] font-bold p-4 text-center text-lg sm:text-xl text-[#1e3a8a]">
                Candidate Assessment Tool
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#d9e2f3] sm:w-[220px] p-4 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Assessment Type
                </div>
                <div className="flex-1 p-4 bg-white">
                  There are <strong>2 summative assessments</strong> for demonstration of competency for this unit. All assessments must be completed satisfactorily for the student to be determined as "competent". Students may re-sit either assessment once only, after which a performance review will be conducted
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#d9e2f3] sm:w-[220px] p-4 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Assessment Methods
                </div>
                <div className="flex-1 flex flex-col bg-white">
                  <div className="flex border-b border-[#a2add0]">
                    <div className="w-[120px] p-2 sm:p-4 font-bold border-r border-[#a2add0] bg-gray-50">Assessment 1</div>
                    <div className="flex-1 p-2 sm:p-4 font-bold">Written questions</div>
                  </div>
                  <div className="flex">
                    <div className="w-[120px] p-2 sm:p-4 font-bold border-r border-[#a2add0] bg-gray-50">Assessment 2</div>
                    <div className="flex-1 p-2 sm:p-4 font-bold">Practical Demonstration</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#d9e2f3] border-b border-[#a2add0] font-bold p-4 text-center text-base sm:text-lg text-[#1e3a8a]">
                Unit Summary
              </div>
              
              <div className="p-4 bg-white flex flex-col gap-4 text-gray-800 leading-relaxed">
                <p>This unit describes the skills and knowledge required to identify, locate and protect underground services in civil construction.</p>
                <p>It applies to those working in operational roles and overseeing construction work. They generally work under supervision and hold some responsibility for identifying, locating, and protecting underground services.</p>
                <p>No licensing, legislative or certification requirements apply to this unit at the time of publication.</p>
              </div>

              <div className="bg-[#d9e2f3] border-y border-[#a2add0] font-bold p-4 text-center text-base sm:text-lg text-[#1e3a8a]">
                Prerequisite
              </div>
              
              <div className="p-4 bg-white min-h-[80px] text-gray-800">
                <p>There are no recommended pre-requisite units for this competency.</p>
              </div>
            </div>

          </div>

          {/* Footer Page 22 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 1 of 30</p>
            <p>Participant assessment- STA -230830</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 23 (Assessment Page 2 of 24 - Instructions to Student) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-base sm:text-lg mb-6 text-[#1e3a8a]">
              <p>SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p>WRITTEN QUESTIONS</p>
              <p>INSTRUCTIONS TO STUDENT</p>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              
              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a]">
                Place and duration of assessment
              </div>
              <div className="p-4 bg-white border-b border-gray-400">
                <p className="text-gray-800 leading-relaxed">This is an open book assessment conducted in class that must be completed during the allocated assessment period. Students should allocate approximately 2 hours to complete this task.</p>
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-4">
                  <span className="font-bold text-gray-800">Assessment Due Date:</span>
                  <input type="text" className="border-b border-black w-full sm:w-[200px] bg-transparent outline-none pb-1" />
                </div>
              </div>

              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a]">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-4 bg-white border-b border-gray-400 flex flex-col gap-3 text-gray-800 leading-relaxed">
                <p>To receive a "Satisfactory" grade for this assessment you must:</p>
                <div className="flex items-start gap-2.5 ml-4">
                  <input type="checkbox" className="mt-1 w-4 h-4 cursor-pointer" />
                  <p>Complete all written questions.</p>
                </div>
                <div className="flex items-start gap-2.5 ml-4">
                  <input type="checkbox" className="mt-1 w-4 h-4 cursor-pointer" />
                  <p>All responses for each question must be marked as satisfactory by the assessor.</p>
                </div>
                <p className="mt-2">Before you commence the assessment, you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed "Satisfactory" against all performance criteria in all assessments by your assessor to be considered "Competent" in this Unit of Competency. Feedback will be given to you.</p>
              </div>

              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a]">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-4 bg-white border-b border-gray-400 text-gray-800 leading-relaxed">
                <p>Assessment processes and techniques will, as far as is practical, consider your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.</p>
                <p className="mt-3">If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
              </div>

              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a]">
                Assessor Intervention
              </div>
              <div className="p-4 bg-white flex flex-col gap-4 text-gray-800 leading-relaxed">
                <p>Assessors are to check that the student is ready for assessment and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.</p>
                <p>Feedback is to be given at the completion of the assessment using the feedback from the student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.</p>
                <p>Your student record must indicate that you have all the required skills and knowledge to complete the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. If the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.</p>
              </div>

            </div>

          </div>

          {/* Footer Page 23 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 2 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 24 (Assessment Page 3 of 24 - Student Identifier) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-base sm:text-lg mb-6 text-[#1e3a8a]">
              <p>SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p>WRITTEN QUESTIONS</p>
              <p>STUDENT IDENTIFIER</p>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-[#a2add0]">
              
              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Student's Name:
                </div>
                <div className="flex-1 p-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Assessor's Name:
                </div>
                <div className="flex-1 p-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Date of Assessment/Submission:
                </div>
                <div className="flex-1 p-3 bg-white flex gap-1 items-center text-gray-400">
                  <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                  <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" /> /
                  <input type="text" className="w-12 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Evidence
                </div>
                <div className="flex-1 p-3 bg-white text-gray-800">
                  <p className="mb-3 font-semibold">You will be required to submit the following evidence to be assessed:</p>
                  <label className="flex items-center gap-2.5 mb-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <span>Student Identifier</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                    <span>Completed written questions</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Definition
                </div>
                <div className="flex-1 p-3 bg-white text-gray-800 leading-relaxed">
                  <p>Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant's exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2 font-medium">
                    <li>Presenting any work by another individual as one's own unintentionally.</li>
                    <li>Handing in work markedly like or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0">
                  Declaration:
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col gap-4 text-gray-800">
                  <p>I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.</p>
                  <p className="font-semibold">I acknowledge that I am ready to undertake the assessment.</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-4">
                    <span className="font-bold min-w-[120px]">Student Signature</span>
                    <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-1" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-2">
                    <span className="font-bold min-w-[120px]">Date</span>
                    <div className="border-b border-black w-full sm:w-[200px] flex gap-1 items-center text-gray-400 pb-1">
                      <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                      <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" /> /
                      <input type="text" className="w-12 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 24 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 3 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 25 (Assessment Page 4 of 24 - Questions 1, 2, and 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-base sm:text-lg mb-6 text-[#1e3a8a]">
              <p>Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 1 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  1.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 2 ways you can make sure you meet your Duty of Care requirements to keep yourself and other workers safe?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] sm:min-h-[155px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  2.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Who should you confirm your work requirements with?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] sm:min-h-[155px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  3.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What can Work Method Statements be used for?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white flex flex-col gap-2">
                <ul className="list-none space-y-1 text-xs sm:text-sm font-semibold text-gray-700 pl-1">
                  <li>a. Jobs Safety Analyses (JSAs)</li>
                  <li>b. Job Safety Environmental Analyses (JSEAs)</li>
                  <li>c. Safe Work Method Statements (SWMSs)</li>
                </ul>
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] sm:min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 mt-1"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 25 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 4 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 26 (Assessment Page 5 of 24 - Questions 4, 5, 6, and 7) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  4.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What details are included in a Safety Data Sheet?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 5 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  5.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Where would you find methods that can be used to minimise the risk of hazards?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 6 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  6.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Who would you need to give your hazard report to?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 7 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  7.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are three (3) details that can be listed in an Environmental Management Plan?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 26 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 5 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 27 (Assessment Page 6 of 30 - Questions 8, 9, 10, and 11) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 8 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  8.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What type of traffic does a traffic management plan deal with?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 9 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  9.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What should you do if you are unsure of what a piece of equipment is capable of?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 10 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  10.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What should you do after you have identified and obtained records for search requirements?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 11 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  11.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Who will you need permission from before commencing work on the site?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 27 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 6 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 28 (Assessment Page 7 of 30 - Questions 12, 13, 14, and 15) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 12 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  12.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What details will be found on service markers?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 13 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  13.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Why do you need to contact the service owners and gain access to their plans?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 14 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  14.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What can you do to determine if the service is where it is supposed to be?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 15 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  15.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  If you are unsure of the operational procedures to be used for the search, what should you do?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 28 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 7 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 29 (Assessment Page 8 of 30 - Questions 16, 17, and 18) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 16 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  16.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are the following detectors used to locate?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white flex flex-col gap-2">
                <ul className="list-none space-y-1 text-xs sm:text-sm font-semibold text-gray-700 pl-1">
                  <li>a. Magnetic-field detector</li>
                  <li>b. Ground penetrating radar</li>
                </ul>
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[90px] sm:min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 mt-1"
                />
              </div>
            </div>

            {/* Question 17 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  17.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Which services do the following colours mark?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white flex flex-col gap-2">
                <ul className="list-none space-y-1 text-xs sm:text-sm font-semibold text-gray-700 pl-1">
                  <li>a. Green:</li>
                  <li>b. White:</li>
                  <li>c. Orange:</li>
                  <li>d. purple:</li>
                </ul>
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[90px] sm:min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 mt-1"
                />
              </div>
            </div>

            {/* Question 18 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  18.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Why would you need to establish a digital or hard copy file of asset/service location?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 29 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 8 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 30 (Assessment Page 9 of 30 - Questions 19, 20, 21, and 22) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 19 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  19.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What does supporting the services involve?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 20 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  20.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What is the main aim of protecting, supporting and moving services or utilities?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 21 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  21.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What action should you take as part of your duty of care when working near underground assets?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 22 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  22.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are two methods used for non-destructive excavation?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 30 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 9 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 31 (Assessment Page 10 of 30 - Questions 23, 24, and 25) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 23 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  23.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  If damage occurs to a service or utility, who should be immediately notified?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 24 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  24.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Where would you find information about which materials can be recycled?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 25 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  25.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  When should you file your work records with relevant road authorities
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 31 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 10 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 32 (Assessment Page 11 of 30 - Questions 26, 27, and 28) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 26 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  26.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What should you do while you are cleaning tools and equipment?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 27 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  27.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 3 types of reports might need to be processed at the end of your work?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 28 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  28.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 5 key indicators of work quality and accuracy when dealing with undergroud services?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type indicator here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Page 32 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 11 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 33 (Assessment Page 12 of 30 - Questions 29 and 30) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 29 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  29.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 5 material handling methods you may use when identifying, locating and protecting undergroud utilities?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type method here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Question 30 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  30.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 3 examples of traffic signs and barriers that may be used when completing your work task?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type sign or barrier here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Page 33 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 12 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 34 (Assessment Page 13 of 30 - Question 31) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 31 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  31.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Describe each of the key risks relating to identifying, locating and protecting underground services:
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              
              <div className="p-3 bg-white space-y-4">
                {[
                  { label: 'a. Traffic', placeholder: 'Describe risk relating to traffic...' },
                  { label: 'b. Live electrical services', placeholder: 'Describe risk relating to live electricity...' },
                  { label: 'c. Confined spaces', placeholder: 'Describe risk relating to confined spaces...' },
                  { label: 'd. Falls', placeholder: 'Describe risk relating to falls...' },
                  { label: 'e. Locating near other work in progress', placeholder: 'Describe risk relating to other work...' },
                  { label: 'f. Manual Handling', placeholder: 'Describe risk relating to manual handling...' },
                  { label: 'g. Gas', placeholder: 'Describe risk relating to gas...' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-b border-gray-150 pb-2 last:border-b-0">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-full sm:w-[220px] shrink-0">{item.label}</span>
                    <textarea 
                      placeholder={item.placeholder}
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800 resize-none min-h-[45px] sm:min-h-[50px] border border-gray-300 rounded p-1.5 focus:border-[#1e3a8a]"
                    />
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Footer Page 34 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 13 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 35 (Assessment Page 14 of 30 - Questions 32, 33, and 34) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 32 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  32.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 5 examples of equipment and tools required for service locations works?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type equipment or tool here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Question 33 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  33.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 3 ways you would check for faults in locating equipment?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type fault check method here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Question 34 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  34.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 3 ways to calibrate the locating equipment?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type calibration method here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Page 35 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 14 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 36 (Assessment Page 15 of 30 - Questions 35 and 36) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 35 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  35.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  List three (3) examples of materials that you would remove or recycle as part of clearing the work area.
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[120px] sm:min-h-[150px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 36 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  36.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 4 key steps involved in excavation works and 4 key steps in the process for the reinstatement of finished surfaces?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              
              <div className="p-3 bg-white flex flex-col md:flex-row gap-6">
                <div className="flex-grow flex-1 space-y-2 sm:space-y-3">
                  <p className="font-bold text-xs sm:text-sm text-[#1e3a8a] border-b border-[#1e3a8a] pb-1">Excavation:</p>
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                      <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                      <input 
                        type="text"
                        placeholder="Step description..."
                        className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-grow flex-1 space-y-2 sm:space-y-3">
                  <p className="font-bold text-xs sm:text-sm text-[#1e3a8a] border-b border-[#1e3a8a] pb-1">Finished Surfaces Reinstatement:</p>
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                      <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                      <input 
                        type="text"
                        placeholder="Step description..."
                        className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 36 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 15 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 37 (Assessment Page 16 of 30 - Questions 37 and 38) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 37 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  37.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 6 types of services and utilities relevant to your work?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type service or utility here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Question 38 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  38.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 5 examples of organisations and businesses that own the the different types of services and utilities?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type organisation or business here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Page 37 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 16 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 38 (Assessment Page 17 of 30 - Questions 39, 40, and 41) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 39 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  39.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are 4 considerations when working in a road reserve?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type consideration here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Question 40 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  40.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  Where would you find the relevant information and guidelines on the minimum clearance distances to a "No Go Zone" or "Exclusion Zone" around particular assets?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[70px] sm:min-h-[85px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 41 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  41.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What are three (3) rules for safe, non-destructive hand digging tools?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white space-y-2 sm:space-y-3">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center gap-2 border-b border-gray-200 py-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-700 w-4">{num}.</span>
                    <input 
                      type="text"
                      placeholder="Type rule here..."
                      className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Page 38 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 17 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 39 (Assessment Page 18 of 30 - Questions 42, 43, and Declaration) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 42 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  42.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  What does EPR mean in Earthing?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[85px] sm:min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 43 */}
            <div className="flex flex-col border border-gray-400 mb-8 rounded-sm overflow-hidden">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  43.
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  When do you have to consider the risk of EPR Zone?
                </div>
                <div className="w-10 sm:w-12 border-l border-gray-400 flex items-center justify-center shrink-0 bg-white">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-gray-400 rounded bg-white"></div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[85px] sm:min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* End of Knowledge Assessment Section */}
            <div className="text-center my-6">
              <h3 className="font-extrabold text-base sm:text-lg tracking-wide text-gray-800 mb-3">End of Knowledge Question</h3>
              <p className="text-xs sm:text-sm text-gray-700 max-w-[600px] mx-auto leading-relaxed">
                ❖ You have now completed the knowledge assessment. Submit this document to your trainer/assessor for marking.
              </p>
            </div>

            {/* Participant Declaration */}
            <div className="border border-gray-400 p-4 sm:p-6 rounded bg-gray-50 mt-4">
              <p className="font-bold text-xs sm:text-sm text-gray-800 mb-2">Participant Declaration:</p>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                I declare that the information contained above in the written assessment summary is accurate and is a true reflection of the underpinning written assessment I undertook.
              </p>
              <div className="flex flex-col gap-6 md:flex-row md:items-end">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-gray-500">Participant's Name</label>
                  <input type="text" className="border-b border-gray-400 outline-none bg-transparent py-1 text-xs sm:text-sm text-gray-800" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-gray-500">Signature</label>
                  <div className="border-b border-gray-400 py-1 min-h-[30px] flex items-end">
                    <span className="text-xs text-gray-400 italic">Sign here</span>
                  </div>
                </div>
                <div className="w-full md:w-[150px] flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-gray-500">Date</label>
                  <input type="text" placeholder="DD / MM / YYYY" className="border-b border-gray-400 outline-none bg-transparent py-1 text-xs sm:text-sm text-gray-800" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 39 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 18 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 40 (Assessment Page 19 of 30 - Summative Assessment Review) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="font-extrabold text-base sm:text-lg text-gray-800 uppercase tracking-wide">
                Summative Assessment 1: Assessment Review
              </h2>
            </div>

            {/* Assessment Review Table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6">
              
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[240px] bg-[#d9e2f3] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center text-gray-800">
                  Have the following evidence been attached
                </div>
                <div className="flex-1 p-3 bg-white space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span>Student identifier</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span>Completed Observation Checklist</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span>All other evidence</span>
                  </label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[240px] bg-[#d9e2f3] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center text-gray-800">
                  Summative Assessment 2 outcome:
                </div>
                <div className="flex-1 p-3 bg-white flex flex-wrap gap-6 text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span>Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span>Not satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[240px] bg-[#d9e2f3] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start pt-3 text-gray-800">
                  Feedback
                </div>
                <div className="flex-1 p-2 bg-white">
                  <textarea 
                    placeholder="Assessor feedback and comments..."
                    className="w-full min-h-[140px] sm:min-h-[160px] bg-transparent outline-none resize-none p-1 text-gray-800 text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[240px] bg-[#d9e2f3] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center text-gray-800">
                  Assessor Name:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm" />
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[240px] bg-[#d9e2f3] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center text-gray-800">
                  Assessor Signature:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <div className="w-full p-1 min-h-[25px] text-gray-400 italic">Signature area</div>
                </div>
              </div>

              {/* Row 6 */}
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[240px] bg-[#d9e2f3] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center text-gray-800">
                  Date:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 40 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 19 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 41 (Assessment Page 20 of 30 - Summative Assessment 2 Instructions) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center mb-6">
              <h2 className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide uppercase">
                SUMMATIVE ASSESSMENT 2 OF 2
              </h2>
              <h1 className="font-extrabold text-base sm:text-lg text-[#1e3a8a] tracking-wide uppercase mt-1">
                PRACTICAL DEMONSTRATION
              </h1>
              <h2 className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide uppercase mt-1">
                INSTRUCTIONS TO STUDENT
              </h2>
            </div>

            {/* Instruction Blocks */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm">
              
              {/* Block 1: Place and duration */}
              <div className="bg-[#b4c6e7] text-black font-bold p-2.5 border-b border-gray-400">
                Place and duration of assessment
              </div>
              <div className="p-3 bg-white text-gray-700 leading-relaxed border-b border-gray-400 space-y-3">
                <p>
                  This is a closed book assessment conducted in a simulated environment that must be completed during the allocated assessment period. Students should allocate approximately 1 hour to complete this task.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-bold text-gray-800">Assessment Due Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="border-b border-gray-400 bg-transparent outline-none px-2 w-[150px] text-xs sm:text-sm" />
                </div>
              </div>

              {/* Block 2: Competency Criteria */}
              <div className="bg-[#b4c6e7] text-black font-bold p-2.5 border-b border-gray-400">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-3 bg-white text-gray-700 leading-relaxed border-b border-gray-400 space-y-3">
                <p>To receive a “Satisfactory” grade for this assessment you must submit:</p>
                <div className="space-y-2 pl-2">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span className="font-semibold text-gray-800">Student identifier</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                    <span className="font-semibold text-gray-800">Completed Observation Checklist</span>
                  </label>
                </div>
                <p className="pt-2 border-t border-gray-100">
                  Before you commence the assessment, you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed “Satisfactory” against all performance criteria in all assessments by your assessor to be considered “Competent” in this Unit of Competency. Feedback will be given to you.
                </p>
              </div>

              {/* Block 3: Reasonable Adjustment */}
              <div className="bg-[#b4c6e7] text-black font-bold p-2.5 border-b border-gray-400">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-3 bg-white text-gray-700 leading-relaxed border-b border-gray-400 space-y-3">
                <p>
                  Assessment processes and techniques will as far as is practical take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.
                </p>
                <p>
                  If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.
                </p>
              </div>

              {/* Block 4: Assessor Intervention */}
              <div className="bg-[#b4c6e7] text-black font-bold p-2.5">
                Assessor Intervention
              </div>
              <div className="p-3 bg-white text-gray-700 leading-relaxed space-y-3">
                <p>
                  Assessors are to check that the student is ready for assessment and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.
                </p>
                <p>
                  Feedback is to be given at the completion of the assessment using the feedback from the student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.
                </p>
                <p>
                  Your student record must indicate that you have all the required skills and knowledge to complete the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. If the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.
                </p>
              </div>

            </div>

          </div>

          {/* Footer Page 41 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 20 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 42 (Assessment Page 21 of 30 - Summative Assessment 2 Form) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center mb-6">
              <h2 className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide uppercase">
                SUMMATIVE ASSESSMENT 2 OF 2
              </h2>
              <h1 className="font-extrabold text-base sm:text-lg text-[#1e3a8a] tracking-wide uppercase mt-1">
                PRACTICAL DEMONSTRATION
              </h1>
              <h2 className="font-extrabold text-sm sm:text-base text-gray-800 tracking-wide uppercase mt-1">
                STUDENT IDENTIFIER
              </h2>
            </div>

            {/* Styled Form Grid */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-8 bg-white">
              
              {/* Row: Student's name */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-center text-gray-800">
                  Student's Name:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm font-semibold" />
                </div>
              </div>

              {/* Row: Assessor's name */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-center text-gray-800">
                  Assessor's Name:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm" />
                </div>
              </div>

              {/* Row: Date of Assessment */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-center text-gray-800">
                  Date of Assessment/<br className="hidden md:inline" />Submission:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm" />
                </div>
              </div>

              {/* Row: Evidence */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-start text-gray-800">
                  Evidence
                </div>
                <div className="flex-1 p-3 bg-white space-y-2 text-gray-700 leading-relaxed">
                  <p>You will be required to submit the following evidence to be assessed:</p>
                  <div className="space-y-1.5 pl-2">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Student identifier</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Completed Observation Checklist</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row: Definition */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-start text-gray-800">
                  Definition
                </div>
                <div className="flex-1 p-3 bg-white text-gray-700 space-y-2.5 leading-relaxed">
                  <p>
                    Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant's exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Presenting any work by another individual as one's own unintentionally.</li>
                    <li>Handing in work markedly like or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              {/* Row: Declaration */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-start text-gray-800">
                  Declaration:
                </div>
                <div className="flex-1 p-3 bg-white text-gray-700 space-y-4 leading-relaxed">
                  <p>
                    I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.
                  </p>
                  <p className="font-semibold text-gray-800">
                    I acknowledge that I am ready to undertake the assessment.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end pt-2">
                    <div className="flex-1 flex items-center gap-2">
                      <span className="font-bold text-gray-800 shrink-0">Student Signature</span>
                      <div className="flex-grow border-b border-gray-400 min-h-[25px] flex items-end">
                        <span className="text-xs text-gray-400 italic">Signature area</span>
                      </div>
                    </div>
                    <div className="w-full sm:w-[150px] flex items-center gap-2">
                      <span className="font-bold text-gray-800 shrink-0">Date</span>
                      <input type="text" placeholder="DD / MM / YYYY" className="flex-grow bg-transparent border-b border-gray-400 outline-none text-xs sm:text-sm py-0.5 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center my-6">
              <h2 className="font-extrabold text-sm sm:text-base text-gray-800 uppercase tracking-wide">
                Summative Assessment 2: Practical Demonstration of Skill
              </h2>
            </div>

          </div>

          {/* Footer Page 42 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 21 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 43 (Assessment Page 22 of 30 - Instructions and Overview) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Task Overview */}
            <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
              
              <div>
                <p className="font-bold text-gray-800 text-sm mb-1.5">Task overview:</p>
                <p>
                  Identify, locate, and protect underground services on at least two occasions and on one of the occasions use an electromagnetic locating equipment to detect conductive underground services.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1e3a8a] text-sm mb-2">Task 1</p>
                <p className="mb-2">
                  Conduct a toolbox meeting with your assessor and other colleagues. During the toolbox talk you will be briefed on the practical tasks to be completed and required to plan for this task.
                </p>
                <p className="font-bold text-gray-800 mb-1.5">During the toolbox tell you will be required to:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Confirm task instructions and documentation necessary for task completion including policies and procedures.</li>
                  <li>Complete and sign off on JSA, SWMS and SDS.</li>
                  <li>Identify hazards and environmental issues and implemented on controls to eliminate or reduce risks, including traffic signage.</li>
                  <li>Select and check tools and equipment, including reporting and rectifying faults and defects as required.</li>
                  <li>Communicate work plans with other personnel in toolbox talk.</li>
                  <li>Select and wear suitable PPE required for work task.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-[#1e3a8a] text-sm mb-2">Task 2</p>
                <p className="mb-2">
                  Identify and locate the underground services by accessing the work area and conducting an initial site inspection.
                </p>
                <p className="font-bold text-gray-800 mb-1.5">When accessing the work area, you must:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Obtain information about the type and location of utilities, including:
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-gray-600">
                      <li>Obtain information on services and utilities from national referral service (DBYD).</li>
                      <li>Obtain service location information from service provider.</li>
                      <li>Obtain and confirm specific requirements for protecting services from service provider.</li>
                      <li>Check SDS for hazardous services on site.</li>
                    </ul>
                  </li>
                  <li>Determine the location, alignment, level, and grade of underground services from gathered information, and confirm through site inspection.</li>
                  <li>Undertake a visual inspection and physical inspection of this area.</li>
                  <li>Use electromagnetic locating equipment to detect conductive underground services.</li>
                  <li>Mark out positions of underground services using standard paint colours and symbols, and quality levels as required and report location of underground services.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-[#1e3a8a] text-sm mb-2">Task 3</p>
                <p className="font-bold text-gray-800 mb-1.5">Protect underground services by:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Advise other personnel on requirements for protecting assets and utilities.</li>
                  <li>Move or relocate services and protect and support them for the duration of the work.</li>
                  <li>Restore assets and backfill according to safety and owner requirements.</li>
                  <li>Notify authorities and owners once work is completed.</li>
                  <li>Clear the work area of rubbish and debris.</li>
                  <li>Clean, check and maintain all equipment used in accordance with manufacturer's instructions and procedures.</li>
                  <li>Implement control measures to mitigate any outstanding hazards.</li>
                  <li>Complete any workplace documentation required.</li>
                </ul>
              </div>

            </div>

            <div className="text-center my-6">
              <h2 className="font-extrabold text-sm sm:text-base text-gray-800 uppercase tracking-wide">
                Summative Assessment 2: Observation Checklist
              </h2>
            </div>

          </div>

          {/* Footer Page 43 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 22 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 44 (Assessment Page 23 of 30 - Observation Checklist Part 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Student/Assessor Info Grid */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="font-bold text-gray-800 shrink-0">Student's name:</span>
                  <input type="text" className="flex-grow bg-transparent outline-none py-1 text-gray-800" />
                </div>
                <div className="p-2 flex items-center gap-2">
                  <span className="font-bold text-gray-800 shrink-0">Assessor Name:</span>
                  <input type="text" className="flex-grow bg-transparent outline-none py-1 text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="font-bold text-gray-800 shrink-0">Location:</span>
                  <input type="text" className="flex-grow bg-transparent outline-none py-1 text-gray-800" />
                </div>
                <div className="p-2 flex items-center gap-2">
                  <span className="font-bold text-gray-800 shrink-0">Date of Assessment:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="flex-grow bg-transparent outline-none py-1 text-gray-800" />
                </div>
              </div>
              <div className="p-2 bg-gray-50">
                <p className="font-bold text-gray-800 mb-1">Description of task:</p>
                <p className="font-bold text-[#1e3a8a] pl-2 mb-1">Occasion 1:</p>
                <p className="text-gray-700 pl-4 mb-2">Using electromagnetic locating equipment to detect conductive underground services.</p>
                <div className="flex items-center gap-2 pl-2">
                  <span className="font-bold text-[#1e3a8a] shrink-0">Occasion 2:</span>
                  <input type="text" placeholder="Specify occasion 2 details..." className="flex-grow bg-transparent border-b border-gray-300 outline-none py-0.5 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Checklist Table Part 1 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm">
              
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-[1.2fr_95px_95px_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Did the student complete the following observable behaviours?</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 1 (Y/N)</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 2 (Y/N)</div>
                <div className="p-3 flex items-center justify-center">Assessor Comments</div>
              </div>

              {/* Task 1 Row Header */}
              <div className="bg-gray-100 font-extrabold text-xs sm:text-sm p-2.5 text-center border-b border-gray-400 text-[#1e3a8a]">
                Task 1 (Y/N | Y/N)
              </div>

              {/* Row 1 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">
                    The student correctly located and confirmed task instructions and information, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-600">
                    <li>Work requirements (JSA or SWMS).</li>
                    <li>Safety Data Sheet (SDS) And materials handling methods.</li>
                    <li>Australian Standards.</li>
                    <li>Policies and Procedures on site.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">
                    The student appropriately identified hazards and assessed their risk level for the following:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-600">
                    <li>Traffic-related hazard.</li>
                    <li>Electrical services-related hazard.</li>
                    <li>Confined spaces-related hazard.</li>
                    <li>Falls-related hazard.</li>
                    <li>Identify locating near another works-related hazard.</li>
                    <li>Manual handling-related hazard.</li>
                    <li>Gas-related hazard.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student appropriately identified and adhered to traffic signage requirements on the worksite, including Danger or warning signs like speed signs, ‘roadwork ahead’ or ‘reduce speed’ signs
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly selected equipment and tools required for service locating works.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-800 mb-1.5">Tick the equipment selected:</span>
                  <div className="grid grid-cols-2 gap-1.5 pl-1">
                    {['Shovels.', 'Picks.', 'Crowbars.', 'Other hand tools.', 'Tip trucks.', 'Excavators.', 'Backhoes.', 'Front-end loaders.'].map((eq, i) => (
                      <label key={i} className="flex items-center gap-1.5 cursor-pointer text-[11px]">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#1e3a8a]" />
                        <span>{eq}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 44 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 23 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 45 (Assessment Page 24 of 30 - Observation Checklist Part 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Checklist Table Part 2 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm">
              
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-[1.2fr_95px_95px_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Did the student complete the following observable behaviours?</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 1 (Y/N)</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 2 (Y/N)</div>
                <div className="p-3 flex items-center justify-center">Assessor Comments</div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly checked for faults in the equipment and tools and tagged out and reported to supervisor where issues were found
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 6 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student appropriately selected electromagnetic locating equipment for task.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-800 mb-1.5">Tick which equipment was selected:</span>
                  <div className="space-y-1 pl-1">
                    {['Metal detectors', 'Magnetic-field detectors', 'Radio frequency detectors', 'Transmitter-receivers', 'Ground penetrating radar'].map((eq, i) => (
                      <label key={i} className="flex items-center gap-2 cursor-pointer text-[11px]">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#1e3a8a]" />
                        <span>{eq}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 7 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">
                    The student correctly identified and applied environmental protection requirements for task, including for:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-600">
                    <li>Waste management.</li>
                    <li>Water quality protection.</li>
                    <li>Noise control.</li>
                    <li>Vibration control.</li>
                    <li>Dust management.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Task 2 Row Header */}
              <div className="bg-gray-100 font-extrabold text-xs sm:text-sm p-2.5 text-center border-b border-gray-400 text-[#1e3a8a]">
                Task 2 (Y/N | Y/N)
              </div>

              {/* Row 8 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly gained permission from site owner before commencing work
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 9 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student accurately obtained emergency numbers and contact details of service and utility owners.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 10 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly contacted DBYD to obtain information about service and utility location.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-800 mb-1.5">Tick the service and utilities applicable:</span>
                  <div className="grid grid-cols-2 gap-1.5 pl-1">
                    {['Oil.', 'Water.', 'Sewerage lines.', 'Phone.', 'Internet.', 'Power.', 'Rail line signals.', 'Drains & storm drains.'].map((eq, i) => (
                      <label key={i} className="flex items-center gap-1.5 cursor-pointer text-[11px]">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#1e3a8a]" />
                        <span>{eq}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 11 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly obtained and confirmed specific requirements for protecting services from service provider.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 12 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student appropriately checked SDS for hazardous services on site
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 45 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 24 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 46 (Assessment Page 25 of 30 - Observation Checklist Part 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Checklist Table Part 3 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm">
              
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-[1.2fr_95px_95px_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Did the student complete the following observable behaviours?</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 1 (Y/N)</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 2 (Y/N)</div>
                <div className="p-3 flex items-center justify-center">Assessor Comments</div>
              </div>

              {/* Row 13 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly determined the location, alignment, level and grade of underground services from gathered information, and confirm through site inspection.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 14 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly undertook either a visual or physical site inspection of work area
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-850 mb-1.5">Tick which method was used:</span>
                  <div className="space-y-2 pl-1 leading-normal">
                    <label className="flex items-start gap-2 cursor-pointer text-[11px] text-gray-600">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded mt-0.5 border-gray-300 accent-[#1e3a8a]" />
                      <span><strong>Visual:</strong> looking at the landscape for any signs of the services.</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer text-[11px] text-gray-600">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded mt-0.5 border-gray-300 accent-[#1e3a8a]" />
                      <span><strong>Physical:</strong> potholing or digging other holes in the ground where you suspect a service may be located.</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row 15 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly used electromagnetic locating equipment to detect conductive underground services
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 16 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly marked out positions of underground services and utilities by using standard paint colours, symbols and quality levels as applicable
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white text-[11px]">
                  <span className="font-bold text-gray-800 block mb-1">Assessor Comments:</span>
                  <p className="italic text-gray-600">Refer to Appendix A and B for standard paint colours, symbols and quality levels.</p>
                </div>
              </div>

              {/* Row 17 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student accurately reported location of underground services by establishing Dial Before You Dig report.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Task 3 Row Header */}
              <div className="bg-gray-100 font-extrabold text-xs sm:text-sm p-2.5 text-center border-b border-gray-400 text-[#1e3a8a]">
                Task 3 (Y/N | Y/N)
              </div>

              {/* Row 18 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    Advise other personnel on requirements for protecting assets and utilities.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-800 mb-1.5">Tick the protection method used:</span>
                  <div className="space-y-1.5 pl-1 leading-normal text-[11px] text-gray-600">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded mt-0.5 border-gray-300 accent-[#1e3a8a]" />
                      <span>protective wrapping or cover materials (PVC piping).</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded mt-0.5 border-gray-300 accent-[#1e3a8a]" />
                      <span>clearly marking location with tape/identifying marks.</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded mt-0.5 border-gray-300 accent-[#1e3a8a]" />
                      <span>shoring the trench (from above or below).</span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded mt-0.5 border-gray-300 accent-[#1e3a8a]" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row 19 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly identified and maintained asset specific clearance distances, adhering to SWMS, and safe excavation practices within the No Go Zone or Exclusion Zones.
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 20 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student accurately isolated work by using signage and barriers
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 21 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student appropriately advised non-destructive and manual excavation as required, using the following techniques when hand-digging:
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 46 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 25 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 47 (Assessment Page 26 of 30 - Observation Checklist Part 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Checklist Table Part 4 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm">
              
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-[1.2fr_95px_95px_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Did the student complete the following observable behaviours?</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 1 (Y/N)</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 2 (Y/N)</div>
                <div className="p-3 flex items-center justify-center">Assessor Comments</div>
              </div>

              {/* Behavior 21 Guidelines List */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">Specific guidelines followed when hand-digging:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Use round edge spades and shovels.</li>
                    <li>Do not use sharp pointed tools such as picks or crowbars.</li>
                    <li>Chosen tools should be non-conductive for safety.</li>
                    <li>Dig adjacent to the asset to expose it from the side rather than digging down.</li>
                    <li>Where possible, dig parallel to the line rather than across it.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 22 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly restored assets and backfilled according to safety and owner requirements including replacing all embedment material with the same material and provide compaction if the embedment material is disturbed. Hard or sharp objects, such as stones, must not be tipped into excavations
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 23 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student accurately advised road authority once work was complete (simulated)
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 24 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly notified to authorities and owners once work was completed (simulated)
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 25 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly reported any damage to services and utilities that occurred during the activity (simulated call to service owner) using clear and accurate terminology
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 26 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">
                    The student accurately cleared work area and disposed of and recycle materials as required, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-600">
                    <li>Removing all tools and equipment from work area.</li>
                    <li>Removing any hazard controls that are no longer needed such as temporary fences, barricades and signage.</li>
                    <li>Put any waste materials in the bins provided and recycle where possible in line with the site plans for environmental management or waste disposal.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 27 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">
                    The student appropriately cleaned, checked and maintained condition of equipment, and reported issues as required, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-600">
                    <li>Cleaning all items by removing dirt, mud, moisture or other contaminants.</li>
                    <li>Checking each item for damage or wear and tear.</li>
                    <li>Tagging, isolating and reporting any faults identified.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

              {/* Row 28 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex items-center">
                  <p className="font-semibold leading-relaxed">
                    The student correctly managed and reported hazards as required (verbal communication with supervisor)
                  </p>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-800 mb-1.5">Tick any of the outstanding hazards reported:</span>
                  <div className="space-y-1.5 pl-1 leading-normal text-[11px] text-gray-600">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Open excavations.</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Exposed services.</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Unstable ground conditions.</span>
                    </label>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 47 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 26 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 48 (Assessment Page 27 of 30 - Observation Checklist Final Page) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Checklist Table Page 27 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6">
              
              {/* Columns Header */}
              <div className="hidden md:grid grid-cols-[1.2fr_95px_95px_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Did the student complete the following observable behaviours?</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 1 (Y/N)</div>
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Occasion 2 (Y/N)</div>
                <div className="p-3 flex items-center justify-center">Assessor Comments</div>
              </div>

              {/* Row 29 */}
              <div className="flex flex-col md:grid md:grid-cols-[1.2fr_95px_95px_1fr] bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-gray-800 flex flex-col justify-center">
                  <p className="font-semibold mb-1">
                    The student accurately finalised and processed written records as required according to workplace procedures which may include:
                  </p>
                  <ul className="list-disc pl-5 space-y-0.5 text-gray-600">
                    <li>Computer readings.</li>
                    <li>Logs.</li>
                    <li>Shift documents.</li>
                    <li>Incident reports.</li>
                    <li>Fault reports.</li>
                  </ul>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 1:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 flex md:flex-col items-center justify-center gap-4 md:gap-1.5 shrink-0 bg-gray-50 md:bg-transparent">
                  <span className="font-bold text-gray-500 md:hidden">Occasion 2:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" /> No</label>
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center text-gray-700 bg-white">
                  <span className="font-bold text-gray-500 md:hidden mb-1">Assessor Comments:</span>
                  <textarea placeholder="Write comments..." className="w-full bg-transparent outline-none resize-none text-xs text-gray-800 min-h-[40px] md:min-h-0" />
                </div>
              </div>

            </div>

            {/* Feedback text area */}
            <div className="border border-gray-400 rounded-sm mb-6 bg-white overflow-hidden text-xs sm:text-sm">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800">
                Feedback to the student:
              </div>
              <textarea placeholder="Write feedback details..." className="w-full h-[120px] p-3 outline-none resize-none text-gray-800" />
            </div>

            {/* Outcome Selection */}
            <div className="border border-gray-400 rounded-sm mb-6 bg-white overflow-hidden text-xs sm:text-sm">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800">
                Outcome
              </div>
              <div className="p-4 flex flex-col sm:flex-row items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-green-700">
                  <input type="checkbox" className="w-5 h-5 accent-[#1e3a8a]" />
                  <span>Satisfactory</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-bold text-red-700">
                  <input type="checkbox" className="w-5 h-5 accent-[#1e3a8a]" />
                  <span>Not satisfactory</span>
                </label>
              </div>
            </div>

            {/* Signatures Tables */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm bg-white mb-6">
              
              {/* Row 1: Columns headers */}
              <div className="hidden md:grid grid-cols-[1.5fr_1.5fr_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400">
                <div className="p-2 border-r border-gray-400">Student name</div>
                <div className="p-2 border-r border-gray-400">Student Signature</div>
                <div className="p-2">Date</div>
              </div>

              {/* Row 2: Student details */}
              <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1.5fr_1fr] border-b border-gray-400 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="font-bold text-gray-500 md:hidden">Student Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none py-0.5 text-gray-850" />
                </div>
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="font-bold text-gray-500 md:hidden">Signature:</span>
                  <span className="text-xs text-gray-400 italic">Signature area</span>
                </div>
                <div className="p-2 flex items-center gap-2">
                  <span className="font-bold text-gray-500 md:hidden">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none py-0.5 text-gray-850" />
                </div>
              </div>

              {/* Row 3: Assessor Declaration Header */}
              <div className="bg-gray-150 font-bold p-2 text-gray-800 border-b border-gray-400 text-xs sm:text-sm">
                Assessor declaration
              </div>

              {/* Row 4: Assessor confirm message */}
              <div className="p-2 bg-gray-50 text-gray-700 border-b border-gray-400 text-xs leading-normal">
                I confirm that the information above is correct.
              </div>

              {/* Row 5: Columns headers Assessor */}
              <div className="hidden md:grid grid-cols-[1.5fr_1.5fr_1fr] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400">
                <div className="p-2 border-r border-gray-400">Assessor name</div>
                <div className="p-2 border-r border-gray-400">Assessor signature</div>
                <div className="p-2">Date</div>
              </div>

              {/* Row 6: Assessor Details */}
              <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1.5fr_1fr] bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="font-bold text-gray-500 md:hidden">Assessor Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none py-0.5 text-gray-850" />
                </div>
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="font-bold text-gray-500 md:hidden">Signature:</span>
                  <span className="text-xs text-gray-400 italic">Signature area</span>
                </div>
                <div className="p-2 flex items-center gap-2">
                  <span className="font-bold text-gray-500 md:hidden">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none py-0.5 text-gray-850" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 48 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 27 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 49 (Assessment Page 28 of 30 - Appendix A & B) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Appendix A Title */}
            <div className="text-center mb-4">
              <h3 className="font-extrabold text-sm sm:text-base text-gray-850 uppercase tracking-wide">
                Appendix A Site Survey Paint Colours and Symbols
              </h3>
            </div>

            {/* Appendix A Table */}
            <div className="w-full overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-400 text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white font-bold text-center border-b border-gray-400">
                    <th className="p-2.5 border-r border-gray-400 w-1/3">Colour</th>
                    <th className="p-2.5 border-r border-gray-400 w-1/6">Symbol</th>
                    <th className="p-2.5">Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-400 bg-white">
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">White</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 bg-white text-black font-extrabold text-sm">C</div>
                    </td>
                    <td className="p-2 text-gray-700">Communications</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Green</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#70ad47] text-white font-extrabold text-sm">D</div>
                    </td>
                    <td className="p-2 text-gray-700">Stormwater/raw water</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Orange</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ed7d31] text-white font-extrabold text-sm">E</div>
                    </td>
                    <td className="p-2 text-gray-700">Electricity</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Red</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ff0000] text-white font-extrabold text-sm">F</div>
                    </td>
                    <td className="p-2 text-gray-700">Fire Services</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Yellow</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ffc000] text-black font-extrabold text-sm">G</div>
                    </td>
                    <td className="p-2 text-gray-700">Gas</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Purple</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7030a0] text-white font-extrabold text-sm">R</div>
                    </td>
                    <td className="p-2 text-gray-700">Recycled water</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Pink</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ff00ff] text-white font-extrabold text-sm">U</div>
                    </td>
                    <td className="p-2 text-gray-700">Unidentified services</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-gray-400 font-semibold text-gray-700">Blue</td>
                    <td className="p-2 border-r border-gray-400 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00b0f0] text-white font-extrabold text-sm">W</div>
                    </td>
                    <td className="p-2 text-gray-700">Water</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Appendix B Title */}
            <div className="text-center mb-4">
              <h3 className="font-extrabold text-sm sm:text-base text-gray-850 uppercase tracking-wide">
                Appendix B Quality Levels and Symbols
              </h3>
            </div>

            {/* Appendix B Table */}
            <div className="w-full overflow-x-auto">
              <table className="min-w-full border border-gray-400 text-xs sm:text-sm text-left">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white font-bold text-center border-b border-gray-400">
                    <th className="p-2.5 border-r border-gray-400 w-1/4">Quality Level</th>
                    <th className="p-2.5 border-r border-gray-400 w-1/4">Symbol</th>
                    <th className="p-2.5">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-400 bg-white">
                  <tr>
                    <td className="p-3 border-r border-gray-400 text-center font-bold text-gray-800 bg-gray-50">A</td>
                    <td className="p-3 border-r border-gray-400 text-center font-semibold text-gray-700">QL-A</td>
                    <td className="p-3 text-gray-700 leading-normal">
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Sighted.</li>
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Highest accuracy.</li>
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Lowest risk.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-400 text-center font-bold text-gray-800 bg-gray-50">B</td>
                    <td className="p-3 border-r border-gray-400 text-center font-semibold text-gray-700">QL-B</td>
                    <td className="p-3 text-gray-700 leading-normal">
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Traced.</li>
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Relatively accurate.</li>
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Minimised risk.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-400 text-center font-bold text-gray-800 bg-gray-50">C</td>
                    <td className="p-3 border-r border-gray-400 text-center font-semibold text-gray-700">QL-C</td>
                    <td className="p-3 text-gray-700 leading-normal">
                      <ul className="space-y-1">
                        <li className="flex items-start"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> <span>Aligned from surface features.</span></li>
                        <li className="flex items-start"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> <span>Relatively inaccurate.</span></li>
                        <li className="flex items-start"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> <span>Increased risk.</span></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-400 text-center font-bold text-gray-800 bg-gray-50">D</td>
                    <td className="p-3 border-r border-gray-400 text-center font-semibold text-gray-700">QL-D</td>
                    <td className="p-3 text-gray-700 leading-normal">
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Any other method.</li>
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Lowest accuracy.</li>
                        <li className="flex items-center"><span className="text-[#00b0f0] font-extrabold mr-1.5">◆</span> Highest risk.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer Page 49 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 28 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 50 (Assessment Page 29 of 30 - Assessment Review) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center mb-6">
              <h1 className="font-extrabold text-base sm:text-lg text-gray-800 tracking-wide uppercase">
                Summative Assessment 2: Assessment Review
              </h1>
            </div>

            {/* Assessment Review Grid */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6 bg-white">
              
              {/* Evidence Section */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-start text-gray-800">
                  Have the following evidence been attached
                </div>
                <div className="flex-1 p-3 bg-white space-y-2 text-gray-700 leading-relaxed">
                  <div className="space-y-1.5 pl-2">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Student identifier</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Completed Observation Checklist</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Completed SWMS (Appendix A)</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Completed Work at Heights Rescue Plan (Appendix B)</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1e3a8a]" />
                      <span>Completed Safety Harness Inspection Checklist (Appendix C)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Outcome Section */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-start text-gray-800">
                  Summative Assessment 2 outcome:
                </div>
                <div className="flex-1 p-3 bg-white flex flex-col sm:flex-row items-center gap-8 text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-green-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-red-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Not satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Feedback Section */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-start text-gray-800">
                  Feedback:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <textarea placeholder="Write feedback comments..." className="w-full min-h-[120px] bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm resize-none" />
                </div>
              </div>

              {/* Assessor Signature Row */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-center text-gray-800">
                  Assessor signature:
                </div>
                <div className="flex-1 p-3 bg-white flex items-end">
                  <span className="text-xs text-gray-400 italic">Signature area</span>
                </div>
              </div>

              {/* Assessor Name Row */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-center text-gray-800">
                  Assessor name:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm" />
                </div>
              </div>

              {/* Date Row */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[220px] bg-[#d9e2f3] p-3 font-bold border-b md:border-b-0 md:border-r border-gray-400 flex items-center text-gray-800">
                  Date:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none p-1 text-gray-800 text-xs sm:text-sm" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 50 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 29 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 51 (Assessment Page 30 of 30 - Summary of Assessment) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center mb-6">
              <h1 className="font-extrabold text-base sm:text-lg text-gray-850 tracking-wide uppercase">
                SUMMARY OF ASSESSMENT
              </h1>
            </div>

            {/* Callout box */}
            <div className="border-l-4 border-[#1e3a8a] bg-blue-50/50 p-4 rounded-r-sm mb-6 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              This form is to be completed by the assessor and used a final record of student competency being awarded by the trainer. All student submissions including any associated checklists (outlined below) are to be attached to this cover sheet before placing on the student's file. Student results are not to be entered onto the Student Database unless all relevant paperwork is completed and attached to this form.
            </div>

            {/* Student/Assessor Details Grid */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-gray-400">
                <div className="p-3 bg-[#d9e2f3] font-bold text-gray-800 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Student Name:
                </div>
                <div className="p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none p-1 text-gray-800 font-semibold" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-gray-400">
                <div className="p-3 bg-[#d9e2f3] font-bold text-gray-800 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Final Completion Date:
                </div>
                <div className="p-2 bg-white flex items-center">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none p-1 text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] bg-white">
                <div className="p-3 bg-[#d9e2f3] font-bold text-gray-800 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Assessor Name:
                </div>
                <div className="p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none p-1 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm bg-white mb-6">
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] bg-[#d9e2f3] font-bold text-gray-800 border-b border-gray-400 text-center">
                <div className="p-2.5 border-b md:border-b-0 md:border-r border-gray-400">Please attach the following documentation to this form</div>
                <div className="p-2.5">Indicate Result</div>
              </div>
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] border-b border-gray-400">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 font-semibold text-gray-700 flex items-center">
                  Assessment 1: Written Questions
                </div>
                <div className="p-3 flex items-center justify-around bg-gray-50 md:bg-transparent">
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-green-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-red-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Not Satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] border-b border-gray-400">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 font-semibold text-gray-700 flex items-center">
                  Assessment 2: Practical Demonstration
                </div>
                <div className="p-3 flex items-center justify-around bg-gray-50 md:bg-transparent">
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-green-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold text-red-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Not Satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] bg-blue-50/50 font-bold">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 text-[#1e3a8a] flex items-center">
                  Final Assessment Result for this unit
                </div>
                <div className="p-3 flex items-center justify-around bg-blue-50/30 md:bg-transparent">
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-extrabold text-green-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Competent</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs font-extrabold text-red-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a]" />
                    <span>Not Competent</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Assessor Comments Section */}
            <div className="border border-gray-400 rounded-sm mb-6 bg-white overflow-hidden text-xs sm:text-sm">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800">
                Comments:
              </div>
              <textarea placeholder="Write summary comments..." className="w-full h-[100px] p-3 outline-none resize-none text-gray-800" />
            </div>

            {/* Declaration Boxes */}
            <div className="space-y-4 text-xs sm:text-sm mb-6">
              
              {/* Student Declarations */}
              <div className="border border-gray-400 rounded-sm p-4 bg-white">
                <p className="font-bold text-gray-800 mb-1">Student</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  My performance in this unit has been discussed and explained to me.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <div className="flex-1 flex items-center gap-2">
                    <span className="font-bold text-gray-800 shrink-0">Signature:</span>
                    <div className="flex-grow border-b border-gray-400 min-h-[25px] flex items-end">
                      <span className="text-xs text-gray-400 italic">Signature area</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-[150px] flex items-center gap-2">
                    <span className="font-bold text-gray-800 shrink-0">Date</span>
                    <input type="text" placeholder="DD / MM / YYYY" className="flex-grow bg-transparent border-b border-gray-400 outline-none text-xs sm:text-sm py-0.5 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Assessor Declarations */}
              <div className="border border-gray-400 rounded-sm p-4 bg-white">
                <p className="font-bold text-gray-800 mb-1">Assessor</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I hereby certify that this student has been assessed by me and that the assessment has been carried out according to the required assessment procedures.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <div className="flex-1 flex items-center gap-2">
                    <span className="font-bold text-gray-800 shrink-0">Signature:</span>
                    <div className="flex-grow border-b border-gray-400 min-h-[25px] flex items-end">
                      <span className="text-xs text-gray-400 italic">Signature area</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-[150px] flex items-center gap-2">
                    <span className="font-bold text-gray-800 shrink-0">Date</span>
                    <input type="text" placeholder="DD / MM / YYYY" className="flex-grow bg-transparent border-b border-gray-400 outline-none text-xs sm:text-sm py-0.5 text-gray-800" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 51 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center border-t border-gray-100">
            <p className="font-bold">Page 30 of 30</p>
            <p>Participant assessment- STA -240213</p>
            <p>Australian International Education Training T/A Safety Training Academy.</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 52 (Evaluation Page 3 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center mb-6">
              <h1 className="font-extrabold text-base sm:text-lg text-gray-850 tracking-wide uppercase border-b pb-2 border-gray-200">
                Participant Course Completion Evaluation
              </h1>
            </div>

            {/* Important Instructions Box */}
            <div className="bg-blue-50/40 border border-blue-200 rounded-sm p-4 text-xs sm:text-sm text-gray-700 space-y-2 leading-relaxed mb-6">
              <p className="font-bold text-[#1e3a8a]">Important instructions</p>
              <p>
                Please tell us about your training. Your feedback plays an important role in developing the quality of your education. In this questionnaire, the term 'training' refers to learning experiences with your training organisation. The term 'trainer' refers to trainers, teachers, lecturers or instructors from your training organisation.
              </p>
              <p>
                Provide one response to each item on the form. Complete using a black or blue pen. Print neatly in CAPITAL letters, place a clear "X" inside each box.
              </p>
              <p>
                Leave the box blank if the statement does not apply. If you want to change your answer, fill in the entire box and mark the correct box with an 'X'.
              </p>
            </div>

            {/* Example Boxes */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border border-gray-400 p-3 rounded-sm bg-gray-50 text-xs sm:text-sm mb-6">
              <span className="font-bold shrink-0">Example:</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold"></div>
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold">X</div>
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold"></div>
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold"></div>
              </div>
              <div className="flex items-center gap-2 sm:ml-4">
                <div className="w-6 h-6 bg-black"></div>
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold">X</div>
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold"></div>
                <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center font-bold"></div>
              </div>
            </div>

            {/* Instructions Prompt */}
            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-1 mb-6 italic">
              <p className="font-bold not-italic">Instructions: <span className="font-normal text-gray-655">please indicate how much you agree with the following statements.</span></p>
              <p>This response can be completed and submitted anonymously, however this will restrict our ability to provide focused or remedial improvements in your particular situation.</p>
            </div>

            {/* Trainer & Date Fields */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-xs sm:text-sm">
              <div className="flex-1 flex items-center gap-2">
                <span className="font-bold text-gray-800 shrink-0">Trainer:</span>
                <input type="text" className="flex-grow border-b border-gray-400 outline-none text-xs sm:text-sm py-0.5" />
              </div>
              <div className="w-full sm:w-[220px] flex items-center gap-2">
                <span className="font-bold text-gray-800 shrink-0">Date:</span>
                <input type="text" placeholder="DD / MM / YYYY" className="flex-grow border-b border-gray-400 outline-none text-xs sm:text-sm py-0.5" />
              </div>
            </div>

            {/* Evaluation Checklist Part 1 */}
            <div className="border border-gray-400 rounded-sm overflow-hidden bg-white flex flex-col">
              
              {/* Desktop Header */}
              <div className="hidden md:grid grid-cols-[1.5fr_85px_85px_85px_85px] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center text-xs">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Please tick the appropriate response.</div>
                <div className="p-2 border-r border-gray-400 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Strongly</span>
                  <span>Disagree</span>
                </div>
                <div className="p-2 border-r border-gray-400 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Disagree</span>
                </div>
                <div className="p-2 border-r border-gray-400 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Agree</span>
                </div>
                <div className="p-2 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Strongly</span>
                  <span>Agree</span>
                </div>
              </div>

              {/* Loop statements 1 to 19 */}
              {evaluationStatementsPage1.map((item) => (
                <React.Fragment key={item.id}>
                  {/* Desktop view row */}
                  <div className="hidden md:grid grid-cols-[1.5fr_85px_85px_85px_85px] border-b border-gray-400 last:border-b-0 hover:bg-gray-50/50">
                    <div className="p-3 border-r border-gray-400 font-medium text-gray-800 text-[11px] sm:text-xs">
                      {item.id}. {item.text}
                    </div>
                    <div className="p-2 border-r border-gray-400 flex items-center justify-center bg-gray-50/30">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                    <div className="p-2 border-r border-gray-400 flex items-center justify-center bg-gray-50/30">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                    <div className="p-2 border-r border-gray-400 flex items-center justify-center bg-gray-50/30">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                    <div className="p-2 flex items-center justify-center bg-gray-50/30">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                  </div>

                  {/* Mobile view row */}
                  <div className="flex flex-col md:hidden p-3 border-b border-gray-300 last:border-b-0 hover:bg-gray-50/50 bg-white">
                    <p className="font-bold text-gray-800 text-xs mb-2">
                      {item.id}. {item.text}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Strongly Disagree
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Disagree
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Agree
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Strongly Agree
                      </label>
                    </div>
                  </div>
                </React.Fragment>
              ))}

            </div>

          </div>

          {/* Footer Page 52 */}
          <div className="text-[9px] text-black mt-auto pt-8 flex flex-col border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-1 text-center sm:text-left">
              <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-1 text-center sm:text-left text-[8px] text-gray-500">
              <p>3/14-16 Marjorie Street Sefton NSW 2162 | Ph: 1300 976 097 | email: info@Safetytrainingacademy.edu.au</p>
            </div>
            <div className="flex justify-between items-center w-full mt-2 text-[9px] font-bold text-gray-700">
              <p>Issue Date: 230831</p>
              <p>Page 3 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 53 (Evaluation Page 4 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Evaluation Checklist Part 2 */}
            <div className="border border-gray-400 rounded-sm overflow-hidden bg-white flex flex-col mb-6">
              
              {/* Desktop Header */}
              <div className="hidden md:grid grid-cols-[1.5fr_85px_85px_85px_85px] bg-[#d9e2f3] text-gray-800 font-bold border-b border-gray-400 text-center text-xs">
                <div className="p-3 border-r border-gray-400 flex items-center justify-center">Please tick the appropriate response.</div>
                <div className="p-2 border-r border-gray-400 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Strongly</span>
                  <span>Disagree</span>
                </div>
                <div className="p-2 border-r border-gray-400 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Disagree</span>
                </div>
                <div className="p-2 border-r border-gray-400 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Agree</span>
                </div>
                <div className="p-2 flex flex-col items-center justify-center text-[10px] leading-tight">
                  <span>Strongly</span>
                  <span>Agree</span>
                </div>
              </div>

              {/* Loop statements 20 to 40 */}
              {evaluationStatementsPage2.map((item) => (
                <React.Fragment key={item.id}>
                  {/* Desktop view row */}
                  <div className="hidden md:grid grid-cols-[1.5fr_85px_85px_85px_85px] border-b border-gray-400 last:border-b-0 hover:bg-gray-50/50">
                    <div className={`p-3 border-r border-gray-400 font-medium text-gray-800 text-[11px] sm:text-xs ${item.shaded ? 'bg-gray-150' : ''}`}>
                      {item.id}. {item.text}
                    </div>
                    <div className={`p-2 border-r border-gray-400 flex items-center justify-center ${item.shaded ? 'bg-gray-200' : 'bg-gray-50/30'}`}>
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                    <div className={`p-2 border-r border-gray-400 flex items-center justify-center ${item.shaded ? 'bg-gray-200' : 'bg-gray-50/30'}`}>
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                    <div className={`p-2 border-r border-gray-400 flex items-center justify-center ${item.shaded ? 'bg-gray-200' : 'bg-gray-50/30'}`}>
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                    <div className={`p-2 flex items-center justify-center ${item.shaded ? 'bg-gray-200' : 'bg-gray-50/30'}`}>
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] cursor-pointer" />
                    </div>
                  </div>

                  {/* Mobile view row */}
                  <div className={`flex flex-col md:hidden p-3 border-b border-gray-300 last:border-b-0 hover:bg-gray-50/50 ${item.shaded ? 'bg-gray-150' : 'bg-white'}`}>
                    <p className="font-bold text-gray-800 text-xs mb-2">
                      {item.id}. {item.text}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Strongly Disagree
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Disagree
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Agree
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-650">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#1e3a8a]" /> Strongly Agree
                      </label>
                    </div>
                  </div>
                </React.Fragment>
              ))}

            </div>

            {/* Comments block 1 */}
            <div className="border border-gray-400 rounded-sm mb-6 bg-white overflow-hidden text-xs sm:text-sm">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800 leading-normal">
                Please use this space to make any additional comments regarding the Training and Assessment processes:
              </div>
              <textarea placeholder="Write comments..." className="w-full h-[80px] p-3 outline-none resize-none text-gray-800" />
            </div>

            {/* Comments block 2 */}
            <div className="border border-gray-400 rounded-sm mb-6 bg-white overflow-hidden text-xs sm:text-sm">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800 leading-normal">
                And comments on client services:
              </div>
              <textarea placeholder="Write comments..." className="w-full h-[80px] p-3 outline-none resize-none text-gray-800" />
            </div>

          </div>

          {/* Footer Page 53 */}
          <div className="text-[9px] text-black mt-auto pt-8 flex flex-col border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-1 text-center sm:text-left">
              <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-1 text-center sm:text-left text-[8px] text-gray-500">
              <p>3/14-16 Marjorie Street Sefton NSW 2162 | Ph: 1300 976 097 | email: info@Safetytrainingacademy.edu.au</p>
            </div>
            <div className="flex justify-between items-center w-full mt-2 text-[9px] font-bold text-gray-700">
              <p>Issue Date: 230831</p>
              <p>Page 4 of 4</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
