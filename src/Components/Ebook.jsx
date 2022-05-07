import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as ReactPdfPage } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 700;
const height = 1280;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

function Ebook() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const pageNumArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    for (let i = 1; i <= numPages; i++) {
      pageNumArr.push(i);
    }
    setLoading(false);

  }


  return (
    <Document file="python.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      <HTMLFlipBook width={width} height={height}>
        {pageNumArr.map((num) => (
          <Page pageNumber={num} />
        ))}
      </HTMLFlipBook>
    </Document>
  );
}

export default Ebook;
