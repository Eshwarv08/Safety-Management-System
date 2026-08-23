import React from 'react';
import roofWorkerImage from '../img/roof-worker.png';
import logoImage from '../img/logo.png';
import logoIconImage from '../img/logoicon.png';
import page3Image from '../img/pageno3.png';

export default function AssessmentCover() {
  return (
    <div className="flex flex-col bg-gray-100">
      
      {/* ======================= PAGE 1 ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px]">
          
          {/* Header Section (Logos) */}
          <div className="flex justify-center items-center mb-8 sm:mb-12 w-full px-4 sm:px-0">
            <img 
              src={logoImage} 
              alt="STA Safety Training Academy Logo" 
              className="w-full max-w-[280px] sm:max-w-[400px] h-auto object-contain"
            />
          </div>

          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
              Provide telecommunications services safely on roofs
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-black">
              ICTWHS201
            </h3>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-10 w-full">
            <img 
              src={roofWorkerImage} 
              alt="Safety Worker on Roof" 
              className="w-full max-w-[500px] h-[200px] sm:h-[350px] object-cover rounded shadow-sm border border-gray-100"
            />
          </div>

          {/* Form Table Section */}
          <div className="mb-8 w-full max-w-4xl mx-auto flex-1 overflow-hidden">
            <table className="w-full text-[11px] sm:text-base border-collapse border border-gray-400 table-fixed">
              <tbody>
                <tr>
                  <td className="w-[28%] sm:w-[25%] p-2 sm:p-3 font-bold border border-gray-400 bg-gray-50 text-center sm:text-left align-middle">Name:</td>
                  <td className="w-[36%] sm:w-[37.5%] p-2 sm:p-3 border border-gray-400 align-middle">
                    <input type="text" placeholder="First Name" className="w-full outline-none bg-transparent text-center text-gray-400 placeholder-gray-300" />
                  </td>
                  <td className="w-[36%] sm:w-[37.5%] p-2 sm:p-3 border border-gray-400 align-middle">
                    <input type="text" placeholder="Family Name" className="w-full outline-none bg-transparent text-center text-gray-400 placeholder-gray-300" />
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-bold border border-gray-400 bg-gray-50 text-center sm:text-left align-middle">Mobile No.</td>
                  <td colSpan="2" className="p-2 sm:p-3 border border-gray-400 align-middle">
                    <input type="text" className="w-full outline-none bg-transparent" />
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-bold border border-gray-400 bg-gray-50 text-center sm:text-left align-middle">Course Name:</td>
                  <td colSpan="2" className="p-2 sm:p-3 font-bold border border-gray-400 text-center sm:text-left align-middle leading-tight">
                    ICTWHS201- Provide Telecommunications Services Safely on roofs
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-bold border border-gray-400 bg-gray-50 text-center sm:text-left align-middle">Enrolment Date:</td>
                  <td colSpan="2" className="p-2 sm:p-3 border border-gray-400 text-center text-gray-300 font-medium align-middle">DD / MM / YYYY</td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 font-bold border border-gray-400 bg-gray-50 text-center sm:text-left align-middle">USI</td>
                  <td colSpan="2" className="p-2 sm:p-3 border border-gray-400 align-middle">
                    <input type="text" className="w-full outline-none bg-transparent" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Section */}
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-gray-800 mt-auto pt-6 w-full">
            <div className="text-left max-w-[60%]">
              <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
              <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
            </div>
            <div className="text-right flex flex-col items-end max-w-[40%]">
              <p className="mb-1 sm:mb-2 font-medium">1</p>
              <p>14-16 Marjorie street, Sefton NSW 2162</p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 2 ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="mb-6 px-2 sm:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 uppercase tracking-wide">
              LLN Test- ICTWHS201 – Provide telecommunication services safely on roofs
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-black uppercase">
              STUDENT<br/>INSTRUCTIONS
            </h3>
          </div>

          <div className="space-y-4 text-sm sm:text-[15px] leading-snug text-black mb-8 px-2 sm:px-8">
            <p>It is very important that you have the required LLN (Language – speaking, Literacy- reading and writing and Numeracy – calculation) skills to complete the training and achieve your desired vocational outcome.</p>
            <p>To assist you with determining if you have the required LLN skills, this LLN test is used</p>
            <p>Please complete all questions in the spaces provided and PLEASE WRITE CLEARLY USING AN INK PEN ONLY. At the end of the test, an Assessor will meet with you to discuss the results and to discuss your next best move.</p>
            <p>This test must be completed in the presence of a staff member. You have 15 minutes to complete this test</p>
            <p>Calculators may be used for the Numeracy questions</p>
            <p>Interpreters and assistants may not be used for this test ie this test MUST be read and completed in English only</p>
            <p>This test must be conducted on RTO premises, under direct supervision by RTO staff and by the student ONLY – without any assistance</p>
          </div>

          <div className="w-full px-2 sm:px-8 mb-8 flex-1">
            <table className="w-full text-[11px] sm:text-sm border-collapse border border-gray-400 table-fixed">
              <tbody>
                <tr>
                  <td className="w-[30%] p-2 font-bold border border-gray-400 bg-[#e6ebf5] align-middle">Student Name:</td>
                  <td className="w-[40%] p-2 border border-gray-400 align-middle"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td className="w-[10%] p-2 font-bold border border-gray-400 bg-[#e6ebf5] align-middle">Date:</td>
                  <td className="w-[20%] p-2 border border-gray-400 align-middle"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border border-gray-400 bg-[#e6ebf5] align-middle">Student Address</td>
                  <td className="p-2 border border-gray-400 align-middle"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td className="p-2 font-bold border border-gray-400 bg-[#e6ebf5] align-middle">Phone No</td>
                  <td className="p-2 border border-gray-400 align-middle"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border border-gray-400 bg-[#e6ebf5] align-middle">Training Applying For</td>
                  <td colSpan="3" className="p-2 border border-gray-400 align-middle"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-[11px] sm:text-sm border-collapse border border-gray-400 table-fixed text-center mt-[-1px]">
              <tbody>
                <tr>
                  <td colSpan="6" className="p-4 text-left border border-gray-400 bg-white">
                    <span className="font-bold">Numeracy:</span><br/>
                    <div className="ml-4 mt-1 font-bold">1. Write 1 correct answer for each calculation and enter in the space below</div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2" className="w-[16.66%] p-2 border border-gray-400 bg-[#d9d9d9] align-middle">Multiplication</td>
                  <td className="w-[16.66%] p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">25X5</td>
                  <td className="w-[16.66%] p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">48X2</td>
                  <td rowSpan="2" className="w-[16.66%] p-2 border border-gray-400 bg-[#d9d9d9] align-middle">Division</td>
                  <td className="w-[16.66%] p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">48/2</td>
                  <td className="w-[16.66%] p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">700/10</td>
                </tr>
                <tr>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                </tr>
                <tr>
                  <td rowSpan="2" className="p-2 border border-gray-400 bg-[#d9d9d9] align-middle">Addition</td>
                  <td className="p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">756+44</td>
                  <td className="p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">85+35</td>
                  <td rowSpan="2" className="p-2 border border-gray-400 bg-[#d9d9d9] align-middle">Subtraction</td>
                  <td className="p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">85-40</td>
                  <td className="p-1 sm:p-2 border border-gray-400 bg-[#ebead6] align-middle">2569-69</td>
                </tr>
                <tr>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                  <td className="h-8 sm:h-10 border border-gray-400 bg-white"><input type="text" className="w-full h-full text-center outline-none bg-transparent"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 3 ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="px-2 sm:px-8 flex-1">
            <p className="text-sm sm:text-base text-black mb-6">
              <strong>2.</strong>Numeracy skills to locate and recognize numbers commonly used in safety signs
            </p>

            <div className="mb-6 flex justify-start">
              <img src={page3Image} alt="Safety signs conditions of entry" className="w-full max-w-[550px] h-auto object-contain border border-gray-300" />
            </div>

            <div className="space-y-6 text-sm sm:text-base text-black mb-10">
              <p className="flex flex-col sm:flex-row sm:items-center">
                <span>At this construction site what is the maximum speed limit:</span>
                <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 max-w-[200px] bg-transparent" />
              </p>

              <div>
                <p className="mb-4">
                  <strong>3.</strong>At the construction site the site manager has explained that entry to and working in confined spaces on the site can only occur between 10.00am and 1.00pm daily. It is 12.30pm and the worker requires 50 minutes to work in the confined space.
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center">
                  <span>Calculate at what time the worker will complete the job in the confined space:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 max-w-[200px] bg-transparent" />
                </p>
              </div>

              <div className="pt-4">
                <p className="mb-4">Literacy</p>
                <p className="mb-6">Read the following description and answer the questions below. All answers must be based solely on the information provided below</p>
                
                <div className="space-y-1 text-[13px] sm:text-[14.5px]">
                  <p>This unit describes a participant's skills and knowledge required to enter and work in confined spaces in construction sites</p>
                  <p>WHS Regulation clause 5</p>
                  <p>Definitions</p>
                  <p>A ‘confined space’ means an enclosed or partially enclosed space that:</p>
                  <p>– is not designed or intended to be occupied by a person</p>
                  <p>– is, or is designed or intended to be, at normal atmospheric pressure while any person is in the space; and</p>
                  <p>– is or is likely to be a risk to health and safety from:</p>
                  <ul className="list-none pl-4 space-y-1">
                    <li><span className="inline-block w-4">☐</span>an atmosphere that does not have a safe oxygen level, or</li>
                    <li><span className="inline-block w-4">☐</span>contaminants, including airborne gases, vapours and dusts, that may cause injury from fire or explosion, or</li>
                    <li><span className="inline-block w-4">☐</span>harmful concentrations of any airborne contaminants, or</li>
                    <li><span className="inline-block w-4">☐</span>engulfment.</li>
                  </ul>
                  <p className="pt-4">(Source: CODE OF PRACTICE CONFINED SPACES - SafeWork NSW)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-6 px-2 sm:px-8 w-full">
            <div className="text-left max-w-[70%]">
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 2 of 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 4 ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="px-2 sm:px-8 flex-1 text-sm sm:text-[15px] text-black">
            <div className="mb-6">
              <p className="mb-4">Q1: List 1 type of skill and knowledge that this training provides students with.</p>
              <div className="space-y-4">
                <div className="border-b border-dashed border-gray-500 w-full"></div>
                <div className="border-b border-dashed border-gray-500 w-[15%]"></div>
              </div>
            </div>

            <div className="mb-10">
              <p className="mb-4">Q2: List 2 types of harm that a confined space may pose for a worker</p>
              <div className="space-y-4">
                <div className="border-b border-dashed border-gray-500 w-full"></div>
                <div className="border-b border-dashed border-gray-500 w-[15%]"></div>
              </div>
            </div>

            <div className="mb-6">
              <p>Language</p>
              <p>Student Interview Questions - LLN</p>
            </div>

            <div className="mb-8">
              <p className="underline mb-6">The Assessor will ask you the following questions. Please answer (verbally) as clearly as possible</p>
              <p className="mb-6">Why do you want to do this training ?</p>
              <p className="mb-6">What do you think this training is about</p>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 border-b border-gray-400"></div>
              <span className="px-2 font-bold text-sm">END OF LLN TEST</span>
              <div className="flex-1 border-b border-gray-400"></div>
            </div>

            <div className="mb-8 font-bold">
              <p className="mb-6">By signing below, I verify that the above work is my own and has been completed independently.</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 mb-6">
                <div className="flex items-end w-full sm:w-[48%]">
                  <span className="uppercase whitespace-nowrap mr-2">LEARNER SIGNATURE:</span>
                  <input type="text" className="border-b-2 border-black flex-1 outline-none bg-transparent" />
                </div>
                <div className="flex items-end w-full sm:w-[48%]">
                  <span className="uppercase whitespace-nowrap mr-2">NAME (PRINTED):</span>
                  <input type="text" className="border-b-2 border-black flex-1 outline-none bg-transparent" />
                </div>
              </div>
              <div className="flex items-end w-full sm:w-[48%]">
                <span className="uppercase whitespace-nowrap mr-2">DATE:</span>
                <input type="text" className="border-b-2 border-black flex-1 outline-none bg-transparent" />
              </div>
            </div>

            <div className="text-center font-bold underline mb-4">ASSESSOR TO COMPLETE ONLY</div>

            <div className="mb-8">
              <table className="w-full text-[11px] sm:text-sm border-collapse border border-gray-800 table-fixed text-center">
                <thead>
                  <tr>
                    <th className="w-[45%] p-2 border border-gray-800 bg-white">Outcome of LLN Test</th>
                    <th className="w-[25%] p-2 border border-gray-800 bg-white">Assessor<br/>Comments</th>
                    <th className="w-[30%] p-2 border border-gray-800 bg-white">Outcome<br/><span className="italic font-normal">(Please circle)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-800 align-top">Applicant DOES have<br/>the LLN skills to undertake training<br/>in this course</td>
                    <td className="p-3 border border-gray-800 align-middle"><textarea className="w-full h-full min-h-[60px] resize-none outline-none bg-transparent"></textarea></td>
                    <td rowSpan="2" className="p-3 border border-gray-800 align-middle">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div>S<br/>(Satisfactory)</div>
                        <div>NYS<br/>(Not Yet Satisfactory)</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-800 align-top">If the Assessor is NOT recommending<br/>that the registration continues – what strategy<br/>does the Assessor<br/>recommend for the applicant to increase<br/>their chance of future success</td>
                    <td className="p-3 border border-gray-800 align-middle"><textarea className="w-full h-full min-h-[60px] resize-none outline-none bg-transparent"></textarea></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-3 border border-gray-800 text-left bg-white">Trainer Name <input type="text" className="ml-2 w-1/2 outline-none border-b border-gray-400 bg-transparent"/></td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-3 border border-gray-800 text-left h-16 align-top bg-white">Trainer Sign & Date <input type="text" className="ml-2 w-1/2 outline-none border-b border-gray-400 bg-transparent"/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-4 px-2 sm:px-8 w-full">
            <div className="text-left max-w-[70%]">
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 3 of 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 5 ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="border border-gray-500 py-10 px-8 sm:px-16 w-full max-w-lg mx-auto text-center">
              <div className="border-t-2 border-[#1e3a8a] mb-6 w-full"></div>
              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-black mb-6">PLEASE BEGIN WITH ENROLMENT</h2>
              <div className="border-b-2 border-[#1e3a8a] w-full"></div>
            </div>
          </div>
          
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-4 px-2 sm:px-8 w-full">
            <div className="text-left max-w-[70%]">
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 4 of 4</p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 6 ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <p className="text-[11px] sm:text-xs italic font-bold mb-4">PLEASE COMPLETE ALL SECTIONS clearly and carefully by writing in BLOCK LETTERS using a black or blue pen.</p>
            <h3 className="text-sm sm:text-base font-bold mb-2">SECTION 1 – APPLICANT INFORMATION</h3>

            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th colSpan="8" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">APPLICANT DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="p-2 border border-gray-400">Please complete <span className="font-bold">full name and date of birth as listed on your ID documents</span></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 w-[25%]">Title (please tick)</td>
                  <td colSpan="6" className="p-2 border border-gray-400 w-[75%]">
                    <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Mr</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Mrs</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Miss</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Ms</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Dr</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Other</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Surname</td>
                  <td colSpan="6" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Given name</td>
                  <td colSpan="3" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top">Middle name</td>
                  <td colSpan="2" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top h-10">Preferred name<br/>If different to above</td>
                  <td colSpan="3" className="p-2 border border-gray-400"><input type="text" className="w-full h-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top">Date of Birth<br/>Day/Month/Year</td>
                  <td colSpan="2" className="p-2 border border-gray-400 text-center text-gray-500 font-medium">/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /</td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Gender (please tick)</td>
                  <td colSpan="3" className="p-2 border border-gray-400">
                    <div className="flex gap-4 items-center">
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Male</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Female</label>
                    </div>
                  </td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top">Email</td>
                  <td colSpan="2" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Home Phone</td>
                  <td colSpan="3" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top">Work Phone</td>
                  <td colSpan="2" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Mobile Phone</td>
                  <td colSpan="6" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Residential Address</td>
                  <td colSpan="6" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 border-t-0"></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top w-[15%]">Suburb</td>
                  <td colSpan="2" className="p-2 border border-gray-400 w-[22.5%]"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top w-[10%]">State</td>
                  <td colSpan="1" className="p-2 border border-gray-400 w-[15%]"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top w-[12.5%] text-[9px] sm:text-[10px]">Postcode <input type="text" className="w-full outline-none bg-transparent inline-block"/></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">Postal Address</td>
                  <td colSpan="6" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top">If different from above</td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top">Suburb</td>
                  <td colSpan="2" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top">State</td>
                  <td colSpan="1" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td colSpan="1" className="p-2 border border-gray-400 align-top text-[9px] sm:text-[10px]">Postcode <input type="text" className="w-full outline-none bg-transparent inline-block"/></td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th colSpan="6" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">EMERGENCY CONTACT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-400 align-top w-[15%]">Full<br/>Name</td>
                  <td colSpan="2" className="p-2 border border-gray-400 w-[35%]"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td className="p-2 border border-gray-400 align-middle w-[15%] text-[9px] sm:text-[10px]">Relationship</td>
                  <td className="p-2 border border-gray-400 w-[15%]"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td className="p-2 border border-gray-400 align-middle w-[20%] text-[9px] sm:text-[10px]">Contact Number</td>
                </tr>
                <tr>
                  <td colSpan="6" className="p-2 border border-gray-400">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <span>In the event of an emergency do you give the STA permission to organise emergency transport and treatment and do you agree to pay all costs related to the emergency?</span>
                      <div className="flex gap-4 mt-2 sm:mt-0 flex-shrink-0">
                        <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> Yes</label>
                        <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-1"></span> No</label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-[10px] sm:text-[11px] border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">UNIQUE STUDENT IDENTIFIER (USI)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 sm:p-4 border border-gray-400 text-[#1a365d]">
                    <p className="mb-2">From 1 January 2015, Safety Training Academy can be prevented from issuing you with a nationally recognised VET qualification or statement of attainment when you complete your course if you do not have a Unique Student Identifier (USI). In addition, we are required to include your USI in the data we submit to NCVER. If you have not yet obtained a USI you can apply for it directly at <a href="https://www.usi.gov.au/students/create-your-usi" className="underline">https://www.usi.gov.au/students/create-your-usi</a> on a computer or mobile device.</p>
                    <p className="mb-4">Enter your Unique Student Identifier (USI) (if you already have one) You may already have a USI if you have done any nationally recognised training, which could include training at work, completing a first aid course or RSA (Responsible Service of Alcohol) course, getting a white card, or studying at a TAFE or training organisation. It is important that you try to find out whether you already have a USI before attempting to create a new one. You should not have more than one USI. To check if you already have a USI, use the ‘Forgotten USI’ link on the USI website at <a href="https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/" className="underline">https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/</a></p>
                    
                    <p className="font-bold italic mb-2 text-black">17) Unique Student Identifier (USI)</p>
                    
                    <div className="flex flex-col sm:flex-row items-start justify-between">
                      <div className="flex items-start max-w-[60%] mb-4 sm:mb-0">
                        <span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span>
                        <p className="text-[#1a365d]">I give permission for Safety Training Academy to access my Unique Student Identifier (USI) for the purpose of recording my results.</p>
                      </div>
                      
                      <div className="flex items-center text-black">
                        <span className="mr-2">USI</span>
                        <div className="flex">
                          {Array(10).fill(0).map((_, i) => (
                            <div key={i} className="w-5 h-6 sm:w-6 sm:h-8 border border-black border-r-0 last:border-r"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 1 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 7 (Enrolment Form Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline text-center mb-6">
              USI application through STA (if you do not already have one)
            </h3>

            <div className="text-[11px] sm:text-xs mb-4 text-[#1a365d]">
              <p className="font-bold mb-1">Application for Unique Student Identifier (USI)</p>
              <p className="mb-2">If you would like us Safety Training Academy to apply for a USI on your behalf you must authorise us to do so and declare that you have read the privacy information at https://www.usi.gov.au/documents/privacynotice-when-rto-applies-their-behalf. You must also provide some additional information as noted at the end of this form so that we can apply for a USI on your behalf.</p>
              <p className="mb-4 text-black">
                <span className="font-bold text-[#1a365d]">I [Name]</span> <input type="text" className="border-b border-gray-400 outline-none w-[300px] bg-transparent" /> authorise Safety Training Academy to apply pursuant to sub-section 9(2) of the Student Identifiers Act 2014, for a USI on my behalf.
              </p>
              <div className="flex items-start mb-4">
                <span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0 text-black"></span>
                <p className="text-[#1a365d]">I have read and I consent to the collection, use and disclosure of my personal information (which may include sensitive information) pursuant to the information detailed at <a href="#" className="underline">https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf</a></p>
              </div>
              <div className="flex items-center mb-4 text-[#1a365d]">
                <span className="whitespace-nowrap mr-2">Town/City of Birth</span>
                <input type="text" className="border-b border-gray-400 outline-none flex-1 mx-2 bg-transparent" />
                <span className="whitespace-nowrap">(please write the name of the Australian or</span>
              </div>
              <p className="text-[#1a365d] mb-4">overseas town or city where you were born)</p>
            </div>

            <div className="text-[11px] sm:text-xs font-bold text-[#1a365d] mb-2">
              <p>We will also need to verify your identity to create your USI.</p>
              <p>Please provide details for <span className="underline">one</span> of the forms of identity below (numbered 1 to 8).</p>
              <p>Please ensure that the name written in 'Personal Details' section is exactly the same as written in the document you provide below.</p>
            </div>

            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4 text-[#1a365d] font-bold">
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-400 w-[25%] align-top">1. Australian Driver's<br/>Licence:</td>
                  <td className="p-2 border border-gray-400 w-[37.5%] align-top">State: <input type="text" className="w-24 outline-none border-b border-gray-400 bg-transparent ml-2"/></td>
                  <td className="p-2 border border-gray-400 w-[37.5%] align-top">Licence number: <input type="text" className="w-32 outline-none border-b border-gray-400 bg-transparent ml-2"/></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top" rowSpan="2">2. Medicare Card:</td>
                  <td className="p-2 border border-gray-400 align-top">Medicare card number: <input type="text" className="w-full mt-1 outline-none border-b border-gray-400 bg-transparent"/></td>
                  <td className="p-2 border border-gray-400 align-top">Individual reference number (next to your name on medicare card): <input type="text" className="w-full mt-1 outline-none border-b border-gray-400 bg-transparent"/></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top">
                    Card colour: <span className="ml-4 mr-2">Green <span className="w-3 h-3 border border-black inline-block ml-1"></span></span>
                    <br/>
                    <span className="mr-4">Yellow <span className="w-3 h-3 border border-black inline-block ml-1"></span></span>
                    <span>Blue<span className="w-3 h-3 border border-black inline-block ml-1"></span></span>
                  </td>
                  <td className="p-2 border border-gray-400 align-top">
                    Expiry date <span className="font-normal text-gray-500">__ / __ / ____</span> (format<br/>DD/MM/YYYY)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top">3. Australian Birth<br/>Certificate:</td>
                  <td className="p-2 border border-gray-400 align-top">State/Territory: <input type="text" className="w-32 outline-none border-b border-gray-400 bg-transparent ml-2"/></td>
                  <td className="p-2 border border-gray-400 align-top">4.Immicard: <span className="font-normal">Immicard Number:</span> <input type="text" className="w-24 outline-none border-b border-gray-400 bg-transparent ml-2"/></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top">5. Australian Passport:</td>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top font-normal">Passport number: <input type="text" className="w-64 outline-none border-b border-gray-400 bg-transparent ml-2"/></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top">6.Non-Australian Passport:<br/><span className="font-normal">(with Australian Visa)<br/>Passport number:</span></td>
                  <td className="p-2 border border-gray-400 align-top font-normal">Passport number: <input type="text" className="w-full mt-1 outline-none border-b border-gray-400 bg-transparent"/></td>
                  <td className="p-2 border border-gray-400 align-top font-normal">Country of issue: <input type="text" className="w-full mt-1 outline-none border-b border-gray-400 bg-transparent"/></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top">7. Citizenship Certificate:</td>
                  <td className="p-2 border border-gray-400 align-top font-normal">Stock number: <input type="text" className="w-full mt-1 outline-none border-b border-gray-400 bg-transparent"/></td>
                  <td className="p-2 border border-gray-400 align-top font-normal">Acquisition date <span className="text-gray-500">__ / __ / ____</span><br/>(day/month/year)</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-top">8. Certificate of Registration<br/>by Descent:</td>
                  <td colSpan="2" className="p-2 border border-gray-400 align-top font-normal">Acquisition date <span className="text-gray-500">__ / __ / ____</span> (day/month/year)</td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-[10px] sm:text-[11px] border-collapse border border-gray-400 table-fixed">
              <thead>
                <tr>
                  <th colSpan="3" className="p-2 border border-gray-400 bg-[#333333] text-white text-left font-bold text-sm">OFFICE USE Only</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="p-2 border border-gray-400 text-black">
                    In accordance with section 11 of the <span className="italic">Student Identifiers Act 2014</span>, Safety Training Academy will securely destroy personal information which we collect from individuals solely for the purpose of applying for a USI on their behalf as soon as practicable after we have made the application or the information is no longer needed for that purpose.
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 font-bold text-[#1a365d] w-[30%]">PHOTO ID VERIFIED:</td>
                  <td className="p-2 border border-gray-400 w-[35%] text-black"><span className="w-3 h-3 border border-black inline-block mr-2 align-middle"></span> Passport number: <input type="text" className="w-24 outline-none border-b border-gray-400 bg-transparent ml-1"/></td>
                  <td className="p-2 border border-gray-400 w-[35%] text-black"><span className="w-3 h-3 border border-black inline-block mr-2 align-middle"></span> Driver licence number: <input type="text" className="w-24 outline-none border-b border-gray-400 bg-transparent ml-1"/></td>
                </tr>
                <tr>
                  <td className="border-l border-b border-gray-400 bg-white"></td>
                  <td colSpan="2" className="p-2 border border-gray-400 text-black"><span className="w-3 h-3 border border-black inline-block mr-2 align-middle"></span> Other, please state: <input type="text" className="w-64 outline-none border-b border-gray-400 bg-transparent ml-1"/></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 2 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 8 (Enrolment Form Page 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <h3 className="text-sm sm:text-base font-bold mb-2 uppercase">SECTION 2 – EDUCATION AND EMPLOYMENT INFORMATION</h3>
            
            <div className="text-[11px] sm:text-xs mb-4">
              <p>AVETMISS DATA COLLECTION</p>
              <p className="italic">Information collected in this section is used for the purposes of National reporting and planning.</p>
              <p className="font-bold italic">Please COMPLETE ALL SECTIONS.</p>
            </div>

            {/* PRIOR EDUCATION Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th colSpan="2" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">PRIOR EDUCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">What was your highest <span className="font-bold italic">completed</span> level at school?</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">12</sup> Year 12 or equivalent</label>
                  </td>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">9</sup> Year 9 or equivalent</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">11</sup> Year 11 or equivalent</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">8</sup> Year 8 or below</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">10</sup> Year 10 or equivalent</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">02</sup> Never attended school</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    In what <span className="font-bold italic">year</span> did you complete that level? <input type="text" className="w-24 border-b border-gray-400 outline-none bg-transparent ml-2"/>
                  </td>
                  <td className="p-2 border border-gray-400">
                    Name of School: <input type="text" className="w-48 outline-none border-b border-gray-400 bg-transparent ml-2"/>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    If in Australia, State: <input type="text" className="w-16 border-b border-gray-400 outline-none bg-transparent mx-2"/> 
                    Postcode: <input type="text" className="w-16 border-b border-gray-400 outline-none bg-transparent ml-2"/>
                  </td>
                  <td className="p-2 border border-gray-400">
                    If not in Australia, Country <input type="text" className="w-48 outline-none border-b border-gray-400 bg-transparent ml-2"/>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* QUALIFICATIONS Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th colSpan="2" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">QUALIFICATIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">Do you have post-secondary or vocational/trade qualifications from any accredited/recognised educational<br/>institution(s)?</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> Yes – <span className="italic">Please specify and <span className="underline">provide a copy</span></span></label>
                  </td>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> No - <span className="italic">go to next question '<span className="font-bold">Employment Status</span>'</span></label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 leading-relaxed">
                    If YES, then tick ANY applicable boxes.<br/>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">008</sup> Bachelor Degree or Higher Degree</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">410</sup> Advanced Diploma or Associate Degree</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">420</sup> Diploma (or Associate Diploma)</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">511</sup> Certificate IV (or Advanced Certificate/Technician)</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">514</sup> Certificate III (or Trade Certificate)</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">521</sup> Certificate II</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">524</sup> Certificate I</label>
                    <label className="flex items-center mt-1"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">990</sup> Other education ( including certificates or</label>
                    <span className="ml-6">overseas qualifications not listed above)</span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* EMPLOYMENT STATUS Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th colSpan="2" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">EMPLOYMENT STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">Of the following, which best describes your current employment status? (please tick ONE box only)</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">01</sup> Full-time employee</label>
                  </td>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">06</sup> Unemployed – seeking full-time work</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">02</sup> Part-time employee</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">07</sup> Unemployed – seeking part-time work</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">03</sup> Self-employed- not employing others</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">08</sup> Not employed – not seeking employment</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">04</sup> Self employed – employing others</label>
                  </td>
                  <td className="border-r border-gray-400"></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">05</sup> Employed – unpaid worker in family business</label>
                  </td>
                  <td className="border-r border-gray-400"></td>
                </tr>
              </tbody>
            </table>

            {/* EMPLOYMENT DETAILS Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed">
              <thead>
                <tr>
                  <th colSpan="4" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">EMPLOYMENT DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-400 w-[20%]">Employer's name</td>
                  <td className="p-2 border border-gray-400 w-[30%]"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td className="p-2 border border-gray-400 w-[20%]">Supervisor's<br/>name</td>
                  <td className="p-2 border border-gray-400 w-[30%]"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">Address</td>
                  <td colSpan="3" className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">Email</td>
                  <td className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                  <td className="p-2 border border-gray-400">Phone</td>
                  <td className="p-2 border border-gray-400"><input type="text" className="w-full outline-none bg-transparent" /></td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 3 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 9 (Enrolment Form Page 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            
            {/* REASON FOR UNDERTAKING TRAINING Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-6">
              <thead>
                <tr>
                  <th colSpan="2" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">REASON FOR UNDERTAKING TRAINING / RPL <span className="font-normal text-xs">(tick ONE box only)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">Of the following, which best describes your main reason for gaining this qualification?</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">01</sup> To get a job</label>
                  </td>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">06</sup> It is a requirement for my job</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">02</sup> To develop my existing business</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">07</sup> I wanted extra skills for my job</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">03</sup> To start my own business</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">08</sup> To get into another course of study</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">04</sup> To try for a different career</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">12</sup> For personal interest or self-development</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">05</sup> To get a better job or promotion</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">11</sup> Other <span className="italic ml-1">(please provide details):</span> <input type="text" className="border-b border-gray-400 outline-none bg-transparent ml-2 flex-1 w-24 sm:w-auto" /></label>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-sm sm:text-base font-bold mb-1 uppercase">SECTION 3 – ADDITIONAL INFORMATION</h3>
            <p className="text-[11px] sm:text-xs italic mb-4">Information collected in this section is strictly confidential, available only to limited college staff and for the purposes of reporting and planning.</p>

            {/* SPECIAL NEEDS Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed mb-4">
              <thead>
                <tr>
                  <th colSpan="2" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">SPECIAL NEEDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-400 w-1/2 align-top">
                    Do you consider that you have any type of disability that<br/>may affect your ability to undertake assessment?
                  </td>
                  <td className="p-2 border border-gray-400 w-1/2 align-top">
                    <label className="flex items-start mb-1"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> No - <span className="italic ml-1">go to next question '<span className="font-bold">Language & Cultural Diversity</span>'</span></label>
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> Yes – <span className="italic ml-1">please provide details below</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">11</sup> Hearing</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">16</sup> Acquired Brain Impairment</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">12</sup> Physical</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">17</sup> Vision</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">13</sup> Intellectual</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">18</sup> Medical Condition</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">14</sup> Learning</label>
                  </td>
                  <td className="p-2 border border-gray-400" rowSpan="2">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">19</sup> Other <span className="text-[10px] ml-1">(please specify):</span> <input type="text" className="border-b border-gray-400 outline-none bg-transparent ml-2 w-32" /></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">15</sup> Mental Illness</label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-gray-50">
                    If you indicated the presence of a disability, impairment or long-term condition, please select the area(s) from the list on page
                  </td>
                </tr>
              </tbody>
            </table>

            {/* LANGUAGE AND CULTURAL DIVERSITY Table */}
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed">
              <thead>
                <tr>
                  <th colSpan="3" className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm">LANGUAGE AND CULTURAL DIVERSITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-400 font-bold w-[25%] align-middle">Country of Birth</td>
                  <td className="p-2 border border-gray-400 w-[25%] align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">1101</sup> Australia</label>
                  </td>
                  <td className="p-2 border border-gray-400 w-[50%] align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <span className="font-bold">Other <span className="text-[10px] font-normal">(please specify):</span></span> <input type="text" className="border-b border-gray-400 outline-none bg-transparent mx-2 w-32" /> Place of Birth: <input type="text" className="border-b border-gray-400 outline-none bg-transparent ml-2 w-24" /></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 font-bold align-middle" rowSpan="2">Aboriginal &/or Torres Strait Islander Origin</td>
                  <td className="p-2 border border-gray-400 align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">4</sup> No</label>
                  </td>
                  <td className="p-2 border border-gray-400 align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">2</sup> Torres Strait Islander</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">13</sup> Aboriginal</label>
                  </td>
                  <td className="p-2 border border-gray-400 align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <sup className="text-[#1a365d] mr-1">13</sup> Aboriginal & Torres Strait Islander</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 font-bold align-middle">Language spoken at home</td>
                  <td className="p-2 border border-gray-400 align-middle leading-tight">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span><sup className="text-[#1a365d] mr-1">1201</sup> English Only (skip the next question)</span></label>
                  </td>
                  <td className="p-2 border border-gray-400 align-middle">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> <span className="font-bold">Other <span className="text-[10px] font-normal">(please specify):</span></span> <input type="text" className="border-b border-gray-400 outline-none bg-transparent ml-2 w-full max-w-[200px]" /></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 font-bold align-middle">How well do you speak English?</td>
                  <td colSpan="2" className="p-2 border border-gray-400 align-middle">
                    <div className="flex flex-wrap gap-4 sm:gap-8">
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> Very Well</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> Well</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> Not well</label>
                      <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> Not at all</label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 4 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 10 (Enrolment Form Page 5) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <h3 className="text-sm sm:text-base font-bold mb-4 uppercase">SECTION 4– ENROLMENT INFORMATION</h3>

            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-400 bg-[#c5e6f5] text-left font-bold text-sm w-1/2">Qualifications – please tick qualification for which you are applying.</th>
                  <th className="p-2 border border-gray-400 bg-[#c5e6f5] text-right font-normal text-sm w-1/2">( Assess only- RPL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPC30220 Certificate III in Carpentry<br/><span className="font-normal">(34 Units of Competency)</span></span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPC30620 Certificate III in Painting and Decorating<br/><span className="font-normal">(29 Units of Competency)</span></span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPC31220 Certificate III Wall and Ceiling Lining<br/><span className="font-normal">(29 Units of Competency)</span></span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPC31320 Certificate III in Wall and Floor Tiling<br/><span className="font-normal">(20 Units of Competency)</span></span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">Are you applying for CT as well as RPL</td>
                  <td className="p-2 border border-gray-400">
                    Yes <span className="w-4 h-4 border border-black inline-block mx-2 align-middle"></span> No <span className="w-4 h-4 border border-black inline-block mx-2 align-middle"></span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">Preferred Start Date</td>
                  <td className="p-2 border border-gray-400 text-gray-500">------/-----/-------</td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">
                    <div className="flex flex-wrap items-center">
                      <span className="mr-2">Do you have access to a workplace</span>
                      Yes <span className="w-4 h-4 border border-black inline-block mx-2 align-middle"></span> 
                      No <span className="w-4 h-4 border border-black inline-block mx-2 align-middle"></span>
                      <span className="ml-8 mr-2">Site location:</span>
                      <input type="text" className="border-b border-gray-400 outline-none bg-transparent flex-1 min-w-[150px]" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#c5e6f5] text-center font-bold text-sm">Short Courses</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 bg-[#c5e6f5] font-bold text-sm">Unit of competency – Please indicate course chosen</td>
                  <td className="p-2 border border-gray-400 bg-[#c5e6f5] text-sm">( Training and Assessemnt program)</td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">White Card:</td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> CPCWHS1001 - Prepare to work safely in the construction industry</label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Working at Heights :</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> RIIWHS204E - Work safely at heights</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>ICTWHS201 - Provide telecommunications services<br/>safely on roofs</span></label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Confined Spaces :</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> RIIWHS202E - Enter and work in confined spaces</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> MSMWHS217 - Gas test atmospheres</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> MSMWHS201 - Conduct hazard analysis</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> MSMPER300 - Issue work permits</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>MSMPER200 - Work in accordance with an issued<br/><span className="ml-6">permit</span></span></label>
                  </td>
                  <td className="p-2 border border-gray-400"></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">High risk Work :</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> TLILIC0003 - Licence to operate a forklift truck</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>TLILIC0005 - Licence to operate a boom-type elevating<br/>work platform (boom length 11 metres or more)</span></label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Earthmoving and Machinery :</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIMPO320F - Conduct civil construction excavator<br/>operations</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIMPO318F - Conduct civil construction skid steer<br/>loader operations</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIMPO321F - Conduct civil construction wheeled<br/>front end loader operations</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIMPO337E - Conduct articulated haul truck<br/>operations</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIMPO316E- Conduct self-propelled compactor<br/>operations</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIHAN301E – Opertae elevating work platform<br/>(under 11m)</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIIHAN309F - Conduct telescopic materials handler<br/>operations ( Telehandler)</span></label>
                  </td>
                  <td className="p-2 border border-gray-400"></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Asbestos :</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> CPCCDE3014 - Remove non-friable asbestos</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> CPCCDE4008 - Supervise asbestos removal</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 5 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 11 (Enrolment Form Page 6) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold text-black mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <table className="w-full text-[10px] sm:text-xs border-collapse border border-gray-400 table-fixed">
              <tbody>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Demolition:</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCBC4002 Manage work health and safety in the<br/>building and construction workplace</span></label>
                  </td>
                  <td className="p-2 border border-gray-400 w-1/2">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE3020 Select and use tools and equipment for<br/>hot work in the demolition industry</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCBC4012 Read and interpret plans and<br/>specifications</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE3022 Manage demolition recyclable waste<br/>materials and contaminated soil using load shifting<br/>equipment</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE3016 Identify hazards on demolition sites<br/>and apply risk management strategies</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE4001 Plan and prepare for activities on<br/>demolition sites</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE3018 Select and use small plant and<br/>equipment for demolition tasks</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE4002 Plan demolition work to minimise risk<br/>to health, safety and environment</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE3018 Select and use small plant and<br/>equipment for demolition tasks</span></label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE4003 Supervise operational activities on<br/>demolition sites</span></label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>CPCCDE4004 Finalise demolition activities and<br/>supervise property handover</span></label>
                  </td>
                  <td className="p-2 border border-gray-400"></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">First Aid :</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> HLTAID011 - Provide First Aid</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> HLTAID009 - Provide cardiopulmonary resuscitation</label>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>HLTAID012 - Provide First Aid in an education and<br/>care setting</span></label>
                  </td>
                  <td className="p-2 border border-gray-400"></td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Traffic Control Courses:</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> RIISS00054 – Traffic Controller Skill Set</label>
                  </td>
                  <td className="p-2 border border-gray-400">
                    <label className="flex items-start"><span className="w-4 h-4 border border-black inline-block mr-2 mt-0.5 flex-shrink-0"></span> <span>RIISS00055 – Traffic Management Implementer Skill<br/>Set</span></label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400 bg-[#d9d2ba] font-bold">Other Courses:</td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> UETDREL006 - Working safely near live electrical apparatus as a non-electrical worker</label>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-2 border border-gray-400">
                    <label className="flex items-center"><span className="w-4 h-4 border border-black inline-block mr-2"></span> RIICCM202E – Identify,located and protect uunderground services</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 6 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 12 (Enrolment Form Page 7) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#c5e6f5] font-bold p-2 border-b border-gray-400">PRIVACY NOTICE</div>
              
              <div className="p-3 space-y-2 leading-tight">
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
                <ul className="list-disc pl-8 space-y-1">
                  <li>administration of VET, including program administration, regulation, monitoring and evaluation</li>
                  <li>facilitation of statistics and research relating to education, including surveys and data linkage</li>
                  <li>understanding how the VET market operates, for policy, workforce planning and consumer information.</li>
                </ul>
                <p>The NCVER may also disclose personal information to persons engaged by NCVER to conduct research on NCVER's behalf.</p>
                <p>The NCVER does not intend to disclose your personal information to any overseas recipients.</p>
                <p>For more information about how the NCVER will handle your personal information please refer to the NCVER's Privacy Policy at <a href="http://www.ncver.edu.au/privacy" className="underline">www.ncver.edu.au/privacy</a></p>
                <p>If you would like to seek access to or correct your information, in the first instance, please contact your RTO using the contact details listed below.</p>
                <p>DESE is authorised by law, including the Privacy Act and the NVETR Act, to collect, use and disclose your personal information to fulfil specified functions and activities. For more information about how the DESE will handle your personal information, please refer to the DESE VET Privacy Notice at <a href="https://www.dese.gov.au/national-vet-data/vet-privacy-notice" className="underline text-blue-600">https://www.dese.gov.au/national-vet-data/vet-privacy-notice</a></p>
                
                <p className="font-bold underline">Surveys</p>
                <p>You may receive a student survey which may be run by a government department or an NCVER employee, agent, third-party contractor or another authorised agency. Please note you may opt out of the survey at the time of being contacted.</p>
                
                <p className="font-bold underline">Contact information</p>
                <p>At any time, you may contact Safety Training Academy to:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>request access to your personal information</li>
                  <li>correct your personal information</li>
                  <li>make a complaint about how your personal information has been handled</li>
                  <li>ask a question about this Privacy Notice</li>
                </ul>
                
                <p className="font-bold">Safety Training Academy<br/>Maria Hajjar<br/>0439 007 746<br/><a href="mailto:maria@safetytrainingacademy.edu.au" className="underline font-normal text-blue-600">maria@safetytrainingacademy.edu.au</a></p>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 7 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 13 (Enrolment Form Page 8) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#c5e6f5] font-bold p-2 border-b border-gray-400">DISABILITY SUPPLEMENT</div>
              
              <div className="p-3 space-y-2 leading-tight">
                <p className="font-bold">*If you indicated the presence of a disability, impairment or long-term condition on page 4, please select the area(s) in the following list:</p>
                <p>Disability in this context does not include short-term disabling health conditions such as a fractured leg, influenza, or corrected physical conditions such as impaired vision managed by wearing glasses or lenses.</p>
                
                <p className="font-bold">‘11 — Hearing/deaf’</p>
                <p>Hearing impairment is used to refer to a person who has an acquired mild, moderate, severe or profound hearing loss after learning to speak, communicates orally and maximises residual hearing with the assistance of amplification. A person who is deaf has a severe or profound hearing loss from, at, or near birth and mainly relies upon vision to communicate, whether through lip reading, gestures, cued speech, finger spelling and/or sign language.</p>
                
                <p className="font-bold">‘12 — Physical’</p>
                <p>A physical disability affects the mobility or dexterity of a person and may include a total or partial loss of a part of the body. A physical disability may have existed since birth or may be the result of an accident, illness, or injury suffered later in life; for example, amputation, arthritis, cerebral palsy, multiple sclerosis, muscular dystrophy, paraplegia, quadriplegia or post-polio syndrome.</p>
                
                <p className="font-bold">‘13 — Intellectual’</p>
                <p>In general, the term ‘intellectual disability’ is used to refer to low general intellectual functioning and difficulties in adaptive behaviour, both of which conditions were manifested before the person reached the age of 18. It may result from infection before or after birth, trauma during birth, or illness.</p>
                
                <p className="font-bold">‘14 — Learning’</p>
                <p>A general term that refers to a heterogeneous group of disorders manifested by significant difficulties in the acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical abilities. These disorders are intrinsic to the individual, presumed to be due to central nervous system dysfunction, and may occur across the life span. Problems in self-regulatory behaviours, social perception, and social interaction may exist with learning disabilities but do not by themselves constitute a learning disability.</p>
                
                <p className="font-bold">‘15 — Mental illness’</p>
                <p>Mental illness refers to a cluster of psychological and physiological symptoms that cause a person suffering or distress and which represent a departure from a person’s usual pattern and level of functioning.</p>
                
                <p className="font-bold">‘16 — Acquired brain impairment’</p>
                <p>Acquired brain impairment is injury to the brain that results in deterioration in cognitive, physical, emotional or independent functioning. Acquired brain impairment can occur as a result of trauma, hypoxia, infection, tumour, accidents, violence, substance abuse, degenerative neurological diseases or stroke. These impairments may be either temporary or permanent and cause partial or total disability or psychosocial maladjustment.</p>
                
                <p className="font-bold">‘17 — Vision’</p>
                <p>This covers a partial loss of sight causing difficulties in seeing, up to and including blindness. This may be present from birth or acquired as a result of disease, illness or injury.</p>
                
                <p className="font-bold">‘18 — Medical condition’</p>
                <p>Medical condition is a temporary or permanent condition that may be hereditary, genetically acquired or of unknown origin. The condition may not be obvious or readily identifiable, yet may be mildly or severely debilitating and result in fluctuating levels of wellness and sickness, and/or periods of hospitalisation; for example, HIV/AIDS, cancer, chronic fatigue syndrome, Crohn’s disease, cystic fibrosis, asthma or diabetes.</p>
                
                <p className="font-bold">‘19 — Other’</p>
                <p>A disability, impairment or long-term condition which is not suitably described by one or several disability types in combination. Autism spectrum disorders are reported under this category.</p>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 8 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 14 (Enrolment Form Page 9) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="font-bold p-2 text-center text-sm">TERMS & CONDITIONS OF ENROLMENT</div>
              
              <div className="p-3 space-y-2 leading-tight border-t border-gray-400">
                <p className="font-bold">Enrolment & Selection</p>
                <ol className="list-decimal pl-6 space-y-1">
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

                <p className="font-bold pt-2">Course Fees, Payments and Refunds</p>
                <p>Students are provided with the refund policy and student enrolment form prior to enrolment. Refund information is always available from the CEO.</p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Fee Refund Applications are considered on a case-by-case basis.</li>
                  <li>The request for refund is made in writing to the CEO using the Fee Refund Application which is available upon request from the CEO.</li>
                  <li>The CEO is the person responsible for approval of fee refund applications.</li>
                  <li>Course cancellation after acceptance by Safety Training Academy may occur up to 7 days prior to commencement of the course without penalty and must be made in writing, by email or by fax. A full refund minus the non-refundable enrolment fee will be paid with notice of 7 days or more.</li>
                  <li>Course cancellation with less than 7 days' notice after acceptance by Safety Training Academy will not result in any refund.</li>
                  <li>Accepted students who withdraw after course commencement owing to unforeseen or exceptional circumstance can apply for fee refund. If granted, fees will be refunded on a pro-rata basis (based on the number of days remaining in the course).</li>
                  <li>Safety Training Academy defaults if a course does not commence on the designated day or is actually cancelled. No student will be disadvantaged.</li>
                  <li>Fee refunds will be made within 14 days after demand when Safety Training Academy defaults and within 28 days after demand when the student defaults.</li>
                  <li>Safety Training Academy 's dispute resolution processes do not circumscribe the student's right to pursue other legal remedies. This agreement does not remove the right of either party to take further action under Australia's consumer protection laws for unpaid and overdue fees.</li>
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

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 9 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 15 (Enrolment Form Page 10) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="p-3 space-y-2 leading-tight">
                <ol className="list-decimal pl-6 space-y-1" start="16">
                  <li>Refunds may be made in the following circumstances:
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-1">
                      <li>Participants have overpaid the administration charge</li>
                      <li>Participants enrolled in training that has been terminated by Safety Training Academy</li>
                      <li>Participant advises Safety Training Academy prior to course commencement that they are withdrawing from the course</li>
                      <li>If the participant withdraws from a course, prior to course commencement, due to illness or extreme hardship as determined by the Safety Training Academy</li>
                      <li>In the event that the Safety Training Academy fails to provide the agreed services</li>
                    </ol>
                  </li>
                  <li>A deposit of no more than $1,500 is required prior to course commencement; this deposit is to confirm a place in the course. Please refer to the Course Flyer for the deposit amount required.</li>
                  <li>No refunds will be issued once the course has commenced</li>
                  <li>Students are responsible for the safe storage of their Certificate and Statements of Attainment. Students are responsible for the safe storage of their Certificate and Statements of Attainment. If a student requires a reissue of their Certificate Statement of Attainment, a <strong>certificate re-issue fee of $50</strong> will be charged.</li>
                  <li>If a student is deemed not yet competent on completion of training, they will be offered an opportunity to be reassessed. If a student is deemed not yet competent a second time, they will be given another opportunity for reassessment.</li>
                </ol>

                <p className="font-bold pt-2">Recording:</p>
                <p>The complaint will be recorded in the Register of Complaints by the Administration Manager.</p>
                <p>A copy of all the documentation, in particular the complaint and its outcome, is placed in the student's file. A copy of the documentation is forwarded to the complainant.</p>
                <p>Where the resolution requires a documented change to policies and procedures, the CEO notifies the appropriate staff member of the change to ensure that the procedure for document change as listed in the procedure for Document Control is followed with the appropriate records made.</p>
                <p>In the event that a complaint is substantiated, Safety Training Academy will take prompt and appropriate action to resolve the circumstances.</p>
                
                <p className="pt-2">Complaints cannot be anonymous because this is considered unfair in that ongoing discussion cannot take place to resolve the issue between both parties. Information submitted to a trainer or any staff member is treated with respect and taken as an opportunity for improvement to the organisation's practices and Quality Management System.</p>
                <p>Privacy requirements and student/ individual rights are maintained at all times.</p>
                <p>If the student chooses to access our complaints and appeals processes, Safety Training Academy will maintain the student's enrolment while the complaints and appeals process is ongoing.</p>
                <p className="text-[#1a365d]">*NOTE: We aim to finalise any complaints and appeals within 60 days of the initial lodgement. If the compliant cannot be finalised within the 60 days, we will notify the complainant in writing why it has not been finalised and any other information they can provide at the time to assist the complainant.</p>

                <p className="font-bold pt-4 uppercase">APPEALS</p>
                <p>If you are not happy with the outcome of a complaint then the following appeal process is followed.</p>
                <p>The appeal is discussed directly with the CEO. If this does not resolve the matter then the appeal is to be documented and submitted to trigger mediation by using either a simple written letter or a copy of the complaints and appeals form.</p>
                <p>The CEO records the student's dispute in the Register for Continuous Improvement and puts written notification on the students file and organises attendance by the student as Safety Training Academy representatives at the local court to meet with the VET Ombudsman representative. These are trained mediators, familiar with the alternative dispute resolution mediation process. The process is also without cost.</p>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 10 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 16 (Enrolment Form Page 11) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="p-3 space-y-2 leading-tight">
                <p>You can also contact the Ombudsman<br/><a href="https://www.ombudsman.gov.au/" className="underline text-blue-600">https://www.ombudsman.gov.au/</a><br/>NOTE: The National Training Complaints Hotline is accessible on 13 38 73 (Monday to Friday from 8am to 6pm nationally) or via email at <a href="mailto:skilling@education.gov.au" className="underline text-blue-600">skilling@education.gov.au</a></p>
                <p className="pt-2">An appellant may deliver their own version of the matter to the mediator and request a support person be present. The rules of alternative dispute resolution apply.</p>
                <p>The matter should then consider the issues raised an attempt to resolve the appeal to the satisfaction of the appellant.<br/>All appeals of complaints that are found to be proven must be acted upon through the continuous improvement process to make systematic changes to prevent the recurrence of this a problem again<br/>The final agreement achieved through the alternative dispute resolution process is put into court orders which bind the parties to the agreed resolution. There is no further appeal mechanism beyond this point. The student may always revert to common law. Each step of the complaints and appeals process will allow the student to make representation either orally or in writing prior to reaching a decision.<br/>If the student has complaints that do not directly concern but may affect their ability to achieve competency, they shall be referred to appropriate external support groups for assistance</p>
                
                <p className="font-bold pt-2 uppercase">APPEALS AGAINST ASSESSMENT OUTCOMES: REASSESSMENTS</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants to appeal their assessments and recognition decisions. Appeals are ideally resolved as amicably as possible using this formal appeal process.</p>
                <p>Step 1:<br/>Discuss the matter with your assessor and explain the reason why you believe the assessment outcome is unfair. If you are not satisfied with the discussion, then go to Step 2.</p>
                <p>Step 2:<br/>Lodge a written appeal to the Administration Manager by completing a Complaints and Appeals form (Form 06). The Administration Manager will forward the appeal to the CEO who will commence investigation into the matter within 10 working days.<br/>The CEO will appoint a mutually agreed-upon, qualified and independent assessor to review the records of assessment of the student's competence against the training package requirements. Where insufficient records to determine competence are available, the student may provide additional evidence of competence. The independent assessor's determination is final.</p>
                <p>No further appeal mechanism exists beyond this point in the process.<br/>In most cases there will be no reassessment fee. If a reassessment fee is applicable, this fee will be included on the course flyer.</p>
                
                <p className="font-bold pt-2">STA is responsible for providing you with quality training and assessment and the issuance of AQF certification documentation.</p>
                <p>If a student is required to be reassessed, they will be provided with further guidance from their trainer prior to reassessment.</p>
                
                <p className="font-bold pt-2">Consumer Guarantee</p>
                <p>Safety Training Academy guarantees that the services provided by STA will be:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>provided with due care and skill</li>
                  <li>fit for any specified purpose (express or implied)</li>
                  <li>provided within a reasonable time (when no timeframe is set for the training).</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 11 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 17 (Enrolment Form Page 12) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="p-3 space-y-2 leading-tight">
                <p className="font-bold text-[#1a365d]">Fee Protection</p>
                <p>Safety Training Academy requires a minimum deposit, which will not exceed $1,500 per individual student, prior to course commencement. If the full course fees are less than $1,500, the full fees may be required to be paid prior to course commencement. Please refer to the course flyers for deposits and course fees.</p>
                <p>Following course commencement, full fees will be required to be paid by either a payment plan (if remaining fees are over $1500), or in full (if the remaining fees are below $1500) for training and other services yet to be delivered.</p>
                
                <p className="font-bold text-[#1a365d] pt-2">Changes to Agreed Services</p>
                <p>Where there are any changes to the agreed services that will affect the learner, including in the event of Safety Training Academy closing down, we will advise the learner as soon as practicable. This includes changes to any new third party arrangements or a change of ownership or any changes to existing third party arrangements.</p>

                <p className="font-bold text-[#1a365d] pt-2">Complaints and Appeals</p>
                <p>If we do not resolve or finalise complaints or appeals within 60 days, the complainant will be notified in writing by the Administration Manager.</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants, staff and stakeholders to lodge complaints. Complaints are ideally resolved as amicably as possible using this formal appeal process. We will adhere to the National Complaints Code to respond to complaints about vocational education and the organisation itself. This means that our complaints process is:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>well publicised and explained;</li>
                  <li>accessible so you can lodge complaints and appeals by phone, electronically or in writing;</li>
                  <li>fair and protect your rights;</li>
                  <li>free so you can lodge a complaint without charge;</li>
                  <li>handled in a manner that protects your privacy;</li>
                  <li>transparent, equitable, objective and unbiased;</li>
                  <li>comprehensive so that it effectively resolves a variety of complaints such as student dissatisfaction, assessment outcomes, poor service, fraud, misconduct etc;</li>
                </ul>

                <p className="font-bold text-[#1a365d] pt-2">Step 1:</p>
                <p>If the complaint is regarding a fellow student, you should first discuss the matter with the student and try to resolve it. If you are not able to resolve it, then you should discuss the problem with your trainer/assessor to try to resolve it. If you were not able to resolve it, go to step 2.</p>
                <p>If your complaint is regarding your trainer / assessor, or the organisation, then go straight to step 2.</p>
                
                <p className="font-bold text-[#1a365d] pt-2">Step 2:</p>
                <p>You should lodge a formal written complaint to the Administration Manager by completing a Complaints and Appeals form that can be obtained from the Administration Manager. The Administration Manager will acknowledge receipt of the formal complaint in writing and record the complaint in the Register of Complaints.</p>
                <p>Safety Training Academy will commence the complaints process within 10 working days of the formal lodgement of the complaint and supporting information. All reasonable measures are taken to finalise the process as soon as practicable.</p>

                <p className="font-bold text-[#1a365d] pt-2">Step 3:</p>
                <p>If the complaint was not able to be resolved to your satisfaction by the Administration Manager, then you must ask for the complaint to be escalated to the CEO. The Administration Manager will email your complaint to the CEO.</p>
                <p>The CEO will acknowledge receipt of the formal complaint in writing and commence investigation into the matter within 10 working days. The CEO is empowered to make a determination that is considered to be fair and equitable by both parties. The complainant has the right to have their version of events heard in the resolution negotiation and have an independent advocate present.</p>
                <p>Complaints are investigated fairly and objectively with details of the investigation provided in writing to the complainant. The details will state the outcomes and reasons for the decisions made.</p>

                <p className="font-bold text-[#1a365d] pt-2">Step 4:</p>
                <p>If you are still not satisfied with the outcome, the matter may be referred to an independent mediator such as the local National Training Complaints Hotline (133873) or the Department of Fair Trading for review.</p>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 12 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 18 (Enrolment Form Page 13) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-[#1a365d]">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="p-3 space-y-2 leading-tight">
                <p className="font-bold text-[#1a365d]">Credit Transfer</p>
                <p>STA recognises the Australian Qualifications Framework and Vocational Education and Training (VET) qualifications and VET statements of attainment issued by any other Registered Training Organisation.</p>
                <p>Credit Transfer will be awarded for all units of competencies that directly align with units from the qualification the student has enrolled. Evidence of competences achieved must be supplied for recognition to be processed (ie presentation of original certificate or transcript).</p>
                <p>Please refer to the Student Handbook or contact the office for the procedure on how to apply for a Credit Transfer.</p>
                
                <p className="font-bold text-[#1a365d] pt-2">Language, Literacy and Numeracy (LLN)</p>
                <p>LLN support is available to provide students with advice and support services in the provision of language, literacy and numeracy assessment services. Students needing assistance with their learning should be identified upon enrolment. Trainers and staff can provide students with support to assist the student throughout the learning process.</p>
                <p>Language, Literacy and Numeracy skills are generally included and identified in Training Products and accredited course programs. In identifying language, literacy and numeracy requirements, students' are required to have basic skills in:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Count, check and record accurately</li>
                  <li>Read and interpret</li>
                  <li>Estimate, calculate and measure</li>
                </ul>

                <p className="font-bold text-[#1a365d] pt-2">Support Services</p>
                <p>All staff at Safety Training Academy act as Student Support Officers and can refer students to external support providers where required. Safety Training Academy caters to diverse client learning needs and aims to identify and respond to the learning needs of all clients. Clients are encouraged to express their views about their learning needs at all stages of their learning experience from the initial enrolment and induction stage to course completion, through their trainer or staff. Safety Training Academy is committed to providing clients requiring additional support, advice or assistance while training. Please see the Student Handbook on the types of support provided.</p>
                
                <p className="font-bold text-[#1a365d] pt-2">Legislative and Regulatory Requirements</p>
                <p>All students will undergo an induction, which will include the student's rights and responsibilities against the relevant Commonwealth, State or Territory legislation and regulatory requirements. Students are issued with a Student Handbook, which also includes the Student's rights and responsibilities that will affect their participation in vocational education and training.</p>
                <p>The student acknowledges that they must observe Safety Training Academy's policies and procedures, according to State and Federal Government legislative and regulatory requirements, as set out in the Student Handbook.</p>

                <p className="text-[#1a365d] pt-2 uppercase">IMPORTANT INFORMATION</p>
                <p>I have read and understand the terms and conditions of my enrolment, as stated above. I acknowledge and agree with the terms and conditions of enrolment with specific reference to the our enrolment and selection, USI, course fees, payments and refunds, course requirements, Language Literacy and Numeracy requirements, complaints and appeals, Workplace Health and Safety, support services that will be provided for me, legislative and regulatory policies and procedures, which are also provided to me in the Student Handbook. By signing this document I also give permission for STA to access my Unique Student Identifier for the purpose of my training.</p>

                <div className="pt-6 font-bold text-[#1a365d] flex flex-col space-y-6">
                  <div className="flex items-center space-x-2">
                    <span>STUDENT NAME:</span>
                    <div className="flex-1 border-b border-[#1a365d] h-4 max-w-[400px]"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-6 sm:space-y-0">
                    <div className="flex items-center space-x-2 flex-1">
                      <span>STUDENT SIGNATURE:</span>
                      <div className="flex-1 border-b border-[#1a365d] h-4"></div>
                    </div>
                    <div className="flex items-center space-x-2 whitespace-nowrap">
                      <span>DATE:</span>
                      <div className="w-8 border-b border-[#1a365d] h-4"></div>
                      <span>/</span>
                      <div className="w-8 border-b border-[#1a365d] h-4"></div>
                      <span>/</span>
                      <div className="w-8 border-b border-[#1a365d] h-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 13 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 19 (Enrolment Form Page 14) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-4 sm:px-12 relative">
            <div className="sm:absolute sm:left-12 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center text-black">
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-bold mb-1 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#c5e6f5] font-bold p-2 border-b border-gray-400">Payment method:</div>
              
              <div className="p-3 leading-tight flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border border-black flex-shrink-0"></div>
                    <span>Bank : Commonwealth Bank</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border border-black flex-shrink-0"></div>
                      <span>Cash</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border border-black flex-shrink-0"></div>
                      <span>Debit/CreditCard EFTPOS</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-12 space-y-1 sm:space-y-0">
                  <div className="flex flex-col space-y-1">
                    <p><span className="font-bold">Account Name: </span> AIET College</p>
                    <p><span className="font-bold">BSB : 062 141 &nbsp; Account No : 10490235</span></p>
                    <p>Transaction Description : Your Name / Invoice Number</p>
                  </div>
                  <div className="flex space-x-4">
                    <span>----</span>
                    <span>Australian International Education & Training Pty Ltd</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs mt-6">
              <div className="bg-[#c5e6f5] font-bold p-2 border-b border-gray-400 uppercase">APPLICATION SUBMISSION</div>
              
              <div className="p-3 leading-tight space-y-4">
                <p><span className="italic">Please return this completed application form with proof of ID to </span><span className="font-bold">Australian International Education & Training</span> (AIET) to enrol in your chosen qualification.</p>
                <p>Once your application has been received and is accepted as complete, you will be notified. If any information or evidence is missing you will be contacted to provide any further required information. This may delay your enrolment process.</p>
                
                <p className="italic">Australian International Education & Training Assessment Centre:</p>
                <ul className="pl-6 space-y-2" style={{listStyleType: 'square'}}>
                  <li>Address: 3/14-16 Marjorie, Street, Sefton NSW 216</li>
                  <li>Email: Info@safetytrainingacademy.edu.au</li>
                  <li>Phone: 1300 976 097</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-4">
              <span>Form 36.</span>
              <span>Page 14 of 14</span>
              <span>230802</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 20 (Training Agreement Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex justify-center mb-8 w-full relative">
            <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain absolute left-0 top-0" />
            <div className="flex flex-col items-center justify-center w-full text-center text-black pt-8">
              <h1 className="text-xl sm:text-2xl font-bold mb-1">Training Agreement</h1>
              <h2 className="text-sm font-bold">(To be completed by the participant at enrolment)</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-[11px] sm:text-xs">
            <div className="flex items-center space-x-2 pt-6">
              <span>I</span>
              <div className="border-b border-black h-4 w-[250px]"></div>
              <span>(insert full legal name) agree to undertake training with</span>
            </div>
            <p className="mt-1">Australian International Education and Training ( AIET ) , in the following course:</p>

            <p className="text-center font-bold text-sm sm:text-base my-6">ICTWHS201 – Provide telecommunications services safely on roofs</p>

            <p className="mb-4">During the course of this program, I understand and acknowledge that:</p>

            <p className="font-bold mb-2">My rights and obligations, as defined in the Participant Handbook include:</p>
            <ol className="list-decimal pl-6 space-y-1 mb-4">
              <li>My obligation at all times to conduct myself safely and in adherence to all relevant legislation.</li>
              <li>I will actively attempt all training and assessment tasks with serious effort.</li>
              <li>That I will comply with all safe and lawful requests</li>
              <li>I will arrive on time and will return on time from all breaks.</li>
              <li>That I will not bully, abuse, vilify or fail to treat all people participating, associated with, or in the vicinity of AIET venues with the utmost respect and courtesy.</li>
            </ol>

            <p className="font-bold mb-2">Australian International Education and Training ( AIET) rights and obligations include:</p>
            <ol className="list-decimal pl-6 space-y-1 mb-6" start="6">
              <li>To provide quality training and assessment services, compliant to the NVR Standards, in a competent manner through the provision of quality resources and staff resulting in the issuance of AQF statement of attainment.</li>
              <li>Assessment be performed by qualified assessors with the required knowledge and currency in the needs of industry.</li>
              <li>Guaranteeing to provide assessment services to customers who have met their obligations with regard to completion of enrolment details, and financial payments</li>
              <li>Guaranteeing that in the event that Australian International Education and Training ( AIET) cannot deliver a course, a full refund of all monies paid to Australian International Education and Training ( AIET) will be refunded to the purchaser.</li>
              <li>Committing that training will not be offered to participants who fail to wear PPE or fail to pay for the course.</li>
              <li>Choosing to terminate a customer's training if they fail to uphold these standards</li>
              <li>Keeping participants informed of any changes in the service delivery including trainers, our ownership, the engagement of third parties or any other aspect of the participants training experience.</li>
            </ol>

            <p className="mb-6">Agreed to and accepted by Participant:</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-y-4 sm:space-y-0 mb-6">
              <div className="flex items-center space-x-4">
                <span className="font-bold">Signed</span>
                <span className="border-b border-dotted border-black w-[200px] inline-block h-4"></span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold">Date</span>
                <span className="border-b border-dotted border-black w-[200px] inline-block h-4"></span>
              </div>
            </div>

            <p className="font-bold underline text-sm mb-1">Office use only</p>
            <div className="border border-black p-4 h-[150px] flex flex-col justify-between">
              <p>Agreed to and accepted by Australian International Education and Training ( AIET) Representative:</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <span className="font-bold">Signed</span>
                  <span className="border-b border-dotted border-black w-[200px] inline-block h-4"></span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold">Date</span>
                  <span className="border-b border-dotted border-black w-[200px] inline-block h-4"></span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold">Print Name:</span>
                <span className="border-b border-dotted border-black w-[250px] inline-block h-4"></span>
              </div>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p>3/14- 16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: <a href="mailto:info@aietcollege.edu.au" className="underline">info@aietcollege.edu.au</a></p>
            <div className="border-t border-black w-full my-2"></div>
            <div className="flex justify-between w-full">
              <span>Issue Date : 15/08/2021 V2.0</span>
              <span>Page 1 of 4</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 21 (Participant record of Training Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex justify-center mb-6 w-full relative">
            <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[90px] h-auto object-contain absolute left-0 top-0" />
            <div className="flex flex-col items-center justify-center w-full text-center text-black pt-8">
              <h1 className="text-xl sm:text-2xl font-bold mb-1">Participant record of Training</h1>
              <div className="border-b border-black w-full max-w-[400px]"></div>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs mb-4">
              <div className="bg-[#d1d5db] font-bold p-2 border-b border-gray-400">Participant details</div>
              <div className="flex flex-col sm:flex-row w-full border-b border-gray-400">
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400">Name:</div>
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400">D.O.B: <span className="ml-2">/</span><span className="ml-4">/</span></div>
                <div className="w-full sm:w-[25%] p-2">Sex: <span className="ml-2">M / F</span></div>
              </div>
              <div className="p-2 border-b border-gray-400 h-16">Address:</div>
              <div className="flex flex-col sm:flex-row w-full">
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400">Phone:</div>
                <div className="flex-1 p-2">Email:</div>
              </div>
            </div>

            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs mb-4">
              <div className="bg-[#d1d5db] font-bold p-2 border-b border-gray-400">Training Log:</div>
              <div className="flex w-full text-center border-b border-gray-400">
                <div className="w-[20%] p-2 border-r border-gray-400">Training Date</div>
                <div className="flex-1 p-2 border-r border-gray-400">Participant full Name</div>
                <div className="flex-1 p-2">Participant Signature</div>
              </div>
              <div className="flex w-full text-center border-b border-gray-400 h-8">
                <div className="w-[20%] p-2 border-r border-gray-400">/ /</div>
                <div className="flex-1 p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2"></div>
              </div>
              <div className="flex w-full text-center border-b border-gray-400 h-8">
                <div className="w-[20%] p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2"></div>
              </div>
              <div className="flex w-full text-center border-b border-gray-400 h-8">
                <div className="w-[20%] p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2"></div>
              </div>
              <div className="flex w-full text-center border-b border-gray-400 h-8">
                <div className="w-[20%] p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2"></div>
              </div>
              <div className="flex w-full text-center h-8">
                <div className="w-[20%] p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2 border-r border-gray-400"></div>
                <div className="flex-1 p-2"></div>
              </div>
            </div>

            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#d1d5db] font-bold p-2 border-b border-gray-400">Resources</div>
              <div className="flex flex-col sm:flex-row w-full border-b border-gray-400">
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-black"></div>
                  <span>PowerPoint presentation</span>
                </div>
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-black"></div>
                  <span>Leaner Guide</span>
                </div>
                <div className="flex-1 p-2 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-black"></div>
                  <span>Practical tasks</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full border-b border-gray-400">
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-black"></div>
                  <span>Training Videos</span>
                </div>
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-black"></div>
                  <span>Review questions</span>
                </div>
                <div className="flex-1 p-2 flex items-center space-x-2">
                  <div className="w-4 h-4 border border-black"></div>
                  <span>Other:</span>
                </div>
              </div>

              <div className="flex w-full border-b border-gray-400 bg-[#d1d5db]">
                <div className="flex-1 p-2 font-bold border-r border-gray-400">Summary</div>
                <div className="w-[120px] p-2 font-bold text-center">Satisfactory?</div>
              </div>
              <div className="flex w-full">
                <div className="flex-1 p-2 border-r border-gray-400 flex flex-col space-y-4">
                  <p>The participant has:</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border border-black"></div>
                    <span>Attended PowerPoint Presentation /participated in PowerPoint Quiz</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border border-black"></div>
                    <span>Completed Questions (Knowledge assessment)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border border-black"></div>
                    <span>Completed Practical tasks</span>
                  </div>
                  <p className="pt-2 pb-4">Notes/comments:</p>
                </div>
                <div className="w-[120px] flex">
                  <div className="w-1/2 border-r border-gray-400 flex flex-col items-center pt-2 space-y-4">
                    <span>Yes</span>
                    <div className="w-4 h-4 border border-black mt-2"></div>
                    <div className="w-4 h-4 border border-black mt-3"></div>
                    <div className="w-4 h-4 border border-black mt-4"></div>
                  </div>
                  <div className="w-1/2 flex flex-col items-center pt-2 space-y-4">
                    <span>No</span>
                    <div className="w-4 h-4 border border-black mt-2"></div>
                    <div className="w-4 h-4 border border-black mt-3"></div>
                    <div className="w-4 h-4 border border-black mt-4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-4 text-[11px] sm:text-xs">
              <span>Trainer's signature:</span>
              <span className="border-b border-black w-[250px] inline-block h-4"></span>
              <span>Date:</span>
              <span className="border-b border-black w-[150px] inline-block h-4"></span>
            </div>
          </div>

          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p>3/14- 16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: <a href="mailto:info@aietcollege.edu.au" className="underline">info@aietcollege.edu.au</a></p>
            <div className="border-t border-black w-full my-2"></div>
            <div className="flex justify-between w-full">
              <span>Issue Date : 15/08/2021 V2.0</span>
              <span>Page 2 of 4</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 22 (Participant Assessment Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-8">
            <h1 className="text-2xl sm:text-3xl text-[#1a365d] mb-4 border-b-2 border-[#b4c6e7] pb-2">Assessment Information for Learners</h1>
            
            <div className="text-[12px] sm:text-[13px] leading-relaxed space-y-6 mt-8">
              <p>Throughout your training we are committed to your learning by providing a training and assessment framework that ensures the knowledge gained through training is translated into practical on the job improvements.</p>
              
              <p>You are going to be assessed for:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Your skills and knowledge using written and observation activities that apply to the workplace</li>
                <li>Your ability to apply your learning</li>
                <li>Your ability to recognise common principles and actively use these on the job</li>
              </ul>

              <p>All of your assessment and training is provided as a positive learning tool. Your assessor will guide your learning and provide feedback on your responses to the assessment materials until you have been deemed competent in this unit.</p>
              
              <h2 className="text-[#1a365d] font-bold text-lg pt-4">How You Will Be Assessed</h2>
              <p>The process we follow is known as competency-based assessment. This means that evidence of your current skills and knowledge will be measured against national standards of best practice, not against the learning you have undertaken either recently or in the past. Some of the assessment will be concerned with how you apply your skills and knowledge in the workplace, and some in the training room as required by each unit.</p>
              
              <p>The assessment tasks have been designed to enable you to demonstrate the requirements of the performance criteria and knowledge in this unit to successfully demonstrate competency at the required standard.</p>
              
              <p>Your assessor will ensure that you are ready for assessment and will explain the assessment process. Your assessment tasks will outline the evidence to be collected and how it will be collected, for example; a written activity, case study, or demonstration and observation. The assessor will also have determined if you have any special needs to be considered during assessment. Changes can be made to the way assessment is undertaken to account for special needs and this is called making Reasonable Adjustment.</p>
            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">2</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 23 (Participant Assessment Page 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-8">
            <div className="text-[12px] sm:text-[13px] leading-relaxed space-y-6 mt-16">
              
              <div>
                <h2 className="text-[#c00000] underline uppercase mb-1">WHAT HAPPENS IF YOUR RESULT IS 'NOT YET COMPETENT' FOR ONE OR MORE ASSESSMENT TASKS?</h2>
                <p>Our assessment process is designed to answer the question "has the desired learning outcome been achieved yet?" If the answer is "Not yet", then we work with you to see how we can get there. In the case that one or more of your assessments has been marked 'NYS' (not yet satisfactory), your trainer will provide you with the necessary feedback and guidance, in order for you to resubmit your responses.</p>
              </div>

              <div>
                <h2 className="text-[#c00000] underline uppercase mb-1">WHAT IF YOU DISAGREE ON THE ASSESSMENT OUTCOME?</h2>
                <p>You can appeal against a decision made in regard to your assessment. An appeal should only be made if you have been assessed as 'Not Yet Competent' against a specific unit and you feel you have sufficient grounds to believe that you are entitled to be assessed as competent. You must be able to adequately demonstrate that you have the skills, experience and knowledge to be able to meet the requirements of the unit/s you are appealing the assessment of.</p>
                <p className="mt-4">Your trainer will outline the appeals process, which is available to you. You can request a form to make an appeal and submit it to your trainer, the course coordinator, or the administration officer. The RTO will examine the appeal and you will be advised of the outcome within 14 days. Any additional information you wish to provide may be attached to the appeal form.</p>
              </div>

              <div>
                <h2 className="text-[#c00000] underline uppercase mb-1">WHAT IF I BELIEVE I AM ALREADY COMPETENT BEFORE TRAINING?</h2>
                <p>If you believe you already have the knowledge and skills to be able to demonstrate competence in this unit, speak with your trainer, as you may be able to apply for Recognition of Prior Learning (RPL).</p>
              </div>

              <div>
                <h2 className="text-[#1a365d] font-bold text-lg mb-2">Assessor Responsibilities</h2>
                <p>Assessors need to be aware of their responsibilities and carry them out appropriately. To do this they need to:</p>
                <ul className="list-disc pl-10 space-y-3 mt-4">
                  <li>Ensure that participants are assessed fairly based on the outcome of the language, literacy and numeracy review completed at enrolment</li>
                  <li>Ensure that all documentation is signed by the learner, trainer, workplace supervisor and assessor when units and certificates are complete, to ensure that there is no follow-up required from an administration perspective</li>
                  <li>Ensure that their own qualifications are current</li>
                  <li>When required, request the manager or supervisor to determine that the learner is 'satisfactorily' demonstrating the requirements for each unit. 'Satisfactorily' means consistently meeting the standard expected from an experienced operator</li>
                  <li>When required, ensure supervisors and learners sign off on third party assessment forms or third party report</li>
                  <li>Follow the recommendations from moderation and validation meetings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">3</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 24 (Participant Assessment Page 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-8 flex flex-col">
            <h1 className="text-2xl sm:text-3xl text-[#1a365d] mb-4 border-b-2 border-[#b4c6e7] pb-2">Written Activity</h1>
            
            <div className="w-full border border-gray-400 mt-4 flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#b4c6e7] font-bold p-2 text-center border-b border-gray-400">Knowledge Assessment :</div>
              <div className="p-3 border-b border-gray-400 space-y-2">
                <p>For this assessment, the learner must complete the written activity.</p>
                <p>The written activity is a stand-alone activity that will allow the learner to display the requirements of the performance criteria and knowledge evidence in this unit that are essential when deciding overall competency.</p>
              </div>
              
              <div className="flex border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 w-[30%] border-r border-gray-400 flex items-center">Learner Name:</div>
                <div className="bg-[#d9e1f2] p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
              </div>
              
              <div className="flex border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 flex-1 border-r border-gray-400 flex items-center">Date :</div>
                <div className="bg-[#b4c6e7] font-bold p-2 w-[40%] flex items-center justify-center text-center">Has the learner satisfactorily completed the written activity?</div>
              </div>

              {/* Question 1 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>1. What is the purpose of safe work method statements and job safety analysis?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>2. List six (6) hazards associated with working on a roof.</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>3. Why should you report hazards identified on a work site?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">4</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 25 (Participant Assessment Page 5) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              {/* Question 4 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>4. What is your duty in relation to hazards?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>5. Describe four (4) workplace practices that impact on the health and safety of people on Site</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 6 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>6. List Four (4) types of procedures that could relate to working on roofs.</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 7 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>7. Describe the six (6) steps in the hierarchy of control.</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[180px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">5</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 26 (Participant Assessment Page 6) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              {/* Question 8 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>8. What responsibilities do a PCBU have in relation to duty of care?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 9 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>9. What PPE should be worn when working on a roof?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 10 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>10. What types of equipment can you use to safely lift materials and equipment onto a roof?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 11 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>11. What types of activities could require you to work on a roof?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>
              
              {/* Question 12 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>12. What safe work practices must you follow when working on a roof? List Four (4).</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[150px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">6</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 27 (Participant Assessment Page 7) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              {/* Question 13 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>13. What regulations apply to working on a roof?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 14 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>14. What roof safety equipment should be used when working on a roof? List four (4).</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Question 15 */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col">
                  <p>15. What are the units of measurement used for measuring on a worksite?</p>
                  <textarea className="w-full mt-4 p-2 border border-gray-300 min-h-[120px] resize-y outline-none" placeholder="Type your answer here..."></textarea>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              {/* Declaration Section */}
              <div className="p-4 border-b border-gray-400">
                <p className="flex items-start">
                  <span className="mr-2 text-sm">&#x2756;</span>
                  <span>You have now completed the knowledge assessment. Submit this document to your trainer/assessor for marking.</span>
                </p>
                <div className="mt-6 text-center px-4 sm:px-12">
                  <p>
                    <span className="font-bold">Participant Declaration:</span> I declare that the information contained above in the written assessment summary is accurate and is a true reflection of the underpinning written assessment I undertook
                  </p>
                </div>
                <div className="mt-6 font-bold">
                  <p>Participant's</p>
                  <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:items-center">
                    <div className="flex items-end flex-1 mr-4">
                      <span>Name:</span>
                      <div className="flex-1 border-b border-dotted border-black ml-1 min-w-[50px]"></div>
                    </div>
                    <div className="flex items-end flex-1 mr-4">
                      <span>Signature:</span>
                      <div className="flex-1 border-b border-dotted border-black ml-1 min-w-[50px]"></div>
                    </div>
                    <div className="flex items-end">
                      <span>Date</span>
                      <span className="mx-2">....../......./.......</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results & Assessor Section */}
              <div className="flex border-b border-gray-400 p-2 font-bold items-center">
                <div className="w-[120px]">Result</div>
                <div className="flex items-center mr-8">
                  <div className="w-4 h-4 border border-black mr-2"></div>
                  <span>Satisfactory</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-black mr-2"></div>
                  <span>Not Yet Satisfactory</span>
                </div>
              </div>
              
              <div className="flex border-b border-gray-400 bg-[#d9e1f2] font-bold">
                <div className="w-[60%] flex border-r border-gray-400">
                  <div className="p-2 w-[150px]">Assessor's Name :</div>
                  <div className="p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
                </div>
                <div className="w-[40%] flex">
                  <div className="p-2 w-[50px]">Date:</div>
                  <div className="p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
                </div>
              </div>

              <div className="flex bg-[#d9e1f2] font-bold">
                <div className="w-[60%] flex border-r border-gray-400">
                  <div className="p-2 w-[150px]">Assessor's Signature:</div>
                  <div className="p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
                </div>
                <div className="w-[40%]"></div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">7</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 28 (Participant Assessment Page 8) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-8 flex flex-col">
            <h1 className="text-2xl sm:text-3xl text-[#1a365d] mb-4 border-b-2 border-[#b4c6e7] pb-2">Practical Activity</h1>
            
            <div className="w-full border border-gray-400 mt-4 flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#b4c6e7] font-bold p-2 text-center border-b border-gray-400">Practical Assessment</div>
              <div className="p-3 border-b border-gray-400 space-y-2">
                <p>For this assessment, the learner must complete the practical activity.</p>
                <p>The practical activity is a stand-alone activity that will allow the learner to display the knowledge and performance evidence that is essential when deciding overall competency.</p>
              </div>
              
              <div className="flex border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 w-[30%] border-r border-gray-400 flex items-center justify-center">Learner Name:</div>
                <div className="bg-[#d9e1f2] p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
              </div>
              
              <div className="flex border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 w-[30%] border-r border-gray-400 flex items-center justify-center">Date</div>
                <div className="bg-[#d9e1f2] p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="p-2 flex-1 border-r border-gray-400"></div>
                <div className="font-bold p-2 w-[40%] flex items-center justify-center text-center">Has the learner satisfactorily completed the practical activity?</div>
              </div>
              
              <div className="flex border-b border-gray-400 bg-white">
                <div className="p-2 flex-1 border-r border-gray-400 font-bold flex items-center">Did the Learner provide evidence of their ability to:</div>
                <div className="font-bold p-2 w-[60px] flex items-center justify-center text-center">Yes/No</div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400">
                  <p>Notify the customer and arrange for site access using clear language and concepts, and tone and pace appropriate for the audience and purpose.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Recognise the hazards in the work area, and report these to the designated personnel according to workplace procedures, using clear language and concepts, and tone and pace appropriate for the audience and purpose, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Contact with electrical wiring</li>
                    <li>Environmental hazards</li>
                    <li>Fibre offcut damage to eyes and skin</li>
                    <li>Flammable cleaning chemicals fluids and solvents</li>
                    <li>Health hazards</li>
                    <li>Laser damage to eyes</li>
                    <li>Radio frequency (rf) exposure from transmitting antenna in close proximity</li>
                    <li>Roof safety system in poor condition or non-existent</li>
                    <li>Safety hazards</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">8</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 29 (Participant Assessment Page 9) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Follow work health and safety (WHS) legislative requirements, workplace procedures and work instructions to control risks, including through interpreting textual information from sources to identify relevant safety signs, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>State and Territory legislation, Regulations, Codes of practice</li>
                    <li>Workplace policies and procedures</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Comply with safe work practices for working safely on roofs, and adhere to workplace environmental requirements throughout the work, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Provision of safety mesh and nets.</li>
                    <li>Guard railing.</li>
                    <li>Safe access to the rooftop</li>
                    <li>Avoid excessive loads on the structure by not storing all equipment at one point</li>
                    <li>Provide gutter boards</li>
                    <li>Fall prevention systems and safety harnesses, static lines</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Implement duty of care requirements to provide a safe working environment, including through interpreting textual information from sources to identify relevant safety signs, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>The availability of a safe working environment without risks to health</li>
                    <li>The safe availability of plant, structure and systems of work which do not create health risks</li>
                    <li>The safe use, handling, storage and transport of plant, structure and materials</li>
                    <li>The provision of facilities</li>
                    <li>The provision of instructions, training or supervision to workers to do their jobs without risk to their personal health and safety</li>
                    <li>That the health of workers and the conditions of the workplace are regularly monitored to prevent injury or illness and</li>
                    <li>The maintenance of safe and suitable accommodation for workers.</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Complete job safety analysis (JSA) sheets, including hazard identification and risk assessment according to work requirements, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Identification of the existing and potentially new hazards</li>
                    <li>An assessment of the various risks resulting from the hazards</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">9</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 30 (Participant Assessment Page 10) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Control measures required to remove completely or minimize, as much as</li>
                    <li>practicable, the risks resulting from the hazards</li>
                    <li>Identification and contact information details of the authorized and competent persons who are responsible for implementing and monitoring the control measures as well as the program for managing hazards in the workplace.</li>
                  </ul>
                </div>
                <div className="w-[60px]"></div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Use and maintain personal protective equipment and personal safety equipment and apply fall protection and personal safety requirements according to work and regulatory requirements, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Head protection: Industrial safety helmet (hard hats).</li>
                    <li>Safety footwear (safety boots)</li>
                    <li>Fall arrest harness (safety harness)</li>
                    <li>Hand protection (Safety gloves)</li>
                    <li>Hearing protection (earmuffs or ear plugs)</li>
                    <li>Eye protection (safety glasses, goggles).</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Assess the scope of the work according to workplace procedures, relevant legislation, codes, regulations and standards and relevant job information details, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Site location</li>
                    <li>Worksite instructions</li>
                    <li>Job specifications</li>
                    <li>Engineering drawings for the communication equipment on rooftops.</li>
                    <li>Provision of roof openings, skylights, edge protection, corners, safety systems etc.</li>
                    <li>Quality assurance and control requirements.</li>
                    <li>Height and length of the proposed communication items and any other multilevel antennas required any critical dimensions which may affect the maximum safe working loads imposed on the roof including on edges, corners.</li>
                    <li>Safe number of people who can use the rooftop at a given time (edges, corners)</li>
                    <li>Type of access onto the rooftop area e.g. scaffolds, staircase, external ladders.</li>
                    <li>If there is a requirement of protection sheeting, netting or guardrails etc.</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">10</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 31 (Participant Assessment Page 11) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <ul className="list-disc pl-10 space-y-2">
                    <li>SWMS and JSA prepared for the site.</li>
                    <li>Any specific requirement or provisions e.g. pedestrian walkway, restrictions or tie locations, fall arrestors when working on edges, corners etc.</li>
                    <li>Operational and construction details about the communication services, wiring and cabling, towers/equipment etc. for which the rooftop is required, should all be given to the relevant personnel.</li>
                    <li>The main construction program and timeline within which the rooftop equipment installation program should fit in.</li>
                  </ul>
                </div>
                <div className="w-[60px]"></div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Inspect the site to determine the layout and the equipment requirements according to work order, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Checking the layout of the building's rooftop so as to determine the points at which services, equipment and materials can be installed on the supporting rooftop structure without causing overload</li>
                    <li>The structural and physical condition of the support systems on which the communication equipment will be installed.</li>
                    <li>The weather conditions likely to exist and prevail on site, especially when installation of communication equipment is planned</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Select the materials, tools and equipment required for the task, including personal protective equipment, and check them for serviceability, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Rooftop communication towers</li>
                    <li>Masts</li>
                    <li>Radio communication equipment</li>
                    <li>Antennas at different levels</li>
                    <li>Dish antennas of different types and sizes</li>
                    <li>Testing equipment for communication items.</li>
                    <li>Accessories of main communication equipment</li>
                    <li>All associated wiring and cabling</li>
                    <li>Ladders for rooftop access.</li>
                    <li>Safety Equipment items.</li>
                    <li>Cranes if required as per weight/ loading/lifting/placing requirements.</li>
                    <li>Elevating Work Platforms to lift workers, tools, testers etc. to rooftops.</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">11</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 32 (Participant Assessment Page 12) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Inspect and install the fall protection and perimeter protection equipment, ensuring its adequacy for the work and its conformance to regulatory requirements, for example guard rails.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Install the roof safety system according to workplace and regulatory requirements, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Ladders</li>
                    <li>Scaffolds</li>
                    <li>Anchor points</li>
                    <li>Safety Nets</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Select and install the appropriate signage and barricades, interpreting textual information from sources to identify relevant safety signs, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Prohibition signs</li>
                    <li>Mandatory signs</li>
                    <li>Fire signs</li>
                    <li>Other warning signs</li>
                    <li>Emergency information signs</li>
                    <li>Danger signs</li>
                    <li>General information signs</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Inspect the access from the ground to the work area, ensuring it is safe and according to regulatory requirements, for example stairs, ladders, scaffolding, man-lifts, elevated platforms etc.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Estimate the total weight of the material to be raised to rooftop to carry out the work, using the SI systems of measurement.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Determine and use the safest lifting method to bring materials and equipment to rooftop according to regulatory requirements, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Hoists of different types</li>
                    <li>Boom lifts</li>
                    <li>Scissor lifts</li>
                    <li>Winches</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">12</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 33 (Participant Assessment Page 13) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Elevating work platforms. (EWP)</li>
                  </ul>
                </div>
                <div className="w-[60px]"></div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Secure the test equipment, hardware and tools safely on rooftop, and distribute the weight to eliminate the risk of damage to the roof cover, for example against:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Heavy winds</li>
                    <li>Rainy situations</li>
                    <li>Excessive temperature and humid conditions on the rooftops</li>
                    <li>Theft</li>
                  </ul>
                  <p className="pl-4">Loss or damage due to other reasons such as careless handling, collision with other pieces of tools, equipment, men, and materials which may be present on the rooftop.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Periodically inspect the safety system for compliance with regulations, and report faults according to workplace procedures, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Ladders</li>
                    <li>Scaffolding</li>
                    <li>Anchors</li>
                    <li>Safety nets</li>
                    <li>Guard rails</li>
                    <li>Fall arrestors</li>
                    <li>PPE</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Monitor the risk control measures to ensure that they are effective and appropriate to the task and the work environment, for example through regular checking of the risk control measures implemented.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Reassess the risk control measures as required, according to changed work practices or site conditions, and make alterations within scope of authority, for example implementing new controls higher up on the hierarchy of control.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Dismantle the safety system according to the prescribed sequence, and remove it from the worksite, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Personal Protection Equipment.</li>
                    <li>Fall Arrestors / protection devices.</li>
                    <li>Safety harnesses.</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">13</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 34 (Participant Assessment Page 14) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Perimeter protection/ guard rails / toe boards etc.</li>
                    <li>Anchorages of lines to firm points.</li>
                  </ul>
                </div>
                <div className="w-[60px]"></div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Clear the work area, and dispose of or recycle the materials according to state and territory legislation and workplace procedures, for example fasteners, cut pieces of steel sheets, small tools which might have fallen through, nails, bolts, paint, brushes, insulation material fragments, sealant tubes etc.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Clean, check and maintain the tools and equipment according to manufacturer's recommendations and workplace procedures, for example tools should be individually checked first for their intended future and continued serviceability.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Complete the documentation according to workplace requirements, for example:</p>
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Original plans and drawings issued for installation and/or construction</li>
                    <li>approvals</li>
                    <li>Particular building and structure-wise plans and drawings</li>
                    <li>Approved specifications for communication equipment</li>
                    <li>Approved specifications for supporting structural framework</li>
                    <li>Approved specifications for insulation materials, accessories, cables, wiring, testing equipment details, and electric connections.</li>
                    <li>Submittals made for samples, grounding systems.</li>
                    <li>Instructions given by clients and consultants.</li>
                    <li>Local Government regulations and compliance requirements.</li>
                    <li>Material Test certificates</li>
                    <li>Manufacturer's operation manuals and recommendations.</li>
                    <li>All relevant Australian Standards, Codes of Practice etc.</li>
                    <li>Approved rooftop installation procedures</li>
                    <li>Waivers requested by the installation contractor, if any.</li>
                    <li>Record of site incidents, inspections, visits.</li>
                    <li>Minutes of site management meetings.</li>
                    <li>Work progress reports.</li>
                  </ul>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">14</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 35 (Participant Assessment Page 15) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-16 flex flex-col">
            
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <ul className="list-disc pl-10 space-y-2">
                    <li>Minutes of safety and toolbox meetings.</li>
                    <li>Copies of QA/QC documentation.</li>
                  </ul>
                </div>
                <div className="w-[60px]"></div>
              </div>

              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-4 border-r border-gray-400 flex flex-col space-y-4">
                  <p>Notify the customer for sign off using clear language and concepts, and tone and pace appropriate for the audience and purpose.</p>
                </div>
                <div className="w-[60px] flex items-center justify-center">
                  <div className="w-4 h-4 border border-black"></div>
                </div>
              </div>

              <div className="flex flex-col border-b border-gray-400">
                <div className="p-2 font-bold">Feedback to Learner:</div>
                <textarea className="w-full min-h-[250px] p-4 bg-transparent outline-none resize-y" placeholder="Enter feedback here..."></textarea>
              </div>

              <div className="flex border-b border-gray-400 p-2 font-bold items-center">
                <div className="w-[120px]">Result</div>
                <div className="flex items-center mr-8">
                  <div className="w-4 h-4 border border-black mr-2"></div>
                  <span>Satisfactory</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-black mr-2"></div>
                  <span>Not Yet Satisfactory</span>
                </div>
              </div>
              
              <div className="flex border-b border-gray-400 bg-[#d9e1f2] font-bold h-24">
                <div className="w-[70%] flex flex-col border-r border-gray-400">
                  <div className="flex-1 flex items-center p-2 border-b border-gray-400">
                    <div className="w-[150px]">Assessor's Name :</div>
                    <div className="flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
                  </div>
                  <div className="flex-1 flex items-center p-2">
                    <div className="w-[150px]">Assessor's Signature:</div>
                    <div className="flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
                  </div>
                </div>
                <div className="w-[30%] p-2 flex flex-col justify-center">
                  <div>Date:</div>
                  <input type="text" className="w-full bg-transparent outline-none mt-2" />
                </div>
              </div>

            </div>

            <div className="mt-8 text-xs sm:text-sm">
              <p className="mb-4">Assessor comments to clarify assessment results:</p>
              <div className="w-full border-b border-dotted border-black mb-8"></div>
              
              <p className="mb-6">If you have any questions about your results, speak to your trainer/Assessor.</p>
              
              <p className="font-bold border-b border-black inline-block mb-4 pb-1">Successful completion of course</p>
              
              <p>You will receive a Statement of Attainment if your assessment is successful. You may also receive a convenient card with the relevant details to keep as proof of competency.</p>
            </div>

          </div>

          <div className="text-[10px] text-black mt-auto pt-4 relative px-4 sm:px-8">
            <div className="absolute right-8 -top-6">15</div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
              <div>
                <p className="font-bold">Participant assessment- AIET <span className="font-normal">- Issue Date: 231110</span></p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 36 (Participant Assessment Page 16) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-8 flex flex-col">
            
            {/* Logo */}
            <div className="w-full flex mb-6">
              <img src={logoIconImage} alt="STA Logo" className="w-[70px] h-auto object-contain" />
            </div>

            {/* Title */}
            <h1 className="text-lg sm:text-xl font-bold mb-4 border-b border-black pb-1">Participant Course Completion Evaluation</h1>

            {/* Instructions */}
            <div className="text-xs sm:text-sm space-y-3 mb-6">
              <p className="font-bold">Important instructions</p>
              <p>Please tell us about your training. Your feedback plays an important role in developing the quality of your education. In this questionnaire, the term 'training' refers to learning experiences with your training organisation. The term 'trainer' refers to trainers, teachers, lecturers or instructors from your training organisation.</p>
              <p>Provide one response to each item on the form. Complete using a black or blue pen. Print neatly in CAPITAL letters, place a clear "X" inside each box.</p>
              <p>Leave the box blank if the statement does not apply. If you want to change your answer, fill in the entire box and mark the correct box with an 'X'.</p>
            </div>

            {/* Example Box */}
            <div className="flex items-center space-x-2 text-sm mb-6 flex-wrap">
              <span className="mr-2 mb-2">Example:</span>
              <div className="w-8 h-8 border border-black flex items-center justify-center mb-2"></div>
              <div className="w-8 h-8 border border-black flex items-center justify-center font-bold mb-2">X</div>
              <div className="w-8 h-8 border border-black flex items-center justify-center mb-2"></div>
              <div className="w-8 h-8 border border-black flex items-center justify-center mb-2"></div>
              <div className="w-4 h-8 mx-2 mb-2"></div> {/* spacer */}
              <div className="w-8 h-8 bg-black mb-2"></div>
              <div className="w-8 h-8 border border-black flex items-center justify-center font-bold mb-2">X</div>
              <div className="w-8 h-8 border border-black flex items-center justify-center mb-2"></div>
              <div className="w-8 h-8 border border-black flex items-center justify-center mb-2"></div>
            </div>

            {/* More Instructions */}
            <div className="text-xs sm:text-sm space-y-2 mb-6">
              <p><span className="italic font-bold">Instructions:</span> please indicate how much you agree with the following statements.</p>
              <p>This response can be completed and submitted anonymously, however this will restrict our ability to provide focused or remedial improvements in your particular situation.</p>
            </div>

            {/* Trainer / Date */}
            <div className="flex justify-between items-end border-b border-black pb-2 mb-6 font-bold text-sm">
              <div className="flex w-1/2 items-end italic">
                <span className="mr-2">Trainer:</span>
                <input type="text" className="flex-1 bg-transparent outline-none italic border-none" />
              </div>
              <div className="flex w-1/3 items-end italic">
                <span className="mr-2">Date :</span>
                <input type="text" className="flex-1 bg-transparent outline-none italic border-none" />
              </div>
            </div>

            {/* Evaluation Table */}
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              {/* Header Row */}
              <div className="flex border-b border-gray-400 bg-white">
                <div className="flex-1 p-2 border-r border-gray-400 font-bold flex items-center text-sm sm:text-base">
                  Please tick the appropriate response.
                </div>
                <div className="w-[160px] flex h-[100px]">
                  <div className="w-[40px] border-r border-gray-400 flex justify-center items-end pb-2">
                    <span className="font-bold text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Strongly Disagree</span>
                  </div>
                  <div className="w-[40px] border-r border-gray-400 flex justify-center items-end pb-2">
                    <span className="font-bold text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Disagree</span>
                  </div>
                  <div className="w-[40px] border-r border-gray-400 flex justify-center items-end pb-2">
                    <span className="font-bold text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Agree</span>
                  </div>
                  <div className="w-[40px] flex justify-center items-end pb-2">
                    <span className="font-bold text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Strongly Agree</span>
                  </div>
                </div>
              </div>

              {/* Questions 1 to 19 */}
              {[
                "1. I developed the skills expected from this training.",
                "2. I identified ways to build on my current knowledge and skills.",
                "3. The training focused on relevant skills.",
                "4. I developed the knowledge expected from this training.",
                "5. The training prepared me well for work.",
                "6. I set high standards for myself in this training.",
                "7. The training had a good mix of theory and practice.",
                "8. I looked for my own resources to help me learn.",
                "9. Overall, I am satisfied with the training.",
                "10. I would recommend the training organisation to others.",
                "11. Training organisation staff respected my background and needs.",
                "12. I pushed myself to understand things I found confusing.",
                "13. Trainers had an excellent knowledge of the subject content.",
                "14. I received useful feedback on my assessments.",
                "15. The way I was assessed was a fair test of my skills and knowledge.",
                "16. I learned to work with people.",
                "17. The training was at the right level of difficulty for me.",
                "18. The amount of work I had to do was reasonable.",
                "19. Assessments were based on realistic activities."
              ].map((q, i) => (
                <div key={i} className="flex border-b border-gray-400 bg-white">
                  <div className="flex-1 p-2 border-r border-gray-400 flex items-center">
                    {q}
                  </div>
                  <div className="w-[160px] flex h-full min-h-[30px]">
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                  </div>
                </div>
              ))}

            </div>

          </div>

          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 pb-2 text-center">
            <p>Australian International Education and Training Pty Ltd <span className="font-bold mx-1">T/A</span> Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 37 (Participant Assessment Page 17 - Final) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="px-1 sm:px-8 flex-1 mt-8 flex flex-col">
            
            {/* Logo */}
            <div className="w-full flex mb-6 justify-center sm:justify-start">
              <img src={logoIconImage} alt="STA Logo" className="w-[70px] h-auto object-contain" />
            </div>

            {/* Evaluation Table Continuation */}
            <div className="w-full border-t border-l border-r border-gray-400 flex flex-col text-[11px] sm:text-xs">
              
              {/* Questions 20 to 35 */}
              {[
                "20. It was always easy to know the standards expected.",
                "21. Training facilities and materials were in good condition.",
                "22. I usually had a clear idea of what was expected of me.",
                "23. Trainers explained things clearly.",
                "24. The training organisation had a range of services to support learners.",
                "25. I learned to plan and manage my work.",
                "26. The training used up-to-date equipment, facilities and materials.",
                "27. I approached trainers if I needed help.",
                "28. Trainers made the subject as interesting as possible.",
                "29. I would recommend the training to others.",
                "30. The training organisation gave appropriate recognition of existing knowledge and skills.",
                "31. Training resources were available when I needed them.",
                "32. I was given enough material to keep up my interest.",
                "33. The training was flexible enough to meet my needs.",
                "34. Trainers encouraged learners to ask questions.",
                "35. Trainers made it clear right from the start what they expected from me."
              ].map((q, i) => (
                <div key={i} className="flex border-b border-gray-400 bg-white">
                  <div className="flex-1 p-2 border-r border-gray-400 flex items-center">
                    {q}
                  </div>
                  <div className="w-[160px] flex h-full min-h-[30px]">
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] flex items-center justify-center hover:bg-gray-200 cursor-pointer text-transparent hover:text-black">X</div>
                  </div>
                </div>
              ))}

              {/* Questions 36 to 40 (Grey Background & Italic) */}
              {[
                "36. The RTO supported my efforts to learn and complete this qualification",
                "37. The RTO's pre enrolment information was clear and easy to understand",
                "38. The enrolment process was quick and easy to complete",
                "39. The RTO accommodated my special needs",
                "40. The RTO was receptive to all my enquires"
              ].map((q, i) => (
                <div key={i} className="flex border-b border-gray-400 bg-[#d9d9d9] italic">
                  <div className="flex-1 p-2 border-r border-gray-400 flex items-center">
                    {q}
                  </div>
                  <div className="w-[160px] flex h-full min-h-[30px]">
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-300 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-300 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] border-r border-gray-400 flex items-center justify-center hover:bg-gray-300 cursor-pointer text-transparent hover:text-black">X</div>
                    <div className="w-[40px] flex items-center justify-center hover:bg-gray-300 cursor-pointer text-transparent hover:text-black">X</div>
                  </div>
                </div>
              ))}

            </div>

            {/* Additional Comments */}
            <div className="mt-8 text-xs sm:text-sm space-y-8">
              <div>
                <p className="mb-4">Please use this space to make any additional comments regarding the Training and Assessment processes:</p>
                <div className="w-full border-b border-dotted border-black mb-6"></div>
                <div className="w-full border-b border-dotted border-black"></div>
              </div>
              <div>
                <p className="mb-4">And comments on client services:</p>
                <div className="w-full border-b border-dotted border-black mb-6"></div>
                <div className="w-full border-b border-dotted border-black"></div>
              </div>
            </div>

          </div>

          {/* Special Footer for final page */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-12 pb-2">
            <div className="flex flex-col items-center justify-center text-center mb-2">
              <p>Australian International Education and Training Pty Ltd <span className="font-bold mx-1">T/A</span> Safety Training Academy</p>
              <p>3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            </div>
            <div className="flex justify-between items-end">
              <p>Issue Date : 15/08/2021 V2.0</p>
              <p>Page 4 of 4</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

