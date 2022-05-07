import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MainPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
  }
  return (
    <div>
      <Document file="python.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      <button onClick={() => setPageNumber(pageNumber - 1)()}>Previous</button>
      <button onClick={() => setPageNumber(300)}>Page 300</button>
    </div>
  );
}

export default MainPage;
