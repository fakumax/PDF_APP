import { PDFDownloadLink } from "@react-pdf/renderer";
import DocumentoPDF from "../DocumentoPDF";

const useDocumentPDF = (documentProps: any, orientation: any) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const filename = `Report_${currentDate}.pdf`;

  const document = (
    <DocumentoPDF documents={documentProps} orientation={orientation} />
  );

  const renderDownloadLink = () => (
    <PDFDownloadLink document={document} fileName={filename}>
      {({ loading }) => (
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Cargando documento..." : "Imprimir"}
        </button>
      )}
    </PDFDownloadLink>
  );

  return renderDownloadLink;
};

export { useDocumentPDF };
