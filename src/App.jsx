import './App.css'

import { StyledGreyBox } from "./style";

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
        <StyledGreyBox
          sx={{
            whiteSpace: "pre-line",
            textAlign: "left",
          }}>
          <strong>{inquiryHeader}</strong>
          {"\n"}
          {inquiryPart.replace(inquiryHeader, "").trim()}
          
          {resolutionPart && (
            <>
              {"\n\n"}
              <strong>{resolutionHeader}</strong>
              {"\n"}
              {resolutionPart.trim()}
            </>
          )}
        </StyledGreyBox>
      </div>
    )
}

export default App
