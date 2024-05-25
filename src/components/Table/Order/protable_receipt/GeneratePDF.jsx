// GeneratePDF.js
import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 2,
  },
});

const GeneratePDF = ({ receiptDetails , onClose }) => {
  const [numPages, setNumPages] = useState(null);

  const handleLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center  ">
      <div className="bg-gray-300 p-4 rounded shadow-lg max-w-md w-full relative">
      <button
          className="absolute top-2 right-2 text-black text-3xl mr-2"
          onClick={onClose}
        >
          &times;
        </button>
     
      <PDFViewer width="100%" height="400" className='mt-8'  >
        <Document>
          <Page style={styles.page}>
              <View key={receiptDetails.id} style={styles.section}>
                <Text style={styles.header}>Receipt</Text>
                <Text style={styles.subheader}>Customer Name: {receiptDetails.customerName}</Text>
                <Text style={styles.text}>Address: {receiptDetails.address}</Text>
                <Text style={styles.text}>Phone: {receiptDetails.phone}</Text>
                <Text style={styles.text}>Email: {receiptDetails.email}</Text>
                <Text style={styles.text}>Items:</Text>
                {receiptDetails.items.map((item) => (
                  <Text key={item.id} style={styles.text}>
                    {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                  </Text>
                ))}
                <Text style={styles.text}>Total Item Price: ${receiptDetails.totalItemPrice}</Text>
                <Text style={styles.text}>Payment Method: {receiptDetails.paymentMethod}</Text>
                <Text style={styles.text}>Delivery Charge: ${receiptDetails.deliveryCharge}</Text>
                <Text style={styles.text}>Total: ${receiptDetails.total}</Text>
                <Text style={styles.text}>Date: {receiptDetails.date}</Text>
                <Text style={styles.text}>Tracking Number: {receiptDetails.trackingNumber}</Text>
                <Text style={styles.text}>Status: {receiptDetails.status}</Text>
                {/* Display image here if available */}
                {receiptDetails.image && <img src={receiptDetails.image} />}
                <hr />
              </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
    </div>
  );
};

export default GeneratePDF;
