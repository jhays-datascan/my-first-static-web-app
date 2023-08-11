import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import AppRoutes from './AppRoutes';
import { Layout } from './Layout';


// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt9QHFqVkJrVE5AaV1CX2BZe1lyQ2lbfk4QCV5EYF5SRHFfRFxjTHlWc0ViUHg=;Mgo+DSMBPh8sVXJ2S0d+X1VPfkBGQmFJfFBmQGldeVRydUUmHVdTRHRcQlpjT39Tc0JmXH9dc3M=;ORg4AjUWIQA/Gnt2V1hhQlJAfVddWXxLflF1VWZTe1h6dlRWACFaRnZdQV1kSXhSdkBkXHpedHxT;MjU1MDU2NkAzMjMyMmUzMDJlMzBoeFc0eTVScmpFTFNMNlFHUDNYOWIrRzk5Z2hwWXYxZkZjMzEyTXdyUTFnPQ==;MjU1MDU2N0AzMjMyMmUzMDJlMzBKSCtwcGxwTTlBV21MMXQ2T254cGVPZytlY3lwSzY1OXE0MjNSYWVYeGZvPQ==;NRAiBiAaIQQuGjN/V0R+XU9HclRKQmdWfFN0RnNcdVp2fldHcDwsT3RfQF5jTn5Vd0VmXnpbcXRdQQ==;MjU1MDU2OUAzMjMyMmUzMDJlMzBGVEd6RlBzYWViNGVBNWZoSU9pQ2FwL0JVOUNDZGdUNFVSdWh2dm1ITlZrPQ==;MjU1MDU3MEAzMjMyMmUzMDJlMzBsUFA4V0VMSXdjaGxhYi9FbXoyL2tFaUVmYUZFUW1KMlY4YzM1aFdScDNnPQ==;Mgo+DSMBMAY9C3t2V1hhQlJAfVddWXxLflF1VWZTe1h6dlRWACFaRnZdQV1kSXhSdkBkXHpfdndS;MjU1MDU3MkAzMjMyMmUzMDJlMzBWTmFPVXQzNEpGMitBcnhwWERSd0wwb3crdDNwejA1Y3ZSVE1semVMYmlNPQ==;MjU1MDU3M0AzMjMyMmUzMDJlMzBUUUE1dzNLQzNhTDlyQmVSNllNNis2Ykcycklhc2VtMkpXMlZnejVoV3BnPQ==;MjU1MDU3NEAzMjMyMmUzMDJlMzBGVEd6RlBzYWViNGVBNWZoSU9pQ2FwL0JVOUNDZGdUNFVSdWh2dm1ITlZrPQ==');

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
