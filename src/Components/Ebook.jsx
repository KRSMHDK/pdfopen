import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as ReactPdfPage } from 'react-pdf';
import { useParams } from 'react-router-dom';

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
  let params = useParams();
  const book = useRef();

  useEffect(() => {
    window.addEventListener(
      'keydown',
      (event) => {
        // space
        if (event.key === 'ArrowRight') {
          book.current.pageFlip().flipNext();
        }
        if (event.key === 'ArrowLeft') {
          book.current.pageFlip().flipPrev();
        }
      },
      false,
    );
  }, []);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(351);
  const [isLoading, setLoading] = useState(true);
  const [pageNumArr, setpageNumArr] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    let arr = [];
    for (let i = 1; i <= numPages; i++) {
      arr.push(i);
    }
    setpageNumArr(arr);
    setLoading(false);
  }

  return (
    <Document file={`/${params.ebookid}`} onLoadSuccess={onDocumentLoadSuccess}>
      <HTMLFlipBook ref={book} width={width} height={height}>
        {pageNumArr.map((num) => (
          <Page pageNumber={num} />
        ))}
      </HTMLFlipBook>
    </Document>
  );
}

export default Ebook;
