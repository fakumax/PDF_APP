import { useState } from "react";
import "./App.css";
import { useDocumentPDF } from "./hook/useDocumentPDF";

const App = () => {
  const [orientation, setOrientation] = useState("portrait");
  const documentProps = [
    {
      id: 999,
      title: "Suministro de Repuestos para Maquinaria Esencial",
      companies: "TECHFLOW PUMPS LIMITED, TECHFLOW INDUSTRIAL LIMITED",
      project: "Mejora Continua; Adjudicación Directa;",
      status: "Pendiente de Ejecución",
      object:
        "Solicitud de autorización para la adquisición exclusiva de repuestos para el mantenimiento de Bombas Serie X y Bombas Serie Y de maquinaria esencial al proveedor Techflow Pumps Limited, seleccionado por su propuesta económica ventajosa con un periodo de entrega de 18 semanas y un costo total de 500,000 USD.",
      context:
        "Se requiere la adquisición de repuestos de calidad certificada para garantizar el funcionamiento óptimo de la maquinaria. Inicialmente se consideró a Global Pumps Corp., sin embargo, la negociación directa con el fabricante resultó en mejores condiciones de compra. El acuerdo final incluye pagos fraccionados, con un 50% al realizar el pedido y el 50% restante a la confirmación del envío.",
      justification:
        "Techflow es el fabricante original del equipo (OEM), por lo que es la única fuente confiable para adquirir los componentes necesarios sin comprometer la calidad.",
      evaluation:
        "El análisis de costos muestra una ventaja económica significativa al elegir a Techflow, incluyendo los gastos logísticos previstos.",
      providers: [
        {
          name: "Techflow Pumps Limited",
          contractStatus:
            "Contrato pendiente; Evaluaciones técnicas y económicas no aplicables.",
        },
        {
          name: "Techflow Industrial Limited",
          contractStatus:
            "Contrato pendiente; Evaluaciones técnicas y económicas no aplicables.",
        },
      ],
      serviceTerm: "01-MAYO-2024 a 30-NOVIEMBRE-2024",
      totalAmount: "500,000 USD",
      responsible: "Rivera, Marcos (Usuario), Duran, Ana (PSCM)",
    },
    {
      id: 1001,
      title: "Suministro de Componentes para Sistemas Hidráulicos",
      companies: "HYDROFLOW SYSTEMS INC, HYDROTECH SOLUTIONS LTD",
      project: "Optimización Operativa; Contratación Selectiva;",
      status: "En Proceso de Aprobación",
      object:
        "Autorización solicitada para adquirir componentes exclusivos para válvulas y actuadores en sistemas hidráulicos de Hydroflow Systems Inc, tras recibir una propuesta económica competitiva por un período de 12 semanas y un costo total de 350,000 USD.",
      context:
        "Es imperativo asegurar la adquisición de componentes de alto rendimiento para el mantenimiento continuo de los sistemas. Se consultó inicialmente con Pneumatic Systems Corp., pero la oferta directa de Hydroflow resultó ser más ventajosa. El trato concluye con un pago inicial del 70% y el 30% al recibir los componentes.",
      justification:
        "Hydroflow Systems Inc es el fabricante original, ofreciendo así garantías de calidad y rendimiento superiores para los componentes críticos.",
      evaluation:
        "La evaluación de costos confirma una reducción significativa de gastos operativos al elegir Hydroflow, sin contar los beneficios a largo plazo en mantenimiento.",
      providers: [
        {
          name: "Hydroflow Systems Inc",
          contractStatus: "Contrato en revisión; Evaluaciones pendientes.",
        },
        {
          name: "Hydrotech Solutions Ltd",
          contractStatus: "Contrato en revisión; Evaluaciones pendientes.",
        },
      ],
      serviceTerm: "20-JUNIO-2024 a 20-DICIEMBRE-2024",
      totalAmount: "350,000 USD",
      responsible: "Gomez, Laura (Usuario), Medina, Carlos (PSCM)",
    },
    {
      id: 1002,
      title: "Adquisición de Equipos de Bombeo Avanzados",
      companies: "ADVANCED PUMPING SOLUTIONS INC, PUMPTECH INTERNATIONAL",
      project: "Renovación de Infraestructura; Licitación Abierta;",
      status: "Finalizando Detalles",
      object:
        "Propuesta para comprar equipos de bombeo especializados a Advanced Pumping Solutions Inc, con una propuesta que incluye entrega en 24 semanas y un costo total de 780,000 USD.",
      context:
        "La renovación de los sistemas de bombeo es crítica para mejorar la eficiencia operativa. Fue esencial comparar ofertas, y la de Advanced Pumping fue la más adecuada. Se acordó un plan de pago en dos partes: 40% al pedido y 60% a la entrega.",
      justification:
        "Advanced Pumping Solutions Inc, al ser el fabricante, ofrece la mejor tecnología disponible y un soporte post-venta inigualable.",
      evaluation:
        "Los análisis técnicos y económicos destacan las mejoras en eficiencia y reducción de costos que representan los equipos de Advanced Pumping.",
      providers: [
        {
          name: "Advanced Pumping Solutions Inc",
          contractStatus:
            "Preparando contrato; Evaluaciones completadas con éxito.",
        },
        {
          name: "Pumptech International",
          contractStatus:
            "Consultas en curso; Detalles contractuales pendientes.",
        },
      ],
      serviceTerm: "15-ABRIL-2024 a 15-OCTUBRE-2024",
      totalAmount: "780,000 USD",
      responsible: "Sánchez, Roberto (Usuario), Ortiz, Julia (PSCM)",
    },
  ];

  const renderDownloadLink = useDocumentPDF(documentProps, orientation);

  return (
    <>
      <div>
        <h1>ID: 999</h1>
        <h2>Suministro de Repuestos para Maquinaria Esencial</h2>
        <p>
          <strong>Compañías:</strong> TECHFLOW PUMPS LIMITED, TECHFLOW
          INDUSTRIAL LIMITED
        </p>
        <p>
          <strong>Proyecto:</strong> Mejora Continua; Adjudicación Directa;
        </p>
        <p>
          <strong>Estado:</strong> Pendiente de Ejecución
        </p>
        <h3>Objeto:</h3>
        <p>
          Solicitud de autorización para la adquisición exclusiva de repuestos
          para el mantenimiento de Bombas Serie X y Bombas Serie Y de maquinaria
          esencial al proveedor Techflow Pumps Limited, seleccionado por su
          propuesta económica ventajosa con un periodo de entrega de 18 semanas
          y un costo total de 500,000 USD.
        </p>
        <h3>Contexto:</h3>
        <p>
          Se requiere la adquisición de repuestos de calidad certificada para
          garantizar el funcionamiento óptimo de la maquinaria. Inicialmente se
          consideró a Global Pumps Corp., sin embargo, la negociación directa
          con el fabricante resultó en mejores condiciones de compra.
        </p>
        <p>
          El acuerdo final incluye pagos fraccionados, con un 50% al realizar el
          pedido y el 50% restante a la confirmación del envío.
        </p>
        <h3>Justificación:</h3>
        <p>
          Techflow es el fabricante original del equipo (OEM), por lo que es la
          única fuente confiable para adquirir los componentes necesarios sin
          comprometer la calidad.
        </p>
        <h3>Evaluación Técnica / Económica:</h3>
        <p>
          El análisis de costos muestra una ventaja económica significativa al
          elegir a Techflow, incluyendo los gastos logísticos previstos.
        </p>
        <h3>Proveedores:</h3>
        <p>
          <strong>Techflow Pumps Limited</strong> - Contrato pendiente;
          Evaluaciones técnicas y económicas no aplicables.
        </p>
        <p>
          <strong>Techflow Industrial Limited</strong> - Contrato pendiente;
          Evaluaciones técnicas y económicas no aplicables.
        </p>
        <p>
          <strong>Plazo de Servicio:</strong> 01-MAYO-2024 a 30-NOVIEMBRE-2024
        </p>
        <p>
          <strong>Monto Total:</strong> 500,000 USD
        </p>
        <p>
          <strong>Responsables:</strong> Rivera, Marcos (Usuario), Duran, Ana
          (PSCM)
        </p>
      </div>
      <div>
        <h1>ID: 1001</h1>
        <h2>Suministro de Componentes para Sistemas Hidráulicos</h2>
        <p>
          <strong>Compañías:</strong> HYDROFLOW SYSTEMS INC, HYDROTECH SOLUTIONS
          LTD
        </p>
        <p>
          <strong>Proyecto:</strong> Optimización Operativa; Contratación
          Selectiva;
        </p>
        <p>
          <strong>Estado:</strong> En Proceso de Aprobación
        </p>
        <h3>Objeto:</h3>
        <p>
          Autorización solicitada para adquirir componentes exclusivos para
          válvulas y actuadores en sistemas hidráulicos de Hydroflow Systems
          Inc, tras recibir una propuesta económica competitiva por un período
          de 12 semanas y un costo total de 350,000 USD.
        </p>
        <h3>Contexto:</h3>
        <p>
          Es imperativo asegurar la adquisición de componentes de alto
          rendimiento para el mantenimiento continuo de los sistemas. Se
          consultó inicialmente con Pneumatic Systems Corp., pero la oferta
          directa de Hydroflow resultó ser más ventajosa.
        </p>
        <p>
          El trato concluye con un pago inicial del 70% y el 30% al recibir los
          componentes.
        </p>
        <h3>Justificación:</h3>
        <p>
          Hydroflow Systems Inc es el fabricante original, ofreciendo así
          garantías de calidad y rendimiento superiores para los componentes
          críticos.
        </p>
        <h3>Evaluación Técnica / Económica:</h3>
        <p>
          La evaluación de costos confirma una reducción significativa de gastos
          operativos al elegir Hydroflow, sin contar los beneficios a largo
          plazo en mantenimiento.
        </p>
        <h3>Proveedores:</h3>
        <p>
          <strong>Hydroflow Systems Inc</strong> - Contrato en revisión;
          Evaluaciones pendientes.
        </p>
        <p>
          <strong>Hydrotech Solutions Ltd</strong> - Contrato en revisión;
          Evaluaciones pendientes.
        </p>
        <p>
          <strong>Plazo de Servicio:</strong> 20-JUNIO-2024 a 20-DICIEMBRE-2024
        </p>
        <p>
          <strong>Monto Total:</strong> 350,000 USD
        </p>
        <p>
          <strong>Responsables:</strong> Gomez, Laura (Usuario), Medina, Carlos
          (PSCM)
        </p>
      </div>
      <div>
        <h1>ID: 1002</h1>
        <h2>Adquisición de Equipos de Bombeo Avanzados</h2>
        <p>
          <strong>Compañías:</strong> ADVANCED PUMPING SOLUTIONS INC, PUMPTECH
          INTERNATIONAL
        </p>
        <p>
          <strong>Proyecto:</strong> Renovación de Infraestructura; Licitación
          Abierta;
        </p>
        <p>
          <strong>Estado:</strong> Finalizando Detalles
        </p>
        <h3>Objeto:</h3>
        <p>
          Propuesta para comprar equipos de bombeo especializados a Advanced
          Pumping Solutions Inc, con una propuesta que incluye entrega en 24
          semanas y un costo total de 780,000 USD.
        </p>
        <h3>Contexto:</h3>
        <p>
          La renovación de los sistemas de bombeo es crítica para mejorar la
          eficiencia operativa. Fue esencial comparar ofertas, y la de Advanced
          Pumping fue la más adecuada.
        </p>
        <p>
          Se acordó un plan de pago en dos partes: 40% al pedido y 60% a la
          entrega.
        </p>
        <h3>Justificación:</h3>
        <p>
          Advanced Pumping Solutions Inc, al ser el fabricante, ofrece la mejor
          tecnología disponible y un soporte post-venta inigualable.
        </p>
        <h3>Evaluación Técnica / Económica:</h3>
        <p>
          Los análisis técnicos y económicos destacan las mejoras en eficiencia
          y reducción de costos que representan los equipos de Advanced Pumping.
        </p>
        <h3>Proveedores:</h3>
        <p>
          <strong>Advanced Pumping Solutions Inc</strong> - Preparando contrato;
          Evaluaciones completadas con éxito.
        </p>
        <p>
          <strong>Pumptech International</strong> - Consultas en curso; Detalles
          contractuales pendientes.
        </p>
        <p>
          <strong>Plazo de Servicio:</strong> 15-ABRIL-2024 a 15-OCTUBRE-2024
        </p>
        <p>
          <strong>Monto Total:</strong> 780,000 USD
        </p>
        <p>
          <strong>Responsables:</strong> Sánchez, Roberto (Usuario), Ortiz,
          Julia (PSCM)
        </p>
      </div>
      <select
        onChange={(e) => setOrientation(e.target.value)}
        value={orientation}
      >
        <option value="portrait">Vertical</option>
        <option value="landscape">Horizontal</option>
      </select>
      {renderDownloadLink()}
    </>
  );
};

export { App };
