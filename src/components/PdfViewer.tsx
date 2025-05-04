import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Props {
  file: string;
}

export default function PdfViewer({ file }: Props) {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="w-full"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={window.innerWidth > 768 ? 800 : 320} />
        ))}
      </Document>
    </div>
  );
}
