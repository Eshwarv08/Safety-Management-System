import React from 'react';
import logoImage from '../img/logo.png';
import coverImage from '../img/Question2pageno1.png';
import pageno3Image from '../img/pageno3.png';
import q1Image from '../img/Question2-qno1.png';
import q3Image from '../img/Question2-qno3.png';
import q4Image from '../img/Question2-qno4.png';
import q5Image from '../img/Question2-qno5.png';
import q7Image from '../img/Question2-qno7.png';
import q8Image from '../img/Question2-qno8.png';
import q10Image from '../img/Question2-qno10.png';
import q12Image from '../img/Question2-qno12.png';
import q13Image from '../img/Question2-qno13.png';
import q14Image from '../img/Question2-qno14.png';
import q17Image from '../img/Question2-qno17.png';
import q18Image from '../img/Question2-qno18.png';
import q19Image from '../img/Question2-qno19.png';
import q20Image from '../img/Question2-qno20.png';
import q21Image from '../img/Question2-qno21.png';
import q22Image from '../img/Question2-qno22.png';
import q23Image from '../img/Question2-qno23.png';
import q24Image from '../img/Question2-qno24.png';
import q25Image from '../img/Question2-qno25.png';
import q26Image from '../img/Question2-qno26.png';
import q27Image from '../img/Question2-qno27.png';
import q28Image from '../img/Question2-qno28.png';
import ppe1Image from '../img/personal-prodective-equipment-1.png';
import ppe2Image from '../img/personal-prodective-equipment-2.png';
import ppe3Image from '../img/personal-prodective-equipment-3.png';
import ppe4Image from '../img/personal-prodective-equipment-4.png';
import ppe5Image from '../img/personal-prodective-equipment-5.png';

export default function GasTestAssessment() {
  return (
    <div className="flex flex-col bg-gray-100 font-sans text-black">
      {/* ======================= PAGE 1 (Cover Page) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Logo */}
            <div className="w-full flex justify-center mb-12">
              <img src={logoImage} alt="STA Safety Training Academy Logo" className="w-[300px] sm:w-[400px] h-auto object-contain" />
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide">Gas test Atmosphere</h1>
              <h2 className="text-xl sm:text-2xl font-bold">MSMWHS217</h2>
            </div>

            {/* Device Image */}
            <div className="flex justify-center mb-12 flex-1 items-center">
              <img 
                src={coverImage} 
                alt="Gas test Atmosphere Device" 
                className="w-full max-w-[280px] sm:max-w-[400px] h-auto object-contain mix-blend-multiply drop-shadow-md"
              />
            </div>

            {/* Form Table */}
            <div className="w-full mt-auto mb-16 border-t border-l border-black flex flex-col text-sm sm:text-base">
              
              {/* Row 1: Name */}
              <div className="flex border-b border-black">
                <div className="w-[30%] sm:w-[25%] p-3 font-bold border-r border-black flex items-center justify-center text-center">
                  Name:
                </div>
                <div className="w-[35%] sm:w-[37.5%] border-r border-black flex items-center">
                  <input type="text" placeholder="First Name" className="w-full h-full p-3 text-center bg-transparent outline-none placeholder-gray-300" />
                </div>
                <div className="w-[35%] sm:w-[37.5%] flex items-center border-r border-black">
                  <input type="text" placeholder="Family Name" className="w-full h-full p-3 text-center bg-transparent outline-none placeholder-gray-300" />
                </div>
              </div>

              {/* Row 2: Mobile No. */}
              <div className="flex border-b border-black">
                <div className="w-[30%] sm:w-[25%] p-3 font-bold border-r border-black flex items-center justify-center text-center">
                  Mobile No.
                </div>
                <div className="flex-1 flex items-center border-r border-black">
                  <input type="text" className="w-full h-full p-3 bg-transparent outline-none" />
                </div>
              </div>

              {/* Row 3: Course Name */}
              <div className="flex border-b border-black bg-gray-50">
                <div className="w-[30%] sm:w-[25%] p-3 font-bold border-r border-black flex items-center justify-center text-center">
                  Course Name:
                </div>
                <div className="flex-1 p-3 font-bold text-center border-r border-black flex items-center justify-center">
                  MSMWHS217- Gas test Atmosphere
                </div>
              </div>

              {/* Row 4: Enrolment Date */}
              <div className="flex border-b border-black">
                <div className="w-[30%] sm:w-[25%] p-3 font-bold border-r border-black flex items-center justify-center text-center">
                  Enrolment Date:
                </div>
                <div className="flex-1 flex items-center border-r border-black">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full h-full p-3 text-center bg-transparent outline-none placeholder-gray-300" />
                </div>
              </div>

              {/* Row 5: USI */}
              <div className="flex border-b border-black">
                <div className="w-[30%] sm:w-[25%] p-3 font-bold border-r border-black flex items-center justify-center text-center">
                  USI
                </div>
                <div className="flex-1 flex items-center border-r border-black">
                  <input type="text" className="w-full h-full p-3 bg-transparent outline-none" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 2 (LLN Test Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-8">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-center flex-1">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="text-xs sm:text-sm font-bold mt-2">RTO 45234</p>
              </div>
              <div className="w-[120px]"></div> {/* Spacer for centering */}
            </div>

            {/* Title */}
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl font-bold mb-4">LLN Test- <span className="font-normal">MSMWHS217 Gas Test Atmospheres</span></h1>
              <h2 className="text-xl sm:text-2xl font-bold">STUDENT<br/>INSTRUCTIONS</h2>
            </div>

            {/* Instructions */}
            <div className="text-sm space-y-4 mb-8">
              <p>It is very important that you have the required LLN (Language – speaking, Literacy- reading and writing and Numeracy – calculation) skills to complete the training and achieve your desired vocational outcome.</p>
              <p>To assist you with determining if you have the required LLN skills, this LLN test is used</p>
              <p>Please complete all questions in the spaces provided and PLEASE WRITE CLEARLY USING AN INK PEN ONLY. At the end of the test, an Assessor will meet with you to discuss the results and to discuss your next best move.</p>
              <p>This test must be completed in the presence of a staff member. You have 15 minutes to complete this test</p>
              <p>Calculators may be used for the Numeracy questions</p>
              <p>Interpreters and assistants may not be used for this test ie this test MUST be read and completed in English only</p>
              <p>This test must be conducted on RTO premises, under direct supervision by RTO staff and by the student ONLY – without any assistance</p>
            </div>

            {/* Details Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-sm mb-8">
              <div className="flex border-b border-gray-400">
                <div className="w-[30%] sm:w-1/4 p-2 font-bold border-r border-gray-400 bg-gray-200 flex items-center">Student Name:</div>
                <div className="w-[20%] sm:w-1/4 border-r border-gray-400 flex"><input type="text" className="w-full p-2 bg-transparent outline-none" /></div>
                <div className="w-[20%] sm:w-1/4 p-2 font-bold border-r border-gray-400 bg-gray-200 flex items-center">Date:</div>
                <div className="w-[30%] sm:w-1/4 border-r border-gray-400 flex"><input type="text" className="w-full p-2 bg-transparent outline-none" /></div>
              </div>
              <div className="flex border-b border-gray-400">
                <div className="w-[30%] sm:w-1/4 p-2 font-bold border-r border-gray-400 bg-gray-200 flex items-center">Student Address</div>
                <div className="w-[20%] sm:w-1/4 border-r border-gray-400 flex"><input type="text" className="w-full p-2 bg-transparent outline-none" /></div>
                <div className="w-[20%] sm:w-1/4 p-2 font-bold border-r border-gray-400 bg-gray-200 flex items-center">Phone No</div>
                <div className="w-[30%] sm:w-1/4 border-r border-gray-400 flex"><input type="text" className="w-full p-2 bg-transparent outline-none" /></div>
              </div>
              <div className="flex border-b border-gray-400">
                <div className="w-[30%] sm:w-[40%] p-2 font-bold border-r border-gray-400 bg-gray-200 flex items-center">Training Applying For</div>
                <div className="flex-1 border-r border-gray-400 flex"><input type="text" className="w-full p-2 bg-transparent outline-none" /></div>
              </div>
              
              <div className="flex flex-col border-b border-gray-400 p-4">
                <p className="font-bold mb-1">Numeracy:</p>
                <p className="ml-4 font-bold text-sm">1. Write 1 correct answer for each calculation and enter in the space below</p>
              </div>

              {/* Math Table */}
              <div className="flex flex-col w-full text-center text-xs sm:text-sm">
                {/* Multiplication & Division */}
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  {/* Multiplication */}
                  <div className="flex w-full sm:w-1/2 border-b sm:border-b-0 border-gray-400">
                    <div className="w-[40%] border-r border-gray-400 bg-[#cfcfcf] flex items-center justify-center p-1 sm:p-2 text-[10px] sm:text-sm font-medium">Multiplication</div>
                    <div className="w-[30%] border-r border-gray-400 flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">25X5</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                    <div className="w-[30%] sm:border-r border-gray-400 flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">48X2</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                  </div>
                  {/* Division */}
                  <div className="flex w-full sm:w-1/2">
                    <div className="w-[40%] border-r border-gray-400 bg-[#cfcfcf] flex items-center justify-center p-1 sm:p-2 text-[10px] sm:text-sm font-medium">Division</div>
                    <div className="w-[30%] border-r border-gray-400 flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">48/2</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                    <div className="w-[30%] flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">700/10</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                  </div>
                </div>

                {/* Addition & Subtraction */}
                <div className="flex flex-col sm:flex-row">
                  {/* Addition */}
                  <div className="flex w-full sm:w-1/2 border-b sm:border-b-0 border-gray-400">
                    <div className="w-[40%] border-r border-gray-400 bg-[#cfcfcf] flex items-center justify-center p-1 sm:p-2 text-[10px] sm:text-sm font-medium">Addition</div>
                    <div className="w-[30%] border-r border-gray-400 flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">756+44</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                    <div className="w-[30%] sm:border-r border-gray-400 flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">85+35</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                  </div>
                  {/* Subtraction */}
                  <div className="flex w-full sm:w-1/2">
                    <div className="w-[40%] border-r border-gray-400 bg-[#cfcfcf] flex items-center justify-center p-1 sm:p-2 text-[10px] sm:text-sm font-medium">Subtraction</div>
                    <div className="w-[30%] border-r border-gray-400 flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">85-40</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                    <div className="w-[30%] flex flex-col bg-[#e7e7de]">
                      <div className="border-b border-white p-1 sm:p-2 text-[10px] sm:text-sm">2569-69</div>
                      <input type="text" className="p-1 sm:p-2 h-8 sm:h-10 w-full bg-white outline-none text-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="text-[10px] text-black mt-auto pt-8 flex justify-between items-end">
            <div>
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div>
              <p>Page: 1 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 3 (LLN Test Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-8">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-center flex-1">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="text-xs sm:text-sm font-bold mt-2">RTO 45234</p>
              </div>
              <div className="w-[120px]"></div> {/* Spacer for centering */}
            </div>

            <div className="text-sm space-y-6">
              <p>
                <span className="font-bold mr-1">2.</span>Numeracy skills to: locate and recognize numbers commonly used in safety signs
              </p>

              {/* Safety Sign Image */}
              <div className="w-full flex justify-center py-4">
                <img src={pageno3Image} alt="Safety Conditions of Entry Sign" className="w-full max-w-[600px] h-auto border-4 border-gray-800" />
              </div>

              {/* Questions */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-end w-full">
                  <p className="mr-4">At this construction site what is the maximum speed limit:</p>
                  <input type="text" className="flex-1 min-w-[200px] border-b border-dashed border-gray-500 bg-transparent outline-none pb-1" />
                </div>

                <div className="space-y-2">
                  <p><span className="font-bold mr-1">3.</span>At the construction site the site manager has explained that entry to and working in confined spaces on the site can only occur between 10.00am and 1.00pm daily. It is 12.30pm and the worker requires 50 minutes to work in the confined space.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-end w-full pb-8">
                  <p className="mr-4">Calculate at what time the worker will complete the job in the confined space:</p>
                  <input type="text" className="flex-1 min-w-[200px] border-b border-dashed border-gray-500 bg-transparent outline-none pb-1" />
                </div>
              </div>

              {/* Literacy Section */}
              <div className="space-y-4">
                <p>Literacy</p>
                <p>Read the following description and answer the questions below. All answers must be based solely on the information provided below</p>
                
                <div className="pt-4 space-y-1">
                  <p>This unit describes a participant's skills and knowledge required to enter and work in confined spaces in construction sites</p>
                  <p>WHS Regulation clause 5</p>
                  <p>Definitions</p>
                  <p>A 'confined space' means an enclosed or partially enclosed space that:</p>
                  <p>– is not designed or intended to be occupied by a person</p>
                  <p>– is, or is designed or intended to be, at normal atmospheric pressure while any person is in the space; and</p>
                  <p>– is or is likely to be a risk to health and safety from:</p>
                  <p className="pl-4 border-l-2 border-transparent"> an atmosphere that does not have a safe oxygen level, or</p>
                  <p className="pl-4 border-l-2 border-transparent"> contaminants, including airborne gases, vapours and dusts, that may cause injury from fire or explosion, or</p>
                  <p className="pl-4 border-l-2 border-transparent"> harmful concentrations of any airborne contaminants, or</p>
                  <p className="pl-4 border-l-2 border-transparent"> engulfment.</p>
                </div>

                <p className="pt-4">(Source: CODE OF PRACTICE CONFINED SPACES - SafeWork NSW)</p>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-8 flex justify-between items-end">
            <div>
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div>
              <p>Page: 2 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 4 (LLN Test Page 3) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-8">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-center flex-1">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="text-xs sm:text-sm font-bold mt-2">RTO 45234</p>
              </div>
              <div className="w-[120px]"></div> {/* Spacer for centering */}
            </div>

            <div className="text-sm space-y-6">
              
              <div className="space-y-4">
                <p>Q1: List 1 type of skill and knowledge that this training provides students with.</p>
                <textarea className="w-full h-16 bg-transparent outline-none resize-none leading-8" style={{ backgroundImage: 'linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)', backgroundPosition: 'bottom', backgroundSize: '6px 1px', backgroundRepeat: 'repeat-x' }}></textarea>
              </div>

              <div className="space-y-4">
                <p>Q2: List 2 types of harm that a confined space may pose for a worker</p>
                <textarea className="w-full h-16 bg-transparent outline-none resize-none leading-8" style={{ backgroundImage: 'linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)', backgroundPosition: 'bottom', backgroundSize: '6px 1px', backgroundRepeat: 'repeat-x' }}></textarea>
              </div>

              <div className="space-y-2 pt-4">
                <p>Language</p>
                <p>Student Interview Questions - LLN</p>
                <p className="underline pt-2">The Assessor will ask you the following questions. Please answer (verbally) as clearly as possible</p>
              </div>

              <div className="space-y-4 pt-2">
                <p>Why do you want to do this training ?</p>
                <p>What do you think this training is about</p>
              </div>

              {/* End of LLN Block */}
              <div className="flex items-center justify-center w-full py-8">
                <div className="h-px bg-black flex-1"></div>
                <p className="font-bold px-2">END OF LLN TEST</p>
                <div className="h-px bg-black flex-1"></div>
              </div>

              <p className="font-bold text-sm">By signing below, I verify that the above work is my own and has been completed independently.</p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-2">
                <div className="flex items-end flex-1">
                  <span className="font-bold mr-2 text-xs uppercase">Learner Signature:</span>
                  <input type="text" className="flex-1 border-b border-black outline-none bg-transparent h-6" />
                </div>
                <div className="flex items-end flex-1">
                  <span className="font-bold mr-2 text-xs uppercase">Name (Printed):</span>
                  <input type="text" className="flex-1 border-b border-black outline-none bg-transparent h-6" />
                </div>
              </div>
              <div className="flex items-end w-full sm:w-1/2 pt-2">
                <span className="font-bold mr-2 text-xs uppercase">Date:</span>
                <input type="text" className="flex-1 border-b border-black outline-none bg-transparent h-6" />
              </div>

              <div className="text-center font-bold underline py-6">
                ASSESSOR TO COMPLETE ONLY
              </div>

              {/* Assessor Table */}
              <div className="w-full border-t border-l border-black flex flex-col text-[10px] sm:text-sm text-center">
                
                {/* Headers */}
                <div className="flex border-b border-black font-bold">
                  <div className="w-[40%] sm:flex-1 p-1 sm:p-2 border-r border-black flex items-center justify-center leading-tight">Outcome of LLN Test</div>
                  <div className="w-[30%] sm:w-[20%] p-1 sm:p-2 border-r border-black flex items-center justify-center leading-tight">Assessor<br/>Comments</div>
                  <div className="w-[30%] sm:w-[35%] p-1 sm:p-2 border-r border-black flex flex-col items-center justify-center leading-tight">
                    <span>Outcome</span>
                    <span className="font-normal italic text-[8px] sm:text-xs">(Please circle)</span>
                  </div>
                </div>

                {/* Row 1 */}
                <div className="flex border-b border-black min-h-[144px] h-auto">
                  <div className="w-[40%] sm:flex-1 p-2 sm:p-4 border-r border-black flex items-center justify-center text-center leading-tight">
                    Applicant DOES have<br/>the LLN skills to undertake training<br/>in this course
                  </div>
                  <div className="w-[30%] sm:w-[20%] border-r border-black relative">
                    <textarea className="w-full h-full p-2 bg-transparent outline-none resize-none"></textarea>
                  </div>
                  <div className="w-[30%] sm:w-[35%] border-r border-black flex flex-col items-center justify-center space-y-4 p-2">
                    <div className="text-center font-bold">S<br/><span className="font-normal text-[8px] sm:text-xs">(Satisfactory)</span></div>
                    <div className="text-center font-bold">NYS<br/><span className="font-normal text-[8px] sm:text-xs">(Not Yet Satisfactory)</span></div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex border-b border-black min-h-[96px] h-auto">
                  <div className="w-[40%] sm:w-[55%] p-2 sm:p-4 border-r border-black flex items-center justify-center text-center text-[9px] sm:text-xs leading-tight">
                    If the Assessor is NOT recommending that the registration continues – what strategy does the Assessor recommend for the applicant to increase their chance of future success
                  </div>
                  <div className="flex-1 border-r border-black relative bg-gray-50">
                    <textarea className="w-full h-full p-2 bg-transparent outline-none resize-none"></textarea>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex border-b border-black h-10 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700 pointer-events-none">Trainer Name</div>
                  <input type="text" className="w-full h-full bg-transparent outline-none text-center px-4 z-10" />
                  <div className="w-0 border-r border-black"></div>
                </div>

                {/* Row 4 */}
                <div className="flex border-b border-black h-14 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700 pointer-events-none">Trainer Sign  &  Date</div>
                  <input type="text" className="w-full h-full bg-transparent outline-none text-center px-4 z-10" />
                  <div className="w-0 border-r border-black"></div>
                </div>

              </div>

            </div>
          </div>

          <div className="text-[10px] text-black mt-auto pt-8 flex justify-between items-end">
            <div>
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div>
              <p>Page: 3 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 5 (LLN Test Page 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-8">
              <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              <div className="text-center flex-1">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="text-xs sm:text-sm font-bold mt-2">RTO 45234</p>
              </div>
              <div className="w-[120px]"></div> {/* Spacer for centering */}
            </div>

            <div className="flex-1 flex items-center justify-center pb-32">
              <div className="border border-black py-8 px-8 sm:px-16 w-full max-w-[500px]">
                <div className="border-t-[3px] border-[#4c84c1] mb-6"></div>
                <h2 className="text-center font-bold font-serif text-lg tracking-wide">PLEASE BEGIN WITH ENROLMENT</h2>
                <div className="border-b-[3px] border-[#4c84c1] mt-6"></div>
              </div>
            </div>
            
          </div>

          <div className="text-[10px] text-black mt-auto pt-8 flex justify-between items-end">
            <div>
              <p>LLN Test: RIIWHS202E - Enter and work in confined spaces Student Version STA -230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div>
              <p>Page: 4 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 6 (Enrolment Form Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <p className="italic font-bold text-sm mb-4">
              PLEASE COMPLETE ALL SECTIONS clearly and carefully by writing in BLOCK LETTERS using a black or blue pen.
            </p>

            <h3 className="font-bold text-base mb-2">SECTION 1 – APPLICANT INFORMATION</h3>

            {/* Applicant Details Table */}
            <div className="w-full border-t border-l border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">APPLICANT DETAILS</div>
              <div className="border-b border-black p-2 font-medium">Please complete <span className="font-bold">full name and date of birth as listed on your ID documents</span></div>
              
              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Title (please tick)</div>
                <div className="flex-1 border-r border-black flex items-center px-2 space-x-2 sm:space-x-4 overflow-x-auto">
                  <label className="flex items-center space-x-1 whitespace-nowrap"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Mr</span></label>
                  <label className="flex items-center space-x-1 whitespace-nowrap"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Mrs</span></label>
                  <label className="flex items-center space-x-1 whitespace-nowrap"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Miss</span></label>
                  <label className="flex items-center space-x-1 whitespace-nowrap"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Ms</span></label>
                  <label className="flex items-center space-x-1 whitespace-nowrap"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Dr</span></label>
                  <label className="flex items-center space-x-1 whitespace-nowrap"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Other</span></label>
                </div>
              </div>
              
              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Surname</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Given name</div>
                <div className="w-[30%] sm:w-[35%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[15%] sm:w-[15%] p-1 border-r border-black flex items-center">Middle name</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black min-h-[40px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Preferred name<br/>If different to above</div>
                <div className="w-[30%] sm:w-[35%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[15%] sm:w-[15%] p-1 border-r border-black flex items-center">Date of Birth<br/>Day/Month/Year</div>
                <div className="flex-1 border-r border-black flex items-center justify-center space-x-1 sm:space-x-2 px-1">
                  <input type="text" className="w-6 sm:w-8 border-none text-center outline-none bg-transparent" placeholder="DD" /> /
                  <input type="text" className="w-6 sm:w-8 border-none text-center outline-none bg-transparent" placeholder="MM" /> /
                  <input type="text" className="w-10 sm:w-12 border-none text-center outline-none bg-transparent" placeholder="YYYY" />
                </div>
              </div>

              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Gender (please tick)</div>
                <div className="w-[30%] sm:w-[35%] border-r border-black flex items-center px-2 space-x-4">
                  <label className="flex items-center space-x-1"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Male</span></label>
                  <label className="flex items-center space-x-1"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Female</span></label>
                </div>
                <div className="w-[15%] sm:w-[15%] p-1 border-r border-black flex items-center">Email</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Home Phone</div>
                <div className="w-[30%] sm:w-[35%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[15%] sm:w-[15%] p-1 border-r border-black flex items-center">Work Phone</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Mobile Phone</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Residential Address</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>
              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex justify-end items-center pr-2">Suburb</div>
                <div className="w-[30%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[10%] p-1 border-r border-black flex items-center">State</div>
                <div className="w-[15%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[10%] p-1 border-r border-black flex items-center text-[10px] sm:text-xs">Postcode</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex items-center">Postal Address</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>
              <div className="flex min-h-[32px]">
                <div className="w-1/3 sm:w-[25%] p-1 border-r border-black flex justify-between items-center pr-2 text-[10px] sm:text-xs"><span>If different from above</span><span>Suburb</span></div>
                <div className="w-[30%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[10%] p-1 border-r border-black flex items-center">State</div>
                <div className="w-[15%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[10%] p-1 border-r border-black flex items-center text-[10px] sm:text-xs">Postcode</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>
            </div>

            {/* Emergency Contact Table */}
            <div className="w-full border-t border-l border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">EMERGENCY CONTACT</div>
              
              <div className="flex border-b border-black min-h-[32px]">
                <div className="w-[15%] p-1 border-r border-black flex items-center leading-tight">Full<br/>Name</div>
                <div className="w-[30%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[15%] p-1 border-r border-black flex items-center text-xs">Relationship</div>
                <div className="w-[20%] border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
                <div className="w-[15%] p-1 border-r border-black flex items-center text-[10px] sm:text-xs leading-tight">Contact Number</div>
                <div className="flex-1 border-r border-black flex"><input type="text" className="w-full px-2 outline-none bg-transparent" /></div>
              </div>

              <div className="flex border-b border-black p-2 min-h-[40px]">
                <div className="flex-1 flex items-center text-[10px] sm:text-xs leading-tight pr-2">
                  In the event of an emergency do you give the STA permission to organise emergency transport and treatment and do you agree to pay all costs related to the emergency?
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <label className="flex items-center space-x-1"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>Yes</span></label>
                  <label className="flex items-center space-x-1"><input type="checkbox" className="w-3 h-3 border-black rounded-none" /><span>No</span></label>
                </div>
              </div>
            </div>

            {/* USI Section */}
            <div className="w-full border border-black flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-black font-bold p-2">UNIQUE STUDENT IDENTIFIER (USI)</div>
              <div className="p-2 sm:p-3 text-[10px] sm:text-xs text-[#2b4c7e] space-y-2 text-justify leading-snug">
                <p>From 1 January 2015, Safety Training Academy can be prevented from issuing you with a nationally recognised VET qualification or statement of attainment when you complete your course if you do not have a Unique Student Identifier (USI). In addition, we are required to include your USI in the data we submit to NCVER. If you have not yet obtained a USI you can apply for it directly at <a href="#" className="underline">https://www.usi.gov.au/students/create-your-usi</a> on a computer or mobile device.</p>
                <p>Enter your Unique Student Identifier (USI) (if you already have one) You may already have a USI if you have done any nationally recognised training, which could include training at work, completing a first aid course or RSA (Responsible Service of Alcohol) course, getting a white card, or studying at a TAFE or training organisation. It is important that you try to find out whether you already have a USI before attempting to create a new one. You should not have more than one USI. To check if you already have a USI, use the 'Forgotten USI' link on the USI website at <a href="#" className="underline">https://www.usi.gov.au/faqs/i-have-forgotten-my-usi/</a></p>
                
                <p className="font-bold italic text-black pt-2 text-xs sm:text-sm">17) Unique Student Identifier (USI)</p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2">
                  <label className="flex items-start sm:items-center space-x-2 text-[#2b4c7e] max-w-full sm:max-w-[60%]">
                    <input type="checkbox" className="mt-1 sm:mt-0" />
                    <span>I give permission for Safety Training Academy to access my Unique Student Identifier (USI) for the purpose of recording my results.</span>
                  </label>
                  
                  <div className="flex mt-4 sm:mt-0">
                    <div className="border border-black px-1 sm:px-2 flex items-center justify-center font-bold text-black border-r-0 text-[10px] sm:text-xs">USI</div>
                    {[...Array(10)].map((_, i) => (
                      <input key={i} type="text" maxLength={1} className="w-5 h-7 sm:w-6 sm:h-8 border border-black border-l-0 text-center outline-none text-black uppercase" />
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            {/* USI Application Box */}
            <div className="border border-gray-300 flex flex-col text-xs sm:text-sm mb-4">
              <div className="text-center font-bold text-[#c00000] underline p-4 pb-2 text-sm sm:text-base">
                USI application through STA (if you do not already have one)
              </div>
              
              <div className="p-4 pt-0 text-[#2b4c7e] flex flex-col space-y-4">
                <p className="font-bold">Application for Unique Student Identifier (USI)</p>
                <p>If you would like us Safety Training Academy to apply for a USI on your behalf you must authorise us to do so and declare that you have read the privacy information at <a href="#" className="underline">https://www.usi.gov.au/documents/privacynotice-when-rto-applies-their-behalf</a>. You must also provide some additional information as noted at the end of this form so that we can apply for a USI on your behalf.</p>
                <p className="flex flex-wrap items-center gap-1 sm:gap-2">
                  <span className="font-bold">I [Name]</span>
                  <input type="text" className="border-b border-[#2b4c7e] bg-transparent outline-none flex-1 min-w-[150px] sm:min-w-[200px]" />
                  <span>authorise Safety Training Academy to apply pursuant to sub-</span>
                </p>
                <p>section 9(2) of the Student Identifiers Act 2014, for a USI on my behalf.</p>
                
                <label className="flex items-start space-x-2 mt-2">
                  <input type="checkbox" className="mt-1 flex-shrink-0" />
                  <span>I have read and I consent to the collection, use and disclosure of my personal information (which may include sensitive information) pursuant to the information detailed at <a href="#" className="underline">https://www.usi.gov.au/documents/privacy-notice-when-rto-applies-their-behalf</a></span>
                </label>
                
                <p className="flex flex-wrap items-end gap-1 sm:gap-2 pt-2">
                  <span>Town/City of Birth</span>
                  <input type="text" className="border-b border-[#2b4c7e] bg-transparent outline-none flex-1 min-w-[150px] sm:min-w-[200px]" />
                  <span>(please write the name of the Australian or</span>
                </p>
                <p>overseas town or city where you were born)</p>
              </div>

              {/* ID Verification Table */}
              <div className="border-t border-gray-300 w-full flex flex-col text-[#2b4c7e] font-bold p-2 text-[10px] sm:text-xs bg-white">
                <p>We will also need to verify your identity to create your USI.</p>
                <p>Please provide details for <span className="underline">one</span> of the forms of identity below (numbered 1 to 8).</p>
                <p>Please ensure that the name written in 'Personal Details' section is exactly the same as written in the document you provide below.</p>
              </div>

              {/* Table Data */}
              <div className="w-full flex flex-col text-[9px] sm:text-xs text-[#2b4c7e] border-t border-gray-300">
                
                {/* Row 1 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">1. Australian Driver's Licence:</div>
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">State:</div>
                  <div className="flex-1 p-2 font-bold">Licence number:</div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">2. Medicare Card:</div>
                  <div className="w-full sm:w-[35%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">Medicare card number:</div>
                  <div className="flex-1 p-2 font-bold">Individual reference number (next to your name on medicare card):</div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="hidden sm:block w-[25%] p-2 border-r border-gray-300"></div>
                  <div className="w-full sm:w-[35%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 flex flex-wrap items-center gap-2">
                    <span className="font-bold">Card colour:</span>
                    <label className="flex items-center space-x-1"><span className="text-black font-normal">Green</span><input type="checkbox" className="w-3 h-3 border border-[#2b4c7e]" /></label>
                    <label className="flex items-center space-x-1"><span className="text-black font-normal">Yellow</span><input type="checkbox" className="w-3 h-3 border border-[#2b4c7e]" /></label>
                    <label className="flex items-center space-x-1"><span className="text-black font-normal">Blue</span><input type="checkbox" className="w-3 h-3 border border-[#2b4c7e]" /></label>
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-1 text-black font-normal flex-wrap">
                    <span className="text-[#2b4c7e] font-bold">Expiry date</span>
                    <input type="text" className="w-4 border-b border-black text-center outline-none bg-transparent" /> /
                    <input type="text" className="w-4 border-b border-black text-center outline-none bg-transparent" /> /
                    <input type="text" className="w-8 border-b border-black text-center outline-none bg-transparent" />
                    <span>(format DD/MM/YYYY)</span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">3. Australian Birth Certificate:</div>
                  <div className="w-full sm:w-[35%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 text-black font-normal flex items-center">
                    <span className="text-[#2b4c7e] font-bold mr-2">State/Territory:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none" />
                  </div>
                  <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">4.Immicard:</div>
                  <div className="flex-1 p-2 text-black font-normal flex items-center">
                    <span className="text-[#2b4c7e] font-bold mr-2">Immicard Number:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none" />
                  </div>
                </div>

                {/* Row 5 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">5. Australian Passport:</div>
                  <div className="flex-1 p-2 text-black font-normal flex items-center">
                    <span className="text-[#2b4c7e] font-bold mr-2">Passport number:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none" />
                  </div>
                </div>

                {/* Row 6 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold flex flex-col justify-center">
                    <span>6.Non-Australian Passport:</span>
                    <span className="font-normal">(with Australian Visa)</span>
                    <span className="font-normal">Passport number:</span>
                  </div>
                  <div className="w-full sm:w-[35%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 text-black font-normal flex items-start">
                    <span className="text-[#2b4c7e] font-bold mr-2">Passport number:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none mt-1" />
                  </div>
                  <div className="flex-1 p-2 text-black font-normal flex items-start">
                    <span className="text-[#2b4c7e] font-bold mr-2">Country of issue:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none mt-1" />
                  </div>
                </div>

                {/* Row 7 */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">7. Citizenship Certificate:</div>
                  <div className="w-full sm:w-[35%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 text-black font-normal flex items-start">
                    <span className="text-[#2b4c7e] font-bold mr-2">Stock number:</span>
                    <input type="text" className="flex-1 bg-transparent outline-none mt-1" />
                  </div>
                  <div className="flex-1 p-2 flex items-center gap-1 text-black font-normal flex-wrap">
                    <span className="text-[#2b4c7e] font-bold">Acquisition date</span>
                    <input type="text" className="w-6 border-b border-black text-center outline-none bg-transparent" /> /
                    <input type="text" className="w-6 border-b border-black text-center outline-none bg-transparent" /> /
                    <input type="text" className="w-12 border-b border-black text-center outline-none bg-transparent" />
                    <span>(day/month/year)</span>
                  </div>
                </div>

                {/* Row 8 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-300 font-bold">8. Certificate of Registration<br/>by Descent:</div>
                  <div className="flex-1 p-2 flex items-center gap-1 text-black font-normal flex-wrap">
                    <span className="text-[#2b4c7e] font-bold">Acquisition date</span>
                    <input type="text" className="w-6 border-b border-black text-center outline-none bg-transparent" /> /
                    <input type="text" className="w-6 border-b border-black text-center outline-none bg-transparent" /> /
                    <input type="text" className="w-12 border-b border-black text-center outline-none bg-transparent" />
                    <span>(day/month/year)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Use Only Block */}
            <div className="w-full border border-[#2b4c7e] flex flex-col text-[10px] sm:text-xs">
              <div className="bg-[#333333] text-white font-bold p-2 text-sm sm:text-base">
                OFFICE USE Only
              </div>
              <div className="p-2 border-b border-[#2b4c7e] text-black text-justify">
                In accordance with section 11 of the <span className="italic">Student Identifiers Act 2014</span>, Safety Training Academy will securely destroy personal information which we collect from individuals solely for the purpose of applying for a USI on their behalf as soon as practicable after we have made the application or the information is no longer needed for that purpose.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[50px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-[#2b4c7e] font-bold text-[#2b4c7e] uppercase flex items-center">
                  PHOTO ID VERIFIED:
                </div>
                <div className="flex-1 flex flex-col text-black">
                  <div className="flex flex-col sm:flex-row border-b border-[#2b4c7e]">
                    <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-[#2b4c7e] flex items-center gap-2">
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <h3 className="font-bold text-base mb-2">SECTION 2 – EDUCATION AND EMPLOYMENT INFORMATION</h3>
            
            <div className="mb-2 text-sm">
              <p>AVETMISS DATA COLLECTION</p>
              <p className="italic">Information collected in this section is used for the purposes of National reporting and planning.</p>
              <p className="italic font-bold">Please COMPLETE ALL SECTIONS.</p>
            </div>

            {/* Prior Education Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2">PRIOR EDUCATION</div>
              <div className="border-b border-r border-gray-400 p-2">What was your highest <span className="font-bold italic">completed</span> level at school?</div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">12</span>
                  <span>Year 12 or equivalent</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">09</span>
                  <span>Year 9 or equivalent</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">11</span>
                  <span>Year 11 or equivalent</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">08</span>
                  <span>Year 8 or below</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">10</span>
                  <span>Year 10 or equivalent</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">02</span>
                  <span>Never attended school</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <span>In what <span className="font-bold italic">year</span> did you complete that level?</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <span>Name of School:</span>
                  <input type="text" className="outline-none flex-1 bg-transparent" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2 flex-wrap">
                  <span>If in Australia, State:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-20 bg-transparent" />
                  <span>Postcode:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-20 bg-transparent" />
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <span>If not in Australia, Country</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent" />
                </div>
              </div>
            </div>

            {/* Qualifications Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2">QUALIFICATIONS</div>
              <div className="border-b border-r border-gray-400 p-2">Do you have post-secondary or vocational/trade qualifications from any accredited/recognised educational institution(s)?</div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span>Yes – <span className="italic">Please specify and <span className="underline">provide a copy</span></span></span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span>No - <span className="italic">go to next question '<span className="font-bold">Employment Status</span>'</span></span>
                </div>
              </div>

              <div className="p-2 border-b border-r border-gray-400 flex flex-col gap-1 text-[11px] sm:text-[13px]">
                <p>If YES, then tick ANY applicable boxes.</p>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">008</span><span>Bachelor Degree or Higher Degree</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">410</span><span>Advanced Diploma or Associate Degree</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">420</span><span>Diploma (or Associate Diploma)</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">511</span><span>Certificate IV (or Advanced Certificate/Technician)</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">514</span><span>Certificate III (or Trade Certificate)</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">521</span><span>Certificate II</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5" /><span className="text-[9px] text-[#2b4c7e] font-bold">524</span><span>Certificate I</span></label>
                <label className="flex items-start gap-2 mt-1"><input type="checkbox" className="w-3.5 h-3.5 mt-1" /><span className="text-[9px] text-[#2b4c7e] font-bold mt-1">990</span><span>Other education ( including certificates or<br/>overseas qualifications not listed above)</span></label>
              </div>
            </div>

            {/* Employment Status Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2">EMPLOYMENT STATUS</div>
              <div className="border-b border-r border-gray-400 p-2">Of the following, which best describes your current employment status? (please tick ONE box only)</div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">01</span>
                  <span>Full-time employee</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">06</span>
                  <span>Unemployed – seeking full-time work</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">02</span>
                  <span>Part-time employee</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">07</span>
                  <span>Unemployed – seeking part-time work</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">03</span>
                  <span>Self-employed- not employing others</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">08</span>
                  <span>Not employed – not seeking employment</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">04</span>
                  <span>Self employed – employing others</span>
                </div>
                <div className="hidden sm:block w-1/2 p-2 border-b border-r border-gray-400 bg-gray-50"></div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">05</span>
                  <span>Employed – unpaid worker in family business</span>
                </div>
                <div className="hidden sm:block w-1/2 p-2 border-b border-r border-gray-400 bg-gray-50"></div>
              </div>
              
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2">EMPLOYMENT DETAILS</div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 border-r border-gray-400">Employer's name</div>
                <div className="w-full sm:w-[35%] border-b sm:border-b-0 border-r border-gray-400 flex"><input type="text" className="w-full p-2 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[15%] p-2 border-b sm:border-b-0 border-r border-gray-400">Supervisor's<br/>name</div>
                <div className="flex-1 border-b sm:border-b-0 border-r border-gray-400 flex"><input type="text" className="w-full p-2 outline-none bg-transparent" /></div>
              </div>
              
              <div className="flex border-t border-b border-gray-400">
                <div className="w-1/3 sm:w-[25%] p-2 border-r border-gray-400">Address</div>
                <div className="flex-1 border-r border-gray-400 flex"><input type="text" className="w-full p-2 outline-none bg-transparent" /></div>
              </div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-2 border-b border-r border-gray-400">Email</div>
                <div className="w-full sm:w-[35%] border-b border-r border-gray-400 flex"><input type="text" className="w-full p-2 outline-none bg-transparent" /></div>
                <div className="w-full sm:w-[15%] p-2 border-b border-r border-gray-400">Phone</div>
                <div className="flex-1 border-b border-r border-gray-400 flex"><input type="text" className="w-full p-2 outline-none bg-transparent" /></div>
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            {/* Reason Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2 flex items-center gap-2">
                REASON FOR UNDERTAKING TRAINING / RPL <span className="font-normal text-[10px]">(tick ONE box only)</span>
              </div>
              <div className="border-b border-r border-gray-400 p-2">Of the following, which best describes your main reason for gaining this qualification?</div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">01</span>
                  <span>To get a job</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">06</span>
                  <span>It is a requirement for my job</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">02</span>
                  <span>To develop my existing business</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">07</span>
                  <span>I wanted extra skills for my job</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">03</span>
                  <span>To start my own business</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">08</span>
                  <span>To get into another course of study</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">04</span>
                  <span>To try for a different career</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">12</span>
                  <span>For personal interest or self-development</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">05</span>
                  <span>To get a better job or promotion</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">11</span>
                  <span>Other <span className="italic">(please provide details):</span></span>
                  <input type="text" className="outline-none bg-transparent flex-1 border-b border-gray-400 sm:border-none" />
                </div>
              </div>
            </div>

            <h3 className="font-bold text-base mt-2">SECTION 3 – ADDITIONAL INFORMATION</h3>
            <p className="italic text-sm mb-2 leading-tight">Information collected in this section is strictly confidential, available only to limited college staff and for the purposes of reporting and planning.</p>

            {/* Special Needs Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2">SPECIAL NEEDS</div>
              
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center">
                  Do you consider that you have any type of disability that may affect your ability to undertake assessment?
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex flex-col justify-center gap-2">
                  <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 border-black" /><span>No - <span className="italic">go to next question '<span className="font-bold">Language & Cultural Diversity</span>'</span></span></label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 border-black" /><span>Yes – <span className="italic">please provide details below</span></span></label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">11</span><span>Hearing</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">16</span><span>Acquired Brain Impairment</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">12</span><span>Physical</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">17</span><span>Vision</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">13</span><span>Intellectual</span>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">18</span><span>Medical Condition</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="p-2 border-b border-r border-gray-400 flex items-center gap-2 h-1/2 min-h-[40px]">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">14</span><span>Learning</span>
                  </div>
                  <div className="p-2 border-b border-r border-gray-400 flex items-center gap-2 h-1/2 min-h-[40px]">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">15</span><span>Mental Illness</span>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-2 border-b border-r border-gray-400 flex flex-col justify-start gap-1 min-h-[80px]">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">19</span><span>Other <span className="italic text-[10px]">(please specify):</span></span>
                  </div>
                  <input type="text" className="w-full bg-transparent outline-none mt-2" />
                </div>
              </div>
              
              <div className="p-2 border-b border-r border-gray-400 leading-tight">
                If you indicated the presence of a disability, impairment or long-term condition, please select the area(s) from the list on page
              </div>
            </div>

            {/* Language & Cultural Diversity Table */}
            <div className="w-full border-t border-l border-gray-400 flex flex-col text-xs sm:text-sm mb-4">
              <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2">LANGUAGE AND CULTURAL DIVERSITY</div>
              
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 font-bold">Country of Birth</div>
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black" />
                  <span className="text-[10px] text-[#2b4c7e] font-bold">1101</span><span>Australia</span>
                </div>
                <div className="flex-1 p-2 sm:border-r border-gray-400 flex flex-wrap items-center gap-1">
                  <input type="checkbox" className="w-4 h-4 border-black mr-1" />
                  <span className="font-bold">Other <span className="text-[10px]">(please specify):</span></span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 min-w-[80px] bg-transparent" />
                  <span>Place of Birth:</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-16 bg-transparent" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[64px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 font-bold flex items-center">Aboriginal &/or Torres Strait Islander Origin</div>
                <div className="w-full sm:w-[25%] flex flex-col border-b sm:border-b-0 sm:border-r border-gray-400">
                  <div className="p-2 border-b border-gray-400 flex items-center gap-2 h-1/2 min-h-[40px]">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">4</span><span>No</span>
                  </div>
                  <div className="p-2 flex items-center gap-2 h-1/2 min-h-[40px]">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">13</span><span>Aboriginal</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col sm:border-r border-gray-400">
                  <div className="p-2 border-b border-gray-400 flex items-center gap-2 h-1/2 min-h-[40px]">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">2</span><span>Torres Strait Islander</span>
                  </div>
                  <div className="p-2 flex items-center gap-2 h-1/2 min-h-[40px]">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="text-[10px] text-[#2b4c7e] font-bold">13</span><span>Aboriginal & Torres Strait Islander</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[50px]">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 font-bold flex items-center">Language spoken at home</div>
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2 leading-tight">
                  <input type="checkbox" className="w-4 h-4 border-black mt-1" />
                  <div><span className="text-[10px] text-[#2b4c7e] font-bold mr-1">1201</span>English Only (skip the next question)</div>
                </div>
                <div className="flex-1 p-2 sm:border-r border-gray-400 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="font-bold">Other <span className="text-[10px]">(please specify):</span></span>
                  </div>
                  <input type="text" className="w-full bg-transparent outline-none mt-1 border-b border-gray-400 sm:border-none" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="w-full sm:w-[25%] p-2 border-b sm:border-b-0 sm:border-r border-gray-400 font-bold flex items-center">How well do you speak English?</div>
                <div className="flex-1 p-2 sm:border-r border-gray-400 flex flex-wrap items-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-1"><input type="checkbox" className="w-4 h-4 border-black" /><span>Very Well</span></label>
                  <label className="flex items-center gap-1"><input type="checkbox" className="w-4 h-4 border-black" /><span>Well</span></label>
                  <label className="flex items-center gap-1"><input type="checkbox" className="w-4 h-4 border-black" /><span>Not well</span></label>
                  <label className="flex items-center gap-1"><input type="checkbox" className="w-4 h-4 border-black" /><span>Not at all</span></label>
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <h3 className="font-bold text-base mb-4 uppercase">SECTION 4– ENROLMENT INFORMATION</h3>

            <div className="flex flex-col text-xs sm:text-sm">
              
              {/* Qualifications */}
              <div className="w-full border-t border-l border-gray-400">
                <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2 flex justify-between">
                  <span>Qualifications – please tick qualification for which you are applying.</span>
                  <span className="font-normal">( Assess only- RPL)</span>
                </div>
                
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span>CPC30220 Certificate III in Carpentry</span>
                      <br/>
                      <span className="font-normal">(34 Units of Competency)</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span>CPC30620 Certificate III in Painting and Decorating</span>
                      <br/>
                      <span className="font-normal">(29 Units of Competency)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span>CPC31220 Certificate III Wall and Ceiling Lining</span>
                      <br/>
                      <span className="font-normal">(29 Units of Competency)</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <div>
                      <span>CPC31320 Certificate III in Wall and Floor Tiling</span>
                      <br/>
                      <span className="font-normal">(20 Units of Competency)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                    Are you applying for CT as well as RPL
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-4">
                    <label className="flex items-center gap-2"><span>Yes</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                    <label className="flex items-center gap-2"><span>No</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                    Preferred Start Date
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 text-gray-500">
                    ------/-----/-------
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-4 flex-wrap">
                    <span>Do you have access to a workplace</span>
                    <label className="flex items-center gap-2"><span>Yes</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                    <label className="flex items-center gap-2"><span>No</span><input type="checkbox" className="w-4 h-4 border-black" /></label>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <span>Site location:</span>
                    <input type="text" className="bg-transparent outline-none flex-1" />
                  </div>
                </div>
              </div>

              {/* Short Courses */}
              <div className="w-full border-l border-gray-400">
                <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2 text-center text-sm">Short Courses</div>
                <div className="bg-[#b3e5fc] border-b border-r border-gray-400 font-bold p-2 flex justify-between">
                  <span>Unit of competency – Please indicate course chosen</span>
                  <span className="font-normal">( Training and Assessemnt program)</span>
                </div>

                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">White Card:</div>
                <div className="flex border-b border-r border-gray-400">
                  <div className="p-2 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>CPCWHS1001 - Prepare to work safely in the construction industry</span>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Working at Heights :</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>RIIWHS204E - Work safely at heights</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="leading-tight">ICTWHS201 - Provide telecommunications services safely on roofs</span>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Confined Spaces :</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>RIIWHS202E - Enter and work in confined spaces</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>MSMWHS217 - Gas test atmospheres</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>MSMWHS201 - Conduct hazard analysis</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>MSMPER300 - Issue work permits</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[40px]">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>MSMPER200 - Work in accordance with an issued permit</span>
                  </div>
                  <div className="hidden sm:block sm:w-1/2 p-2 sm:border-r border-gray-400"></div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">High risk Work :</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[40px]">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>TLILIC0003 - Licence to operate a forklift truck</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span className="leading-tight">TLILIC0005 - Licence to operate a boom-type elevating work platform (boom length 11 metres or more)</span>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Earthmoving and Machinery :</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">RIIMPO320F - Conduct civil construction excavator operations</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">RIIMPO318F - Conduct civil construction skid steer loader operations</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">RIIMPO321F - Conduct civil construction wheeled front end loader operations</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">RIIMPO337E - Conduct articulated haul truck operations</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">RIIHAN309E- Conduct telescopic materials handler Operations (Telehandler)</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">RIIHAN301E – Opertae elevating work platform (under 11m)</span>
                  </div>
                </div>

                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Asbestos:</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[40px]">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>CPCCDE3014 - Remove non-friable asbestos</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>CPCCDE4008 - Supervise asbestos removal</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Footer Page 12 */}
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">SAFETY TRAINING ACADEMY</p>
                <p className="font-bold text-base sm:text-lg">ENROLMENT FORM</p>
                <p className="text-sm font-bold mt-1">RTO : 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm">
              <div className="w-full border-t border-l border-gray-400">
                
                {/* Demolition */}
                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Demolition:</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCBC4002 Manage work health and safety in the building and construction workplace</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE3020 Select and use tools and equipment for hot work in the demolition industry</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCBC4012 Read and interpret plans and specifications</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE3022 Manage demolition recyclable waste materials and contaminated soil using load shifting equipment</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE3016 Identify hazards on demolition sites and apply risk management strategies</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE4001 Plan and prepare for activities on demolition sites</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE3018 Select and use small plant and equipment for demolition tasks</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE4002 Plan demolition work to minimise risk to health, safety and environment</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE3018 Select and use small plant and equipment for demolition tasks</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE4003 Supervise operational activities on demolition sites</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[40px]">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-start gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black mt-0.5" />
                    <span className="leading-tight">CPCCDE4004 Finalise demolition activities and supervise property handover</span>
                  </div>
                  <div className="hidden sm:block sm:w-1/2 p-2 sm:border-r border-gray-400"></div>
                </div>

                {/* First Aid */}
                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">First Aid :</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>HLTAID011 - Provide First Aid</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>HLTAID009 - Provide cardiopulmonary resuscitation</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400 min-h-[40px]">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>HLTAID012 - Provide First Aid in an education and care setting</span>
                  </div>
                  <div className="hidden sm:block sm:w-1/2 p-2 sm:border-r border-gray-400"></div>
                </div>

                {/* Traffic Control Courses */}
                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Traffic Control Courses:</div>
                <div className="flex flex-col sm:flex-row border-b border-gray-400">
                  <div className="w-full sm:w-1/2 p-2 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>RIISS00054 – Traffic Controller Skill Set</span>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:border-r border-gray-400 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>RIISS00055 – Traffic Management Implementer Skill Set</span>
                  </div>
                </div>

                {/* Other Courses */}
                <div className="bg-[#e6ddc5] border-b border-r border-gray-400 font-bold p-2">Other Courses:</div>
                <div className="flex border-b border-r border-gray-400">
                  <div className="p-2 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>UETDREL006 - Working safely near live electrical apparatus as a non-electrical worker</span>
                  </div>
                </div>
                <div className="flex border-b border-r border-gray-400">
                  <div className="p-2 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-black" />
                    <span>RIICCM202E – Identify,located and protect uunderground services</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer Page 13 */}
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
                  <li>Students are responsible for the safe storage of their Certificate and Statements of Attainment. Students are responsible for the safe storage of their Certificate and Statements of Attainment. If a student requires a reissue of their Certificate Statement of Attainment, a <strong>certificate re-issue fee of $50</strong> will be charged.</li>
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
                <ul className="list-disc pl-8 flex flex-col gap-1">
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
                <ul className="list-disc pl-8 flex flex-col gap-1">
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
                  <div className="flex items-end">
                    <span className="font-bold mr-2 text-sm">STUDENT NAME:</span>
                    <div className="border-b border-[#003366] flex-1"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-end flex-1">
                      <span className="font-bold mr-2 text-sm">STUDENT SIGNATURE:</span>
                      <div className="border-b border-[#003366] flex-1"></div>
                    </div>
                    <div className="flex items-end w-full sm:w-[200px]">
                      <span className="font-bold mr-2 text-sm">DATE:</span>
                      <div className="border-b border-[#003366] flex-1 flex justify-center text-gray-500 tracking-widest pb-1">__ / __ / __</div>
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="absolute left-0 top-0">
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
              <div className="bg-[#b3e5fc] border-b border-gray-400 font-bold p-2 text-sm sm:text-base">
                Payment method:
              </div>
              <div className="p-4 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black mt-1" />
                  <div className="flex flex-col">
                    <p>Bank : Commonwealth Bank</p>
                    <p><strong>Account Name:</strong> AIET College</p>
                    <p><strong>BSB :</strong> 062 141 &nbsp;&nbsp;&nbsp; <strong>Account No :</strong> 10490235</p>
                    <p>Transaction Description : Your Nmae / Invoice Number</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start mt-1 sm:mt-0">
                  <span className="hidden sm:inline">----</span>
                  <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 border-black" /> Cash</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 border-black" /> Debit/CreditCard EFTPOS</label>
                </div>
              </div>
              <div className="px-4 pb-4 text-right">
                <p>Australian International Education & Training Pty Ltd</p>
              </div>
            </div>

            {/* Application Submission */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-[#b3e5fc] border-b border-gray-400 font-bold p-2 text-sm sm:text-base">
                APPLICATION SUBMISSION
              </div>
              <div className="p-4 flex flex-col gap-4">
                <p className="italic">Please return this completed application form with proof of ID to <strong>Australian International Education & Training</strong> (AIET) to enrol in your chosen qualification.</p>
                <p>Once your application has been received and is accepted as complete, you will be notified. If any information or evidence is missing you will be contacted to provide any further required information. This may delay your enrolment process.</p>
                
                <p className="italic">Australian International Education & Training Assessment Centre:</p>
                <ul className="list-disc pl-8 flex flex-col gap-2">
                  <li>Address: 3/14-16 Marjorie, Street, Sefton NSW 216</li>
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO 45234</p>
              </div>
            </div>
            
            <h2 className="text-center font-bold text-xl mb-1">Training Agreement</h2>
            <p className="text-center font-bold mb-8 text-sm">(To be completed by the participant at enrolment)</p>

            <div className="text-xs sm:text-sm flex flex-col gap-4">
              <p className="flex items-end">
                I <span className="border-b border-black flex-1 mx-2"></span> (insert full legal name) agree to undertake training with 
              </p>
              <p>Australian International Education and Training ( AIET ) , in the following course:</p>
              
              <h3 className="text-center font-bold text-lg my-2">MSMWHS217 Gas Test Atmospheres</h3>

              <p>During the course of this program, I understand and acknowledge that:</p>
              
              <p className="font-bold">My rights and obligations, as defined in the Participant Handbook include:</p>
              <ol className="list-decimal pl-10 flex flex-col gap-2">
                <li>My obligation at all times to conduct myself safely and in adherence to all relevant legislation.</li>
                <li>I will actively attempt all training and assessment tasks with serious effort.</li>
                <li>That I will comply with all safe and lawful requests</li>
                <li>I will arrive on time and will return on time from all breaks.</li>
                <li>That I will not bully, abuse, vilify or fail to treat all people participating, associated with, or in the vicinity of AIET venues with the utmost respect and courtesy.</li>
              </ol>

              <p className="font-bold mt-2">Australian International Education and Training ( AIET) rights and obligations include:</p>
              <ol className="list-decimal pl-10 flex flex-col gap-2" start="6">
                <li>To provide quality training and assessment services, compliant to the NVR Standards, in a competent manner through the provision of quality resources and staff resulting in the issuance of AQF statement of attainment.</li>
                <li>Assessment be performed by qualified assessors with the required knowledge and currency in the needs of industry.</li>
                <li>Guaranteeing to provide assessment services to customers who have met their obligations with regard to completion of enrolment details, and financial payments</li>
                <li>Guaranteeing that in the event that Australian International Education and Training ( AIET) cannot deliver a course, a full refund of all monies paid to Australian International Education and Training ( AIET) will be refunded to the purchaser.</li>
                <li>Committing that training will not be offered to participants who fail to wear PPE or fail to pay for the course.</li>
                <li>Choosing to terminate a customer's training if they fail to uphold these standards</li>
                <li>Keeping participants informed of any changes in the service delivery including trainers, our ownership, the engagement of third parties or any other aspect of the participants training experience.</li>
              </ol>

              <p className="mt-4">Agreed to and accepted by Participant:</p>
              <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-4">
                <div className="flex items-end flex-1">
                  <span className="font-bold mr-2">Signed</span>
                  <div className="border-b border-dotted border-black flex-1 border-b-2"></div>
                </div>
                <div className="flex items-end flex-1">
                  <span className="font-bold mr-2">Date</span>
                  <div className="border-b border-dotted border-black flex-1 border-b-2"></div>
                </div>
              </div>

              {/* Office Use Only Box */}
              <div className="border border-black mt-2">
                <div className="font-bold underline text-base px-2 py-1 bg-white inline-block relative -top-3 left-4">Office use only</div>
                <div className="p-4 flex flex-col gap-8 -mt-2">
                  <p>Agreed to and accepted by Australian International Education and Training ( AIET) Representative:</p>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <div className="flex items-end flex-1">
                      <span className="mr-2">Signed</span>
                      <div className="border-b border-dotted border-black flex-1 border-b-2"></div>
                    </div>
                    <div className="flex items-end flex-1">
                      <span className="mr-2">Date</span>
                      <div className="border-b border-dotted border-black flex-1 border-b-2"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-end w-full sm:w-2/3">
                    <span className="mr-2">Print Name:</span>
                    <div className="border-b border-dotted border-black flex-1 border-b-2"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Page 20 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p className="underline mb-2 text-center">3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO 45234</p>
              </div>
            </div>
            
            <h2 className="text-center font-bold text-xl mb-6">Participant record of Training</h2>

            {/* Tables Container */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              
              {/* Participant Details */}
              <div className="bg-gray-300 border-b border-gray-400 font-bold p-2">
                Participant details
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="flex-1 p-2 border-r border-gray-400 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Name:</span>
                  <input type="text" className="w-full bg-transparent outline-none border-b border-gray-300 sm:border-none" />
                </div>
                <div className="w-full sm:w-[150px] p-2 border-t sm:border-t-0 border-r border-gray-400 flex items-center justify-between gap-2">
                  <span>D.O.B:</span>
                  <div className="flex gap-1 items-center flex-1 text-gray-400 justify-end sm:justify-center">
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" /> /
                    <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                  </div>
                </div>
                <div className="w-full sm:w-[120px] p-2 border-t sm:border-t-0 flex items-center justify-between sm:justify-center gap-2">
                  <span>Sex:</span>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1"><input type="radio" name="sex" value="M" /> M</label>
                    <label className="flex items-center gap-1"><input type="radio" name="sex" value="F" /> F</label>
                  </div>
                </div>
              </div>
              <div className="p-2 border-b border-gray-400 flex flex-col sm:flex-row gap-2 min-h-[40px] items-start sm:items-center">
                <span className="whitespace-nowrap">Address:</span>
                <input type="text" className="w-full bg-transparent outline-none border-b border-gray-300 sm:border-none" />
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="flex-1 p-2 border-r border-gray-400 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Phone:</span>
                  <input type="text" className="w-full bg-transparent outline-none border-b border-gray-300 sm:border-none" />
                </div>
                <div className="flex-1 p-2 border-t sm:border-t-0 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Email:</span>
                  <input type="email" className="w-full bg-transparent outline-none border-b border-gray-300 sm:border-none" />
                </div>
              </div>

              {/* Training Log */}
              <div className="bg-gray-300 border-b border-gray-400 font-bold p-2">
                Training Log:
              </div>
              <div className="flex bg-gray-100 border-b border-gray-400 text-center font-semibold">
                <div className="w-[100px] sm:w-[120px] p-2 border-r border-gray-400">Training Date</div>
                <div className="flex-1 p-2 border-r border-gray-400">Participant full Name</div>
                <div className="flex-1 p-2">Participant Signature</div>
              </div>
              {[1, 2, 3, 4, 5].map((row, idx) => (
                <div key={idx} className="flex border-b border-gray-400 min-h-[36px]">
                  <div className="w-[100px] sm:w-[120px] p-2 border-r border-gray-400 flex items-center justify-center text-gray-400">
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                    <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />
                  </div>
                  <div className="flex-1 p-1 border-r border-gray-400">
                    <input type="text" className="w-full h-full bg-transparent outline-none" />
                  </div>
                  <div className="flex-1 p-1">
                    <input type="text" className="w-full h-full bg-transparent outline-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Resources & Summary */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mt-8">
              <div className="bg-gray-300 border-b border-gray-400 font-bold p-2">
                Resources
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" /> PowerPoint presentation
                </div>
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2 border-t sm:border-t-0">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" /> Leaner Guide
                </div>
                <div className="flex-1 p-2 flex items-center gap-2 border-t sm:border-t-0">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" /> Practical tasks
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" /> Training Videos
                </div>
                <div className="flex-1 p-2 border-r border-gray-400 flex items-center gap-2 border-t sm:border-t-0">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" /> Review questions
                </div>
                <div className="flex-1 p-2 flex items-center gap-2 border-t sm:border-t-0">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" /> 
                  <span className="whitespace-nowrap">Other:</span>
                  <input type="text" className="w-full bg-transparent outline-none border-b border-gray-400" />
                </div>
              </div>

              {/* Summary */}
              <div className="flex bg-gray-300 border-b border-gray-400 font-bold">
                <div className="flex-1 p-2 border-r border-gray-400">Summary</div>
                <div className="w-[100px] sm:w-[120px] p-2 text-center">Satisfactory?</div>
              </div>
              
              {/* Row 1: Header */}
              <div className="flex border-b border-gray-400">
                <div className="flex-1 p-2 sm:p-4 border-r border-gray-400">The participant has:</div>
                <div className="w-[100px] sm:w-[120px] flex font-semibold">
                  <div className="flex-1 text-center p-2 sm:p-4">Yes</div>
                  <div className="flex-1 text-center p-2 sm:p-4">No</div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="flex border-b border-gray-200 min-h-[40px]">
                <div className="flex-1 p-2 sm:p-4 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" />
                  <span>Attended PowerPoint Presentation /participated in PowerPoint Quiz</span>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-2 sm:p-4">
                  <input type="checkbox" className="w-5 h-5 border-black shrink-0" />
                  <input type="checkbox" className="w-5 h-5 border-black shrink-0" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex border-b border-gray-200 min-h-[40px]">
                <div className="flex-1 p-2 sm:p-4 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" />
                  <span>Completed Questions (Knowledge assessment)</span>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-2 sm:p-4">
                  <input type="checkbox" className="w-5 h-5 border-black shrink-0" />
                  <input type="checkbox" className="w-5 h-5 border-black shrink-0" />
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex border-b border-gray-400 min-h-[40px]">
                <div className="flex-1 p-2 sm:p-4 border-r border-gray-400 flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 border-black shrink-0" />
                  <span>Completed Practical tasks</span>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-2 sm:p-4">
                  <input type="checkbox" className="w-5 h-5 border-black shrink-0" />
                  <input type="checkbox" className="w-5 h-5 border-black shrink-0" />
                </div>
              </div>

              {/* Row 5 (Notes) */}
              <div className="flex">
                <div className="flex-1 p-2 sm:p-4 flex flex-col">
                  <span>Notes/comments:</span>
                  <textarea className="w-full bg-transparent outline-none min-h-[40px] mt-1 resize-y" rows="2"></textarea>
                </div>
              </div>

            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-end text-sm gap-6 sm:gap-4">
              <div className="flex items-end flex-1 w-full">
                <span className="mr-2 whitespace-nowrap">Trainer's Name :</span>
                <input type="text" className="border-b border-black flex-1 bg-transparent outline-none" />
              </div>
              <div className="flex items-end flex-1 w-full">
                <span className="mr-2 whitespace-nowrap">Trainer's signature</span>
                <div className="border-b border-black flex-1 border-dotted border-b-2"></div>
              </div>
              <div className="flex items-end w-full sm:w-[150px]">
                <span className="mr-2 whitespace-nowrap">Date:</span>
                <div className="border-b border-black flex-1 flex gap-1 justify-center text-gray-400">
                  <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" />/
                  <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 21 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p>Australian International Education and Training Pty Ltd T/A Safety Training Academy</p>
            <p className="underline mb-2 text-center">3/14-16 Marjorie Street Sefton NSW 2162 (ABN: 93613701527) Ph:1300 976 097 email: info@aietcollege.edu.au</p>
            
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
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-12 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-[#a2add0] mb-8">
              
              <div className="bg-[#d9e2f3] border-b border-[#a2add0] font-bold p-4 text-center text-lg sm:text-xl">
                Candidate Assessment Tool
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#d9e2f3] sm:w-[220px] p-4 font-bold border-r border-[#a2add0] flex items-center">
                  Assessment Type
                </div>
                <div className="flex-1 p-4 bg-white">
                  There are <strong>2 summative assessments</strong> for demonstration of competency for this unit. All assessments must be completed satisfactorily for the student to be determined as "competent". Students may re-sit either assessment once only, after which a performance review will be conducted
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#d9e2f3] sm:w-[220px] p-4 font-bold border-r border-[#a2add0] flex items-center">
                  Assessment Methods
                </div>
                <div className="flex-1 flex flex-col bg-white">
                  <div className="flex border-b border-[#a2add0]">
                    <div className="w-[120px] p-2 sm:p-4 font-bold border-r border-[#a2add0]">Assessment 1</div>
                    <div className="flex-1 p-2 sm:p-4 font-bold">Written questions</div>
                  </div>
                  <div className="flex">
                    <div className="w-[120px] p-2 sm:p-4 font-bold border-r border-[#a2add0]">Assessment 2</div>
                    <div className="flex-1 p-2 sm:p-4 font-bold">Practical Demonstration</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#d9e2f3] border-b border-[#a2add0] font-bold p-4 text-center text-base sm:text-lg">
                Unit Summary
              </div>
              
              <div className="p-4 bg-white flex flex-col gap-4">
                <p>This unit of competency covers the skills and knowledge required to test the working atmosphere, using electronic test apparatus, to find out if it is safe for the proposed work.</p>
                <p>It applies to situations where an individual may be required to carry out gas testing of an atmosphere prior to entering a specific area or workspace. The competency requires the person to interpret readings and take actions based on the interpretation.</p>
                <p>Working environment may be hazardous, unpredictable, subject to time pressure, chaotic and expose responders to risk, on land or water, by day or night. Workplace atmospheres may include visible and invisible hazards and hazardous surfaces.</p>
                <p>The unit is suitable for use in the following situations:</p>
                <p className="pl-4">confined spaces</p>
                <ul className="list-disc pl-10 flex flex-col gap-1">
                  <li>enclosed and partially enclosed spaces</li>
                  <li>hot work</li>
                  <li>storage tanks, silos, pits, pipes, shafts, ducts, transport vehicles and ships</li>
                  <li>testing as part of issuing a work permit</li>
                  <li>monitoring as part of working under a work permit</li>
                  <li>open areas</li>
                  <li>holding the gas tester by hand</li>
                  <li>lowering the gas tester into a space, e.g. on a line.</li>
                </ul>
                <p>This unit of competency applies to an individual working alone or as part of a team or group and working in liaison with other shift team members and the control room operator, as appropriate.</p>
                <p>No licensing, legislative or certification requirements apply to this unit at the time of publication</p>
              </div>

              <div className="bg-[#d9e2f3] border-y border-[#a2add0] font-bold p-4 text-center text-base sm:text-lg">
                Prerequisite
              </div>
              
              <div className="p-4 bg-white min-h-[80px]">
                <p>There are no recommended pre-requisite units for this competency.</p>
              </div>
            </div>

          </div>

          {/* Footer Page 22 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 1 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 23 (Assessment Page 2 of 24 - Instructions to Student) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-base sm:text-lg mb-6">
              <p>SUMMATIVE ASSESSMENT 1</p>
              <p>WRITTEN QUESTIONS</p>
              <p>INSTRUCTIONS TO STUDENT</p>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              
              <div className="bg-[#94a9d3] border-b border-gray-400 font-bold p-2 px-4 text-base">
                Place and duration of assessment
              </div>
              <div className="p-4 bg-white border-b border-gray-400">
                <p>This is an open book assessment conducted in class that must be completed during the allocated assessment period. Students should allocate approximately 2 hours to complete this task.</p>
                <div className="flex items-end mt-2">
                  <span className="font-bold mr-2">Assessment Due Date:</span>
                  <input type="text" className="border-b border-black w-[150px] bg-transparent outline-none" />
                </div>
              </div>

              <div className="bg-[#94a9d3] border-b border-gray-400 font-bold p-2 px-4 text-base">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-4 bg-white border-b border-gray-400 flex flex-col gap-2">
                <p>To receive a "Satisfactory" grade for this assessment you must:</p>
                <div className="flex items-start gap-2 ml-4">
                  <input type="checkbox" className="mt-1" />
                  <p>Complete all written questions.</p>
                </div>
                <div className="flex items-start gap-2 ml-4">
                  <input type="checkbox" className="mt-1" />
                  <p>All responses for each question must be marked as satisfactory by the assessor.</p>
                </div>
                <p>Before you commence the assessment, you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed "Satisfactory" against all performance criteria in all assessments by your assessor to be considered "Competent" in this Unit of Competency. Feedback will be given to you.</p>
              </div>

              <div className="bg-[#94a9d3] border-b border-gray-400 font-bold p-2 px-4 text-base">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-4 bg-white border-b border-gray-400">
                <p>Assessment processes and techniques will as far as is practical take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.</p>
                <p className="mt-2">If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
              </div>

              <div className="bg-[#94a9d3] border-b border-gray-400 font-bold p-2 px-4 text-base">
                Assessor Intervention
              </div>
              <div className="p-4 bg-white flex flex-col gap-4">
                <p>Assessors are to check that the student is ready for assessment and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.</p>
                <p>Feedback is to be given at the completion of the assessment using the feedback from the student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.</p>
                <p>Your student record must indicate that you have all the required skills and knowledge in completing the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. If the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.</p>
              </div>

            </div>

          </div>

          {/* Footer Page 23 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 2 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 24 (Assessment Page 3 of 24 - Plagiarism & Declaration) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-base sm:text-lg mb-6">
              <p>SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p>WRITTEN QUESTIONS</p>
              <p>STUDENT IDENTIFIER</p>
            </div>

            <div className="flex flex-col text-xs sm:text-sm border border-[#a2add0]">
              
              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#94a9d3] sm:w-[220px] p-2 sm:p-4 font-bold border-r sm:border-r-[#a2add0] flex items-center">
                  Student's Name:
                </div>
                <div className="flex-1 p-2 sm:p-4 bg-white border-t sm:border-t-0 border-[#a2add0]">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#94a9d3] sm:w-[220px] p-2 sm:p-4 font-bold border-r sm:border-r-[#a2add0] flex items-center">
                  Assessor's Name:
                </div>
                <div className="flex-1 p-2 sm:p-4 bg-white border-t sm:border-t-0 border-[#a2add0]">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#94a9d3] sm:w-[220px] p-2 sm:p-4 font-bold border-r sm:border-r-[#a2add0] flex items-center">
                  Date of Assessment/Submission:
                </div>
                <div className="flex-1 p-2 sm:p-4 bg-white border-t sm:border-t-0 border-[#a2add0] flex gap-1 items-center text-gray-400">
                  <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                  <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" /> /
                  <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#94a9d3] sm:w-[220px] p-2 sm:p-4 font-bold border-r sm:border-r-[#a2add0] flex items-center">
                  Evidence
                </div>
                <div className="flex-1 p-2 sm:p-4 bg-white border-t sm:border-t-0 border-[#a2add0]">
                  <p className="mb-2">You will be required to submit the following evidence in order to be assessed:</p>
                  <label className="flex items-center gap-2 mb-1"><input type="checkbox" className="w-4 h-4 border-black" /> Student Identifier</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4 border-black" /> Completed written questions</label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-b border-[#a2add0]">
                <div className="bg-[#94a9d3] sm:w-[220px] p-2 sm:p-4 font-bold border-r sm:border-r-[#a2add0] flex items-center">
                  Definition
                </div>
                <div className="flex-1 p-2 sm:p-4 bg-white border-t sm:border-t-0 border-[#a2add0]">
                  <p>Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant's exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:</p>
                  <ul className="list-disc pl-6 mt-2 flex flex-col gap-2">
                    <li>Presenting any work by another individual as one's own unintentionally.</li>
                    <li>Handing in work markedly similar to or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#94a9d3] sm:w-[220px] p-2 sm:p-4 font-bold border-r sm:border-r-[#a2add0] flex items-center">
                  Declaration:
                </div>
                <div className="flex-1 p-2 sm:p-4 bg-white border-t sm:border-t-0 border-[#a2add0] flex flex-col gap-4">
                  <p>I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.</p>
                  <p className="mt-4">I acknowledge that I am ready to undertake the assessment.</p>
                  
                  <div className="flex items-end mt-4">
                    <span className="font-bold mr-2">Student Signature</span>
                    <input type="text" className="border-b-2 border-black w-full sm:w-[300px] bg-transparent outline-none" />
                  </div>
                  
                  <div className="flex items-end mt-4">
                    <span className="font-bold mr-2">Date</span>
                    <div className="border-b-2 border-black w-full sm:w-[200px] flex gap-1 items-center text-gray-400 justify-center">
                      <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="DD" /> /
                      <input type="text" className="w-6 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="2" placeholder="MM" /> /
                      <input type="text" className="w-8 bg-transparent outline-none text-center text-black placeholder-gray-400" maxLength="4" placeholder="YYYY" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 24 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 3 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 25 (Assessment Page 4 of 24 - Questions 1 and 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-base sm:text-lg mb-4">
              <p>Summative Assessment 1: Written Questions</p>
            </div>
            
            <div className="font-bold underline text-sm sm:text-base mb-4">
              Read each question carefully. Make sure you answer all questions.
            </div>

            <div className="bg-[#b4c6e7] border border-gray-400 font-bold p-3 text-lg sm:text-xl flex justify-between items-center mb-6">
              <span>1. Prepare for gas testing</span>
            </div>

            {/* Question 1 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 1
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                You are preparing for gas testing. How do you find out the type of gas/atmosphere to be tested? List two(2) methods.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[250px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[200px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q1Image} alt="Worker preparing for gas test" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 2
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are some typical gases you might find in confined spaces? List three (3).
              </div>
              <div className="flex flex-col min-h-[250px]">
                <div className="flex-1 p-2">
                  <textarea className="w-full h-full min-h-[200px] bg-transparent outline-none resize-none"></textarea>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 25 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 4 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 26 (Assessment Page 5 of 24 - Questions 3 and 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 3 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 3
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 5 factors you should consider when choosing the gas testing equipment for the job?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q3Image} alt="Worker dizzy from H2S" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 4
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                You are preparing for gas testing. List the 3 steps involved in the "zero calibration" method and "span calibration method" to calibrate the gas monitor in line with procedures?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q4Image} alt="Worker calibrating monitor" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 26 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 5 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 27 (Assessment Page 6 of 24 - Questions 5 and 6) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 5 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 5
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                You are preparing for gas testing. How do you find out the gas testing regime/sampling pattern required? List three (3) ways.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q5Image} alt="Worker gas testing" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 6
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 3 gas and vapour hazards you must be aware of?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  {/* Intentionally left blank as per reference image */}
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 27 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 6 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 28 (Assessment Page 7 of 24 - Questions 7, 8, and 9) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 7 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 7
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 3 common measurements used to measure gas contaminants?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[150px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q7Image} alt="Gas measuring" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 8 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 8
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                You are preparing for gas testing. How do you identify hazards from possible atmosphere contaminants? Give two (2) examples.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[300px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[250px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q8Image} alt="Safety Data Sheets" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 9 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 9
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are the four dangers a gas monitor tests for?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[200px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[150px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  {/* Intentionally left blank as per reference image */}
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 28 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 7 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 29 (Assessment Page 8 of 24 - Questions 10 and 11) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 10 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 10
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 4 common examples of hazard controls that may be used in the workplace?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q10Image} alt="Permit for working in a confined space" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 11 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 11
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 3 examples of PPE that may be used?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  {/* Intentionally left blank as per reference image */}
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 29 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 8 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 30 (Assessment Page 9 of 24 - Question 12) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 12 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 12
              </div>
              <div className="p-4 border-b border-gray-400 font-bold flex flex-col gap-2">
                <p>Provide 1 example of each of the following and provide a suitable response:</p>
                <ul className="list-disc pl-6">
                  <li>Incident</li>
                  <li>fire</li>
                  <li>accident</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[500px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q12Image} alt="Worker reviewing plans" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 30 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 9 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 31 (Assessment Page 10 of 24 - Questions 13 and 14) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 13 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 13
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What information is contained in a Standard Operating Procedure (SOP) relevant to gas testing? List 4 things.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q13Image} alt="Worker reviewing plans" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

            {/* Question 14 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 14
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 2 reasons why SOPs are so important in the workplace?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q14Image} alt="Worker reviewing plans" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 31 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 10 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 32 (Assessment Page 11 of 24 - Questions 15 and 16) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 15 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 15
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are explosive limits? When is the lower explosive limit (LEL) and what is the upper explosive limit (UEL)?
              </div>
              <div className="flex flex-col min-h-[350px]">
                <div className="flex-1 p-2">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"></textarea>
                </div>
              </div>
            </div>

            {/* Question 16 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 16
              </div>
              <div className="p-4 border-b border-gray-400 font-bold flex flex-col gap-2">
                <p>Describe each of the following terms relevant to gas testing:</p>
                <ul className="list-disc pl-6">
                  <li>Time-weighted average (TWA)</li>
                  <li>Short-Term Exposure Limits (STEL)</li>
                  <li>Peak Limitation Values</li>
                  <li>Toxic Effects for Flammable Gases</li>
                </ul>
              </div>
              <div className="flex flex-col min-h-[350px]">
                <div className="flex-1 p-2">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"></textarea>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 32 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 11 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 33 (Assessment Page 12 of 24 - Section 2, Questions 17 and 18) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Section 2 Header */}
            <div className="bg-[#b4c6e7] font-bold p-3 text-lg sm:text-xl flex justify-between items-center mb-6 h-16">
              <span className="ml-2">2. Test gas</span>
              <div className="bg-transparent border-2 border-black rounded-md p-1 mr-2 h-10 w-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>

            {/* Question 17 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 17
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                You are using gas testing equipment. What permit might you need? Give two (2) examples.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[350px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q17Image} alt="Entry Permit" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 18 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 18
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are the 4 steps involved in the testing procedure when using the gas testing equipment to test gas?
              </div>
              <div className="flex flex-col sm:flex-row min-h-[400px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q18Image} alt="Gas monitor beeping" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 33 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 12 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 34 (Assessment Page 13 of 24 - Questions 19 and 20) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 19 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 19
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                How do you continuously monitor gas levels? Give two (2) ways.
              </div>
              <div className="flex flex-col sm:flex-row min-h-[300px]">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0">
                  <textarea className="w-full h-full min-h-[250px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q19Image} alt="Laser monitor" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 20 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 20
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are the 2 immediate actions you should take if readings are unacceptable?
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q20Image} alt="Breathing apparatus sign" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 34 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 13 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 35 (Assessment Page 14 of 24 - Questions 21 and 22) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 21 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6 flex-1">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 21
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 3 types of information you would communicate if the readings are unacceptable?
              </div>
              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q21Image} alt="Breathing apparatus sign" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

            {/* Question 22 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 22
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                Who would you communicate this to? Identify 2 personnel.
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q22Image} alt="Breathing apparatus sign" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 35 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 14 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 36 (Assessment Page 15 of 24 - Section 3, Questions 23 and 24) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Section 3 Header */}
            <div className="bg-[#b4c6e7] font-bold p-3 text-lg sm:text-xl flex justify-between items-center mb-6 h-16">
              <span className="ml-2">3. Maintain equipment</span>
              <div className="bg-transparent border-2 border-black rounded-md p-1 mr-2 h-10 w-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>

            {/* Question 23 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6 flex-1">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 23
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                How do you clean gas testing equipment according to procedures? Give two (2) ways.
              </div>
              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  <img src={q23Image} alt="Worker cleaning equipment" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Question 24 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 24
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                How do you maintain gas testing equipment according to procedures? Give two (2) ways.
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q24Image} alt="Gas sensor" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 36 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 15 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 37 (Assessment Page 16 of 24 - Question 25) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 25 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 25
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 4 ways to inspect the gas monitoring equipment?
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[500px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[350px] flex items-start justify-center p-2 bg-white">
                  <img src={q25Image} alt="Inspect gas monitor cylinder" className="max-w-full h-auto object-contain mt-2 border border-gray-300" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 37 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 16 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 38 (Assessment Page 17 of 24 - Questions 26 and 27) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 26 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 mb-6 flex-1">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 26
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 4 fault-finding methods you be look for?
              </div>
              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[350px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[350px] flex items-center justify-center p-2 bg-white">
                  <img src={q26Image} alt="Fault finding methods" className="max-w-full h-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Question 27 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 27
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                Where would you return gas testing equipment in required condition? List 2 locations.
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[300px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-start justify-center p-2 bg-white">
                  <img src={q27Image} alt="Caution Defective Tag" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 38 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 17 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 39 (Assessment Page 18 of 24 - Question 28) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 28 */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 h-full flex-1 mb-6">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 28
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What information should be recorded in relation to gas testing? List 4.
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[500px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[400px] flex items-start justify-center p-2 bg-white">
                  <img src={q28Image} alt="Recording information" className="max-w-full h-auto object-contain mt-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 39 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 18 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 40 (Assessment Page 19 of 29 - Question 28 & Declaration) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Question 28 (again, as per image) */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-400 min-h-[500px]">
              <div className="bg-gray-100 border-b border-gray-400 font-bold p-2">
                Question 28
              </div>
              <div className="p-2 border-b border-gray-400 font-bold min-h-[40px]">
                What are 3 conditions under which atmospheres can become hazardous?
              </div>
              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 p-2 border-r border-gray-400 border-b sm:border-b-0 h-full">
                  <textarea className="w-full h-full min-h-[400px] bg-transparent outline-none resize-none"></textarea>
                </div>
                <div className="w-full sm:w-[250px] flex items-center justify-center p-2 bg-white">
                  {/* Intentionally left blank */}
                </div>
              </div>
            </div>

            <div className="text-center font-bold text-lg mt-4 mb-8">
              End of Knowledge Question
            </div>

            <div className="flex items-start gap-2 mb-6">
              <span className="mt-1">❖</span>
              <p>You have now completed the knowledge assessment. Submit this document to your trainer/assessor for marking.</p>
            </div>

            <div className="mb-12">
              <p><strong>Participant Declaration:</strong> I declare that the information contained above in the written assessment summary is accurate and is a true reflection of the underpinning written assessment I undertook.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-end">
              <div className="flex items-end flex-1 w-full">
                <span className="font-bold mr-2 whitespace-nowrap">Participant's Name:</span>
                <input type="text" className="border-b-2 border-dotted border-black w-full bg-transparent outline-none" />
              </div>
              <div className="flex items-end flex-1 w-full">
                <span className="font-bold mr-2 whitespace-nowrap">Signature:</span>
                <input type="text" className="border-b-2 border-dotted border-black w-full bg-transparent outline-none" />
              </div>
              <div className="flex items-end sm:w-[150px] w-full">
                <span className="font-bold mr-2 whitespace-nowrap">Date:</span>
                <div className="flex items-end gap-1 w-full">
                  <input type="text" className="border-b-2 border-dotted border-black w-8 bg-transparent outline-none text-center" /> /
                  <input type="text" className="border-b-2 border-dotted border-black w-8 bg-transparent outline-none text-center" /> /
                  <input type="text" className="border-b-2 border-dotted border-black w-12 bg-transparent outline-none text-center" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 40 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 19 of 29</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 41 (Assessment Page 20 of 29 - Assessment Review) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-16 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            
            <div className="text-center font-bold text-xl sm:text-2xl mb-12">
              Summative Assessment 1: Assessment Review
            </div>

            <div className="flex flex-col border border-gray-400 text-sm sm:text-base mb-8">
              
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="sm:w-[250px] p-4 flex items-center justify-center text-center border-r sm:border-r-gray-400 bg-white">
                  Have the following<br/>evidence been attached
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center">
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-gray-400" />
                      <span>Student identifier</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-gray-400" />
                      <span>Completed<br/>Observation<br/>Checklist</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border-gray-400" />
                      <span>All other evidence</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="sm:w-[250px] p-4 flex items-center justify-center text-center border-r sm:border-r-gray-400 bg-white">
                  Summative Assessment 2<br/>outcome:
                </div>
                <div className="flex-1 p-4 bg-white flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-400" />
                    <span>Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-400" />
                    <span>Not satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Row 3 - Feedback */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 h-[250px]">
                <div className="sm:w-[250px] p-4 flex items-start justify-center font-bold border-r sm:border-r-gray-400 bg-white">
                  Feedback
                </div>
                <div className="flex-1 p-2 bg-white">
                  <textarea className="w-full h-full resize-none outline-none bg-transparent"></textarea>
                </div>
              </div>

              {/* Row 4 - Assessor Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 h-[60px]">
                <div className="sm:w-[250px] p-4 flex items-center font-bold border-r sm:border-r-gray-400 bg-white">
                  Assessor Name:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

              {/* Row 5 - Assessor Signature */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 h-[60px]">
                <div className="sm:w-[250px] p-4 flex items-center font-bold border-r sm:border-r-gray-400 bg-white">
                  Assessor Signature:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

              {/* Row 6 - Date */}
              <div className="flex flex-col sm:flex-row h-[60px]">
                <div className="sm:w-[250px] p-4 flex items-center font-bold border-r sm:border-r-gray-400 bg-white">
                  Date:
                </div>
                <div className="flex-1 p-2 bg-white flex items-center">
                  <input type="text" className="w-full bg-transparent outline-none" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 41 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 20 of 29</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 42 (Summative Assessment 2 - Instructions) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">
            <div className="text-center font-bold text-lg mb-8 uppercase">
              Summative Assessment 2 of 2<br/>
              Practical Demonstration<br/>
              Instructions to Student
            </div>
            
            <div className="flex flex-col border border-gray-400 mb-6 text-sm">
              <div className="bg-[#b4c6e7] font-bold p-2 border-b border-gray-400">Place and duration of assessment</div>
              <div className="p-3">This is a closed book assessment conducted in a simulated environment that must be completed during the allocated assessment period. Students should allocate approximately 1 hour to complete this task.</div>
            </div>

            <div className="flex flex-col border border-gray-400 mb-6 text-sm">
              <div className="bg-[#b4c6e7] font-bold p-2 border-b border-gray-400">Competency Criteria and Benchmarking</div>
              <div className="p-3">
                To receive a “Satisfactory” grade for this assessment you must:
                <ul className="list-disc pl-6 mb-2 mt-1">
                  <li>Student Identifier</li>
                  <li>Complete all assessment tasks.</li>
                  <li>Complete Confined Space Entry Permit</li>
                  <li>Completed SWMS</li>
                  <li>Completed Senior Management Sign Off</li>
                </ul>
                Before you commence the assessment you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed “Satisfactory” against all performance criteria in all assessments by your assessor to be considered “Competent” in this Unit of Competency. Feedback will be given to you.
              </div>
            </div>

            <div className="flex flex-col border border-gray-400 mb-6 text-sm">
              <div className="bg-[#b4c6e7] font-bold p-2 border-b border-gray-400">Reasonable Adjustment and re-assessment policy</div>
              <div className="p-3 space-y-4">
                <p>Assessment processes and techniques will as far as is practical take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.</p>
                <p>If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
              </div>
            </div>

            <div className="flex flex-col border border-gray-400 mb-6 text-sm">
              <div className="bg-[#b4c6e7] font-bold p-2 border-b border-gray-400">Assessor Intervention</div>
              <div className="p-3 space-y-4">
                <p>Assessors are to check that the student is ready for assessment, and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.</p>
                <p>Feedback is to be given at the completion of the assessment using the feedback to student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.</p>
                <p>Your student record must indicate that you have all required skills and knowledge in completing the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. In the event that the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 43 (Summative Assessment 2 - Student Identifier) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">
            <div className="text-center font-bold text-lg mb-8 uppercase">
              Summative Assessment 2 of 2<br/>
              Practical Demonstration<br/>
              Student Identifier
            </div>
            <div className="flex flex-col border border-gray-400 text-sm">
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 sm:w-[200px] border-b sm:border-b-0 sm:border-r border-gray-400">Student's Name:</div>
                <div className="p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 sm:w-[200px] border-b sm:border-b-0 sm:border-r border-gray-400">Assessor's Name:</div>
                <div className="p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 sm:w-[200px] border-b sm:border-b-0 sm:border-r border-gray-400">Date of Assessment / Submission:</div>
                <div className="p-2 flex-1"><input type="text" className="w-full bg-transparent outline-none" /></div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 sm:w-[200px] border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center">Evidence</div>
                <div className="p-2 flex-1">
                  You will be required to submit the following evidence in order to be assessed:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Student Identifier</li>
                    <li>Completed Assessment Task with all evidence attached.</li>
                    <li>Completed Confined Space Entry Permit</li>
                    <li>Completed SMWS</li>
                    <li>Completed Senor Management Sign Off</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                <div className="bg-[#b4c6e7] font-bold p-2 sm:w-[200px] border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center">Definition</div>
                <div className="p-2 flex-1 space-y-2">
                  <p>Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant's exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Presenting any work by another individual as one's own unintentionally</li>
                    <li>Handing in work markedly similar to or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row min-h-[250px]">
                <div className="bg-[#b4c6e7] font-bold p-2 sm:w-[200px] border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center">Declaration:</div>
                <div className="p-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p>I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.</p>
                    <p>I acknowledge that I am ready to undertake the assessment.</p>
                  </div>
                  <div className="space-y-6 mt-8">
                    <div className="font-bold">Student Signature ____________________________________</div>
                    <div className="font-bold">Date ______________________</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ======================= PAGE 44 (Summative Assessment 2 - Practical Demonstration of Skill) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-8 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[120px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            <div className="text-center font-bold text-lg mb-12">
              Summative Assessment 2<br/><br/>
              Practical Demonstration of Skill
            </div>
            
            <div className="space-y-6 text-sm sm:text-base">
              <p className="font-bold">Task:</p>
              <p>You will be required to gas test the atmosphere of a container using the Altair 4X gas monitor.</p>
              
              <p className="font-bold">Stage 1</p>
              <p>To complete this task, you must first undertake a toolbox talk to fill out the Confined Space Entry Permit and complete the SWMS for the job task. You must also calibrate the gas monitor according to manufacturer instructions.</p>
              
              <p className="font-bold">Stage 2</p>
              <p>Once you have completed the toolbox talk and prepared for the gas testing including implementing hazard control measures, you must climb up the ladder to access the hatch at the top of the container. You will be required to test the gas atmosphere at 3 intervals of testing (at top, middle and bottom of the container) and record the results on the Confined Space Entry Permit.</p>
              <p>You must also conduct a bump test with the compressed GAS N.O.S and appropriately respond to this including clearly and unambiguously communicating with site personnel on the safety conditions and procedures when dealing with this safety risk.</p>
              
              <p className="font-bold">Stage 3</p>
              <p>The final stage is to secure the hatch, descend the container and maintain the gas testing equipment by cleaning, inspecting and returning gas monitor to the designated storage areas.</p>
              
              <p>Your assessor will assess your performance using the observation checklist provided below. Ensure you have read and understood this prior to starting the task.</p>
            </div>

          </div>

          {/* Footer Page 44 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center">
            <p className="font-bold">Page 20 of 24</p>
            <p>231103</p>
            <p>Australian International Education & Training & Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 45 (Confined Space Entry Permit) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-4 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-1 sm:p-4 relative min-h-[1100px] overflow-x-auto">
          <div className="flex min-w-[600px]">
          
          {/* Left Vertical Text */}
          <div className="w-8 flex flex-col justify-end text-[8px] sm:text-[10px] text-gray-700 pr-2 pb-4">
            <div className="-rotate-180 text-center whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
              This Confined Spaces Entry Permit can be purchased at www.easyguides.com.au - or phone 1300 733 220<br/>
              © Copyright 2012 Easy Guides Australia Pty. Ltd.
            </div>
          </div>

          <div className="flex-1 flex flex-col border-4 border-black text-[9px] sm:text-[10px] leading-tight">
            
            {/* ---------------- SECTION 1: WORK AND PEOPLE ---------------- */}
            <div className="flex border-b-[3px] border-black h-auto">
              <div className="flex-1 flex flex-col">
                
                {/* Header */}
                <div className="flex justify-between items-end p-2 border-b border-black h-[50px]">
                  <h1 className="text-xl sm:text-3xl font-bold font-sans tracking-tight">Confined Space Entry Permit</h1>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Number:</span>
                    <span className="text-xl sm:text-3xl font-mono tracking-widest text-gray-500">110012</span>
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-2 border-b border-black">
                  <div className="border-r border-black p-1 flex items-end">
                    <span className="font-bold mr-1">Location of Work:</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                  </div>
                  <div className="p-1 flex items-end">
                    <span className="font-bold mr-1">Type of Work:</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                  </div>
                </div>
                <div className="border-b border-black p-1 flex items-end">
                  <span className="font-bold mr-1">Site / Hatch / Area ID:</span>
                  <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                </div>
                <div className="flex border-b border-black">
                  <div className="flex-[4] flex items-center p-1 border-r border-black">
                    <span className="font-bold mr-1">Work Is Authorised for: Date:</span>
                    <input className="w-16 border-b border-dotted border-gray-400 bg-transparent outline-none mr-2" />
                    <span className="font-bold mr-1">Time:</span>
                    <input className="w-16 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                  </div>
                  <div className="flex-[6] flex items-center p-1">
                    <span className="font-bold mr-1">Authorised by:</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none mr-2" />
                    <span className="font-bold mr-1">Signed:</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none mr-2" />
                    <span className="font-bold mr-1">Date:</span>
                    <span className="font-mono"> / / </span>
                  </div>
                </div>

                {/* People Table */}
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="border border-black p-1 text-left w-[40%] text-[8px] sm:text-[9px]">PEOPLE AUTHORISED TO ENTER<br/>CONFINED SPACE</th>
                      <th className="border border-black p-1 w-[10%] text-[8px]">Trained</th>
                      <th className="border border-black p-1 w-[25%] text-[8px]" colSpan="2">Entry</th>
                      <th className="border border-black p-1 w-[25%] text-[8px]" colSpan="2">Exit</th>
                    </tr>
                    <tr className="bg-gray-200">
                      <th className="border border-black p-1"></th>
                      <th className="border border-black p-1"></th>
                      <th className="border border-black p-1 font-normal text-[8px]">Time</th>
                      <th className="border border-black p-1 font-normal text-[8px]">Signed</th>
                      <th className="border border-black p-1 font-normal text-[8px]">Time</th>
                      <th className="border border-black p-1 font-normal text-[8px]">Signed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "(Person In Control)" },
                      { label: "(Standby Person)" },
                      { label: "" },
                      { label: "" },
                      { label: "" }
                    ].map((row, i) => (
                      <tr key={i} className="h-6">
                        <td className="border border-black p-1 text-right font-bold text-[8px]">{row.label}</td>
                        <td className="border border-black p-1"><div className="w-3 h-3 border border-black mx-auto"></div></td>
                        <td className="border border-black p-1 text-center font-bold">:</td>
                        <td className="border border-black p-1"></td>
                        <td className="border border-black p-1 text-center font-bold">:</td>
                        <td className="border border-black p-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-8 bg-[#444] text-white font-bold flex items-center justify-center border-l-2 border-white">
                <div className="-rotate-180 whitespace-nowrap tracking-widest text-[9px]" style={{ writingMode: 'vertical-rl' }}>WORK AND PEOPLE</div>
              </div>
            </div>

            {/* ---------------- SECTION 2: HAZARDS AND CONTROLS ---------------- */}
            <div className="flex border-b-[3px] border-black h-auto">
              <div className="flex-1 flex flex-col">
                
                {/* Expected Hazards */}
                <div className="flex">
                  <div className="bg-black text-white text-center font-bold p-1 w-1/3 border-r border-b border-black flex items-center justify-center">EXPECTED HAZARDS OF SPACE</div>
                  <div className="flex-1 grid grid-cols-2 border-b border-black">
                    <div className="border-r border-black p-1 flex gap-1 items-center font-bold"><div className="w-3 h-3 border border-black"></div><span>Fumes or gasses</span></div>
                    <div className="p-1 flex gap-1 items-center font-bold"><div className="w-3 h-3 border border-black"></div><span>Explosive environment</span></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 border-b border-black text-[8px] sm:text-[9px] font-bold">
                  <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Unsafe oxygen levels</span></div>
                  <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Risk of engulfment</span></div>
                  <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Airborne Contaminants</span></div>
                  <div className="border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Manual handling</span></div>
                  
                  <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Slips / Trips / Falls</span></div>
                  <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Heat / Cold</span></div>
                  <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Poor lighting</span></div>
                  <div className="border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Steam / Water / Gas</span></div>
                  
                  <div className="border-r border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Biohazards</span></div>
                  <div className="border-r border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Mechanical / Electrical</span></div>
                  <div className="border-r border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Noise levels</span></div>
                  <div className="p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Hot work</span></div>
                </div>
                
                <div className="border-b border-black p-1 flex items-end">
                  <span className="font-bold mr-1">Other:</span>
                  <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                </div>

                {/* Ventilation Method */}
                <div className="flex border-b border-black">
                  <div className="bg-black text-white text-center font-bold p-1 border-r border-black w-[25%] flex items-center justify-center">VENTILATION METHOD</div>
                  <div className="flex-[3] flex justify-around p-1 border-r border-black font-bold">
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Natural</label>
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Purging</label>
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Inerting</label>
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Other</label>
                  </div>
                  <div className="flex-[4] flex items-end p-1">
                    <span className="font-bold mr-1">Details:</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                  </div>
                </div>

                {/* PPE Required */}
                <div className="flex border-b border-black">
                  <div className="bg-black text-white text-center font-bold p-1 w-[25%] border-r border-black flex items-center justify-center">(P.P.E.) REQUIRED</div>
                  <div className="flex-1 grid grid-cols-3 font-bold text-[8px] sm:text-[9px]">
                    <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Hearing Protection</span></div>
                    <div className="border-r border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Safety Glasses</span></div>
                    <div className="border-b border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Gloves</span></div>
                    
                    <div className="border-r border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Protective Clothing</span></div>
                    <div className="border-r border-black p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Harness/Lifeline</span></div>
                    <div className="p-1 flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Suitable Footwear</span></div>
                  </div>
                </div>
                <div className="flex border-b border-black font-bold text-[8px] sm:text-[9px]">
                  <div className="border-r border-black p-1 w-[25%] flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Safety Helmet</span></div>
                  <div className="border-r border-black p-1 w-[25%] flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div><span>Breathing Apparatus</span></div>
                  <div className="flex-[2] p-1 flex items-end">
                    <span className="font-bold mr-1">Other:</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                  </div>
                </div>

                {/* Isolation Required */}
                <table className="w-full text-center border-collapse text-[8px] sm:text-[9px]">
                  <thead>
                    <tr className="bg-black text-white text-[8px]">
                      <th className="border border-black p-1 text-left w-[30%]">ISOLATION REQUIRED FROM</th>
                      <th className="border border-black p-1 w-[6%]">Needed</th>
                      <th className="border border-black p-1 w-[6%]">Initial</th>
                      <th className="border border-black p-1 w-[8%]">Time</th>
                      <th className="border border-black p-1 text-left w-[30%]">ISOLATION REQUIRED FROM</th>
                      <th className="border border-black p-1 w-[6%]">Needed</th>
                      <th className="border border-black p-1 w-[6%]">Initial</th>
                      <th className="border border-black p-1 w-[8%]">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-5">
                      <td className="border border-black p-1 text-left font-bold">Water / Gas / Steam</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                      <td className="border border-black p-1 text-left font-bold">Mechanical / Electrical Drives</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                    </tr>
                    <tr className="h-5">
                      <td className="border border-black p-1 text-left font-bold">Fire Extinguishing Systems</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                      <td className="border border-black p-1 text-left font-bold">Sludge / Deposits / Wastes</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                    </tr>
                    <tr className="h-5">
                      <td className="border border-black p-1 text-left font-bold">Chemicals / Substances</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                      <td className="border border-black p-1 text-left font-bold">Grains / Dust / Chips</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                    </tr>
                    <tr className="h-5">
                      <td className="border border-black p-1 text-left font-bold">Other:</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                      <td className="border border-black p-1 text-left font-bold">Other:</td>
                      <td className="border border-black p-1"></td><td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                    </tr>
                    <tr className="h-5">
                      <td className="border border-black p-1 text-left font-bold" colSpan="4">
                        Isolation method:
                      </td>
                      <td className="border border-black p-1 text-center font-bold" colSpan="4">
                        <div className="flex justify-center items-center gap-2">Locks / Tags fixed to isolation points <div className="w-3 h-3 border border-black"></div></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                {/* Other Checks */}
                <div className="flex border-b border-black">
                  <div className="bg-black text-white text-center font-bold p-1 w-[20%] flex items-center justify-center border-r border-black">OTHER CHECKS</div>
                  <div className="flex-1 grid grid-cols-3 font-bold text-[8px] sm:text-[9px]">
                    <div className="border-r border-b border-black p-1 flex justify-between"><span>Hot Work Permit Required?</span><span>YES / NO</span></div>
                    <div className="border-r border-b border-black p-1 flex justify-between col-span-2"><span>Intrinsically Safe Equipment Needed?</span><span>YES / NO</span></div>
                    
                    <div className="border-r border-b border-black p-1 flex justify-between"><span>BA Required?</span><span>YES / NO</span></div>
                    <div className="border-r border-b border-black p-1 flex justify-between"><span>Signs/Barricades Up?</span><span>YES / NO</span></div>
                    <div className="border-b border-black p-1 flex justify-between"><span>Fire Fighting/Protection Equipment Needed?</span><span>YES / NO</span></div>
                    
                    <div className="border-r border-black p-1 flex justify-between"><span>Comms Organised?</span><span>YES / NO</span></div>
                    <div className="border-r border-black p-1 flex justify-between"><span>Rescue Plan Complete?</span><span>YES / NO</span></div>
                    <div className="p-1 flex justify-between"><span>Equipment needed for rescue is available?</span><span>YES / NO</span></div>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-black text-white text-center font-bold p-1 w-[20%] border-r border-black">OTHER CONTROLS</div>
                  <div className="flex-1 p-1"><input className="w-full bg-transparent outline-none" /></div>
                </div>

              </div>
              <div className="w-8 bg-[#444] text-white font-bold flex items-center justify-center border-l-2 border-white">
                <div className="-rotate-180 whitespace-nowrap tracking-widest text-[9px]" style={{ writingMode: 'vertical-rl' }}>HAZARDS AND CONTROLS</div>
              </div>
            </div>

            {/* ---------------- SECTION 3: GAS/ATMOSPHERE TESTING ---------------- */}
            <div className="flex border-b-[3px] border-black h-auto">
              <div className="flex-1 flex flex-col">
                
                <div className="flex border-b border-black">
                  <div className="bg-black text-white text-center font-bold p-1 w-[30%] border-r border-black flex items-center justify-center">GAS TESTING REGIME</div>
                  <div className="flex-1 flex justify-around p-1 font-bold">
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Before entry</label>
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Every <span className="border-b border-black w-8 inline-block"></span> mins</label>
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>As required</label>
                    <label className="flex gap-1 items-center"><div className="w-3 h-3 border border-black"></div>Continuously</label>
                  </div>
                </div>

                <div className="bg-black text-white text-center font-bold p-1 border-b border-black">ATMOSPHERE GAS TESTING EQUIPMENT</div>
                
                <div className="grid grid-cols-2 border-b border-black font-bold">
                  <div className="border-r border-black p-1 flex gap-2 items-center flex-wrap">
                    <span>ID No.: ___________</span>
                    <label className="flex gap-1 items-center">Calibrated <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Battery Charged <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Inspected <div className="w-3 h-3 border border-black"></div></label>
                  </div>
                  <div className="p-1 flex gap-2 items-center flex-wrap">
                    <span>ID No.: ___________</span>
                    <label className="flex gap-1 items-center">Calibrated <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Battery Charged <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Inspected <div className="w-3 h-3 border border-black"></div></label>
                  </div>
                  <div className="border-r border-t border-black p-1 flex gap-2 items-center flex-wrap">
                    <span>ID No.: ___________</span>
                    <label className="flex gap-1 items-center">Calibrated <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Battery Charged <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Inspected <div className="w-3 h-3 border border-black"></div></label>
                  </div>
                  <div className="border-t border-black p-1 flex gap-2 items-center flex-wrap">
                    <span>ID No.: ___________</span>
                    <label className="flex gap-1 items-center">Calibrated <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Battery Charged <div className="w-3 h-3 border border-black"></div></label>
                    <label className="flex gap-1 items-center">Inspected <div className="w-3 h-3 border border-black"></div></label>
                  </div>
                </div>

                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-black text-white text-[9px]">
                      <th className="border border-black p-1 w-[25%]" rowSpan="2">ATMOSPHERE/<br/>GAS TESTS</th>
                      <th className="border border-black p-1" colSpan="3">Entrance/Exit</th>
                      <th className="border border-black p-1" colSpan="7">Other tests (Should include top centre and bottom of space)</th>
                    </tr>
                    <tr className="bg-black text-white text-[8px]">
                      <th className="border border-black p-1 font-normal w-[7%]">Before<br/>Opening</th>
                      <th className="border border-black p-1 font-normal w-[7%]">Slightly<br/>Ajar</th>
                      <th className="border border-black p-1 font-normal w-[7%]">Fully<br/>Open</th>
                      <th className="border border-black p-1 font-normal w-[7%]">1</th>
                      <th className="border border-black p-1 font-normal w-[7%]">2</th>
                      <th className="border border-black p-1 font-normal w-[7%]">3</th>
                      <th className="border border-black p-1 font-normal w-[7%]">4</th>
                      <th className="border border-black p-1 font-normal w-[7%]">5</th>
                      <th className="border border-black p-1 font-normal w-[7%]">6</th>
                      <th className="border border-black p-1 font-normal w-[7%]">7</th>
                    </tr>
                    <tr className="bg-gray-200">
                      <th className="border border-black p-1 text-right font-bold text-[9px]">TIME:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                      <th className="border border-black p-1 font-bold">:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['% of Oxygen', '% of LEL', 'Carbon Monoxide - CO2', 'Hydrogen Sulfide - H2S', 'Other:', 'Other:'].map((item, idx) => (
                      <tr key={idx} className="h-6">
                        <td className="border border-black p-1 text-left font-bold">{item}</td>
                        <td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                        <td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                        <td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                        <td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                        <td className="border border-black p-1"></td><td className="border border-black p-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
              <div className="w-8 bg-[#444] text-white font-bold flex items-center justify-center border-l-2 border-white">
                <div className="-rotate-180 whitespace-nowrap tracking-widest text-[9px]" style={{ writingMode: 'vertical-rl' }}>GAS/ATMOSPHERE TESTING</div>
              </div>
            </div>

            {/* ---------------- SECTION 4: EXIT ---------------- */}
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <div className="bg-black text-white text-center font-bold p-1 border-b border-black">EXITING SPACE CHECKLIST</div>
                <div className="flex justify-around p-1 border-b border-black font-bold">
                  <label className="flex gap-1 items-center">All persons accounted for <div className="w-3 h-3 border border-black"></div></label>
                  <label className="flex gap-1 items-center">Tools/Equipment Checked <div className="w-3 h-3 border border-black"></div></label>
                  <label className="flex gap-1 items-center">Gas Monitors Checked & Returned <div className="w-3 h-3 border border-black"></div></label>
                  <label className="flex gap-1 items-center">Permit complete <div className="w-3 h-3 border border-black"></div></label>
                </div>
                <div className="flex p-1 font-bold">
                  <div className="flex-[4] flex items-end">
                    <span className="mr-2">Signed (Person in Control):</span>
                    <input className="flex-1 border-b border-dotted border-gray-400 bg-transparent outline-none" />
                  </div>
                  <div className="flex-[3] flex items-end justify-center gap-4">
                    <span className="mr-2">Date:</span>
                    <span className="mr-2 text-gray-500">/ /</span>
                  </div>
                  <div className="flex-[2] flex items-end">
                    <span className="mr-2">Time:</span>
                    <span className="text-gray-500">:</span>
                  </div>
                </div>
              </div>
              <div className="w-8 bg-[#444] text-white font-bold flex items-center justify-center border-l-2 border-white">
                <div className="-rotate-180 whitespace-nowrap tracking-widest text-[9px]" style={{ writingMode: 'vertical-rl' }}>EXIT</div>
              </div>
            </div>

          </div>
          </div>{/* end min-w-[600px] */}
        </div>
      </div>

      {/* ======================= PAGE 46 (Safe Work Method Statement) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 mt-8 sm:mt-12 gap-4">
              <h1 className="text-2xl sm:text-5xl font-bold leading-tight">SAFE WORK METHOD<br/>STATEMENT</h1>
              <div className="flex flex-col items-center self-start sm:self-auto">
                <span className="font-bold text-sm">SWMS #</span>
                <div className="w-24 sm:w-32 h-10 border-4 border-black"></div>
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[480px] border-collapse border border-black text-xs sm:text-sm">
                <tbody>
                  <tr>
                    <td className="border border-black p-2 w-[40%] align-top">
                      <span className="block">SWMS Name: MSMWHS217 Gas Test Atmospheres</span>
                    </td>
                    <td className="border border-black p-2 w-[30%] align-top">SWMS Created By:</td>
                    <td className="border border-black p-2 w-[30%] align-top">Date of Creation:</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 align-top h-24" colSpan="2">SWMS Summary:</td>
                    <td className="border border-black p-2 align-top">Last Reviewed Date:</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[480px] border-collapse border border-black text-xs sm:text-sm">
                <thead>
                  <tr className="text-white text-center font-bold">
                    <th className="border border-black p-2 bg-[#0070c0] w-1/2">Company / Contractor Details:</th>
                    <th className="border border-black p-2 bg-[#00b050] w-1/2">Project Details:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2 h-14 align-top">Name:</td>
                    <td className="border border-black p-2 align-top">
                      Client: Australian International Education Training<br/>T/A Safety Training Academy
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 h-10 align-top">ABN:</td>
                    <td className="border border-black p-2 align-top">Contact Name: Admin</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 h-20 align-top">Address:</td>
                    <td className="border border-black p-2 align-top">
                      <span className="block">Site Address:</span>
                      <span className="block mt-2">Unit 3/14-16 Marjorie Street Sefton NSW 2162</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 h-10 align-top">Contact Number:</td>
                    <td className="border border-black p-2 align-top">Contact Number: 1300 976 097</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 h-10 align-top">Email:</td>
                    <td className="border border-black p-2 align-top">Start Date:</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border border-black text-xs sm:text-sm">
              <div className="text-center line-through border-b border-black p-2 font-serif text-gray-500">
                How to complete this SWMS
              </div>
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {[
                  { n: '1.', title: 'CONSULT:', text: 'Consult with all persons who will be involved in the completion of the work.' },
                  { n: '2.', title: 'LIST:', text: 'List each of the steps in the task work being done.' },
                  { n: '3.', title: 'IDENTIFY:', text: 'Describe the health and safety hazards and risks arising from each step in the work.' },
                  { n: '4.', title: 'RISK ASSESSMENT:', text: 'Review the level of risk associated with each hazard listed.' },
                  { n: '5.', title: 'CONTROL:', text: 'Describe how the risks will be controlled, and describe what hazard control measures will be put in place.' },
                  { n: '6.', title: 'RESPONSIBILITY:', text: 'Allocate a person to be responsible for the hazard control measure.' },
                  { n: '7.', title: 'REVIEW:', text: 'Review the effectiveness of the control measures and apply further hazard control measures as required.' },
                ].map(({ n, title, text }) => (
                  <div key={n} className="flex gap-3">
                    <span className="font-bold shrink-0">{n}</span>
                    <div><span className="font-bold">{title}</span> {text}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ======================= PAGE 47 - Risk Analysis Matrix ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Risk analysis Matrix</h1>
            <p className="text-sm mb-6">Use this table to determine the level of risk associated with an identified hazard.</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full min-w-[520px] border-collapse border border-gray-400 text-xs sm:text-sm text-center">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2 bg-white" rowSpan="2"></th>
                    <th className="border border-gray-400 p-2 bg-white font-bold" colSpan="5">CONSEQUENCE</th>
                  </tr>
                  <tr>
                    <th className="border border-gray-400 p-2 bg-white font-normal">Insignificant</th>
                    <th className="border border-gray-400 p-2 bg-white font-normal">Minor<br/><span className="font-normal text-[10px]">First Aid Required</span></th>
                    <th className="border border-gray-400 p-2 bg-white font-normal">Moderate<br/><span className="font-normal text-[10px]">Medical Attention and time off work</span></th>
                    <th className="border border-gray-400 p-2 bg-white font-normal">Major<br/><span className="font-normal text-[10px]">Long Term Illness or Serious Injury</span></th>
                    <th className="border border-gray-400 p-2 bg-white font-normal">Severe<br/><span className="font-normal text-[10px]">Kill or cause permanent Disability or Illness</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prob: 'Almost certain', cells: ['M','H','H','VH','VH'], colors: ['#ffc000','#ff6600','#ff6600','#ff0000','#ff0000'] },
                    { prob: 'Likely',         cells: ['M','M','H','H','VH'],  colors: ['#ffc000','#ffc000','#ff6600','#ff6600','#ff0000'] },
                    { prob: 'Possible',       cells: ['L','M','H','H','VH'],  colors: ['#ffff00','#ffc000','#ff6600','#ff6600','#ff0000'] },
                    { prob: 'Unlikely',       cells: ['L','L','M','M','H'],   colors: ['#ffff00','#ffff00','#ffc000','#ffc000','#ff6600'] },
                    { prob: 'Rare',           cells: ['L','L','M','M','M'],   colors: ['#ffff00','#ffff00','#ffc000','#ffc000','#ffc000'] },
                  ].map(({ prob, cells, colors }) => (
                    <tr key={prob}>
                      <td className="border border-gray-400 p-2 font-bold text-left bg-white">{prob}</td>
                      {cells.map((c, i) => (
                        <td key={i} className="border border-gray-400 p-2 font-bold" style={{ backgroundColor: colors[i] }}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[460px] border-collapse border border-gray-400 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-white">
                    <th className="border border-gray-400 p-2 font-bold text-left w-[25%]">Risk level</th>
                    <th className="border border-gray-400 p-2 font-bold text-left">Required action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-2 font-bold text-center" style={{ backgroundColor: '#ff0000', color: 'white' }}>Very high</td>
                    <td className="border border-gray-400 p-2">The proposed task or process activity must not proceed. Steps must be taken to lower the risk level to as low as reasonably practicable using the hierarchy of risk controls.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 font-bold text-center" style={{ backgroundColor: '#ff6600', color: 'white' }}>High</td>
                    <td className="border border-gray-400 p-2">
                      The proposed activity can only proceed, provided that:
                      <ol className="list-decimal pl-5 mt-1 space-y-1">
                        <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls;</li>
                        <li>The risk controls must include those identified in legislation, Australian Standards, Codes of Practice etc.</li>
                        <li>The risk assessment has been reviewed and approved by the Supervisor and</li>
                        <li>A Safe Working Procedure or Safe Work Method has been prepared.</li>
                        <li>The supervisor must review and document the effectiveness of the implemented risk controls.</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 font-bold text-center" style={{ backgroundColor: '#ffc000' }}>Medium</td>
                    <td className="border border-gray-400 p-2">
                      The proposed task or process can proceed, provided that:
                      <ol className="list-decimal pl-5 mt-1 space-y-1">
                        <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls;</li>
                        <li>The risk assessment has been reviewed and approved by the Supervisor and</li>
                        <li>A Safe Working Procedure or Safe Work Method Statement has been prepared.</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 font-bold text-center" style={{ backgroundColor: '#ffff00' }}>Low</td>
                    <td className="border border-gray-400 p-2">Managed by local documented routine procedures which must include application of the hierarchy of controls.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 48 - SWMS Work Steps Table ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Safe Work Method Statement</h1>
            <div className="overflow-x-auto flex-1">
              <table className="w-full min-w-[560px] border-collapse border border-gray-400 text-[10px] sm:text-xs h-full">
                <thead>
                  <tr className="bg-white font-bold text-center">
                    <th className="border border-gray-400 p-2 w-[18%] align-top text-left">Work Step</th>
                    <th className="border border-gray-400 p-2 w-[20%] align-top">Associated/identified Hazards</th>
                    <th className="border border-gray-400 p-2 w-[10%] align-top">Risk Level (L, M, H, VH)</th>
                    <th className="border border-gray-400 p-2 w-[22%] align-top">Hazard Controls</th>
                    <th className="border border-gray-400 p-2 w-[13%] align-top">Revised Risk Level (L, M, H, VH)</th>
                    <th className="border border-gray-400 p-2 w-[17%] align-top">Person Responsible</th>
                  </tr>
                  <tr className="text-[9px] sm:text-[10px] text-gray-500">
                    <td className="border border-gray-400 p-1 align-top">Work your way through each step in the work process, giving a brief description of what is required at each stage.</td>
                    <td className="border border-gray-400 p-1 align-top">What hazards can be identified for this step?</td>
                    <td className="border border-gray-400 p-1 align-top">What is the risk level?</td>
                    <td className="border border-gray-400 p-1 align-top">What hazards controls will be put into place to deal with the identified hazards for this step?</td>
                    <td className="border border-gray-400 p-1 align-top">Has the risk been reduced?</td>
                    <td className="border border-gray-400 p-1 align-top">Who is responsible for carrying out the work and maintaining the hazard controls?</td>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4].map(i => (
                    <tr key={i} className="h-[160px]">
                      <td className="border border-gray-400 p-1 align-top"><textarea className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs" /></td>
                      <td className="border border-gray-400 p-1 align-top"><textarea className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs" /></td>
                      <td className="border border-gray-400 p-1 align-top"><textarea className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs" /></td>
                      <td className="border border-gray-400 p-1 align-top"><textarea className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs" /></td>
                      <td className="border border-gray-400 p-1 align-top"><textarea className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs" /></td>
                      <td className="border border-gray-400 p-1 align-top"><textarea className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 49 - SWMS Additional Sections ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-10 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-400 text-xs sm:text-sm flex-1">
              {[
                {
                  left: { label: 'Training/Qualifications Required to carry out work:', extra: <p className="mt-8">Are all workers adequately trained and qualified? &nbsp;&nbsp; Yes &nbsp;&nbsp; No</p> },
                  right: { label: 'PPE Required to carry out work:' }
                },
                {
                  left: { label: 'Legislation, Australian Standards & Codes of Practice relevant to work (where applicable):' },
                  right: { label: 'Equipment Required to carry out work:' }
                },
                {
                  left: { label: 'Environmental Statement:' },
                  right: { label: 'Safety Checks Required prior to commencement of work:' }
                },
                {
                  left: { label: 'Coordination with other trades:' },
                  right: { label: 'Permits required for commencement of work:', extra: <p className="mt-8">Have these permits been acquired? &nbsp;&nbsp; Yes &nbsp;&nbsp; No</p> }
                },
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div className="border border-gray-400 p-3 min-h-[180px] flex flex-col">
                    <p className="font-semibold mb-2">{row.left.label}</p>
                    {row.left.extra}
                  </div>
                  <div className="border border-gray-400 p-3 min-h-[180px] flex flex-col">
                    <p className="font-semibold mb-2">{row.right.label}</p>
                    {row.right.extra}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 50 - Personnel Signoff ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Personnel Signoff</h2>
              <p className="text-xs sm:text-sm mb-1">All personnel required to carry out this task need to be listed below.</p>
              <p className="text-xs sm:text-sm mb-4">By signing this SWMS, each person declares that they have carefully read the SWMS and that they understand their responsibilities and requirements to complete the work.</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px] border-collapse border border-gray-400 text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 p-2 text-left font-bold w-[30%]">Name (please print)</th>
                      <th className="border border-gray-400 p-2 text-left font-bold w-[25%]">Position / Qualification</th>
                      <th className="border border-gray-400 p-2 text-left font-bold w-[25%]">Signature</th>
                      <th className="border border-gray-400 p-2 text-left font-bold w-[20%]">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3].map(i => (
                      <tr key={i} className="h-16">
                        <td className="border border-gray-400 p-1"><input type="text" className="w-full bg-transparent outline-none" /></td>
                        <td className="border border-gray-400 p-1"><input type="text" className="w-full bg-transparent outline-none" /></td>
                        <td className="border border-gray-400 p-1"><input type="text" className="w-full bg-transparent outline-none" /></td>
                        <td className="border border-gray-400 p-1"><input type="text" className="w-full bg-transparent outline-none" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="font-bold text-sm sm:text-base mb-3">Senior management Signoff:</p>
              <p className="text-xs sm:text-sm mb-2">Does this SWMS meet the necessary safety requirements? &nbsp;&nbsp; Yes &nbsp;&nbsp; No</p>
              <p className="text-xs sm:text-sm mb-4">Does this SWMS require review? &nbsp;&nbsp; Yes &nbsp;&nbsp; No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Review Date: ___________</p>
              <p className="text-xs sm:text-sm italic mb-3">(Checklist of Items that may be required for the job activity)</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px] border-collapse border border-gray-400 text-xs sm:text-sm">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 p-2 font-bold w-[30%] align-top">CERTIFICATES</td>
                      <td className="border border-gray-400 p-2">
                        Enter and Work in Confined Spaces – RIIWHS202E<br/>
                        Nationally recognised unit of competency
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2 font-bold align-top">CODES OF PRACTICE / LEGISLATION APPLICABLE</td>
                      <td className="border border-gray-400 p-2">
                        WHS Act 2011 & WHS Regulations 2011<br/>
                        AS 2865–2009: Confined spaces Australian Standards<br/>
                        Managing the Risk of Falls at Workplaces Code of Practice 2011<br/>
                        AS 1319-1994 Safety signs for the occupational environment
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2 font-bold align-top">PLANT & EQUIPMENT</td>
                      <td className="border border-gray-400 p-2">N/A</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2 font-bold align-top">MAINTENANCE CHECKS</td>
                      <td className="border border-gray-400 p-2">
                        AS/NZS 1891.1 Part 1: Safety Belts and Harnesses.<br/>
                        AS/NZS 1715: 2009 Selection, use and maintenance of respiratory protective equipment.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2 font-bold align-middle">PERSONAL PROTECTIVE EQUIPMENT</td>
                      <td className="border border-gray-400 p-3">
                        <div className="flex flex-row flex-wrap justify-start items-start gap-2 sm:gap-4">
                          {[
                            { src: ppe1Image, label: 'SAFETY FOOT\nPROTECTION\nMUST BE WORN' },
                            { src: ppe2Image, label: 'BREATHING APPARATUS\nMUST BE WORN IN\nTHE AREA' },
                            { src: ppe3Image, label: 'HEAD PROTECTION\nMUST BE WORN IN\nTHIS AREA' },
                            { src: ppe4Image, label: 'HIGH VISIBILITY\nSAFETY VEST\nMUST BE WORN' },
                            { src: ppe5Image, label: 'SAFETY\nHARNESS\nMUST BE\nWORN' },
                          ].map(({ src, label }) => (
                            <div
                              key={label}
                              className="flex flex-col items-center text-center"
                              style={{ width: '70px' }}
                            >
                              <div className="w-[60px] h-[60px] flex items-center justify-center">
                                <img
                                  src={src}
                                  alt={label}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span
                                className="mt-1 font-bold text-black leading-tight text-center"
                                style={{ fontSize: '7px', whiteSpace: 'pre-line' }}
                              >
                                {label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-400 p-2 font-bold align-top">COUNCIL / POWER AUTHORITY PERMITS</td>
                      <td className="border border-gray-400 p-2 text-center">Check Local Requirements</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= PAGE 51 - Hazard Reference Table ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-10 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-6 mb-6">
              <img src={logoImage} alt="STA Logo" className="w-[90px] sm:w-[110px] h-auto object-contain" />
              <div>
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>
            <p className="text-[#ff0000] font-semibold text-sm mb-4">The student may refer to the following:</p>

            <div className="overflow-x-auto flex-1">
              <table className="w-full min-w-[480px] border-collapse border border-gray-300 text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 text-left text-[#ff0000] font-bold w-[28%]">Hazard</th>
                    <th className="border border-gray-300 p-2 text-left text-[#ff0000] font-bold w-[12%]">Initial Risk Level</th>
                    <th className="border border-gray-300 p-2 text-left text-[#ff0000] font-bold w-[42%]">Hazard Controls</th>
                    <th className="border border-gray-300 p-2 text-left text-[#ff0000] font-bold w-[18%]">Revised Risk Level</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Flammable Gas Accumulation','H','Use of intrinsically safe gas monitors, adequate ventilation, hot work permits','L'],
                    ['Toxic Gas Exposure','VH','Calibration of gas monitors, PPE (respirators), training on exposure limits','M'],
                    ['Confined Space Entry/Egress','H','Confined space training, entry/exit procedures, and emergency drills','M'],
                    ['Slip, Trips, and Falls','M','Proper lighting, non-slip surfaces, guardrails, use of safety harnesses','L'],
                    ['Poor Visibility','M','Adequate lighting solutions, use of reflective clothing, flashlights','L'],
                    ['Communication Failure','M','Two-way radios, established check-in/check-out procedures, backup communication devices','L'],
                    ['Rescue and Recovery','H','Training for rescue operations, availability of rescue equipment, regular rescue drills','M'],
                    ['Physical Hazard from Equipment','M','Regular maintenance, inspection routines, adequate training on machinery','L'],
                    ['Flammability/Explosivity','H','Intrinsically safe tools, gas monitoring, no-smoking policies, controlled ignition sources.','L'],
                    ['Asphyxiation','H','Oxygen level monitoring, ventilation, use of breathable air systems.','L'],
                    ['Irritation/Corrosion','M','PPE such as gloves and goggles, proper storage and handling procedures.','L'],
                    ['Oxygen Deficiency/Enrichment','H','Monitoring of oxygen levels, ventilation systems, use of oxygen sensors.','L'],
                    ['Chemical Burns','M','Use of resistant PPE, emergency eyewash stations, and skin washing facilities.','L'],
                    ['Carcinogenicity','VH','Use of PPE, engineering controls to minimize exposure, substitution with safer chemicals, health monitoring.','M'],
                    ['Environmental Hazards (Heavy Gases)','H','Ventilation, gas monitoring, PPE, and training on the recognition of environmental risks.','L'],
                  ].map(([hazard, initial, controls, revised], i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 p-2 text-[#ff0000]">{hazard}</td>
                      <td className="border border-gray-300 p-2 text-[#ff0000] text-center font-bold">{initial}</td>
                      <td className="border border-gray-300 p-2">{controls}</td>
                      <td className="border border-gray-300 p-2 text-[#ff0000] text-center font-bold">{revised}</td>
                    </tr>
                  ))}
                  <tr className="h-10"><td colSpan="4" className="border border-gray-300"></td></tr>
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center">
              <p className="font-bold">Page 24 of 29</p>
              <p>231103</p>
              <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
              <p>RTO ID 45234</p>
            </div>
          </div>
        </div>
      </div>

    {/* ======================= PAGE 52 & 53 - Observation Checklist (reusable component) ======================= */}
    {[{ page: '20', footer: 'Page 20 of 24' }, { page: '22', footer: 'Page 22 of 24' }].map(({ page, footer }) => (
      <div key={page} className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-10 relative flex flex-col min-h-[1100px] border border-gray-800">
          <div className="flex-1 flex flex-col gap-4">

            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-2 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[80px] sm:w-[100px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Title row */}
            <div className="bg-[#b4c6e7] border border-gray-400 text-center py-2 px-3 text-xs sm:text-sm font-semibold mt-8">
              Assessment 2 – Practical Demonstration<br/>Observation Checklist
            </div>

            {/* Student / Assessor / Date */}
            <div className="border border-gray-400 text-xs sm:text-sm">
              <div className="border-b border-gray-400 p-2 flex items-center gap-2">
                <span className="font-semibold whitespace-nowrap">Student name:</span>
                <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-2 flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                  <span className="font-semibold whitespace-nowrap">Assessor name:</span>
                  <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
                </div>
                <div className="p-2 flex items-center gap-2 sm:w-[220px]">
                  <span className="font-semibold whitespace-nowrap">Date:</span>
                  <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
                </div>
              </div>
            </div>

            {/* Observable Behaviours Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse border border-gray-400 text-[10px] sm:text-xs">
                <thead>
                  <tr className="bg-[#b4c6e7]">
                    <th className="border border-gray-400 p-2 text-left font-bold w-[58%]">Observable Behaviours</th>
                    <th className="border border-gray-400 p-2 text-center font-bold w-[14%]">Yes/No</th>
                    <th className="border border-gray-400 p-2 text-center font-bold w-[28%]">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'The student correctly found out the type of gas/atmosphere to be tested during toolbox talk.',
                    'The student accurately selected and calibrated equipment in accordance with procedures.',
                    'The student appropriately ascertained the gas testing sampling points for the task',
                    'The student safely identified hazards from possible atmosphere contaminants.',
                    'The student appropriately implemented hazard control measures and used the correct personal protective equipment (PPE).',
                    'The student correctly used gas testing equipment to test gas as required.',
                    'The student accurately interpreted and reported readings.',
                    'The student consistently monitored gas on an ongoing basis as required.',
                    'The student correctly conducted bump test with compressed GAS N.O.S',
                    'The student immediately took required action if readings were unacceptable and effectively communicated required actions to be taken to appropriate personnel.',
                    'The student meticulously cleaned and maintained gas testing equipment in accordance with procedures.',
                    'The student carefully inspected and fault-found monitoring equipment in accordance with procedures.',
                    'The student responsibly returned gas testing equipment to the required location and in the required condition.',
                    'The student diligently maintained records of tests and results in accordance with procedures.',
                  ].map((behaviour, i) => (
                    <tr key={i} className="border-b border-gray-400">
                      <td className="border border-gray-400 p-2">{behaviour}</td>
                      <td className="border border-gray-400 p-2 text-center">
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="checkbox" className="w-3 h-3" /><span>Yes</span>
                        </label>{' '}
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="checkbox" className="w-3 h-3" /><span>No</span>
                        </label>
                      </td>
                      <td className="border border-gray-400 p-2">
                        <textarea className="w-full min-h-[30px] bg-transparent outline-none resize-none text-[10px]" />
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white font-bold border-t-2 border-gray-500">
                    <td className="border border-gray-400 p-2 font-bold text-[10px] sm:text-xs">Were all the observable behaviours listed above met?(tick)</td>
                    <td className="border border-gray-400 p-2 text-center">
                      <label className="inline-flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="w-3 h-3" /><span>Yes</span>
                      </label>{' '}
                      <label className="inline-flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="w-3 h-3" /><span>No</span>
                      </label>
                    </td>
                    <td className="border border-gray-400 p-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Feedback */}
            <div className="mt-2">
              <p className="font-bold text-sm mb-2">Feedback to the student</p>
              <textarea className="w-full min-h-[80px] border border-gray-300 bg-transparent outline-none resize-none p-2 text-xs" />
            </div>

            {/* Outcome row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-400 pt-2 mt-2 gap-2">
              <p className="font-bold text-sm">Outcome</p>
              <p className="text-xs sm:text-sm font-bold">Satisfactory / Not satisfactory (Circle)</p>
            </div>

            {/* Assessor sign table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[380px] border-collapse border border-gray-400 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#b4c6e7]">
                    <th className="border border-gray-400 p-2 text-left font-bold w-[33%]">Assessor name</th>
                    <th className="border border-gray-400 p-2 text-left font-bold w-[40%]">Assessor signature</th>
                    <th className="border border-gray-400 p-2 text-left font-bold w-[27%]">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-14">
                    <td className="border border-gray-400 p-2"><input type="text" className="w-full bg-transparent outline-none" /></td>
                    <td className="border border-gray-400 p-2"><input type="text" className="w-full bg-transparent outline-none" /></td>
                    <td className="border border-gray-400 p-2"><input type="text" className="w-full bg-transparent outline-none" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center">
            <p className="font-bold">{footer}</p>
            <p>231103</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>
        </div>
      </div>
    ))}

    {/* ======================= PAGE 54 - Altair 4X Calibration Instructions ======================= */}
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
      <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
        <div className="flex-1 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-center gap-6 mb-6 relative">
            <div className="absolute left-0 top-0">
              <img src={logoImage} alt="STA Logo" className="w-[80px] sm:w-[100px] h-auto object-contain" />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
              <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-center mt-8 mb-8">Altair 4X Calibration Instructions</h2>

          <ol className="space-y-5 text-sm sm:text-base list-decimal pl-6">
            <li>Press power button to start the unit</li>
            <li>Allow unit to advance through startup menu (normal measuring mode)</li>
            <li>Connect the regulator onto the calibration bottle (make sure the regulator is shut/turned off) attach the calibration cap and hose on to the regulator</li>
            <li>Press arrow up button and hold when "FAS" is flashing on screen</li>
            <li>Release arrow up button when "zero CAL" flashing on screen</li>
            <li>Press power button to complete zero calibration of the unit</li>
            <li>Fit calibration cup to unit ensuring fit when "span CAL" flashing</li>
            <li>Press power button to confirm span calibration</li>
            <li>Turn on calibration gas</li>
            <li>Turn off calibration gas and remove calibration cap when unit "beeps and flashes" three times and a small tick on the upper right hand corner of the screen to confirm that calibration is complete</li>
            <li>The unit will then return to normal measuring mode and the tick will remain on screen for 24hrs</li>
            <li>As the unit was in calibration mode there are no readings in the peak memory to be cleared</li>
          </ol>

        </div>

        {/* Footer */}
        <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center text-center">
          <p className="font-bold">Page 21 of 24</p>
          <p>231103</p>
          <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
          <p>RTO ID 45234</p>
        </div>
      </div>
    </div>

    {/* ======================= PAGE 55 - Altair 4X Bump Test Instructions ======================= */}
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
      <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
        <div className="flex-1 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-center gap-6 mb-6 relative">
            <div className="absolute left-0 top-0">
              <img src={logoImage} alt="STA Logo" className="w-[80px] sm:w-[100px] h-auto object-contain" />
            </div>
            <div className="text-center">
              <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
              <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-center mt-8 mb-8">Altair 4X Bump Test Instructions</h2>

          <ol className="space-y-5 text-sm sm:text-base list-decimal pl-6">
            <li>Press power button to start the unit</li>
            <li>Allow unit to advance through startup menu</li>
            <li>Press power button when "FAS" is flashing on screen to complete fresh air sampling mode</li>
            <li>Connect calibration cup to calibration gas bottle</li>
            <li>Press arrow down button once to advance to bump function.</li>
            <li>Fit calibration cup to unit ensuring fit</li>
            <li>Press power button to start bump test mode</li>
            <li>Turn calibration BUMP PASS" on screen</li>
            <li>Turn off calibration gas and remove calibration cup</li>
            <li>Allow the unit to return to normal readings on screen</li>
            <li>Press arrow down button twice then press arrow up button once to reset peak readings</li>
            <li>Press arrow down button once then press arrow up too reset min peak readings</li>
            <li>Allow time (20 seconds) for unit to return to home screen</li>
          </ol>

          <p className="mt-8 font-bold text-sm sm:text-base pl-6">Unit is now ready to operate</p>

        </div>

        {/* Footer */}
        <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-8 flex flex-col items-center text-center">
          <p className="font-bold">Page 24 of 24</p>
          <p>231103</p>
          <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
          <p>RTO ID 45234</p>
        </div>
      </div>
    </div>

    {/* ======================= PAGE 56 - Summative Assessment 2: Assessment Review ======================= */}
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
      <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
        <div className="flex-1 flex flex-col justify-center">

          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">Summative Assessment 2: Assessment Review</h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse border border-gray-400 text-xs sm:text-sm">
              <tbody>

                {/* Row 1 - Evidence */}
                <tr>
                  <td className="border border-gray-400 p-3 font-bold align-top w-[30%]">
                    Have the following evidence been attached
                  </td>
                  <td className="border border-gray-400 p-3 align-top w-[35%]">
                    <p>Student identifier</p>
                    <p>Completed Observation Checklist</p>
                  </td>
                  <td className="border border-gray-400 p-3 align-top w-[35%]">
                    <p>Completed SWMS (Appendix A)</p>
                    <p>Completed Work at Heights Rescue Plan (Appendix B)</p>
                    <p>Completed Safety Harness Inspection Checklist (Appendix C)</p>
                  </td>
                </tr>

                {/* Row 2 - Outcome */}
                <tr>
                  <td className="border border-gray-400 p-3 font-bold align-middle">
                    Summative Assessment 2 outcome:
                  </td>
                  <td className="border border-gray-400 p-4 text-center">
                    <label className="inline-flex items-center gap-2 cursor-pointer font-bold">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Satisfactory</span>
                    </label>
                  </td>
                  <td className="border border-gray-400 p-4 text-center">
                    <label className="inline-flex items-center gap-2 cursor-pointer font-bold">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Not satisfactory</span>
                    </label>
                  </td>
                </tr>

                {/* Row 3 - Feedback */}
                <tr>
                  <td className="border border-gray-400 p-3 font-bold align-top">Feedback</td>
                  <td className="border border-gray-400 p-2" colSpan={2}>
                    <textarea className="w-full min-h-[80px] bg-transparent outline-none resize-none text-xs sm:text-sm" />
                  </td>
                </tr>

                {/* Row 4 - Assessor Signature */}
                <tr>
                  <td className="border border-gray-400 p-3 font-bold">Assessor signature:</td>
                  <td className="border border-gray-400 p-2 h-12" colSpan={2}>
                    <input type="text" className="w-full bg-transparent outline-none" />
                  </td>
                </tr>

                {/* Row 5 - Assessor Name */}
                <tr>
                  <td className="border border-gray-400 p-3 font-bold">Assessor name:</td>
                  <td className="border border-gray-400 p-2 h-12" colSpan={2}>
                    <input type="text" className="w-full bg-transparent outline-none" />
                  </td>
                </tr>

                {/* Row 6 - Date */}
                <tr>
                  <td className="border border-gray-400 p-3 font-bold">Date:</td>
                  <td className="border border-gray-400 p-2 h-12" colSpan={2}>
                    <input type="text" className="w-full bg-transparent outline-none" />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>

    {/* ======================= PAGE 57 - Summary of Assessment ======================= */}
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
      <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">SUMMARY OF ASSESSMENT</h2>

            {/* Top warning/description block */}
            <div className="border border-gray-400 p-3 mb-6 bg-gray-50 text-xs sm:text-sm text-justify leading-relaxed">
              This form is to be completed by the assessor and used a final record of student competency being awarded by the trainer. All student submissions including any associated checklists (outlined below) are to be attached to this cover sheet before placing on the student’s file. Student results are not to be entered onto the Student Database unless all relevant paperwork is completed and attached to this form.
            </div>

            {/* Core details table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[500px] border-collapse border border-gray-400 text-xs sm:text-sm">
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-2 font-semibold bg-[#d9e1f2] w-[35%]">Student Name:</td>
                    <td className="border border-gray-400 p-2">
                      <input type="text" className="w-full bg-transparent outline-none" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 font-semibold bg-[#d9e1f2]">Final Completion Date:</td>
                    <td className="border border-gray-400 p-2">
                      <input type="text" className="w-full bg-transparent outline-none" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 font-semibold bg-[#d9e1f2]">Assessor Name:</td>
                    <td className="border border-gray-400 p-2">
                      <input type="text" className="w-full bg-transparent outline-none" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Documentation attachment checklists */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[500px] border-collapse border border-gray-400 text-xs sm:text-sm text-center">
                <thead>
                  <tr className="bg-[#d9e1f2] font-semibold">
                    <th className="border border-gray-400 p-2 text-left w-[35%]">Please attach the following documentation to this form</th>
                    <th className="border border-gray-400 p-2" colSpan={2}>Indicate Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-2 text-left font-semibold">Assessment 1</td>
                    <td className="border border-gray-400 p-2 text-left w-[32.5%]">Written Questions</td>
                    <td className="border border-gray-400 p-2 w-[32.5%]">
                      <div className="flex justify-center gap-4">
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="radio" name="assessment1_result" className="w-3.5 h-3.5" /> <span>Satisfactory</span>
                        </label>
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="radio" name="assessment1_result" className="w-3.5 h-3.5" /> <span>Not Satisfactory</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 text-left font-semibold">Assessment 2</td>
                    <td className="border border-gray-400 p-2 text-left">Practical Demonstration</td>
                    <td className="border border-gray-400 p-2">
                      <div className="flex justify-center gap-4">
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="radio" name="assessment2_result" className="w-3.5 h-3.5" /> <span>Satisfactory</span>
                        </label>
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="radio" name="assessment2_result" className="w-3.5 h-3.5" /> <span>Not Satisfactory</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2 text-left font-semibold bg-[#d9e1f2]" colSpan={2}>Final Assessment Result for this unit</td>
                    <td className="border border-gray-400 p-2 font-semibold">
                      <div className="flex justify-center gap-4">
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="radio" name="final_result" className="w-3.5 h-3.5 font-bold" /> <span>Competent</span>
                        </label>
                        <label className="inline-flex items-center gap-1 cursor-pointer">
                          <input type="radio" name="final_result" className="w-3.5 h-3.5 font-bold" /> <span>Not Competent</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comments Box */}
            <div className="border border-gray-400 p-3 mb-6">
              <p className="font-semibold text-xs sm:text-sm mb-2">Comments:</p>
              <textarea className="w-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm" />
            </div>

            {/* Student checkboxes */}
            <div className="border border-gray-400 p-3 mb-6 text-xs sm:text-sm space-y-2">
              <p className="font-bold">Student</p>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 shrink-0" />
                <span>My performance in this unit has been discussed and explained to me.</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 shrink-0" />
                <span>I would like to appeal this assessment decision.</span>
              </label>
            </div>

            {/* Signature & Date */}
            <div className="border border-gray-400 text-xs sm:text-sm mb-6 flex flex-col sm:flex-row">
              <div className="flex-1 p-3 flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-gray-400">
                <span className="font-semibold">Student's signature:</span>
                <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
              </div>
              <div className="p-3 flex items-center gap-2 sm:w-[220px]">
                <span className="font-semibold">Date:</span>
                <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
              </div>
            </div>

            {/* Assessor certification */}
            <div className="border border-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row">
              <div className="flex-1 p-3 leading-relaxed border-b sm:border-b-0 sm:border-r border-gray-400">
                <span className="font-bold">Assessor:</span> I hereby certify that this student has been assessed by me and that the assessment has been carried out according to the required assessment procedures.
              </div>
              <div className="p-3 sm:w-[320px] flex flex-col justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Signature:</span>
                  <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Date:</span>
                  <input type="text" className="flex-1 bg-transparent outline-none border-b border-dotted border-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 mt-4">Administrative use only</p>
        </div>
      </div>
    </div>

    {/* ======================= PAGE 58 - Participant Course Completion Evaluation (Part 1) ======================= */}
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
      <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-10 relative flex flex-col min-h-[1100px] border border-gray-800">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[80px] sm:w-[100px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-center mt-6 mb-4">Participant Course Completion Evaluation</h2>

            <div className="text-xs sm:text-sm space-y-3 mb-6 text-justify">
              <p className="font-bold">Important instructions</p>
              <p>Please tell us about your training. Your feedback plays an important role in developing the quality of your education. In this questionnaire, the term ‘training’ refers to learning experiences with your training organisation. The term ‘trainer’ refers to trainers, teachers, lecturers or instructors from your training organisation.</p>
              <p>Provide one response to each item on the form. Complete using a black or blue pen. Print neatly in CAPITAL letters, place a clear “X” inside each box.</p>
              <p>Leave the box blank if the statement does not apply. If you want to change your answer, fill in the entire box and mark the correct box with an ‘X’.</p>
            </div>

            {/* Example Box */}
            <div className="border border-gray-400 p-3 mb-6 bg-gray-50 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <span className="font-semibold">Example:</span>
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs"></div>
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs">X</div>
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs"></div>
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-black font-bold text-xs"></div>
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs">X</div>
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs"></div>
                  <div className="w-5 h-5 border border-gray-600 flex items-center justify-center bg-white font-bold text-xs"></div>
                </div>
              </div>
            </div>

            {/* More instructions */}
            <div className="text-xs sm:text-sm space-y-2 mb-6">
              <p><span className="font-bold italic">Instructions:</span> please indicate how much you agree with the following statements.</p>
              <p>This response can be completed and submitted anonymously, however this will restrict our ability to provide focused or remedial improvements in your particular situation.</p>
            </div>

            {/* Trainer & Date row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2 flex-1">
                <span>Trainer:</span>
                <input type="text" className="flex-1 bg-transparent outline-none border-b border-gray-400" />
              </div>
              <div className="flex items-center gap-2 sm:w-[240px]">
                <span>Date :</span>
                <input type="text" className="flex-1 bg-transparent outline-none border-b border-gray-400" />
              </div>
            </div>

            {/* Table Part 1 */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse border border-gray-400 text-xs text-left">
                <thead>
                  <tr className="bg-gray-100 text-center font-bold">
                    <th className="border border-gray-400 p-2 text-left w-[52%]">Please tick the appropriate response.</th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Strongly<br/>Disagree</div>
                    </th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Disagree</div>
                    </th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Agree</div>
                    </th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Strongly<br/>Agree</div>
                    </th>
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
                  ].map((statement, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="border border-gray-400 p-2 font-normal">
                        <span className="font-semibold mr-1.5">{idx + 1}.</span> {statement}
                      </td>
                      {[1, 2, 3, 4].map(val => (
                        <td key={val} className="border border-gray-400 p-1.5 text-center">
                          <label className="flex items-center justify-center cursor-pointer h-full">
                            <input type="radio" name={`eval_part1_${idx}`} className="sr-only peer" />
                            <div className="w-4 h-4 border border-gray-400 flex items-center justify-center bg-white peer-checked:bg-gray-100 font-bold text-[10px] text-black">
                              <span className="hidden peer-checked:inline">X</span>
                            </div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[9px] sm:text-[10px] text-black mt-8 pt-6 border-t border-gray-300 flex flex-col items-center text-center">
            <p>Australian International Education and Training Pty Ltd   T/A   Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162   (ABN: 93613701527)   Ph:1300 976 097   email: info@aietcollege.edu.au</p>
            <div className="flex justify-between w-full mt-2 font-semibold text-[8px] sm:text-[9px]">
              <span>Issue Date : 230831</span>
              <span>Page 3 of 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ======================= PAGE 59 - Participant Course Completion Evaluation (Part 2) ======================= */}
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
      <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-10 relative flex flex-col min-h-[1100px] border border-gray-800">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-center gap-6 mb-6 relative">
              <div className="absolute left-0 top-0">
                <img src={logoImage} alt="STA Logo" className="w-[80px] sm:w-[100px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">Safety Training Academy</p>
                <p className="font-bold text-sm sm:text-base">RTO ID 45234</p>
              </div>
            </div>

            {/* Table Part 2 */}
            <div className="overflow-x-auto mt-6 mb-6">
              <table className="w-full min-w-[560px] border-collapse border border-gray-400 text-xs text-left">
                <thead>
                  <tr className="bg-gray-100 text-center font-bold">
                    <th className="border border-gray-400 p-2 text-left w-[52%]">Please tick the appropriate response.</th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Strongly<br/>Disagree</div>
                    </th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Disagree</div>
                    </th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Agree</div>
                    </th>
                    <th className="border border-gray-400 p-1 w-[12%] text-center vertical-text text-[9px] uppercase font-bold tracking-wider leading-none">
                      <div className="w-full text-center">Strongly<br/>Agree</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
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
                    { id: 36, text: "The RTO supported my efforts to learn and complete this qualification", isGrey: true },
                    { id: 37, text: "The RTO’s pre enrolment information was clear and easy to understand", isGrey: true },
                    { id: 38, text: "The RTO enrolment process was quick and easy to complete", isGrey: true },
                    { id: 39, text: "The RTO accommodated my special needs", isGrey: true },
                    { id: 40, text: "The RTO was receptive to all my enquires", isGrey: true }
                  ].map((item, idx) => (
                    <tr key={item.id} className={`${item.isGrey ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`}>
                      <td className="border border-gray-400 p-2">
                        <span className="font-semibold mr-1.5">{item.id}.</span> {item.text}
                      </td>
                      {[1, 2, 3, 4].map(val => (
                        <td key={val} className="border border-gray-400 p-1.5 text-center">
                          <label className="flex items-center justify-center cursor-pointer h-full">
                            <input type="radio" name={`eval_part2_${idx}`} className="sr-only peer" />
                            <div className="w-4 h-4 border border-gray-400 flex items-center justify-center bg-white peer-checked:bg-gray-100 font-bold text-[10px] text-black">
                              <span className="hidden peer-checked:inline">X</span>
                            </div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comment sections */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <p className="font-semibold mb-2">Please use this space to make any additional comments regarding the Training and Assessment processes:</p>
                <textarea className="w-full min-h-[70px] bg-transparent outline-none resize-none border-b border-dotted border-gray-400" />
                <textarea className="w-full min-h-[30px] bg-transparent outline-none resize-none border-b border-dotted border-gray-400" />
              </div>
              <div>
                <p className="font-semibold mb-2">And comments on client services:</p>
                <textarea className="w-full min-h-[70px] bg-transparent outline-none resize-none border-b border-dotted border-gray-400" />
                <textarea className="w-full min-h-[30px] bg-transparent outline-none resize-none border-b border-dotted border-gray-400" />
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-[9px] sm:text-[10px] text-black mt-8 pt-6 border-t border-gray-300 flex flex-col items-center text-center">
            <p>Australian International Education and Training Pty Ltd   T/A   Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162   (ABN: 93613701527)   Ph:1300 976 097   email: info@aietcollege.edu.au</p>
            <div className="flex justify-between w-full mt-2 font-semibold text-[8px] sm:text-[9px]">
              <span>Issue Date : 230831</span>
              <span>Page 4 of 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
