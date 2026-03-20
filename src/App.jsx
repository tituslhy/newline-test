import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const summary = 
    "Inquiry Details (I): \n" + 
    "- Reporting unknown PayNow transactions \n" + 
    "- Received $31 from unknown person\n\n" + 
    "Resolution Details (R): \n" +
    "- Identity verification completed\n" + 
    "- Customer transferred to banking line";

  const resolutionHeader = "Resolution Details (R):";
  const inquiryHeader = "Inquiry Details (I):";
  const [inquiryPart, resolutionPart] = summary.split(resolutionHeader);

    return (
      <div style = {{ padding: 20, fontFamily: "Arial sans-serif"}}>
        <h3>Generated Summary</h3>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 12,
            borderRadius: 6,
            whiteSpace: "pre-line",
            textAlign: "left",
          }}
          >
            <strong>{inquiryHeader}</strong>
            {"\n"}
            {inquiryPart.replace(inquiryHeader, "").trim()}
            {resolutionPart &&
              <>
                {"\n\n"}
                <strong>{resolutionHeader}</strong>
                {"\n"}
                {resolutionPart.trim()}
              </>
            }
          </div>
      </div>
    )
}

export default App
