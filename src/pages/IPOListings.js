import React from 'react';
import '../styles/styles.css';
import Navbar from '../components/navbar';


const IPOListings = () => {
  return (
    <div>
        <Navbar />
      <h1 className="page-title">IPO Listings</h1>
      <table>
    <thead>
        <tr>
            <th>Issuer Company</th>
            <th>Open Date</th>
            <th>Close Date</th>
            <th>Listing Date</th>
            <th>Issue Price (Rs)</th>
            <th>Issue Size (Rs Cr.)</th>
            <th>Lot Size</th>
            <th>Exchange</th>
            <th>Compare</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Paramount Dye Tec Limited IPO</td>
            <td>Sep 30, 2024</td>
            <td>Oct 03, 2024</td>
            <td>Oct 08, 2024</td>
            <td>111.00 to 117.00</td>
            <td>28.43</td>
            <td>1,200</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Subam Papers Limited IPO</td>
            <td>Sep 30, 2024</td>
            <td>Oct 03, 2024</td>
            <td>Oct 08, 2024</td>
            <td>144.00 to 152.00</td>
            <td>93.70</td>
            <td>800</td>
            <td>BSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Saj Hotels Limited IPO</td>
            <td>Sep 27, 2024</td>
            <td>Oct 01, 2024</td>
            <td>Oct 07, 2024</td>
            <td>65.00</td>
            <td>27.63</td>
            <td>2,000</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>HVAX Technologies Limited IPO</td>
            <td>Sep 27, 2024</td>
            <td>Oct 01, 2024</td>
            <td>Oct 07, 2024</td>
            <td>435.00 to 458.00</td>
            <td>33.53</td>
            <td>300</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Divyadhan Recycling Industries Limited IPO</td>
            <td>Sep 26, 2024</td>
            <td>Sep 30, 2024</td>
            <td>Oct 04, 2024</td>
            <td>60.00 to 64.00</td>
            <td>24.17</td>
            <td>2,000</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Sahasra Electronics Solutions Limited IPO</td>
            <td>Sep 26, 2024</td>
            <td>Sep 30, 2024</td>
            <td>Oct 04, 2024</td>
            <td>269.00 to 283.00</td>
            <td>186.16</td>
            <td>400</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Forge Auto International Limited IPO</td>
            <td>Sep 26, 2024</td>
            <td>Sep 30, 2024</td>
            <td>Oct 04, 2024</td>
            <td>102.00 to 108.00</td>
            <td>31.10</td>
            <td>1,200</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Diffusion Engineers Limited IPO</td>
            <td>Sep 26, 2024</td>
            <td>Sep 30, 2024</td>
            <td>Oct 04, 2024</td>
            <td>159.00 to 168.00</td>
            <td>158.00</td>
            <td>88</td>
            <td>BSE, NSE</td>
            <td></td>
        </tr>
        <tr>
            <td>Nexxus Petro Industries Limited IPO</td>
            <td>Sep 26, 2024</td>
            <td>Sep 30, 2024</td>
            <td>Oct 04, 2024</td>
            <td>105.00</td>
            <td>19.43</td>
            <td>1,200</td>
            <td>BSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>KRN Heat Exchanger and Refrigeration Limited IPO</td>
            <td>Sep 25, 2024</td>
            <td>Sep 27, 2024</td>
            <td>Oct 03, 2024</td>
            <td>220.00</td>
            <td>341.95</td>
            <td>65</td>
            <td>BSE, NSE</td>
            <td></td>
        </tr>
        <tr>
            <td>TechEra Engineering Limited IPO</td>
            <td>Sep 25, 2024</td>
            <td>Sep 27, 2024</td>
            <td>Oct 03, 2024</td>
            <td>82.00</td>
            <td>35.90</td>
            <td>1,600</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Unilex Colours and Chemicals Limited IPO</td>
            <td>Sep 25, 2024</td>
            <td>Sep 27, 2024</td>
            <td>Oct 03, 2024</td>
            <td>82.00 to 87.00</td>
            <td>31.32</td>
            <td>1,600</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Thinking Hats Entertainment Solutions Limited IPO</td>
            <td>Sep 25, 2024</td>
            <td>Sep 27, 2024</td>
            <td>Oct 03, 2024</td>
            <td>44.00</td>
            <td>15.09</td>
            <td>3,000</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>WOL 3D India Limited IPO</td>
            <td>Sep 23, 2024</td>
            <td>Sep 25, 2024</td>
            <td>Sep 30, 2024</td>
            <td>150.00</td>
            <td>25.56</td>
            <td>1,000</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Rappid Valves (India) Limited IPO</td>
            <td>Sep 23, 2024</td>
            <td>Sep 25, 2024</td>
            <td>Sep 30, 2024</td>
            <td>222.00</td>
            <td>30.41</td>
            <td>600</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Manba Finance Limited IPO</td>
            <td>Sep 23, 2024</td>
            <td>Sep 25, 2024</td>
            <td>Sep 30, 2024</td>
            <td>120.00</td>
            <td>150.84</td>
            <td>125</td>
            <td>BSE, NSE</td>
            <td></td>
        </tr>
        <tr>
            <td>BikeWo GreenTech Limited IPO</td>
            <td>Sep 20, 2024</td>
            <td>Sep 24, 2024</td>
            <td>Sep 27, 2024</td>
            <td>62.00</td>
            <td>24.09</td>
            <td>2,000</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>SD Retail Limited IPO</td>
            <td>Sep 20, 2024</td>
            <td>Sep 24, 2024</td>
            <td>Sep 27, 2024</td>
            <td>153.00</td>
            <td>50.00</td>
            <td>500</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
        <tr>
            <td>Websynergize Technologies Limited IPO</td>
            <td>Sep 20, 2024</td>
            <td>Sep 24, 2024</td>
            <td>Sep 27, 2024</td>
            <td>144.00</td>
            <td>30.07</td>
            <td>1,600</td>
            <td>NSE SME</td>
            <td></td>
        </tr>
    </tbody>
</table>

    </div>
  );
};

export default IPOListings;
