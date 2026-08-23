import React from 'react';
import logoImage from '../img/logo.png';
import logoIconImage from '../img/logoicon.png';
import coverImage from '../img/question4/image.png';
import page3Image from '../img/question4/image copy.png';

export default function ConfinedSpaceAssessment() {
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
                Enter and work in confined spaces
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-black">RIIWHS202E</h2>
            </div>

            {/* Central Image */}
            <div className="flex justify-center mb-10 flex-1 items-center">
              <img
                src={coverImage}
                alt="Enter and work in confined spaces cover"
                className="w-full max-w-[500px] sm:max-w-[600px] h-auto object-contain border border-gray-300 shadow-sm rounded-sm"
              />
            </div>

            {/* Form Details Table (Responsive Flex Grid) */}
            <div className="w-full mt-auto mb-12 border border-gray-400 flex flex-col text-xs sm:text-sm rounded-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-400 bg-gray-50 flex items-center justify-center sm:justify-start text-center sm:text-left">
                  Name:
                </div>
                <div className="flex-1 flex flex-col sm:flex-row">
                  <div className="flex-1 p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800 placeholder-gray-300"
                    />
                  </div>
                  <div className="flex-1 p-2.5">
                    <input
                      type="text"
                      placeholder="Middle Name"
                      className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800 placeholder-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left sm:invisible">
                  Name (Cont.):
                </div>
                <div className="flex-1 p-2.5">
                  <input
                    type="text"
                    placeholder="Family Name"
                    className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800 placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Mobile No.
                </div>
                <div className="flex-1 p-2.5">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-gray-50">
                <div className="w-full sm:w-[25%] p-3 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Course Name:
                </div>
                <div className="flex-1 p-3 font-bold text-center sm:text-left text-gray-800 leading-tight">
                  Enter and Work in Confined Spaces - RIIWHS202E
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-3 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Enrolment Date:
                </div>
                <div className="flex-1 p-2.5">
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800 placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-3 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  USI
                </div>
                <div className="flex-1 p-2.5">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end text-[9px] sm:text-[10px] text-gray-800 mt-auto pt-8 border-t border-gray-100 gap-2 sm:gap-0">
              <div className="text-center sm:text-left">
                <p className="font-bold">Participant assessment- STA-230831</p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy. RTO 45234</p>
              </div>
              <div className="text-center sm:text-right text-[8px] sm:text-[10px]">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 2 (LLN Test Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-0.5">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="mb-4 px-2 sm:px-8">
            <h2 className="text-base sm:text-lg font-bold text-black mb-3 uppercase tracking-wide">
              LLN Test- RIIWHS202E - Enter and work in confined spaces
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-black uppercase">
              STUDENT INSTRUCTIONS
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-black mb-6 px-2 sm:px-8">
            <p>It is very important that you have the required LLN (Language – speaking, Literacy- reading and writing and Numeracy – calculation) skills to complete the training and achieve your desired vocational outcome.</p>
            <p>To assist you with determining if you have the required LLN skills, this LLN test is used</p>
            <p>Please complete all questions in the spaces provided and PLEASE WRITE CLEARLY USING AN INK PEN ONLY. At the end of the test, an Assessor will meet with you to discuss the results and to discuss your next best move.</p>
            <p>This test must be completed in the presence of a staff member. You have 15 minutes to complete this test</p>
            <p>Calculators may be used for the Numeracy questions</p>
            <p>Interpreters and assistants may not be used for this test ie this test MUST be read and completed in English only</p>
            <p>This test must be conducted on RTO premises, under direct supervision by RTO staff and by the student ONLY – without any assistance</p>
          </div>

          <div className="w-full px-2 sm:px-8 mb-6 flex-1 flex flex-col justify-end">
            {/* Student details table */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6">
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-2.5 font-bold bg-[#e6ebf5] border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Student Name:
                </div>
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <input type="text" className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800" />
                </div>
                <div className="w-full sm:w-[15%] p-2.5 font-bold bg-[#e6ebf5] border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Date:
                </div>
                <div className="w-full sm:w-[20%] p-2">
                  <input type="text" className="w-full bg-transparent outline-none text-center text-gray-800" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-2.5 font-bold bg-[#e6ebf5] border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Student Address
                </div>
                <div className="flex-1 p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <input type="text" className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800" />
                </div>
                <div className="w-full sm:w-[15%] p-2.5 font-bold bg-[#e6ebf5] border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Phone No
                </div>
                <div className="w-full sm:w-[20%] p-2">
                  <input type="text" className="w-full bg-transparent outline-none text-center text-gray-800" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-2.5 font-bold bg-[#e6ebf5] border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Training Applying For
                </div>
                <div className="flex-1 p-2">
                  <input type="text" className="w-full bg-transparent outline-none text-center sm:text-left text-gray-800" />
                </div>
              </div>
            </div>

            <div className="mb-3 font-bold text-xs sm:text-sm">
              Numeracy:
              <div className="ml-4 mt-0.5">1. Write 1 correct answer for each calculation and enter in the space below</div>
            </div>

            {/* Desktop Table view (hidden on mobile) */}
            <div className="hidden md:block w-full border border-gray-400 text-xs sm:text-sm text-center">
              {/* Row 1: Headers */}
              <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-400 font-medium">
                <div className="p-2 border-r border-gray-400 bg-[#d9d9d9] font-bold flex items-center justify-center">Multiplication</div>
                <div className="p-2 border-r border-gray-400 bg-[#ebead6] flex items-center justify-center">25X5</div>
                <div className="p-2 border-r border-gray-400 bg-[#ebead6] flex items-center justify-center">48X2</div>
                <div className="p-2 border-r border-gray-400 bg-[#d9d9d9] font-bold flex items-center justify-center">Division</div>
                <div className="p-2 border-r border-gray-400 bg-[#ebead6] flex items-center justify-center">48/2</div>
                <div className="p-2 bg-[#ebead6] flex items-center justify-center">700/10</div>
              </div>
              {/* Row 2: Inputs */}
              <div className="grid grid-cols-6 border-b border-gray-400 h-10">
                <div className="border-r border-gray-400 bg-[#d9d9d9]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400 bg-[#d9d9d9]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
              </div>
              {/* Row 3: Headers */}
              <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-400 font-medium">
                <div className="p-2 border-r border-gray-400 bg-[#d9d9d9] font-bold flex items-center justify-center">Addition</div>
                <div className="p-2 border-r border-gray-400 bg-[#ebead6] flex items-center justify-center">756+44</div>
                <div className="p-2 border-r border-gray-400 bg-[#ebead6] flex items-center justify-center">85+35</div>
                <div className="p-2 border-r border-gray-400 bg-[#d9d9d9] font-bold flex items-center justify-center">Subtraction</div>
                <div className="p-2 border-r border-gray-400 bg-[#ebead6] flex items-center justify-center">85-40</div>
                <div className="p-2 bg-[#ebead6] flex items-center justify-center">2569-69</div>
              </div>
              {/* Row 4: Inputs */}
              <div className="grid grid-cols-6 h-10">
                <div className="border-r border-gray-400 bg-[#d9d9d9]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400 bg-[#d9d9d9]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
              </div>
            </div>

            {/* Mobile Card view (shown on mobile, hidden on desktop) */}
            <div className="block md:hidden space-y-3">
              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#d9d9d9] text-xs">Multiplication</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">25X5</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">48X2</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#d9d9d9] text-xs">Division</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">48/2</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">700/10</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#d9d9d9] text-xs">Addition</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">756+44</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">85+35</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#d9d9d9] text-xs">Subtraction</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">85-40</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#ebead6] px-1.5 py-0.5 border border-gray-300 rounded mb-1">2569-69</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-6 px-2 sm:px-8 w-full">
            <div className="text-left max-w-[70%]">
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 1 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 3 (LLN Test Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-0.5">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="px-2 sm:px-8 flex-1 flex flex-col">
            <p className="text-xs sm:text-sm text-black mb-4 leading-normal">
              <strong>2.</strong> Numeracy skills to: locate and recognize numbers commonly used in safety signs
            </p>

            {/* Central Signs Image */}
            <div className="mb-4 flex justify-center w-full">
              <img
                src={page3Image}
                alt="Conditions of Entry safety signs"
                className="w-full max-w-[450px] sm:max-w-[550px] h-auto object-contain border border-gray-200 rounded shadow-sm"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-black mb-6">
              <p className="flex flex-col sm:flex-row sm:items-center">
                <span>At this construction site what is the maximum speed limit:</span>
                <input type="text" className="border-b border-gray-400 outline-none sm:ml-2 flex-1 max-w-[200px] bg-transparent text-center font-bold" />
              </p>

              <div>
                <p className="mb-2 leading-relaxed">
                  <strong>3.</strong> At the construction site the site manager has explained that entry to and working in confined spaces on the site can only occur between 10.00am and 1.00pm daily. It is 12.30pm and the worker requires 50 minutes to work in the confined space.
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center">
                  <span>Calculate at what time the worker will complete the job in the confined space:</span>
                  <input type="text" className="border-b border-gray-400 outline-none sm:ml-2 flex-1 max-w-[200px] bg-transparent text-center font-bold" />
                </p>
              </div>

              <div className="pt-2">
                <p className="font-bold mb-1">Literacy</p>
                <p className="text-gray-700 mb-3 italic">Read the following description and answer the questions below. All answers must be based solely on the information provided below</p>
                
                {/* Definitions Box */}
                <div className="border border-gray-300 p-3 sm:p-4 bg-gray-50 rounded space-y-2 text-[11px] sm:text-xs leading-normal">
                  <p className="font-semibold text-black">This unit describes a participant's skills and knowledge required to enter and work in confined spaces in construction sites</p>
                  <p className="text-gray-600 font-medium">WHS Regulation clause 5</p>
                  <p className="text-gray-600 font-semibold uppercase tracking-wider text-[10px]">Definitions</p>
                  <p className="text-black font-medium">A ‘confined space’ means an enclosed or partially enclosed space that:</p>
                  <p className="pl-3">– is not designed or intended to be occupied by a person</p>
                  <p className="pl-3">– is, or is designed or intended to be, at normal atmospheric pressure while any person is in the space; and</p>
                  <p className="pl-3">– is or is likely to be a risk to health and safety from:</p>
                  <ul className="list-none pl-6 space-y-1.5 text-black">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>an atmosphere that does not have a safe oxygen level, or</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5" />
                      <span>contaminants, including airborne gases, vapours and dusts, that may cause injury from fire or explosion, or</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>harmful concentrations of any airborne contaminants, or</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>engulfment.</span>
                    </li>
                  </ul>
                  <p className="pt-2 text-right text-[10px] text-gray-500 italic">(Source: CODE OF PRACTICE CONFINED SPACES - SafeWork NSW)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-4 px-2 sm:px-8 w-full">
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

      {/* ======================= PAGE 4 (LLN Test Page 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-0.5">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          <div className="px-2 sm:px-8 flex-1 text-xs sm:text-sm text-black flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <p className="font-semibold mb-2">Q1: List 1 type of skill and knowledge that this training provides students with.</p>
                <div className="space-y-3">
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Q2: List 2 types of harm that a confined space may pose for a worker</p>
                <div className="space-y-3">
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-bold uppercase tracking-wider text-gray-700 mb-0.5">Language</p>
                <p className="font-semibold text-black mb-2">Student Interview Questions - LLN</p>
                <p className="italic text-gray-600 mb-3 border-l-2 border-amber-500 pl-2">The Assessor will ask you the following questions. Please answer (verbally) as clearly as possible</p>
                
                <div className="space-y-3 pl-2">
                  <div>
                    <p className="font-medium text-black">Why do you want to do this training ?</p>
                    <div className="border-b border-dashed border-gray-400 w-full h-5"></div>
                  </div>
                  <div>
                    <p className="font-medium text-black">What do you think this training is about</p>
                    <div className="border-b border-dashed border-gray-400 w-full h-5"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {/* Divider */}
              <div className="flex items-center justify-center mb-5">
                <div className="flex-1 border-b border-gray-400"></div>
                <span className="px-3 font-bold text-xs uppercase tracking-widest text-gray-600">END OF LLN TEST</span>
                <div className="flex-1 border-b border-gray-400"></div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="font-semibold text-center sm:text-left">By signing below, I verify that the above work is my own and has been completed independently.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-end w-full">
                    <span className="uppercase font-bold whitespace-nowrap text-xs mr-2">LEARNER SIGNATURE:</span>
                    <input type="text" className="border-b border-black flex-1 outline-none bg-transparent" />
                  </div>
                  <div className="flex items-end w-full">
                    <span className="uppercase font-bold whitespace-nowrap text-xs mr-2">NAME (PRINTED):</span>
                    <input type="text" className="border-b border-black flex-1 outline-none bg-transparent" />
                  </div>
                </div>
                <div className="flex items-end w-full sm:w-[48%]">
                  <span className="uppercase font-bold whitespace-nowrap text-xs mr-2">DATE:</span>
                  <input type="text" className="border-b border-black flex-1 outline-none bg-transparent" />
                </div>
              </div>

              <div className="text-center font-bold underline mb-3 text-xs tracking-wider">ASSESSOR TO COMPLETE ONLY</div>

              {/* Assessor Table (Desktop) */}
              <div className="hidden md:block w-full border border-gray-400 text-xs text-center rounded-sm overflow-hidden">
                <div className="grid grid-cols-[2fr_1.5fr_1.2fr] bg-gray-50 border-b border-gray-400 font-bold p-2 text-black">
                  <div>Outcome of LLN Test</div>
                  <div className="border-l border-r border-gray-400">Assessor Comments</div>
                  <div>Outcome <span className="italic font-normal">(Please circle)</span></div>
                </div>
                <div className="grid grid-cols-[2fr_1.5fr_1.2fr] border-b border-gray-400 text-left">
                  <div className="p-2.5 border-r border-gray-400 flex items-center font-medium bg-white">
                    Applicant DOES have the LLN skills to undertake training in this course
                  </div>
                  <div className="p-1 border-r border-gray-400 bg-white">
                    <textarea className="w-full h-full min-h-[50px] p-1.5 resize-none outline-none bg-transparent text-xs" placeholder="Write assessor comments..."></textarea>
                  </div>
                  <div className="p-2 flex flex-col justify-center items-center gap-1.5 bg-white text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer font-bold"><input type="radio" name="outcome" className="w-3.5 h-3.5" /> S (Satisfactory)</label>
                    <label className="flex items-center gap-1.5 cursor-pointer font-bold"><input type="radio" name="outcome" className="w-3.5 h-3.5" /> NYS (Not Yet)</label>
                  </div>
                </div>
                <div className="grid grid-cols-[2fr_1.5fr_1.2fr] border-b border-gray-400 text-left">
                  <div className="p-2.5 border-r border-gray-400 flex items-center font-medium bg-white">
                    If the Assessor is NOT recommending that the registration continues – what strategy does the Assessor recommend for the applicant to increase their chance of future success
                  </div>
                  <div className="p-1 border-r border-gray-400 bg-white">
                    <textarea className="w-full h-full min-h-[50px] p-1.5 resize-none outline-none bg-transparent text-xs" placeholder="Write recommendation strategy..."></textarea>
                  </div>
                  <div className="bg-gray-100"></div>
                </div>
                <div className="grid grid-cols-1 border-b border-gray-400 text-left p-2.5 bg-white">
                  <div className="flex items-center">
                    <span className="font-bold mr-2 text-xs">Trainer Name</span>
                    <input type="text" className="ml-2 w-1/2 outline-none border-b border-gray-400 bg-transparent text-xs font-semibold" />
                  </div>
                </div>
                <div className="grid grid-cols-1 text-left p-2.5 bg-white">
                  <div className="flex items-center">
                    <span className="font-bold mr-2 text-xs">Trainer Sign & Date</span>
                    <input type="text" className="ml-2 w-1/2 outline-none border-b border-gray-400 bg-transparent text-xs font-semibold" />
                  </div>
                </div>
              </div>

              {/* Assessor Table (Mobile) */}
              <div className="block md:hidden space-y-3">
                <div className="border border-gray-400 rounded p-3 bg-gray-50 space-y-2">
                  <div className="font-bold text-center border-b border-gray-300 pb-1.5 mb-2 text-xs bg-gray-200">Outcome of LLN Test</div>
                  
                  <div className="space-y-1.5">
                    <div className="font-semibold text-[11px] text-gray-700">1. Applicant DOES have the LLN skills to undertake training in this course</div>
                    <textarea placeholder="Assessor Comments" className="w-full border border-gray-400 p-2 text-xs bg-white rounded outline-none h-16" />
                    <div className="flex justify-around py-1.5 border-t border-b border-gray-200 text-xs">
                      <label className="flex items-center gap-1 font-bold cursor-pointer"><input type="radio" name="outcome_mob" className="w-3.5 h-3.5" /> S (Satisfactory)</label>
                      <label className="flex items-center gap-1 font-bold cursor-pointer"><input type="radio" name="outcome_mob" className="w-3.5 h-3.5" /> NYS (Not Yet)</label>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1.5">
                    <div className="font-semibold text-[11px] text-gray-700">2. If Assessor is NOT recommending registration: strategy/recommendation</div>
                    <textarea placeholder="Strategy Comments" className="w-full border border-gray-400 p-2 text-xs bg-white rounded outline-none h-16" />
                  </div>

                  <div className="space-y-1.5 pt-1.5 text-xs">
                    <div className="flex items-center">
                      <span className="font-bold text-xs mr-2">Trainer Name:</span>
                      <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent text-xs font-semibold" />
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-xs mr-2">Sign & Date:</span>
                      <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent text-xs font-semibold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
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

      {/* ======================= PAGE 5 (LLN Test Page 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-sm sm:text-base font-bold text-black mb-0.5">Safety Training Academy</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            </div>
          </div>

          {/* Middle Banner */}
          <div className="flex-1 flex items-center justify-center">
            <div className="border border-gray-400 py-12 px-6 sm:px-16 w-full max-w-md mx-auto text-center rounded shadow-sm bg-gray-50">
              <div className="border-t-2 border-[#1e3a8a] mb-5 w-full"></div>
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-black py-2">
                PLEASE BEGIN WITH ENROLMENT
              </h2>
              <div className="border-b-2 border-[#1e3a8a] w-full"></div>
            </div>
          </div>
          
          {/* Footer */}
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

      {/* ======================= PAGE 6 (Enrolment Form Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <p className="text-[10px] sm:text-xs italic font-bold mb-3 text-center sm:text-left text-gray-700">
              PLEASE COMPLETE ALL SECTIONS clearly and carefully by writing in BLOCK LETTERS using a black or blue pen.
            </p>
            <h3 className="text-sm sm:text-base font-extrabold mb-3 text-blue-900 border-b border-blue-900 pb-1">
              SECTION 1 – APPLICANT INFORMATION
            </h3>

            {/* Applicant Details Form Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                APPLICANT DETAILS
              </div>
              <div className="p-2 border-b border-gray-400 bg-gray-50 text-[10px] sm:text-xs">
                Please complete <span className="font-bold">full name and date of birth as listed on your ID documents</span>
              </div>
              
              {/* Title Checklist */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 p-2 gap-2 bg-white">
                <div className="w-full sm:w-[25%] font-bold text-gray-800">Title (please tick)</div>
                <div className="flex-1 flex flex-wrap gap-3 sm:gap-4 items-center">
                  {['Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Other'].map((title) => (
                    <label key={title} className="flex items-center gap-1.5 cursor-pointer font-medium">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> {title}
                    </label>
                  ))}
                </div>
              </div>

              {/* Surname */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Surname</div>
                <div className="flex-1 p-1">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
              </div>

              {/* Given Name / Middle Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Given name</div>
                <div className="flex-1 flex flex-col sm:flex-row border-b sm:border-b-0 border-gray-400">
                  <div className="flex-1 p-1 border-r-0 sm:border-r border-gray-400">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                  <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">Middle name</div>
                  <div className="flex-1 p-1">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                </div>
              </div>

              {/* Preferred Name / DOB */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Preferred name if different</div>
                <div className="flex-1 flex flex-col sm:flex-row border-b sm:border-b-0 border-gray-400">
                  <div className="flex-1 p-1 border-r-0 sm:border-r border-gray-400">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                  <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">Date of Birth</div>
                  <div className="flex-1 p-1 flex items-center justify-center text-gray-500 font-bold tracking-widest text-[11px] sm:text-xs">
                    DD / MM / YYYY
                  </div>
                </div>
              </div>

              {/* Gender / Email */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Gender</div>
                <div className="flex-1 flex flex-col sm:flex-row border-b sm:border-b-0 border-gray-400">
                  <div className="flex-1 p-2 border-r-0 sm:border-r border-gray-400 flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> Male</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> Female</label>
                  </div>
                  <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">Email</div>
                  <div className="flex-1 p-1">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                </div>
              </div>

              {/* Home Phone / Work Phone */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Home Phone</div>
                <div className="flex-1 flex flex-col sm:flex-row border-b sm:border-b-0 border-gray-400">
                  <div className="flex-1 p-1 border-r-0 sm:border-r border-gray-400">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                  <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">Work Phone</div>
                  <div className="flex-1 p-1">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                </div>
              </div>

              {/* Mobile Phone */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Mobile Phone</div>
                <div className="flex-1 p-1">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
              </div>

              {/* Residential Address */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Residential Address</div>
                <div className="flex-1 p-1">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
              </div>

              {/* Suburb / State / Postcode (Residential) */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white text-[11px] sm:text-xs">
                <div className="w-full sm:w-[25%] p-2 bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 sm:invisible">Address Cont.</div>
                <div className="flex-1 grid grid-cols-3">
                  <div className="p-1 border-r border-gray-400 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">Suburb:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                  <div className="p-1 border-r border-gray-400 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">State:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                  <div className="p-1 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">Postcode:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                </div>
              </div>

              {/* Postal Address */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Postal Address</div>
                <div className="flex-1 p-1">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" placeholder="If different from above" />
                </div>
              </div>

              {/* Suburb / State / Postcode (Postal) */}
              <div className="flex flex-col sm:flex-row bg-white text-[11px] sm:text-xs">
                <div className="w-full sm:w-[25%] p-2 bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400 sm:invisible">Postal Cont.</div>
                <div className="flex-1 grid grid-cols-3">
                  <div className="p-1 border-r border-gray-400 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">Suburb:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                  <div className="p-1 border-r border-gray-400 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">State:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                  <div className="p-1 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">Postcode:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                EMERGENCY CONTACT
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[15%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Full Name</div>
                <div className="flex-1 p-1 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
                <div className="w-full sm:w-[15%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Relationship</div>
                <div className="flex-1 p-1 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
                <div className="w-full sm:w-[15%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">Contact No</div>
                <div className="flex-1 p-1">
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="p-3 bg-white text-[11px] sm:text-xs">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-gray-800 leading-tight">
                    In the event of an emergency do you give the STA permission to organise emergency transport and treatment and do you agree to pay all costs related to the emergency?
                  </span>
                  <div className="flex gap-4 flex-shrink-0 font-bold">
                    <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> Yes</label>
                    <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> No</label>
                  </div>
                </div>
              </div>
            </div>

            {/* USI Identifier Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                UNIQUE STUDENT IDENTIFIER (USI)
              </div>
              <div className="p-3 sm:p-4 text-[#1a365d] leading-relaxed border-b border-gray-400 text-[10px] sm:text-[11px] bg-white space-y-2">
                <p>From 1 January 2015, Safety Training Academy can be prevented from issuing you with a nationally recognised VET qualification or statement of attainment when you complete your course if you do not have a Unique Student Identifier (USI). In addition, we are required to include your USI in the data we submit to NCVER. If you have not yet obtained a USI you can apply for it directly at <a href="https://www.usi.gov.au/students/create-your-usi" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">https://www.usi.gov.au/students/create-your-usi</a> on a computer or mobile device.</p>
                <p>Enter your Unique Student Identifier (USI) (if you already have one) You may already have a USI if you have done any nationally recognised training, which could include training at work, completing a first aid course or RSA (Responsible Service of Alcohol) course, getting a white card, or studying at a TAFE or training organisation. It is important that you try to find out whether you already have a USI before attempting to create a new one. You should not have more than one USI. To check if you already have a USI, use the ‘Forgotten USI’ link on the USI website at <a href="https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/</a></p>
              </div>
              <div className="p-3 sm:p-4 bg-white text-[11px] sm:text-xs">
                <p className="font-extrabold italic mb-3 text-black">17) Unique Student Identifier (USI)</p>
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                  <div className="flex items-start max-w-lg">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">I give permission for Safety Training Academy to access my Unique Student Identifier (USI) for the purpose of recording my results.</p>
                  </div>
                  
                  <div className="flex items-center text-black font-extrabold flex-shrink-0 self-center lg:self-auto">
                    <span className="mr-3 text-sm">USI:</span>
                    <div className="flex border border-gray-400 bg-white">
                      {Array(10).fill(0).map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-5 h-7 sm:w-6 sm:h-8 text-center border-r border-gray-400 last:border-r-0 outline-none uppercase font-bold text-sm bg-transparent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 1 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 7 (Enrolment Form Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-[#1a365d] font-bold">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline text-center mb-4">
              USI application through STA (if you do not already have one)
            </h3>

            <div className="mb-4 text-[#1a365d]">
              <p className="font-extrabold text-sm mb-1 text-black">Application for Unique Student Identifier (USI)</p>
              <p className="mb-3 font-normal text-gray-700 leading-relaxed text-[11px] sm:text-xs">
                If you would like us Safety Training Academy to apply for a USI on your behalf you must authorise us to do so and declare that you have read the privacy information at https://www.usi.gov.au/documents/privacynotice-when-rto-applies-their-behalf. You must also provide some additional information as noted at the end of this form so that we can apply for a USI on your behalf.
              </p>
              
              <div className="text-black font-semibold mb-3 flex flex-wrap items-center gap-2">
                <span>I [Name]</span>
                <input type="text" className="border-b border-gray-400 outline-none w-full sm:w-[320px] bg-transparent text-center" placeholder="Applicant Name" />
                <span className="leading-normal">authorise Safety Training Academy to apply pursuant to sub-section 9(2) of the Student Identifiers Act 2014, for a USI on my behalf.</span>
              </div>

              <div className="flex items-start mb-3 gap-2">
                <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                <p className="text-[#1a365d] font-normal leading-relaxed text-[11px] sm:text-xs">
                  I have read and I consent to the collection, use and disclosure of my personal information (which may include sensitive information) pursuant to the information detailed at <a href="https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf" target="_blank" rel="noreferrer" className="underline text-blue-700 font-bold">https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf</a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-1">
                <span className="whitespace-nowrap">Town/City of Birth:</span>
                <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent px-2 text-center" />
                <span className="whitespace-nowrap font-normal text-gray-600 text-[10px] sm:text-xs">(please write the name of the Australian or overseas town or city where you were born)</span>
              </div>
            </div>

            <div className="mb-4 text-[#1a365d] text-[11px] sm:text-xs leading-relaxed">
              <p>We will also need to verify your identity to create your USI.</p>
              <p>Please provide details for <span className="underline font-extrabold text-black">one</span> of the forms of identity below (numbered 1 to 8).</p>
              <p className="text-black">Please ensure that the name written in 'Personal Details' section is exactly the same as written in the document you provide below.</p>
            </div>

            {/* Desktop Verification Table */}
            <div className="hidden md:block w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white">
              <div className="grid grid-cols-[22%_39%_39%] border-b border-gray-400 text-left bg-gray-50 text-[11px] font-bold">
                <div className="p-2.5 border-r border-gray-400">Identity Document Type</div>
                <div className="p-2.5 border-r border-gray-400">Details Field 1</div>
                <div className="p-2.5">Details Field 2</div>
              </div>

              {/* 1. Driver Licence */}
              <div className="grid grid-cols-[22%_39%_39%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400">1. Australian Driver's Licence:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span>State:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 flex items-center">
                  <span>Licence number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
              </div>

              {/* 2. Medicare Card */}
              <div className="grid grid-cols-[22%_39%_39%] border-b border-gray-400 text-left items-stretch bg-white">
                <div className="p-2.5 border-r border-gray-400 flex items-center">2. Medicare Card:</div>
                <div className="border-r border-gray-400 flex flex-col justify-between">
                  <div className="p-2 border-b border-gray-300 flex items-center">
                    <span className="whitespace-nowrap">Card number:</span>
                    <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                  </div>
                  <div className="p-2 flex items-center justify-between">
                    <span>Colour:</span>
                    <div className="flex gap-2 text-[10px]">
                      {['Green', 'Yellow', 'Blue'].map((col) => (
                        <label key={col} className="flex items-center gap-1 cursor-pointer">
                          <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> {col}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="p-2 border-b border-gray-300 flex items-center text-[10px]">
                    <span className="leading-tight">Individual ref no (next to name):</span>
                    <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                  </div>
                  <div className="p-2 flex items-center">
                    <span className="whitespace-nowrap">Expiry date (DD/MM/YYYY):</span>
                    <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" placeholder="__ / __ / ____" />
                  </div>
                </div>
              </div>

              {/* 3 & 4 Birth Cert & Immicard */}
              <div className="grid grid-cols-[22%_39%_39%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400">3. Australian Birth Certificate:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span>State/Territory:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 flex items-center">
                  <span className="font-bold text-[#1a365d] mr-1">4. Immicard Number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
              </div>

              {/* 5. Passport */}
              <div className="grid grid-cols-[22%_78%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400">5. Australian Passport:</div>
                <div className="p-2.5 flex items-center">
                  <span>Passport number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 max-w-sm bg-transparent text-center" />
                </div>
              </div>

              {/* 6. Non-Aus Passport */}
              <div className="grid grid-cols-[22%_39%_39%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400">6. Non-Australian Passport:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span>Passport number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 flex items-center">
                  <span>Country of issue:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
              </div>

              {/* 7. Citizenship Cert */}
              <div className="grid grid-cols-[22%_39%_39%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400">7. Citizenship Certificate:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span>Stock number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 flex items-center">
                  <span className="whitespace-nowrap">Acquisition date:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" placeholder="DD/MM/YYYY" />
                </div>
              </div>

              {/* 8. Registration by Descent */}
              <div className="grid grid-cols-[22%_78%] text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400">8. Registration by Descent:</div>
                <div className="p-2.5 flex items-center">
                  <span className="whitespace-nowrap">Acquisition date (DD/MM/YYYY):</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 max-w-sm bg-transparent text-center" placeholder="__ / __ / ____" />
                </div>
              </div>
            </div>

            {/* Mobile Verification Cards */}
            <div className="block md:hidden space-y-3 mb-4">
              {/* Card 1 */}
              <div className="border border-gray-400 rounded p-2.5 bg-white">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1 mb-2">1. Australian Driver's Licence</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">State</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Licence number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-400 rounded p-2.5 bg-white space-y-2">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1">2. Medicare Card</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Card number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Individual reference number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 mb-1">Card colour</span>
                  <div className="flex gap-4">
                    {['Green', 'Yellow', 'Blue'].map((col) => (
                      <label key={col} className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> {col}</label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col"><span className="text-[10px] text-gray-500">Expiry date (DD/MM/YYYY)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" placeholder="__ / __ / ____" /></div>
              </div>

              {/* Card 3 & 4 */}
              <div className="border border-gray-400 rounded p-2.5 bg-white">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1 mb-2">3. Birth Certificate & 4. Immicard</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">State/Territory (Birth Cert)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Immicard Number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                </div>
              </div>

              {/* Card 5 & 6 */}
              <div className="border border-gray-400 rounded p-2.5 bg-white space-y-2">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1">5. Australian Passport & 6. Non-Aus Passport</div>
                <div className="flex flex-col"><span className="text-[10px] text-gray-500">5. Passport Number (Aus)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">6. Passport Number (Non-Aus)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Country of issue</span><input type="text" className="border-gray-300 border p-1 rounded bg-transparent text-xs" /></div>
                </div>
              </div>

              {/* Card 7 & 8 */}
              <div className="border border-gray-400 rounded p-2.5 bg-white space-y-2">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1">7. Citizenship & 8. Registration by Descent</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Stock number (7)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Acquisition date (7)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" placeholder="DD/MM/YYYY" /></div>
                </div>
                <div className="flex flex-col"><span className="text-[10px] text-gray-500">Acquisition date (8)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" placeholder="DD/MM/YYYY" /></div>
              </div>
            </div>

            {/* Office Use Section */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white">
              <div className="p-2 border-b border-gray-400 bg-gray-800 text-white font-bold text-sm">
                OFFICE USE Only
              </div>
              <div className="p-3 border-b border-gray-400 text-black leading-relaxed font-normal text-[11px] sm:text-xs">
                In accordance with section 11 of the <span className="italic">Student Identifiers Act 2014</span>, Safety Training Academy will securely destroy personal information which we collect from individuals solely for the purpose of applying for a USI on their behalf as soon as practicable after we have made the application or the information is no longer needed for that purpose.
              </div>
              
              {/* Photo ID verification inputs */}
              <div className="p-3 bg-white text-black font-semibold text-xs space-y-3">
                <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
                  <div className="w-full lg:w-[30%] font-bold text-[#1a365d] text-sm">PHOTO ID VERIFIED:</div>
                  <div className="flex-1 flex flex-wrap gap-4 items-center">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>Passport number:</span>
                      <input type="text" className="border-b border-gray-400 outline-none ml-1 bg-transparent w-28 text-center" />
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>Driver licence number:</span>
                      <input type="text" className="border-b border-gray-400 outline-none ml-1 bg-transparent w-28 text-center" />
                    </label>
                  </div>
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-1.5 cursor-pointer w-full">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span>Other, please state:</span>
                    <input type="text" className="border-b border-gray-400 outline-none ml-1 bg-transparent flex-1" />
                  </label>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 2 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 8 (Enrolment Form Page 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <h3 className="text-sm sm:text-base font-extrabold mb-2 uppercase text-blue-900 border-b border-blue-900 pb-1">
              SECTION 2 – EDUCATION AND EMPLOYMENT INFORMATION
            </h3>
            
            <div className="text-[11px] sm:text-xs mb-4 text-gray-700 leading-normal">
              <p className="font-semibold text-black">AVETMISS DATA COLLECTION</p>
              <p className="italic">Information collected in this section is used for the purposes of National reporting and planning.</p>
              <p className="font-bold uppercase tracking-wider text-[10px] text-red-600">Please COMPLETE ALL SECTIONS.</p>
            </div>

            {/* PRIOR EDUCATION Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                PRIOR EDUCATION
              </div>
              <div className="p-2.5 border-b border-gray-400 bg-gray-50 font-semibold">
                What was your highest <span className="font-extrabold italic text-black">completed</span> level at school?
              </div>
              
              {/* Option checkboxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 p-3 gap-2 bg-white font-medium">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-[#1a365d] mr-1">12</sup> Year 12 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-[#1a365d] mr-1">9</sup> Year 9 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-[#1a365d] mr-1">11</sup> Year 11 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-[#1a365d] mr-1">8</sup> Year 8 or below</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-[#1a365d] mr-1">10</sup> Year 10 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-[#1a365d] mr-1">02</sup> Never attended school</span>
                </label>
              </div>

              {/* Completion details */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  <span>In what <span className="font-bold italic">year</span> did you complete that level?</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 max-w-[120px] bg-transparent text-center font-semibold" />
                </div>
                <div className="p-2 flex items-center">
                  <span>Name of School:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center font-semibold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center flex-wrap gap-2">
                  <span>If in Australia, State:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-14 bg-transparent text-center font-semibold" />
                  <span>Postcode:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-16 bg-transparent text-center font-semibold" />
                </div>
                <div className="p-2 flex items-center">
                  <span>If not in Australia, Country:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center font-semibold" />
                </div>
              </div>
            </div>

            {/* QUALIFICATIONS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                QUALIFICATIONS
              </div>
              <div className="p-2.5 border-b border-gray-400 bg-gray-50 font-semibold leading-relaxed">
                Do you have post-secondary or vocational/trade qualifications from any accredited/recognised educational institution(s)?
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 p-2.5 gap-2 bg-white font-bold text-black">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>Yes – <span className="italic font-normal text-gray-700">Please specify and <span className="underline font-bold text-black">provide a copy</span></span></span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>No - <span className="italic font-normal text-gray-700">go to next question '<span className="font-bold text-black">Employment Status</span>'</span></span>
                </label>
              </div>

              <div className="p-3 bg-white space-y-2 text-black font-semibold">
                <p className="text-[11px] text-gray-500 font-bold mb-1">If YES, then tick ANY applicable boxes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs">
                  {[
                    { id: '008', name: 'Bachelor Degree or Higher Degree' },
                    { id: '410', name: 'Advanced Diploma or Associate Degree' },
                    { id: '420', name: 'Diploma (or Associate Diploma)' },
                    { id: '511', name: 'Certificate IV (or Advanced Certificate/Technician)' },
                    { id: '514', name: 'Certificate III (or Trade Certificate)' },
                    { id: '521', name: 'Certificate II' },
                    { id: '524', name: 'Certificate I' },
                  ].map((qual) => (
                    <label key={qual.id} className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span><sup className="text-[#1a365d] mr-1">{qual.id}</sup> {qual.name}</span>
                    </label>
                  ))}
                  <label className="flex items-start gap-1.5 cursor-pointer sm:col-span-2">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                    <span className="leading-tight"><sup className="text-[#1a365d] mr-1">990</sup> Other education (including certificates or overseas qualifications not listed above)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* EMPLOYMENT STATUS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                EMPLOYMENT STATUS
              </div>
              <div className="p-2.5 border-b border-gray-400 bg-gray-50 font-semibold">
                Of the following, which best describes your current employment status? (please tick ONE box only)
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-2 bg-white text-[11px] sm:text-xs font-semibold">
                {[
                  { id: '01', name: 'Full-time employee' },
                  { id: '06', name: 'Unemployed – seeking full-time work' },
                  { id: '02', name: 'Part-time employee' },
                  { id: '07', name: 'Unemployed – seeking part-time work' },
                  { id: '03', name: 'Self-employed- not employing others' },
                  { id: '08', name: 'Not employed – not seeking employment' },
                  { id: '04', name: 'Self employed – employing others' },
                  { id: '05', name: 'Employed – unpaid worker in family business' },
                ].map((emp) => (
                  <label key={emp.id} className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span><sup className="text-[#1a365d] mr-1">{emp.id}</sup> {emp.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* EMPLOYMENT DETAILS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                EMPLOYMENT DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Employer's name:</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
                <div className="p-2 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Supervisor's name:</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
              </div>
              <div className="p-2 border-b border-gray-400 flex items-center bg-white">
                <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Address:</span>
                <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Email:</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
                <div className="p-2 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Phone:</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 3 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 9 (Enrolment Form Page 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            
            {/* REASON FOR UNDERTAKING TRAINING Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                REASON FOR UNDERTAKING TRAINING / RPL <span className="font-normal text-xs text-gray-700">(tick ONE box only)</span>
              </div>
              <div className="p-2.5 border-b border-gray-400 bg-gray-50 font-semibold">
                Of the following, which best describes your main reason for gaining this qualification?
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-2 bg-white text-[11px] sm:text-xs font-semibold">
                {[
                  { id: '01', name: 'To get a job' },
                  { id: '06', name: 'It is a requirement for my job' },
                  { id: '02', name: 'To develop my existing business' },
                  { id: '07', name: 'I wanted extra skills for my job' },
                  { id: '03', name: 'To start my own business' },
                  { id: '08', name: 'To get into another course of study' },
                  { id: '04', name: 'To try for a different career' },
                  { id: '12', name: 'For personal interest or self-development' },
                  { id: '05', name: 'To get a better job or promotion' },
                ].map((reason) => (
                  <label key={reason.id} className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span><sup className="text-[#1a365d] mr-1">{reason.id}</sup> {reason.name}</span>
                  </label>
                ))}
                <label className="flex items-center gap-1.5 cursor-pointer sm:col-span-2">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span className="flex items-center gap-1">
                    <sup className="text-[#1a365d]">{`11`}</sup> Other <span className="italic font-normal">(please specify):</span>
                    <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-36 text-center font-bold" />
                  </span>
                </label>
              </div>
            </div>

            <h3 className="text-sm sm:text-base font-extrabold mb-1 uppercase text-blue-900 border-b border-blue-900 pb-1">
              SECTION 3 – ADDITIONAL INFORMATION
            </h3>
            <p className="text-[10px] sm:text-xs italic font-bold mb-4 text-gray-600">
              Information collected in this section is strictly confidential, available only to limited college staff and for the purposes of reporting and planning.
            </p>

            {/* SPECIAL NEEDS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                SPECIAL NEEDS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 bg-white">
                <div className="p-3 border-b md:border-b-0 md:border-r border-gray-400 font-semibold leading-relaxed">
                  Do you consider that you have any type of disability that may affect your ability to undertake assessment?
                </div>
                <div className="p-3 flex flex-col justify-center gap-2 font-semibold">
                  <label className="flex items-start gap-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">No - <span className="italic font-normal text-gray-700">go to next question '<span className="font-bold text-black">Language & Cultural Diversity</span>'</span></span>
                  </label>
                  <label className="flex items-start gap-1.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">Yes – <span className="italic font-normal text-gray-700">please provide details below</span></span>
                  </label>
                </div>
              </div>

              {/* Disability checkboxes */}
              <div className="p-3 bg-white grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs font-semibold">
                {[
                  { id: '11', name: 'Hearing' },
                  { id: '16', name: 'Acquired Brain Impairment' },
                  { id: '12', name: 'Physical' },
                  { id: '17', name: 'Vision' },
                  { id: '13', name: 'Intellectual' },
                  { id: '18', name: 'Medical Condition' },
                  { id: '14', name: 'Learning' },
                  { id: '15', name: 'Mental Illness' },
                ].map((spec) => (
                  <label key={spec.id} className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span><sup className="text-[#1a365d] mr-1">{spec.id}</sup> {spec.name}</span>
                  </label>
                ))}
                <label className="flex items-center gap-1.5 cursor-pointer sm:col-span-2">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span className="flex items-center gap-1">
                    <sup className="text-[#1a365d]">{`19`}</sup> Other <span className="font-normal text-gray-500">(please specify):</span>
                    <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-40 text-center font-semibold" />
                  </span>
                </label>
              </div>

              <div className="p-2.5 bg-gray-50 border-t border-gray-400 text-gray-700 italic text-[10px] sm:text-xs font-medium text-center">
                If you indicated the presence of a disability, impairment or long-term condition, please select the area(s) from the list on page
              </div>
            </div>

            {/* LANGUAGE AND CULTURAL DIVERSITY Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400">
                LANGUAGE AND CULTURAL DIVERSITY
              </div>

              {/* Country of Birth */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[25%] p-2.5 font-bold bg-gray-50 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Country of Birth
                </div>
                <div className="flex-1 p-2 flex flex-wrap gap-4 items-center">
                  <label className="flex items-center gap-1.5 cursor-pointer font-bold">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span><sup className="text-[#1a365d] mr-1">1101</sup> Australia</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer font-bold flex-1 min-w-[240px]">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span className="flex items-center gap-1 flex-1">
                      <span>Other <span className="text-[10px] font-normal text-gray-500">(please specify):</span></span>
                      <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-24 text-center" />
                      <span>Place of Birth:</span>
                      <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-20 text-center" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Aboriginal */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[25%] p-2.5 font-bold bg-gray-50 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Aboriginal &/or Torres Strait Islander Origin
                </div>
                <div className="flex-1 p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 font-bold">
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-[#1a365d] mr-1">4</sup> No</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-[#1a365d] mr-1">2</sup> Torres Strait Islander</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-[#1a365d] mr-1">13</sup> Aboriginal</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-[#1a365d] mr-1">13</sup> Aboriginal & Torres Strait Islander</span></label>
                </div>
              </div>

              {/* Language spoken */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[25%] p-2.5 font-bold bg-gray-50 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Language spoken at home
                </div>
                <div className="flex-1 p-2 flex flex-wrap gap-4 items-center font-bold">
                  <label className="flex items-start gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5" /> <span className="leading-tight"><sup className="text-[#1a365d] mr-1">1201</sup> English Only (skip next question)</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer flex-1 min-w-[200px]"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span className="flex items-center gap-1 flex-1"><span>Other <span className="font-normal text-gray-500 text-[10px]">(specify):</span></span> <input type="text" className="border-b border-gray-400 outline-none bg-transparent flex-1" /></span></label>
                </div>
              </div>

              {/* How well English */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[25%] p-2.5 font-bold bg-gray-50 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  How well do you speak English?
                </div>
                <div className="flex-1 p-2 flex flex-wrap gap-4 sm:gap-6 items-center font-bold">
                  {['Very Well', 'Well', 'Not well', 'Not at all'].map((well) => (
                    <label key={well} className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> {well}
                    </label>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 4 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 10 (Enrolment Form Page 5) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <h3 className="text-sm sm:text-base font-extrabold mb-3 uppercase text-blue-900 border-b border-blue-900 pb-1">
              SECTION 4– ENROLMENT INFORMATION
            </h3>

            {/* Qualifications Choices Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400 flex flex-col sm:flex-row justify-between items-center gap-1">
                <span>Qualifications – please tick qualification for which you are applying.</span>
                <span className="text-xs font-normal text-gray-700 italic">( Assess only- RPL)</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 p-3 gap-3 bg-white font-bold">
                <label className="flex items-start gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">CPC30220 Certificate III in Carpentry<br/><span className="font-normal text-gray-500 text-[10px]">(34 Units of Competency)</span></span>
                </label>
                <label className="flex items-start gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">CPC30620 Certificate III in Painting and Decorating<br/><span className="font-normal text-gray-500 text-[10px]">(29 Units of Competency)</span></span>
                </label>
                <label className="flex items-start gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">CPC31220 Certificate III Wall and Ceiling Lining<br/><span className="font-normal text-gray-500 text-[10px]">(29 Units of Competency)</span></span>
                </label>
                <label className="flex items-start gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">CPC31320 Certificate III in Wall and Floor Tiling<br/><span className="font-normal text-gray-500 text-[10px]">(20 Units of Competency)</span></span>
                </label>
              </div>

              {/* CT / RPL / Start Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 bg-white font-bold">
                <div className="p-2.5 border-b md:border-b-0 md:border-r border-gray-400 flex items-center justify-between">
                  <span>Are you applying for CT as well as RPL</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> No</label>
                  </div>
                </div>
                <div className="p-2.5 flex items-center justify-between">
                  <span>Preferred Start Date</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-32 bg-transparent text-center text-gray-500 font-bold" placeholder="DD / MM / YYYY" />
                </div>
              </div>

              <div className="p-3 bg-white font-bold">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Do you have access to a workplace</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> Yes</label>
                    <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> No</label>
                  </div>
                  <span className="sm:ml-4 whitespace-nowrap">Site location:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent px-1 font-semibold" />
                </div>
              </div>
            </div>

            {/* Short Courses Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400 text-center uppercase tracking-wide">
                Short Courses
              </div>
              <div className="bg-[#c5e6f5] p-2 border-b border-gray-400 text-black font-bold flex flex-col sm:flex-row justify-between items-center gap-1">
                <span>Unit of competency – Please indicate course chosen</span>
                <span className="font-semibold text-gray-700 italic">( Training and Assessemnt program)</span>
              </div>

              <div className="p-2.5 space-y-3 font-semibold text-black">
                {/* White Card */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">White Card:</div>
                  <label className="flex items-center gap-1.5 cursor-pointer ml-1 text-[11px] sm:text-xs">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span>CPCWHS1001 - Prepare to work safely in the construction industry</span>
                  </label>
                </div>

                {/* Working at Heights */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Working at Heights :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>RIIWHS204E - Work safely at heights</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">ICTWHS201 - Provide telecommunications services safely on roofs</span>
                    </label>
                  </div>
                </div>

                {/* Confined Spaces */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Confined Spaces :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs font-semibold">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>RIIWHS202E - Enter and work in confined spaces</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>MSMWHS217 - Gas test atmospheres</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>MSMWHS201 - Conduct hazard analysis</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>MSMPER300 - Issue work permits</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer sm:col-span-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">MSMPER200 - Work in accordance with an issued permit</span>
                    </label>
                  </div>
                </div>

                {/* High Risk Work */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">High risk Work :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>TLILIC0003 - Licence to operate a forklift truck</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">TLILIC0005 - Licence to operate a boom-type elevating work platform (boom length 11m or more)</span>
                    </label>
                  </div>
                </div>

                {/* Earthmoving */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Earthmoving and Machinery :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIMPO320F - Conduct civil construction excavator operations</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIMPO318F - Conduct civil construction skid steer loader operations</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIMPO321F - Conduct civil construction wheeled front end loader operations</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIMPO337E - Conduct articulated haul truck operations</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIMPO316E - Conduct self-propelled compactor operations</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIHAN301E - Operate elevating work platform (under 11m)</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer sm:col-span-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIHAN309F - Conduct telescopic materials handler operations (Telehandler)</span>
                    </label>
                  </div>
                </div>

                {/* Asbestos */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Asbestos :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>CPCCDE3014 - Remove non-friable asbestos</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>CPCCDE4008 - Supervise asbestos removal</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 5 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 11 (Enrolment Form Page 6) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            
            {/* Short Courses Continued Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2 font-bold text-sm text-black border-b border-gray-400 text-center uppercase tracking-wide">
                Short Courses Continued
              </div>

              <div className="p-2.5 space-y-4 font-semibold text-black">
                {/* Demolition */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-2 border border-gray-300">Demolition:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCBC4002 Manage work health and safety in the building and construction workplace</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE3020 Select and use tools and equipment for hot work in the demolition industry</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCBC4012 Read and interpret plans and specifications</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE3022 Manage demolition recyclable waste materials and contaminated soil using load shifting equipment</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE3016 Identify hazards on demolition sites and apply risk management strategies</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE4001 Plan and prepare for activities on demolition sites</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE3018 Select and use small plant and equipment for demolition tasks</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE4002 Plan demolition work to minimise risk to health, safety and environment</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE3018 Select and use small plant and equipment for demolition tasks</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE4003 Supervise operational activities on demolition sites</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">CPCCDE4004 Finalise demolition activities and supervise property handover</span>
                    </label>
                  </div>
                </div>

                {/* First Aid */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-2 border border-gray-300">First Aid :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>HLTAID011 - Provide First Aid</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>HLTAID009 - Provide cardiopulmonary resuscitation</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer sm:col-span-2">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">HLTAID012 - Provide First Aid in an education and care setting</span>
                    </label>
                  </div>
                </div>

                {/* Traffic Control */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-2 border border-gray-300">Traffic Control Courses:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>RIISS00054 – Traffic Controller Skill Set</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIISS00055 – Traffic Management Implementer Skill Set</span>
                    </label>
                  </div>
                </div>

                {/* Other Courses */}
                <div>
                  <div className="bg-[#d9d2ba] px-2 py-1 font-extrabold text-[11px] mb-2 border border-gray-300">Other Courses:</div>
                  <div className="grid grid-cols-1 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">UETDREL006 - Working safely near live electrical apparatus as a non-electrical worker</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIICCM202E – Identify, locate and protect underground services</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 6 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 12 (Enrolment Form Page 7 - PRIVACY NOTICE) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#c5e6f5] font-bold p-2.5 border-b border-gray-400 text-sm tracking-wide uppercase">
                PRIVACY NOTICE
              </div>
              
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p><span className="font-extrabold text-black underline">Why we collect your personal information</span><br/>As a registered training organisation (RTO), we collect your personal information so we can process and manage your enrolment in a vocational education and training (VET) course with us.</p>
                
                <p><span className="font-extrabold text-black underline">How we use your personal information</span><br/>We use your personal information to enable us to deliver VET courses to you, and otherwise, as needed, to comply with our obligations as an RTO.</p>
                
                <p><span className="font-extrabold text-black underline">How we disclose your personal information</span><br/>We are required by law (under the National Vocational Education and Training Regulator Act 2011 (Cth) (NVETR Act)) to disclose the personal information we collect about you to the National VET Data Collection kept by the National Centre for Vocational Education Research Ltd (NCVER). The NCVER is responsible for collecting, managing, analysing and communicating research and statistics about the Australian VET sector.<br/>We are also authorised by law (under the NVETR Act) to disclose your personal information to the relevant state or territory training authority.</p>
                
                <p><span className="font-extrabold text-black underline">How the NCVER and other bodies handle your personal information</span><br/>The NCVER will collect, hold, use and disclose your personal information in accordance with the law, including the Privacy Act 1988 (Cth) (Privacy Act) and the NVETR Act. Your personal information may be used and disclosed by NCVER for purposes that include populating authenticated VET transcripts; administration of VET; facilitation of statistics and research relating to education, including surveys and data linkage; and understanding the VET market.<br/>The NCVER is authorised to disclose information to the Australian Government Department of Education, Skills and Employment (DESE), Commonwealth authorities, State and Territory authorities (other than registered training organisations) that deal with matters relating to VET and VET regulators for the purposes of those bodies, including to enable:</p>
                
                <ul className="list-disc pl-5 space-y-1 text-black font-semibold">
                  <li>administration of VET, including program administration, regulation, monitoring and evaluation</li>
                  <li>facilitation of statistics and research relating to education, including surveys and data linkage</li>
                  <li>understanding how the VET market operates, for policy, workforce planning and consumer information.</li>
                </ul>

                <p>The NCVER may also disclose personal information to persons engaged by NCVER to conduct research on NCVER's behalf.<br/>The NCVER does not intend to disclose your personal information to any overseas recipients.<br/>For more information about how the NCVER will handle your personal information please refer to the NCVER's Privacy Policy at <a href="https://www.ncver.edu.au/privacy" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">www.ncver.edu.au/privacy</a>.<br/>If you would like to seek access to or correct your information, in the first instance, please contact your RTO using the contact details listed below.<br/>DESE is authorised by law, including the Privacy Act and the NVETR Act, to collect, use and disclose your personal information to fulfil specified functions and activities. For more information about how the DESE will handle your personal information, please refer to the DESE VET Privacy Notice at <a href="https://www.dese.gov.au/national-vet-data/vet-privacy-notice" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">https://www.dese.gov.au/national-vet-data/vet-privacy-notice</a></p>
                
                <p><span className="font-extrabold text-black underline">Surveys</span><br/>You may receive a student survey which may be run by a government department or an NCVER employee, agent, third-party contractor or another authorised agency. Please note you may opt out of the survey at the time of being contacted.</p>
                
                <p><span className="font-extrabold text-black underline">Contact information</span><br/>At any time, you may contact Safety Training Academy to:</p>
                <ul className="list-disc pl-5 space-y-1 text-black font-semibold">
                  <li>request access to your personal information</li>
                  <li>correct your personal information</li>
                  <li>make a complaint about how your personal information has been handled</li>
                  <li>ask a question about this Privacy Notice</li>
                </ul>
                
                <p className="font-bold text-black border-t border-gray-200 pt-3 text-[11px] sm:text-xs">
                  Safety Training Academy<br/>
                  <span className="text-gray-700 font-semibold">Maria Hajjar</span><br/>
                  <span className="text-gray-700 font-semibold">0439 007 746</span><br/>
                  <a href="mailto:maria@safetytrainingacademy.edu.au" className="underline font-bold text-blue-700 hover:text-blue-900">maria@safetytrainingacademy.edu.au</a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 7 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 13 (Enrolment Form Page 8 - DISABILITY SUPPLEMENT) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#c5e6f5] font-bold p-2.5 border-b border-gray-400 text-sm tracking-wide uppercase">
                DISABILITY SUPPLEMENT
              </div>
              
              <div className="p-3.5 space-y-3.5 leading-relaxed text-justify text-gray-800 text-[10px] sm:text-xs">
                <p className="font-extrabold text-black">*If you indicated the presence of a disability, impairment or long-term condition on page 4, please select the area(s) in the following list:</p>
                <p className="italic text-gray-600 font-semibold border-l-2 border-red-500 pl-2">Disability in this context does not include short-term disabling health conditions such as a fractured leg, influenza, or corrected physical conditions such as impaired vision managed by wearing glasses or lenses.</p>
                
                <div className="space-y-3">
                  <p><span className="font-extrabold text-black">‘11 — Hearing/deaf’</span><br/>
                  Hearing impairment is used to refer to a person who has an acquired mild, moderate, severe or profound hearing loss after learning to speak, communicates orally and maximises residual hearing with the assistance of amplification. A person who is deaf has a severe or profound hearing loss from, at, or near birth and mainly relies upon vision to communicate, whether through lip reading, gestures, cued speech, finger spelling and/or sign language.</p>
                  
                  <p><span className="font-extrabold text-black">‘12 — Physical’</span><br/>
                  A physical disability affects the mobility or dexterity of a person and may include a total or partial loss of a part of the body. A physical disability may have existed since birth or may be the result of an accident, illness, or injury suffered later in life; for example, amputation, arthritis, cerebral palsy, multiple sclerosis, muscular dystrophy, paraplegia, quadriplegia or post-polio syndrome.</p>
                  
                  <p><span className="font-extrabold text-black">‘13 — Intellectual’</span><br/>
                  In general, the term ‘intellectual disability’ is used to refer to low general intellectual functioning and difficulties in adaptive behaviour, both of which conditions were manifested before the person reached the age of 18. It may result from infection before or after birth, trauma during birth, or illness.</p>
                  
                  <p><span className="font-extrabold text-black">‘14 — Learning’</span><br/>
                  A general term that refers to a heterogeneous group of disorders manifested by significant difficulties in the acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical abilities. These disorders are intrinsic to the individual, presumed to be due to central nervous system dysfunction, and may occur across the life span. Problems in self-regulatory behaviours, social perception, and social interaction may exist with learning disabilities but do not by themselves constitute a learning disability.</p>
                  
                  <p><span className="font-extrabold text-black">‘15 — Mental illness’</span><br/>
                  Mental illness refers to a cluster of psychological and physiological symptoms that cause a person suffering or distress and which represent a departure from a person’s usual pattern and level of functioning.</p>
                  
                  <p><span className="font-extrabold text-black">‘16 — Acquired brain impairment’</span><br/>
                  Acquired brain impairment is injury to the brain that results in deterioration in cognitive, physical, emotional or independent functioning. Acquired brain impairment can occur as a result of trauma, hypoxia, infection, tumour, accidents, violence, substance abuse, degenerative neurological diseases or stroke. These impairments may be either temporary or permanent and cause partial or total disability or psychosocial maladjustment.</p>
                  
                  <p><span className="font-extrabold text-black">‘17 — Vision’</span><br/>
                  This covers a partial loss of sight causing difficulties in seeing, up to and including blindness. This may be present from birth or acquired as a result of disease, illness or injury.</p>
                  
                  <p><span className="font-extrabold text-black">‘18 — Medical condition’</span><br/>
                  Medical condition is a temporary or permanent condition that may be hereditary, genetically acquired or of unknown origin. The condition may not be obvious or readily identifiable, yet may be mildly or severely debilitating and result in fluctuating levels of wellness and sickness, and/or periods of hospitalisation; for example, HIV/AIDS, cancer, chronic fatigue syndrome, Crohn’s disease, cystic fibrosis, asthma or diabetes.</p>
                  
                  <p><span className="font-extrabold text-black">‘19 — Other’</span><br/>
                  A disability, impairment or long-term condition which is not suitably described by one or several disability types in combination. Autism spectrum disorders are reported under this category.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 8 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 14 (Enrolment Form Page 9 - TERMS & CONDITIONS OF ENROLMENT Part 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="bg-[#c5e6f5] font-bold p-2.5 border-b border-gray-400 text-sm tracking-wide text-center uppercase">
                TERMS & CONDITIONS OF ENROLMENT
              </div>
              
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800 text-[10px] sm:text-xs">
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase">Enrolment & Selection</p>
                <ol className="list-decimal pl-5 space-y-1.5 text-black font-medium">
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
 
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-3">Course Fees, Payments and Refunds</p>
                <p className="font-semibold text-gray-700">Students are provided with the refund policy and student enrolment form prior to enrolment. Refund information is always available from the CEO.</p>
                
                <ol className="list-decimal pl-5 space-y-1.5 text-black font-medium">
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

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 9 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 15 (Enrolment Form Page 10 - TERMS & CONDITIONS OF ENROLMENT Part 2 & APPEALS) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800 text-[10px] sm:text-xs">
                <ol className="list-decimal pl-5 space-y-2 text-black font-semibold" start="16">
                  <li>Refunds may be made in the following circumstances:
                    <ol className="list-[lower-alpha] pl-5 space-y-1 mt-1 text-gray-700 font-medium">
                      <li>Participants have overpaid the administration charge</li>
                      <li>Participants enrolled in training that has been terminated by Safety Training Academy</li>
                      <li>Participant advises Safety Training Academy prior to course commencement that they are withdrawing from the course</li>
                      <li>If the participant withdraws from a course, prior to course commencement, due to illness or extreme hardship as determined by the Safety Training Academy</li>
                      <li>In the event that the Safety Training Academy fails to provide the agreed services</li>
                    </ol>
                  </li>
                  <li>A deposit of no more than $1,500 is required prior to course commencement; this deposit is to confirm a place in the course. Please refer to the Course Flyer for the deposit amount required.</li>
                  <li>No refunds will be issued once the course has commenced</li>
                  <li>Students are responsible for the safe storage of their Certificate and Statements of Attainment. If a student requires a reissue of their Certificate Statement of Attainment, a <span className="underline font-extrabold text-red-600">certificate re-issue fee of $50</span> will be charged.</li>
                  <li>If a student is deemed not yet competent on completion of training, they will be offered an opportunity to be reassessed. If a student is deemed not yet competent a second time, they will be given another opportunity for reassessment.</li>
                </ol>

                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-3">Recording:</p>
                <p>The complaint will be recorded in the Register of Complaints by the Administration Manager.<br/>A copy of all the documentation, in particular the complaint and its outcome, is placed in the student's file. A copy of the documentation is forwarded to the complainant.<br/>Where the resolution requires a documented change to policies and procedures, the CEO notifies the appropriate staff member of the change to ensure that the procedure for document change as listed in the procedure for Document Control is followed with the appropriate records made.<br/>In the event that a complaint is substantiated, Safety Training Academy will take prompt and appropriate action to resolve the circumstances.</p>
                
                <p className="border-l-2 border-amber-500 pl-2 bg-gray-50 p-2 font-semibold">Complaints cannot be anonymous because this is considered unfair in that ongoing discussion cannot take place to resolve the issue between both parties. Information submitted to a trainer or any staff member is treated with respect and taken as an opportunity for improvement to the organisation's practices and Quality Management System.</p>
                
                <p>Privacy requirements and student/ individual rights are maintained at all times.<br/>If the student chooses to access our complaints and appeals processes, Safety Training Academy will maintain the student's enrolment while the complaints and appeals process is ongoing.<br/>*NOTE: We aim to finalise any complaints and appeals within 60 days of the initial lodgement. If the compliant cannot be finalised within the 60 days, we will notify the complainant in writing why it has not been finalised and any other information they can provide at the time to assist the complainant.</p>

                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-3">APPEALS</p>
                <p>If you are not happy with the outcome of a complaint then the following appeal process is followed.<br/>The appeal is discussed directly with the CEO. If this does not resolve the matter then the appeal is to be documented and submitted to trigger mediation by using either a simple written letter or a copy of the complaints and appeals form.<br/>The CEO records the student's dispute in the Register for Continuous Improvement and puts written notification on the students file and organises attendance by the student as Safety Training Academy representatives at the local court to meet with the VET Ombudsman representative. These are trained mediators, familiar with the alternative dispute resolution mediation process. The process is also without cost.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 10 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 16 (Enrolment Form Page 11 - APPEALS Cont., Reassessments & Consumer Guarantee) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800 text-[10px] sm:text-xs">
                <p>You can also contact the Ombudsman: <a href="https://www.ombudsman.gov.au/" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">https://www.ombudsman.gov.au/</a><br/>
                NOTE: The National Training Complaints Hotline is accessible on 13 38 73 (Monday to Friday from 8am to 6pm nationally) or via email at <a href="mailto:skilling@education.gov.au" className="underline font-bold text-blue-700 hover:text-blue-900">skilling@education.gov.au</a></p>
                
                <p>An appellant may deliver their own version of the matter to the mediator and request a support person be present. The rules of alternative dispute resolution apply.<br/>The matter should then consider the issues raised an attempt to resolve the appeal to the satisfaction of the appellant. All appeals of complaints that are found to be proven must be acted upon through the continuous improvement process to make systematic changes to prevent the recurrence of this a problem again.<br/>The final agreement achieved through the alternative dispute resolution process is put into court orders which bind the parties to the agreed resolution. There is no further appeal mechanism beyond this point. The student may always revert to common law. Each step of the complaints and appeals process will allow the student to make representation either orally or in writing prior to reaching a decision. If the student has complaints that do not directly concern but may affect their ability to achieve competency, they shall be referred to appropriate external support groups for assistance.</p>
                
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">APPEALS AGAINST ASSESSMENT OUTCOMES: REASSESSMENTS</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants to appeal their assessments and recognition decisions. Appeals are ideally resolved as amicably as possible using this formal appeal process.<br/>
                <strong>Step 1:</strong> Discuss the matter with your assessor and explain the reason why you believe the assessment outcome is unfair. If you are not satisfied with the discussion, then go to Step 2.<br/>
                <strong>Step 2:</strong> Lodge a written appeal to the Administration Manager by completing a Complaints and Appeals form (Form 06). The Administration Manager will forward the appeal to the CEO who will commence investigation into the matter within 10 working days. The CEO will appoint a mutually agreed-upon, qualified and independent assessor to review the records of assessment of the student's competence against the training package requirements. Where insufficient records to determine competence are available, the student may provide additional evidence of competence. The independent assessor's determination is final.<br/>
                No further appeal mechanism exists beyond this point in the process. In most cases there will be no reassessment fee. If a reassessment fee is applicable, this fee will be included on the course flyer.</p>
                
                <p className="font-extrabold text-black text-[11px] sm:text-xs">STA is responsible for providing you with quality training and assessment and the issuance of AQF certification documentation.<br/>
                <span className="font-normal text-gray-700">If a student is required to be reassessed, they will be provided with further guidance from their trainer prior to reassessment.</span></p>
                
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">Consumer Guarantee</p>
                <p>Safety Training Academy guarantees that the services provided by STA will be:</p>
                <ul className="list-disc pl-5 space-y-1 text-black font-semibold">
                  <li>provided with due care and skill</li>
                  <li>fit for any specified purpose (express or implied)</li>
                  <li>provided within a reasonable time (when no timeframe is set for the training).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 11 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 17 (Enrolment Form Page 12) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs bg-white">
              <div className="bg-[#c5e6f5] font-bold p-2.5 border-b border-gray-400 text-sm tracking-wide uppercase">
                SECTION 4 – ENROLMENT TERMS & CONDITIONS (CONTINUED)
              </div>
              
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase">Fee Protection</p>
                <p>Safety Training Academy requires a minimum deposit, which will not exceed $1,500 per individual student, prior to course commencement. If the full course fees are less than $1,500, the full fees may be required to be paid prior to course commencement. Please refer to the course flyers for deposits and course fees.</p>
                <p>Following course commencement, full fees will be required to be paid by either a payment plan (if remaining fees are over $1,500), or in full (if the remaining fees are below $1,500) for training and other services yet to be delivered.</p>
                
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">Changes to Agreed Services</p>
                <p>Where there are any changes to the agreed services that will affect the learner, including in the event of Safety Training Academy closing down, we will advise the learner as soon as practicable. This includes changes to any new third party arrangements or a change of ownership or any changes to existing third party arrangements.</p>

                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">Complaints and Appeals</p>
                <p>If we do not resolve or finalise complaints or appeals within 60 days, the complainant will be notified in writing by the Administration Manager.</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants, staff and stakeholders to lodge complaints. Complaints are ideally resolved as amicably as possible using this formal appeal process. We will adhere to the National Complaints Code to respond to complaints about vocational education and the organisation itself. This means that our complaints process is:</p>
                <ul className="list-disc pl-5 space-y-1.5 font-semibold text-black">
                  <li>well publicised and explained;</li>
                  <li>accessible so you can lodge complaints and appeals by phone, electronically or in writing;</li>
                  <li>fair and protect your rights;</li>
                  <li>free so you can lodge a complaint without charge;</li>
                  <li>handled in a manner that protects your privacy;</li>
                  <li>transparent, equitable, objective and unbiased;</li>
                  <li>comprehensive so that it effectively resolves a variety of complaints such as student dissatisfaction, assessment outcomes, poor service, fraud, misconduct etc;</li>
                </ul>

                <div className="space-y-2 mt-2 pt-2 border-t border-gray-100 text-[11px] sm:text-xs">
                  <p><span className="font-bold text-black">Step 1:</span><br/>
                  If the complaint is regarding a fellow student, you should first discuss the matter with the student and try to resolve it. If you are not able to resolve it, then you should discuss the problem with your trainer/assessor to try to resolve it. If you were not able to resolve it, go to step 2.<br/>
                  If your complaint is regarding your trainer / assessor, or the organisation, then go straight to step 2.</p>
                  
                  <p><span className="font-bold text-black">Step 2:</span><br/>
                  You should lodge a formal written complaint to the Administration Manager by completing a Complaints and Appeals form that can be obtained from the Administration Manager. The Administration Manager will acknowledge receipt of the formal complaint in writing and record the complaint in the Register of Complaints.<br/>
                  Safety Training Academy will commence the complaints process within 10 working days of the formal lodgement of the complaint and supporting information. All reasonable measures are taken to finalise the process as soon as practicable.</p>
                  
                  <p><span className="font-bold text-black">Step 3:</span><br/>
                  If the complaint was not able to be resolved to your satisfaction by the Administration Manager, then you must ask for the complaint to be escalated to the CEO. The Administration Manager will email your complaint to the CEO.<br/>
                  The CEO will acknowledge receipt of the formal complaint in writing and commence investigation into the matter within 10 working days. The CEO is empowered to make a determination that is considered to be fair and equitable by both parties. The complainant has the right to have their version of events heard in the resolution negotiation and have an independent advocate present.<br/>
                  Complaints are investigated fairly and objectively with details of the investigation provided in writing to the complainant. The details will state the outcomes and reasons for the decisions made.</p>
                  
                  <p><span className="font-bold text-black">Step 4:</span><br/>
                  If you are still not satisfied with the outcome, the matter may be referred to an independent mediator such as the local National Training Complaints Hotline (133873) or the Department of Fair Trading for review.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 12 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 18 (Enrolment Form Page 13) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black">
            <div className="border border-gray-400 w-full flex flex-col text-[11px] sm:text-xs bg-white">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase">Credit Transfer</p>
                <p>STA recognises the Australian Qualifications Framework and Vocational Education and Training (VET) qualifications and VET statements of attainment issued by any other Registered Training Organisation.</p>
                <p>Credit Transfer will be awarded for all units of competencies that directly align with units from the qualification the student has enrolled. Evidence of competencies achieved must be supplied for recognition to be processed (ie presentation of original certificate or transcript).</p>
                <p>Please refer to the Student Handbook or contact the office for the procedure on how to apply for a Credit Transfer.</p>
                
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">Language, Literacy and Numeracy (LLN)</p>
                <p>LLN support is available to provide students with advice and support services in the provision of language, literacy and numeracy assessment services. Students needing assistance with their learning should be identified upon enrolment. Trainers and staff can provide students with support to assist the student throughout the learning process.</p>
                <p>Language, Literacy and Numeracy skills are generally included and identified in Training Products and accredited course programs. In identifying language, literacy and numeracy requirements, students' are required to have basic skills in:</p>
                <ul className="list-disc pl-5 space-y-1 font-semibold text-black">
                  <li>Count, check and record accurately</li>
                  <li>Read and interpret</li>
                  <li>Estimate, calculate and measure</li>
                </ul>

                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">Support Services</p>
                <p>All staff at Safety Training Academy act as Student Support Officers and can refer students to external support providers where required. Safety Training Academy caters to diverse client learning needs and aims to identify and respond to the learning needs of all clients. Clients are encouraged to express their views about their learning needs at all stages of their learning experience from the initial enrolment and induction stage to course completion, through their trainer or staff. Safety Training Academy is committed to providing clients requiring additional support, advice or assistance while training. Please see the Student Handbook on the types of support provided.</p>
                
                <p className="font-extrabold text-black text-xs border-b border-gray-200 pb-1 uppercase pt-2">Legislative and Regulatory Requirements</p>
                <p>All students will undergo an induction, which will include the student's rights and responsibilities against the relevant Commonwealth, State or Territory legislation and regulatory requirements. Students are issued with a Student Handbook, which also includes the Student's rights and responsibilities that will affect their participation in vocational education and training.</p>
                <p>The student acknowledges that they must observe Safety Training Academy's policies and procedures, according to State and Federal Government legislative and regulatory requirements, as set out in the Student Handbook.</p>

                <div className="bg-gray-50 border-l-2 border-[#1a365d] p-2.5 rounded-sm my-3 font-semibold text-black">
                  <span className="font-extrabold text-sm uppercase tracking-wide">IMPORTANT INFORMATION</span>
                  <p className="mt-1 text-[10px] sm:text-xs text-gray-800 leading-normal text-justify">
                    I have read and understand the terms and conditions of my enrolment, as stated above. I acknowledge and agree with the terms and conditions of enrolment with specific reference to the our enrolment and selection, USI, course fees, payments and refunds, course requirements, Language Literacy and Numeracy requirements, complaints and appeals, Workplace Health and Safety, support services that will be provided for me, legislative and regulatory policies and procedures, which are also provided to me in the Student Handbook. By signing this document I also give permission for STA to access my Unique Student Identifier for the purpose of my training.
                  </p>
                </div>

                <div className="pt-4 font-bold text-black flex flex-col space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="whitespace-nowrap text-[11px] sm:text-xs">STUDENT NAME:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-bold text-xs px-2 py-0.5" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="whitespace-nowrap text-[11px] sm:text-xs">STUDENT SIGNATURE:</span>
                      <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-bold text-xs px-2 py-0.5" />
                    </div>
                    <div className="flex items-center gap-1.5 whitespace-nowrap text-[11px] sm:text-xs">
                      <span>DATE:</span>
                      <input type="text" className="w-8 border-b border-gray-400 outline-none bg-transparent text-center font-bold text-xs" placeholder="DD" />
                      <span>/</span>
                      <input type="text" className="w-8 border-b border-gray-400 outline-none bg-transparent text-center font-bold text-xs" placeholder="MM" />
                      <span>/</span>
                      <input type="text" className="w-12 border-b border-gray-400 outline-none bg-transparent text-center font-bold text-xs" placeholder="YYYY" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 13 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 19 (Enrolment Form Page 14) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center">
              <h1 className="text-xs sm:text-sm font-bold text-black mb-0.5 uppercase tracking-wider">Safety Training Academy</h1>
              <h1 className="text-sm sm:text-base font-extrabold text-black mb-0.5 uppercase tracking-wider">ENROLMENT FORM</h1>
              <h2 className="text-xs sm:text-sm font-bold text-black">RTO : 45234</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black space-y-6">
            
            {/* Payment Method Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2.5 font-bold text-sm text-black border-b border-gray-400">
                Payment method:
              </div>
              
              <div className="p-3.5 space-y-4 font-semibold text-black">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer font-bold">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                    <span>Bank : Commonwealth Bank</span>
                  </label>
                  
                  <div className="flex flex-wrap gap-4 font-bold">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                      <span>Cash</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                      <span>Debit/CreditCard EFTPOS</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 pt-2 border-t border-gray-200 text-[11px] sm:text-xs">
                  <div className="space-y-1.5 font-semibold text-black">
                    <p><span className="font-extrabold text-black">Account Name:</span> AIET College</p>
                    <p><span className="font-extrabold text-black">BSB:</span> 062 141 &nbsp; &nbsp; <span className="font-bold text-black">Account No:</span> 10490235</p>
                    <p><span className="font-extrabold text-black">Transaction Description:</span> Your Name / Invoice Number</p>
                  </div>
                  <div className="text-gray-500 font-bold border-l-0 lg:border-l lg:pl-4 border-gray-300">
                    <span className="text-black">----</span> Australian International Education & Training Pty Ltd
                  </div>
                </div>
              </div>
            </div>

            {/* Application Submission Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#c5e6f5] p-2.5 font-bold text-sm text-black border-b border-gray-400 uppercase tracking-wide">
                APPLICATION SUBMISSION
              </div>
              
              <div className="p-4 space-y-4 leading-relaxed text-justify text-[11px] sm:text-xs">
                <p>
                  <span className="italic font-medium text-gray-700">Please return this completed application form with proof of ID to </span>
                  <span className="font-bold text-black">Australian International Education & Training (AIET)</span> 
                  <span className="italic font-medium text-gray-700"> to enrol in your chosen qualification.</span>
                </p>
                <p className="font-semibold text-black">
                  Once your application has been received and is accepted as complete, you will be notified. If any information or evidence is missing you will be contacted to provide any further required information. This may delay your enrolment process.
                </p>
                
                <div className="pt-2">
                  <p className="italic font-extrabold text-[#1a365d] mb-2">Australian International Education & Training Assessment Centre:</p>
                  <ul className="list-disc pl-5 space-y-2 font-bold text-black">
                    <li>Address: 3/14-16 Marjorie, Street, Sefton NSW 2162</li>
                    <li>Email: info@safetytrainingacademy.edu.au</li>
                    <li>Phone: 1300 976 097</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
            <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            <div className="flex justify-between w-full mt-3 font-semibold">
              <span>Form 36.</span>
              <span>Page 14 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 20 (Training Agreement Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center pt-2 sm:pt-6">
              <h1 className="text-lg sm:text-xl font-extrabold text-black uppercase tracking-wide">Training Agreement</h1>
              <h2 className="text-xs sm:text-sm font-bold text-gray-700 italic">(To be completed by the participant at enrolment)</h2>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black space-y-4">
            <div className="flex flex-wrap items-center gap-2 pt-4 font-semibold text-black">
              <span>I</span>
              <input type="text" className="border-b border-black outline-none bg-transparent w-full sm:w-[300px] text-center font-bold px-2 py-0.5" placeholder="Enter Full Legal Name" />
              <span>(insert full legal name) agree to undertake training with</span>
            </div>
            <p className="font-semibold">Australian International Education and Training ( AIET ) , in the following course:</p>

            <p className="text-center font-extrabold text-sm sm:text-base my-4 bg-gray-100 p-3 rounded border border-gray-300 text-blue-900">
              RIIWHS202E – Enter and work in Confined Spaces
            </p>

            <p className="font-semibold text-gray-800">During the course of this program, I understand and acknowledge that:</p>

            <div className="space-y-3">
              <p className="font-bold text-black border-b border-gray-200 pb-1">My rights and obligations, as defined in the Participant Handbook include:</p>
              <ol className="list-decimal pl-5 space-y-1.5 font-medium text-black">
                <li>My obligation at all times to conduct myself safely and in adherence to all relevant legislation.</li>
                <li>I will actively attempt all training and assessment tasks with serious effort.</li>
                <li>That I will comply with all safe and lawful requests</li>
                <li>I will arrive on time and will return on time from all breaks.</li>
                <li>That I will not bully, abuse, vilify or fail to treat all people participating, associated with, or in the vicinity of AIET venues with the utmost respect and courtesy.</li>
              </ol>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-bold text-black border-b border-gray-200 pb-1">Australian International Education and Training ( AIET) rights and obligations include:</p>
              <ol className="list-decimal pl-5 space-y-1.5 font-medium text-black" start="6">
                <li>To provide quality training and assessment services, compliant to the NVR Standards, in a competent manner through the provision of quality resources and staff resulting in the issuance of AQF statement of attainment.</li>
                <li>Assessment be performed by qualified assessors with the required knowledge and currency in the needs of industry.</li>
                <li>Guaranteeing to provide assessment services to customers who have met their obligations with regard to completion of enrolment details, and financial payments.</li>
                <li>Guaranteeing that in the event that Australian International Education and Training ( AIET) cannot deliver a course, a full refund of all monies paid to Australian International Education and Training ( AIET) will be refunded to the purchaser.</li>
                <li>Committing that training will not be offered to participants who fail to wear PPE or fail to pay for the course.</li>
                <li>Choosing to terminate a customer's training if they fail to uphold these standards.</li>
                <li>Keeping participants informed of any changes in the service delivery including trainers, our ownership, the engagement of third parties or any other aspect of the participants training experience.</li>
              </ol>
            </div>

            <div className="pt-4 space-y-3">
              <p className="font-bold text-black">Agreed to and accepted by Participant:</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center font-bold">
                <div className="flex-1 flex items-center gap-2">
                  <span>Signed:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-gray-500 outline-none bg-transparent px-2" />
                </div>
                <div className="flex items-center gap-2">
                  <span>Date:</span>
                  <input type="text" className="w-[150px] border-b border-dotted border-gray-500 outline-none bg-transparent text-center" placeholder="DD/MM/YYYY" />
                </div>
              </div>
            </div>

            {/* Office Use Section */}
            <div className="border border-gray-400 rounded-sm overflow-hidden mt-6 bg-white">
              <div className="bg-gray-100 p-2 font-bold text-xs text-black border-b border-gray-400 uppercase tracking-wide">
                Office use only
              </div>
              <div className="p-3.5 space-y-4 text-[11px] sm:text-xs">
                <p className="font-semibold text-gray-700">Agreed to and accepted by Australian International Education and Training ( AIET) Representative:</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center font-bold">
                  <div className="flex-1 flex items-center gap-2">
                    <span>Signed:</span>
                    <input type="text" className="flex-1 border-b border-dotted border-gray-500 outline-none bg-transparent px-2" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Date:</span>
                    <input type="text" className="w-[150px] border-b border-dotted border-gray-500 outline-none bg-transparent text-center" placeholder="DD/MM/YYYY" />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <span>Print Name:</span>
                  <input type="text" className="flex-1 max-w-[400px] border-b border-dotted border-gray-500 outline-none bg-transparent px-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p>3/14- 16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph: 1300 976 097 email: info@aietcollege.edu.au</p>
            <div className="border-t border-black w-full my-2"></div>
            <div className="flex justify-between w-full font-semibold">
              <span>Issue Date : 230831</span>
              <span>Page 1 of 4</span>
              <span></span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 21 (Participant record of Training Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 w-full px-2 sm:px-8 relative">
            <div className="sm:absolute sm:left-8 flex justify-center w-full sm:w-auto mb-3 sm:mb-0">
              <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-center pt-2 sm:pt-6">
              <h1 className="text-lg sm:text-xl font-extrabold text-black uppercase tracking-wide">Participant record of Training</h1>
              <div className="border-b border-black w-full max-w-[300px] mt-1"></div>
            </div>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black space-y-5">
            
            {/* Participant Details Box */}
            <div className="border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#d1d5db] font-bold p-2 border-b border-gray-400 text-black">
                Participant details
              </div>
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-400 font-semibold">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="text-gray-700">Name:</span>
                  <input type="text" className="flex-1 outline-none bg-transparent font-bold text-xs" />
                </div>
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="text-gray-700">D.O.B:</span>
                  <input type="text" className="w-8 border-b border-gray-300 outline-none bg-transparent text-center text-xs" placeholder="DD" />
                  <span>/</span>
                  <input type="text" className="w-8 border-b border-gray-300 outline-none bg-transparent text-center text-xs" placeholder="MM" />
                  <span>/</span>
                  <input type="text" className="w-12 border-b border-gray-300 outline-none bg-transparent text-center text-xs" placeholder="YYYY" />
                </div>
                <div className="p-2 flex items-center gap-3">
                  <span className="text-gray-700">Sex:</span>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="sex" className="w-3.5 h-3.5 cursor-pointer" /> <span>M</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="sex" className="w-3.5 h-3.5 cursor-pointer" /> <span>F</span>
                  </label>
                </div>
              </div>

              {/* Row 2 */}
              <div className="p-2 border-b border-gray-400 flex items-start gap-2 font-semibold">
                <span className="text-gray-700 pt-0.5">Address:</span>
                <textarea rows="2" className="flex-1 outline-none bg-transparent font-bold text-xs resize-none"></textarea>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 font-semibold">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center gap-2">
                  <span className="text-gray-700">Phone:</span>
                  <input type="text" className="flex-1 outline-none bg-transparent font-bold text-xs" />
                </div>
                <div className="p-2 flex items-center gap-2">
                  <span className="text-gray-700">Email:</span>
                  <input type="text" className="flex-1 outline-none bg-transparent font-bold text-xs" />
                </div>
              </div>
            </div>

            {/* Training Log Box */}
            <div className="border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#d1d5db] font-bold p-2 border-b border-gray-400 text-black">
                Training Log:
              </div>
              
              {/* Table Headers */}
              <div className="grid grid-cols-[100px_1fr_1fr] text-center border-b border-gray-400 font-bold bg-gray-50 text-[11px] sm:text-xs">
                <div className="p-2 border-r border-gray-400">Training Date</div>
                <div className="p-2 border-r border-gray-400">Participant full Name</div>
                <div className="p-2">Participant Signature</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-[100px_1fr_1fr] text-center border-b border-gray-400 h-9">
                <div className="p-1 border-r border-gray-400 flex items-center justify-center gap-1">
                  <input type="text" className="w-5 text-center bg-transparent outline-none border-b border-gray-200" placeholder="DD" />
                  <span>/</span>
                  <input type="text" className="w-5 text-center bg-transparent outline-none border-b border-gray-200" placeholder="MM" />
                </div>
                <div className="p-1 border-r border-gray-400">
                  <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                </div>
                <div className="p-1">
                  <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                </div>
              </div>

              {/* Row 2-5 */}
              {[2, 3, 4, 5].map((rowIdx) => (
                <div key={rowIdx} className={`grid grid-cols-[100px_1fr_1fr] text-center h-9 ${rowIdx < 5 ? 'border-b border-gray-400' : ''}`}>
                  <div className="p-1 border-r border-gray-400 flex items-center justify-center gap-1">
                    <input type="text" className="w-5 text-center bg-transparent outline-none border-b border-gray-200" placeholder="DD" />
                    <span>/</span>
                    <input type="text" className="w-5 text-center bg-transparent outline-none border-b border-gray-200" placeholder="MM" />
                  </div>
                  <div className="p-1 border-r border-gray-400">
                    <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                  </div>
                  <div className="p-1">
                    <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                  </div>
                </div>
              ))}
            </div>

            {/* Resources Checklist Box */}
            <div className="border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#d1d5db] font-bold p-2 border-b border-gray-400 text-black">
                Resources
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-400 font-semibold text-black">
                <label className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  <span>PowerPoint presentation</span>
                </label>
                <label className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  <span>Leaner Guide</span>
                </label>
                <label className="p-2.5 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  <span>Practical tasks</span>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 font-semibold text-black">
                <label className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  <span>Training Videos</span>
                </label>
                <label className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  <span>Review questions</span>
                </label>
                <label className="p-2.5 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  <span className="flex items-center gap-1.5 flex-1">
                    <span>Other:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent" />
                  </span>
                </label>
              </div>
            </div>

            {/* Summary Box */}
            <div className="border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="flex w-full border-b border-gray-400 bg-[#d1d5db] font-bold text-black">
                <div className="flex-1 p-2 border-r border-gray-400">Summary</div>
                <div className="w-[120px] p-2 text-center">Satisfactory?</div>
              </div>
              
              <div className="flex w-full">
                <div className="flex-1 p-3 border-r border-gray-400 space-y-3 font-semibold text-black">
                  <p>The participant has:</p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                    <span>Attended PowerPoint Presentation /participated in PowerPoint Quiz</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                    <span>Completed Questions (Knowledge assessment)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                    <span>Completed Practical tasks</span>
                  </label>
                  
                  <div className="pt-2 flex flex-col gap-1">
                    <span className="text-gray-700">Notes/comments:</span>
                    <textarea rows="3" className="w-full border border-gray-300 rounded p-1.5 outline-none bg-transparent font-normal text-xs resize-none"></textarea>
                  </div>
                </div>
                
                <div className="w-[120px] flex">
                  {/* Yes column */}
                  <div className="w-1/2 border-r border-gray-400 flex flex-col items-center pt-2.5 space-y-7 font-bold text-black bg-gray-50">
                    <span className="text-[10px]">Yes</span>
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-1" />
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  </div>
                  {/* No column */}
                  <div className="w-1/2 flex flex-col items-center pt-2.5 space-y-7 font-bold text-black bg-gray-50">
                    <span className="text-[10px]">No</span>
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-1" />
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                    <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Trainer Signatures */}
            <div className="pt-4 font-bold text-black flex flex-col sm:flex-row gap-4 sm:items-center text-[11px] sm:text-xs">
              <div className="flex-1 flex items-center gap-1.5">
                <span>Trainer's Name:</span>
                <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-bold" />
              </div>
              <div className="flex-1 flex items-center gap-1.5">
                <span>Trainer's signature:</span>
                <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-bold" />
              </div>
              <div className="flex items-center gap-1.5">
                <span>Date:</span>
                <input type="text" className="w-[100px] border-b border-gray-400 outline-none bg-transparent text-center font-bold" placeholder="DD/MM/YYYY" />
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[8px] sm:text-[9px] text-black mt-auto pt-4 text-center pb-2 px-2 sm:px-4">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p>3/14- 16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph: 1300 976 097 email: info@aietcollege.edu.au</p>
            <div className="border-t border-black w-full my-2"></div>
            <div className="flex justify-between w-full font-semibold">
              <span>Issue Date : 230831</span>
              <span>Page 2 of 4</span>
              <span></span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 22 (Assessment Page 1 of 20 - Candidate Assessment Tool) ======================= */}
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

            <div className="flex flex-col text-xs sm:text-sm border border-[#a2add0] mb-8 bg-white">
              
              <div className="bg-[#d9e2f3] border-b border-[#a2add0] font-bold p-4 text-center text-lg sm:text-xl text-[#1e3a8a] uppercase tracking-wide">
                Candidate Assessment Tool
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#d9e2f3] sm:w-[220px] p-4 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Assessment Type
                </div>
                <div className="flex-1 p-4 bg-white text-gray-800 leading-relaxed font-semibold">
                  There are <strong>2 summative assessments</strong> for demonstration of competency for this unit. All assessments must be completed satisfactorily for the student to be determined as "competent". Students may re-sit either assessment once only, after which a performance review will be conducted
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#d9e2f3] sm:w-[220px] p-4 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Assessment Methods
                </div>
                <div className="flex-1 flex flex-col bg-white">
                  <div className="flex border-b border-[#a2add0] font-semibold">
                    <div className="w-[120px] p-2 sm:p-4 font-bold border-r border-[#a2add0] bg-gray-50 text-gray-800">Assessment 1</div>
                    <div className="flex-1 p-2 sm:p-4 font-bold text-[#1e3a8a]">Written questions</div>
                  </div>
                  <div className="flex font-semibold">
                    <div className="w-[120px] p-2 sm:p-4 font-bold border-r border-[#a2add0] bg-gray-50 text-gray-800">Assessment 2</div>
                    <div className="flex-1 p-2 sm:p-4 font-bold text-[#1e3a8a]">Practical Demonstration</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#d9e2f3] border-b border-[#a2add0] font-bold p-4 text-center text-base sm:text-lg text-[#1e3a8a] uppercase tracking-wide">
                Unit Summary
              </div>
              
              <div className="p-4 bg-white flex flex-col gap-4 text-gray-800 leading-relaxed font-semibold text-justify">
                <p>This unit describes the skills and knowledge required to enter and work in confined spaces in the resources and infrastructure industries.</p>
                <p>It applies to those working in operational roles. They generally work under supervision to undertake a prescribed range of functions involving known routines and procedures and take responsibility for the quality of work outcomes.</p>
                <p>Licensing, legislative and certification requirements that apply to this unit can vary between states, territories and industry sectors. Users must check requirements with relevant body before applying the unit.</p>
              </div>

              <div className="bg-[#d9e2f3] border-y border-[#a2add0] font-bold p-4 text-center text-base sm:text-lg text-[#1e3a8a] uppercase tracking-wide">
                Prerequisite
              </div>
              
              <div className="p-4 bg-white min-h-[80px] text-gray-800 font-semibold">
                <p>There are no recommended pre-requisite units for this competency.</p>
              </div>
            </div>

          </div>

          {/* Footer Page 22 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 1 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 23 (Assessment Page 2 of 20 - Instructions to Student) ======================= */}
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
            
            <div className="text-center font-bold text-base sm:text-lg mb-6 text-[#1e3a8a] space-y-1">
              <p className="uppercase tracking-wide">SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p className="uppercase tracking-wide">WRITTEN QUESTIONS</p>
              <p className="uppercase tracking-wide">INSTRUCTIONS TO STUDENT</p>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              
              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a] uppercase tracking-wide">
                Place and duration of assessment
              </div>
              <div className="p-4 bg-white border-b border-gray-400">
                <p className="text-gray-800 leading-relaxed font-semibold">This is an open book assessment conducted in class that must be completed during the allocated assessment period. Students should allocate approximately 3 hours to complete this task.</p>
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-4">
                  <span className="font-bold text-gray-800 whitespace-nowrap">Assessment Due Date:</span>
                  <input type="text" className="border-b border-black w-full sm:w-[200px] bg-transparent outline-none pb-0.5 font-bold" />
                </div>
              </div>

              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a] uppercase tracking-wide">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-4 bg-white border-b border-gray-400 flex flex-col gap-3.5 text-gray-800 leading-relaxed font-semibold">
                <p>To receive a "Satisfactory" grade for this assessment you must:</p>
                <label className="flex items-start gap-2.5 ml-4 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 cursor-pointer" />
                  <span>Complete all written questions.</span>
                </label>
                <label className="flex items-start gap-2.5 ml-4 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 cursor-pointer" />
                  <span>All responses for each question must be marked as satisfactory by the assessor.</span>
                </label>
                <p className="mt-2 text-justify">Before you commence the assessment, you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed "Satisfactory" against all performance criteria in all assessments by your assessor to be considered "Competent" in this Unit of Competency. Feedback will be given to you.</p>
              </div>

              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a] uppercase tracking-wide">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-4 bg-white border-b border-gray-400 text-gray-800 leading-relaxed font-semibold text-justify">
                <p>Assessment processes and techniques will as far as is practical take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.</p>
                <p className="mt-3">If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
              </div>

              <div className="bg-[#b4c6e7] border-b border-gray-400 font-bold p-3 px-4 text-sm sm:text-base text-[#1e3a8a] uppercase tracking-wide">
                Assessor Intervention
              </div>
              <div className="p-4 bg-white flex flex-col gap-4 text-gray-800 leading-relaxed font-semibold text-justify">
                <p>Assessors are to check that the student is ready for assessment, and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.</p>
                <p>Feedback is to be given at the completion of the assessment using the feedback to student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.</p>
                <p>Your student record must indicate that you have all required skills and knowledge in completing the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. If the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.</p>
              </div>

            </div>

          </div>

          {/* Footer Page 23 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 2 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 24 (Assessment Page 3 of 20 - Student Identifier) ======================= */}
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
            
            <div className="text-center font-bold text-base sm:text-lg mb-6 text-[#1e3a8a] space-y-1">
              <p className="uppercase tracking-wide">SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p className="uppercase tracking-wide">WRITTEN QUESTIONS</p>
              <p className="uppercase tracking-wide">STUDENT IDENTIFIER</p>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-[#a2add0] rounded-sm overflow-hidden bg-white">
              
              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Student's Name:
                </div>
                <div className="flex-1 p-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-xs sm:text-sm" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Assessor's Name:
                </div>
                <div className="flex-1 p-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-xs sm:text-sm" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Date of Assessment/Submission:
                </div>
                <div className="flex-1 p-3 bg-white flex gap-1.5 items-center font-bold text-black">
                  <input type="text" className="w-8 bg-transparent outline-none text-center" maxLength="2" placeholder="DD" /> /
                  <input type="text" className="w-8 bg-transparent outline-none text-center" maxLength="2" placeholder="MM" /> /
                  <input type="text" className="w-12 bg-transparent outline-none text-center" maxLength="4" placeholder="YYYY" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Evidence
                </div>
                <div className="flex-1 p-3 bg-white text-gray-800 font-semibold">
                  <p className="mb-3">You will be required to submit the following evidence in order to be assessed:</p>
                  <label className="flex items-center gap-2.5 mb-2 cursor-pointer font-bold">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer rounded-sm" />
                    <span>Student Identifier</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer font-bold">
                    <input type="checkbox" className="w-4 h-4 cursor-pointer rounded-sm" />
                    <span>Completed written questions</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Definition
                </div>
                <div className="flex-1 p-3 bg-white text-gray-800 leading-relaxed font-semibold text-justify">
                  <p>Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant's exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2 font-medium">
                    <li>Presenting any work by another individual as one's own unintentionally</li>
                    <li>Handing in work markedly similar to or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 font-bold border-b sm:border-b-0 sm:border-r border-[#a2add0] flex items-center shrink-0 text-[#1e3a8a]">
                  Declaration:
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col gap-4 text-gray-800 font-semibold text-justify">
                  <p>I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.</p>
                  <p>I acknowledge that I am ready to undertake the assessment.</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-4 font-bold text-black">
                    <span className="min-w-[120px]">Student Signature:</span>
                    <input type="text" className="border-b border-black flex-1 bg-transparent outline-none pb-0.5" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-2 font-bold text-black">
                    <span className="min-w-[120px]">Date:</span>
                    <div className="border-b border-black w-full sm:w-[200px] flex gap-1 items-center pb-0.5">
                      <input type="text" className="w-8 bg-transparent outline-none text-center text-black" maxLength="2" placeholder="DD" /> /
                      <input type="text" className="w-8 bg-transparent outline-none text-center text-black" maxLength="2" placeholder="MM" /> /
                      <input type="text" className="w-12 bg-transparent outline-none text-center text-black" maxLength="4" placeholder="YYYY" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 24 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 3 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 25 (Assessment Page 4 of 20 - Written Questions Q1 to Q4) ======================= */}
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
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 1 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  1
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Your permit may tell you how to prepare your space for entry. What are 2 ways you can prepare a space for entry?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  2
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 2 examples of government documents that tell you how to work safely and legally?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  3
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What does the WHS act say a worker must do when they work in a confined space? List 3.
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  4
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 2 types of permits you might need to work in a confined space?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 25 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 4 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 26 (Assessment Page 5 of 20 - Written Questions Q5 to Q7) ======================= */}
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
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 5 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  5
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 3 ways to check the details of the work you are doing?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="flex flex-col border border-gray-400 mb-6 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  6
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 3 ways to check the safety rules for the job/site?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 7 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  7
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 5 hazards with working in a confined space?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">4.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">5.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 26 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 5 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 27 (Assessment Page 6 of 20 - Written Questions Q8 to Q12) ======================= */}
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
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 8 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  8
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) You are about to start work. Why must check the entry permit with the JSA/SWMS/ or Risk Assessment, and inspect the site?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[70px] sm:min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 9 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  9
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What PPE might you use to work in a confined space? List 3.
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 10 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  10
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) You need to work in a space, which has held chemicals. What <u className="underline font-bold">document</u> do you need to check? Why?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[70px] sm:min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 11 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  <span className="bg-[#ff5722] text-white px-2 py-0.5 rounded text-sm sm:text-base font-bold">11</span>
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 3 things that a confined spaces entry permit must have to help keep you safe?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 12 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  12
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) <u className="underline font-bold">Where</u> and <u className="underline font-bold">when</u> must you display your entry permit?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[70px] sm:min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 27 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 6 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 28 (Assessment Page 7 of 20 - Written Questions Q13 to Q17) ======================= */}
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
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 13 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  13
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 3 things an emergency response / rescue plan should include?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 14 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  14
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 3 of the jobs the standby person might do?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 15 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  15
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Why do you need to check the emergency response / rescue plan with the stand-by person?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[70px] sm:min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 16 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  16
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) If you decide an area is a confined space you must warn people. What are 2 things you must do?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 17 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  17
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) How long do you need to keep the signs up?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[70px] sm:min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 28 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 7 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 29 (Assessment Page 8 of 20 - Written Questions Q18 to Q25) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-8 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-2">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-4 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[100px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-sm sm:text-base mb-4 text-[#1e3a8a]">
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 18 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  18
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What are 2 signs you might use to warn people of a confined space?
                </div>
              </div>
              <div className="p-2 bg-white flex flex-col gap-2 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
              </div>
            </div>

            {/* Question 19 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  19
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) You must choose fall arrest equipment. Should you choose a lanyard that <u className="underline font-bold">has</u> a built in energy absorber, or a lanyard that <u className="underline font-bold">does not</u> have a built in energy absorber?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 20 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  20
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) You are calibrating a gas monitor and you find a fault. What should you do?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 21 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  21
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) Why would you need 'intrinsically safe' equipment?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 22 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  22
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What is the difference between air supplied BA and self contained BA?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 23 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  23
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What is a disadvantage of using air supplied BA?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 24 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  24
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What is a disadvantage of using self contained BA?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 25 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  25
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What could happen if you do not follow an environmental management plan?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 29 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-2 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 8 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 30 (Assessment Page 9 of 20 - Written Questions Q26 to Q31) ======================= */}
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
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 26 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  26
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  (Q) Where should your rescue equipment be when you start work?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[50px] sm:min-h-[70px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 27 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  27
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  (Q) What are some things you might need to do to access a confined space safely?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[50px] sm:min-h-[70px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 28 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  28
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) You are working in a confined space. Your gas monitor sounds an alarm for LEL. What should you do?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[50px] sm:min-h-[70px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 29 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  29
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  (Q) What do you use to test gasses (the atmosphere) of a confined space?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[50px] sm:min-h-[70px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 30 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  30
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  (Q) What are the parts of a confined space do you need to test?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[50px] sm:min-h-[70px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 31 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  31
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Name 3 common things you gas test an environment for?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 30 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 9 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 31 (Assessment Page 10 of 20 - Written Questions Q32 to Q37) ======================= */}
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
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 32 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  32
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What percentage range of oxygen do people need to be able to breathe?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[45px] sm:min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 33 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  33
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  (Q) What are 2 ways you can isolate a hazard?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 34 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  34
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug">
                  (Q) What does tagging and lock-out do?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[45px] sm:min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 35 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  35
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) A site has special rules (procedures) about entering a confined space. Why must you follow the procedures for entering a confined space?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[45px] sm:min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Question 36 */}
            <div className="flex flex-col border border-gray-400 mb-5 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  36
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 4 ways the stand-by person can communicate with a worker in the confined space?
                </div>
              </div>
              <div className="p-3.5 bg-white flex flex-col gap-3 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">4.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent text-xs sm:text-sm text-gray-800 pb-0.5" />
                </div>
              </div>
            </div>

            {/* Question 37 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-12 sm:w-16 flex items-center justify-center shrink-0 text-base sm:text-lg">
                  37
                </div>
                <div className="flex-1 p-3 font-bold text-xs sm:text-sm text-gray-800 flex items-center leading-snug text-justify">
                  (Q) If you arrive at work and find that the site, or work conditions don't match the permit what should you do?
                </div>
              </div>
              <div className="p-3 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[45px] sm:min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 31 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 10 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 32 (Assessment Page 11 of 20 - Written Questions Q38 to Q45) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-8 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-2">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-4 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[100px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-sm sm:text-base mb-4 text-[#1e3a8a]">
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 38 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  38
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) You arrive to work, but then realise you are outside the hours of the permit. What must you do?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 39 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  39
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What are 3 things you need to do when you exit a confined space?
                </div>
              </div>
              <div className="p-2 bg-white flex flex-col gap-2 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
              </div>
            </div>

            {/* Question 40 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  40
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) Why must you retrieve all tools and equipment from the confined space?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 41 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  41
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) Why must you inspect the confined space as you exit?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 42 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  42
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Why must you secure the site (replace any hatches or access covers)?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 43 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  43
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What must you do with lock-outs or tags when you have finished work?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 44 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  44
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What parts of the confined space entry permit must you complete once you have finished work?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 45 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  45
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Why should you check with the environmental management plan when you are cleaning up?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 32 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-2 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 11 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 33 (Assessment Page 12 of 20 - Written Questions Q46 to Q52) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-8 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-2">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-4 relative">
              <div className="absolute left-0 top-0 hidden sm:block">
                <img src={logoImage} alt="STA Logo" className="w-[100px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-sm sm:text-base mb-4 text-[#1e3a8a]">
              <p className="uppercase tracking-wide">Summative Assessment 1: Written Questions</p>
            </div>

            {/* Question 46 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  46
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Why is it important that you clean and store your harness fall arrest equipment properly?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 47 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  47
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) Where should you store your fall protection equipment?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 48 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  48
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) What are 2 things you might do to your gas monitoring equipment when you have finished work?
                </div>
              </div>
              <div className="p-2 bg-white flex flex-col gap-2 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
              </div>
            </div>

            {/* Question 49 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  49
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) What should you do with signs and barriers when you have finished work?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 50 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  50
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) Where should you process written maintenance records?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

            {/* Question 51 */}
            <div className="flex flex-col border border-gray-400 mb-3 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  51
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug text-justify">
                  (Q) Who is in charge of site isolation and site control in confined spaces, and what are 3 things they can do?
                </div>
              </div>
              <div className="p-2 bg-white flex flex-col gap-2 font-semibold">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">1.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">2.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">3.</span>
                  <input type="text" className="flex-1 border-b border-gray-300 outline-none bg-transparent pb-0.5 text-xs" />
                </div>
              </div>
            </div>

            {/* Question 52 */}
            <div className="flex flex-col border border-gray-400 rounded-sm overflow-hidden bg-white text-xs sm:text-sm">
              <div className="flex border-b border-gray-400 bg-gray-50 items-stretch">
                <div className="bg-[#1e3a8a] text-white font-bold w-10 sm:w-12 flex items-center justify-center shrink-0">
                  52
                </div>
                <div className="flex-1 p-2 font-bold text-gray-800 flex items-center leading-snug">
                  (Q) When are you considered to be officially in the confined space?
                </div>
              </div>
              <div className="p-2 bg-white font-semibold">
                <textarea 
                  placeholder="Type your answer here..."
                  className="w-full min-h-[35px] sm:min-h-[45px] bg-transparent outline-none resize-none text-xs text-gray-800"
                />
              </div>
            </div>

          </div>

          {/* Footer Page 33 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-2 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 12 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 34 (Assessment Page 13 of 20 - End of Knowledge Question / Review) ======================= */}
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
            
            <div className="text-center font-bold text-base sm:text-lg mb-8 text-[#1e3a8a]">
              <p className="uppercase tracking-wide text-xl">End of Knowledge Question</p>
            </div>

            <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-4 rounded-sm mb-8">
              <span className="text-xl text-[#1e3a8a] select-none">❖</span>
              <p className="font-semibold text-sm sm:text-base text-gray-700 leading-relaxed">
                You have now completed the knowledge assessment. Submit this document to your trainer/assessor for marking.
              </p>
            </div>

            <div className="border border-gray-300 p-6 rounded-sm bg-gray-50/50 mb-10">
              <p className="font-bold text-sm sm:text-base text-gray-800 mb-6 leading-relaxed">
                <span className="text-[#1e3a8a]">Participant Declaration:</span> I declare that the information contained above in the written assessment summary is accurate and is a true reflection of the underpinning written assessment I undertook.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Participant's Name</label>
                  <input type="text" className="border-b border-gray-400 bg-transparent text-sm sm:text-base text-gray-800 outline-none pb-1" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Signature</label>
                  <input type="text" placeholder="Sign here..." className="border-b border-gray-400 bg-transparent text-sm sm:text-base text-gray-800 outline-none pb-1 font-serif italic" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Date</label>
                  <input type="text" placeholder="DD/MM/YYYY" className="border-b border-gray-400 bg-transparent text-sm sm:text-base text-gray-800 outline-none pb-1" />
                </div>
              </div>
            </div>

            <div className="text-center font-bold text-base sm:text-lg mb-6 text-[#1e3a8a] uppercase tracking-wide">
              Summative Assessment 1: Assessment Review
            </div>

            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm font-semibold">
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Student's name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Feedback:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <textarea className="w-full min-h-[80px] bg-transparent outline-none resize-none text-gray-800" placeholder="Assessor comments..." />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Task outcome:</div>
                <div className="p-3 sm:col-span-3 bg-white flex flex-wrap gap-6 items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                    <span className="font-bold text-gray-800">Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                    <span className="font-bold text-gray-800">Not satisfactory</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Assessor signature:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800 font-serif italic" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Assessor name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Date:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 34 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 13 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 35 (Assessment Page 14 of 20 - Practical Demonstration Instructions) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-[#1e3a8a] leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold">SUMMATIVE ASSESSMENT 2 OF 2</p>
              <p className="text-base sm:text-lg font-extrabold">PRACTICAL DEMONSTRATION</p>
              <p className="text-sm sm:text-base font-bold text-gray-700 mt-1">INSTRUCTIONS TO STUDENT</p>
            </div>

            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm mb-6">
              {/* Place and duration of assessment */}
              <div className="bg-[#b4c6e7] font-bold p-2.5 border-b border-gray-400 text-gray-800">
                Place and duration of assessment
              </div>
              <div className="p-3 bg-white leading-relaxed text-gray-700 font-semibold border-b border-gray-400 text-justify">
                This is a closed book assessment conducted in a simulated environment that must be completed during the allocated assessment period. Students should allocate approximately 1 hour to complete this task.
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="font-bold text-gray-800">Assessment Due Date:</span>
                  <input type="text" className="border-b border-gray-400 bg-transparent outline-none w-[150px] font-bold text-gray-800" />
                </div>
              </div>

              {/* Competency Criteria and Benchmarking */}
              <div className="bg-[#b4c6e7] font-bold p-2.5 border-b border-gray-400 text-gray-800">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-3 bg-white leading-relaxed text-gray-700 border-b border-gray-400 text-justify">
                <p className="font-bold text-gray-800 mb-3">To receive a “Satisfactory” grade for this assessment you must:</p>
                <div className="flex flex-col gap-2.5 font-semibold ml-1 mb-4">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4.5 h-4.5 mt-0.5 accent-[#1e3a8a] rounded border-gray-300" />
                    <span>Student Identifier</span>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4.5 h-4.5 mt-0.5 accent-[#1e3a8a] rounded border-gray-300" />
                    <span>Completed Observation Checklist</span>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4.5 h-4.5 mt-0.5 accent-[#1e3a8a] rounded border-gray-300" />
                    <span>Completed Confined Space Entry Permit (Appendix A)</span>
                  </label>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4.5 h-4.5 mt-0.5 accent-[#1e3a8a] rounded border-gray-300" />
                    <span>Completed Rescue Plan (Appendix B)</span>
                  </label>
                </div>
                <p className="font-semibold text-gray-600 leading-relaxed text-justify">
                  Before you commence the assessment you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed “Satisfactory” against all performance criteria in all assessments by your assessor to be considered “Competent” in this Unit of Competency. Feedback will be given to you.
                </p>
              </div>

              {/* Reasonable Adjustment and re-assessment policy */}
              <div className="bg-[#b4c6e7] font-bold p-2.5 border-b border-gray-400 text-gray-800">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-3 bg-white leading-relaxed text-gray-600 border-b border-gray-400 text-justify font-semibold flex flex-col gap-3">
                <p>
                  Assessment processes and techniques will as far as is practical take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.
                </p>
                <p>
                  If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.
                </p>
              </div>

              {/* Assessor Intervention */}
              <div className="bg-[#b4c6e7] font-bold p-2.5 text-gray-800">
                Assessor Intervention
              </div>
              <div className="p-3 bg-white leading-relaxed text-gray-600 text-justify font-semibold flex flex-col gap-3">
                <p>
                  Assessors are to check that the student is ready for assessment, and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.
                </p>
                <p>
                  Feedback is to be given at the completion of the assessment using the feedback to student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.
                </p>
                <p>
                  Your student record must indicate that you have all required skills and knowledge in completing the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. In the event that the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Page 35 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 14 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 36 (Assessment Page 15 of 20 - Practical Demonstration Student Identifier) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-[#1e3a8a] leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold">SUMMATIVE ASSESSMENT 2 OF 2</p>
              <p className="text-base sm:text-lg font-extrabold">PRACTICAL DEMONSTRATION</p>
              <p className="text-sm sm:text-base font-bold text-gray-700 mt-1">STUDENT IDENTIFIER</p>
            </div>

            {/* Assessment details table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm font-semibold mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Student’s Name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Student ID:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Assessor’s Name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Date of Assessment/<br />Submission:</div>
                <div className="p-2 sm:col-span-3 bg-white flex items-center">
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
            </div>

            {/* Evidence, Definition, Declaration blocks */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm font-semibold">
              
              {/* Evidence */}
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400 flex sm:items-center sm:justify-center text-center">
                  Evidence
                </div>
                <div className="p-4 sm:col-span-3 bg-white text-gray-700 leading-relaxed font-semibold">
                  <p className="font-bold text-gray-800 mb-3">You will be required to submit the following evidence in order to be assessed:</p>
                  <div className="flex flex-col gap-2 ml-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                      <span>Student Identifier</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                      <span>Completed Observation Checklist</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                      <span>Completed Confined Space Entry Permit (Appendix A)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                      <span>Completed Rescue Plan (Appendix B)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Definition */}
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400 flex sm:items-center sm:justify-center text-center">
                  Definition
                </div>
                <div className="p-4 sm:col-span-3 bg-white text-gray-600 leading-relaxed font-semibold text-justify">
                  <p className="mb-3 font-semibold text-gray-700">
                    Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant's exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Presenting any work by another individual as one's own unintentionally</li>
                    <li>Handing in work markedly similar to or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              {/* Declaration */}
              <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400 flex sm:items-center sm:justify-center text-center">
                  Declaration:
                </div>
                <div className="p-4 sm:col-span-3 bg-white text-gray-700 leading-relaxed font-semibold text-justify">
                  <p className="mb-4">
                    I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.
                  </p>
                  <p className="mb-6 font-bold text-gray-800">
                    I acknowledge that I am ready to undertake the assessment.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800 shrink-0">Student Signature</span>
                      <input type="text" placeholder="Sign here..." className="border-b border-gray-400 bg-transparent outline-none w-[180px] font-serif italic text-gray-800 pb-0.5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800 shrink-0">Date</span>
                      <input type="text" placeholder="DD/MM/YYYY" className="border-b border-gray-400 bg-transparent outline-none w-[110px] text-gray-800 pb-0.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 36 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 15 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 37 (Assessment Page 16 of 20 - Practical Demonstration tasks) ======================= */}
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
            
            <div className="text-center font-bold text-base sm:text-lg mb-8 text-[#1e3a8a] leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold tracking-wide">Summative Assessment 2: Practical Demonstration of Skill</p>
            </div>

            <div className="flex flex-col gap-6 text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold">
              <div>
                <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Task 1:</p>
                <p className="text-justify">
                  Attend a toolbox talk with your assessor and other colleagues in which you must plan and prepare for working in confined spaces. During the toolbox talk, you will obtain and confirm the work requirements and begin to complete the Confined Space Entry Permit (Appendix A) and Rescue Plan (Appendix B). During this meeting you will identify the relevant hazards and controls to work in a confined space and go through the isolation, lock out and tag out procedures.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Task 2</p>
                <p className="mb-2 text-justify">
                  You are enter and work in a confined space on at least two occasions. You will be required to complete the following:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-justify">
                  <li>Climb up 2.4 meter structure with a ladder using inertia reel</li>
                  <li>Set up tripod</li>
                  <li>Open hatch cover up top to gain access to the confined space</li>
                  <li>Apply tag and lock out procedures on the gas valves and electrical sources</li>
                  <li>Test gas atmosphere using monitor and note down readings in entry permit</li>
                  <li>Maintain communication using two-way radio</li>
                  <li>Stay in the confined space for 6 minutes</li>
                  <li>Safely exit confined space</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Task 3</p>
                <p className="mb-2 text-justify">
                  Once you have safely exited the confined space, you must:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-justify">
                  <li>Recover any tools, equipment and materials used for task</li>
                  <li>Conduct an inspection of work area</li>
                  <li>Remove tag and lock out procedures</li>
                  <li>Put away signs and barriers</li>
                  <li>Inspect the equipment and undertake any operational servicing as required.</li>
                  <li>Sign off entry permit</li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-800 text-justify">
                  Your assessor will assess your performance using the observation checklist provided below. Ensure you have read and understood this prior to starting the assessment.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Page 37 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 16 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 38 (Assessment Page 17 of 20 - Safe Work Method Statement Cover) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="flex justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-none">SAFE WORK METHOD STATEMENT</h1>
              </div>
              <div className="flex flex-col items-center border border-gray-800 p-2 rounded-sm bg-gray-50 shrink-0">
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">SWMS #</span>
                <input type="text" className="w-[100px] text-center font-bold text-sm bg-transparent outline-none mt-1" />
              </div>
            </div>

            {/* SWMS details table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[11px] sm:text-xs font-semibold mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[10px] text-gray-500 block uppercase mb-1">SWMS Name:</span>
                  <p className="font-bold text-gray-800 leading-normal">RIIWHS202E - Enter and work in confined spaces</p>
                </div>
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[10px] text-gray-500 block uppercase mb-1">SWMS Created By:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
                <div className="p-2.5">
                  <span className="text-[10px] text-gray-500 block uppercase mb-1">Date of Creation:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" placeholder="DD/MM/YYYY" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="p-2.5 sm:col-span-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[10px] text-gray-500 block uppercase mb-1">SWMS Summary:</span>
                  <textarea className="w-full bg-transparent outline-none resize-none font-semibold text-gray-800 h-8" placeholder="Enter brief summary of work steps..." />
                </div>
                <div className="p-2.5">
                  <span className="text-[10px] text-gray-500 block uppercase mb-1">Last Reviewed Date:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" placeholder="DD/MM/YYYY" />
                </div>
              </div>
            </div>

            {/* Contractor vs Project table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[11px] sm:text-xs font-semibold mb-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2 bg-[#1e3a8a] text-white font-bold text-center border-b sm:border-b-0 sm:border-r border-gray-400">
                  Company / Contractor Details:
                </div>
                <div className="p-2 bg-[#008000] text-white font-bold text-center">
                  Project Details:
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-16 uppercase text-[10px]">Name:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none text-gray-800 font-bold" />
                  </div>
                </div>
                <div className="p-2.5 flex flex-col justify-center">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 w-24 uppercase text-[10px] mt-0.5">Client:</span>
                    <span className="flex-1 font-bold text-gray-800 leading-normal">
                      Australian International Education Training T/A Safety Training Academy
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-16 uppercase text-[10px]">ABN:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none text-gray-800 font-bold" />
                  </div>
                </div>
                <div className="p-2.5 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-24 uppercase text-[10px]">Contact Name:</span>
                    <span className="flex-1 font-bold text-gray-800">Admin</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col justify-center min-h-[70px]">
                  <span className="text-gray-500 uppercase text-[10px] mb-1">Address:</span>
                  <textarea className="w-full bg-transparent outline-none resize-none text-gray-800 font-bold h-10" placeholder="Enter company address..." />
                </div>
                <div className="p-2.5 flex flex-col justify-center min-h-[70px]">
                  <span className="text-gray-500 uppercase text-[10px] mb-1">Site Address:</span>
                  <span className="font-bold text-gray-800 leading-normal">
                    Unit 3/14-16 Marjorie Street Sefton NSW 2162
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-16 uppercase text-[10px]">Contact No:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none text-gray-800 font-bold" />
                  </div>
                </div>
                <div className="p-2.5 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-24 uppercase text-[10px]">Contact No:</span>
                    <span className="flex-1 font-bold text-gray-800">1300 976 097</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-16 uppercase text-[10px]">Email:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none text-gray-800 font-bold" />
                  </div>
                </div>
                <div className="p-2.5 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <span className="text-gray-500 w-24 uppercase text-[10px]">Start Date:</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="flex-1 bg-transparent outline-none text-gray-800 font-bold" />
                  </div>
                </div>
              </div>

            </div>

            {/* How to complete this SWMS */}
            <div className="border border-gray-800 rounded-sm overflow-hidden text-xs">
              <div className="bg-gray-100 font-bold p-2.5 text-center text-gray-800 border-b border-gray-800">
                How to complete this SWMS
              </div>
              <div className="p-4 bg-white flex flex-col gap-3 font-semibold text-gray-700 text-justify">
                <p>
                  <span className="font-bold text-gray-900 mr-2">1. CONSULT:</span>
                  Consult with all persons who will be involved in the completion of the work.
                </p>
                <p>
                  <span className="font-bold text-gray-900 mr-2">2. LIST:</span>
                  List each of the steps in the task work being done.
                </p>
                <p>
                  <span className="font-bold text-gray-900 mr-2">3. IDENTIFY:</span>
                  Describe the health and safety hazards and risks arising from each step in the work.
                </p>
                <p>
                  <span className="font-bold text-gray-900 mr-2">4. RISK ASSESSMENT:</span>
                  Review the level of risk associated with each hazard listed.
                </p>
                <p>
                  <span className="font-bold text-gray-900 mr-2">5. CONTROL:</span>
                  Describe how the risks will be controlled, and describe what hazard control measures will be put in place.
                </p>
                <p>
                  <span className="font-bold text-gray-900 mr-2">6. RESPONSIBILITY:</span>
                  Allocate a person to be responsible for the hazard control measure.
                </p>
                <p>
                  <span className="font-bold text-gray-900 mr-2">7. REVIEW:</span>
                  Review the effectiveness of the control measures and apply further hazard control measures as required.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Page 38 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 17 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 39 (Assessment Page 18 of 20 - SWMS Details Fields) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* SWMS details grid - Responsive */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs font-semibold text-gray-700">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    Training/Qualifications Required to carry out work:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Detail required tickets, licences or specific competencies..." />
                  <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-2">
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Are all workers adequately trained and qualified?</span>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="workers_qualified" className="accent-[#1e3a8a]" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="workers_qualified" className="accent-[#1e3a8a]" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-3 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    PPE Required to carry out work:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Hard hat, safety boots, high-vis vest, harness, breathing apparatus..." />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 text-justify">
                    Legislation, Australian Standards & Codes of Practice relevant to work (where applicable):
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="e.g. AS 2865 Confined spaces, WHS Act 2011..." />
                </div>
                <div className="p-3 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    Equipment Required to carry out work:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Gas detector, tripod/winch, rescue harness, ventilation blower..." />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    Environmental Statement:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Detail any environmental controls, spill kit placement, noise management..." />
                </div>
                <div className="p-3 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    Safety Checks Required prior to commencement of work:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Gas test, inspection of harness/winch, emergency communication check..." />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-3 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    Coordination with other trades:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Detail any simultaneous operations, isolations requiring lockouts..." />
                </div>
                <div className="p-3 flex flex-col min-h-[140px]">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">
                    Permits required for commencement of work:
                  </span>
                  <textarea className="w-full flex-1 bg-transparent outline-none resize-none text-gray-800" placeholder="Confined Space Entry Permit, Hot Work Permit..." />
                  <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-2">
                    <span className="text-[10px] text-gray-500 uppercase font-bold">Have these permits been acquired?</span>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="permits_acquired" className="accent-[#1e3a8a]" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="permits_acquired" className="accent-[#1e3a8a]" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 39 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 18 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 40 (Assessment Page 19 of 20 - Risk Analysis Matrix) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            <h2 className="text-2xl font-bold mb-1 text-gray-900 tracking-tight">Risk analysis Matrix</h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-6">
              Use this table to determine the level of risk associated with an identified hazard.
            </p>

            {/* Matrix table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-8">
              <table className="w-full text-center border-collapse text-[10px] sm:text-xs font-bold min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-400">
                    <th rowSpan="2" className="border-r border-gray-400 p-2 bg-gray-50 uppercase tracking-wider text-[10px] text-gray-500 w-[120px]">Probability</th>
                    <th colSpan="5" className="p-2 bg-gray-50 uppercase tracking-wider text-[10px] text-gray-500 border-b border-gray-400">Consequence</th>
                  </tr>
                  <tr className="border-b border-gray-400 bg-gray-50">
                    <th className="border-r border-gray-400 p-2 font-bold text-gray-700 w-[100px]">Insignificant</th>
                    <th className="border-r border-gray-400 p-2 font-bold text-gray-700 w-[100px] leading-tight">Minor<br /><span className="text-[9px] font-semibold text-gray-500">First Aid Required</span></th>
                    <th className="border-r border-gray-400 p-2 font-bold text-gray-700 w-[110px] leading-tight">Moderate<br /><span className="text-[9px] font-semibold text-gray-500">Medical Attention and time off work</span></th>
                    <th className="border-r border-gray-400 p-2 font-bold text-gray-700 w-[110px] leading-tight">Major<br /><span className="text-[9px] font-semibold text-gray-500">Long Term Illness or Serious Injury</span></th>
                    <th className="p-2 font-bold text-gray-700 w-[120px] leading-tight">Severe<br /><span className="text-[9px] font-semibold text-gray-500">Kill or cause permanent Disability or Illness</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2 bg-gray-50 uppercase font-bold text-gray-700 text-left">Almost certain</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ff5722] text-white select-none">H</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ff5722] text-white select-none">H</td>
                    <td className="border-r border-gray-400 p-2 bg-[#d32f2f] text-white select-none">VH</td>
                    <td className="p-2 bg-[#d32f2f] text-white select-none">VH</td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2 bg-gray-50 uppercase font-bold text-gray-700 text-left">Likely</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ff5722] text-white select-none">H</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ff5722] text-white select-none">H</td>
                    <td className="p-2 bg-[#d32f2f] text-white select-none">VH</td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2 bg-gray-50 uppercase font-bold text-gray-700 text-left">Possible</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffe082] text-gray-900 select-none">L</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ff5722] text-white select-none">H</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ff5722] text-white select-none">H</td>
                    <td className="p-2 bg-[#d32f2f] text-white select-none">VH</td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2 bg-gray-50 uppercase font-bold text-gray-700 text-left">Unlikely</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffe082] text-gray-900 select-none">L</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffe082] text-gray-900 select-none">L</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="p-2 bg-[#ff5722] text-white select-none">H</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border-r border-gray-400 p-2 bg-gray-50 uppercase font-bold text-gray-700 text-left">Rare</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffe082] text-gray-900 select-none">L</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffe082] text-gray-900 select-none">L</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="border-r border-gray-400 p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                    <td className="p-2 bg-[#ffc107] text-gray-900 select-none">M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action levels table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs font-semibold min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-400 bg-gray-50 text-center font-bold text-gray-700">
                    <th className="border-r border-gray-400 p-2.5 w-[120px]">Risk level</th>
                    <th className="p-2.5">Required action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2.5 bg-[#d32f2f] text-white font-bold text-center uppercase tracking-wide">Very high</td>
                    <td className="p-3 bg-white text-gray-700 font-semibold leading-relaxed text-justify">
                      The proposed task or process activity must not proceed. Steps must be taken to lower the risk level to as low as reasonably practicable using the hierarchy of risk controls.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2.5 bg-[#ff5722] text-white font-bold text-center uppercase tracking-wide">High</td>
                    <td className="p-3 bg-white text-gray-700 font-semibold leading-relaxed text-justify">
                      <p className="mb-2">The proposed activity can only proceed, provided that:</p>
                      <ol className="list-decimal pl-5 flex flex-col gap-1.5">
                        <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls;</li>
                        <li>The risk controls must include those identified in legislation, Australian Standards, Codes of Practice etc.</li>
                        <li>The risk assessment has been reviewed and approved by the Supervisor and</li>
                        <li>A Safe Working Procedure or Safe Work Method has been prepared.</li>
                        <li>The supervisor must review and document the effectiveness of the implemented risk controls.</li>
                      </ol>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="border-r border-gray-400 p-2.5 bg-[#ffc107] text-gray-900 font-bold text-center uppercase tracking-wide">Medium</td>
                    <td className="p-3 bg-white text-gray-700 font-semibold leading-relaxed text-justify">
                      <p className="mb-2">The proposed task or process can proceed, provided that:</p>
                      <ol className="list-decimal pl-5 flex flex-col gap-1.5">
                        <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls;</li>
                        <li>The risk assessment has been reviewed and approved by the Supervisor and</li>
                        <li>A Safe Working Procedure or Safe Work Method Statement has been prepared.</li>
                      </ol>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border-r border-gray-400 p-2.5 bg-[#ffe082] text-gray-900 font-bold text-center uppercase tracking-wide">Low</td>
                    <td className="p-3 bg-white text-gray-700 font-semibold leading-relaxed text-justify">
                      Managed by local documented routine procedures which must include application of the hierarchy of controls.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer Page 40 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 19 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 41 (Assessment Page 20 of 20 - SWMS Matrix Input Grid) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-8 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-2">
            
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#1e3a8a] text-center uppercase tracking-wide">Safe Work Method Statement</h2>

            {/* Safe Work Method Statement Grid table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm">
              <table className="w-full text-left border-collapse text-[9px] sm:text-[10px] font-bold min-w-[750px]">
                <thead>
                  <tr className="border-b border-gray-400 bg-gray-50 text-center font-extrabold text-gray-800 leading-snug">
                    <th className="border-r border-gray-400 p-2 w-[110px]">Work Step</th>
                    <th className="border-r border-gray-400 p-2 w-[140px]">Associated/identified Hazards</th>
                    <th className="border-r border-gray-400 p-2 w-[80px]">Risk Level<br /><span className="text-[8px] font-semibold text-gray-500">(L, M, H, VH)</span></th>
                    <th className="border-r border-gray-400 p-2 w-[160px]">Hazard Controls</th>
                    <th className="border-r border-gray-400 p-2 w-[80px]">Revised Risk Level<br /><span className="text-[8px] font-semibold text-gray-500">(L, M, H, VH)</span></th>
                    <th className="p-2 w-[110px]">Person Responsible</th>
                  </tr>
                  <tr className="border-b border-gray-400 bg-gray-50/50 text-[8px] font-semibold text-gray-600 leading-normal text-justify">
                    <td className="border-r border-gray-400 p-1.5">Work your way through each step in the work process, giving a brief description of what is required at each stage.</td>
                    <td className="border-r border-gray-400 p-1.5">What hazards can be identified for this step?</td>
                    <td className="border-r border-gray-400 p-1.5 text-center">What is the risk level?</td>
                    <td className="border-r border-gray-400 p-1.5">What hazards controls will be put into place to deal with the identified hazards for this step?</td>
                    <td className="border-r border-gray-400 p-1.5 text-center">Has the risk been reduced?</td>
                    <td className="p-1.5">Who is responsible for carrying out the work and maintaining the hazard controls?</td>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((rowNum) => (
                    <tr key={rowNum} className="border-b border-gray-400 h-[120px] bg-white">
                      <td className="border-r border-gray-400 p-1">
                        <textarea className="w-full h-full bg-transparent outline-none resize-none font-semibold text-gray-800 leading-tight" placeholder="Step description..." />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <textarea className="w-full h-full bg-transparent outline-none resize-none font-semibold text-gray-800 leading-tight" placeholder="Hazards..." />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full h-full bg-transparent outline-none text-center font-bold text-gray-800" placeholder="M" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <textarea className="w-full h-full bg-transparent outline-none resize-none font-semibold text-gray-800 leading-tight" placeholder="Controls..." />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full h-full bg-transparent outline-none text-center font-bold text-gray-800" placeholder="L" />
                      </td>
                      <td className="p-1">
                        <textarea className="w-full h-full bg-transparent outline-none resize-none font-semibold text-gray-800 leading-tight" placeholder="Name/Role..." />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer Page 41 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 20 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 42 (SWMS Personnel Signoff & Checklist) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            <h2 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight">Personnel Signoff</h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-6 leading-relaxed">
              All personnel required to carry out this task need to be listed below.<br />
              By signing this SWMS, each person declares that they have carefully read the SWMS and that they understand their responsibilities and requirements to complete the work.
            </p>

            {/* Personnel Signoff Table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-8">
              <table className="w-full text-left border-collapse text-xs font-semibold min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-400 bg-gray-50 font-bold text-gray-700">
                    <th className="border-r border-gray-400 p-2.5 w-[180px]">Name (please print)</th>
                    <th className="border-r border-gray-400 p-2.5 w-[180px]">Position / Qualification</th>
                    <th className="border-r border-gray-400 p-2.5 w-[140px]">Signature</th>
                    <th className="p-2.5 w-[100px]">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((rowNum) => (
                    <tr key={rowNum} className="border-b last:border-b-0 border-gray-400 h-12 bg-white">
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none px-1 text-gray-800" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none px-1 text-gray-800" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none px-1 font-serif italic text-gray-800" />
                      </td>
                      <td className="p-1">
                        <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none px-1 text-gray-800 text-center" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Senior Management Signoff */}
            <div className="border border-gray-300 p-6 rounded-sm bg-gray-50/50 text-xs sm:text-sm font-semibold text-gray-700 mb-8 leading-relaxed">
              <p className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider text-left">Senior management Signoff:</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-4">
                <span className="text-gray-800">Does this SWMS meet the necessary safety requirements?</span>
                <div className="flex gap-6 shrink-0">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="swms_safety_ok" className="accent-[#1e3a8a]" />
                    <span className="font-bold">Yes</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="swms_safety_ok" className="accent-[#1e3a8a]" />
                    <span className="font-bold">No</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-gray-800">Does this SWMS require review?</span>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex gap-6 shrink-0">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="swms_needs_review" className="accent-[#1e3a8a]" />
                      <span className="font-bold">Yes</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="swms_needs_review" className="accent-[#1e3a8a]" />
                      <span className="font-bold">No</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 uppercase text-[10px]">Review Date:</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="border-b border-gray-400 bg-transparent outline-none w-[110px] text-gray-800 font-bold" />
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist of Items */}
            <div className="border border-gray-800 rounded-sm overflow-hidden text-xs">
              <div className="bg-gray-100 font-bold p-2.5 text-center text-gray-800 border-b border-gray-800 uppercase tracking-wider">
                Checklist of Items that may be required for the job activity
              </div>
              <div className="bg-white font-semibold">
                
                <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-300">
                  <div className="p-3 bg-gray-50 border-r border-gray-300 font-bold text-gray-800 flex items-center">CERTIFICATES</div>
                  <div className="p-3 sm:col-span-3 text-gray-700 leading-relaxed">
                    <p className="font-bold text-gray-900">Enter and Work in Confined Spaces – RIIWHS202E</p>
                    <p className="text-gray-500 text-[11px] mt-0.5">Nationally recognised unit of competency</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-300">
                  <div className="p-3 bg-gray-50 border-r border-gray-300 font-bold text-gray-800 flex items-center text-justify">CODES OF PRACTICE / LEGISLATION APPLICABLE</div>
                  <div className="p-3 sm:col-span-3 text-gray-700 leading-relaxed flex flex-col gap-1 text-justify">
                    <p>WHS Act 2011 & WHS Regulations 2011</p>
                    <p>AS 2865–2009: Confined spaces Australian Standards</p>
                    <p>Managing the Risk of Falls at Workplaces Code of Practice 2011</p>
                    <p>AS 1319-1994 Safety signs for the occupational environment</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-300">
                  <div className="p-3 bg-gray-50 border-r border-gray-300 font-bold text-gray-800 flex items-center">PLANT & EQUIPMENT</div>
                  <div className="p-3 sm:col-span-3 text-gray-700 flex items-center font-bold">N/A</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-300">
                  <div className="p-3 bg-gray-50 border-r border-gray-300 font-bold text-gray-800 flex items-center">MAINTENANCE CHECKS</div>
                  <div className="p-3 sm:col-span-3 text-gray-700 leading-relaxed text-justify">
                    <p>AS/NZS 1891.1 Part 1: Safety Belts and Harnesses.</p>
                    <p>AS/NZS 1715: 2009 Selection, use and maintenance of respiratory protective equipment.</p>
                  </div>
                </div>

                {/* PPE Row with 5 circular badges */}
                <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-300">
                  <div className="p-3 bg-gray-50 border-r border-gray-300 font-bold text-gray-800 flex items-center">PERSONAL PROTECTIVE EQUIPMENT</div>
                  <div className="p-4 sm:col-span-3 text-gray-700 flex flex-wrap justify-center sm:justify-start gap-4">
                    
                    {/* Badge 1: Safety Footwear */}
                    <div className="flex flex-col items-center w-[90px] border border-gray-300 rounded p-1.5 bg-gray-50 text-[8px] text-center font-bold uppercase text-gray-800 leading-tight">
                      <svg viewBox="0 0 100 100" className="w-10 h-10 mb-1.5 fill-[#1e3a8a]">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="3" />
                        <path d="M25,72 L32,35 L48,35 L52,50 L68,52 L78,65 L78,72 Z" fill="white" />
                      </svg>
                      <span>Safety Foot Protection Must Be Worn</span>
                    </div>

                    {/* Badge 2: Breathing Apparatus */}
                    <div className="flex flex-col items-center w-[90px] border border-gray-300 rounded p-1.5 bg-gray-50 text-[8px] text-center font-bold uppercase text-gray-800 leading-tight">
                      <svg viewBox="0 0 100 100" className="w-10 h-10 mb-1.5 fill-[#1e3a8a]">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="3" />
                        <path d="M50,22 C36,22 32,35 32,50 C32,65 38,78 50,78 C62,78 68,65 68,50 C68,35 64,22 50,22 Z" fill="white" />
                        <circle cx="50" cy="50" r="8" fill="#1e3a8a" />
                      </svg>
                      <span>Breathing Apparatus Must Be Worn In This Area</span>
                    </div>

                    {/* Badge 3: Head Protection */}
                    <div className="flex flex-col items-center w-[90px] border border-gray-300 rounded p-1.5 bg-gray-50 text-[8px] text-center font-bold uppercase text-gray-800 leading-tight">
                      <svg viewBox="0 0 100 100" className="w-10 h-10 mb-1.5 fill-[#1e3a8a]">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="3" />
                        <path d="M20,54 C20,32 32,24 50,24 C68,24 80,32 80,54 C80,56 78,57 74,56 C68,55 58,54 50,54 C42,54 32,55 26,56 C22,57 20,56 20,54 Z" fill="white" />
                      </svg>
                      <span>Head Protection Must Be Worn In This Area</span>
                    </div>

                    {/* Badge 4: High Vis Vest */}
                    <div className="flex flex-col items-center w-[90px] border border-gray-300 rounded p-1.5 bg-gray-50 text-[8px] text-center font-bold uppercase text-gray-800 leading-tight">
                      <svg viewBox="0 0 100 100" className="w-10 h-10 mb-1.5 fill-[#1e3a8a]">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="3" />
                        <path d="M30,30 L38,30 L45,45 L50,45 L55,45 L62,30 L70,30 L72,75 L28,75 Z" fill="white" />
                        <rect x="34" y="55" width="32" height="6" fill="#1e3a8a" />
                      </svg>
                      <span>High Visibility Safety Vest Must Be Worn</span>
                    </div>

                    {/* Badge 5: Safety Harness */}
                    <div className="flex flex-col items-center w-[90px] border border-gray-300 rounded p-1.5 bg-gray-50 text-[8px] text-center font-bold uppercase text-gray-800 leading-tight">
                      <svg viewBox="0 0 100 100" className="w-10 h-10 mb-1.5 fill-[#1e3a8a]">
                        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="3" />
                        <path d="M48,22 C51,22 53,24 53,27 L53,38 L65,52 L60,56 L52,47 L52,78 L48,78 L48,47 L40,56 L35,52 L47,38 L47,27 C47,24 49,22 48,22 Z" fill="white" />
                      </svg>
                      <span>Safety Harness Must Be Worn</span>
                    </div>

                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4">
                  <div className="p-3 bg-gray-50 border-r border-gray-300 font-bold text-gray-800 flex items-center">COUNCIL / POWER AUTHORITY PERMITS</div>
                  <div className="p-3 sm:col-span-3 text-gray-700 flex items-center font-bold">Check Local Requirements</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 43 (Appendix A - Confined Space Entry Permit) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-8 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-2">
            
            <div className="flex justify-between items-start mb-2 border-b border-gray-300 pb-2">
              <span className="font-bold text-sm tracking-wide text-gray-500">APPENDIX A</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase text-gray-500 font-bold">Permit Number:</span>
                <span className="font-mono font-bold text-base text-gray-700 tracking-wider">110012</span>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold mb-4 text-[#1e3a8a] text-center tracking-wide uppercase">Confined Space Entry Permit</h2>

            {/* Top Info fields */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs font-semibold mb-4 bg-gray-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Location of Work:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
                <div className="p-2">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Type of Work:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Site / Hatch / Area ID:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
                <div className="p-2 grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Authorised Date:</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Authorised Time:</span>
                    <input type="text" placeholder="HH:MM" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Authorised By Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
                <div className="p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Assessor Signature:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold font-serif italic text-gray-800" />
                </div>
                <div className="p-2">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Authorization Date:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
              </div>
            </div>

            {/* People Authorised to Enter table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-4">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white text-center font-bold">
                    <th className="border-r border-gray-400 p-1.5 w-[220px]">People Authorised to Enter Confined Space</th>
                    <th className="border-r border-gray-400 p-1.5 w-[65px]">Trained</th>
                    <th colSpan="2" className="border-r border-gray-400 p-1.5 w-[180px]">Entry</th>
                    <th colSpan="2" className="p-1.5 w-[180px]">Exit</th>
                  </tr>
                  <tr className="bg-gray-100 font-bold border-b border-gray-400 text-center text-[9px] text-gray-700">
                    <td className="border-r border-gray-400 p-1 text-left">Name / Designation</td>
                    <td className="border-r border-gray-400 p-1">Check [✓]</td>
                    <td className="border-r border-gray-300 p-1">Time</td>
                    <td className="border-r border-gray-400 p-1">Signature</td>
                    <td className="border-r border-gray-300 p-1">Time</td>
                    <td className="p-1">Signature</td>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Person In Control",
                    "Standby Person",
                    "Entrant 1",
                    "Entrant 2",
                    "Entrant 3"
                  ].map((role, idx) => (
                    <tr key={idx} className="border-b last:border-b-0 border-gray-400 h-9 bg-white">
                      <td className="border-r border-gray-400 p-1 flex items-center justify-between">
                        <input type="text" className="w-full bg-transparent outline-none px-1 text-gray-800 font-bold text-[10px]" placeholder={role} />
                      </td>
                      <td className="border-r border-gray-400 p-1 text-center">
                        <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5 mt-0.5" />
                      </td>
                      <td className="border-r border-gray-300 p-1">
                        <input type="text" placeholder="--:--" className="w-full bg-transparent outline-none text-center text-[10px]" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none text-center font-serif italic text-[10px]" />
                      </td>
                      <td className="border-r border-gray-300 p-1">
                        <input type="text" placeholder="--:--" className="w-full bg-transparent outline-none text-center text-[10px]" />
                      </td>
                      <td className="p-1">
                        <input type="text" className="w-full bg-transparent outline-none text-center font-serif italic text-[10px]" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Expected Hazards panel & PPE panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-[10px] sm:text-xs">
              
              {/* Expected Hazards */}
              <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col font-semibold">
                <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase">
                  Expected Hazards of Space
                </div>
                <div className="p-2.5 bg-white grid grid-cols-2 gap-2 flex-1">
                  {[
                    "Unsafe oxygen levels", "Risk of engulfment", "Slips / Trips / Falls", "Heat / Cold",
                    "Biohazards", "Mechanical / Electrical", "Fumes or gasses", "Airborne Contaminants",
                    "Poor lighting", "Noise levels", "Explosive environment", "Manual handling",
                    "Steam / Water / Gas", "Hot work"
                  ].map((hazard, idx) => (
                    <label key={idx} className="flex items-start gap-1.5 cursor-pointer leading-tight text-[9px] sm:text-[10px]">
                      <input type="checkbox" className="accent-[#1e3a8a] mt-0.5 shrink-0" />
                      <span>{hazard}</span>
                    </label>
                  ))}
                  <div className="col-span-2 border-t border-gray-200 pt-1.5 mt-1 flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Other:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 outline-none text-[9px] pb-0.5" />
                  </div>
                </div>
              </div>

              {/* PPE & Ventilation */}
              <div className="flex flex-col gap-3 font-semibold">
                
                {/* Ventilation */}
                <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col">
                  <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase text-[10px] sm:text-xs">
                    Ventilation Method
                  </div>
                  <div className="p-2.5 bg-white flex flex-wrap gap-x-4 gap-y-2 text-[9px] sm:text-[10px]">
                    {["Natural", "Purging", "Inerting", "Other"].map((method, idx) => (
                      <label key={idx} className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="accent-[#1e3a8a]" />
                        <span>{method}</span>
                      </label>
                    ))}
                    <div className="w-full border-t border-gray-200 pt-1.5 mt-1 flex items-center gap-1.5">
                      <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Details:</span>
                      <input type="text" className="flex-1 border-b border-gray-300 outline-none text-[9px] pb-0.5" />
                    </div>
                  </div>
                </div>

                {/* PPE */}
                <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col flex-1">
                  <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase text-[10px] sm:text-xs">
                    (P.P.E.) Required
                  </div>
                  <div className="p-2.5 bg-white grid grid-cols-2 gap-2 flex-1 text-[9px] sm:text-[10px]">
                    {[
                      "Hearing Protection", "Safety Glasses", "Gloves", "Protective Clothing",
                      "Harness/Lifeline", "Suitable Footwear", "Breathing Apparatus", "Safety Helmet"
                    ].map((ppe, idx) => (
                      <label key={idx} className="flex items-start gap-1.5 cursor-pointer leading-tight">
                        <input type="checkbox" className="accent-[#1e3a8a] mt-0.5 shrink-0" />
                        <span>{ppe}</span>
                      </label>
                    ))}
                    <div className="col-span-2 border-t border-gray-200 pt-1.5 mt-1 flex items-center gap-1.5">
                      <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Other:</span>
                      <input type="text" className="flex-1 border-b border-gray-300 outline-none text-[9px] pb-0.5" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Isolation required from table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-4">
              <table className="w-full text-left border-collapse text-[9px] sm:text-[10px] font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white text-center font-bold">
                    <th className="border-r border-gray-400 p-1.5 w-[210px]">Isolation Required From</th>
                    <th className="border-r border-gray-400 p-1.5 w-[45px]">Needed</th>
                    <th className="border-r border-gray-400 p-1.5 w-[45px]">Initial</th>
                    <th className="border-r border-gray-400 p-1.5 w-[50px]">Time</th>
                    <th className="border-r border-gray-400 p-1.5 w-[210px]">Isolation Required From</th>
                    <th className="border-r border-gray-400 p-1.5 w-[45px]">Needed</th>
                    <th className="border-r border-gray-400 p-1.5 w-[45px]">Initial</th>
                    <th className="p-1.5 w-[50px]">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { left: "Water / Gas / Steam", right: "Mechanical / Electrical Drives" },
                    { left: "Fire Extinguishing Systems", right: "Sludge / Deposits / Wastes" },
                    { left: "Chemicals / Substances", right: "Grains / Dust / Chips" },
                    { left: "Other:", right: "Other:" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b last:border-b-0 border-gray-400 h-7 bg-white">
                      <td className="border-r border-gray-400 p-1 font-bold text-gray-800">
                        {row.left.includes("Other:") ? (
                          <div className="flex items-center gap-1">
                            <span className="shrink-0 font-bold text-gray-500">Other:</span>
                            <input type="text" className="flex-1 bg-transparent outline-none border-none text-[9px]" />
                          </div>
                        ) : row.left}
                      </td>
                      <td className="border-r border-gray-400 p-1 text-center">
                        <input type="checkbox" className="accent-[#1e3a8a] w-3 h-3" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none text-center text-[9px]" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" placeholder="--:--" className="w-full bg-transparent outline-none text-center text-[9px]" />
                      </td>
                      
                      <td className="border-r border-gray-400 p-1 font-bold text-gray-800">
                        {row.right.includes("Other:") ? (
                          <div className="flex items-center gap-1">
                            <span className="shrink-0 font-bold text-gray-500">Other:</span>
                            <input type="text" className="flex-1 bg-transparent outline-none border-none text-[9px]" />
                          </div>
                        ) : row.right}
                      </td>
                      <td className="border-r border-gray-400 p-1 text-center">
                        <input type="checkbox" className="accent-[#1e3a8a] w-3 h-3" />
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none text-center text-[9px]" />
                      </td>
                      <td className="p-1">
                        <input type="text" placeholder="--:--" className="w-full bg-transparent outline-none text-center text-[9px]" />
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-400 bg-gray-50 font-bold text-[9px] text-gray-700 h-8">
                    <td colSpan="8" className="p-2 text-right">
                      <label className="flex items-center justify-end gap-2 cursor-pointer">
                        <span>Locks / Tags fixed to isolation points</span>
                        <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Other checks & controls */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[9px] sm:text-[10px] font-semibold mb-4 bg-white text-gray-700">
              
              <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase tracking-wide">
                Other Checks & Controls
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex flex-col gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <span>Hot Work Permit Required?</span>
                    <div className="flex gap-4 shrink-0 font-bold">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="hot_work_req" className="accent-[#1e3a8a]" />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="hot_work_req" className="accent-[#1e3a8a]" />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span>BA Required?</span>
                    <div className="flex gap-4 shrink-0 font-bold">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="ba_req" className="accent-[#1e3a8a]" />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="ba_req" className="accent-[#1e3a8a]" />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span>Comms Organised?</span>
                    <div className="flex gap-4 shrink-0 font-bold">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="comms_ok" className="accent-[#1e3a8a]" />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="comms_ok" className="accent-[#1e3a8a]" />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 flex flex-col gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <span>Intrinsically Safe Equipment Needed?</span>
                    <div className="flex gap-4 shrink-0 font-bold">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="intrinsic_req" className="accent-[#1e3a8a]" />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="intrinsic_req" className="accent-[#1e3a8a]" />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span>Signs/Barricades Up?</span>
                    <div className="flex gap-4 shrink-0 font-bold">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="signs_up" className="accent-[#1e3a8a]" />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="signs_up" className="accent-[#1e3a8a]" />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span>Rescue Plan Complete?</span>
                    <div className="flex gap-4 shrink-0 font-bold">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="rescue_complete" className="accent-[#1e3a8a]" />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="radio" name="rescue_complete" className="accent-[#1e3a8a]" />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400 flex justify-between items-center gap-2">
                  <span>Fire Fighting/Protection Equipment Needed?</span>
                  <div className="flex gap-4 shrink-0 font-bold">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name="fire_equip_req" className="accent-[#1e3a8a]" />
                      <span>YES</span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name="fire_equip_req" className="accent-[#1e3a8a]" />
                      <span>NO</span>
                    </label>
                  </div>
                </div>
                <div className="p-2.5 flex justify-between items-center gap-2">
                  <span>Equipment needed for rescue is available?</span>
                  <div className="flex gap-4 shrink-0 font-bold">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name="rescue_equip_avail" className="accent-[#1e3a8a]" />
                      <span>YES</span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name="rescue_equip_avail" className="accent-[#1e3a8a]" />
                      <span>NO</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="p-2.5 flex flex-col min-h-[55px]">
                <span className="text-[8px] text-gray-500 uppercase font-bold mb-1">Other Controls:</span>
                <textarea className="w-full bg-transparent outline-none resize-none font-semibold text-gray-800 h-6" placeholder="Enter other safety control specifications..." />
              </div>

            </div>

            {/* Gas testing regime & Atmosphere testing */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[9px] sm:text-[10px] font-semibold mb-4 bg-white text-gray-700">
              
              <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase tracking-wide">
                Gas Testing & Atmosphere Checks
              </div>

              {/* Regime row */}
              <div className="p-2.5 bg-gray-50 border-b border-gray-400 flex flex-wrap gap-x-6 gap-y-2 items-center justify-center font-bold">
                <span className="text-gray-500 uppercase text-[9px]">Gas Testing Regime:</span>
                <div className="flex flex-wrap gap-4 items-center">
                  {["Before entry", "As required", "Continuously"].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-1 cursor-pointer text-gray-800">
                      <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                      <span>{item}</span>
                    </label>
                  ))}
                  <div className="flex items-center gap-1 text-gray-800">
                    <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                    <span>Every</span>
                    <input type="text" className="w-[30px] border-b border-gray-400 text-center outline-none bg-transparent font-bold" />
                    <span>mins</span>
                  </div>
                </div>
              </div>

              {/* Gas Equipment Details */}
              <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 bg-white border-b border-gray-400 text-[9px] sm:text-[10px]">
                
                {[1, 2].map((num) => (
                  <div key={num} className="flex flex-col gap-1.5 border border-gray-200 p-2 rounded bg-gray-50/50">
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] text-gray-400 uppercase font-bold shrink-0">Device {num} ID No:</span>
                      <input type="text" className="flex-1 bg-transparent outline-none border-b border-gray-300 pb-0.5 font-bold" />
                    </div>
                    <div className="flex gap-3 mt-1 font-bold text-gray-800 justify-center">
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="accent-[#1e3a8a]" />
                        <span>Calibrated</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="accent-[#1e3a8a]" />
                        <span>Battery Charged</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="accent-[#1e3a8a]" />
                        <span>Inspected</span>
                      </label>
                    </div>
                  </div>
                ))}

              </div>

              {/* Atmosphere / Gas Tests Grid Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse text-[9px] sm:text-[10px] font-bold min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-100 font-bold border-b border-gray-400">
                      <th rowSpan="2" className="border-r border-gray-400 p-1 w-[120px] text-left uppercase text-[9px] text-gray-500">Atmosphere / Gas Tests</th>
                      <th colSpan="3" className="border-r border-gray-400 p-1 border-b border-gray-400">Entrance / Exit</th>
                      <th colSpan="7" className="p-1 border-b border-gray-400">Other Tests <span className="text-[8px] font-normal text-gray-500">(Top, Centre & Bottom of space)</span></th>
                    </tr>
                    <tr className="bg-gray-50 font-bold border-b border-gray-400 text-gray-700 text-[8px]">
                      <th className="border-r border-gray-300 p-1 w-[60px]">Before Opening</th>
                      <th className="border-r border-gray-300 p-1 w-[60px]">Slightly Ajar</th>
                      <th className="border-r border-gray-400 p-1 w-[60px]">Fully Open</th>
                      <th className="border-r border-gray-300 p-1 w-[40px]">1</th>
                      <th className="border-r border-gray-300 p-1 w-[40px]">2</th>
                      <th className="border-r border-gray-300 p-1 w-[40px]">3</th>
                      <th className="border-r border-gray-300 p-1 w-[40px]">4</th>
                      <th className="border-r border-gray-300 p-1 w-[40px]">5</th>
                      <th className="border-r border-gray-300 p-1 w-[40px]">6</th>
                      <th className="p-1 w-[40px]">7</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 h-6">
                      <td className="border-r border-gray-400 p-1 bg-gray-50 text-left font-bold text-gray-700">TIME:</td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-400 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="border-r border-gray-300 p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                      <td className="p-1"><input type="text" className="w-full bg-transparent outline-none text-center" placeholder="--:--" /></td>
                    </tr>
                    {[
                      "% of Oxygen",
                      "% of LEL",
                      "Carbon Monoxide - CO2",
                      "Hydrogen Sulfide - H2S",
                      "Other:",
                      "Other:"
                    ].map((test, idx) => (
                      <tr key={idx} className="border-b last:border-b-0 border-gray-300 h-6">
                        <td className="border-r border-gray-400 p-1 bg-gray-50 text-left font-bold text-gray-700">
                          {test.includes("Other:") ? (
                            <div className="flex items-center gap-1">
                              <span className="shrink-0 font-bold text-gray-500">Other:</span>
                              <input type="text" className="flex-1 bg-transparent outline-none border-none text-[9px]" />
                            </div>
                          ) : test}
                        </td>
                        {[...Array(10)].map((_, cIdx) => (
                          <td key={cIdx} className={`p-1 ${cIdx === 2 ? 'border-r border-gray-400' : cIdx < 9 ? 'border-r border-gray-300' : ''}`}>
                            <input type="text" className="w-full bg-transparent outline-none text-center" />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Exiting space checklist */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[9px] sm:text-[10px] font-semibold bg-white text-gray-700">
              <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase tracking-wide">
                Exiting Space Checklist
              </div>
              <div className="p-3 bg-gray-50/50 flex flex-wrap justify-center gap-x-6 gap-y-2 border-b border-gray-400 font-bold text-gray-800">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                  <span>All persons accounted for</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                  <span>Tools/Equipment Checked</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                  <span>Gas Monitors Checked & Returned</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="accent-[#1e3a8a] w-3.5 h-3.5" />
                  <span>Permit complete</span>
                </label>
              </div>
              <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Signed (Person In Control):</span>
                  <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic text-gray-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Date:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-bold text-gray-800 text-center" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Time:</span>
                  <input type="text" placeholder="HH:MM" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-bold text-gray-800 text-center" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 44 (Appendix B - Rescue Plan) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-8 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-2">
            
            <div className="flex justify-between items-start mb-2 border-b border-gray-300 pb-2">
              <span className="font-bold text-sm tracking-wide text-gray-500">APPENDIX B</span>
              <span className="font-bold text-sm tracking-wide text-[#1e3a8a] uppercase">Rescue Plan</span>
            </div>

            {/* Emergency Contact Block & Work Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs font-semibold">
              
              {/* Emergency Contact */}
              <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col">
                <div className="bg-[#d32f2f] text-white font-extrabold p-2 text-center flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
                  <span>Emergency Contact</span>
                  <span className="bg-white text-[#d32f2f] px-1.5 py-0.5 rounded text-xs select-none">000</span>
                </div>
                <div className="p-3 bg-white flex-1 flex flex-col gap-2.5 text-[10px] sm:text-xs">
                  <div className="flex items-start gap-1">
                    <span className="text-[8px] text-gray-400 uppercase font-bold w-28 shrink-0 mt-0.5">Other emergency numbers:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5" />
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-[8px] text-gray-400 uppercase font-bold w-28 shrink-0 mt-0.5">Site address:</span>
                    <textarea className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 resize-none h-6 leading-tight" />
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-[8px] text-gray-400 uppercase font-bold w-28 shrink-0 mt-0.5">Nearest cross road:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5" />
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-[8px] text-gray-400 uppercase font-bold w-28 shrink-0 mt-0.5">Site access details:</span>
                    <textarea className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 resize-none h-6 leading-tight" placeholder="Level, floor, entrances, etc..." />
                  </div>
                  <div className="flex items-start gap-1">
                    <span className="text-[8px] text-gray-400 uppercase font-bold w-28 shrink-0 mt-0.5">Access point:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5" placeholder="For emergency services..." />
                  </div>
                </div>
              </div>

              {/* Work Details & Workers names */}
              <div className="flex flex-col gap-3">
                
                {/* Type of work being performed */}
                <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col">
                  <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase text-[10px] sm:text-xs">
                    Work Details (Type of work being performed)
                  </div>
                  <div className="p-2 bg-white">
                    <textarea className="w-full bg-transparent outline-none resize-none text-[10px] text-gray-800 h-[48px] leading-tight" placeholder="Provide description..." />
                  </div>
                </div>

                {/* Workers Names & Contact Info */}
                <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col flex-1">
                  <table className="w-full text-left border-collapse text-[9px] sm:text-[10px]">
                    <thead>
                      <tr className="bg-[#1e3a8a] text-white font-bold text-center border-b border-gray-400">
                        <th className="border-r border-gray-400 p-1 w-1/2">Workers Names</th>
                        <th className="p-1 w-1/2">Contact Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((rowNum) => (
                        <tr key={rowNum} className="border-b last:border-b-0 border-gray-400 h-6 bg-white">
                          <td className="border-r border-gray-400 p-1">
                            <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                          </td>
                          <td className="p-1">
                            <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

            </div>

            {/* Pre work equipment checks table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[9px] sm:text-[10px] font-semibold mb-4">
              <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase tracking-wide text-center">
                Pre Work Equipment Checks (To be initialled by person checking the equipment)
              </div>
              <div className="bg-white grid grid-cols-2 sm:grid-cols-4 border-b border-gray-400">
                {[
                  "Anchor points", "Static lines", "Lanyards", "Harnesses",
                  "EWP", "Inertia reels/lifelines", "Tripod", "Scaffold",
                  "Snap hooks/karabiners", "Ropes", "Energy absorbers", "Trauma straps"
                ].map((item, idx) => (
                  <div key={idx} className="p-2 border-r last:border-r-0 border-b border-gray-300 sm:last:border-b-0 flex items-center justify-between gap-1.5">
                    <span className="text-gray-700 leading-tight">{item}</span>
                    <input type="text" placeholder="Init" className="w-[35px] border-b border-gray-300 bg-transparent text-center text-[9px] font-bold outline-none uppercase" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-2 bg-gray-50 text-[9px] sm:text-[10px] gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Checked By Name:</span>
                  <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-bold" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Signature:</span>
                  <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic" />
                </div>
              </div>
            </div>

            {/* Who is in charge table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-4">
              <table className="w-full text-left border-collapse text-[9px] sm:text-[10px] font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white font-bold border-b border-gray-400">
                    <th className="p-1.5 w-[220px]">Who is in charge of:</th>
                    <th className="border-l border-r border-gray-400 p-1.5 w-[240px]">Name</th>
                    <th className="p-1.5 w-[240px]">Contact Information</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "The rescue (primary contact)",
                    "Contacting emergency services",
                    "Stand-by person (observing if a fall occurs)",
                    "Ensuring rescuers are safe",
                    "First Aid (including suspension trauma treatment)"
                  ].map((role, idx) => (
                    <tr key={idx} className="border-b last:border-b-0 border-gray-400 h-7 bg-white">
                      <td className="p-1.5 font-bold text-gray-700 leading-tight">{role}</td>
                      <td className="border-l border-r border-gray-400 p-1">
                        <input type="text" className="w-full bg-transparent outline-none px-1 text-gray-800" />
                      </td>
                      <td className="p-1">
                        <input type="text" className="w-full bg-transparent outline-none px-1 text-gray-800" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Rescue tasks table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-4">
              <table className="w-full text-left border-collapse text-[9px] sm:text-[10px] font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white font-bold text-center border-b border-gray-400">
                    <th className="border-r border-gray-400 p-1.5 w-[160px] text-left">Rescue Tasks</th>
                    <th className="border-r border-gray-400 p-1.5 w-[240px] text-left">Details of Steps in Rescue</th>
                    <th className="border-r border-gray-400 p-1.5 w-[160px] text-left">People Responsible <span className="text-[8px] font-normal text-white/80">(Name & Contact)</span></th>
                    <th className="border-r border-gray-400 p-1.5 w-[130px] text-left">Equipment Needed for Rescue</th>
                    <th className="p-1.5 w-[60px]">Time Needed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "Does equipment need to be set up or moved before you can perform the rescue?", label: "Practiced and timed: Yes / No", labelEq: "Equipment tested: Yes / No" },
                    { task: "How will you reach the person who has fallen?", label: "Practiced and timed: Yes / No", labelEq: "Equipment tested: Yes / No" },
                    { task: "Other factors: Layout of building, access problems, weather conditions, language barriers, etc.", label: "Practiced and timed: Yes / No", labelEq: "Equipment tested: Yes / No" },
                    { task: "How will you get an injured or unconscious person down?", label: "Practiced and timed: Yes / No", labelEq: "Equipment tested: Yes / No" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-400 bg-white">
                      <td className="border-r border-gray-400 p-1.5 font-bold text-gray-700 leading-tight text-justify">{row.task}</td>
                      <td className="border-r border-gray-400 p-1.5 flex flex-col gap-2">
                        <textarea className="w-full bg-transparent outline-none resize-none text-[9px] h-[36px] leading-tight" placeholder="Step-by-step description..." />
                        <div className="border-t border-gray-100 pt-1.5 font-bold text-gray-500 text-[8px] uppercase">{row.label}</div>
                      </td>
                      <td className="border-r border-gray-400 p-1">
                        <textarea className="w-full h-full bg-transparent outline-none resize-none text-[9px] leading-tight" placeholder="Names..." />
                      </td>
                      <td className="border-r border-gray-400 p-1.5 flex flex-col gap-2">
                        <textarea className="w-full bg-transparent outline-none resize-none text-[9px] h-[36px] leading-tight" placeholder="Equipment lists..." />
                        <div className="border-t border-gray-100 pt-1.5 font-bold text-gray-500 text-[8px] uppercase">{row.labelEq}</div>
                      </td>
                      <td className="p-1">
                        <input type="text" placeholder="--:--" className="w-full bg-transparent outline-none text-center font-bold text-gray-800" />
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-bold border-t border-gray-400 h-8">
                    <td colSpan="4" className="p-2 text-right uppercase text-[9px] text-[#1e3a8a] font-extrabold tracking-wide">
                      Total Time Needed for Rescue - Must Not Exceed 5 min (300 sec)
                    </td>
                    <td className="p-1">
                      <input type="text" placeholder="--:--" className="w-full bg-transparent outline-none text-center font-extrabold text-[#d32f2f] text-sm" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Equipment needed for rescue grid */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-[9px] sm:text-[10px] font-semibold mb-4">
              <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase tracking-wide text-center">
                Equipment Needed for Rescue (To be initialled by person checking the equipment)
              </div>
              <div className="bg-white grid grid-cols-2 sm:grid-cols-4 border-b border-gray-400">
                {[
                  "Rescue ladder", "Static lines", "Lanyards", "Harnesses",
                  "EWP", "Inertia reels/lifelines", "Tripod/scaffold", "Winches",
                  "Snap hooks/karabiners", "Ropes", "Energy absorbers", "Trauma straps",
                  "First Aid kit", "Crane", "Spreader bars", "Stretcher"
                ].map((item, idx) => (
                  <div key={idx} className="p-2 border-r last:border-r-0 border-b border-gray-300 sm:last:border-b-0 flex items-center justify-between gap-1.5">
                    <span className="text-gray-700 leading-tight">{item}</span>
                    <input type="text" placeholder="Init" className="w-[35px] border-b border-gray-300 bg-transparent text-center text-[9px] font-bold outline-none uppercase" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-2 bg-gray-50 text-[9px] sm:text-[10px] gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Checked By Name:</span>
                  <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-bold" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Signature:</span>
                  <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic" />
                </div>
              </div>
            </div>

            {/* Comm tasks & Final checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-[9px] sm:text-[10px] font-semibold text-gray-700">
              
              {/* Communication tasks */}
              <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col bg-white">
                <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase">
                  Communications Tasks
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 font-bold border-b border-gray-400 text-center text-[8px] text-gray-500">
                      <th className="p-1 text-left w-2/3">Communication Task</th>
                      <th className="p-1 w-1/3">Tested?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "Communication during work",
                      "Stand-by Person to raise alarm",
                      "Rescuers will communicate",
                      "Suspended person",
                      "Emergency services contacted"
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b last:border-b-0 border-gray-300 h-6">
                        <td className="p-1 leading-tight font-bold text-gray-600">{item}</td>
                        <td className="p-1 text-center font-bold text-[8px]">
                          <div className="flex justify-center gap-2">
                            <label className="flex items-center gap-0.5 cursor-pointer">
                              <input type="radio" name={`comm_${idx}`} className="accent-[#1e3a8a]" />
                              <span>YES</span>
                            </label>
                            <label className="flex items-center gap-0.5 cursor-pointer">
                              <input type="radio" name={`comm_${idx}`} className="accent-[#1e3a8a]" />
                              <span>NO</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Final Checklist */}
              <div className="border border-gray-400 rounded-sm overflow-hidden flex flex-col bg-white">
                <div className="bg-[#1e3a8a] text-white font-bold p-1.5 text-center uppercase">
                  Final Checklist <span className="text-[8px] font-normal text-white/85">(Immediately before work)</span>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 font-bold border-b border-gray-400 text-center text-[8px] text-gray-500">
                      <th className="p-1 text-left w-2/3">Checklist Item</th>
                      <th className="p-1 w-1/3">Checked?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "All fall restraint/arrest equipment and anchor points checked",
                      "Harnesses have been checked and fitted correctly",
                      "Rescue equipment is set up and in place",
                      "Possible fall distance and fall arrest distance checked",
                      "Workers know how to reduce suspension intolerance"
                    ].map((item, idx) => (
                      <tr key={idx} className="border-b last:border-b-0 border-gray-300 h-6">
                        <td className="p-1 leading-tight font-bold text-gray-600 text-justify">{item}</td>
                        <td className="p-1 text-center font-bold text-[8px]">
                          <div className="flex justify-center gap-2">
                            <label className="flex items-center gap-0.5 cursor-pointer">
                              <input type="radio" name={`final_${idx}`} className="accent-[#1e3a8a]" />
                              <span>YES</span>
                            </label>
                            <label className="flex items-center gap-0.5 cursor-pointer">
                              <input type="radio" name={`final_${idx}`} className="accent-[#1e3a8a]" />
                              <span>NO</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

            {/* Bottom details block */}
            <div className="border border-gray-300 p-4 rounded-sm bg-gray-50/50 text-[10px] sm:text-xs font-semibold text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Written By:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Signature:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Date:</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 text-center font-bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Authorised By:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Signature:</span>
                    <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] text-gray-500 uppercase font-bold shrink-0">Date:</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 text-center font-bold" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 45 (Assessment Page 17 of 20 - Practical Demonstration Observation Checklist) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-[#1e3a8a] leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold">Assessment 2 – Practical Demonstration</p>
              <p className="text-sm sm:text-base font-bold text-gray-700 mt-1">Observation Checklist</p>
            </div>

            {/* Top Student Assessor details */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs font-semibold mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Student name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800 font-bold" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Assessor name:</div>
                <div className="p-2 sm:col-span-1 bg-white border-b sm:border-b-0 sm:border-r border-gray-400">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Date:</div>
                <div className="p-2 sm:col-span-1 bg-white">
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none text-gray-800" />
                </div>
              </div>
            </div>

            {/* Checklist Table - Responsive */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#b4c6e7] text-gray-800 border-b border-gray-400">
                    <th rowSpan="2" className="border-r border-gray-400 p-2.5 text-center font-extrabold w-[450px]">Observable Behaviours</th>
                    <th colSpan="2" className="p-2 text-center font-extrabold w-[250px]">Yes / No</th>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-400 text-gray-600 text-[9px] font-bold text-center">
                    <th className="border-r border-gray-300 p-1">Occasion 1</th>
                    <th className="p-1">Occasion 2</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Task 1 Section */}
                  <tr className="bg-gray-100 font-bold border-b border-gray-400 text-gray-700 text-center">
                    <td colSpan="3" className="p-1.5 uppercase tracking-wide">Task 1</td>
                  </tr>

                  {[
                    { text: "The student correctly obtained, interpreted and confirmed work requirements during toolbox talk including obtaining and completing documentation required to enter and work in confined spaces, including:\n• Sign onto Confined Space Work Permit\n• Sign off on Confined Space Rescue Plan.\n\nDuring the toolbox talk the student must use a range of communication techniques and systems to communicate with others to receive and clarify work instructions and to determine coordination requirements prior to commencing and during work activities." },
                    { text: "The student accurately identified and addressed potential risks, hazards and environmental issues on the Entry Permit, and implemented control measures according to workplace procedures." },
                    { text: "The student accurately obtained and confirmed authorisation of a confined space entry permit that meets regulatory requirements by signing onto it." },
                    { text: "The student appropriately selected and wore appropriate personal protective equipment for planned work activities as indicated on Entry Permit." },
                    { text: "The student correctly obtained and interpreted emergency procedures with the stand-by person during toolbox, and was prepared for emergency situations including the signing off on the Rescue Plan." },
                    { text: "The student accurately identified, obtained and implemented signage and barrier requirements according to workplace procedures, including:\n• “Do Not Enter Confined Space” signs\n• “Breathing Apparatus required” sign\n• “Confined Space Entry Permit” sign\n• “Danger Working Above” sign\n\nSignage must be visible and prominently placed." },
                    { text: "The student appropriately selected gas detector and torch light for the tasks, checked for serviceability and rectified or reported any faults to relevant personnel." }
                  ].map((row, idx) => (
                    <tr key={`task1_${idx}`} className="border-b border-gray-400 bg-white">
                      <td className="border-r border-gray-400 p-2.5 font-bold text-gray-700 whitespace-pre-wrap leading-relaxed text-justify">{row.text}</td>
                      <td className="border-r border-gray-300 p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t1_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t1_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t1_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t1_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Task 2 Section Start */}
                  <tr className="bg-gray-100 font-bold border-b border-gray-400 text-gray-700 text-center">
                    <td colSpan="3" className="p-1.5 uppercase tracking-wide">Task 2</td>
                  </tr>

                  {[
                    { text: "The student correctly positioned rescue equipment including winch and spreader bar by the entry permit." },
                    { text: "The student correctly gained access to confined space including being aware of steps, ladders, lifting and lowering equipment when gaining access to the container. The student must also apply safe material handling techniques." },
                    { text: "The student appropriately tested and monitored the atmosphere for harmful elements according to workplace procedures.\n\nThe student must test the atmosphere at sight. The student should check for oxygen levels and ensure no other contaminants. If they are detected, the student must immediately stop and notify supervisor. They must not enter the confined space if these are detected.\n\nGas test results will be noted on Entry Permit." },
                    { text: "The student correctly applied tagging and lock-out procedures, including using covers on the mechanical valves and electrical sources to ensure they are isolated and cannot be switched on." },
                    { text: "The student correctly entered the confined space according to workplace procedures.\n\nWhile completing the work task, the student must periodically use the atmospheric monitoring device to ensure there are no changes in the oxygen levels and presence of other contaminants." }
                  ].map((row, idx) => (
                    <tr key={`task2_a_${idx}`} className="border-b border-gray-400 bg-white">
                      <td className="border-r border-gray-400 p-2.5 font-bold text-gray-700 whitespace-pre-wrap leading-relaxed text-justify">{row.text}</td>
                      <td className="border-r border-gray-300 p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2a_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2a_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2a_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2a_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

          </div>

          {/* Footer Page 45 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 17 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 46 (Assessment Page 18 of 20 - Observation Checklist Continued & Outcomes) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-[#1e3a8a] leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold">Assessment 2 – Practical Demonstration</p>
              <p className="text-sm sm:text-base font-bold text-gray-700 mt-1">Observation Checklist Continued</p>
            </div>

            {/* Checklist Continued Table - Responsive */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-6">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#b4c6e7] text-gray-800 border-b border-gray-400">
                    <th rowSpan="2" className="border-r border-gray-400 p-2.5 text-center font-extrabold w-[450px]">Observable Behaviours</th>
                    <th colSpan="2" className="p-2 text-center font-extrabold w-[250px]">Yes / No</th>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-400 text-gray-600 text-[9px] font-bold text-center">
                    <th className="border-r border-gray-300 p-1">Occasion 1</th>
                    <th className="p-1">Occasion 2</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Task 2 Continued */}
                  {[
                    { text: "The student correctly maintained ongoing verbal communication with the stand-by person using the two-way radio." },
                    { text: "The student correctly complied with entry permit requirements." },
                    { text: "The student correctly monitored and adhered to allocated entry time as listed on the Entry Permit." },
                    { text: "The student correctly exited confined space according to workplace procedures and coordinated with the stand-by person." }
                  ].map((row, idx) => (
                    <tr key={`task2_b_${idx}`} className="border-b border-gray-400 bg-white">
                      <td className="border-r border-gray-400 p-2.5 font-bold text-gray-700 whitespace-pre-wrap leading-relaxed text-justify">{row.text}</td>
                      <td className="border-r border-gray-300 p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2b_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2b_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2b_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t2b_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* Task 3 Section */}
                  <tr className="bg-gray-100 font-bold border-b border-gray-400 text-gray-700 text-center">
                    <td colSpan="3" className="p-1.5 uppercase tracking-wide">Task 3</td>
                  </tr>

                  {[
                    { text: "The student must correctly recover tools, equipment and materials.\n\nThe student must leave the confined space as they found it. Leaving tools or equipment in the space may interfere with its usual purpose and normal operation." },
                    { text: "The student accurately conducted inspection of the confined spaces according to workplace procedures.\n\nThe confined space must be inspected to make sure all tasks have been completed and that all tools, equipment and materials have been recovered. The student must also check that there has been no damage done to the environment as well as check to make sure that no workers have been left behind in the confined space." },
                    { text: "The student accurately removed tagging and lock-out procedures including removing cover from mechanical valves and electrical sources." },
                    { text: "The student must correctly complete confined space entry permit requirements according to workplace procedures." },
                    { text: "The student correctly cleared work area and disposed of materials according to workplace procedures." },
                    { text: "The student appropriately removed, cleaned and stored barriers and signs into designated areas." },
                    { text: "The student correctly conducted equipment inspections to identify faults according to manufacturer specifications and workplace procedures and report to relevant personnel.\n\nAny equipment found to be faulty must be tagged and isolated. The student must immediately notify the supervisor." },
                    { text: "The student correctly conducted routine operational servicing, lubrication and housekeeping activities according to workplace procedures.\n\nThe student must store the harness, breathing apparatus and gas monitor into designated areas." },
                    { text: "The student accurately completed the Work Permit" }
                  ].map((row, idx) => (
                    <tr key={`task3_${idx}`} className="border-b border-gray-400 bg-white">
                      <td className="border-r border-gray-400 p-2.5 font-bold text-gray-700 whitespace-pre-wrap leading-relaxed text-justify">{row.text}</td>
                      <td className="border-r border-gray-300 p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t3_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t3_${idx}_o1`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        <div className="flex justify-center gap-2 font-bold">
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t3_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" name={`t3_${idx}_o2`} className="accent-[#1e3a8a] w-3.5 h-3.5" />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            {/* Feedback section */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs font-semibold mb-6">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800 uppercase tracking-wide text-left">
                Feedback to the student
              </div>
              <div className="p-2 bg-white">
                <textarea className="w-full min-h-[90px] bg-transparent outline-none resize-none text-gray-800 leading-normal" placeholder="Assessor observations & constructive feedback..." />
              </div>
            </div>

            {/* Outcome declaration */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs font-semibold mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400 uppercase">Outcome</div>
                <div className="p-3 sm:col-span-3 bg-white flex flex-wrap gap-6 items-center">
                  <span className="font-bold text-gray-600 mr-2 uppercase text-[10px]">Satisfactory / Not satisfactory (Circle):</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                    <span className="font-bold text-gray-800">Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] rounded border-gray-300" />
                    <span className="font-bold text-gray-800">Not satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Student details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-400">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Student Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Student Signature:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-serif italic text-gray-800" />
                </div>
                <div className="p-2.5">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Date:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none font-bold text-gray-800 text-center" />
                </div>
              </div>

              {/* Assessor declaration details */}
              <div className="bg-gray-150 p-2.5 border-b border-gray-400 font-bold text-gray-800 text-left text-[10px] uppercase">
                Assessor declaration: I confirm that the information above is correct.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Assessor Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-gray-800" />
                </div>
                <div className="p-2.5 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Assessor Signature:</span>
                  <input type="text" className="w-full bg-transparent outline-none font-serif italic text-gray-800" />
                </div>
                <div className="p-2.5">
                  <span className="text-[9px] uppercase text-gray-400 block mb-0.5">Date:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none font-bold text-gray-800 text-center" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 46 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 18 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 47 (Assessment Page 19 of 20 - Summative Assessment 2: Assessment Review) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-8 text-gray-900 leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold tracking-wider">Summative Assessment 2: Assessment Review</p>
            </div>

            {/* Assessment Review Table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-8">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-semibold min-w-[700px]">
                <tbody>
                  
                  {/* Row 1: Evidence Attached */}
                  <tr className="border-b border-gray-400">
                    <td className="p-4 bg-gray-50 border-r border-gray-400 font-bold text-gray-800 w-1/3 leading-relaxed">
                      Have the following evidence been attached
                    </td>
                    <td className="p-4 bg-white w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <label className="flex items-start gap-2.5 cursor-pointer text-gray-700">
                          <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] mt-0.5" />
                          <span>Student identifier</span>
                        </label>
                        <label className="flex items-start gap-2.5 cursor-pointer text-gray-700">
                          <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] mt-0.5" />
                          <span>Completed Confined Space Entry (Appendix A)</span>
                        </label>
                        <label className="flex items-start gap-2.5 cursor-pointer text-gray-700">
                          <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] mt-0.5" />
                          <span>Completed Observation Checklist</span>
                        </label>
                        <label className="flex items-start gap-2.5 cursor-pointer text-gray-700">
                          <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] mt-0.5" />
                          <span>Completed Rescue Plan (Appendix B)</span>
                        </label>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2: Outcome */}
                  <tr className="border-b border-gray-400">
                    <td className="p-4 bg-gray-50 border-r border-gray-400 font-bold text-gray-800 leading-relaxed">
                      Summative Assessment 2 outcome:
                    </td>
                    <td className="p-4 bg-white flex gap-12 items-center">
                      <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-bold">
                        <input type="radio" name="sa2_outcome" className="w-4 h-4 accent-[#1e3a8a]" />
                        <span>Satisfactory</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-bold">
                        <input type="radio" name="sa2_outcome" className="w-4 h-4 accent-[#1e3a8a]" />
                        <span>Not satisfactory</span>
                      </label>
                    </td>
                  </tr>

                  {/* Row 3: Feedback */}
                  <tr className="border-b border-gray-400">
                    <td className="p-4 bg-gray-50 border-r border-gray-400 font-bold text-gray-800 leading-relaxed">
                      Feedback
                    </td>
                    <td className="p-2 bg-white">
                      <textarea className="w-full min-h-[140px] bg-transparent outline-none resize-none p-1 font-semibold text-gray-800 leading-normal" placeholder="Assessor review and performance feedback comments..." />
                    </td>
                  </tr>

                  {/* Row 4: Assessor signature */}
                  <tr className="border-b border-gray-400">
                    <td className="p-4 bg-gray-50 border-r border-gray-400 font-bold text-gray-800">
                      Assessor signature:
                    </td>
                    <td className="p-2 bg-white">
                      <input type="text" className="w-full bg-transparent outline-none px-2 font-serif italic text-gray-800 text-lg" placeholder="Assessor signature..." />
                    </td>
                  </tr>

                  {/* Row 5: Assessor name */}
                  <tr className="border-b border-gray-400">
                    <td className="p-4 bg-gray-50 border-r border-gray-400 font-bold text-gray-800">
                      Assessor name:
                    </td>
                    <td className="p-2 bg-white">
                      <input type="text" className="w-full bg-transparent outline-none px-2 font-bold text-gray-800" placeholder="Assessor name..." />
                    </td>
                  </tr>

                  {/* Row 6: Date */}
                  <tr className="border-b last:border-b-0 border-gray-400">
                    <td className="p-4 bg-gray-50 border-r border-gray-400 font-bold text-gray-800">
                      Date:
                    </td>
                    <td className="p-2 bg-white">
                      <input type="text" placeholder="DD / MM / YYYY" className="w-[180px] bg-transparent outline-none px-2 font-bold text-gray-800" />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

          {/* Footer Page 47 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 19 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 48 (Assessment Page 20 of 20 - Summary of Assessment) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-gray-900 leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold tracking-wider">SUMMARY OF ASSESSMENT</p>
            </div>

            {/* Instruction Notice Box */}
            <div className="border border-gray-400 p-4 rounded-sm bg-gray-50 text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed mb-6 text-justify">
              This form is to be completed by the assessor and used a final record of student competency being awarded by the trainer. All student submissions including any associated checklists (outlined below) are to be attached to this cover sheet before placing on the student’s file. Student results are not to be entered onto the Student Database unless all relevant paperwork is completed and attached to this form.
            </div>

            {/* Top Details Table */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm font-semibold mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Student Name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800 font-bold px-1" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 border-b border-gray-400">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Final Completion Date:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none text-gray-800 font-bold px-1" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="p-3 bg-[#b4c6e7] font-bold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-400">Assessor Name:</div>
                <div className="p-2 sm:col-span-3 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-gray-800 font-bold px-1" />
                </div>
              </div>
            </div>

            {/* Documentation results table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-[#b4c6e7] text-gray-800 font-extrabold border-b border-gray-400 text-center">
                    <th colSpan="2" className="border-r border-gray-400 p-2.5 w-2/3 text-left">Please attach the following documentation to this form</th>
                    <th className="p-2.5 w-1/3">Indicate Result</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Assessment 1 */}
                  <tr className="border-b border-gray-400 h-11 bg-white">
                    <td className="border-r border-gray-300 p-2 w-[120px] font-bold bg-gray-50 text-gray-800 text-center">Assessment 1</td>
                    <td className="border-r border-gray-400 p-2 font-semibold text-gray-700 leading-relaxed">Written Questions</td>
                    <td className="p-2">
                      <div className="flex justify-center gap-6 font-bold text-gray-700">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="res_a1" className="accent-[#1e3a8a] w-4 h-4" />
                          <span>Satisfactory</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="res_a1" className="accent-[#1e3a8a] w-4 h-4" />
                          <span>Not Satisfactory</span>
                        </label>
                      </div>
                    </td>
                  </tr>

                  {/* Assessment 2 */}
                  <tr className="border-b border-gray-400 h-11 bg-white">
                    <td className="border-r border-gray-300 p-2 font-bold bg-gray-50 text-gray-800 text-center">Assessment 2</td>
                    <td className="border-r border-gray-400 p-2 font-semibold text-gray-700 leading-relaxed">Practical Demonstration</td>
                    <td className="p-2">
                      <div className="flex justify-center gap-6 font-bold text-gray-700">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="res_a2" className="accent-[#1e3a8a] w-4 h-4" />
                          <span>Satisfactory</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="res_a2" className="accent-[#1e3a8a] w-4 h-4" />
                          <span>Not Satisfactory</span>
                        </label>
                      </div>
                    </td>
                  </tr>

                  {/* Final Assessment Result */}
                  <tr className="bg-blue-50/20 h-11">
                    <td colSpan="2" className="border-r border-gray-400 p-2.5 font-bold text-gray-900 bg-gray-50">
                      Final Assessment Result for this unit
                    </td>
                    <td className="p-2">
                      <div className="flex justify-center gap-8 font-extrabold text-gray-900">
                        <label className="flex items-center gap-1.5 cursor-pointer text-green-700">
                          <input type="radio" name="res_final" className="accent-green-700 w-4.5 h-4.5" />
                          <span>Competent</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer text-red-700">
                          <input type="radio" name="res_final" className="accent-red-700 w-4.5 h-4.5" />
                          <span>Not Competent</span>
                        </label>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Comments Box */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm font-semibold mb-6 bg-white">
              <div className="bg-gray-100 font-bold p-2.5 border-b border-gray-400 text-gray-800 uppercase tracking-wide text-left">
                Comments:
              </div>
              <div className="p-2">
                <textarea className="w-full min-h-[140px] bg-transparent outline-none resize-none font-semibold text-gray-800 leading-normal" placeholder="Final summary comments..." />
              </div>
            </div>

            {/* Signatures Declaration Grid */}
            <div className="border border-gray-400 rounded-sm overflow-hidden text-xs sm:text-sm font-semibold">
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-400">
                
                {/* Student side */}
                <div className="p-4 border-b sm:border-b-0 sm:border-r border-gray-400 bg-white flex flex-col gap-4">
                  <div className="font-bold text-gray-900 border-b border-gray-100 pb-2 uppercase tracking-wide">Student</div>
                  <label className="flex items-start gap-2 cursor-pointer leading-relaxed text-gray-700">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e3a8a] mt-0.5 shrink-0" />
                    <span>My performance in this unit has been discussed and explained to me.</span>
                  </label>
                  <div className="mt-auto pt-4 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Student Signature:</span>
                      <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic text-gray-800 text-base" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Date:</span>
                      <input type="text" placeholder="DD / MM / YYYY" className="w-[120px] border-b border-gray-300 bg-transparent outline-none pb-0.5 text-center font-bold" />
                    </div>
                  </div>
                </div>

                {/* Assessor side */}
                <div className="p-4 bg-white flex flex-col gap-4">
                  <div className="font-bold text-gray-900 border-b border-gray-100 pb-2 uppercase tracking-wide">Assessor</div>
                  <p className="leading-relaxed text-justify text-gray-700">
                    I hereby certify that this student has been assessed by me and that the assessment has been carried out according to the required assessment procedures.
                  </p>
                  <div className="mt-auto pt-4 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Signature:</span>
                      <input type="text" className="flex-1 border-b border-gray-300 bg-transparent outline-none pb-0.5 font-serif italic text-gray-800 text-base" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Date:</span>
                      <input type="text" placeholder="DD / MM / YYYY" className="w-[120px] border-b border-gray-300 bg-transparent outline-none pb-0.5 text-center font-bold" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-[10px] font-bold text-gray-400 mt-2 tracking-wide uppercase">Administrative use only</p>

          </div>

          {/* Footer Page 48 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <p>Page 20 of 20</p>
            <p>240124</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 49 (Evaluation Page 3 of 4 - Participant Course Completion Evaluation) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-gray-900 leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold tracking-wide">Participant Course Completion Evaluation</p>
            </div>

            {/* Important Instructions Box */}
            <div className="border border-gray-800 p-5 rounded-sm bg-white text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed mb-6 text-justify">
              <p className="font-extrabold text-sm text-gray-900 mb-2 uppercase tracking-wide">Important instructions</p>
              <p className="mb-3">
                Please tell us about your training. Your feedback plays an important role in developing the quality of your education. In this questionnaire, the term ‘training’ refers to learning experiences with your training organisation. The term ‘trainer’ refers to trainers, teachers, lecturers or instructors from your training organisation.
              </p>
              <p className="mb-3">
                Provide one response to each item on the form. Complete using a black or blue pen. Print neatly in CAPITAL letters, place a clear “X” inside each box.
              </p>
              <p className="mb-4">
                Leave the box blank if the statement does not apply. If you want to change your answer, fill in the entire box and mark the correct box with an ‘X’.
              </p>

              {/* Example Graphic Boxes */}
              <div className="flex flex-wrap items-center gap-4 border-t border-gray-200 pt-3">
                <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Example:</span>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-400 px-2 py-1 rounded">
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold"></span>
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold text-[10px]">X</span>
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold"></span>
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold"></span>
                  </div>
                  <span className="text-[9px] text-gray-400">or</span>
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-400 px-2 py-1 rounded">
                    <span className="w-4 h-4 border border-gray-800 bg-black flex items-center justify-center font-extrabold"></span>
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold text-[10px]">X</span>
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold"></span>
                    <span className="w-4 h-4 border border-gray-800 flex items-center justify-center font-extrabold"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Anonymous notice & Trainer fields */}
            <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-relaxed mb-6 text-justify">
              <p className="font-bold text-gray-800 mb-4">
                <span className="italic">Instructions:</span> please indicate how much you agree with the following statements.<br />
                This response can be completed and submitted anonymously, however this will restrict our ability to provide focused or remedial improvements in your particular situation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-gray-300 py-3.5 bg-gray-50/50 px-2 font-bold text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Trainer:</span>
                  <input type="text" className="flex-1 border-b border-gray-400 bg-transparent outline-none pb-0.5 text-gray-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 uppercase font-bold shrink-0">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="w-[180px] border-b border-gray-400 bg-transparent outline-none pb-0.5 text-center text-gray-800" />
                </div>
              </div>
            </div>

            {/* Questions Table */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-gray-150 text-gray-800 border-b border-gray-400 font-bold text-center">
                    <th className="p-2 text-left w-[420px] uppercase text-[10px] text-gray-500">Please tick the appropriate response.</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Strongly Disagree</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Disagree</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Agree</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Strongly Agree</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "I developed the skills expected from this training.",
                    "I identified ways to build on my current knowledge and skills.",
                    "The training focused on relevant skills.",
                    "I developed the knowledge expected from this training.",
                    "The training prepared me well for work.",
                    "I set high standards for myself in this training.",
                    "The training had a good mix of theory and practice.",
                    "I looked for my own resources to help me learn.",
                    "Overall, I am satisfied with the training.",
                    "I would recommend the training organisation to others.",
                    "Training organisation staff respected my background and needs.",
                    "I pushed myself to understand things I found confusing.",
                    "Trainers had an excellent knowledge of the subject content.",
                    "I received useful feedback on my assessments.",
                    "The way I was assessed was a fair test of my skills and knowledge.",
                    "I learned to work with people.",
                    "The training was at the right level of difficulty for me.",
                    "The amount of work I had to do was reasonable.",
                    "Assessments were based on realistic activities."
                  ].map((question, idx) => {
                    const qNum = idx + 1;
                    return (
                      <tr key={qNum} className="border-b last:border-b-0 border-gray-300 hover:bg-gray-50 bg-white">
                        <td className="p-2 font-bold text-gray-700 text-justify">
                          <span className="inline-block w-6 text-gray-400 font-normal">{qNum}.</span>
                          {question}
                        </td>
                        {[1, 2, 3, 4].map((col) => (
                          <td key={col} className="border-l border-gray-300 p-1.5 text-center">
                            <label className="inline-flex items-center justify-center cursor-pointer w-full h-full">
                              <input type="radio" name={`eval_q_${qNum}`} className="accent-[#1e3a8a] w-4 h-4 cursor-pointer" />
                            </label>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer Page 49 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <div className="flex flex-wrap justify-between w-full text-gray-500 font-normal mb-1">
              <span>Australian International Education and Training Pty Ltd T/A Safety Training Academy</span>
              <span>Issue Date: 230831</span>
            </div>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            <p className="font-extrabold text-black mt-0.5 text-xs">Page 3 of 4</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 50 (Evaluation Page 4 of 4 - Participant Course Completion Evaluation Continued) ======================= */}
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
            
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-gray-900 leading-normal uppercase">
              <p className="text-base sm:text-lg font-extrabold tracking-wide">Participant Course Completion Evaluation Continued</p>
            </div>

            {/* Questions Table Continued */}
            <div className="overflow-x-auto border border-gray-400 rounded-sm mb-6">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs font-semibold min-w-[700px]">
                <thead>
                  <tr className="bg-gray-150 text-gray-800 border-b border-gray-400 font-bold text-center">
                    <th className="p-2 text-left w-[420px] uppercase text-[10px] text-gray-500">Evaluation Items Continued...</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Strongly Disagree</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Disagree</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Agree</th>
                    <th className="border-l border-gray-300 p-2 w-[70px] text-center text-[9px] leading-tight">Strongly Agree</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "It was always easy to know the standards expected.",
                    "Training facilities and materials were in good condition.",
                    "I usually had a clear idea of what was expected of me.",
                    "Trainers explained things clearly.",
                    "The training organisation had a range of services to support learners.",
                    "I learned to plan and manage my work.",
                    "The training used up-to-date equipment, facilities and materials.",
                    "I approached trainers if I needed help.",
                    "Trainers made the subject as interesting as possible.",
                    "I would recommend the training to others.",
                    "The training organisation gave appropriate recognition of existing knowledge and skills.",
                    "Training resources were available when I needed them.",
                    "I was given enough material to keep up my interest.",
                    "The training was flexible enough to meet my needs.",
                    "Trainers encouraged learners to ask questions.",
                    "Trainers made it clear right from the start what they expected from me.",
                    "The RTO supported my efforts to learn and complete this qualification.",
                    "The RTO's pre enrolment information was clear and easy to understand.",
                    "The enrolment process was quick and easy to complete.",
                    "The RTO accommodated my special needs.",
                    "The RTO was receptive to all my enquiries."
                  ].map((question, idx) => {
                    const qNum = idx + 20;
                    const isGreyBackground = qNum >= 36;
                    return (
                      <tr key={qNum} className={`border-b last:border-b-0 border-gray-300 hover:bg-gray-50 ${isGreyBackground ? 'bg-gray-100/80 font-bold' : 'bg-white'}`}>
                        <td className="p-2 font-bold text-gray-700 text-justify">
                          <span className="inline-block w-6 text-gray-400 font-normal">{qNum}.</span>
                          {question}
                        </td>
                        {[1, 2, 3, 4].map((col) => (
                          <td key={col} className="border-l border-gray-300 p-1.5 text-center">
                            <label className="inline-flex items-center justify-center cursor-pointer w-full h-full">
                              <input type="radio" name={`eval_q_${qNum}`} className="accent-[#1e3a8a] w-4 h-4 cursor-pointer" />
                            </label>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Comments areas */}
            <div className="flex flex-col gap-6 text-xs sm:text-sm font-semibold text-gray-700">
              
              {/* Additional comments on training */}
              <div className="border border-gray-400 rounded-sm overflow-hidden bg-white">
                <div className="bg-gray-100 font-bold p-3 border-b border-gray-400 text-gray-800 text-justify leading-relaxed">
                  Please use this space to make any additional comments regarding the Training and Assessment processes:
                </div>
                <div className="p-2.5">
                  <textarea className="w-full min-h-[90px] bg-transparent outline-none resize-none font-semibold text-gray-800 leading-normal" placeholder="Type comments here..." />
                </div>
              </div>

              {/* Comments on client services */}
              <div className="border border-gray-400 rounded-sm overflow-hidden bg-white">
                <div className="bg-gray-100 font-bold p-3 border-b border-gray-400 text-gray-800 text-justify leading-relaxed">
                  And comments on client services:
                </div>
                <div className="p-2.5">
                  <textarea className="w-full min-h-[90px] bg-transparent outline-none resize-none font-semibold text-gray-800 leading-normal" placeholder="Type comments here..." />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 50 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-4 flex flex-col items-center border-t border-gray-100 font-semibold text-center leading-normal">
            <div className="flex flex-wrap justify-between w-full text-gray-500 font-normal mb-1">
              <span>Australian International Education and Training Pty Ltd T/A Safety Training Academy</span>
              <span>Issue Date: 230831</span>
            </div>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            <p className="font-extrabold text-black mt-0.5 text-xs">Page 4 of 4</p>
          </div>

        </div>
      </div>

    </div>
  );
}
