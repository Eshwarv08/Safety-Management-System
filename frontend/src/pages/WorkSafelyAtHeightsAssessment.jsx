import React, { useState } from 'react';
import logoImage from '../img/logo.png';
import logoIconImage from '../img/logoicon.png';
import { coverImage, ppeSignImage } from '../img/question5';
import ppeFootwear from '../img/question4/personal-prodective-equipment-1.png';
import ppeHead from '../img/question4/personal-prodective-equipment-3.png';
import ppeVest from '../img/question4/personal-prodective-equipment-4.png';
import ppeHarness from '../img/question4/personal-prodective-equipment-5.png';

export default function WorkSafelyAtHeightsAssessment() {
  const [llnOutcome, setLlnOutcome] = useState('');
  const [emergencyPermission, setEmergencyPermission] = useState('');
  const [gender, setGender] = useState('');
  const [selectedTitles, setSelectedTitles] = useState({});

  const handleTitleChange = (title) => {
    setSelectedTitles(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="flex flex-col bg-gray-100 font-sans text-black">
      
      {/* ======================= PAGE 1 (Cover Page) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-6 sm:p-12 relative flex flex-col min-h-[1100px] border border-black">
          <div className="flex-1 flex flex-col mt-2">
            {/* Header Section (Logo) */}
            <div className="w-full flex justify-center mb-8 sm:mb-10">
              <img 
                src={logoImage} 
                alt="STA Safety Training Academy Logo" 
                className="w-full max-w-[320px] sm:max-w-[420px] h-auto object-contain"
              />
            </div>

            {/* Title Section */}
            <div className="text-center mb-4">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
                Work Safely at Heights
              </h1>
            </div>

            {/* Central Image (Illustration with RIIWHS204E) */}
            <div className="flex justify-center mb-8 flex-1 items-center">
              <img 
                src={coverImage} 
                alt="Work Safely at Heights - RIIWHS204E" 
                className="w-full max-w-[440px] sm:max-w-[480px] h-auto object-contain"
              />
            </div>

            {/* Form Table Section */}
            <div className="w-full mb-8 overflow-hidden">
              <table className="w-full text-xs sm:text-sm md:text-base border-collapse border border-gray-500">
                <tbody>
                  {/* Name Row */}
                  <tr>
                    <td className="w-[25%] p-2.5 sm:p-3.5 font-bold border border-gray-500 bg-white text-center sm:text-left align-middle text-sm sm:text-base">
                      Name:
                    </td>
                    <td className="w-[37.5%] p-2.5 sm:p-3 border border-gray-500 align-middle">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full outline-none bg-transparent text-center text-gray-800 placeholder-gray-300"
                      />
                    </td>
                    <td className="w-[37.5%] p-2.5 sm:p-3 border border-gray-500 align-middle">
                      <input 
                        type="text" 
                        placeholder="Family Name" 
                        className="w-full outline-none bg-transparent text-center text-gray-800 placeholder-gray-300"
                      />
                    </td>
                  </tr>

                  {/* Mobile No. Row */}
                  <tr>
                    <td className="p-2.5 sm:p-3.5 font-bold border border-gray-500 bg-white text-center sm:text-left align-middle text-sm sm:text-base">
                      Mobile No.
                    </td>
                    <td colSpan={2} className="p-2.5 sm:p-3 border border-gray-500 align-middle">
                      <input 
                        type="text" 
                        className="w-full outline-none bg-transparent text-gray-800"
                      />
                    </td>
                  </tr>

                  {/* Course Name Row */}
                  <tr>
                    <td className="p-2.5 sm:p-3.5 font-bold border border-gray-500 bg-white text-center sm:text-left align-middle text-sm sm:text-base">
                      Course Name:
                    </td>
                    <td colSpan={2} className="p-2.5 sm:p-3.5 font-bold border border-gray-500 text-center align-middle text-sm sm:text-base">
                      Work Safely at Heights - RIIWHS204E
                    </td>
                  </tr>

                  {/* Enrolment Date Row */}
                  <tr>
                    <td className="p-2.5 sm:p-3.5 font-bold border border-gray-500 bg-white text-center sm:text-left align-middle text-sm sm:text-base">
                      Enrolment Date:
                    </td>
                    <td colSpan={2} className="p-2.5 sm:p-3 border border-gray-500 text-center align-middle">
                      <input 
                        type="text" 
                        placeholder="DD / MM / YYYY" 
                        className="w-full outline-none bg-transparent text-center text-gray-800 placeholder-gray-300 font-medium"
                      />
                    </td>
                  </tr>

                  {/* USI Row */}
                  <tr>
                    <td className="p-2.5 sm:p-3.5 font-bold border border-gray-500 bg-white text-center sm:text-left align-middle text-sm sm:text-base">
                      USI
                    </td>
                    <td colSpan={2} className="p-2.5 sm:p-3 border border-gray-500 align-middle">
                      <input 
                        type="text" 
                        className="w-full outline-none bg-transparent text-gray-800"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer Section */}
            <div className="flex flex-row justify-between items-end text-[10px] sm:text-xs text-black mt-auto pt-6 w-full">
              <div className="text-left leading-relaxed">
                <p className="font-bold">Participant assessment- STA-230831</p>
                <p>Australian International Education Training <span className="font-bold">T/A</span> Safety Training Academy.</p>
                <p>RTO ID 45234</p>
              </div>
              <div className="text-right text-[10px] sm:text-xs text-black leading-relaxed italic">
                <p>14-16 Marjorie street, Sefton NSW 2162</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================= PAGE 2 (LLN Test Page 1 of 4) ======================= */}
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

          {/* Title & Instructions */}
          <div className="mb-4 px-2 sm:px-8">
            <h2 className="text-base sm:text-lg font-bold text-black mb-2 tracking-wide">
              LLN Test- RIIWHS204E Work Safely at Heights
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
            <p className="border-b border-gray-600 pb-2">This test must be conducted on RTO premises, under direct supervision by RTO staff and by the student ONLY – without any assistance</p>
          </div>

          {/* Student details table */}
          <div className="w-full px-2 sm:px-8 mb-6 flex-1 flex flex-col justify-end">
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
                  Assessor Name
                </div>
                <div className="w-full sm:w-[20%] p-2">
                  <input type="text" className="w-full bg-transparent outline-none text-center text-gray-800" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-2.5 font-bold bg-[#e6ebf5] border-b sm:border-b-0 sm:border-r border-gray-400 text-center sm:text-left">
                  Training Applying For
                </div>
                <div className="flex-1 p-2.5 font-medium text-center sm:text-left">
                  RIIWHS204E - Work Safely at Heights
                </div>
              </div>
            </div>

            {/* Numeracy Q1 */}
            <div className="mb-3 font-bold text-xs sm:text-sm">
              <p>Numeracy:</p>
              <p className="mt-0.5">Q1: Write 1 correct answer for each calculation and enter in the space below</p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block w-full border border-gray-400 text-xs sm:text-sm text-center mb-6">
              {/* Row 1: Headers */}
              <div className="grid grid-cols-6 border-b border-gray-400 font-medium">
                <div className="p-2 border-r border-gray-400 bg-[#e0e0e0] font-bold flex items-center justify-center">Multiplication</div>
                <div className="p-2 border-r border-gray-400 bg-[#f4f2de] flex items-center justify-center font-semibold">25X5</div>
                <div className="p-2 border-r border-gray-400 bg-[#f4f2de] flex items-center justify-center font-semibold">48X2</div>
                <div className="p-2 border-r border-gray-400 bg-[#e0e0e0] font-bold flex items-center justify-center">Division</div>
                <div className="p-2 border-r border-gray-400 bg-[#f4f2de] flex items-center justify-center font-semibold">48/2</div>
                <div className="p-2 bg-[#f4f2de] flex items-center justify-center font-semibold">700/10</div>
              </div>
              {/* Row 2: Inputs */}
              <div className="grid grid-cols-6 border-b border-gray-400 h-10">
                <div className="border-r border-gray-400 bg-[#e0e0e0]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400 bg-[#e0e0e0]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
              </div>
              {/* Row 3: Headers */}
              <div className="grid grid-cols-6 border-b border-gray-400 font-medium">
                <div className="p-2 border-r border-gray-400 bg-[#e0e0e0] font-bold flex items-center justify-center">Addition</div>
                <div className="p-2 border-r border-gray-400 bg-[#f4f2de] flex items-center justify-center font-semibold">756+44</div>
                <div className="p-2 border-r border-gray-400 bg-[#f4f2de] flex items-center justify-center font-semibold">85+35</div>
                <div className="p-2 border-r border-gray-400 bg-[#e0e0e0] font-bold flex items-center justify-center">Subtraction</div>
                <div className="p-2 border-r border-gray-400 bg-[#f4f2de] flex items-center justify-center font-semibold">85-40</div>
                <div className="p-2 bg-[#f4f2de] flex items-center justify-center font-semibold">2569-69</div>
              </div>
              {/* Row 4: Inputs */}
              <div className="grid grid-cols-6 h-10">
                <div className="border-r border-gray-400 bg-[#e0e0e0]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div className="border-r border-gray-400 bg-[#e0e0e0]"></div>
                <div className="border-r border-gray-400"><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
                <div><input type="text" className="w-full h-full text-center outline-none bg-transparent" /></div>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden space-y-3 mb-6">
              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#e0e0e0] text-xs">Multiplication</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">25X5</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">48X2</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#e0e0e0] text-xs">Division</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">48/2</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">700/10</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#e0e0e0] text-xs">Addition</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">756+44</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">85+35</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-gray-50">
                <div className="font-bold text-center border-b border-gray-400 pb-1 mb-2 bg-[#e0e0e0] text-xs">Subtraction</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">85-40</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] bg-[#f4f2de] px-1.5 py-0.5 border border-gray-300 rounded mb-1 font-semibold">2569-69</span>
                    <input type="text" className="w-full border border-gray-400 p-1 text-center bg-white rounded outline-none text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-6 px-2 sm:px-8 w-full">
            <div className="text-left max-w-[70%]">
              <p>LLN Test: RIIWHS204E Work Safely at Heights : Student Version :STA-230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 1 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 3 (LLN Test Page 2 of 4) ======================= */}
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
            <p className="text-xs sm:text-sm text-black mb-4 font-medium">
              Q2.Numeracy skills to: locate and recognize numbers commonly used in safety signs
            </p>

            {/* Central Signs Image */}
            <div className="mb-4 flex justify-center w-full">
              <img
                src={ppeSignImage}
                alt="Conditions of Entry safety signs"
                className="w-full max-w-[450px] sm:max-w-[520px] h-auto object-contain border border-gray-200 rounded shadow-sm"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-black mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span>At this construction site what is the maximum speed limit:</span>
                <input 
                  type="text" 
                  className="border-b border-black outline-none sm:ml-2 flex-1 max-w-[180px] bg-transparent text-center font-bold" 
                />
              </div>

              <div>
                <p className="mb-2 leading-relaxed">
                  Q3 In NSW more than 12,000 workers were injured after falling from a height between 2017 and 2019. 25 died and more than 240 were permanently disabled.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span>How many workers falling from heights between 2017 and 2019 did not die or were not permanently disabled?:</span>
                  <input 
                    type="text" 
                    className="border-b border-black outline-none sm:ml-2 flex-1 max-w-[180px] bg-transparent text-center font-bold" 
                  />
                </div>
              </div>

              <div className="pt-2">
                <p className="font-bold mb-1">Literacy</p>
                <p className="text-gray-800 mb-3">
                  Read the following description and answer the questions below. All answers must be based solely on the information provided below
                </p>
                
                <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
                  <p className="text-black">
                    This unit describes a participant’s skills and knowledge required to work safety at heights in construction sites. Jobs that include this requirement include:
                  </p>
                  <ul className="list-disc pl-8 space-y-1 text-black">
                    <li>Civil Construction worker</li>
                    <li>Builders Laborers</li>
                    <li>General Labor</li>
                    <li>Field Laborer</li>
                    <li>Construction Laborer.</li>
                  </ul>
                  <p className="text-black pt-2 leading-relaxed">
                    Falling from any height can lead to death or long-term injuries. Falls from heights are a major cause of fatalities and serious injuries at work in New South Wales. Most people who are seriously injured or killed, fall from a height of four metres or less. Ladders, incomplete scaffolds, falling off a truck, a roof edge or falling through fragile roof sheeting are the major causes of injuries. More than 12,000 workers were injured after falling from a height between 2017 and 2019. 25 died and more than 240 were permanently disabled. These incidents largely happen in the construction, manufacturing, transport, postal and warehousing and agriculture industries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-between items-end text-[9px] sm:text-xs text-black mt-auto pt-4 px-2 sm:px-8 w-full">
            <div className="text-left max-w-[70%]">
              <p>LLN Test: RIIWHS204E Work Safely at Heights : Student Version :STA-230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 2 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 4 (LLN Test Page 3 of 4) ======================= */}
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
            <div className="space-y-6">
              {/* Q1 */}
              <div>
                <p className="font-semibold mb-2">Q1:List 1 type of skill and knowledge that this training provides students with.</p>
                <div className="space-y-3">
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                </div>
              </div>

              {/* Q2 */}
              <div>
                <p className="font-semibold mb-2">Q2: What are the 5 major causes of injuries of workers falling from heights?</p>
                <div className="space-y-3">
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                  <div className="border-b border-dashed border-gray-400 w-full h-4"></div>
                </div>
              </div>

              {/* Language Section */}
              <div className="pt-2">
                <p className="font-bold text-gray-800 mb-0.5">Language</p>
                <p className="font-semibold text-black mb-1.5">Student Interview Questions - LLN</p>
                <p className="underline mb-3">The Assessor will ask you the following questions. Please answer (verbally) as clearly as possible</p>
                
                <div className="space-y-3 pl-2">
                  <div>
                    <p className="font-medium text-black">Why do you want to do this training ?</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">What do you think this training is about?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {/* Divider */}
              <div className="flex items-center justify-center mb-5">
                <div className="flex-1 border-b border-black"></div>
                <span className="px-3 font-bold text-xs uppercase tracking-widest text-black">END OF LLN TEST</span>
                <div className="flex-1 border-b border-black"></div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="font-bold text-center sm:text-left">By signing below, I verify that the above work is my own and has been completed independently.</p>
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
                    <textarea className="w-full h-full min-h-[60px] p-1.5 resize-none outline-none bg-transparent text-xs" placeholder="Assessor comments..."></textarea>
                  </div>
                  <div className="p-2 flex flex-col justify-center items-center gap-2 bg-white text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer font-bold">
                      <input 
                        type="radio" 
                        name="llnOutcomeDesk" 
                        value="S"
                        checked={llnOutcome === 'S'}
                        onChange={(e) => setLlnOutcome(e.target.value)}
                        className="w-3.5 h-3.5" 
                      /> S (Satisfactory)
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer font-bold">
                      <input 
                        type="radio" 
                        name="llnOutcomeDesk" 
                        value="NYS"
                        checked={llnOutcome === 'NYS'}
                        onChange={(e) => setLlnOutcome(e.target.value)}
                        className="w-3.5 h-3.5" 
                      /> NYS (Not Yet Satisfactory)
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-[2fr_1.5fr_1.2fr] border-b border-gray-400 text-left">
                  <div className="p-2.5 border-r border-gray-400 flex items-center font-medium bg-white">
                    If the Assessor is NOT recommending that the registration continues – what strategy does the Assessor recommend for the applicant to increase their chance of future success
                  </div>
                  <div className="p-1 border-r border-gray-400 bg-white col-span-2">
                    <textarea className="w-full h-full min-h-[60px] p-1.5 resize-none outline-none bg-transparent text-xs" placeholder="Recommendation strategy..."></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-1 border-b border-gray-400 text-left p-2.5 bg-white">
                  <div className="flex items-center">
                    <span className="font-bold mr-2 text-xs">Trainer Name:</span>
                    <input type="text" className="ml-2 w-1/2 outline-none border-b border-gray-400 bg-transparent text-xs font-semibold" />
                  </div>
                </div>
                <div className="grid grid-cols-1 text-left p-2.5 bg-white">
                  <div className="flex items-center">
                    <span className="font-bold mr-2 text-xs">Trainer Sign & Date:</span>
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
                      <label className="flex items-center gap-1 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="llnOutcomeMob" 
                          value="S"
                          checked={llnOutcome === 'S'}
                          onChange={(e) => setLlnOutcome(e.target.value)}
                          className="w-3.5 h-3.5" 
                        /> S (Satisfactory)
                      </label>
                      <label className="flex items-center gap-1 font-bold cursor-pointer">
                        <input 
                          type="radio" 
                          name="llnOutcomeMob" 
                          value="NYS"
                          checked={llnOutcome === 'NYS'}
                          onChange={(e) => setLlnOutcome(e.target.value)}
                          className="w-3.5 h-3.5" 
                        /> NYS (Not Yet Satisfactory)
                      </label>
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
                      <span className="font-bold text-xs mr-2">Trainer Sign & Date:</span>
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
              <p>LLN Test: RIIWHS204E Work Safely at Heights : Student Version :STA-230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 3 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 5 (LLN Test Page 4 of 4) ======================= */}
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
            <div className="border border-gray-400 py-12 px-6 sm:px-16 w-full max-w-md mx-auto text-center rounded shadow-sm bg-white">
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
              <p>LLN Test: RIIWHS204E Work Safely at Heights : Student Version :STA-230831</p>
              <p>Australian International Education Training T/A Safety Training Academy.</p>
            </div>
            <div className="text-right max-w-[30%] pb-1">
              <p>Page: 4 of 4</p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 6 (Enrolment Form Page 1 of 14) ======================= */}
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
            <h3 className="text-sm sm:text-base font-extrabold mb-3 text-black">
              SECTION 1 – APPLICANT INFORMATION
            </h3>

            {/* Applicant Details Form Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                      <input 
                        type="checkbox" 
                        checked={!!selectedTitles[title]}
                        onChange={() => handleTitleChange(title)}
                        className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" 
                      /> {title}
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
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">
                  Preferred name<br/><span className="font-normal text-[10px]">If different to above</span>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row border-b sm:border-b-0 border-gray-400">
                  <div className="flex-1 p-1 border-r-0 sm:border-r border-gray-400">
                    <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                  </div>
                  <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">
                    Date of Birth<br/><span className="font-normal text-[10px]">Day/Month/Year</span>
                  </div>
                  <div className="flex-1 p-1 flex items-center justify-center text-gray-500 font-bold tracking-widest text-[11px] sm:text-xs">
                    / &nbsp;&nbsp;&nbsp;&nbsp; /
                  </div>
                </div>
              </div>

              {/* Gender / Email */}
              <div className="flex flex-col sm:flex-row border-b border-gray-400 bg-white">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">Gender (please tick)</div>
                <div className="flex-1 flex flex-col sm:flex-row border-b sm:border-b-0 border-gray-400">
                  <div className="flex-1 p-2 border-r-0 sm:border-r border-gray-400 flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={gender === 'Male'} 
                        onChange={() => setGender(gender === 'Male' ? '' : 'Male')}
                        className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" 
                      /> Male
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={gender === 'Female'} 
                        onChange={() => setGender(gender === 'Female' ? '' : 'Female')}
                        className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" 
                      /> Female
                    </label>
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
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3">
                  <div className="p-1 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">Suburb:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                  <div className="p-1 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-1">
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
                  <input type="text" className="w-full h-full p-1 outline-none bg-transparent font-medium" />
                </div>
              </div>

              {/* Suburb / State / Postcode (Postal) */}
              <div className="flex flex-col sm:flex-row bg-white text-[11px] sm:text-xs">
                <div className="w-full sm:w-[25%] p-2 font-bold bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-400">If different from above</div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3">
                  <div className="p-1 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-1">
                    <span className="font-semibold text-gray-500">Suburb:</span>
                    <input type="text" className="flex-1 outline-none bg-transparent font-medium min-w-0" />
                  </div>
                  <div className="p-1 border-b sm:border-b-0 sm:border-r border-gray-400 flex items-center gap-1">
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
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                <div className="w-full sm:w-[15%] p-2 font-bold bg-gray-50 border-t sm:border-t-0 sm:border-r border-gray-400">Contact Number</div>
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
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={emergencyPermission === 'Yes'}
                        onChange={() => setEmergencyPermission(emergencyPermission === 'Yes' ? '' : 'Yes')}
                        className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" 
                      /> Yes
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={emergencyPermission === 'No'}
                        onChange={() => setEmergencyPermission(emergencyPermission === 'No' ? '' : 'No')}
                        className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" 
                      /> No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* USI Identifier Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                  
                  {/* USI Character Box Grid */}
                  <div className="flex items-center self-center lg:self-auto border border-gray-400">
                    <span className="p-2 border-r border-gray-400 font-bold bg-gray-50 text-xs">USI</span>
                    <div className="grid grid-cols-10 divide-x divide-gray-400 bg-white">
                      {[...Array(10)].map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-6 sm:w-7 h-7 sm:h-8 text-center font-bold uppercase outline-none bg-transparent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 1 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 7 (Enrolment Form Page 2 of 14) ======================= */}
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

          <div className="px-1 sm:px-4 flex-1 text-xs text-[#1a365d] font-bold">
            <h3 className="text-sm sm:text-base font-bold text-red-600 underline text-center mb-4">
              USI application through STA (if you do not already have one)
            </h3>

            <div className="mb-4 text-[#1a365d]">
              <p className="font-extrabold text-sm mb-1 text-black">Application for Unique Student Identifier (USI)</p>
              <p className="mb-3 font-normal text-gray-700 leading-relaxed text-[11px] sm:text-xs">
                If you would like us Safety Training Academy to apply for a USI on your behalf you must authorise us to do so and declare that you have read the privacy information at <a href="https://www.usi.gov.au/documents/privacynotice-when-rto-applies-their-behalf" target="_blank" rel="noreferrer" className="underline text-blue-700 font-bold">https://www.usi.gov.au/documents/privacynotice-when-rto-applies-their-behalf</a>. You must also provide some additional information as noted at the end of this form so that we can apply for a USI on your behalf.
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
              {/* 1. Driver Licence */}
              <div className="grid grid-cols-[25%_37.5%_37.5%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">1. Australian Driver’s Licence:</div>
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
              <div className="grid grid-cols-[25%_37.5%_37.5%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">2. Medicare Card:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span className="whitespace-nowrap">Medicare card number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 flex items-center text-[10px]">
                  <span className="leading-tight">Individual reference number (next to your name on medicare card):</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 w-20 bg-transparent text-center" />
                </div>
              </div>

              {/* Medicare Card Color & Expiry */}
              <div className="grid grid-cols-[25%_37.5%_37.5%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400"></div>
                <div className="p-2.5 border-r border-gray-400 flex items-center justify-between">
                  <span>Card colour:</span>
                  <div className="flex gap-3 text-xs">
                    {['Green', 'Yellow', 'Blue'].map((col) => (
                      <label key={col} className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> {col}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="p-2.5 flex items-center">
                  <span className="whitespace-nowrap">Expiry date</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" placeholder="__ / __ / ____" />
                  <span className="text-[10px] text-gray-500 ml-1">(format DD/MM/YYYY)</span>
                </div>
              </div>

              {/* 3 & 4 Birth Cert & Immicard */}
              <div className="grid grid-cols-[25%_37.5%_12.5%_25%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">3. Australian Birth Certificate:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span>State/Territory:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 border-r border-gray-400 font-bold">4. Immicard:</div>
                <div className="p-2.5 flex items-center">
                  <span className="whitespace-nowrap mr-1">Immicard Number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent text-center" />
                </div>
              </div>

              {/* 5. Passport */}
              <div className="grid grid-cols-[25%_75%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">5. Australian Passport:</div>
                <div className="p-2.5 flex items-center">
                  <span>Passport number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 max-w-sm bg-transparent text-center" />
                </div>
              </div>

              {/* 6. Non-Aus Passport */}
              <div className="grid grid-cols-[25%_37.5%_37.5%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">
                  <p>6.Non-Australian Passport:</p>
                  <p className="text-[10px] font-normal text-gray-600">(with Australian Visa) Passport number:</p>
                </div>
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
              <div className="grid grid-cols-[25%_37.5%_37.5%] border-b border-gray-400 text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">7. Citizenship Certificate:</div>
                <div className="p-2.5 border-r border-gray-400 flex items-center">
                  <span>Stock number:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" />
                </div>
                <div className="p-2.5 flex items-center">
                  <span className="whitespace-nowrap">Acquisition date:</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 flex-1 bg-transparent text-center" placeholder="__ / __ / ____" />
                  <span className="text-[10px] text-gray-500 ml-1">(day/month/year)</span>
                </div>
              </div>

              {/* 8. Registration by Descent */}
              <div className="grid grid-cols-[25%_75%] text-left items-center bg-white">
                <div className="p-2.5 border-r border-gray-400 font-bold">8. Certificate of Registration by Descent:</div>
                <div className="p-2.5 flex items-center">
                  <span className="whitespace-nowrap">Acquisition date</span>
                  <input type="text" className="border-b border-gray-400 outline-none ml-2 w-36 bg-transparent text-center" placeholder="__ / __ / ____" />
                  <span className="text-[10px] text-gray-500 ml-1">(day/month/year)</span>
                </div>
              </div>
            </div>

            {/* Mobile Verification Cards */}
            <div className="block md:hidden space-y-3 mb-4">
              <div className="border border-gray-400 rounded p-2.5 bg-white">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1 mb-2">1. Australian Driver’s Licence:</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">State</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Licence number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-white space-y-2">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1">2. Medicare Card:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Medicare card number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
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
                <div className="flex flex-col"><span className="text-[10px] text-gray-500">Expiry date (format DD/MM/YYYY)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" placeholder="__ / __ / ____" /></div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-white">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1 mb-2">3. Australian Birth Certificate & 4. Immicard</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">State/Territory</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Immicard Number</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-white space-y-2">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1">5. Australian Passport & 6. Non-Aus Passport</div>
                <div className="flex flex-col"><span className="text-[10px] text-gray-500">5. Passport Number (Aus)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">6. Passport Number (Non-Aus)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Country of issue</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                </div>
              </div>

              <div className="border border-gray-400 rounded p-2.5 bg-white space-y-2">
                <div className="font-bold text-[11px] text-black border-b border-gray-300 pb-1">7. Citizenship Certificate & 8. Registration by Descent</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Stock number (7)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" /></div>
                  <div className="flex flex-col"><span className="text-[10px] text-gray-500">Acquisition date (7)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" placeholder="__ / __ / ____" /></div>
                </div>
                <div className="flex flex-col"><span className="text-[10px] text-gray-500">Acquisition date (8)</span><input type="text" className="border border-gray-300 p-1 rounded bg-transparent text-xs" placeholder="__ / __ / ____" /></div>
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
                  <div className="w-full lg:w-[25%] font-bold text-black text-sm">PHOTO ID VERIFIED:</div>
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
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 2 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 8 (Enrolment Form Page 3 of 14) ======================= */}
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
            <h3 className="text-sm sm:text-base font-extrabold mb-2 uppercase text-black">
              SECTION 2 – EDUCATION AND EMPLOYMENT INFORMATION
            </h3>
            
            <div className="text-[11px] sm:text-xs mb-4 text-gray-700 leading-normal">
              <p className="font-semibold text-black">AVETMISS DATA COLLECTION</p>
              <p className="italic">Information collected in this section is used for the purposes of National reporting and planning.</p>
              <p className="font-bold italic text-black">Please COMPLETE ALL SECTIONS.</p>
            </div>

            {/* PRIOR EDUCATION Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
                PRIOR EDUCATION
              </div>
              <div className="p-2.5 border-b border-gray-400 bg-gray-50 font-semibold">
                What was your highest <span className="font-extrabold italic text-black">completed</span> level at school?
              </div>
              
              {/* Option checkboxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 p-3 gap-2 bg-white font-medium">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-blue-900 font-bold mr-1">12</sup> Year 12 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-blue-900 font-bold mr-1">9</sup> Year 9 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-blue-900 font-bold mr-1">11</sup> Year 11 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-blue-900 font-bold mr-1">8</sup> Year 8 or below</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-blue-900 font-bold mr-1">10</sup> Year 10 or equivalent</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span><sup className="text-blue-900 font-bold mr-1">02</sup> Never attended school</span>
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
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                <p className="text-[11px] text-gray-600 font-bold mb-1">If YES, then tick ANY applicable boxes.</p>
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
                      <span><sup className="text-blue-900 font-bold mr-1">{qual.id}</sup> {qual.name}</span>
                    </label>
                  ))}
                  <label className="flex items-start gap-1.5 cursor-pointer sm:col-span-2">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                    <span className="leading-tight"><sup className="text-blue-900 font-bold mr-1">990</sup> Other education ( including certificates or overseas qualifications not listed above)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* EMPLOYMENT STATUS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                    <span><sup className="text-blue-900 font-bold mr-1">{emp.id}</sup> {emp.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* EMPLOYMENT DETAILS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
                EMPLOYMENT DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-400 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Employer's name</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
                <div className="p-2 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Supervisor's name</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
              </div>
              <div className="p-2 border-b border-gray-400 flex items-center bg-white">
                <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Address</span>
                <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Email</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
                <div className="p-2 flex items-center">
                  <span className="font-bold text-gray-800 mr-2 whitespace-nowrap">Phone</span>
                  <input type="text" className="border-b border-gray-300 outline-none flex-1 bg-transparent" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 3 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 9 (Enrolment Form Page 4 of 14) ======================= */}
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
            
            {/* REASON FOR UNDERTAKING TRAINING Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                    <span><sup className="text-blue-900 font-bold mr-1">{reason.id}</sup> {reason.name}</span>
                  </label>
                ))}
                <label className="flex items-center gap-1.5 cursor-pointer sm:col-span-2">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span className="flex items-center gap-1">
                    <sup className="text-blue-900 font-bold">{`11`}</sup> Other <span className="italic font-normal text-gray-600">(please provide details):</span>
                    <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-40 text-center font-semibold" />
                  </span>
                </label>
              </div>
            </div>

            <h3 className="text-sm sm:text-base font-extrabold mb-1 uppercase text-black">
              SECTION 3 – ADDITIONAL INFORMATION
            </h3>
            <p className="text-[10px] sm:text-xs italic font-bold mb-4 text-gray-600">
              Information collected in this section is strictly confidential, available only to limited college staff and for the purposes of reporting and planning.
            </p>

            {/* SPECIAL NEEDS Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                    <span><sup className="text-blue-900 font-bold mr-1">{spec.id}</sup> {spec.name}</span>
                  </label>
                ))}
                <label className="flex items-center gap-1.5 cursor-pointer sm:col-span-2">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span className="flex items-center gap-1">
                    <sup className="text-blue-900 font-bold">{`19`}</sup> Other <span className="font-normal text-gray-500">(please specify):</span>
                    <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-40 text-center font-semibold" />
                  </span>
                </label>
              </div>

              <div className="p-2.5 bg-gray-50 border-t border-gray-400 text-gray-700 text-[10px] sm:text-xs font-medium">
                If you indicated the presence of a disability, impairment or long-term condition, please select the area(s) from the list on page
              </div>
            </div>

            {/* LANGUAGE AND CULTURAL DIVERSITY Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400">
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
                    <span><sup className="text-blue-900 mr-1">1101</sup> Australia</span>
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
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-blue-900 mr-1">4</sup> No</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-blue-900 mr-1">2</sup> Torres Strait Islander</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-blue-900 mr-1">13</sup> Aboriginal</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span><sup className="text-blue-900 mr-1">13</sup> Aboriginal & Torres Strait Islander</span></label>
                </div>
              </div>

              {/* Language spoken */}
              <div className="flex flex-col md:flex-row border-b border-gray-400">
                <div className="w-full md:w-[25%] p-2.5 font-bold bg-gray-50 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                  Language spoken at home
                </div>
                <div className="flex-1 p-2 flex flex-wrap gap-4 items-center font-bold">
                  <label className="flex items-start gap-1.5 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5" /> <span className="leading-tight"><sup className="text-blue-900 mr-1">1201</sup> English Only (skip the next question)</span></label>
                  <label className="flex items-center gap-1.5 cursor-pointer flex-1 min-w-[200px]"><input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /> <span className="flex items-center gap-1 flex-1"><span>Other <span className="font-normal text-gray-500 text-[10px]">(please specify):</span></span> <input type="text" className="border-b border-gray-400 outline-none bg-transparent flex-1" /></span></label>
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
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 4 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 10 (Enrolment Form Page 5 of 14) ======================= */}
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
            <h3 className="text-sm sm:text-base font-extrabold mb-3 uppercase text-black">
              SECTION 4– ENROLMENT INFORMATION
            </h3>

            {/* Qualifications Choices Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400 flex flex-col sm:flex-row justify-between items-center gap-1">
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
                    <label className="flex items-center gap-1 cursor-pointer">Yes <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /></label>
                    <label className="flex items-center gap-1 cursor-pointer">No <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /></label>
                  </div>
                </div>
                <div className="p-2.5 flex items-center justify-between">
                  <span>Preferred Start Date</span>
                  <input type="text" className="border-b border-gray-400 outline-none w-32 bg-transparent text-center text-gray-500 font-bold" placeholder="------/-----/--------" />
                </div>
              </div>

              <div className="p-3 bg-white font-bold">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="whitespace-nowrap">Do you have access to a workplace</span>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-1 cursor-pointer">Yes <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /></label>
                    <label className="flex items-center gap-1 cursor-pointer">No <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" /></label>
                  </div>
                  <span className="sm:ml-4 whitespace-nowrap">Site location:</span>
                  <input type="text" className="border-b border-gray-400 outline-none flex-1 bg-transparent px-1 font-semibold" />
                </div>
              </div>
            </div>

            {/* Short Courses Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2 font-bold text-sm text-black border-b border-gray-400 text-center">
                Short Courses
              </div>
              <div className="bg-[#bfe6f7] p-2 border-b border-gray-400 text-black font-bold flex flex-col sm:flex-row justify-between items-center gap-1">
                <span>Unit of competency – Please indicate course chosen</span>
                <span className="font-semibold text-gray-700 italic">( Training and Assessemnt program)</span>
              </div>

              <div className="p-2.5 space-y-3 font-semibold text-black">
                {/* White Card */}
                <div>
                  <div className="bg-[#e8dec8] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">White Card:</div>
                  <label className="flex items-center gap-1.5 cursor-pointer ml-1 text-[11px] sm:text-xs">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span>CPCWHS1001 - Prepare to work safely in the construction industry</span>
                  </label>
                </div>

                {/* Working at Heights */}
                <div>
                  <div className="bg-[#e8dec8] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Working at Heights :</div>
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
                  <div className="bg-[#e8dec8] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Confined Spaces :</div>
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
                  <div className="bg-[#e8dec8] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">High risk Work :</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-1 text-[11px] sm:text-xs">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                      <span>TLILIC0003 - Licence to operate a forklift truck</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">TLILIC0005 - Licence to operate a boom-type elevating work platform (boom length 11 metres or more)</span>
                    </label>
                  </div>
                </div>

                {/* Earthmoving */}
                <div>
                  <div className="bg-[#e8dec8] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Earthmoving and Machinery :</div>
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
                      <span className="leading-tight">RIIHAN309E- Conduct telescopic materials handler Operations (Telehandler)</span>
                    </label>
                    <label className="flex items-start gap-1.5 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">RIIHAN301E – Opertae elevating work platform (under 11m)</span>
                    </label>
                  </div>
                </div>

                {/* Asbestos */}
                <div>
                  <div className="bg-[#e8dec8] px-2 py-1 font-extrabold text-[11px] mb-1.5 border border-gray-300">Asbestos:</div>
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
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 5 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 11 (Enrolment Form Page 6 of 14) ======================= */}
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
            
            {/* Demolition Section */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#e8dec8] p-2 font-extrabold text-[11px] text-black border-b border-gray-400">
                Demolition:
              </div>

              <div className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] sm:text-xs font-semibold text-black">
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
                <label className="flex items-start gap-1.5 cursor-pointer sm:col-span-2">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">CPCCDE4004 Finalise demolition activities and supervise property handover</span>
                </label>
              </div>
            </div>

            {/* First Aid Section */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#e8dec8] p-2 font-extrabold text-[11px] text-black border-b border-gray-400">
                First Aid :
              </div>
              <div className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs font-semibold text-black">
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

            {/* Traffic Control Courses */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#e8dec8] p-2 font-extrabold text-[11px] text-black border-b border-gray-400">
                Traffic Control Courses:
              </div>
              <div className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs font-semibold text-black">
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
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden mb-4 bg-white text-xs">
              <div className="bg-[#e8dec8] p-2 font-extrabold text-[11px] text-black border-b border-gray-400">
                Other Courses:
              </div>
              <div className="p-2.5 space-y-2 text-[11px] sm:text-xs font-semibold text-black">
                <label className="flex items-start gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">UETDREL006 - Working safely near live electrical apparatus as a non-electrical worker</span>
                </label>
                <label className="flex items-start gap-1.5 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">RIICCM202E — Identify,located and protect uunderground services</span>
                </label>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 6 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 12 (Enrolment Form Page 7 of 14 - PRIVACY NOTICE) ======================= */}
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
              <div className="bg-[#bfe6f7] font-bold p-2.5 border-b border-gray-400 text-sm tracking-wide uppercase">
                PRIVACY NOTICE
              </div>
              
              <div className="p-3.5 space-y-3 leading-relaxed text-gray-800">
                <p>
                  <span className="font-extrabold text-black underline">Why we collect your personal information</span><br/>
                  As a registered training organisation (RTO), we collect your personal information so we can process and manage your enrolment in a vocational education and training (VET) course with us.
                </p>
                
                <p>
                  <span className="font-extrabold text-black underline">How we use your personal information</span><br/>
                  We use your personal information to enable us to deliver VET courses to you, and otherwise, as needed, to comply with our obligations as an RTO.
                </p>
                
                <p>
                  <span className="font-extrabold text-black underline">How we disclose your personal information</span><br/>
                  We are required by law (under the National Vocational Education and Training Regulator Act 2011 (Cth) (NVETR Act)) to disclose the personal information we collect about you to the National VET Data Collection kept by the National Centre for Vocational Education Research Ltd (NCVER). The NCVER is responsible for collecting, managing, analysing and communicating research and statistics about the Australian VET sector.<br/>
                  We are also authorised by law (under the NVETR Act) to disclose your personal information to the relevant state or territory training authority.
                </p>
                
                <p>
                  <span className="font-extrabold text-black underline">How the NCVER and other bodies handle your personal information</span><br/>
                  The NCVER will collect, hold, use and disclose your personal information in accordance with the law, including the Privacy Act 1988 (Cth) (Privacy Act) and the NVETR Act. Your personal information may be used and disclosed by NCVER for purposes that include populating authenticated VET transcripts; administration of VET; facilitation of statistics and research relating to education, including surveys and data linkage; and understanding the VET market.<br/>
                  The NCVER is authorised to disclose information to the Australian Government Department of Education, Skills and Employment (DESE), Commonwealth authorities, State and Territory authorities (other than registered training organisations) that deal with matters relating to VET and VET regulators for the purposes of those bodies, including to enable:
                </p>
                
                <ul className="list-disc pl-5 space-y-1 text-black font-semibold">
                  <li>administration of VET, including program administration, regulation, monitoring and evaluation</li>
                  <li>facilitation of statistics and research relating to education, including surveys and data linkage</li>
                  <li>understanding how the VET market operates, for policy, workforce planning and consumer information.</li>
                </ul>

                <p>
                  The NCVER may also disclose personal information to persons engaged by NCVER to conduct research on NCVER’s behalf.<br/>
                  The NCVER does not intend to disclose your personal information to any overseas recipients.<br/>
                  For more information about how the NCVER will handle your personal information please refer to the NCVER’s Privacy Policy at <a href="https://www.ncver.edu.au/privacy" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">www.ncver.edu.au/privacy</a><br/>
                  If you would like to seek access to or correct your information, in the first instance, please contact your RTO using the contact details listed below.<br/>
                  DESE is authorised by law, including the Privacy Act and the NVETR Act, to collect, use and disclose your personal information to fulfil specified functions and activities. For more information about how the DESE will handle your personal information, please refer to the DESE VET Privacy Notice at <a href="https://www.dese.gov.au/national-vet-data/vet-privacy-notice" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">https://www.dese.gov.au/national-vet-data/vet-privacy-notice</a>
                </p>
                
                <p>
                  <span className="font-extrabold text-black underline">Surveys</span><br/>
                  You may receive a student survey which may be run by a government department or an NCVER employee, agent, third-party contractor or another authorised agency. Please note you may opt out of the survey at the time of being contacted.
                </p>
                
                <p>
                  <span className="font-extrabold text-black underline">Contact information</span><br/>
                  At any time, you may contact Safety Training Academy to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black font-semibold">
                  <li>request access to your personal information</li>
                  <li>correct your personal information</li>
                  <li>make a complaint about how your personal information has been handled</li>
                  <li>ask a question about this Privacy Notice</li>
                </ul>
                
                <div className="font-bold text-black border-t border-gray-200 pt-3 text-[11px] sm:text-xs">
                  <p className="font-extrabold text-black">Safety Training Academy</p>
                  <p className="text-black font-bold">Maria Hajjar</p>
                  <p className="text-black font-bold">0439 007 746</p>
                  <a href="mailto:maria@safetytrainingacademy.edu.au" className="underline font-bold text-blue-700 hover:text-blue-900">maria@safetytrainingacademy.edu.au</a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 7 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 13 (Enrolment Form Page 8 of 14 - DISABILITY SUPPLEMENT) ======================= */}
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
              <div className="bg-[#bfe6f7] font-bold p-2.5 border-b border-gray-400 text-sm tracking-wide uppercase">
                DISABILITY SUPPLEMENT
              </div>
              
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800 text-[10px] sm:text-xs">
                <p className="font-extrabold text-black">*If you indicated the presence of a disability, impairment or long-term condition on page 4, please select the area(s) in the following list:</p>
                <p className="text-black font-medium">Disability in this context does not include short-term disabling health conditions such as a fractured leg, influenza, or corrected physical conditions such as impaired vision managed by wearing glasses or lenses.</p>
                
                <div className="space-y-2.5 text-gray-900">
                  <p>
                    <span className="font-extrabold text-black">‘11 — Hearing/deaf’</span><br/>
                    Hearing impairment is used to refer to a person who has an acquired mild, moderate, severe or profound hearing loss after learning to speak, communicates orally and maximises residual hearing with the assistance of amplification. A person who is deaf has a severe or profound hearing loss from, at, or near birth and mainly relies upon vision to communicate, whether through lip reading, gestures, cued speech, finger spelling and/or sign language.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘12 — Physical’</span><br/>
                    A physical disability affects the mobility or dexterity of a person and may include a total or partial loss of a part of the body. A physical disability may have existed since birth or may be the result of an accident, illness, or injury suffered later in life; for example, amputation, arthritis, cerebral palsy, multiple sclerosis, muscular dystrophy, paraplegia, quadriplegia or post-polio syndrome.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘13 — Intellectual’</span><br/>
                    In general, the term ‘intellectual disability’ is used to refer to low general intellectual functioning and difficulties in adaptive behaviour, both of which conditions were manifested before the person reached the age of 18. It may result from infection before or after birth, trauma during birth, or illness.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘14 — Learning’</span><br/>
                    A general term that refers to a heterogeneous group of disorders manifested by significant difficulties in the acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical abilities. These disorders are intrinsic to the individual, presumed to be due to central nervous system dysfunction, and may occur across the life span. Problems in self-regulatory behaviours, social perception, and social interaction may exist with learning disabilities but do not by themselves constitute a learning disability.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘15 — Mental illness’</span><br/>
                    Mental illness refers to a cluster of psychological and physiological symptoms that cause a person suffering or distress and which represent a departure from a person’s usual pattern and level of functioning.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘16 — Acquired brain impairment’</span><br/>
                    Acquired brain impairment is injury to the brain that results in deterioration in cognitive, physical, emotional or independent functioning. Acquired brain impairment can occur as a result of trauma, hypoxia, infection, tumour, accidents, violence, substance abuse, degenerative neurological diseases or stroke. These impairments may be either temporary or permanent and cause partial or total disability or psychosocial maladjustment.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘17 — Vision’</span><br/>
                    This covers a partial loss of sight causing difficulties in seeing, up to and including blindness. This may be present from birth or acquired as a result of disease, illness or injury.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘18 — Medical condition’</span><br/>
                    Medical condition is a temporary or permanent condition that may be hereditary, genetically acquired or of unknown origin. The condition may not be obvious or readily identifiable, yet may be mildly or severely debilitating and result in fluctuating levels of wellness and sickness, and/or periods of hospitalisation; for example, HIV/AIDS, cancer, chronic fatigue syndrome, Crohn’s disease, cystic fibrosis, asthma or diabetes.
                  </p>
                  
                  <p>
                    <span className="font-extrabold text-black">‘19 — Other’</span><br/>
                    A disability, impairment or long-term condition which is not suitably described by one or several disability types in combination. Autism spectrum disorders are reported under this category.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 8 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 14 (Enrolment Form Page 9 of 14 - TERMS & CONDITIONS OF ENROLMENT Part 1) ======================= */}
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
            <div className="border border-gray-400 w-full flex flex-col text-[10px] sm:text-[11px] bg-white">
              <div className="font-extrabold p-2.5 text-center text-sm tracking-wide uppercase text-black">
                TERMS & CONDITIONS OF ENROLMENT
              </div>
              
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p className="font-extrabold text-black text-xs">Enrolment & Selection</p>
                <ol className="list-decimal pl-5 space-y-1 text-black font-medium">
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
 
                <p className="font-extrabold text-black text-xs pt-2">Course Fees, Payments and Refunds</p>
                <p className="font-medium text-gray-800">Students are provided with the refund policy and student enrolment form prior to enrolment. Refund information is always available from the CEO.</p>
                
                <ol className="list-decimal pl-5 space-y-1 text-black font-medium">
                  <li>Fee Refund Applications are considered on a case-by-case basis.</li>
                  <li>The request for refund is made in writing to the CEO using the Fee Refund Application which is available upon request from the CEO.</li>
                  <li>The CEO is the person responsible for approval of fee refund applications.</li>
                  <li>Course cancellation after acceptance by Safety Training Academy may occur up to 7 days prior to commencement of the course without penalty and must be made in writing, by email or by fax. A full refund minus the non-refundable enrolment fee will be paid with notice of 7 days or more.</li>
                  <li>Course cancellation with less than 7 days’ notice after acceptance by Safety Training Academy will not result in any refund.</li>
                  <li>Accepted students who withdraw after course commencement owing to unforeseen or exceptional circumstance can apply for fee refund. If granted, fees will be refunded on a pro-rata basis (based on the number of days remaining in the course).</li>
                  <li>Safety Training Academy defaults if a course does not commence on the designated day or is actually cancelled. No student will be disadvantaged.</li>
                  <li>Fee refunds will be made within 14 days after demand when Safety Training Academy defaults and within 28 days after demand when the student defaults.</li>
                  <li>Safety Training Academy ‘s dispute resolution processes do not circumscribe the student’s right to pursue other legal remedies. This agreement does not remove the right of either party to take further action under Australia’s consumer protection laws for unpaid and overdue fees.</li>
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
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 9 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 15 (Enrolment Form Page 10 of 14 - TERMS & CONDITIONS Part 2 & APPEALS) ======================= */}
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
            <div className="border border-gray-400 w-full flex flex-col text-[10px] sm:text-[11px] bg-white">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <ol className="list-decimal pl-5 space-y-1.5 text-black font-medium" start={16}>
                  <li>Refunds may be made in the following circumstances:
                    <ol className="list-[lower-alpha] pl-5 space-y-0.5 mt-1 text-gray-800">
                      <li>Participants have overpaid the administration charge</li>
                      <li>Participants enrolled in training that has been terminated by Safety Training Academy</li>
                      <li>Participant advises Safety Training Academy prior to course commencement that they are withdrawing from the course</li>
                      <li>If the participant withdraws from a course, prior to course commencement, due to illness or extreme hardship as determined by the Safety Training Academy</li>
                      <li>In the event that the Safety Training Academy fails to provide the agreed services</li>
                    </ol>
                  </li>
                  <li>A deposit of no more than $1,500 is required prior to course commencement; this deposit is to confirm a place in the course. Please refer to the Course Flyer for the deposit amount required.</li>
                  <li>No refunds will be issued once the course has commenced</li>
                  <li>Students are responsible for the safe storage of their Certificate and Statements of Attainment. If a student requires a reissue of their Certificate Statement of Attainment, a <span className="font-extrabold text-black">certificate re-issue fee of $50</span> will be charged.</li>
                  <li>If a student is deemed not yet competent on completion of training, they will be offered an opportunity to be reassessed. If a student is deemed not yet competent a second time, they will be given another opportunity for reassessment.</li>
                </ol>

                <p className="font-extrabold text-black text-xs pt-1">Recording:</p>
                <p>The complaint will be recorded in the Register of Complaints by the Administration Manager.<br/>
                A copy of all the documentation, in particular the complaint and its outcome, is placed in the student's file. A copy of the documentation is forwarded to the complainant.<br/>
                Where the resolution requires a documented change to policies and procedures, the CEO notifies the appropriate staff member of the change to ensure that the procedure for document change as listed in the procedure for Document Control is followed with the appropriate records made.<br/>
                In the event that a complaint is substantiated, Safety Training Academy will take prompt and appropriate action to resolve the circumstances.</p>
                
                <p>Complaints cannot be anonymous because this is considered unfair in that ongoing discussion cannot take place to resolve the issue between both parties. Information submitted to a trainer or any staff member is treated with respect and taken as an opportunity for improvement to the organisation's practices and Quality Management System.<br/>
                Privacy requirements and student/ individual rights are maintained at all times.<br/>
                If the student chooses to access our complaints and appeals processes, Safety Training Academy will maintain the student's enrolment while the complaints and appeals process is ongoing.<br/>
                *NOTE: We aim to finalise any complaints and appeals within 60 days of the initial lodgement. If the compliant cannot be finalised within the 60 days, we will notify the complainant in writing why it has not been finalised and any other information they can provide at the time to assist the complainant.</p>

                <p className="font-extrabold text-black text-xs pt-1 uppercase">APPEALS</p>
                <p>If you are not happy with the outcome of a complaint then the following appeal process is followed.<br/>
                The appeal is discussed directly with the CEO. If this does not resolve the matter then the appeal is to be documented and submitted to trigger mediation by using either a simple written letter or a copy of the complaints and appeals form.<br/>
                The CEO records the student's dispute in the Register for Continuous Improvement and puts written notification on the students file and organises attendance by the student as Safety Training Academy representatives at the local court to meet with the VET Ombudsman representative. These are trained mediators, familiar with the alternative dispute resolution mediation process. The process is also without cost.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 10 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 16 (Enrolment Form Page 11 of 14 - APPEALS Cont., Reassessments & Consumer Guarantee) ======================= */}
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
            <div className="border border-gray-400 w-full flex flex-col text-[10px] sm:text-[11px] bg-white">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p>
                  You can also contact the Ombudsman<br/>
                  <a href="https://www.ombudsman.gov.au/" target="_blank" rel="noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">https://www.ombudsman.gov.au/</a><br/>
                  NOTE: The National Training Complaints Hotline is accessible on 13 38 73 (Monday to Friday from 8am to 6pm nationally) or via email at <a href="mailto:skilling@education.gov.au" className="underline font-bold text-blue-700 hover:text-blue-900">skilling@education.gov.au</a>
                </p>
                
                <p>
                  An appellant may deliver their own version of the matter to the mediator and request a support person be present. The rules of alternative dispute resolution apply.<br/><br/>
                  The matter should then consider the issues raised an attempt to resolve the appeal to the satisfaction of the appellant. All appeals of complaints that are found to be proven must be acted upon through the continuous improvement process to make systematic changes to prevent the recurrence of this a problem again<br/>
                  The final agreement achieved through the alternative dispute resolution process is put into court orders which bind the parties to the agreed resolution. There is no further appeal mechanism beyond this point. The student may always revert to common law. Each step of the complaints and appeals process will allow the student to make representation either orally or in writing prior to reaching a decision.<br/>
                  If the student has complaints that do not directly concern but may affect their ability to achieve competency, they shall be referred to appropriate external support groups for assistance
                </p>
                
                <p className="font-extrabold text-black text-xs pt-1 uppercase">APPEALS AGAINST ASSESSMENT OUTCOMES: REASSESSMENTS</p>
                <p>
                  Safety Training Academy maintains a supportive and fair environment, which allows training participants to appeal their assessments and recognition decisions. Appeals are ideally resolved as amicably as possible using this formal appeal process.<br/>
                  <span className="font-bold text-black">Step 1:</span><br/>
                  Discuss the matter with your assessor and explain the reason why you believe the assessment outcome is unfair. If you are not satisfied with the discussion, then go to Step 2.<br/><br/>
                  <span className="font-bold text-black">Step 2:</span><br/>
                  Lodge a written appeal to the Administration Manager by completing a Complaints and Appeals form (Form 06). The Administration Manager will forward the appeal to the CEO who will commence investigation into the matter within 10 working days.<br/>
                  The CEO will appoint a mutually agreed-upon, qualified and independent assessor to review the records of assessment of the student's competence against the training package requirements. Where insufficient records to determine competence are available, the student may provide additional evidence of competence. The independent assessor's determination is final.<br/><br/>
                  No further appeal mechanism exists beyond this point in the process.<br/>
                  In most cases there will be no reassessment fee. If a reassessment fee is applicable, this fee will be included on the course flyer.
                </p>
                
                <p className="font-extrabold text-black text-[11px] sm:text-xs">
                  STA is responsible for providing you with quality training and assessment and the issuance of AQF certification documentation.<br/><br/>
                  <span className="font-normal text-gray-700">If a student is required to be reassessed, they will be provided with further guidance from their trainer prior to reassessment.</span>
                </p>
                
                <p className="font-extrabold text-black text-xs pt-1">Consumer Guarantee</p>
                <p>Safety Training Academy guarantees that the services provided by STA will be:</p>
                <ul className="list-disc pl-5 space-y-1 text-black font-medium">
                  <li>provided with due care and skill</li>
                  <li>fit for any specified purpose (express or implied)</li>
                  <li>provided within a reasonable time (when no timeframe is set for the training).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 11 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 17 (Enrolment Form Page 12 of 14) ======================= */}
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
            <div className="border border-gray-400 w-full flex flex-col text-[10px] sm:text-[11px] bg-white">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p className="font-extrabold text-black text-xs">Fee Protection</p>
                <p>Safety Training Academy requires a minimum deposit, which will not exceed $1,500 per individual student, prior to course commencement. If the full course fees are less than $1,500, the full fees may be required to be paid prior to course commencement. Please refer to the course flyers for deposits and course fees.</p>
                <p>Following course commencement, full fees will be required to be paid by either a payment plan (if remaining fees are over $1500), or in full (if the remaining fees are below $1500) for training and other services yet to be delivered.</p>
                
                <p className="font-extrabold text-black text-xs pt-1">Changes to Agreed Services</p>
                <p>Where there are any changes to the agreed services that will affect the learner, including in the event of Safety Training Academy closing down, we will advise the learner as soon as practicable. This includes changes to any new third party arrangements or a change of ownership or any changes to existing third party arrangements.</p>

                <p className="font-extrabold text-black text-xs pt-1">Complaints and Appeals</p>
                <p>If we do not resolve or finalise complaints or appeals within 60 days, the complainant will be notified in writing by the Administration Manager.</p>
                <p>Safety Training Academy maintains a supportive and fair environment, which allows training participants, staff and stakeholders to lodge complaints. Complaints are ideally resolved as amicably as possible using this formal appeal process. We will adhere to the National Complaints Code to respond to complaints about vocational education and the organisation itself. This means that our complaints process is:</p>
                
                <ul className="list-disc pl-5 space-y-1 font-semibold text-black">
                  <li>well publicised and explained;</li>
                  <li>accessible so you can lodge complaints and appeals by phone, electronically or in writing;</li>
                  <li>fair and protect your rights;</li>
                  <li>free so you can lodge a complaint without charge;</li>
                  <li>handled in a manner that protects your privacy;</li>
                  <li>transparent, equitable, objective and unbiased;</li>
                  <li>comprehensive so that it effectively resolves a variety of complaints such as student dissatisfaction, assessment outcomes, poor service, fraud, misconduct etc;</li>
                </ul>

                <div className="space-y-2 pt-1">
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
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 12 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 18 (Enrolment Form Page 13 of 14) ======================= */}
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
            <div className="border border-gray-400 w-full flex flex-col text-[10px] sm:text-[11px] bg-white">
              <div className="p-3.5 space-y-3 leading-relaxed text-justify text-gray-800">
                <p className="font-extrabold text-black text-xs">Credit Transfer</p>
                <p>STA recognises the Australian Qualifications Framework and Vocational Education and Training (VET) qualifications and VET statements of attainment issued by any other Registered Training Organisation.</p>
                <p>Credit Transfer will be awarded for all units of competencies that directly align with units from the qualification the student has enrolled. Evidence of competences achieved must be supplied for recognition to be processed (ie presentation of original certificate or transcript).</p>
                <p>Please refer to the Student Handbook or contact the office for the procedure on how to apply for a Credit Transfer.</p>
                
                <p className="font-extrabold text-black text-xs pt-1">Language, Literacy and Numeracy (LLN)</p>
                <p>LLN support is available to provide students with advice and support services in the provision of language, literacy and numeracy assessment services. Students needing assistance with their learning should be identified upon enrolment. Trainers and staff can provide students with support to assist the student throughout the learning process.</p>
                <p>Language, Literacy and Numeracy skills are generally included and identified in Training Products and accredited course programs. In identifying language, literacy and numeracy requirements, students’ are required to have basic skills in:</p>
                <ul className="list-disc pl-5 space-y-0.5 font-semibold text-black">
                  <li>Count, check and record accurately</li>
                  <li>Read and interpret</li>
                  <li>Estimate, calculate and measure</li>
                </ul>

                <p className="font-extrabold text-black text-xs pt-1">Support Services</p>
                <p>All staff at Safety Training Academy act as Student Support Officers and can refer students to external support providers where required. Safety Training Academy caters to diverse client learning needs and aims to identify and respond to the learning needs of all clients. Clients are encouraged to express their views about their learning needs at all stages of their learning experience from the initial enrolment and induction stage to course completion, through their trainer or staff. Safety Training Academy is committed to providing clients requiring additional support, advice or assistance while training. Please see the Student Handbook on the types of support provided.</p>
                
                <p className="font-extrabold text-black text-xs pt-1">Legislative and Regulatory Requirements</p>
                <p>All students will undergo an induction, which will include the student’s rights and responsibilities against the relevant Commonwealth, State or Territory legislation and regulatory requirements. Students are issued with a Student Handbook, which also includes the Student’s rights and responsibilities that will affect their participation in vocational education and training.</p>
                <p>The student acknowledges that they must observe Safety Training Academy’s policies and procedures, according to State and Federal Government legislative and regulatory requirements, as set out in the Student Handbook.</p>

                <div className="pt-2 font-semibold text-black space-y-1">
                  <p className="font-extrabold text-xs uppercase tracking-wide">IMPORTANT INFORMATION</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-800 leading-normal text-justify">
                    I have read and understand the terms and conditions of my enrolment, as stated above. I acknowledge and agree with the terms and conditions of enrolment with specific reference to the our enrolment and selection, USI, course fees, payments and refunds, course requirements, Language Literacy and Numeracy requirements, complaints and appeals, Workplace Health and Safety, support services that will be provided for me, legislative and regulatory policies and procedures, which are also provided to me in the Student Handbook. By signing this document I also give permission for STA to access my Unique Student Identifier for the purpose of my training.
                  </p>
                </div>

                <div className="pt-3 font-bold text-black flex flex-col space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="whitespace-nowrap text-[11px] sm:text-xs">STUDENT NAME:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-bold text-xs px-2 py-0.5" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="whitespace-nowrap text-[11px] sm:text-xs">STUDENT SIGNATURE:</span>
                      <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-bold text-xs px-2 py-0.5" />
                    </div>
                    <div className="flex items-center gap-1 whitespace-nowrap text-[11px] sm:text-xs">
                      <span>DATE:</span>
                      <input type="text" className="w-8 border-b border-gray-400 outline-none bg-transparent text-center font-bold text-xs" placeholder="__" />
                      <span>/</span>
                      <input type="text" className="w-8 border-b border-gray-400 outline-none bg-transparent text-center font-bold text-xs" placeholder="__" />
                      <span>/</span>
                      <input type="text" className="w-12 border-b border-gray-400 outline-none bg-transparent text-center font-bold text-xs" placeholder="____" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 13 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 19 (Enrolment Form Page 14 of 14) ======================= */}
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
              <div className="bg-[#bfe6f7] p-2.5 font-bold text-sm text-black border-b border-gray-400">
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
                    <p><span className="font-extrabold text-black">BSB : 062 141</span> &nbsp; &nbsp; <span className="font-bold text-black">Account No : 10490235</span></p>
                    <p><span className="font-extrabold text-black">Transaction Description :</span> Your Nmae / Invoice Number</p>
                  </div>
                  <div className="text-gray-700 font-bold border-l-0 lg:border-l lg:pl-4 border-gray-300">
                    <span className="text-black">----</span> Australian International Education & Training Pty Ltd
                  </div>
                </div>
              </div>
            </div>

            {/* Application Submission Box */}
            <div className="w-full border border-gray-400 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#bfe6f7] p-2.5 font-bold text-sm text-black border-b border-gray-400 uppercase tracking-wide">
                APPLICATION SUBMISSION
              </div>
              
              <div className="p-4 space-y-4 leading-relaxed text-justify text-[11px] sm:text-xs">
                <p>
                  <span className="italic font-medium text-gray-700">Please return this completed application form with proof of ID to </span>
                  <span className="font-bold text-black">Australian International Education & Training</span> 
                  <span className="italic font-medium text-gray-700"> (AIET) to enrol in your chosen qualification.</span>
                </p>
                <p className="font-semibold text-black">
                  Once your application has been received and is accepted as complete, you will be notified. If any information or evidence is missing you will be contacted to provide any further required information. This may delay your enrolment process.
                </p>
                
                <div className="pt-2">
                  <p className="italic font-bold text-gray-800 mb-2">Australian International Education & Training Assessment Centre:</p>
                  <ul className="list-disc pl-5 space-y-1.5 font-semibold text-black">
                    <li>Address: 3/14-16 Marjorie, Street, Sefton NSW 216</li>
                    <li>Email: Info@safetytrainingacademy.edu.au</li>
                    <li>Phone: 1300 976 097</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[10px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-200 gap-1">
            <div className="text-center text-gray-700">
              <p>Australian International Education and Training Pty Ltd Trading as Safety Training Academy</p>
              <p>14- 16 Marjorie Street Sefton NSW 2162 -- Ph: 1300 976 097</p>
            </div>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Form 36.</span>
              <span>Page 14 of 14</span>
              <span>230802</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 20 (Training Agreement Page 1 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-4 w-full text-center">
            <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain mb-1" />
            <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            <h1 className="text-lg sm:text-xl font-extrabold text-black uppercase tracking-wide mt-2">Training Agreement</h1>
            <h3 className="text-xs sm:text-sm font-bold text-black italic">(To be completed by the participant at enrolment)</h3>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black space-y-3 leading-relaxed">
            <div className="flex flex-wrap items-center gap-1.5 font-medium text-black">
              <span>I</span>
              <input type="text" className="border-b border-gray-400 outline-none bg-transparent w-full sm:w-[280px] text-center font-bold px-2 py-0.5" />
              <span>(insert full legal name) agree to undertake training with</span>
            </div>
            <p className="font-medium text-black">Australian International Education and Training ( AIET ) , in the following course:</p>

            <p className="text-center font-extrabold text-sm sm:text-base my-3 text-black">
              RIIWHS204E – Work Safely at Heights
            </p>

            <p className="font-medium text-black">During the course of this program, I understand and acknowledge that:</p>

            <div className="space-y-2">
              <p className="font-bold text-black">My rights and obligations, as defined in the Participant Handbook include:</p>
              <ol className="list-decimal pl-5 space-y-1 font-medium text-black">
                <li>My obligation at all times to conduct myself safely and in adherence to all relevant legislation.</li>
                <li>I will actively attempt all training and assessment tasks with serious effort.</li>
                <li>That I will comply with all safe and lawful requests</li>
                <li>I will arrive on time and will return on time from all breaks.</li>
                <li>That I will not bully, abuse, vilify or fail to treat all people participating, associated with, or in the vicinity of AIET venues with the utmost respect and courtesy.</li>
              </ol>
            </div>

            <div className="space-y-2 pt-1">
              <p className="font-bold text-black">Australian International Education and Training ( AIET) rights and obligations include:</p>
              <ol className="list-decimal pl-5 space-y-1 font-medium text-black" start={6}>
                <li>To provide quality training and assessment services, compliant to the NVR Standards, in a competent manner through the provision of quality resources and staff resulting in the issuance of AQF statement of attainment.</li>
                <li>Assessment be performed by qualified assessors with the required knowledge and currency in the needs of industry.</li>
                <li>Guaranteeing to provide assessment services to customers who have met their obligations with regard to completion of enrolment details, and financial payments</li>
                <li>Guaranteeing that in the event that Australian International Education and Training ( AIET) cannot deliver a course, a full refund of all monies paid to Australian International Education and Training ( AIET) will be refunded to the purchaser.</li>
                <li>Committing that training will not be offered to participants who fail to wear PPE or fail to pay for the course.</li>
                <li>Choosing to terminate a customer’s training if they fail to uphold these standards</li>
                <li>Keeping participants informed of any changes in the service delivery including trainers, our ownership, the engagement of third parties or any other aspect of the participants training experience.</li>
              </ol>
            </div>

            <div className="pt-2 space-y-2">
              <p className="font-semibold text-black">Agreed to and accepted by Participant:</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center font-bold">
                <div className="flex-1 flex items-center gap-2">
                  <span>Signed</span>
                  <input type="text" className="flex-1 border-b border-dotted border-gray-500 outline-none bg-transparent px-2" />
                </div>
                <div className="flex items-center gap-2">
                  <span>Date</span>
                  <input type="text" className="w-[180px] border-b border-dotted border-gray-500 outline-none bg-transparent text-center" />
                </div>
              </div>
            </div>

            {/* Office Use Box */}
            <div className="border border-gray-500 rounded-sm p-3 mt-4 space-y-3 text-[11px] sm:text-xs">
              <p className="font-bold underline text-black">Office use only</p>
              <p className="font-medium text-black">Agreed to and accepted by Australian International Education and Training ( AIET) Representative:</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center font-bold">
                <div className="flex-1 flex items-center gap-2">
                  <span>Signed</span>
                  <input type="text" className="flex-1 border-b border-dotted border-gray-500 outline-none bg-transparent px-2" />
                </div>
                <div className="flex items-center gap-2">
                  <span>Date</span>
                  <input type="text" className="w-[180px] border-b border-dotted border-gray-500 outline-none bg-transparent text-center" />
                </div>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <span>Print Name:</span>
                <input type="text" className="flex-1 border-b border-dotted border-gray-500 outline-none bg-transparent px-2" />
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[9px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-300 gap-1 text-center">
            <p>Australian International Education and Training Pty Ltd &nbsp; T/A &nbsp; Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 &nbsp; Ph:1300 976 097 &nbsp; email: info@Safetytrainingacademy.edu.au</p>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Issue Date: 230831</span>
              <span>Page 1 of 4</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 21 (Participant record of Training Page 2 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-4 w-full text-center">
            <img src={logoIconImage} alt="STA Safety Training Academy Logo" className="w-[80px] sm:w-[90px] h-auto object-contain mb-1" />
            <h2 className="text-xs sm:text-sm font-bold text-black">RTO 45234</h2>
            <h1 className="text-lg sm:text-xl font-extrabold text-black tracking-wide mt-2">Participant record of Training</h1>
          </div>

          <div className="px-1 sm:px-4 flex-1 text-xs text-black space-y-4">
            
            {/* Participant Details Box */}
            <div className="border border-gray-500 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#c2cad0] font-bold p-2 border-b border-gray-500 text-black">
                Participant details
              </div>
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-500 font-semibold">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-500 flex items-center gap-2">
                  <span className="text-black font-normal">Name:</span>
                  <input type="text" className="flex-1 outline-none bg-transparent font-bold text-xs" />
                </div>
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-500 flex items-center gap-2">
                  <span className="text-black font-normal">D.O.B:</span>
                  <input type="text" className="w-8 outline-none bg-transparent text-center text-xs" placeholder="" />
                  <span>/</span>
                  <input type="text" className="w-8 outline-none bg-transparent text-center text-xs" placeholder="" />
                  <span>/</span>
                  <input type="text" className="w-12 outline-none bg-transparent text-center text-xs" placeholder="" />
                </div>
                <div className="p-2 flex items-center gap-3">
                  <span className="text-black font-normal">Sex:</span>
                  <span className="font-normal text-black">M / F</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="p-2 border-b border-gray-500 flex items-start gap-2 font-semibold">
                <span className="text-black font-normal pt-0.5">Address:</span>
                <textarea rows={2} className="flex-1 outline-none bg-transparent font-bold text-xs resize-none"></textarea>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 font-semibold">
                <div className="p-2 border-b md:border-b-0 md:border-r border-gray-500 flex items-center gap-2">
                  <span className="text-black font-normal">Phone:</span>
                  <input type="text" className="flex-1 outline-none bg-transparent font-bold text-xs" />
                </div>
                <div className="p-2 flex items-center gap-2">
                  <span className="text-black font-normal">Email:</span>
                  <input type="text" className="flex-1 outline-none bg-transparent font-bold text-xs" />
                </div>
              </div>
            </div>

            {/* Training Log Box */}
            <div className="border border-gray-500 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#c2cad0] font-bold p-2 border-b border-gray-500 text-black">
                Training Log:
              </div>
              
              {/* Table Headers */}
              <div className="grid grid-cols-[140px_1fr_1fr] text-center border-b border-gray-500 font-semibold bg-white text-[11px] sm:text-xs">
                <div className="p-2 border-r border-gray-500">Training Date</div>
                <div className="p-2 border-r border-gray-500">Participant full Name</div>
                <div className="p-2">Participant Signature</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-[140px_1fr_1fr] text-center border-b border-gray-500 h-8">
                <div className="p-1 border-r border-gray-500 flex items-center justify-center gap-2">
                  <span>/</span>
                  <span>/</span>
                </div>
                <div className="p-1 border-r border-gray-500">
                  <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                </div>
                <div className="p-1">
                  <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                </div>
              </div>

              {/* Rows 2-5 */}
              {[2, 3, 4, 5].map((rowIdx) => (
                <div key={rowIdx} className={`grid grid-cols-[140px_1fr_1fr] text-center h-8 ${rowIdx < 5 ? 'border-b border-gray-500' : ''}`}>
                  <div className="p-1 border-r border-gray-500 flex items-center justify-center gap-1">
                    <input type="text" className="w-full h-full text-center bg-transparent outline-none" />
                  </div>
                  <div className="p-1 border-r border-gray-500">
                    <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                  </div>
                  <div className="p-1">
                    <input type="text" className="w-full h-full bg-transparent outline-none text-center font-semibold text-xs" />
                  </div>
                </div>
              ))}
            </div>

            {/* Resources Checklist Box */}
            <div className="border border-gray-500 rounded-sm overflow-hidden bg-white text-xs">
              <div className="bg-[#c2cad0] font-bold p-2 border-b border-gray-500 text-black">
                Resources
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-500 font-medium text-black">
                <label className="p-2 border-b sm:border-b-0 sm:border-r border-gray-500 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>PowerPoint presentation</span>
                </label>
                <label className="p-2 border-b sm:border-b-0 sm:border-r border-gray-500 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>Leaner Guide</span>
                </label>
                <label className="p-2 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>Practical tasks</span>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 font-medium text-black">
                <label className="p-2 border-b sm:border-b-0 sm:border-r border-gray-500 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>Training Videos</span>
                </label>
                <label className="p-2 border-b sm:border-b-0 sm:border-r border-gray-500 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span>Review questions</span>
                </label>
                <label className="p-2 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  <span className="flex items-center gap-1.5 flex-1">
                    <span>Other:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent" />
                  </span>
                </label>
              </div>
            </div>

            {/* Summary Box */}
            <div className="border border-gray-500 rounded-sm overflow-hidden bg-white text-xs">
              <div className="flex w-full border-b border-gray-500 bg-[#c2cad0] font-bold text-black">
                <div className="flex-1 p-2 border-r border-gray-500">Summary</div>
                <div className="w-[120px] p-2 text-center">Satisfactory?</div>
              </div>
              
              <div className="flex w-full">
                <div className="flex-1 p-3 border-r border-gray-500 space-y-2.5 font-medium text-black">
                  <p>The participant has:</p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span>Attended PowerPoint Presentation /participated in PowerPoint Quiz</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span>Completed Questions (Knowledge assessment)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <span>Completed Practical tasks</span>
                  </label>
                  
                  <div className="pt-2 flex flex-col gap-1">
                    <span className="font-normal text-black">Notes/comments:</span>
                    <textarea rows={2} className="w-full border-b border-gray-400 p-1 outline-none bg-transparent font-normal text-xs resize-none"></textarea>
                  </div>
                </div>
                
                <div className="w-[120px] flex">
                  {/* Yes column */}
                  <div className="w-1/2 border-r border-gray-500 flex flex-col items-center pt-2 space-y-5 font-normal text-black bg-white">
                    <span className="text-xs">Yes</span>
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  </div>
                  {/* No column */}
                  <div className="w-1/2 flex flex-col items-center pt-2 space-y-5 font-normal text-black bg-white">
                    <span className="text-xs">No</span>
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                    <input type="checkbox" className="w-3.5 h-3.5 border-black rounded-sm cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Trainer Signatures */}
            <div className="pt-3 font-normal text-black flex flex-col sm:flex-row gap-4 sm:items-center text-[11px] sm:text-xs">
              <div className="flex-1 flex items-center gap-1.5">
                <span>Trainer’s Name :</span>
                <input type="text" className="flex-1 border-b border-gray-500 outline-none bg-transparent" />
              </div>
              <div className="flex-1 flex items-center gap-1.5">
                <span>Trainer’s signature</span>
                <input type="text" className="flex-1 border-b border-gray-500 outline-none bg-transparent" />
              </div>
              <div className="flex items-center gap-1.5">
                <span>Date:</span>
                <input type="text" className="w-[100px] border-b border-gray-500 outline-none bg-transparent text-center" />
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col text-[8px] sm:text-[9px] text-black mt-auto pt-4 px-2 sm:px-4 w-full border-t border-gray-300 gap-1 text-center">
            <p>Australian International Education and Training Pty Ltd &nbsp; T/A &nbsp; Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 &nbsp; Ph:1300 976 097 &nbsp; email: info@Safetytrainingacademy.edu.au</p>
            <div className="flex justify-between items-center font-semibold pt-1 border-t border-gray-300">
              <span>Issue Date: 230831</span>
              <span>Page 2 of 4</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 22 (Assessment Page 1 of 32 - Candidate Assessment Tool) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Candidate Assessment Tool Box */}
            <div className="flex flex-col text-xs sm:text-sm border border-[#9cb2d6] mb-8 bg-white">
              
              {/* Title Header */}
              <div className="bg-[#cad6ec] border-b border-[#9cb2d6] font-bold p-3.5 sm:p-4 text-center text-base sm:text-lg text-black">
                Candidate Assessment Tool
              </div>

              {/* Assessment Type */}
              <div className="flex flex-col sm:flex-row border-b border-[#9cb2d6]">
                <div className="bg-[#cad6ec] sm:w-[220px] p-3.5 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-[#9cb2d6] flex items-center shrink-0 text-black">
                  Assessment Type
                </div>
                <div className="flex-1 p-3.5 sm:p-4 bg-white text-black leading-relaxed font-normal">
                  There are 2 <span className="font-bold">summative assessments</span> for demonstration of competency for this unit. All assessments must be completed satisfactorily for the student to be determined as “competent”. Students may re-sit either assessment once only, after which a performance review will be conducted
                </div>
              </div>

              {/* Assessment Methods */}
              <div className="flex flex-col sm:flex-row border-b border-[#9cb2d6]">
                <div className="bg-[#cad6ec] sm:w-[220px] p-3.5 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-[#9cb2d6] flex items-center shrink-0 text-black">
                  Assessment Methods
                </div>
                <div className="flex-1 flex flex-col bg-white">
                  <div className="flex border-b border-[#9cb2d6]">
                    <div className="w-[130px] sm:w-[150px] p-2.5 sm:p-3 font-bold border-r border-[#9cb2d6] shrink-0 text-black">
                      Assessment 1
                    </div>
                    <div className="flex-1 p-2.5 sm:p-3 font-normal text-black">
                      Written questions
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[130px] sm:w-[150px] p-2.5 sm:p-3 font-bold border-r border-[#9cb2d6] shrink-0 text-black">
                      Assessment 2
                    </div>
                    <div className="flex-1 p-2.5 sm:p-3 font-normal text-black">
                      Practical Demonstration
                    </div>
                  </div>
                </div>
              </div>

              {/* Unit Summary Header */}
              <div className="bg-[#cad6ec] border-y border-[#9cb2d6] font-bold p-3 text-center text-sm sm:text-base text-black">
                Unit Summary
              </div>
              
              {/* Unit Summary Content */}
              <div className="p-4 sm:p-5 bg-white flex flex-col gap-3.5 text-black leading-relaxed font-normal">
                <p>This unit describes the skills and knowledge required to work safely at heights in the resources and infrastructure industries.</p>
                <p>It applies to those working in operational roles. They generally work under supervision to undertake a prescribed range of functions involving known routines and procedures and take responsibility for the quality of work outcomes.</p>
                <p>Licensing, legislative and certification requirements that apply to this unit can vary between states, territories and industry sectors. Users must check requirements with relevant body before applying the unit.</p>
              </div>

              {/* Prerequisite Header */}
              <div className="bg-[#cad6ec] border-y border-[#9cb2d6] font-bold p-3 text-center text-sm sm:text-base text-black">
                Prerequisite
              </div>
              
              {/* Prerequisite Content */}
              <div className="p-4 sm:p-5 bg-white text-black font-normal min-h-[70px]">
                <p>There are no recommended pre-requisite units for this competency.</p>
              </div>
            </div>

          </div>

          {/* Footer Page 22 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 1 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 23 (Assessment Page 2 of 32 - Instructions to the Assessor) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-black space-y-0.5 uppercase tracking-wide">
              <p>SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p>WRITTEN QUESTIONS</p>
              <p>INSTRUCTIONS TO THE ASSESSOR</p>
            </div>

            {/* Table / Grid */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-600 mb-8 bg-white">
              
              {/* Place and duration of assessment */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Place and duration of assessment
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed">
                  <p>This is an open book assessment conducted in class that must be completed during the allocated assessment period. Students should allocate approximately 3 hours to complete this task.</p>
                  <div className="flex flex-wrap items-center mt-3 font-bold">
                    <span>Assessment Due Date:</span>
                    <input type="text" placeholder="DD / MM / YYYY" className="border-b border-black w-[160px] sm:w-[200px] outline-none bg-transparent ml-2 text-center text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Guidance to Students */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Guidance to Students
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed flex flex-col gap-3">
                  <p>You are to ensure the student understands their obligations as required by the training package and listed as Instructions to Students.</p>
                  <p>Check the student is ready for assessment; defer the assessment if they are not.<br />It is important that you do not teach at the assessment but allow students to find the answers for themselves.</p>
                  <p>Feedback is to be given at the completion of the assessment using the feedback to student form.</p>
                  <p>Inform the student that, should they disagree with the assessment outcome, they can appeal the decision as stated in the Student Handbook.</p>
                  <p>If a student completes any section of this assessment incorrectly, you are to sit down with them and assist them in their understanding. The student record must indicate that the student has all required knowledge in completing the task</p>
                </div>
              </div>

              {/* Reasonable adjustment */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Reasonable adjustment
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed flex flex-col gap-3">
                  <p>Assessment processes and techniques should as far as is practical take into account the language, literacy and numeracy capacity of the student in relation to the competency being assessed. Supplementary evidence of competency may be obtained from relevant authenticated documentation from third parties, such as existing supervisors, team leaders or specialist training staff.</p>
                  <p>If the student is unable to complete the demonstration in this format the student may take the assessment in an alternative format. The student must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
                </div>
              </div>

              {/* Context of assessment */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Context of assessment
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed">
                  <p>This assessment relates to a range of questions and is designed to assess whether the candidate has the knowledge required to provide telecommunications services safely on roofs. The context of assessment is in a simulated construction worksite.</p>
                </div>
              </div>

              {/* Plagiarism and cheating */}
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Plagiarism and cheating
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed">
                  <p>Students must explain their answers in their own words: not cut /paste from the internet as this is plagiarism. If you identify that a student is cheating or has plagiarised, you are to notify the student and seek an explanation from them. Following this you are to refer them to the CEO for reassessment or other process.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 23 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 2 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 24 (Assessment Page 3 of 32 - Instructions to Student) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-black space-y-0.5 uppercase tracking-wide">
              <p>SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p>WRITTEN QUESTIONS</p>
              <p>INSTRUCTIONS TO STUDENT</p>
            </div>

            {/* Sections */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-600 mb-8 bg-white">
              
              {/* Place and duration of assessment */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 font-bold p-2.5 sm:p-3 text-xs sm:text-sm text-black">
                Place and duration of assessment
              </div>
              <div className="p-3.5 sm:p-4 bg-white border-b border-gray-600 text-black leading-relaxed">
                <p>This is an open book assessment conducted in class that must be completed during the allocated assessment period. Students should allocate approximately 3 hours to complete this task.</p>
                <div className="flex flex-wrap items-center mt-3 font-bold">
                  <span>Assessment Due Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="border-b border-black w-[160px] sm:w-[200px] outline-none bg-transparent ml-2 text-center text-gray-800" />
                </div>
              </div>

              {/* Competency Criteria and Benchmarking */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 font-bold p-2.5 sm:p-3 text-xs sm:text-sm text-black">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-3.5 sm:p-4 bg-white border-b border-gray-600 text-black leading-relaxed flex flex-col gap-2.5">
                <p>To receive a “Satisfactory” grade for this assessment you must:</p>
                <label className="flex items-center gap-2.5 ml-3 sm:ml-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-600 cursor-pointer" />
                  <span>Complete all written questions</span>
                </label>
                <label className="flex items-center gap-2.5 ml-3 sm:ml-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-600 cursor-pointer" />
                  <span>All responses for each question must be marked as satisfactory by the assessor</span>
                </label>
                <p className="mt-1">Before you commence the assessment you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed “Satisfactory” against all performance criteria in all assessments by your assessor to be considered “Competent” in this Unit of Competency. Feedback will be given to you.</p>
              </div>

              {/* Reasonable Adjustment and re-assessment policy */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 font-bold p-2.5 sm:p-3 text-xs sm:text-sm text-black">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-3.5 sm:p-4 bg-white border-b border-gray-600 text-black leading-relaxed flex flex-col gap-2.5">
                <p>Assessment processes and techniques will as far as is practical take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.</p>
                <p>If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
              </div>

              {/* Assessor Intervention */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 font-bold p-2.5 sm:p-3 text-xs sm:text-sm text-black">
                Assessor Intervention
              </div>
              <div className="p-3.5 sm:p-4 bg-white text-black leading-relaxed flex flex-col gap-3">
                <p>Assessors are to check that the student is ready for assessment, and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.</p>
                <p>Feedback is to be given at the completion of the assessment using the feedback to student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.</p>
                <p>Your student record must indicate that you have all required skills and knowledge in completing the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. In the event that the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.</p>
              </div>

            </div>

          </div>

          {/* Footer Page 24 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 3 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 25 (Assessment Page 4 of 32 - Student Identifier) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center font-bold text-sm sm:text-base mb-6 text-black space-y-0.5 uppercase tracking-wide">
              <p>SUMMATIVE ASSESSMENT 1 OF 2</p>
              <p>WRITTEN QUESTIONS</p>
              <p>STUDENT IDENTIFIER</p>
            </div>

            {/* Table */}
            <div className="flex flex-col text-xs sm:text-sm border border-gray-600 mb-8 bg-white">
              
              {/* Student's Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-2.5 sm:p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Student’s Name:
                </div>
                <div className="flex-1 p-2 sm:p-2.5 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm font-medium text-gray-800" />
                </div>
              </div>

              {/* Assessor's Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-2.5 sm:p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Assessor’s Name:
                </div>
                <div className="flex-1 p-2 sm:p-2.5 bg-white">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm font-medium text-gray-800" />
                </div>
              </div>

              {/* Date of Assessment/Submission */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-2.5 sm:p-3 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Date of Assessment/<br className="hidden sm:inline" />Submission:
                </div>
                <div className="flex-1 p-2 sm:p-2.5 bg-white">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full bg-transparent outline-none text-xs sm:text-sm font-medium text-gray-800" />
                </div>
              </div>

              {/* Evidence */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Evidence
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed">
                  <p className="mb-2">You will be required to submit the following evidence in order to be assessed:</p>
                  <label className="flex items-center gap-2 mb-1.5 cursor-pointer font-medium">
                    <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-600 cursor-pointer" />
                    <span>Student Identifier</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-medium">
                    <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-600 cursor-pointer" />
                    <span>Completed written questions</span>
                  </label>
                </div>
              </div>

              {/* Definition */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Definition
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed">
                  <p>Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant’s exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:</p>
                  <ul className="list-disc pl-5 mt-2.5 space-y-1.5 text-xs sm:text-sm">
                    <li>Presenting any work by another individual as one's own unintentionally.</li>
                    <li>Handing in work markedly similar to or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              {/* Declaration */}
              <div className="flex flex-col sm:flex-row">
                <div className="bg-[#b4c6e7] sm:w-[220px] p-3 sm:p-4 font-bold border-b sm:border-b-0 sm:border-r border-gray-600 flex items-center shrink-0 text-black">
                  Declaration:
                </div>
                <div className="flex-1 p-3 sm:p-4 bg-white text-black leading-relaxed flex flex-col gap-3">
                  <p>I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.</p>
                  <p>I acknowledge that I am ready to undertake the assessment.</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-4 font-bold">
                    <span className="whitespace-nowrap">Student Signature</span>
                    <input type="text" className="flex-1 border-b border-black outline-none bg-transparent pb-0.5" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end gap-2 mt-2 font-bold">
                    <span className="whitespace-nowrap">Date</span>
                    <input type="text" placeholder="DD / MM / YYYY" className="w-full sm:w-[220px] border-b border-black outline-none bg-transparent pb-0.5 text-center" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 25 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 4 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 26 (Assessment Page 5 of 32 - Summative Assessment 1: Written Questions) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center font-bold text-base sm:text-lg mb-4 text-black">
              Summative Assessment 1: Written Questions
            </div>

            {/* Instruction */}
            <p className="font-bold text-xs sm:text-sm mb-6 text-black underline">
              Read each question carefully. Make sure you answer all questions.
            </p>

            {/* Question 1 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 1
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                A PCBU (employer) has a duty of care under the WHS Act. What does the law say the PCBU’s duty of care is?
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 2
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E PC
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                A worker (employee) has a duty of care under the WHS Act. What does the law say the employee’s duty of care is?
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 3
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are 4 ways you can find information about the site and the type of work you will be doing?
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 26 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 5 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 27 (Assessment Page 6 of 32 - Questions 4 to 7) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 4
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                List the five (5) steps in the 'prevention of falls hierarchy' in order.
              </div>
              <div className="p-3 bg-white min-h-[120px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 5 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 5
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Which level of the prevention of falls hierarchy is an EWP in? What is this level called?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 6 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 6
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Which is higher on the 'prevention of falls hierarchy', guard railing, or working on the ground?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 7 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 7
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Which is higher on the 'prevention of falls hierarchy' - a fall restraint system or a fall arrest system?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 27 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 6 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 28 (Assessment Page 7 of 32 - Questions 8 to 11) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 8 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 8
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Why is it important to communicate with other workers (such as OHS/WHS reps) before you begin work?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 9 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 9
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You will be working at heights. What are three (3) ways you could access the work area?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 10 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 10
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Before you attach to a harness fall arrest system there are two (2) pieces of paperwork that must be filled out. What are they?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 11 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 11
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Give three (3) examples of administrative measures you could use to keep people safe.
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 28 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 7 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 29 (Assessment Page 8 of 32 - Questions 12 to 15) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 12 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 12
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Give four (4) examples of things should you look for when inspecting the work site.
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 13 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 13
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Why do you need to communicate with workmates in an emergency? Give 2 Reasons
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 14 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 14
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You have a job to do that is 2 metres high. You have decided to only use an administrative measure to control the risk. Why do you need to document this?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 15 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 15
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                How does an energy absorber keep you safe if you fall?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 29 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 8 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 30 (Assessment Page 9 of 32 - Questions 16 to 18) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 16 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 16
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                There are several things workers should understand before using a scaffold. Name three (3) of these.
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 17 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 17
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You notice red marks on the D-ring on your harness. Also it won't 'spring back'. What does this indicate?
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 18 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 18
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                List five (5) hazards associated with working at heights.
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 30 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 9 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 31 (Assessment Page 10 of 32 - Questions 19 to 22) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 19 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 19
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Do you need to wear a harness when using a boom type EWP?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 20 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 20
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                When working at heights what are the two (2) main causes of death?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 21 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 21
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Why can't you work on a harness fall arrest system by yourself?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 22 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 22
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You will be using an EWP. List five (5) safety issues you need to think about.
              </div>
              <div className="p-3 bg-white min-h-[120px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 31 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 10 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 32 (Assessment Page 11 of 32 - Questions 23 to 25) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 23 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 23
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                List six (6) pieces of equipment that makes up a harness fall arrest system.
              </div>
              <div className="p-3 bg-white min-h-[160px] flex">
                <textarea 
                  rows={6}
                  className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 24 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 24
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are going to connect to a fall arrest system. There is one (1) piece of PPE that you are required by law to wear. What is it?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 25 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 25
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are the four (4) things a 'solid platform' must have?
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 32 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 11 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 33 (Assessment Page 12 of 32 - Questions 26 to 29) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 26 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 26
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Name five (5) pieces of passive fall prevention equipment.
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 27 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 27
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are the two (2) types of work positioning systems?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 28 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 28
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                All fall arrest equipment should have a label. Name three (3) things you should check on the label.
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 29 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 29
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are five (5) defects that would stop you from using a lanyard?
              </div>
              <div className="p-3 bg-white min-h-[120px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 33 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 12 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 34 (Assessment Page 13 of 32 - Questions 30 to 33) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 30 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 30
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are four (4) defects that would stop you from using a harness?
              </div>
              <div className="p-3 bg-white min-h-[130px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 31 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 31
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are two (2) things you can do with a twin tailed lanyard?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 32 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 32
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What does the pelvic strap on your harness do?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 33 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 33
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                How can you safely get tools to the top of a ladder?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 34 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 13 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 35 (Assessment Page 14 of 32 - Questions 34 to 36) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 34 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 34
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What does a toeboard/kickboard do?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 35 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 35
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are two Things workers need to understand before working with a mobile scaffold?
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 36 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 36
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are going to be working up high. Give five (5) examples of ways to keep people safe below the work area.
              </div>
              <div className="p-3 bg-white min-h-[140px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 35 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 14 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 36 (Assessment Page 15 of 32 - Questions 37 to 41) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 37 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 37
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are using a static line. How much weight does the anchor point need to hold if one person is using it?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[75px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 38 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 38
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are using a static line. How much weight does the anchor point need to hold if two people are using it?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[75px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 39 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 39
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                How can you tell if an anchor point is safe to use?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[75px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 40 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 40
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are attaching a carabiner to a harness. Which way does the karabiner lock need to screw?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[75px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[60px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 41 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 41
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Name four (4) pieces of work at heights equipment you cannot put up unless you have a licence.
              </div>
              <div className="p-3 bg-white min-h-[120px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 36 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 15 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 37 (Assessment Page 16 of 32 - Questions 42 to 44) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 42 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 42
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are four (4) things you must do to set up a ladder correctly?
              </div>
              <div className="p-3 bg-white min-h-[160px] flex">
                <textarea 
                  rows={6}
                  className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 43 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 43
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are five (5) things you should never do when using a ladder?
              </div>
              <div className="p-3 bg-white min-h-[160px] flex">
                <textarea 
                  rows={6}
                  className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 44 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 44
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are three (3) ways to stop tools and equipment from falling from above?
              </div>
              <div className="p-3 bg-white min-h-[120px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 37 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 16 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 38 (Assessment Page 17 of 32 - Questions 45 to 48) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 45 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 45
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Name five (5) safety problems that would stop you using a ladder.
              </div>
              <div className="p-3 bg-white min-h-[150px] flex">
                <textarea 
                  rows={5}
                  className="w-full h-full min-h-[130px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 46 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 46
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What is the open hand – closed hand method of adjusting your leg straps?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 47 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 47
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are four (4) ways to safely move tools and equipment safely to and from the work area?
              </div>
              <div className="p-3 bg-white min-h-[120px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[100px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 48 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 48
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                When working at heights you often need to lift or pass materials to workmates. This is called manual handling. Manual handling is any type of work where you lift, lower, push, pull, carry or move a load. If you don’t lift or move things properly, what kinds of injuries might you get?
              </div>
              <div className="p-3 bg-white min-h-[110px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[90px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 38 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 17 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 39 (Assessment Page 18 of 32 - Questions 49 to 53) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 49 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 49
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are going to be using air and power tools. What is a safe way of running leads and air hoses when working up high?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[70px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[55px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 50 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 50
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Why must you regularly check your safety system?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[70px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[55px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 51 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 51
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You have set up your risk control measures. Why do you need to re-check them during the job?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[70px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[55px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 52 */}
            <div className="flex flex-col border border-gray-600 mb-4 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 52
                </div>
                <div className="flex-1 p-2 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2 sm:p-2.5 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You are working up high and the weather changes (extremely high wind). What must you do?
              </div>
              <div className="p-2 sm:p-2.5 bg-white min-h-[70px] flex">
                <textarea 
                  rows={2}
                  className="w-full h-full min-h-[55px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 53 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 53
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Name three (3) hazards you need to plan for when removing scaffolding.
              </div>
              <div className="p-3 bg-white min-h-[100px] flex">
                <textarea 
                  rows={3}
                  className="w-full h-full min-h-[80px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 39 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 18 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 40 (Assessment Page 19 of 32 - Questions 54 to 56) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 54 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 54
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                You have finished working. What are three (3) things you should do to clean up the site?
              </div>
              <div className="p-3 bg-white min-h-[160px] flex">
                <textarea 
                  rows={6}
                  className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 55 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 55
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Where should you store your harness fall arrest equipment?
              </div>
              <div className="p-3 bg-white min-h-[130px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 56 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 56
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                Where do you record the equipment or parts used when checking equipment?
              </div>
              <div className="p-3 bg-white min-h-[130px] flex">
                <textarea 
                  rows={4}
                  className="w-full h-full min-h-[110px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 40 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 19 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 41 (Assessment Page 20 of 32 - Questions 57 to 58 & End of Knowledge Question Declaration) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Question 57 */}
            <div className="flex flex-col border border-gray-600 mb-5 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 57
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are 6 techniques for coordinating and communicating job activities with others when working at heights?
              </div>
              <div className="p-3 bg-white min-h-[150px] flex">
                <textarea 
                  rows={6}
                  className="w-full h-full min-h-[130px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* Question 58 */}
            <div className="flex flex-col border border-gray-600 mb-6 bg-white">
              <div className="flex border-b border-gray-600 bg-white font-bold text-xs sm:text-sm">
                <div className="w-[130px] sm:w-[160px] p-2 sm:p-2.5 border-r border-gray-600 shrink-0 text-black">
                  Question &nbsp; 58
                </div>
                <div className="flex-1 p-2 sm:p-2.5 text-black">
                  RIIWHS204E
                </div>
              </div>
              <div className="p-2.5 sm:p-3 border-b border-gray-600 font-bold text-xs sm:text-sm text-black leading-snug bg-white">
                What are 5 things should you check to ensure safe access from ground to work area?
              </div>
              <div className="p-3 bg-white min-h-[150px] flex">
                <textarea 
                  rows={6}
                  className="w-full h-full min-h-[130px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
            </div>

            {/* End of Knowledge Question Section */}
            <div className="mt-2 mb-6">
              <h3 className="text-center font-bold text-base sm:text-lg mb-4 text-black">
                End of Knowledge Question
              </h3>
              
              <div className="flex items-start gap-2 text-xs sm:text-sm text-black mb-3">
                <span className="text-base leading-none">❖</span>
                <p>You have now completed the knowledge assessment. Submit this document to your trainer/assessor for marking.</p>
              </div>

              <p className="text-xs sm:text-sm text-black leading-relaxed mb-6">
                <span className="font-bold">Participant Declaration:</span> I declare that the information contained above in the written &nbsp;assessment summary is accurate and is a true reflection of the underpinning written assessment I undertook.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-end text-xs sm:text-sm font-medium text-black">
                <div className="flex-1 flex items-end gap-1">
                  <span className="whitespace-nowrap font-bold">Participant’s Name:</span>
                  <input type="text" className="flex-1 border-b border-black outline-none bg-transparent pb-0.5" />
                </div>
                <div className="flex-1 flex items-end gap-1">
                  <span className="whitespace-nowrap font-bold">Signature:</span>
                  <input type="text" className="flex-1 border-b border-black outline-none bg-transparent pb-0.5" />
                </div>
                <div className="flex items-end gap-1">
                  <span className="whitespace-nowrap font-bold">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="w-[120px] border-b border-black outline-none bg-transparent text-center pb-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Footer Page 41 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 20 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 42 (Assessment Page 21 of 32 - Summative Assessment 1: Assessment Review) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-base sm:text-lg mb-6 text-black">
              Summative Assessment 1: Assessment Review
            </h2>

            {/* Assessment Review Table */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Row 1: Evidence Attached */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Have the following evidence been attached
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm space-y-2">
                  <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Student identifier</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>All other evidence</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Completed Observation Checklist</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row 2: Outcome */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Summative Assessment 2 outcome:
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm flex flex-wrap gap-6 sm:gap-12 items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                    <span>Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                    <span>Not satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Row 3: Feedback */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Feedback
                </div>
                <div className="flex-1 p-3 min-h-[160px] flex">
                  <textarea 
                    rows={6}
                    className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                    placeholder="Enter assessor feedback here..."
                  ></textarea>
                </div>
              </div>

              {/* Row 4: Assessor Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Assessor Name:
                </div>
                <div className="flex-1 p-3">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 5: Assessor Signature */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Assessor Signature:
                </div>
                <div className="flex-1 p-3">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 6: Date */}
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Date:
                </div>
                <div className="flex-1 p-3">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full sm:w-[200px] bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 42 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 21 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 43 (Assessment Page 22 of 32 - Summative Assessment 2: Instructions to Student) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="font-bold text-sm sm:text-base text-black tracking-wide">SUMMATIVE ASSESSMENT 2 OF 2</h2>
              <h3 className="font-bold text-xs sm:text-sm text-black">PRACTICAL DEMONSTRATION</h3>
              <h3 className="font-bold text-xs sm:text-sm text-black">INSTRUCTIONS TO STUDENT</h3>
            </div>

            {/* Instructions Box */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Section 1: Place and duration */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 p-2 sm:p-2.5 font-bold text-xs sm:text-sm text-black">
                Place and duration of assessment
              </div>
              <div className="p-3 border-b border-gray-600 text-xs sm:text-sm text-black leading-relaxed space-y-2">
                <p>This is a closed book assessment conducted in a simulated environment that must be completed during the allocated assessment period. Students should allocate approximately 1 hour to complete this task.</p>
                <div className="flex items-center gap-2 font-bold pt-1">
                  <span>Assessment Due Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="border-b border-black outline-none bg-transparent w-[140px] text-center font-normal" />
                </div>
              </div>

              {/* Section 2: Competency Criteria */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 p-2 sm:p-2.5 font-bold text-xs sm:text-sm text-black">
                Competency Criteria and Benchmarking
              </div>
              <div className="p-3 border-b border-gray-600 text-xs sm:text-sm text-black leading-relaxed space-y-2">
                <p>To receive a “Satisfactory” grade for this assessment you must:</p>
                <div className="pl-3 sm:pl-5 space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                    <span>Student Identifier</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                    <span>Completed Observation Checklist</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                    <span>Completed SWMS (Appendix A)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                    <span>Completed Work at Heights Rescue Plan (Appendix B)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                    <span>Completed Safety Harness Inspection Checklist (Appendix C)</span>
                  </label>
                </div>
                <p className="pt-2 text-justify">
                  Before you commence the assessment, you will be informed of the assessment criteria and benchmarking used by the assessor. You must be deemed “Satisfactory” against all performance criteria in all assessments by your assessor to be considered “Competent” in this Unit of Competency. Feedback will be given to you.
                </p>
              </div>

              {/* Section 3: Reasonable Adjustment */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 p-2 sm:p-2.5 font-bold text-xs sm:text-sm text-black">
                Reasonable Adjustment and re-assessment policy
              </div>
              <div className="p-3 border-b border-gray-600 text-xs sm:text-sm text-black leading-relaxed space-y-2 text-justify">
                <p>Assessment processes and techniques will, as far as is practical, take into account your language, literacy and numeracy capacity and disabilities in relation to the competency being assessed.</p>
                <p>If you are unable to complete the demonstration in this format you may take the assessment in an alternative format. You must arrange an alternative assessment with your assessor prior to the assessment date. There will be ONE CHANCE ONLY to re-sit the assessment. If re-assessment is required, students are required to re-submit the aspects that were deemed as not satisfactory by the assessor.</p>
              </div>

              {/* Section 4: Assessor Intervention */}
              <div className="bg-[#b4c6e7] border-b border-gray-600 p-2 sm:p-2.5 font-bold text-xs sm:text-sm text-black">
                Assessor Intervention
              </div>
              <div className="p-3 text-xs sm:text-sm text-black leading-relaxed space-y-2 text-justify">
                <p>Assessors are to check that the student is ready for assessment and defer the assessment if they are not. It is important that assessors do not teach at the assessment but allow students to find the answers for themselves.</p>
                <p>Feedback is to be given at the completion of the assessment using the feedback to student. If a student does not meet a standard, the assessor is to sit down with them and assist them in their understanding. Should you disagree with the assessment outcome, you can appeal the decision as stated in the Student Handbook.</p>
                <p>Your student record must indicate that you have all required skills and knowledge in completing the task. For each assessment, the assessor is to act as a supervisor and not interfere with the assessment. In the event that the assessment activities will impact on your safety or that of others, the assessment must be stopped immediately.</p>
              </div>

            </div>

          </div>

          {/* Footer Page 43 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 22 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 44 (Assessment Page 23 of 32 - Summative Assessment 2: Student Identifier) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="font-bold text-sm sm:text-base text-black tracking-wide">SUMMATIVE ASSESSMENT 2 OF 2</h2>
              <h3 className="font-bold text-xs sm:text-sm text-black">PRACTICAL DEMONSTRATION</h3>
              <h3 className="font-bold text-xs sm:text-sm text-black">STUDENT IDENTIFIER</h3>
            </div>

            {/* Student Identifier Table */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Row 1: Student Name */}
              <div className="flex border-b border-gray-600">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-2.5 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Student’s Name:
                </div>
                <div className="flex-1 p-2.5">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 2: Student ID */}
              <div className="flex border-b border-gray-600">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-2.5 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Student ID:
                </div>
                <div className="flex-1 p-2.5">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 3: Assessor Name */}
              <div className="flex border-b border-gray-600">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-2.5 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Assessor’s Name:
                </div>
                <div className="flex-1 p-2.5">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 4: Date of Assessment */}
              <div className="flex border-b border-gray-600">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-2.5 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0 leading-tight">
                  Date of Assessment/<br/>Submission:
                </div>
                <div className="flex-1 p-2.5">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full sm:w-[200px] bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 5: Evidence */}
              <div className="flex border-b border-gray-600">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-3 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Evidence
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm text-black space-y-2">
                  <p>You will be required to submit the following evidence in order to be assessed:</p>
                  <div className="pl-3 sm:pl-5 space-y-1.5">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                      <span>Student Identifier</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                      <span>Completed Observation Checklist</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                      <span>Completed SWMS (Appendix A)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                      <span>Completed Work at Heights Rescue Plan (Appendix B)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-400 text-blue-600" />
                      <span>Completed Safety Harness Inspection Checklist (Appendix C)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Row 6: Definition */}
              <div className="flex border-b border-gray-600">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-3 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Definition
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm text-black leading-relaxed space-y-2 text-justify">
                  <p>Plagiarism is a form of cheating. It is taking and using someone else's thoughts, writings or inventions and representing them as your own. Plagiarism is a serious act and may result in a participant’s exclusion from a module or a course. When you have any doubts about including the work of other authors in your work, please consult with your facilitator. The following list outlines some of the activities for which a participant can be accused of plagiarism:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Presenting any work by another individual as one's own unintentionally.</li>
                    <li>Handing in work markedly like or copied from another student.</li>
                    <li>Presenting the work of another individual or group as their own work.</li>
                    <li>Handing in work without the adequate acknowledgement of sources used, including work taken totally or in part from the internet.</li>
                  </ul>
                </div>
              </div>

              {/* Row 7: Declaration */}
              <div className="flex">
                <div className="w-[140px] sm:w-[220px] bg-[#b4c6e7] p-3 border-r border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Declaration:
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm text-black leading-relaxed space-y-3 text-justify">
                  <p>I have read the outline of plagiarism and, except where specifically acknowledged, the work contained in this assignment is my own work and has not been copied from other sources or been previously submitted for assessment.</p>
                  <p>I acknowledge that I am ready to undertake the assessment.</p>
                  
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold whitespace-nowrap">Student Signature</span>
                      <input type="text" className="flex-1 border-b border-black outline-none bg-transparent pb-0.5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold whitespace-nowrap">Date</span>
                      <input type="text" placeholder="DD / MM / YYYY" className="w-[160px] border-b border-black outline-none bg-transparent text-center pb-0.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 44 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 23 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 45 (Assessment Page 24 of 32 - Summative Assessment 2: Task 1 Details) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-base sm:text-lg mb-8 text-black">
              Summative Assessment 2: Practical Demonstration of Skill
            </h2>

            {/* Task Content */}
            <div className="text-xs sm:text-sm leading-relaxed space-y-4 text-black text-justify">
              <p className="font-bold underline text-sm sm:text-base">Task 1:</p>
              
              <p>
                You work safely at heights on at least two occasions. You will be required to use a ladder to work on a solid structure platform 2.4 meters high. Once on the platform, you will then use another ladder to reach the 6-meter platform.
              </p>

              <p>
                Prior to undertaking this task, you are to attend a toolbox meeting with your assessor and other colleagues. During the toolbox tell you you will be briefed on the practical tasks to be completed.<br/>
                During the toolbox tell you will be required to:
              </p>

              <ul className="list-disc pl-6 sm:pl-8 space-y-1.5">
                <li>Complete the SWMS (Appendix A)</li>
                <li>Complete Working at Heights Rescue Plan (Appendix B)</li>
                <li>Communicate work plans with other personnel in toolbox talk.</li>
                <li>Select, inspect, and wear suitable PPE required for work task and complete the Harness Inspection Checklist (Appendix C)</li>
              </ul>

              <p className="pt-2">
                Once the toolbox talk has been completed, you must access and install the equipment and then work at heights. This includes:
              </p>

              <ul className="list-disc pl-6 sm:pl-8 space-y-1.5">
                <li>Set up and climb up a ladder.</li>
                <li>Use a twin-tail lanyard and connect to anchor point.</li>
                <li>Secure yourself using inertia reel and pole strap when on ladder and travel using the static line.</li>
              </ul>

              <p className="pt-4">
                Your assessor will assess your performance using the observation checklist provided below.<br/>
                Ensure you have read and understood this prior to starting the task.
              </p>
            </div>

          </div>

          {/* Footer Page 45 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 24 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 46 (Assessment Page 25 of 32 - Summative Assessment 2: Observation Checklist Part 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Checklist Title Banner */}
            <div className="bg-[#cad6ec] border border-gray-600 text-center font-bold text-xs sm:text-sm py-2 px-3 leading-tight">
              Assessment 2 – Practical Demonstration<br/>Observation Checklist
            </div>

            {/* Student & Assessor Metadata Box */}
            <div className="border-x border-b border-gray-600 bg-white">
              <div className="flex border-b border-gray-600 p-2 sm:p-2.5 text-xs sm:text-sm font-bold gap-2">
                <span className="whitespace-nowrap">Student name:</span>
                <input type="text" className="flex-1 border-b border-black outline-none bg-transparent pb-0.5" />
              </div>
              <div className="flex flex-col sm:flex-row text-xs sm:text-sm font-bold">
                <div className="flex-1 flex p-2 sm:p-2.5 border-b sm:border-b-0 sm:border-r border-gray-600 gap-2">
                  <span className="whitespace-nowrap">Assessor name:</span>
                  <input type="text" className="flex-1 border-b border-black outline-none bg-transparent pb-0.5" />
                </div>
                <div className="w-full sm:w-[240px] flex p-2 sm:p-2.5 gap-2">
                  <span className="whitespace-nowrap">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="flex-1 border-b border-black outline-none bg-transparent text-center pb-0.5" />
                </div>
              </div>
            </div>

            {/* Observation Checklist Table */}
            <div className="border-x border-b border-gray-600 bg-white mb-6">
              
              {/* Header Row */}
              <div className="flex bg-[#cad6ec] border-b border-gray-600 font-bold text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-center flex items-center justify-center">
                  Observable Behaviours
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex flex-col">
                  <div className="border-b border-gray-600 text-center py-1 text-[11px] sm:text-xs">
                    Mark Y/N
                  </div>
                  <div className="flex text-center text-[10px] sm:text-xs">
                    <div className="w-1/2 py-1 border-r border-gray-600">Occasion 1</div>
                    <div className="w-1/2 py-1">Occasion 2</div>
                  </div>
                </div>
              </div>

              {/* Section Header: Toolbox Talk */}
              <div className="bg-[#e2e8f0] p-1.5 sm:p-2 font-bold text-xs sm:text-sm border-b border-gray-600 text-black">
                Toolbox Talk
              </div>

              {/* Item 1 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student accurately obtained, interpreted and confirmed work requirements during toolbox talk
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student appropriately accessed, interpreted and applied documentation required to work safely at heights, including the completion of:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>SWMS</li>
                    <li>Work at Heights Rescue Plan</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student correctly completed SWMS and identified and addressed potential risks, hazards and environmental issues, and implemented control measures according to workplace procedures, including for:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Falling the ladder</li>
                    <li>Manual handling</li>
                    <li>Falls</li>
                    <li>Defective safety equipment such as harness, lanyards,</li>
                    <li>Falling objects</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student accurately inspected worksite for:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Condition of work area/structures</li>
                    <li>Weather conditions</li>
                    <li>Site layout</li>
                    <li>Access</li>
                    <li>Equipment required</li>
                    <li>Hazards</li>
                    <li>Solid platform, including:
                      <ul className="list-[circle] pl-5 space-y-0.5 pt-0.5">
                        <li>A surface strong enough to support the people and equipment working on it.</li>
                        <li>A safe way to get on and off the platform.</li>
                        <li>Barriers to stop people falling off.</li>
                        <li>An even surface that is not too steep or slippery.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student appropriate adhered to legislative requirements
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student correctly selected and inspected equipment for serviceability, including:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Harness</li>
                    <li>Lanyard</li>
                    <li>Inertia Reel</li>
                    <li>Pole Strap.</li>
                  </ul>
                  <p className="italic text-[11px] sm:text-xs pt-1">Appendix C- Harness Inspection Checklist must be completed by the student.</p>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student accurately selected and wore PPE appropriate for work task, including:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Safety boots</li>
                    <li>Hard Hat</li>
                    <li>High visibility clothing</li>
                    <li>Fall protection equipment</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student accurately prepared for emergency situations.</p>
                  <p className="italic text-[11px] sm:text-xs pt-1">Appendix B- Working at Heights Rescue Plan must be completed by the student during toolbox talk.</p>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Section Row at bottom: Access and Install Equipment and Work at Heights */}
              <div className="bg-[#e2e8f0] p-1.5 sm:p-2 font-bold text-xs sm:text-sm text-black">
                Access and Install Equipment and Work at Heights
              </div>

            </div>

          </div>

          {/* Footer Page 46 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 25 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 47 (Assessment Page 26 of 32 - Observation Checklist Part 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Checklist Table Continuation */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Item 1 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student accurately inspected and installed fall protection and perimeter protection equipment for the following:</p>
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li><strong>Damage:</strong> Check for signs of wear, tear, and physical damage such as cracks, cuts, frayed edges, or broken stitches on harnesses, lanyards, and lifelines.</li>
                    <li><strong>Deformation:</strong> Look for deformed or distorted metal parts, such as buckles, D-rings, or carabiners.</li>
                    <li><strong>Corrosion:</strong> Inspect metal components for signs of corrosion or rust.</li>
                    <li><strong>Functionality:</strong> Make sure all parts are functioning correctly, such as the locking mechanism on carabiners or the adjustability of harness straps.</li>
                    <li><strong>Cleanliness:</strong> Ensure equipment is clean and free of dirt, grease, or substances that could affect its integrity.</li>
                    <li><strong>Anchor Points:</strong> Check that anchor points are secure, undamaged, and capable of supporting the required weight.</li>
                    <li><strong>Edge Protection:</strong> Verify that guardrails, toe boards, or other edge protection are securely installed and undamaged.</li>
                    <li><strong>Correct Installation:</strong> Confirm all equipment is installed as per the manufacturer's guidelines.</li>
                    <li><strong>Rescue Devices:</strong> Check the condition and functionality of rescue devices and systems.</li>
                    <li><strong>Expiration Dates:</strong> Ensure equipment is not past its service life or expiration date, if applicable.</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student correctly identified method of moving tools and equipment to the work area through the use of a rope and pulley to lower and raise tools and equipment
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student appropriately ensured the safety system had been installed by checking the rating of the pulley and lifting strap
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student correctly selected and installed appropriate signs and barricades around the work area, including:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Work Above sign</li>
                    <li>Barrier chain</li>
                    <li>Bollards</li>
                    <li>Witches hats</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student accurately consulted with relevant personnel to ensure anchor fall protection and associated equipment was fitted and adjusted correctly by testing the anchor point by pulling on the lanyard
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student appropriately ensured all required equipment was installed correctly, including for:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li><strong>Anchorage:</strong> Confirm anchor points are secure, sturdy, and undamaged.</li>
                    <li><strong>Positioning:</strong> Check that all equipment is positioned for maximum safety.</li>
                    <li><strong>Locking Mechanisms:</strong> Ensure all locks function correctly.</li>
                    <li><strong>Fall Arrest System:</strong> Check harness fit, lanyard length, and device functionality.</li>
                    <li><strong>Compatibility:</strong> Make sure all components of the system work together properly.</li>
                    <li><strong>Rescue Devices:</strong> Confirm presence and functionality of rescue equipment.</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student correctly minimised the risk of items being knocked down when working at heights
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student correctly set up ladder by:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Setting it up on a stable surface</li>
                    <li>Keeping it at least 900mm overhand at the top</li>
                    <li>Making sure it was on the correct angle 1:4</li>
                    <li>Making sure the ladder was secured top and bottom</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student appropriately checked access from ground to work area and ensured it was safe by checking ladder and surrounding area prior to climbing
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 10 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student accurately kept fall equipment in place and adjusted appropriately for movement during work including changing anchor point when moving from one side of the platform to the other.
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 11 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student correctly undertook manual handling of materials and equipment using the harness and lanyard
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 12 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student correctly located materials and equipment ensuring that they were safely secured
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 13 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student periodically checked safety system during work task
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 14 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student accurately monitored risk control measures to ensure that they were effective and appropriate according to workplace procedures
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 15 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student appropriately reassessed risk control measures, as required, in accordance with workplace procedures and undertook alterations
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 16 */}
              <div className="flex text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black space-y-1">
                  <p>The student appropriately demonstrated effective communication techniques with colleagues during work task, including the use:</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Hand signals</li>
                    <li>Whistles</li>
                    <li>Visual signals</li>
                  </ul>
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 47 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 26 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 48 (Assessment Page 27 of 32 - Clean up work area, Feedback & Sign-off) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Observation Checklist Clean Up Table */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Section Header: Clean up work area */}
              <div className="bg-[#e2e8f0] p-1.5 sm:p-2 font-bold text-xs sm:text-sm border-b border-gray-600 text-black">
                Clean up work area
              </div>

              {/* Item 1 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student appropriately ensured safety system was dismantled and removed by dismantling in the reverse order of set up.
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student correctly cleared work area and disposed of materials including placing the ropes, chains, harnesses, back into designated locations.
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student appropriately checked there was no damage to equipment, PPE, lifting and lowering equipment and if any faults are found, they must be tagged, isolated and notified to the assessor.
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="flex-1 p-2 sm:p-2.5 border-r border-gray-600 text-black">
                  The student correctly processed written maintenance records according to workplace procedures
                </div>
                <div className="w-[150px] sm:w-[190px] shrink-0 flex items-center">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                  <div className="w-1/2 p-2 flex justify-center gap-1.5 sm:gap-2">
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                    <label className="flex items-center gap-0.5 cursor-pointer text-[10px] sm:text-xs"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                  </div>
                </div>
              </div>

              {/* Feedback to the student */}
              <div className="p-3 border-b border-gray-600">
                <p className="font-bold text-xs sm:text-sm text-black mb-2">Feedback to the student</p>
                <div className="min-h-[140px] flex">
                  <textarea 
                    rows={6}
                    className="w-full h-full min-h-[120px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                    placeholder="Enter feedback to student here..."
                  ></textarea>
                </div>
              </div>

              {/* Outcome */}
              <div className="flex flex-col sm:flex-row justify-between p-2.5 bg-white border-b border-gray-600 font-bold text-xs sm:text-sm text-black">
                <span>Outcome</span>
                <span>Satisfactory / Not satisfactory (Circle)</span>
              </div>

              {/* Student Row */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600 bg-[#cad6ec] font-bold text-xs sm:text-sm text-black">
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Student name</div>
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Student Signature</div>
                <div className="w-full sm:w-[150px] p-2">Date</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                <div className="w-full sm:w-[150px] p-2"><input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black text-center" /></div>
              </div>

              {/* Assessor declaration */}
              <div className="bg-gray-300 p-1.5 font-bold text-xs sm:text-sm text-black border-b border-gray-600">
                Assessor declaration
              </div>
              <div className="bg-gray-200 p-1.5 text-xs italic font-medium text-black border-b border-gray-600">
                I confirm that the information above is correct.
              </div>

              {/* Assessor Row */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600 bg-[#cad6ec] font-bold text-xs sm:text-sm text-black">
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Assessor name</div>
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Assessor signature</div>
                <div className="w-full sm:w-[150px] p-2">Date</div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                <div className="w-full sm:w-[150px] p-2"><input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black text-center" /></div>
              </div>

            </div>

          </div>

          {/* Footer Page 48 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 27 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 49 (Appendix A - SWMS Page 1) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header / Appendix Title */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="font-bold text-xs sm:text-sm text-black mb-1">Appendix A</p>
                <h1 className="font-extrabold text-2xl sm:text-3xl text-black tracking-tight uppercase">
                  SAFE WORK METHOD<br/>STATEMENT
                </h1>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-xs text-black mb-1">SWMS #</span>
                <div className="border-2 border-black w-24 sm:w-32 h-8 bg-white flex items-center px-2">
                  <input type="text" className="w-full h-full bg-transparent outline-none text-xs sm:text-sm font-bold text-center" />
                </div>
              </div>
            </div>

            {/* Top Metadata Grid */}
            <div className="border border-gray-600 bg-white mb-6">
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-2 sm:p-2.5 sm:border-r border-b sm:border-b-0 border-gray-600 text-xs sm:text-sm font-bold text-black flex items-center">
                  SWMS Name: : RIIWHS204E Work Safely at Heights
                </div>
                <div className="flex-1 p-2 sm:p-2.5 sm:border-r border-b sm:border-b-0 border-gray-600 text-xs sm:text-sm font-bold text-black flex items-center gap-1">
                  <span>SWMS Created By:</span>
                  <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                </div>
                <div className="w-full sm:w-[200px] p-2 sm:p-2.5 text-xs sm:text-sm font-bold text-black flex items-center gap-1">
                  <span>Date of Creation:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-[90px] border-b border-gray-400 outline-none bg-transparent text-center font-normal pb-0.5" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-2 sm:p-2.5 sm:border-r border-b sm:border-b-0 border-gray-600 text-xs sm:text-sm font-bold text-black flex items-center gap-1">
                  <span>SWMS Summary:</span>
                  <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                </div>
                <div className="w-full sm:w-[200px] p-2 sm:p-2.5 text-xs sm:text-sm font-bold text-black flex items-center gap-1">
                  <span>Last Reviewed Date:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-[90px] border-b border-gray-400 outline-none bg-transparent text-center font-normal pb-0.5" />
                </div>
              </div>
            </div>

            {/* Company / Contractor vs Project Details Grid */}
            <div className="border border-gray-600 bg-white mb-6">
              <div className="flex flex-col sm:flex-row">
                
                {/* Company / Contractor Column */}
                <div className="flex-1 sm:border-r border-b sm:border-b-0 border-gray-600 flex flex-col">
                  <div className="bg-[#0070c0] text-white font-bold text-center py-1.5 text-xs sm:text-sm">
                    Company / Contractor Details:
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 flex items-center gap-2 text-xs sm:text-sm font-bold text-black">
                    <span className="w-20">Name:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 flex items-center gap-2 text-xs sm:text-sm font-bold text-black">
                    <span className="w-20">ABN:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 flex items-start gap-2 text-xs sm:text-sm font-bold text-black min-h-[70px]">
                    <span className="w-20">Address:</span>
                    <textarea rows={2} className="flex-1 bg-transparent outline-none resize-none font-normal"></textarea>
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 flex items-center gap-2 text-xs sm:text-sm font-bold text-black">
                    <span className="w-24">Contact Number:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                  </div>
                  <div className="p-2 sm:p-2.5 flex items-center gap-2 text-xs sm:text-sm font-bold text-black">
                    <span className="w-20">Email:</span>
                    <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                  </div>
                </div>

                {/* Project Details Column */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#00b050] text-white font-bold text-center py-1.5 text-xs sm:text-sm">
                    Project Details:
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 text-xs sm:text-sm font-bold text-black">
                    Client: &nbsp; Australian International Education Training T/A Safety Training Academy
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 text-xs sm:text-sm font-bold text-black">
                    Contact Name: Admin
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 text-xs sm:text-sm font-bold text-black min-h-[70px]">
                    Site Address:
                    <p className="font-normal pl-4 pt-1">Unit 3/14-16 Marjorie Street Sefton NSW 2162</p>
                  </div>
                  <div className="p-2 sm:p-2.5 border-b border-gray-600 text-xs sm:text-sm font-bold text-black">
                    Contact Number: &nbsp; 1300 976 097
                  </div>
                  <div className="p-2 sm:p-2.5 flex items-center gap-2 text-xs sm:text-sm font-bold text-black">
                    <span>Start Date:</span>
                    <input type="text" placeholder="DD/MM/YYYY" className="w-[140px] border-b border-gray-400 outline-none bg-transparent font-normal pb-0.5" />
                  </div>
                </div>

              </div>
            </div>

            {/* How to complete this SWMS */}
            <div className="border border-gray-600 bg-white p-4 sm:p-6 mb-6">
              <h3 className="text-center font-bold text-sm sm:text-base text-black mb-4">
                How to complete this SWMS
              </h3>
              <ol className="list-decimal pl-5 sm:pl-8 space-y-2 text-xs sm:text-sm text-black leading-relaxed">
                <li><strong>CONSULT:</strong> Consult with all persons who will be involved in the completion of the work.</li>
                <li><strong>LIST:</strong> List each of the steps in the task work being done.</li>
                <li><strong>IDENTIFY:</strong> Describe the health and safety hazards and risks arising from each step in the work.</li>
                <li><strong>RISK ASSESSMENT:</strong> Review the level of risk associated with each hazard listed.</li>
                <li><strong>CONTROL:</strong> Describe how the risks will be controlled, and describe what hazard control measures will be put in place.</li>
                <li><strong>RESPONSIBILITY:</strong> Allocate a person to be responsible for the hazard control measure.</li>
                <li><strong>REVIEW:</strong> Review the effectiveness of the control measures and apply further hazard control measures as required.</li>
              </ol>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 50 (Appendix A - SWMS Page 2) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* SWMS Requirements Grid */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-3 sm:border-r border-b sm:border-b-0 border-gray-600 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Training/Qualifications Required to carry out work:</p>
                  <textarea rows={4} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                  <div className="flex items-center gap-4 mt-3 pt-2 text-xs sm:text-sm font-bold text-black border-t border-gray-200">
                    <span>Are all workers adequately trained and qualified?</span>
                    <div className="flex items-center gap-3 font-normal">
                      <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                      <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-3 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">PPE Required to carry out work:</p>
                  <textarea rows={6} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-3 sm:border-r border-b sm:border-b-0 border-gray-600 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Legislation, Australian Standards &amp; Codes of Practice relevant to work (where applicable):</p>
                  <textarea rows={6} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                </div>
                <div className="flex-1 p-3 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Equipment Required to carry out work:</p>
                  <textarea rows={6} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-3 sm:border-r border-b sm:border-b-0 border-gray-600 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Environmental Statement:</p>
                  <textarea rows={6} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                </div>
                <div className="flex-1 p-3 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Safety Checks Required prior to commencement of work:</p>
                  <textarea rows={6} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-3 sm:border-r border-b sm:border-b-0 border-gray-600 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Coordination with other trades:</p>
                  <textarea rows={6} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                </div>
                <div className="flex-1 p-3 flex flex-col">
                  <p className="font-bold text-xs sm:text-sm text-black mb-2">Permits required for commencement of work:</p>
                  <textarea rows={4} className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm flex-1 placeholder-gray-300" placeholder="Enter details here..."></textarea>
                  <div className="flex items-center gap-4 mt-3 pt-2 text-xs sm:text-sm font-bold text-black border-t border-gray-200">
                    <span>Have these permits been acquired?</span>
                    <div className="flex items-center gap-3 font-normal">
                      <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                      <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 51 (Appendix A - Risk Analysis Matrix) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Title */}
            <h1 className="font-extrabold text-2xl sm:text-3xl text-black mb-2">
              Risk analysis Matrix
            </h1>
            <p className="text-xs sm:text-sm text-black mb-6">
              Use this table to determine the level of risk associated with an identified hazard.
            </p>

            {/* Matrix Table */}
            <div className="border-2 border-black bg-white mb-8 overflow-x-auto">
              <table className="w-full border-collapse text-center">
                <thead>
                  <tr>
                    <th rowSpan={2} className="border-r border-b-2 border-black p-2 font-bold text-xs sm:text-sm uppercase tracking-wider w-[120px] sm:w-[140px] bg-white">
                      PROBABILITY
                    </th>
                    <th colSpan={5} className="border-b border-black p-2 font-bold text-xs sm:text-sm uppercase tracking-wider bg-white">
                      CONSEQUENCE
                    </th>
                  </tr>
                  <tr className="border-b-2 border-black text-[10px] sm:text-xs font-bold">
                    <th className="border-r border-black p-1 sm:p-2 w-1/5 bg-white leading-tight">
                      Insignificant
                    </th>
                    <th className="border-r border-black p-1 sm:p-2 w-1/5 bg-white leading-tight">
                      Minor<br/><span className="font-normal text-[9px] sm:text-[10px]">First Aid Required</span>
                    </th>
                    <th className="border-r border-black p-1 sm:p-2 w-1/5 bg-white leading-tight">
                      Moderate<br/><span className="font-normal text-[9px] sm:text-[10px]">Medical Attention and time off work</span>
                    </th>
                    <th className="border-r border-black p-1 sm:p-2 w-1/5 bg-white leading-tight">
                      Major<br/><span className="font-normal text-[9px] sm:text-[10px]">Long Term Illness or Serious Injury</span>
                    </th>
                    <th className="p-1 sm:p-2 w-1/5 bg-white leading-tight">
                      Severe<br/><span className="font-normal text-[9px] sm:text-[10px]">Kill or cause permanent Disability or Illness</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm font-bold">
                  <tr className="border-b border-black">
                    <td className="border-r border-black p-2 bg-white font-bold text-left pl-3 text-xs sm:text-sm">Almost certain</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="border-r border-black p-2 bg-[#ff5900] text-black">H</td>
                    <td className="border-r border-black p-2 bg-[#ff5900] text-black">H</td>
                    <td className="border-r border-black p-2 bg-[#ff0000] text-black">VH</td>
                    <td className="p-2 bg-[#ff0000] text-black">VH</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="border-r border-black p-2 bg-white font-bold text-left pl-3 text-xs sm:text-sm">Likely</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="border-r border-black p-2 bg-[#ff5900] text-black">H</td>
                    <td className="border-r border-black p-2 bg-[#ff5900] text-black">H</td>
                    <td className="p-2 bg-[#ff0000] text-black">VH</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="border-r border-black p-2 bg-white font-bold text-left pl-3 text-xs sm:text-sm">Possible</td>
                    <td className="border-r border-black p-2 bg-[#ffe500] text-black">L</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="border-r border-black p-2 bg-[#ff5900] text-black">H</td>
                    <td className="border-r border-black p-2 bg-[#ff5900] text-black">H</td>
                    <td className="p-2 bg-[#ff0000] text-black">VH</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="border-r border-black p-2 bg-white font-bold text-left pl-3 text-xs sm:text-sm">Unlikely</td>
                    <td className="border-r border-black p-2 bg-[#ffe500] text-black">L</td>
                    <td className="border-r border-black p-2 bg-[#ffe500] text-black">L</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="p-2 bg-[#ff5900] text-black">H</td>
                  </tr>
                  <tr>
                    <td className="border-r border-black p-2 bg-white font-bold text-left pl-3 text-xs sm:text-sm">Rare</td>
                    <td className="border-r border-black p-2 bg-[#ffe500] text-black">L</td>
                    <td className="border-r border-black p-2 bg-[#ffe500] text-black">L</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="border-r border-black p-2 bg-[#ffb000] text-black">M</td>
                    <td className="p-2 bg-[#ffb000] text-black">M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Risk Level & Required Action Table */}
            <div className="border-2 border-black bg-white mb-6">
              <div className="flex border-b-2 border-black bg-white font-bold text-xs sm:text-sm">
                <div className="w-[120px] sm:w-[140px] p-2 border-r border-black text-center shrink-0">
                  Risk level
                </div>
                <div className="flex-1 p-2 text-center">
                  Required action
                </div>
              </div>

              {/* Very high */}
              <div className="flex border-b border-black text-xs sm:text-sm">
                <div className="w-[120px] sm:w-[140px] p-2 sm:p-3 bg-[#ff0000] font-bold text-black border-r border-black flex items-center justify-center shrink-0 text-center">
                  Very high
                </div>
                <div className="flex-1 p-2.5 sm:p-3 text-black leading-relaxed flex items-center">
                  The proposed task or process activity must not proceed. Steps must be taken to lower the risk level to as low as reasonably practicable using the hierarchy of risk controls.
                </div>
              </div>

              {/* High */}
              <div className="flex border-b border-black text-xs sm:text-sm">
                <div className="w-[120px] sm:w-[140px] p-2 sm:p-3 bg-[#ff5900] font-bold text-black border-r border-black flex items-center justify-center shrink-0 text-center">
                  High
                </div>
                <div className="flex-1 p-2.5 sm:p-3 text-black leading-relaxed space-y-1">
                  <p>The proposed activity can only proceed, provided that:</p>
                  <ol className="list-decimal pl-5 space-y-0.5">
                    <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls;</li>
                    <li>The risk controls must include those identified in legislation, Australian Standards, Codes of Practice etc.</li>
                    <li>The risk assessment has been reviewed and approved by the Supervisor and</li>
                    <li>A Safe Working Procedure or Safe Work Method has been prepared.</li>
                    <li>The supervisor must review and document the effectiveness of the implemented risk controls.</li>
                  </ol>
                </div>
              </div>

              {/* Medium */}
              <div className="flex border-b border-black text-xs sm:text-sm">
                <div className="w-[120px] sm:w-[140px] p-2 sm:p-3 bg-[#ffb000] font-bold text-black border-r border-black flex items-center justify-center shrink-0 text-center">
                  Medium
                </div>
                <div className="flex-1 p-2.5 sm:p-3 text-black leading-relaxed space-y-1">
                  <p>The proposed task or process can proceed, provided that:</p>
                  <ol className="list-decimal pl-5 space-y-0.5">
                    <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls;</li>
                    <li>The risk assessment has been reviewed and approved by the Supervisor and</li>
                    <li>A Safe Working Procedure or Safe Work Method Statement has been prepared.</li>
                  </ol>
                </div>
              </div>

              {/* Low */}
              <div className="flex text-xs sm:text-sm">
                <div className="w-[120px] sm:w-[140px] p-2 sm:p-3 bg-[#ffe500] font-bold text-black border-r border-black flex items-center justify-center shrink-0 text-center">
                  Low
                </div>
                <div className="flex-1 p-2.5 sm:p-3 text-black leading-relaxed flex items-center">
                  Managed by local documented routine procedures which must include application of the hierarchy of controls.
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 52 (Appendix A - SWMS Step-by-Step Table) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Title */}
            <h1 className="font-extrabold text-2xl sm:text-3xl text-black mb-4">
              Safe Work Method Statement
            </h1>

            {/* Matrix Table */}
            <div className="border border-black bg-white mb-6 overflow-x-auto">
              <div className="min-w-[650px]">
                
                {/* Header Row 1 */}
                <div className="flex border-b border-black font-bold text-xs sm:text-sm text-center">
                  <div className="w-[110px] sm:w-[130px] p-2 border-r border-black flex items-center justify-center">
                    Work Step
                  </div>
                  <div className="flex-1 p-2 border-r border-black flex items-center justify-center">
                    Associated/identified Hazards
                  </div>
                  <div className="w-[75px] sm:w-[85px] p-1 border-r border-black text-[11px] sm:text-xs flex flex-col items-center justify-center leading-tight">
                    <span>Risk Level</span>
                    <span className="font-normal text-[10px]">(L, M, H, VH)</span>
                  </div>
                  <div className="flex-1 p-2 border-r border-black flex items-center justify-center">
                    Hazard Controls
                  </div>
                  <div className="w-[75px] sm:w-[85px] p-1 border-r border-black text-[11px] sm:text-xs flex flex-col items-center justify-center leading-tight">
                    <span>Revised Risk Level</span>
                    <span className="font-normal text-[10px]">(L, M, H, VH)</span>
                  </div>
                  <div className="w-[120px] sm:w-[150px] p-2 flex items-center justify-center">
                    Person Responsible
                  </div>
                </div>

                {/* Header Row 2 (Prompts) */}
                <div className="flex border-b border-black text-[10px] sm:text-xs text-gray-700">
                  <div className="w-[110px] sm:w-[130px] p-1.5 border-r border-black leading-tight">
                    Work your way through each step in the work process, giving a brief description of what is required at each stage.
                  </div>
                  <div className="flex-1 p-1.5 border-r border-black leading-tight">
                    What hazards can be identified for this step?
                  </div>
                  <div className="w-[75px] sm:w-[85px] p-1.5 border-r border-black text-center leading-tight">
                    What is the risk level?
                  </div>
                  <div className="flex-1 p-1.5 border-r border-black leading-tight">
                    What hazards controls will be put into place to deal with the identified hazards for this step?
                  </div>
                  <div className="w-[75px] sm:w-[85px] p-1.5 border-r border-black text-center leading-tight">
                    Has the risk been reduced?
                  </div>
                  <div className="w-[120px] sm:w-[150px] p-1.5 leading-tight">
                    Who is responsible for carrying out the work and maintaining the hazard controls?
                  </div>
                </div>

                {/* 5 Writable Rows */}
                {[1, 2, 3, 4, 5].map((rowIdx) => (
                  <div key={rowIdx} className="flex border-b last:border-b-0 border-black min-h-[140px]">
                    <div className="w-[110px] sm:w-[130px] border-r border-black p-1 flex">
                      <textarea rows={5} className="w-full h-full bg-transparent outline-none resize-none text-xs sm:text-sm p-1" />
                    </div>
                    <div className="flex-1 border-r border-black p-1 flex">
                      <textarea rows={5} className="w-full h-full bg-transparent outline-none resize-none text-xs sm:text-sm p-1" />
                    </div>
                    <div className="w-[75px] sm:w-[85px] border-r border-black p-1 flex">
                      <textarea rows={5} className="w-full h-full bg-transparent outline-none resize-none text-xs sm:text-sm p-1 text-center font-bold" />
                    </div>
                    <div className="flex-1 border-r border-black p-1 flex">
                      <textarea rows={5} className="w-full h-full bg-transparent outline-none resize-none text-xs sm:text-sm p-1" />
                    </div>
                    <div className="w-[75px] sm:w-[85px] border-r border-black p-1 flex">
                      <textarea rows={5} className="w-full h-full bg-transparent outline-none resize-none text-xs sm:text-sm p-1 text-center font-bold" />
                    </div>
                    <div className="w-[120px] sm:w-[150px] p-1 flex">
                      <textarea rows={5} className="w-full h-full bg-transparent outline-none resize-none text-xs sm:text-sm p-1" />
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 53 (Appendix A - Personnel Signoff & Compliance Checklist) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Title */}
            <h1 className="font-extrabold text-2xl sm:text-3xl text-black mb-2">
              Personnel Signoff
            </h1>

            {/* Guidance Text */}
            <div className="text-xs sm:text-sm text-black space-y-1 mb-4 leading-relaxed">
              <p>All personnel required to carry out this task need to be listed below.</p>
              <p>By signing this SWMS, each person declares that they have carefully read the SWMS and that they understand their responsibilities and requirements to complete the work.</p>
            </div>

            {/* Signoff Table */}
            <div className="border border-gray-600 bg-white mb-6">
              <div className="flex border-b border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Name (please print)</div>
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Position / Qualification</div>
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600">Signature</div>
                <div className="w-full sm:w-[130px] p-2">Date</div>
              </div>
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="flex flex-col sm:flex-row border-b last:border-b-0 border-gray-600">
                  <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                  <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                  <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600"><input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" /></div>
                  <div className="w-full sm:w-[130px] p-2"><input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black text-center" /></div>
                </div>
              ))}
            </div>

            {/* Senior Management Signoff */}
            <div className="mb-6 space-y-3">
              <h3 className="font-bold text-sm sm:text-base text-black">Senior management Signoff:</h3>
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-bold text-black gap-4">
                <span>Does this SWMS meet the necessary safety requirements?</span>
                <div className="flex items-center gap-4 font-normal">
                  <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                  <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-bold text-black gap-4">
                <span>Does this SWMS require review?</span>
                <div className="flex items-center gap-4 font-normal">
                  <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />Yes</label>
                  <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" className="w-3.5 h-3.5" />No</label>
                </div>
                <div className="flex items-center gap-2">
                  <span>Review Date:</span>
                  <input type="text" placeholder="DD/MM/YYYY" className="w-[110px] border-b border-black outline-none bg-transparent text-center font-normal" />
                </div>
              </div>
            </div>

            {/* Checklist of Items Table */}
            <div className="mt-4">
              <p className="italic text-xs sm:text-sm text-black mb-1">
                (Checklist of Items that may be required for the job activity)
              </p>
              
              <div className="border-2 border-black bg-white">
                
                {/* Certificates */}
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-[220px] p-2.5 sm:border-r border-b sm:border-b-0 border-black font-bold text-xs sm:text-sm text-black flex items-center">
                    CERTIFICATES
                  </div>
                  <div className="flex-1 p-2.5 text-xs sm:text-sm text-black">
                    <p className="font-bold">Work Safely at heights – RIIWHS204E</p>
                    <p>Nationally recognised unit of competency</p>
                  </div>
                </div>

                {/* Codes of Practice / Legislation */}
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-[220px] p-2.5 sm:border-r border-b sm:border-b-0 border-black font-bold text-xs sm:text-sm text-black flex items-center">
                    CODES OF PRACTICE /<br/>LEGISLATION APPLICABLE
                  </div>
                  <div className="flex-1 p-2.5 text-xs sm:text-sm text-black leading-relaxed">
                    <p>WHS Act 2011 &amp; WHS Regulations 2011</p>
                    <p>AS1657 Working at Heights Australian Standards</p>
                    <p>Managing the Risk of Falls at Workplaces Code of Practice 2011</p>
                    <p>AS/NZS 1891.4 2009: Industrial Fall Arrest-Systems and Devices</p>
                  </div>
                </div>

                {/* Plant & Equipment */}
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-[220px] p-2.5 sm:border-r border-b sm:border-b-0 border-black font-bold text-xs sm:text-sm text-black flex items-center">
                    PLANT &amp; EQUIPMENT
                  </div>
                  <div className="flex-1 p-2.5 text-xs sm:text-sm text-black font-bold text-center">
                    N/A
                  </div>
                </div>

                {/* Maintenance Checks */}
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-[220px] p-2.5 sm:border-r border-b sm:border-b-0 border-black font-bold text-xs sm:text-sm text-black flex items-center">
                    MAINTENANCE CHECKS
                  </div>
                  <div className="flex-1 p-2.5 text-xs sm:text-sm text-black leading-relaxed">
                    <p>AS/NZS 1891.1 Part 1: Safety Belts and Harnesses.</p>
                    <p>AS/NZS 1891.2 Part 2: Horizontal Lifeline and Rail Systems</p>
                  </div>
                </div>

                {/* Personal Protective Equipment */}
                <div className="flex flex-col sm:flex-row border-b border-black">
                  <div className="w-full sm:w-[220px] p-2.5 sm:border-r border-b sm:border-b-0 border-black font-bold text-xs sm:text-sm text-black flex items-center">
                    PERSONAL PROTECTIVE<br/>EQUIPMENT
                  </div>
                  <div className="flex-1 p-2.5 flex flex-wrap items-center justify-around gap-3 bg-white">
                    
                    {/* Badge 1 */}
                    <div className="flex flex-col items-center border border-gray-400 p-1.5 rounded w-[95px] text-center">
                      <img src={ppeFootwear} alt="Safety Footwear" className="w-10 h-10 object-contain mb-1" />
                      <span className="text-[8px] font-bold text-black uppercase leading-tight">SAFETY FOOT PROTECTION MUST BE WORN</span>
                    </div>

                    {/* Badge 2 */}
                    <div className="flex flex-col items-center border border-gray-400 p-1.5 rounded w-[95px] text-center">
                      <img src={ppeHead} alt="Head Protection" className="w-10 h-10 object-contain mb-1" />
                      <span className="text-[8px] font-bold text-black uppercase leading-tight">HEAD PROTECTION MUST BE WORN IN THIS AREA</span>
                    </div>

                    {/* Badge 3 */}
                    <div className="flex flex-col items-center border border-gray-400 p-1.5 rounded w-[95px] text-center">
                      <img src={ppeVest} alt="Hi Vis Vest" className="w-10 h-10 object-contain mb-1" />
                      <span className="text-[8px] font-bold text-black uppercase leading-tight">HIGH VISIBILITY SAFETY VEST MUST BE WORN</span>
                    </div>

                    {/* Badge 4 */}
                    <div className="flex flex-col items-center border border-gray-400 p-1.5 rounded w-[95px] text-center">
                      <img src={ppeHarness} alt="Safety Harness" className="w-10 h-10 object-contain mb-1" />
                      <span className="text-[8px] font-bold text-black uppercase leading-tight">SAFETY HARNESS MUST BE WORN</span>
                    </div>

                  </div>
                </div>

                {/* Council / Power Authority Permits */}
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-[220px] p-2.5 sm:border-r border-b sm:border-b-0 border-black font-bold text-xs sm:text-sm text-black flex items-center">
                    COUNCIL /<br/>POWER AUTHORITY PERMITS
                  </div>
                  <div className="flex-1 p-2.5 text-xs sm:text-sm text-black text-center font-bold flex items-center justify-center">
                    Check Local Requirements
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================= PAGE 54 (Appendix B - Working at Heights Rescue Plan) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[880px] shadow-lg p-2 sm:p-6 relative flex min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-extrabold text-sm sm:text-base text-black">Appendix B:</span>
              <h1 className="font-extrabold text-xl sm:text-3xl text-black tracking-tight">
                Working at Heights Rescue Plan
              </h1>
            </div>

            {/* Top Grid: Emergency Contacts vs Work Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              
              {/* Emergency Contact */}
              <div className="border-2 border-black p-2.5 bg-white text-xs sm:text-sm space-y-1.5">
                <div className="flex items-center gap-2 font-black text-base sm:text-lg mb-1">
                  <span>Emergency Contact</span>
                  <span className="text-xl">📞</span>
                  <span>000</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] sm:text-xs">Other emergency numbers:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] sm:text-xs">Site address:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] sm:text-xs">Nearest cross road (other directions):</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] sm:text-xs">Site access information: (level, floor, entrances, etc):</span>
                  <input type="text" className="w-full border-b border-dotted border-black outline-none bg-transparent" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] sm:text-xs">Access point for emergency services:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                </div>
              </div>

              {/* Work Details */}
              <div className="border-2 border-black flex flex-col bg-white">
                <div className="bg-black text-white font-bold text-center text-[11px] sm:text-xs py-1">
                  WORK DETAILS (TYPE OF WORK BEING PERFORMED)
                </div>
                <div className="p-1.5 border-b border-black min-h-[45px]">
                  <textarea rows={2} className="w-full h-full bg-transparent outline-none resize-none text-xs" placeholder="Describe work being performed..."></textarea>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex bg-black text-white font-bold text-center text-[10px] sm:text-xs py-0.5">
                    <div className="w-1/2 border-r border-gray-600">WORKERS NAMES</div>
                    <div className="w-1/2">CONTACT INFO</div>
                  </div>
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="flex border-b last:border-b-0 border-black text-xs">
                      <div className="w-1/2 border-r border-black p-1"><input type="text" className="w-full outline-none bg-transparent" /></div>
                      <div className="w-1/2 p-1"><input type="text" className="w-full outline-none bg-transparent" /></div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Pre Work Equipment Checks */}
            <div className="border-2 border-black mb-3">
              <div className="bg-black text-white font-bold text-center text-[10px] sm:text-xs py-0.5">
                PRE WORK EQUIPMENT CHECKS (TO BE INITIALED BY PERSON CHECKING THE EQUIPMENT)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Anchor points</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Static lines</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Lanyards</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Harnesses</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>EWP</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Inertia reels/lifelines</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Tripod</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Scaffold</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Snap hooks/karabiners</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Ropes</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Energy absorbers</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Trauma straps</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="flex flex-col sm:flex-row text-[10px] sm:text-xs">
                <div className="flex-1 flex p-1 border-b sm:border-b-0 sm:border-r border-black gap-2"><span>OTHER:</span><input type="text" className="flex-1 border-b border-black outline-none bg-transparent" /><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="flex-1 flex p-1 gap-2"><span>Name:</span><input type="text" className="flex-1 border-b border-black outline-none bg-transparent" /><span>Signature:</span><input type="text" className="flex-1 border-b border-black outline-none bg-transparent" /></div>
              </div>
            </div>

            {/* Who is in charge of */}
            <div className="border-2 border-black mb-3">
              <div className="flex bg-black text-white font-bold text-center text-[10px] sm:text-xs py-0.5">
                <div className="w-[200px] sm:w-[260px] border-r border-gray-600">WHO IS IN CHARGE OF:</div>
                <div className="flex-1 border-r border-gray-600">NAME</div>
                <div className="flex-1">CONTACT INFORMATION</div>
              </div>
              {[
                'The rescue (primary contact)',
                'Contacting emergency services',
                'Stand-by person (observing if a fall occurs)',
                'Ensuring rescuers are safe',
                'First Aid (including suspension trauma treatment)'
              ].map((role, idx) => (
                <div key={idx} className="flex border-b last:border-b-0 border-black text-[11px] sm:text-xs">
                  <div className="w-[200px] sm:w-[260px] p-1 border-r border-black font-semibold text-black bg-gray-50">{role}</div>
                  <div className="flex-1 p-1 border-r border-black"><input type="text" className="w-full outline-none bg-transparent" /></div>
                  <div className="flex-1 p-1"><input type="text" className="w-full outline-none bg-transparent" /></div>
                </div>
              ))}
            </div>

            {/* Rescue Tasks */}
            <div className="border-2 border-black mb-3">
              <div className="flex bg-black text-white font-bold text-center text-[9px] sm:text-[11px] py-0.5">
                <div className="w-[120px] sm:w-[140px] border-r border-gray-600 p-1">RESCUE TASKS</div>
                <div className="flex-1 border-r border-gray-600 p-1">DETAILS OF STEPS IN RESCUE</div>
                <div className="w-[120px] sm:w-[140px] border-r border-gray-600 p-1">PEOPLE RESPONSIBLE (NAME AND CONTACT)</div>
                <div className="w-[120px] sm:w-[140px] border-r border-gray-600 p-1">EQUIPMENT NEEDED FOR RESCUE</div>
                <div className="w-[60px] sm:w-[70px] p-1">TIME NEEDED</div>
              </div>
              {[
                { task: 'Does equipment need to be set up or moved before you can perform the rescue?', factor: '' },
                { task: 'How will you reach the person who has fallen?', factor: '' },
                { task: 'Other factors:', factor: 'Layout of building, access problems, weather conditions, language barriers, etc.' },
                { task: 'How will you get an injured or unconscious person down?', factor: '' }
              ].map((row, idx) => (
                <div key={idx} className="flex border-b border-black text-[10px] sm:text-xs min-h-[55px]">
                  <div className="w-[120px] sm:w-[140px] p-1 border-r border-black font-semibold bg-gray-50 flex flex-col justify-center">
                    <span>{row.task}</span>
                    {row.factor && <span className="font-normal italic text-[9px] text-gray-600">{row.factor}</span>}
                  </div>
                  <div className="flex-1 p-1 border-r border-black flex flex-col justify-between">
                    <textarea rows={2} className="w-full bg-transparent outline-none resize-none text-[10px] sm:text-xs" />
                    <span className="text-[9px] font-bold text-gray-700">Practiced and timed: Yes / No</span>
                  </div>
                  <div className="w-[120px] sm:w-[140px] p-1 border-r border-black flex">
                    <textarea rows={2} className="w-full bg-transparent outline-none resize-none text-[10px] sm:text-xs" />
                  </div>
                  <div className="w-[120px] sm:w-[140px] p-1 border-r border-black flex flex-col justify-between">
                    <textarea rows={2} className="w-full bg-transparent outline-none resize-none text-[10px] sm:text-xs" />
                    <span className="text-[9px] font-bold text-gray-700">Equipment tested: Yes / No</span>
                  </div>
                  <div className="w-[60px] sm:w-[70px] p-1 flex items-center justify-center font-bold">
                    <input type="text" placeholder=":" className="w-full text-center outline-none bg-transparent" />
                  </div>
                </div>
              ))}
              <div className="flex bg-gray-200 font-black text-[10px] sm:text-xs border-t border-black">
                <div className="flex-1 p-1 text-center uppercase tracking-wide">TOTAL TIME NEEDED FOR RESCUE - MUST NOT EXCEED 5 MIN (300 SEC)</div>
                <div className="w-[60px] sm:w-[70px] p-1 border-l border-black text-center"><input type="text" placeholder=":" className="w-full text-center outline-none bg-transparent font-bold" /></div>
              </div>
            </div>

            {/* Equipment Needed for Rescue */}
            <div className="border-2 border-black mb-3">
              <div className="bg-black text-white font-bold text-center text-[10px] sm:text-xs py-0.5">
                EQUIPMENT NEEDED FOR RESCUE (TO BE INITIALED BY PERSON CHECKING THE EQUIPMENT)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Rescue ladder</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Static lines</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Lanyards</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Harnesses</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>EWP</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Inertia reels/lifelines</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Tripod/scaffold</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Winches</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Snap hooks/karabiners</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Ropes</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Energy absorbers</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Trauma straps</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] sm:text-xs border-b border-black">
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>First Aid kit</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-b sm:border-b-0 border-black flex justify-between"><span>Crane</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 border-r border-black flex justify-between"><span>Spreader bars</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="p-1 flex justify-between"><span>Stretcher</span><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
              </div>
              <div className="flex flex-col sm:flex-row text-[10px] sm:text-xs">
                <div className="flex-1 flex p-1 border-b sm:border-b-0 sm:border-r border-black gap-2"><span>OTHER:</span><input type="text" className="flex-1 border-b border-black outline-none bg-transparent" /><span>Initial: <input type="text" className="w-6 border-b border-black text-center" /></span></div>
                <div className="flex-1 flex p-1 gap-2"><span>Name:</span><input type="text" className="flex-1 border-b border-black outline-none bg-transparent" /><span>Signature:</span><input type="text" className="flex-1 border-b border-black outline-none bg-transparent" /></div>
              </div>
            </div>

            {/* Communications Tasks & Final Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              
              {/* Communications Tasks */}
              <div className="border-2 border-black flex flex-col bg-white">
                <div className="flex bg-black text-white font-bold text-center text-[10px] sm:text-xs py-0.5">
                  <div className="w-[140px] border-r border-gray-600">COMMUNICATIONS TASKS</div>
                  <div className="flex-1 border-r border-gray-600">COMMUNICATIONS METHOD</div>
                  <div className="w-[60px]">TESTED?</div>
                </div>
                {[
                  'Communication during work',
                  'Stand-by Person to raise alarm',
                  'Rescuers will communicate',
                  'Suspended person',
                  'Emergency services contacted'
                ].map((task, idx) => (
                  <div key={idx} className="flex border-b last:border-b-0 border-black text-[10px] sm:text-xs">
                    <div className="w-[140px] p-1 border-r border-black font-semibold bg-gray-50">{task}</div>
                    <div className="flex-1 p-1 border-r border-black"><input type="text" className="w-full outline-none bg-transparent" /></div>
                    <div className="w-[60px] p-1 text-center font-bold">YES / NO</div>
                  </div>
                ))}
              </div>

              {/* Final Checklist */}
              <div className="border-2 border-black flex flex-col bg-white">
                <div className="bg-black text-white font-bold text-center text-[10px] sm:text-xs py-0.5">
                  FINAL CHECKLIST (to be done immediately before work commences)
                </div>
                {[
                  'All fall restraint/arrest equipment and anchor points are checked',
                  'Harnesses have been checked and fitted correctly',
                  'Rescue equipment is set up and in place',
                  'Possible fall distance and fall arrest distance have been checked',
                  'Workers know how to reduce effects of suspension intolerance (trauma)'
                ].map((item, idx) => (
                  <div key={idx} className="flex border-b last:border-b-0 border-black text-[10px] sm:text-xs">
                    <div className="flex-1 p-1 border-r border-black font-medium">{item}</div>
                    <div className="w-[60px] p-1 text-center font-bold flex items-center justify-center">YES / NO</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Written By / Authorised By Signatures */}
            <div className="border-2 border-black p-2 bg-white text-xs space-y-2 mb-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex items-center gap-1">
                  <span className="font-bold">Written by:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <span className="font-bold">Authorised by:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex items-center gap-2">
                  <span className="font-bold">Signature:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                  <span className="font-bold">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="w-[100px] border-b border-dotted border-black outline-none bg-transparent text-center" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <span className="font-bold">Signature:</span>
                  <input type="text" className="flex-1 border-b border-dotted border-black outline-none bg-transparent" />
                  <span className="font-bold">Date:</span>
                  <input type="text" placeholder="DD / MM / YYYY" className="w-[100px] border-b border-dotted border-black outline-none bg-transparent text-center" />
                </div>
              </div>
            </div>

            {/* Copyright Footer */}
            <p className="text-[9px] text-gray-600">© Copyright Easy Guides Australia Pty Ltd</p>

          </div>

          {/* Right vertical sidebar */}
          <div className="hidden lg:flex w-8 bg-gray-700 text-white font-bold text-[9px] tracking-widest uppercase items-center justify-center [writing-mode:vertical-rl] rotate-180 p-2 shrink-0 ml-2 rounded">
            WORK DETAILS, PEOPLE AND EQUIPMENT / RESCUE PLAN, PEOPLE AND EQUIPMENT / FINAL CHECKS
          </div>

        </div>
      </div>

      {/* ======================= PAGE 55 (Appendix C - Harness Inspection Checklist - Assessment Page 30 of 32) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <div className="mb-4">
              <p className="font-bold text-xs sm:text-sm text-black">Appendix C:</p>
              <h1 className="font-black text-lg sm:text-xl text-black tracking-wide uppercase">
                HARNESS INSPECTION CHECKLIST
              </h1>
            </div>

            {/* Checklist Banner & Date */}
            <div className="flex flex-col sm:flex-row border border-gray-600 mb-2">
              <div className="flex-1 bg-[#0070c0] text-white p-2 font-bold text-xs sm:text-sm flex items-center">
                <span>Harness Inspection Checklist:</span>
                <input type="text" className="flex-1 ml-2 bg-transparent text-white border-b border-white outline-none" />
              </div>
              <div className="w-full sm:w-[200px] p-2 bg-white font-bold text-xs sm:text-sm flex items-center gap-1 border-t sm:border-t-0 sm:border-l border-gray-600">
                <span>Date:</span>
                <input type="text" placeholder="DD/MM/YYYY" className="flex-1 border-b border-gray-400 outline-none bg-transparent text-center font-normal" />
              </div>
            </div>

            {/* Student Name */}
            <div className="border-x border-b border-gray-600 p-2 text-xs sm:text-sm font-bold text-black flex items-center gap-2 mb-4 bg-white">
              <span>Student Name:</span>
              <input type="text" className="flex-1 border-b border-gray-400 outline-none bg-transparent font-normal" />
            </div>

            {/* 7-Row Inspection Table */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Header Row */}
              <div className="flex bg-[#cad6ec] border-b border-gray-600 font-bold text-xs sm:text-sm text-black">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600">Component:</div>
                <div className="flex-1 p-2 border-r border-gray-600">Look for these items:</div>
                <div className="w-[100px] sm:w-[120px] flex flex-col text-center">
                  <div className="py-1 border-b border-gray-600 text-[11px] sm:text-xs">Serviceable</div>
                  <div className="flex text-xs">
                    <div className="w-1/3 py-0.5 border-r border-gray-600">✓</div>
                    <div className="w-1/3 py-0.5 border-r border-gray-600">✖</div>
                    <div className="w-1/3 py-0.5">n/a</div>
                  </div>
                </div>
              </div>

              {/* Row 1: Webbing */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  1. Is the webbing in good condition?
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Cuts or tears</li>
                    <li>Abrasion damage especially where there is contact with hardware</li>
                    <li>Excessive stretching</li>
                    <li>Damage due to contact with heat, corrosives, or solvents</li>
                    <li>Deterioration due to rotting, mildew, or ultraviolet exposure</li>
                    <li>Activation of fall indicators if fitted</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

              {/* Row 2: Snap hooks and karabiners */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  2. Are the Snap hooks and karabiners in good condition?
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Distortion of hook or latch Cracks or forging folds</li>
                    <li>Wear at swivels and latch pivot pin Open rollers</li>
                    <li>Free movement of the latch over its full travel</li>
                    <li>Broken, weak or misplaced latch springs (compare with a new snap hook)</li>
                    <li>Free from dirt or other obstructions, e.g. rust</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

              {/* Row 3: D-rings */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  3. Are the D-rings in good condition?
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Excessive 'vertical' movement of the straight portion of the D-ring where it is retained by the webbing, so that the corners between the straight and curved sections of the D become completely exposed.</li>
                    <li>(NOTE: Excessive vertical movement of the ring in its mounting can allow the nose of larger snap hooks to become lodged behind the straight portion of the D, in which position the snap hook can often accidentally 'roll out' of the D under load.)</li>
                    <li>Cracks, especially at the intersection of the straight and curved portions</li>
                    <li>Distortion or other physical damage of the D-ring</li>
                    <li>Excessive loss of cross-section due to wear</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

              {/* Row 4: Buckles and adjusters */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  4. Are the Buckles and adjusters in good condition?
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Distortion of other physical damage Cracks and forging laps where applicable Bent tongues</li>
                    <li>Open rollers</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

              {/* Row 5: Sewing */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  5. Is the Sewing in good condition?
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Broken, cut or worn threads.</li>
                    <li>Damage or weakening of threads due to contact with heat, corrosives, solvents or mildew</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

              {/* Row 6: Ropes */}
              <div className="flex border-b border-gray-600 text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  6. Are the Ropes in good condition
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Cuts</li>
                    <li>Abrasion or fraying Stretching</li>
                    <li>Damage due to contact with heat, corrosives, solvents, etc. Deterioration due to ultraviolet light or mildew</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

              {/* Row 7: Chains */}
              <div className="flex text-xs sm:text-sm">
                <div className="w-[180px] sm:w-[230px] p-2 border-r border-gray-600 font-bold text-black bg-gray-50">
                  Are the chains in good condition?
                </div>
                <div className="flex-1 p-2 border-r border-gray-600 text-black">
                  <ul className="list-disc pl-5 space-y-0.5 text-[11px] sm:text-xs">
                    <li>Physical damage</li>
                    <li>Security of attachments to snap hooks, rings, and similar components</li>
                  </ul>
                </div>
                <div className="w-[100px] sm:w-[120px] flex items-center justify-around p-1">
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                  <input type="checkbox" className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 55 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 30 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 56 (Assessment Page 31 of 32 - Summative Assessment 2: Assessment Review) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-base sm:text-lg mb-6 text-black">
              Summative Assessment 2: Assessment Review
            </h2>

            {/* Assessment Review Table */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Row 1: Evidence Attached */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Have the following evidence been attached
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                        <span>Student identifier</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                        <span>Completed Observation Checklist</span>
                      </label>
                    </div>
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                        <span>Completed SWMS (Appendix A)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                        <span>Completed Work at Heights Rescue Plan (Appendix B)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                        <span>Completed Safety Harness Inspection Checklist (Appendix C)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Outcome */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Summative Assessment 2 outcome:
                </div>
                <div className="flex-1 p-3 text-xs sm:text-sm flex flex-wrap gap-6 sm:gap-12 items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                    <span className="font-bold">Satisfactory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                    <span className="font-bold">Not satisfactory</span>
                  </label>
                </div>
              </div>

              {/* Row 3: Feedback */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Feedback
                </div>
                <div className="flex-1 p-3 min-h-[160px] flex">
                  <textarea 
                    rows={6}
                    className="w-full h-full min-h-[140px] bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                    placeholder="Enter assessor feedback here..."
                  ></textarea>
                </div>
              </div>

              {/* Row 4: Assessor signature */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Assessor signature:
                </div>
                <div className="flex-1 p-3">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 5: Assessor name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Assessor name:
                </div>
                <div className="flex-1 p-3">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Row 6: Date */}
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-[260px] p-3 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm text-black shrink-0">
                  Date:
                </div>
                <div className="flex-1 p-3">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full sm:w-[200px] bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

            </div>

          </div>

          {/* Footer Page 56 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 31 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 57 (Assessment Page 32 of 32 - SUMMARY OF ASSESSMENT) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-4 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center border-t border-gray-400 pt-3 mb-4">
              <h2 className="font-extrabold text-sm sm:text-base text-black tracking-wide uppercase">
                SUMMARY OF ASSESSMENT
              </h2>
            </div>

            {/* Notice Box */}
            <div className="border border-black p-3 bg-white text-[11px] sm:text-xs text-black leading-relaxed mb-4">
              This form is to be completed by the assessor and used a final record of student competency being awarded by the trainer. All student submissions including any associated checklists (outlined below) are to be attached to this cover sheet before placing on the student's file. Student results are not to be entered onto the Student Database unless all relevant paperwork is completed and attached to this form.
            </div>

            {/* Summary Table */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Student Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[220px] p-2 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                  Student Name:
                </div>
                <div className="flex-1 p-2">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Final Completion Date */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[220px] p-2 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                  Final Completion Date:
                </div>
                <div className="flex-1 p-2">
                  <input type="text" placeholder="DD / MM / YYYY" className="w-full sm:w-[200px] bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Assessor Name */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="w-full sm:w-[220px] p-2 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                  Assessor Name:
                </div>
                <div className="flex-1 p-2">
                  <input type="text" className="w-full bg-transparent outline-none text-xs sm:text-sm text-black" />
                </div>
              </div>

              {/* Subheader row */}
              <div className="flex border-b border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                <div className="flex-1 p-2 border-r border-gray-600">
                  Please attach the following documentation to this form
                </div>
                <div className="w-[220px] sm:w-[260px] p-2 text-center">
                  Indicate Result
                </div>
              </div>

              {/* Assessment 1 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 flex border-b sm:border-b-0 sm:border-r border-gray-600">
                  <div className="w-[120px] sm:w-[150px] p-2 border-r border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                    Assessment 1
                  </div>
                  <div className="flex-1 p-2 font-bold text-xs sm:text-sm text-black flex items-center">
                    Written Questions
                  </div>
                </div>
                <div className="w-full sm:w-[260px] flex">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex items-center justify-center">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-black">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Satisfactory</span>
                    </label>
                  </div>
                  <div className="w-1/2 p-2 flex items-center justify-center">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-black">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Not Satisfactory</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Assessment 2 */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 flex border-b sm:border-b-0 sm:border-r border-gray-600">
                  <div className="w-[120px] sm:w-[150px] p-2 border-r border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black">
                    Assessment 2
                  </div>
                  <div className="flex-1 p-2 font-bold text-xs sm:text-sm text-black flex items-center">
                    Practical Demonstration
                  </div>
                </div>
                <div className="w-full sm:w-[260px] flex">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex items-center justify-center">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-black">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Satisfactory</span>
                    </label>
                  </div>
                  <div className="w-1/2 p-2 flex items-center justify-center">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-black">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Not Satisfactory</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Final Assessment Result */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-2 sm:border-r border-b sm:border-b-0 border-gray-600 font-bold text-xs sm:text-sm bg-[#cad6ec] text-black flex items-center">
                  Final Assessment Result for this unit
                </div>
                <div className="w-full sm:w-[260px] flex">
                  <div className="w-1/2 p-2 border-r border-gray-600 flex items-center justify-center">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-black">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Competent</span>
                    </label>
                  </div>
                  <div className="w-1/2 p-2 flex items-center justify-center">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-black">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-blue-600" />
                      <span>Not Competent</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="p-3 border-b border-gray-600 min-h-[90px]">
                <p className="font-bold text-xs sm:text-sm text-black mb-1">Comments:</p>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent outline-none resize-none text-xs sm:text-sm text-gray-800 placeholder-gray-300"
                  placeholder="Enter comments here..."
                ></textarea>
              </div>

              {/* Student Signoff */}
              <div className="flex flex-col sm:flex-row border-b border-gray-600">
                <div className="flex-1 p-3 sm:border-r border-b sm:border-b-0 border-gray-600 text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-black">Student</p>
                  <p className="text-black">My performance in this unit has been discussed and Explained to me.</p>
                </div>
                <div className="w-full sm:w-[320px] p-3 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black">Signature:</span>
                    <input type="text" className="flex-1 border-b border-black outline-none bg-transparent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black">Date:</span>
                    <input type="text" placeholder="DD / MM / YYYY" className="w-[140px] border-b border-black outline-none bg-transparent text-center" />
                  </div>
                </div>
              </div>

              {/* Assessor Signoff */}
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-3 sm:border-r border-b sm:border-b-0 border-gray-600 text-xs sm:text-sm space-y-1">
                  <p className="text-black">
                    <span className="font-bold">Assessor:</span> I hereby certify that this student has been assessed by me and that the assessment has been carried out according to the required assessment procedures.
                  </p>
                </div>
                <div className="w-full sm:w-[320px] p-3 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black">Signature:</span>
                    <input type="text" className="flex-1 border-b border-black outline-none bg-transparent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black">Date:</span>
                    <input type="text" placeholder="DD / MM / YYYY" className="w-[140px] border-b border-black outline-none bg-transparent text-center" />
                  </div>
                </div>
              </div>

            </div>

            {/* Successful completion of course */}
            <div className="mt-2 mb-6">
              <h4 className="font-bold text-xs sm:text-sm text-black border-b border-gray-400 pb-1 mb-2">
                Successful completion of course
              </h4>
              <p className="text-xs sm:text-sm text-black leading-relaxed">
                You will receive a Statement of Attainment if your assessment is successful. You may also receive a convenient card with the relevant details to keep as proof of competency.
              </p>
            </div>

          </div>

          {/* Footer Page 57 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 flex flex-col items-center text-center leading-normal">
            <p>Page 32 of 32</p>
            <p>230801</p>
            <p>Australian International Education &amp; Training &amp; Pty Ltd trading as Safety Training Academy</p>
            <p>RTO ID 45234</p>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 58 (Participant Course Completion Evaluation - Page 3 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-4 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-bold text-base sm:text-lg text-black border-b border-black pb-1 mb-3">
              Participant Course Completion Evaluation
            </h1>

            {/* Important instructions */}
            <div className="text-xs sm:text-sm text-black space-y-2 mb-4 leading-relaxed">
              <h4 className="font-bold text-xs sm:text-sm">Important instructions</h4>
              <p>Please tell us about your training. Your feedback plays an important role in developing the quality of your education. In this questionnaire, the term 'training' refers to learning experiences with your training organisation. The term 'trainer' refers to trainers, teachers, lecturers or instructors from your training organisation.</p>
              <p>Provide one response to each item on the form. Complete using a black or blue pen. Print neatly in CAPITAL letters, place a clear "X" inside each box.</p>
              <p>Leave the box blank if the statement does not apply. If you want to change your answer, fill in the entire box and mark the correct box with an 'X'.</p>
            </div>

            {/* Example Box */}
            <div className="flex items-center gap-3 text-xs sm:text-sm mb-4 font-medium">
              <span>Example:</span>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 border border-black flex items-center justify-center"></div>
                <div className="w-5 h-5 border border-black flex items-center justify-center font-bold">X</div>
                <div className="w-5 h-5 border border-black flex items-center justify-center"></div>
                <div className="w-5 h-5 border border-black flex items-center justify-center"></div>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <div className="w-5 h-5 bg-black border border-black"></div>
                <div className="w-5 h-5 border border-black flex items-center justify-center font-bold">X</div>
                <div className="w-5 h-5 border border-black flex items-center justify-center"></div>
                <div className="w-5 h-5 border border-black flex items-center justify-center"></div>
              </div>
            </div>

            {/* Note */}
            <div className="text-xs sm:text-sm text-black mb-4 leading-relaxed">
              <p><strong>Instructions:</strong> please indicate how much you agree with the following statements.</p>
              <p>This response can be completed and submitted anonymously, however this will restrict our ability to provide focused or remedial improvements in your particular situation.</p>
            </div>

            {/* Trainer & Date fields */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-gray-400 pb-2 mb-4 text-xs sm:text-sm font-bold italic text-black">
              <div className="flex items-center gap-2">
                <span>Trainer:</span>
                <input type="text" className="w-[180px] sm:w-[240px] border-b border-black outline-none bg-transparent not-italic font-normal" />
              </div>
              <div className="flex items-center gap-2">
                <span>Date :</span>
                <input type="text" placeholder="DD / MM / YYYY" className="w-[140px] border-b border-black outline-none bg-transparent not-italic font-normal text-center" />
              </div>
            </div>

            {/* Evaluation Table 1-19 */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Header */}
              <div className="flex border-b border-gray-600 font-bold text-xs sm:text-sm">
                <div className="flex-1 p-2 flex items-center">
                  Please tick the appropriate response.
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Strongly Disagree
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Disagree
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Agree
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Strongly Agree
                </div>
              </div>

              {/* Items 1 to 19 */}
              {[
                '1.   I developed the skills expected from this training.',
                '2.   I identified ways to build on my current knowledge and skills.',
                '3.   The training focused on relevant skills.',
                '4.   I developed the knowledge expected from this training.',
                '5.   The training prepared me well for work.',
                '6.   I set high standards for myself in this training.',
                '7.   The training had a good mix of theory and practice.',
                '8.   I looked for my own resources to help me learn.',
                '9.   Overall, I am satisfied with the training.',
                '10.  I would recommend the training organisation to others.',
                '11.  Training organisation staff respected my background and needs.',
                '12.  I pushed myself to understand things I found confusing.',
                '13.  Trainers had an excellent knowledge of the subject content.',
                '14.  I received useful feedback on my assessments.',
                '15.  The way I was assessed was a fair test of my skills and knowledge.',
                '16.  I learned to work with people.',
                '17.  The training was at the right level of difficulty for me.',
                '18.  The amount of work I had to do was reasonable.',
                '19.  Assessments were based on realistic activities.'
              ].map((item, idx) => (
                <div key={idx} className="flex border-b last:border-b-0 border-gray-600 text-xs sm:text-sm">
                  <div className="flex-1 p-1.5 sm:p-2 text-black flex items-center">
                    {item}
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Footer Page 58 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 border-t border-black flex flex-col items-center text-center leading-normal">
            <p className="font-bold">Australian International Education and Training Pty Ltd &nbsp;&nbsp; T/A &nbsp;&nbsp; Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 &nbsp;&nbsp; Ph:1300 976 097 &nbsp;&nbsp; email: info@Safetytrainingacademy.edu.au</p>
            <div className="w-full flex justify-between pt-1">
              <span>Issue Date: 230831</span>
              <span>Page 3 of 4</span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= PAGE 59 (Participant Course Completion Evaluation - Page 4 of 4) ======================= */}
      <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 font-sans text-black">
        <div className="bg-white w-full max-w-[850px] shadow-lg p-4 sm:p-12 relative flex flex-col min-h-[1100px] border border-gray-800">
          
          <div className="flex-1 flex flex-col mt-4">
            
            {/* Header */}
            <div className="w-full flex items-center justify-center mb-4 relative">
              <div className="sm:absolute sm:left-0 top-0 mb-2 sm:mb-0">
                <img src={logoImage} alt="Safety Training Academy Logo" className="w-[100px] sm:w-[130px] h-auto object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base text-black">Safety Training Academy</p>
                <p className="font-bold text-xs sm:text-sm text-black">RTO ID 45234</p>
              </div>
            </div>

            {/* Evaluation Table 20-40 */}
            <div className="border border-gray-600 bg-white mb-6">
              
              {/* Header */}
              <div className="flex border-b border-gray-600 font-bold text-xs sm:text-sm">
                <div className="flex-1 p-2"></div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Strongly Disagree
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Disagree
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Agree
                </div>
                <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 text-center [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-xs flex items-center justify-center">
                  Strongly Agree
                </div>
              </div>

              {/* Items 20 to 35 (White) */}
              {[
                '20.  It was always easy to know the standards expected.',
                '21.  Training facilities and materials were in good condition.',
                '22.  I usually had a clear idea of what was expected of me.',
                '23.  Trainers explained things clearly.',
                '24.  The training organisation had a range of services to support learners.',
                '25.  I learned to plan and manage my work.',
                '26.  The training used up-to-date equipment, facilities and materials.',
                '27.  I approached trainers if I needed help.',
                '28.  Trainers made the subject as interesting as possible.',
                '29.  I would recommend the training to others.',
                '30.  The training organisation gave appropriate recognition of existing knowledge and skills.',
                '31.  Training resources were available when I needed them.',
                '32.  I was given enough material to keep up my interest.',
                '33.  The training was flexible enough to meet my needs.',
                '34.  Trainers encouraged learners to ask questions.',
                '35.  Trainers made it clear right from the start what they expected from me.'
              ].map((item, idx) => (
                <div key={idx} className="flex border-b border-gray-600 text-xs sm:text-sm">
                  <div className="flex-1 p-1.5 sm:p-2 text-black flex items-center">
                    {item}
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}

              {/* Items 36 to 40 (Gray Shaded & Italic) */}
              {[
                '36.  The RTO supported my efforts to learn and complete this qualification',
                '37.  The RTO\'s pre enrolment information was clear and easy to understand',
                '38.  The enrolment process was quick and easy to complete',
                '39.  The RTO accommodated my special needs',
                '40.  The RTO was receptive to all my enquires'
              ].map((item, idx) => (
                <div key={idx} className="flex border-b last:border-b-0 border-gray-600 text-xs sm:text-sm bg-[#e2e8f0]">
                  <div className="flex-1 p-1.5 sm:p-2 text-black italic font-medium flex items-center">
                    {item}
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-[45px] sm:w-[50px] p-1 border-l border-gray-600 flex items-center justify-center">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}

            </div>

            {/* Additional Comments Section */}
            <div className="space-y-4 mb-6 text-xs sm:text-sm text-black">
              <div>
                <p className="mb-1 font-medium">Please use this space to make any additional comments regarding the Training and Assessment processes:</p>
                <textarea 
                  rows={2}
                  className="w-full bg-transparent border-b border-dotted border-black outline-none resize-none text-xs sm:text-sm placeholder-gray-300"
                  placeholder="Enter comments here..."
                ></textarea>
              </div>

              <div>
                <p className="mb-1 font-medium">And comments on client services:</p>
                <textarea 
                  rows={2}
                  className="w-full bg-transparent border-b border-dotted border-black outline-none resize-none text-xs sm:text-sm placeholder-gray-300"
                  placeholder="Enter comments here..."
                ></textarea>
              </div>
            </div>

          </div>

          {/* Footer Page 59 */}
          <div className="text-[9px] sm:text-[10px] text-black mt-auto pt-6 border-t border-black flex flex-col items-center text-center leading-normal">
            <p className="font-bold">Australian International Education and Training Pty Ltd &nbsp;&nbsp; T/A &nbsp;&nbsp; Safety Training Academy</p>
            <p>3/14-16 Marjorie Street Sefton NSW 2162 &nbsp;&nbsp; Ph:1300 976 097 &nbsp;&nbsp; email: info@Safetytrainingacademy.edu.au</p>
            <div className="w-full flex justify-between pt-1">
              <span>Issue Date: 230831</span>
              <span>Page 4 of 4</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}








