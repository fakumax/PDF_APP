// DocumentoPDF.js
//import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Crear estilos para el documento PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
  },
  text: {
    margin: 10,
    fontSize: 12,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
  },
});

// Componente del documento PDF
const DocumentoPDF = ({ orientation, documents }: any) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>Índice</Text>
      {documents.map((doc: any, index: number) => (
        <Link
          key={index}
          //style={styles.indexItem}
          src={`#document-${index}`}
        >
          {doc.title}
        </Link>
      ))}
    </Page>

    {documents.map((doc: any, index: number) => (
      <Page key={index} size="A4" orientation={orientation} style={styles.page}>
        <Text style={styles.header}>ID: {doc.id}</Text>
        <Text style={styles.header} id={`document-${index}`}>
          {doc.title}
        </Text>
        <View style={styles.section}>
          <Text style={styles.subtitle}>
            <Text style={styles.bold}>Compañías:</Text> {doc.companies}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Proyecto:</Text> {doc.project}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Estado:</Text> {doc.status}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Objeto:</Text> {doc.object}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Contexto:</Text> {doc.context}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Justificación:</Text> {doc.justification}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Evaluación Técnica / Económica:</Text>{" "}
            {doc.evaluation}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Proveedores:</Text>
            {doc.providers.map((provider: any, idx: number) => (
              <Text key={idx} style={styles.text}>
                {provider.name} - {provider.contractStatus}
              </Text>
            ))}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Plazo de Servicio:</Text>{" "}
            {doc.serviceTerm}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Monto Total:</Text> {doc.totalAmount}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Responsables:</Text> {doc.responsible}
          </Text>
        </View>
      </Page>
    ))}
  </Document>
);

export default DocumentoPDF;
