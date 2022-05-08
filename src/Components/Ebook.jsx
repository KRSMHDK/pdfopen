import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as ReactPdfPage } from 'react-pdf';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Page = React.forwardRef(({ pageNumber, width }, ref) => {
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

  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(800);
  const [size, setSize] = useState('Normal');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumArr, setpageNumArr] = useState([]);

  function handleMoveTo50() {
    book.current.pageFlip().flip(50);
  }

  function onDocumentLoadSuccess({ numPages }) {
    window.scrollTo(0, 0);
    setNumPages(numPages);
    let arr = [];
    for (let i = 1; i <= numPages; i++) {
      arr.push(i);
    }
    setpageNumArr(arr);
  }

  const handleSizeChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === 'Small') {
      setWidth(300);
      setHeight(500);
      setSize('Small');
    } else if (event.target.value === 'Normal') {
      setWidth(500);
      setHeight(800);
      setSize('Normal');
    } else {
      setWidth(800);
      setHeight(1200);
      setSize('Bigger');
    }
  };
  return (
    <>
      <div style={{ height: { height } }}>
        <Document
          file={`/${params.ebookid}`}
          loading={<CircularProgress />}
          height={height}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <HTMLFlipBook
            onFlip={(e) => setPageNumber(e.data)}
            ref={book}
            width={width}
            height={height}
          >
            {pageNumArr.map((num) => (
              <Page pageNumber={num} width={width} />
            ))}
          </HTMLFlipBook>
        </Document>
      </div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={handleSizeChange}
        >
          <MenuItem value={'Small'}>Small</MenuItem>
          <MenuItem value={'Normal'}>Normal</MenuItem>
          <MenuItem value={'Bigger'}>Bigger</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleMoveTo50} variant="contained">
        Move to page 50
      </Button>
      <p>
        {pageNumber} of {numPages}
      </p>
    </>
  );
}

export default Ebook;
